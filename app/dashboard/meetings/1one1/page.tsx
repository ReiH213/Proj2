"use client"
import { useSocket } from '@/app/Context/SocketContextProvider'
import React from 'react'

const Meeting = () => {
  const socket = useSocket()
  return (
    <div>Meeting</div>
  )
}

export default Meeting 