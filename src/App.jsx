import { useState } from 'react'
import './App.css'
import person from './assets/scenera.png'
import {Title} from './Title.jsx'
import { Footer } from './Footer.jsx'
import { Copy } from './Copy.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article>
        <header>
          <img className="header_image" alt='personas' src={person}></img>
        </header>
      </article>
      <Title/>
      <Footer/>
      <Copy/>
    </>
  )
}

export default App
