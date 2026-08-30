import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'


const Body = () => {
    const appRout = createBrowserRouter([
        {
            path:"/",
            element: <Login/>,
        },
        {
            path:"/browse",
            element: <Browse/>,
        }
    ]);

  return (
    <div>
        <RouterProvider router={appRout}/>
    </div>
  )
}

export default Body
