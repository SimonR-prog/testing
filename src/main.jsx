import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './stylings.jsx';

import PaidStatusesCard from './PaidStatusesCard'
import CalendarDaysCard from './CalendarDaysCard.jsx'
import Eventcard from './eventcard'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <CalendarDaysCard />
    <Eventcard />
    <PaidStatusesCard />



  </StrictMode>,
)


