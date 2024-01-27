"use client"
import React from 'react'
import styles from './sidebar.module.css'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


const SideBarLink = ({title,path,icon}:{title:string,path:string,icon?:React.ReactNode}) => {
  const pathname = usePathname()

  return (
    <Link href={path} className={`${styles.linkContainer} ${pathname===path && styles.active}`}>
        {icon}
        {title}
    </Link>
  )
}

export default SideBarLink