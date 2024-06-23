import React,{useEffect} from 'react'
import styles from './profile.module.scss'
import { FaEdit } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function profile() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

  return (
    <>
    <div className={styles.profilesec}>
        <div className={styles.profileback} data-aos="fade-up">
            <div className={styles.profileleft}>
                <div className={styles.pfp}><img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profileimg" /></div>
                <div className={`${styles.name} ${styles.box}`}>Emma Watson</div>
                <div className={`${styles.phone} ${styles.box}`}>8969XXXX48</div>
                <div className={`${styles.email} ${styles.box}`}>helloworld123@kiit.ac.in</div>
                <button type="submit" className={styles.edit}>Edit  <span><FaEdit /></span></button>
            </div>
            <div className={styles.profileright}>
                <div className={`${styles.gender} ${styles.box}`}><pre><strong>Gender:</strong> <span id="gender-val"> Female</span></pre></div>
                <div className={`${styles.aboutval} ${styles.box1}`}>
                    <strong>About:</strong> 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolore quisquam, doloribus nihil laudantium corrupti? Ipsam odio dolor, voluptate official</p>
                </div>
                <div className={`${styles.interest} ${styles.box1}`}>
                    <strong>Interests:</strong> 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolore quisquam, doloribus nihil laudantium corrupti? Ipsam odio dolor, voluptate official</p>
                </div>
                <div className={styles.photos}>
                    <div className={`${styles.img1} ${styles.imgbox}`}><img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profileimg" /></div>
                    <div className={`${styles.img2} ${styles.imgbox}`}><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profileimg" /></div>
                    <div className={`${styles.img3} ${styles.imgbox}`}><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profileimg" /></div>
                    <div className={`${styles.img4} ${styles.imgbox}`}><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profileimg" /></div>
                    <div className={`${styles.img5} ${styles.imgbox}`}><img src="https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profileimg" /></div>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}
