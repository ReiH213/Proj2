"use client"
import Link from "next/link"
import styles from "./card.module.css"
import { usePathname } from "next/navigation"

const Card = ({ title, link, desc, icon,variant }: { title: string, link: string, desc?: string, icon?: React.ReactNode,variant?:string }) => {
  const pathname = usePathname()
  return (
    <div className={`${styles.container} ${variant}`}>
      <div className={styles.text}>
        <div className=" flex flex-col items-center gap-y-2 justify-center">
          <Link href={link} className={`flex flex-col gap-x-1 justify-center items-center gap-y-3`}>
            {title}
            {icon}
          </Link>
          <span>{desc}</span>
        </div>
      </div>
    </div>
  )
}

export default Card