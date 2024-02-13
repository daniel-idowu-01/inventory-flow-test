import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Checkbox, Label, TextInput, Spinner } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // to update form data
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
        const response = await axios.post('http://localhost:3000/api/users/register', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        setIsLoading(false);
        
        const data = response.data;
        // console.log(data)

        /* if (data._id) {
            navigate('/')
        } else {
            setError('Please fill all fields!')
        } */
    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
};

  return (
    <main className='grid place-items-center relative top-20'>
      <article className=''>
        <div
          className='relative top-3 font-bold shadow-md text-center bg-cyan-500 w-[95%] mx-auto text-white p-5 rounded-md uppercase'
        >
          create an account
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex max-w-md flex-col gap-4 shadow border p-10 w-96"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              type="text"
              name='name'
              onChange={handleFormChange}
              placeholder="John Doe"
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name='email'
              onChange={handleFormChange}
              placeholder="name@gmail.com"
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              name='password'
              onChange={handleFormChange}
              placeholder='********'
              required
              shadow
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                terms and conditions
              </Link>
            </Label>
          </div>

          <Button type="submit" className='bg-cyan-500'>
            {loading ? <Spinner aria-label="Default status example" /> : 'Sign Up'}
          </Button>

          <span className='text-sm text-center my-3'>
            Already have an account? <Link to='/sign-in' className='text-cyan-500 hover:underline'>
              Log In
            </Link>
          </span>
        </form>
      </article>
    </main>
  )
}

export default SignUp
