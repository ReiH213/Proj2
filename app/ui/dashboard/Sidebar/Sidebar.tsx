"use client"
import styles from './sidebar.module.css'

import Image from 'next/image'
import { MdLogout } from 'react-icons/md'
import { signOut, useSession } from 'next-auth/react'
import { IndMenuItems } from '@/assets/data'
import SideBarLink from './sidebarLink'
import React, { useEffect } from 'react'

const Sidebar = () => {
  const {data:session} = useSession()
  
  useEffect(()=>{
    console.log(session);
  },[session])

  
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src={session?.user?.image as string} alt='' width={50} height={50}/>
        <div className={styles.userDetail}>
          <span className={styles.username}>Rei</span>

        </div>
      </div>
      <ul className={styles.list}>
        {IndMenuItems.map((item)=>(
          <li key={item.title} >
          <span className={styles.cat}>{item.title}</span>
          {item.list.map((link)=>(
  
            <SideBarLink title={link.title} path={link.path}  key={link.title} icon={React.createElement(link.icon)}/>
          ))}
          </li>
          ))}
        </ul>
      
      <button className={styles.logout} onClick={()=>signOut({callbackUrl:'/login'})}>
          <MdLogout/>
          Log Out
      </button>
    </div>
  )
}

export default Sidebar