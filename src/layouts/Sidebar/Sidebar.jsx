import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import { IoMenu } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const[isActive, setisActive] = useState(false);
  const handleClick = () =>{
    setisActive(!isActive)
  }

  let cs2 = isActive ? styles.open: '';
  
  return (
    <>
        <section className={styles.sidebarback}>
        <div className={`${styles.sidebar}  ${cs2}`}>
            <div className={styles.hamburger} onClick={() => handleClick()} >
                <div className={styles.hamicon} id={styles.btn}><IoMenu /></div>
            </div>
            <ul className={styles.navlists}>
                <li className={styles.likepg}>
                    <Link to="/Like">
                        <div className={styles.icon}><FaHeart /></div>
                        <span className={styles.likepgtxt}>Like</span>
                    </Link>
                    <span className={styles.tooltip}>Like</span>
                </li>
                <li className={styles.chatpg}>
                    <Link to="#">
                        <div className={styles.icon}><BsChatFill /></div>
                        <span className={styles.chatpgtxt}>Message</span>
                    </Link>
                    <span className={styles.tooltip}>Message</span>
                </li>
                <li className={styles.profilepg}>
                    <Link to="/MyProfile">
                        <div className={styles.icon}><FaUser /></div>
                        <span className={styles.profilepgtxt}>Profile</span>
                    </Link>
                    <span className={styles.tooltip}>Profile</span>
                </li>
                <li className={styles.settingspg}>
                    <Link to="#">
                        <div className={styles.icon}><IoSettingsSharp /></div>
                        <span className={styles.settingspgtxt}>Settings</span>
                    </Link>
                    <span className={styles.tooltip}>Settings</span>
                </li>
            </ul>
        </div>
        </section>
    </>
  )
}
