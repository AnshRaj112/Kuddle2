import React,{useEffect} from 'react'
import styles from './whychoose.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function whychoose() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

  return (
    <>
        <div className={styles.hero3}>
            <div className={styles.text2} data-aos="fade-up">
                <h3>Why choose Us?</h3>
                <p>Kuddle offers a dynamic and user-friendly interface, powered by cutting-edge technologies to facilitate seamless interactions among users. Our platform integrates Firebase for real-time database functionality, ensuring swift and secure data exchange between users. Whether you're seeking meaningful connections, engaging conversations, or fun-filled activities, Kuddle has got you covered.</p>
                <Link to="/About"><button>Know More</button></Link>
            </div>
            <div className={styles.imagebox} data-aos="fade-up">
                <div className={styles.imagehero3}></div>
            </div>
            
        </div> 
    </>
  )
}
