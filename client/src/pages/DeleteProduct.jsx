import React, { useState, useEffect } from 'react'
import { Button, Label, TextInput, Select, Textarea, Spinner } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const DeleteProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate()
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState('')


  // to submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.delete(`http://localhost:3000/api/products/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
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
    <section
      className='flex justify-center items-center relative top-5 md:absolute md:left-20 lg:left-[25%] lg:top-10 h-full md:w-[75%] p-5 md:p-0'
    >
      <form
        onSubmit={handleSubmit}
        className='border shadow-md max-w-96 p-10 rounded-md'>
        <p className='font-bold text-xl text-center'>Are you sure you want to delete this product?</p>
        <Button
          type="submit"
          className='bg-red-500 mt-5 w-full'
        >
          {loading ? <Spinner aria-label="Default status example" /> : 'Delete Product'}
        </Button>
      </form>
    </section>
  )
}

export default DeleteProduct
