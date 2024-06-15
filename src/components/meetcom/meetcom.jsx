import React from 'react'
import styles from './meetcom.module.scss'

export default function meetcom() {
  return (
    <>
      <div className={styles.hero4}>
            <div className={styles.box1}>
                <div className={styles.left}>
                    <h2>Ready to</h2>
                    <h2><span>Find</span> your Love?</h2>
                    <p className={styles.mar}>Meet new people, get new friends, find your</p>
                    <p>partner and join our community</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.imgbox}></div>
                </div>
            </div>
            <div className={styles.box2}>
                <h1>Join Our Community and</h1>
                <h1>Meet your Partner</h1>
                <a href="signup.html"><button className={styles.getstarted2}>Get Started <i className="fa-solid fa-arrow-right"></i></button></a>
            </div>
        </div>
    </>
  )
}
