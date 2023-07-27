import { createContext, useState } from "react";

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

  function getQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (!quantity) {
      return 0;
    }

    return quantity;
  }

  function addToCart(id, productDetail) {
    const quantity = getQuantity(id);

    if (!quantity) {
      setCartProducts([
        ...cartProducts,
        {
          id,
          productDetail,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeAllCart(id) {
    const newCart = cartProducts.filter((product) => {
      return product.id != id;
    });
    setCartProducts(newCart);
  }

  function removeFromCart(id) {
    const quantity = getQuantity(id);
    if (quantity === 1) {
      removeAllCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) => 
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
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
