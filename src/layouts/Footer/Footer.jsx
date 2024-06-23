import React from 'react'
import styles from './footer.module.scss'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.container}>
            <div className={styles.logof}>
                <Link to="/"><div className={styles.img}></div></Link>
            </div>

            <div className={styles.txt}>
              <p>Sparking Connections, One Click at a Time – Where Students Meet, Mingle, and More!</p>
            </div>

            
                <div className={styles.joinnews}>
                    <p>Join the Newsletter</p>
                    <form action="#">
                      <input type="email" className={styles.mail} required autoComplete='off' placeholder='Your email address' />
                      <input type="submit" className={styles.subs} value="Subscribe"/>
                    </form>
                    
                </div>
        
                <div className={styles.socialm}>
                    <p>Follow Us on</p>
                    <a href="https://www.facebook.com" target='_blank'><FaFacebook /></a>
                    <a href="https://www.instagram.com" target='_blank'><FaInstagram /></a>
                    <a href="https://www.x.com" target='_blank'><FaXTwitter /></a>
                </div>
              </div>
      </footer>
    </>
  )
}
