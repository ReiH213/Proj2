"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const LoginForm = () => {
  return (
    <div className='grid w-full max-w-sm items-center gap-2 mt-2'>
        <button className='bg-cyan-800 text-white rounded-lg p-3 hover:bg-cyan-800/90' onClick={()=>signIn('google',{callbackUrl:`${window.location.origin}/dashboard`})}>Log in with Google</button>
    </div>
  )
}

export default LoginForm