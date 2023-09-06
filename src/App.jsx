import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Components/Main/Main'
import Home from './Components/Home/Home'

const App = () => {

  const routers =createBrowserRouter([{
    path:'',
    element:<Main/>,
    children: [
      {path:'', element:<Home/>}
    ]


  }])



  return (
    <RouterProvider router={routers} />

  )
}

export default App