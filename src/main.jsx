import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Route/Route'
import AuthProviders from './Providers/AuthProviders'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
       <RouterProvider router={routes}></RouterProvider>
    </AuthProviders>
  </StrictMode>,
)
