import { useState } from 'react'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CreatePost from './Pages/CreateTest'
import DeletePost from './Pages/DeleteTest'
import HomePage from './Pages/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/Create",
    element: <CreatePost />
  }, {
    path: "/Delete",
    element: <DeletePost />
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
