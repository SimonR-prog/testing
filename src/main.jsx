import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Eventcard from './eventcard.jsx'
import './App.css'
import './styling/Event_card.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Eventcard />
  </StrictMode>,
)
