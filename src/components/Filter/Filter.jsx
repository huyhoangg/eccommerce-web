import React, { useEffect, useState } from "react";
import { ProductList } from "../Product/ProductList";
import { Select, Option, Input, Button } from "@material-tailwind/react";
import AccordionDropdown from "../AccordionDropdown/AccordionDropdown";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const sortOptions = [
  { name: "Most Popular", value: "a", current: true },
  { name: "Best Rating", value: "b", current: false },
  { name: "Newest", value: "c", current: false },
  { name: "Price: Low to High", value: "price_ascending", current: false },
  { name: "Price: High to Low", value: "price_descending", current: false },
];

const filters = [
  {
    id: "Tarot",
    name: "Tarot",
    options: [
      { value: "das", label: "das", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "Oracle",
    name: "Oracle",
    options: [
      { value: "dsa", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
];

export const Filter = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const [productByCategory, setProductByCategory] = useState([]);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("/v1/public/products");
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(`/v1/public/categories`);
        setCategories(response.data);
        setSubCategories(response.data)
      } catch (e) {
        console.log(e);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    setProductByCategory(data);
  }, [data]);

  const handleCategoryProduct = (cat) => {
    const filter = data.filter((product) => product.category.name === cat);
    sort ? handleSortProduct(filter, sort) : setProductByCategory(filter);
  };
  // console.log("data", data);
  const handleSortProduct = (products, option) => {
    let filter = [...products];
    if (option === "price_descending") {
      filter.sort((a, b) => b.price - a.price);
    } else if (option === "price_ascending") {
      filter.sort((a, b) => a.price - b.price);
    }
    setSort(option);
    setProductByCategory(filter);
  };

  const handleSearch = (event) => {
    const searchKw = event.target.value.toLowerCase();
    const filter = data.filter((product) =>
      product.name.toLowerCase().includes(searchKw)
    );
    setProductByCategory(filter);
  };

  return (
    <div>
      <div className="bg-white">
        <div>
          <div
            className="relative z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>

            <div className="fixed inset-0 z-40 flex">
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl hidden">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form className="mt-4 border-t border-gray-200 ">
                  <h3 className="sr-only">tar</h3>
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category._id}>
                        <button
                          onClick={() => setProductByCategory(category.categoryName)}
                          className="block px-2 py-3"
                        >
                          {category.categoryName}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {filters.map((filter) => (
                    <div
                      key={filter.id}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      <h3 className="-mx-2 -my-3 flow-root">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-mobile-0"
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">
                            {filter.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-mobile-0">
                        <div className="space-y-6">
                          {filter.options.map((color) => (
                            <div
                              key={color.value}
                              className="flex items-center"
                            >
                              <input
                                id="filter-mobile-color-0"
                                name="color[]"
                                value={color.value}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="filter-mobile-color-0"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {color.value}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </form>
              </div>
            </div>
          </div>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="w-2/5">
                <Input
                  variant="standard"
                  placeholder="Search ..."
                  icon={<AiOutlineSearch />}
                  onChange={handleSearch}
                />
              </div>

              <div className="w-40">
                <Select
                  onChange={(event) =>
                    handleSortProduct(productByCategory, event)
                  }
                  label="Sort"
                >
                  {sortOptions.map((option) => (
                    <Option key={option.name} value={option.value}>
                      {option.name}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  {/* <ul
                    role="list"
                    className="space-y-4  border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category._id}>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            handleCategoryProduct(category.categoryName);
                          }}
                          className="block px-2 py-3"
                        >
                          {category.categoryName}
                        </button>
                      </li>
                    ))}
                  </ul> */}
                  <AccordionDropdown categories={categories} setProductByCategory={setProductByCategory} data={data}/>
                </form>

                <div className="lg:col-span-3">
                  <ProductList products={productByCategory} />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
