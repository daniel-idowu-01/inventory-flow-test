import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <main className='grid place-items-center relative top-20'>
      <article className=''>
        <div className='relative top-3 font-bold shadow-md text-center bg-blue-500 w-[95%] mx-auto text-white p-5 rounded-md uppercase'>
          create an account
        </div>
        <form className="flex max-w-md flex-col gap-4 shadow border p-10">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput id="name" type="text" placeholder="John Doe" required shadow />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput id="email2" type="email" placeholder="name@gmail.com" required shadow />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
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

          <Button type="submit" className='bg-blue-500'>Sign Up</Button>

          <span className='text-sm text-center'>
            Already have an account? <Link to='/sign-in' className='text-blue-500 hover:underline'>Log In</Link>
          </span>
        </form>
      </article>
    </main>
  )
}

export default SignIn
