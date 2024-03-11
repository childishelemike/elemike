import './Footer.css'
import music from './assets/musical-notes-outline.svg'
import ig from './assets/logo-instagram.svg'
import github from './assets/logo-github.svg'
import { motion, MotionConfig } from 'framer-motion'



export function Footer() {
    const initial = { opacity: 0, y: 60 };
    const whileInView = { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } };
    const viewport = { once: false, amount: 0.5 };

    return (
        <MotionConfig reducedMotion='user'>
            <footer className='Footer__Article'>
                <div className='Footer__Article--line'></div>
                <article className='Footer__secondArticle'>
                    <motion.div className='Footer__Article--div' initial={initial} whileInView={whileInView} viewport={viewport}>
                        <h1 className='Footer__Article--h1'>ELEMIKE</h1>
                        <ul>
                            <li><a href='https://www.instagram.com/elemikesunny/' aria-label='My Personal Instagram'><img src={ig} alt='logo-instagram' /></a></li>
                            <li><a href='https://github.com/childishelemike' aria-label='Personal Git'><img src={github} alt='Github logo' /></a></li>
                            <li><a href='https://www.youtube.com/watch?v=8aVRl5XG-Bs' aria-label='My Favorite song'><img src={music} alt='Music logo' /></a></li>

                        </ul>
                    </motion.div>

                    <div className='Footer__Article--end'>
                        <motion.div className='Footer__Article--published' initial={initial} whileInView={whileInView} viewport={viewport}>
                            <h6 className='Footer__Article--h6'>Publicado</h6>
                            <p>Edición N°23</p>
                            <p>Marzo 2024</p>
                        </motion.div>
                        <motion.div className='Footer__Article--editors' initial={initial} whileInView={whileInView} viewport={viewport}>
                            <h6 className='Footer__Article--h6'>Dedicado a:</h6>
                            <p>Dilia Torres</p>
                            <p>Andrea Torres</p>
                            <p>Paula Sosa</p>
                            <p>Mafe Rubiano</p>
                        </motion.div>
                    </div>
                </article>


            </footer>
        </MotionConfig>
    )
}