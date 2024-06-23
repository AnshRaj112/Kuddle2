import React, { useState } from 'react'
import styles from "./Navbar.module.scss"
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
        <header>
        <nav className={styles.containernav}>
            <div className={styles.logo}>
                <Link to="/"><div className={styles.img}></div></Link>
            </div>
            <div className={showMediaIcons ? styles.mobilemenu : styles.menulinks}>
                <ul>
                    <li className={styles.list}><Link className={styles.links} to="/">
                        <span className={styles.txt}>Home</span>
                        </Link>
                    </li>
                    <li className={styles.list}><Link className={styles.links} to="/About">
                        <span className={styles.txt}>About</span>
                        </Link>
                    </li>
                    <li className={styles.list}><Link className={styles.links} to="/ContactUs">
                        <span className={styles.txt}>Contact Us</span>
                        </Link>
                    </li>
                    <li className={styles.list}><Link className={styles.links} to="/Signup">
                        <span className={styles.txt}>Sign Up</span>
                        </Link>
                    </li>
                    <li className={styles.list}><Link className={styles.links} to="/Login">
                        <span className={styles.txt}>Login</span>
                        </Link>
                    </li>
                </ul>
                <div className={styles.close}  onClick={()=> setShowMediaIcons(!showMediaIcons)}><IoMdClose /></div>
            </div>
            <div className={styles.hamburger}>
                    <Link to="#" onClick={()=> setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></Link>
            </div>
            
        </nav>
        </header>
    </>
  )
}
