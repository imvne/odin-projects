import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client.js'
import App from './app.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)