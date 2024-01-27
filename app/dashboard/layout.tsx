"use client"
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import styles from '../ui/dashboard/dashboard.module.css'
import Sidebar from '../ui/dashboard/Sidebar/Sidebar'
import {io}  from 'socket.io-client'
import { SocketProvider } from '../Context/SocketContextProvider'




const layout = ({ session, children }: { session: Session, children: React.ReactNode }) => {
    return (
        <SessionProvider session={session}>
            <SocketProvider>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Sidebar />
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
                
            </SocketProvider>
        </SessionProvider>
    )
}

export default layout