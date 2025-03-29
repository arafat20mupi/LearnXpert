import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import QuizProvider from './Provider/QuizProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QuizProvider>
        <RouterProvider router={router} />
      </QuizProvider>
    </AuthProvider>
    <Toaster />
  </StrictMode>,
)
