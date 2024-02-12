import React, { useState } from 'react'
import { Button, Label, TextInput, Select, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CreateProduct = () => {

  const [formData, setFormData] = useState([])

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className='relative top-5 md:absolute md:left-20 lg:left-[25%] lg:top-10 h-full md:w-[75%] p-5 md:p-0'>
      <h2 className='text-2xl text-cyan-500 font-bold'>Create Product</h2>

      <form className="md:w-[70%] mt-5 flex flex-col gap-5">
        {/* row one */}
        <article className='flex flex-col gap-5 md:flex-row justify-between'>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
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
        <article className='flex flex-col md:flex-row gap-5 justify-between'>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select category" />
            </div>
            <Select id="countries" className='w-full md:w-80' required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
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
            required rows={4}
          />
        </div>

        <Button
          type="submit"
          className='bg-cyan-500'
        >
          Create New Product
        </Button>
        </form>
    </main>
  )
}

export default CreateProduct
