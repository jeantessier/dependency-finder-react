import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import Extract from "./routes/extract"
import Load from "./routes/load"
import Notfound from "./routes/notfound"
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Notfound/>,
    },
    {
        path: '/extract',
        element: <Extract/>,
    },
    {
        path: '/load',
        element: <Load/>,
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
