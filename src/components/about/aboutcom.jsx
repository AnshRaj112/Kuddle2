import React,{useEffect} from 'react'
import styles from './aboutcom.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function aboutcom() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

  return (
    <>
      <body className={styles.aboutbody} data-aos="fade-down">
            <header className={styles.abouthead}>
                <h1>Welcome to Kuddle</h1>
                <p>The ultimate dating platform designed exclusively for the vibrant student community of Kalinga Institute
                    of Industrial Technology (KIIT).</p>
            </header>

            <section className={styles.aboutsec}>
                <h2 className={styles.abouth2}><u>Introduction</u></h2>
                <p>Kuddle offers a dynamic and user-friendly interface, powered by cutting-edge technologies to facilitate
                    seamless interactions among users. Our platform integrates Firebase for real-time database functionality,
                    ensuring swift and secure data exchange between users. Whether you're seeking meaningful connections,
                    engaging conversations, or fun-filled activities, Kuddle has got you covered.</p>
            </section>

            <section className={styles.aboutsec}>
                <h2 className={styles.abouth2}><u>Features</u></h2>

                <h3 className={styles.abouth3}>1. Swipe Interaction</h3>
                <ul className={styles.aboutul}>
                    <li className={styles.aboutli}><strong>Right Swipe:</strong> Like a Candidate</li>
                    <li className={styles.aboutli}><strong>Left Swipe:</strong> Disike a Candidate</li>
                    <li className={styles.aboutli}>Users can effortlessly express their interest or disinterest in potential matches through intuitive swipe
                        gestures.</li>
                </ul>

                <h3 className={styles.abouth3}>2. Chat Functionality</h3>
                <ul className={styles.aboutul}>
                    <li className={styles.aboutli}><strong>Real-Time Messaging:</strong></li>
                    <li className={styles.aboutli}>Engage in interactive conversations with matches via our built-in chat feature.</li>
                    <li className={styles.aboutli}>Instantaneous message delivery ensures seamless communication and fosters deeper connections.</li>
                </ul>

                <h3 className={styles.abouth3}>3. Gaming Integration</h3>
                <ul className={styles.aboutul}>
                    <li className={styles.aboutli}><strong>Play with Matches:</strong></li>
                    <li className={styles.aboutli}>Challenge your matches to friendly games and bond over shared interests.</li>
                    <li className={styles.aboutli}>Explore a variety of entertaining games directly within the Kuddle platform.</li>
                </ul>

                <h3 className={styles.abouth3}>4. Profile Customization</h3>
                <ul className={styles.aboutul}>
                    <li className={styles.aboutli}><strong>Personalization:</strong></li>
                    <li className={styles.aboutli}>Customize your profile with photos and hobbies to showcase your personality and interests.</li>
                    <li className={styles.aboutli}>Detailed profiles enhance compatibility and facilitate better understanding between users.</li>
                </ul>
            </section>

            <section className={styles.aboutsec}>
                <h2 className={styles.abouth2}><u>Getting Started</u></h2>
                <ol className={styles.aboutol}>
                    <li className={styles.aboutli}><strong>Sign Up:</strong> Create your account on Kuddle by providing basic information and preferences.</li>
                    <li className={styles.aboutli}><strong>Swipe:</strong> Begin swiping through profiles to discover potential matches.</li>
                    <li className={styles.aboutli}><strong>Chat:</strong> Initiate conversations with matches and build connections through meaningful
                        interactions.</li>
                    <li className={styles.aboutli}><strong>Game On:</strong> Challenge your matches to games and enjoy fun-filled activities together.</li>
                    <li className={styles.aboutli}><strong>Explore:</strong> Dive into the world of Kuddle and explore the endless possibilities of connecting
                        with fellow KIIT students.</li>
                </ol>
            </section>

            <section className={styles.aboutsec}>
                <h2 className={styles.abouth2}><u>Technologies Used</u></h2>
                <ul className={styles.aboutul}>
                    <li className={styles.aboutli}><strong>Firebase:</strong> Real-time database functionality for seamless data exchange.</li>
                    <li className={styles.aboutli}><strong>HTML/CSS:</strong> Frontend development for an intuitive user interface.</li>
                    <li className={styles.aboutli}><strong>JavaScript:</strong> Backend functionality and interactive features.</li>
                    <li className={styles.aboutli}><strong>React (Planned):</strong> Transition to React for enhanced scalability and performance.</li>
                </ul>
            </section>

            <section className={styles.aboutsec}>
                <h2 className={styles.abouth2}><u>Development Team</u></h2>

                <h3 className={styles.abouth3}>Ansh Raj</h3>
                <p>Ansh Raj is the driving force behind Kuddle, leading the development efforts with his expertise in backend and
                    frontend technologies. With a keen eye for detail and a passion for innovation, Ansh ensures that Kuddle
                    remains at the forefront of the dating scene, delivering exceptional user experiences.</p>

                <h3 className={styles.abouth3}>Ashmit Sinha</h3>
                <p>Ashmit Sinha brings creativity and flair to the Kuddle team, focusing on frontend development, helping in database and user
                    experience optimization. With a knack for design and a commitment to excellence, Ashmit ensures that every
                    interaction on Kuddle is intuitive, engaging, and visually appealing.</p>
            </section>

            <section className={styles.aboutsec}>
                <h2 className={styles.abouth2}><u>Contributing</u></h2>
                <p>We welcome contributions from developers interested in improving and expanding the functionality of Kuddle. If
                    you'd like to contribute, please feel free to fork the repository and submit a pull request with your
                    changes.</p>
            </section>

            <section className={styles.aboutsec}>
                <h2 className={styles.abouth2}><u>Feedback</u></h2>
                <p>We value your feedback! If you have any suggestions, bug reports, or feature requests, please don't hesitate
                    to open an issue on our GitHub repository.</p>
            </section>

            <footer className={styles.aboutfoot}>
                <h3 className={styles.abouth3}>License</h3>
                <p>Kuddle is licensed under the <a href="LICENSE">KIIT License</a>.</p>
            </footer>
        </body>
    </>
  )
}
