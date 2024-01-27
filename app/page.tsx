import Link from 'next/link'
import React from 'react'
import LoginForm from './ui/login/LoginForm'


const Login = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-inherit text-gray-600'>
      <div className='flex flex-col shadow-xl px-8 py-4 pb-6 rounded-xl bg-white slide-top min-w-[35%] items-center slide-top'>
        <h1 className='font-semibold text-2xl py-12 px-14 text-center'>Welcome Back</h1>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login