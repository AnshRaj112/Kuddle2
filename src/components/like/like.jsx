import React,{useEffect} from 'react'
import styles from './like.module.scss'
import { FaHeart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function like() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

  return (
    <>
    <div className={styles.likesec}>
     <div className={styles.likeback} data-aos="fade-up">
        <div className={styles.left}>
            <div className={styles.txtbox}>
                <h2>About</h2>
                <p>My full name is Emma Charlotte Duerre Watson. I am currently learning Computer Science Engineering from KIIT. I have made this account to find the love of my life Prityanshu. I love you baby so so so much. Muah my baby ❤️❤️❤️</p>
                <p>Age: 18</p>
                <p>Branch: Computer Science Engineering</p>
                <h2>Interests</h2>
                <p>Football, Music, Study</p>
                <h2>More Images</h2>
                <div className={styles.moreimg}>
                    <div className={styles.ibox}><img src="https://uploads-ssl.webflow.com/66096a30ae498a9206aee6a0/664778a27cfa45cb92aa4b63_image%20(7).jpg" alt="pic1" /></div>
                    <div className={styles.ibox}><img src="https://uploads-ssl.webflow.com/66096a30ae498a9206aee6a0/664778a33e9b01ad47b16d28_image%20(9).jpg" alt="pic2" /></div>
                    <div className={styles.ibox}><img src="https://uploads-ssl.webflow.com/66096a30ae498a9206aee6a0/664778a3e10db786d24ca73a_image%20(5).jpg" alt="pic3" /></div>
                    <div className={styles.ibox}><img src="https://uploads-ssl.webflow.com/66096a30ae498a9206aee6a0/664778a2a106a4ef920015e6_image%20(10).jpg" alt="pic4" /></div>
                    <div className={styles.ibox}><img src="https://uploads-ssl.webflow.com/66096a30ae498a9206aee6a0/664778a5582a581e809379ee_image%20(8).jpg" alt="pic5" /></div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.pibox}>
                <div className={styles.profileimg}>
                    <div className={styles.imgpfp}><img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/decc7808-4bf9-4a6e-b6e4-bdd63c256222/width=768,quality=90/00235-794454789-JernauMix_v3_Chimera-photo%20of%20seductive%20(emwats0n_0.99),%20a%20beautiful%20woman,%20perfect%20hair%20upsweep%20updo,%20(modern%20photo),%20(Green%20Screen%20Color%20%20off-sweat.jpeg" alt="mainpic" /></div>
                    <div className={styles.imgtxt}>
                        <h4>Emma Watson</h4>
                        <h5>1st Year</h5>
                    </div>
                </div>
            </div>
            
            <div className={styles.choice}>
                <button type="submit" className={`${styles.dislike} ${styles.likebtn}`}><span><IoCloseOutline /></span></button>
                <button type="submit" className={`${styles.like} ${styles.likebtn}`}><span><FaHeart /></span></button>
            </div>
        </div>

    </div> 
    </div>
    </>
  )
}
