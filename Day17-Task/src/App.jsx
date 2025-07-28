import { useState } from 'react'
import './App.css'
import Home from './Components//Home/Home'
import Parent from './Components/Parent/Parent'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home/>
        {/* <Parent/>
        <About/>
        <Footer/> */}
      </div>
    </>
  )
}

export default App
