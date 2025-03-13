import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { enrutador } from './routes/enrutador'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
let router = createBrowserRouter(enrutador)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
