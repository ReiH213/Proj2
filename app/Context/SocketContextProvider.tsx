"use client"

import React, { createContext,useState,useRef,useEffect, useContext, useMemo } from "react"

import {Socket, io} from 'socket.io-client'


const SocketContext = createContext<Socket |null>(null)



export const SocketProvider = ({children}:{children:React.ReactNode})=>{
    const [stream,setStream] = useState(null)
    const [me,setMe] = useState('')
    const [call,setCall] = useState()
    const myVideo = useRef<HTMLVideoElement>()
    const socket =useMemo(()=> io('http://localhost:6300'),[])

    return(
        <SocketContext.Provider value={socket}>
        {children}
    </SocketContext.Provider>
    )
}

export const useSocket = ()=>{
    const socket = useContext(SocketContext)
    return socket
}