import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logof}>
        <a href="#">
          <div className={styles.img}></div>
        </a>
        <p>Sparking Connections, One Click at a Time – Where Students Meet, Mingle, and More!</p>
      </div>

      <div className={styles.foot2}>
        <div className={styles.joinnews}>
          <p>Join the Newsletter</p>
          <input type="email" placeholder="Your email address" />
          <button className={styles.submit}>Submit</button>
        </div>

        <div className={styles.socialm}>
          <p>Follow Us on</p>
          <button className={`${styles.insta} ${styles.social}`}>
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button className={`${styles.face} ${styles.social}`}>
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button className={`${styles.x} ${styles.social}`}>
            <i className="fa-brands fa-x-twitter"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
