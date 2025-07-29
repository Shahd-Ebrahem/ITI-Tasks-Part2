import { useState } from 'react'
import './App.css'
import Home from './Components//Home/Home'
import Parent from './Components/Parent/Parent'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Cats from './Components/Cats/Cats'
import Dogs from './Components/Dogs/Dogs'
import Send from './Components/Send/Send'
import Effect from './Components/Effect/Effect'

function App() {
  // index: true, element: <Home/>
  const routes = createBrowserRouter([
    {path:'/', element:<Layout/>, children: [ 
      {index: true, element: <Home/>},
      {path:'/parent', element:<Parent/>
        ,children:[
        {path: 'cats', element: <Cats/>},
        {path: 'dogs', element: <Dogs/>},
      ]
    },
      {path: '/send', element: <Send/> },
      {path: '/About', element: <About/> },
      {path:'/effect', element:<Effect/>},
      {path:'*', element:<Footer/>},
    ]},
  ])


  return (
    <>
        <RouterProvider router={routes} />
    </>
  );
}

export default App
