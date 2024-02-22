import './Footer.css'
import balon from './assets/basketball-outline.svg' 
import ig from './assets/logo-instagram.svg' 
import github from './assets/logo-github.svg' 

export function Footer() {
    return(
        <footer className='Footer__Article'>
            <div className='Footer__Article--line'></div>
            <h1>ELEMIKE</h1>
            <div className='Footer__Article--div'>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/elemikesunny/'>
                        <img src={ig} alt='logo-instagram'/>
                        </a>
                    </li>

                    <li><a href='https://github.com/childishelemike'><img src={github}/></a></li> 
                    <li><a href='https://www.youtube.com/watch?v=4TYv2PhG89A'><img src={balon}/></a></li> 
                    
                </ul>
            </div>
            <div className='Footer__Article--end'>
                
            </div>
        </footer>
    )
}