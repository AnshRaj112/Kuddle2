import React,{useEffect} from 'react'
import styles from './hero.module.scss'
import { FaArrowRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function hero() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

  return (
    <> 
        <div className={styles.hero} data-aos="fade-up">
            <div className={styles.find} >
                <h3>Find partner in your university</h3>
                <p className={styles.txt1}> Find your dating partner easily by</p>
                <p className={styles.txt2}>signing up to our website</p>
                
                <a href="#"><button className={styles.getstarted}>Get Started  <span><FaArrowRight /></span> </button></a>
            </div>
            <div className={styles.images}>
                <div className={styles.img1}></div>
                <div className={styles.img2}></div>
                <div className={styles.img3}></div>
            </div>
        </div>   
    </>
  )
}
