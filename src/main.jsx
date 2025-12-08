import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Closure, Cycles, Extract, Load, Metrics, NotFound, Query } from './routes'
import './main.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
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
    },
    {
        path: '/cycles',
        element: <Cycles/>,
    },
    {
        path: '/metrics',
        element: <Metrics/>,
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
