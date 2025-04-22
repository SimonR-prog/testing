import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './styling/Event_card.css'
import './styling/Calendar_days_card.css'
import CalendarDaysCard from './CalendarDaysCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalendarDaysCard />
  </StrictMode>,
)
