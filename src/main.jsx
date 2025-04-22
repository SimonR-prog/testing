import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './styling/Event_card.css'
import './styling/Calendar_days_card.css'


import PaidStatusesCard from './PaidStatusesCard'
// import CalendarDaysCard from './CalendarDaysCard.jsx'
// import Eventcard from './eventcard'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <CalendarDaysCard /> */}
    {/* <Eventcard /> */}

    <PaidStatusesCard />



  </StrictMode>,
)


