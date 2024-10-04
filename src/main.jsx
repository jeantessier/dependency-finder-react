import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Notfound from "./routes/notfound"
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Notfound/>,
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
