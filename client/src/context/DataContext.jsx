import { createContext, useState } from "react";

const DataContext = createContext({})

export function DataProvider({ children }) {

  const [sideBar, setSideBar] = useState(false)
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPricePerCategory, setTotalPricePerCategory] = useState([])
  const [totalQuantityPerCategory, setTotalQuantityPerCategory] = useState([])

  const numberOfProducts = products.length;

  // calculate the total price
  const calculateTotalPrice = () => {
    const sum = products.reduce((accumulator, product) => accumulator + parseInt(product.price), 0);
    setTotalPrice(sum);
  };


  // calculate the total quantity
  const calculateTotalQuantity = () => {
    const sum = products.reduce((accumulator, product) => accumulator + parseInt(product.quantity), 0);
    setTotalQuantity(sum);
  };


  // function to get the most expensive product
  function getProductWithMaxPrice(products) {
    if (products.length === 0) {
      return null;
    }

    let maxPrice = parseInt(products[0].price);
    let productNameWithMaxPrice = products[0].name;

    for (let i = 1; i < products.length; i++) {
      if (products[i].price > maxPrice) {
        maxPrice = parseInt(products[i].price);
        productNameWithMaxPrice = products[i].name;
      }
    }

    return productNameWithMaxPrice;
  }


  //////////////////
  function getTotalPricePerCategory(products) {
    const totalPricesPerCategory = {};

    for (const product of products) {
      const category = product.category;
      const price = product.price;

      if (!totalPricesPerCategory.hasOwnProperty(category)) {
        totalPricesPerCategory[category] = 0;
      }

      totalPricesPerCategory[category] += price;
    }

    return setTotalPricePerCategory(totalPricesPerCategory);
  }


  //////////////////
  function getTotalQuantityPerCategory(products) {
    const totalQuantityPerCategory = {};

    for (const product of products) {
      const category = product.category;
      const quantity = product.quantity;

      if (!totalQuantityPerCategory.hasOwnProperty(category)) {
        totalQuantityPerCategory[category] = 0;
      }

      totalQuantityPerCategory[category] += quantity;
    }

    return setTotalQuantityPerCategory(totalQuantityPerCategory);
  }


  return (
    <DataContext.Provider value={{
      sideBar,
      setSideBar,
      products,
      setProducts,
      calculateTotalPrice,
      calculateTotalQuantity,
      totalPrice,
      totalQuantity,
      numberOfProducts,
      getTotalPricePerCategory,
      getTotalQuantityPerCategory,
      totalPricePerCategory,
      totalQuantityPerCategory,
      getProductWithMaxPrice
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext

