import React, { useState } from 'react'
import axios from 'axios'
import { Button, Label, TextInput, Select, Textarea, Spinner } from 'flowbite-react';
import data from '../data/categoryData.json'
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

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
      const response = await axios.post(`http://localhost:3000/api/products`, formData, {
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
        Create Product
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
              className='w-full md:w-80'
              onChange={handleFormChange}
              placeholder="sku"
              required shadow
            />
          </div>
        </article>

        {/* row two */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select category" />
          </div>
          <Select id="countries" className='w-full' name='category' onChange={handleFormChange} required>
            {data.category.map(category => (
              <option id={category.value} value={category.value}>
                {category.title}
              </option>
            ))}
          </Select>
        </div>

        {/* row three */}
        <article className='flex flex-col md:flex-row gap-5 justify-between'>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <TextInput
              id="quantity"
              type="text"
              className='w-full md:w-80'
              name='quantity'
              onChange={handleFormChange}
              placeholder="Quantity"
              required shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              type="text"
              className='w-full md:w-80'
              name='price'
              onChange={handleFormChange}
              placeholder="Price"
              required shadow
            />
          </div>
        </article>

        {/* row four */}
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
            onChange={handleFormChange}
          />
        </div>

        <Button
          type="submit"
          className='bg-cyan-500'
        >
          {loading ? <Spinner aria-label="Default status example" /> : 'Create Product'}
        </Button>
      </form>
    </main>
  )
}

export default CreateProduct
