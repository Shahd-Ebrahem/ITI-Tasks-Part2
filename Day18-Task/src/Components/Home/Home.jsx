import React, { useState } from "react" 
import Navbar from '../Navbar/Navbar'
import Parent from '../Parent/Parent'
import About from '../About/About'
import Footer from '../Footer/Footer'


export default function Home() {

  let [counter,setCounter] = useState(0);
  let [nums,setNums] = useState([0,10,20,30,40,50])
  let newNums = nums.map( (num) => num + 10 )
  function Increase (param){
    setCounter(counter+param)
  }

  return (
    <>
    {/* <Navbar/> */}
    {/* <h1>Counter: {counter}</h1> */}
    <div className={ counter>30? 'bg-info':'bg-warning' }>
      <h1>Counter: {counter}</h1>
    </div>
    <button className="btn btn-dark" onClick={function(){Increase(10)}}>Increase Counter</button>
    
    <div >
    <ul className='bg-info text-center mt-3'>
      {newNums.map( (num) => <h6> <li>{num}</li> </h6> )}
    </ul>
    </div>
    </>
  )
}
