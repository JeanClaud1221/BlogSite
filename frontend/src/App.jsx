import { useState } from 'react'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './Pages/index'
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
