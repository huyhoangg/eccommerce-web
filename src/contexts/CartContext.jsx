import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext({
  products: [],
  getQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  removeAllCart: () => {},
  getTotalPrice: () => {},
  getTotalQuantity: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUserCart() {
      if (cartProducts.length == 0 && userInfo) {
        const { data } = await axios.get("/v1/user/getUserCart");
        setCartProducts(data);
      } else {
        setCartProducts([]);
      }
    }
    fetchUserCart();
  }, [userInfo]);

  function getQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.productId === id
    )?.quantity;

    if (!quantity) {
      return 0;
    }

    return quantity;
  }

  async function addToCart(id, productDetail) {
    const quantity = getQuantity(id);
    if (!quantity) {
      setCartProducts([
        ...cartProducts,
        {
          productId: id,
          productDetail,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.productId === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
    await axios.post(`/v1/user/addToCart`, { productId: id });
  }

  async function removeAllCart(id) {
    const newCart = cartProducts.filter((product) => {
      return product.productId != id;
    });
    setCartProducts(newCart);
    await axios.post(`/v1/user/removeAllFromCart`, { productId: id });
  }

  async function removeFromCart(id) {
    const quantity = getQuantity(id);
    if (quantity === 1) {
      removeAllCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.productId === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
      await axios.post(`/v1/user/removeOneFromCart`, { productId: id });
    }
  }

  function getTotalPrice() {
    return cartProducts.reduce(
      (totalPrice, product) =>
        totalPrice + product.productDetail.price * product.quantity,
      0
    );
  }

  function getTotalQuantity() {
    return cartProducts.reduce(
      (totalProduct, product) => totalProduct + product.quantity,
      0
    );
  }

  const contextValue = {
    products: cartProducts,
    getQuantity,
    addToCart,
    removeFromCart,
    removeAllCart,
    getTotalPrice,
    getTotalQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
