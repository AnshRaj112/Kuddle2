import React from 'react'
import styles from './Sidebarmob.module.scss'
import { FaHeart } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Sidebarmob() {
  return (
    <>
      <div className={styles.sidebarmob}>
                    <Link to="/Like" className={styles.link}>
                        <div className={styles.icon}><FaHeart /></div>
                    </Link>

                    <Link to="#" className={styles.link}>
                        <div className={styles.icon}><BsChatFill /></div>
                    </Link>

                    <Link to="/MyProfile" className={styles.link}>
                        <div className={styles.icon}><FaUser /></div>
                    </Link>

                    <Link to="#" className={styles.link}>
                        <div className={styles.icon}><IoSettingsSharp /></div>
                    </Link>
      </div>
    </>
  )
}
