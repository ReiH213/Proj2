"use client"
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'


const layout = ({  children }: { children: React.ReactNode }) => {
    return (
            <div className="">
               {children}
            </div>

    )
}

export default layout