import React, { useState } from 'react'
import Child from '../Child/Child'

export default function Parent() {

    let [userName,setUserName] = useState ("Shahd Ebrahem")
  return ( <>

    <div className='text-2xl bg-info p-4'>
        <h1>Parent</h1>
        <Child data={userName} />
    </div>

    </>
  )
}
