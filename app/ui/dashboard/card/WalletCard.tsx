"use client"
import styles from "./card.module.css"
import { MdSupervisedUserCircle } from 'react-icons/md'
import { useSession } from "next-auth/react"
const WalletCard = () => {
    const { data: session, status } = useSession()
    if (status === 'authenticated') {
        console.log(session);

        return (
            <div className={styles.container}>
                <MdSupervisedUserCircle size={35} />
                <div className={styles.text}>
                    <span className={styles.title}>{session.user?.name}</span>
                    <span className={styles.number}>{session.user?.email}</span>
                    <span className={styles.detail}><span className={styles.text_pos}>Session Expires in </span> {session.expires}</span>
                    <span className={styles.number}>Unique Id : {session.token.sub}</span>
                </div>
            </div>
        )
    } else {
        <div>
            not logged in
        </div>
    }

}

export default WalletCard