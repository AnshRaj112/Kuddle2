import React,{useState} from 'react'
import styles from './NavbarPro.module.scss'
import { SlArrowDown } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';

export default function NavbarPro() {

    const[isActive, setisActive] = useState(false);
    const handleClick = () =>{
      setisActive(!isActive)
    }

    let cs2 = isActive ? styles.active: styles.deactive;

  return (
    <>
        <nav>
            <Link to="/">
                <div className={styles.logo}></div>
            </Link>

            <div className={styles.profiledropdown} >
                <div className={styles.user} onClick={() => handleClick()}>
                    <div className={` ${styles.accpic}`}>
                        <img className={styles.userpic} src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className={styles.username}>
                        <p>Emma Watson</p>
                        <span><SlArrowDown /></span>
                    </div>
                </div>
                <ul className={`${styles.profiledropdownlist} ${cs2}`}>
                    <li className={styles.dropdownlistitem}>
                        <Link to="/MyProfile" className={styles.link}>
                            <div><FaUser /></div>
                            Profile
                        </Link>
                    </li>
                    <li className={styles.dropdownlistitem}>
                        <Link to="/Premium" className={styles.link}>
                            <div><FaCrown /></div>
                           <p>Premium</p> 
                        </Link>
                    </li>
                    <li className={styles.dropdownlistitem}>
                        <Link to="/" className={styles.link}>
                            <div><LuLogOut /></div>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}
