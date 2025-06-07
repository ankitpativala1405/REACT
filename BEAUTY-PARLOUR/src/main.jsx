import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import IndexPage from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>,
)
