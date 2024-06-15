import React , {useEffect}from 'react'
import styles from './meettxt.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function meettxt() {

  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);

  return (
    <>
            <div className={styles.hero2} data-aos="fade-up">
                    <p className={styles.text}>Meeting <span>new people</span>, having <span>new</span> </p>
                    <p><span>experiences</span>, <span>connecting</span> with </p>
                    <p>each other - thats what dating </p>
                    <p>should be about!</p>
              </div>
        
    </>
  )
}
