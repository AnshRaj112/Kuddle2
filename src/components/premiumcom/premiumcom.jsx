import React,{useEffect} from 'react'
import styles from './premiumcom.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function premiumcom() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

  return (
    <>
      <body className={styles.premiumbody} data-aos="fade-up">

        <main className={`${styles.main} ${styles.flow}`}>
        <h1 className={styles.mainheading}>Pricing</h1>
        <div className={`${styles.maincards} ${styles.cards}`}>
            <div className={styles.cardsinner}>
            <div className={`${styles.cardscard} ${styles.card}`}>
                <h2 className={styles.cardheading}>Basic</h2>
                <p className={styles.cardprice}>$9.99</p>
                <ul role="list" className={`${styles.cardbullets} ${styles.flow}`}>
                <li>Access to standard workouts and nutrition plans</li>
                <li>Email support</li>
                </ul>
                <a href="#basic" className={`${styles.cardcta} ${styles.cta}`}>Get Started</a>
            </div>

            <div className={`${styles.cardscard} ${styles.card}`}>
                <h2 className={styles.cardheading}>Pro</h2>
                <p className={styles.cardprice}>$19.99</p>
                <ul role="list" className={`${styles.cardbullets} ${styles.flow}`}>
                <li>Access to advanced workouts and nutrition plans</li>
                <li>Priority Email support</li>
                <li>Exclusive access to live Q&A sessions</li>
                </ul>
                <a href="#pro" className={`${styles.cardcta} ${styles.cta}`}>Upgrade to Pro</a>
            </div>

            <div className={`${styles.cardscard} ${styles.card}`}>
                <h2 className={styles.cardheading}>Ultimate</h2>
                <p className={styles.cardprice}>$29.99</p>
                <ul role="list" className={`${styles.cardbullets} ${styles.flow}`}>
                <li>Access to all premium workouts and nutrition plans</li>
                <li>24/7 Priority support</li>
                <li>1-on-1 virtual coaching session every month</li>
                <li>Exclusive content and early access to new features</li>
                </ul>
                <a href="#ultimate" className={`${styles.cardcta} ${styles.cta}`}>Go Ultimate</a>
            </div>
            </div>
            
            <div className={`${styles.overlay} ${styles.cardsinner}`}></div>
        </div>
        </main>

       </body>
    </>
  )
}
