import { useState } from 'react'
import './App.css'
import {Title} from './Title.jsx'
import { Footer } from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article>
        <header>
          <img className="header_image" alt='' src='/src/assets/scenera.png'></img>
        </header>
      </article>
      <Title/>
    </>
  )
}

export default App
