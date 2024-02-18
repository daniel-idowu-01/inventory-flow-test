import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'flowbite-react';
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import axios from 'axios'
import DataContext from '../context/DataContext';

const TableComp = () => {

  const { products, setProducts } = useContext(DataContext);

  useEffect(() => {
    // Fetch data using Axios with credentials
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products', {
          withCredentials: true // Include cookies in the request
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto shadow-xl pt-10">
      <Link
        to='/create-product'
        className='relative md:z-10 bg-cyan-500 p-2 px-3 text-xs text-white md:float-right ml-3 md:mr-5 hover:cursor-pointer hover:bg-cyan-800'
      >
        Add New Product
      </Link>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>sku</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            products.map(product => (
              <Table.Row
                key={product._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.name}
                </Table.Cell>
                <Table.Cell>{product.sku}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.quantity}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <Link
                    to={`/edit-product/${product._id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <FaTrash />
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  )
}

export default TableComp
