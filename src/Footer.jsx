import './Footer.css'
import music from './assets/musical-notes-outline.svg'
import ig from './assets/logo-instagram.svg'
import github from './assets/logo-github.svg'



export function Footer() {

    return (

        <footer className='Footer__Article'>
            <div className='Footer__Article--line'></div>
            <article className='Footer__secondArticle'>
                <div className='Footer__Article--div'>
                    <h1 className='Footer__Article--h1'>ELEMIKE</h1>
                    <ul>
                        <li><a href='https://www.instagram.com/elemikesunny/' aria-label='My Personal Instagram'><img src={ig} alt='logo-instagram' /></a></li>
                        <li><a href='https://github.com/childishelemike' aria-label='Personal Git'><img src={github} alt='Github logo' /></a></li>
                        <li><a href='https://www.youtube.com/watch?v=8aVRl5XG-Bs' aria-label='My Favorite song'><img src={music} alt='Music logo' /></a></li>

                    </ul>
                </div>

                <div className='Footer__Article--end'>
                    <div className='Footer__Article--published'>
                        <h6 className='Footer__Article--h6'>Publicado</h6>
                        <p>Edición N°23</p>
                        <p>Marzo 2024</p>
                    </div>
                    <div className='Footer__Article--editors'>
                        <h6 className='Footer__Article--h6'>Dedicado a:</h6>
                        <p>Andrea Torres</p>
                    </div>
                </div>
            </article>


        </footer>
    )
}