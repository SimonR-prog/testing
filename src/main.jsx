import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './styling/Event_card.css'
import './styling/Calendar_days_card.css'


// import CalendarDaysCard from './CalendarDaysCard.jsx'
import Event_card from './components/Event_card';
import Eventcard from './eventcard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CalendarDaysCard /> */}
    <Eventcard />
    {/* <SmallPaidCard /> */}
  </StrictMode>,
)


