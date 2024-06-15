import React from 'react'
import styles from './Sidebarmob.module.scss'
import { FaHeart } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export default function Sidebarmob() {
  return (
    <>
      <div className={styles.sidebarmob}>
                    <a href="#">
                        <div className={styles.icon}><FaHeart /></div>
                    </a>

                    <a href="#">
                        <div className={styles.icon}><BsChatFill /></div>
                    </a>

                    <a href="#">
                        <div className={styles.icon}><FaUser /></div>
                    </a>

                    <a href="#">
                        <div className={styles.icon}><IoSettingsSharp /></div>
                    </a>
      </div>
    </>
  )
}
