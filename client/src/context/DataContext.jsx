import { createContext, useState } from "react";

 const DataContext = createContext({})

export function DataProvider({ children }) {

    const [sideBar, setSideBar] = useState(false)
    const [products, setProducts] = useState([])

    return (
        <DataContext.Provider value={{ sideBar, setSideBar, products, setProducts }}>
            {children} 
        </DataContext.Provider>
    )
}

export default DataContext

/* const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  const numberOfProducts = products.length;

    // Calculate the total price
  const calculateTotalPrice = () => {
    const sum = products.reduce((accumulator, product) => accumulator + parseInt(product.price), 0);
    setTotalPrice(sum);
    };
    
    // Calculate the total quantity
  const calculateTotalQuantity = () => {
    const sum = products.reduce((accumulator, product) => accumulator + parseInt(product.quantity), 0);
    setTotalQuantity(sum);
  };

  // to get the most expensive product
  const maxPrice = products.reduce(function(max, product) {
  return Math.max(max, product.price);
  }, -Infinity);

  //////////////////
  function getTotalPricePerCategory(products) {
    // Create an object to store the total price for each category.
    const totalPricesPerCategory = {};

    // Iterate over the array and add the price of each product to the total price for the corresponding category.
    for (const product of products) {
      const category = product.category;
      const price = product.price;

      if (!totalPricesPerCategory.hasOwnProperty(category)) {
        totalPricesPerCategory[category] = 0;
      }

      totalPricesPerCategory[category] += price;
    } 

    // Return the object containing the total price for each category.
    return totalPricesPerCategory;
  }

   //////////////////
  function getTotalQuantityPerCategory(products) {
    // Create an object to store the total quantity for each category.
    const totalQuantityPerCategory = {};

    // Iterate over the array and add the quantity of each product to the total quantity for the corresponding category.
    for (const product of products) {
      const category = product.category;
      const quantity = product.quantity;

      if (!totalQuantityPerCategory.hasOwnProperty(category)) {
        totalQuantityPerCategory[category] = 0;
      }

      totalQuantityPerCategory[category] += quantity;
    } 

    // Return the object containing the total price for each category.
    return totalQuantityPerCategory;
  } */