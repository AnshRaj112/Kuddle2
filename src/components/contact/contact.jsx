import React from 'react'
import styles from './contact.module.scss'

export default function contact() {
  return (
    <>
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.box}>
                <h1>Have Questions?</h1>
                <h1>Shoot us an email.</h1>
                <br/>
                <h2>Kuddle: Your Click to Campus Romance & Friendships</h2>
                <p>Welcome to Kuddle, a unique platform designed exclusively for the vibrant and diverse student community of KIIT. We understand that college life is not just about studies, but also about making lifelong connections, sharing interests, and creating memories.
                    Kuddle is a student-based dating website that aims to bring together students from various disciplines within KIIT. Our platform provides a safe and friendly environment for students to connect, communicate, and collaborate. Whether you’re looking for a study buddy, a gym partner, or someone to explore the city with, Kuddle is the place to be.</p>
                <p>We believe in fostering genuine connections based on shared interests and mutual respect. Our advanced matching algorithm helps you find like-minded individuals within the KIIT community. With Kuddle, you can explore profiles, chat with fellow students, plan meetups, and even find your special someone.

                    Join Kuddle today and start your journey of making meaningful connections at KIIT!
                    
                    For any questions or concerns, feel free to shoot us an email. We’re here to help!
                    
                    Please note: Kuddle is committed to maintaining a respectful and safe community. We encourage all users to adhere to our community guidelines and respect each other’s boundaries.
                    
                    <br/><br/><span>Let’s Kuddle up, KIIT!</span></p>
                </div>
            </div>
            <div className={styles.form}>
                <form action="/home" method="POST">
                    <div className={styles.formbox}>
                        <h1>Form Submission</h1>
                        <p>Your Name :</p>
                        <input type="text" name="Name" required />
                        <p>Your email address :</p>
                        <input type="email" name="mail" required />
                        <p>Your Message :</p>
                        <input className={styles.textarea} type="text" name="Message" required />
                        
                        <input className={styles.submit1} type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
