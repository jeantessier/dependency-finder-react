import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import Extract from "./routes/extract"
import Load from "./routes/load"
import Query from "./routes/query"
import Closure from "./routes/closure"
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
    },
    {
        path: '/query',
        element: <Query/>,
    },
    {
        path: '/closure',
        element: <Closure/>,
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
