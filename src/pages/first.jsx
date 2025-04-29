import React from 'react'

import PaidStatusesCard from '../PaidStatusesCard'
import CalendarDaysCard from '../CalendarDaysCard.jsx'
import Eventcard from '../eventcard'
import Footer from '../components/Footer.jsx';

const First = () => {
  return (
    <>
        <Footer />

        <CalendarDaysCard />
        <Eventcard />
        <PaidStatusesCard />
    </>
  )
}

export default First