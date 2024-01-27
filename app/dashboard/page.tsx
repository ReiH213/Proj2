"use client"
import React, { useEffect } from 'react'
import Rightbar from '../ui/dashboard/Rightbar/Rightbar'
import styles from '../ui/dashboard/dashboard.module.css'
import { useSession } from 'next-auth/react'
import Card from '../ui/dashboard/card/Card'
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
const Dashboard = () => {
    const { data: session, status } = useSession()
    useEffect(() => {
        console.log(status);

    }, [session])

    const Icon = <MdOutlineVideoCameraFront size="60px" />
    const VideoCallIcon = () => (
        <div className='flex flex-col'>
            <div className='flex ml-11 items-end'>

                <MdAddCircleOutline size={24} />
            </div>
            <MdOutlineVideocam size={60} />
        </div>
    );
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={`${styles.cards}`}>
                    <Card title="Create a meeting" link='/dashboard/meetings' variant='max-w-[25vw]' icon={Icon} />
                    <Card title="Join a meeting" link='/dashboard/join' variant='max-w-[25vw]' icon={React.createElement(VideoCallIcon)} />
                </div>
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    )

}


export default Dashboard