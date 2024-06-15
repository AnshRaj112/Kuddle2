import React, { useState } from 'react'
import styles from "./Navbar.module.scss"
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";
export default function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
        <header>
        <nav className={styles.containernav}>
            <div className={styles.logo}>
                <a href=""><div className={styles.img}></div></a>
            </div>
            <div className={showMediaIcons ? styles.mobilemenu : styles.menulinks}>
                <ul>
                    <li className={styles.list}><a className={styles.links} href="#">
                        <span className={styles.txt}>Home</span>
                        </a>
                    </li>
                    <li className={styles.list}><a className={styles.links} href="#">
                        <span className={styles.txt}>About</span>
                        </a>
                    </li>
                    <li className={styles.list}><a className={styles.links} href="#">
                        <span className={styles.txt}>Contact Us</span>
                        </a>
                    </li>
                    <li className={styles.list}><a className={styles.links} href="#">
                        <span className={styles.txt}>Sign Up</span>
                        </a>
                    </li>
                    <li className={styles.list}><a className={styles.links} href="#">
                        <span className={styles.txt}>Login</span>
                        </a>
                    </li>
                </ul>
                <div className={styles.close}  onClick={()=> setShowMediaIcons(!showMediaIcons)}><IoMdClose /></div>
            </div>
            <div className={styles.hamburger}>
                    <a href="#" onClick={()=> setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></a>
            </div>
            
        </nav>
        </header>
    </>
  )
}
