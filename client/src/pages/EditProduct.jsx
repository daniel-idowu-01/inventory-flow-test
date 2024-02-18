import React, { useState, useEffect } from 'react'
import { Button, Label, TextInput, Select, Textarea, Spinner } from 'flowbite-react';
import data from '../data/categoryData.json'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const EditProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate()
  const [formData, setFormData] = useState([])
  const [productInfo, setProductInfo] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // to get the product values
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`, {
          withCredentials: true // Include cookies in the request
        });
        setProductInfo(response.data); // Return the data if needed
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error if needed
      }
    };

    fetchData();
  }, [])

  // function to update the product details
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // to submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.patch(`http://localhost:3000/api/products/${id}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data._id) {
        setIsLoading(false);
        navigate('/manage');
      } else {
        setIsLoading(false);
        setError('Please fill all fields!');
      }
    } catch (error) {
      setIsLoading(false);
      setError('An error occurred while processing your request.');
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <main
      className='relative top-5 md:absolute md:left-20 lg:left-[25%] lg:top-10 h-full md:w-[75%] p-5 md:p-0'
    >
      <h2 className='text-2xl text-cyan-500 font-bold'>
        Update Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="md:w-[70%] mt-5 flex flex-col gap-5"
      >
        {/* row one */}
        <article className='flex flex-col gap-5 md:flex-row justify-between'>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Product name" />
            </div>
            <TextInput
              id="name"
              type="text"
              name='name'
              defaultValue={productInfo.name}
              className='w-full md:w-80'
              onChange={handleFormChange}
              placeholder="John Doe"
              required shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="sku" value="Sku" />
            </div>
            <TextInput
              id="sku"
              type="text"
              name='sku'
              defaultValue={productInfo.sku}
              className='w-full md:w-80'
              onChange={handleFormChange}
              placeholder="sku"
              required shadow disabled
            />
          </div>
        </article>

        {/* row two */}
        <article className='flex flex-col md:flex-row gap-5 justify-between'>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select category" />
            </div>
            <Select
              id="countries"
              className='w-full md:w-80'
              name='category'
              defaultValue={productInfo.category}
              onChange={handleFormChange}
              required
            >
              {data.category.map(category => (
                <option key={category.value} value={category.value}>
                  {category.title}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <TextInput
              id="quantity"
              type="text"
              className='w-full md:w-80'
              name='quantity'
              defaultValue={productInfo.quantity}
              onChange={handleFormChange}
              placeholder="Quantity"
              required shadow
            />
          </div>
        </article>

        {/* third row */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Product description" />
          </div>
          <Textarea
            id="comment"
            placeholder="description..."
            required
            rows={4}
            name='description'
            defaultValue={productInfo.description}
            onChange={handleFormChange}
          />
        </div>

        <Button
          type="submit"
          className='bg-cyan-500'
        >
          {loading ? <Spinner aria-label="Default status example" /> : 'Update Product'}
        </Button>
      </form>
    </main>
  )
}

export default EditProduct
