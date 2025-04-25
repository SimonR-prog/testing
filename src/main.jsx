import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './stylings.jsx';

import PaidStatusesCard from './PaidStatusesCard'
import CalendarDaysCard from './CalendarDaysCard.jsx'
import Eventcard from './eventcard'
import Footer from './components/Footer.jsx';
import { BrowserRouter } from 'react-router';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Footer />

      <CalendarDaysCard />
      <Eventcard />
      <PaidStatusesCard />
    
    </BrowserRouter>
  </StrictMode>,
)


