import React from 'react'
import PaidStatusCard from './components/PaidStatusCard'

const PaidStatusesCard = () => {
    const payStatuses = [
        {
          status: "Paid",
          amount: 1250,
          lastMonth: 1500
        },
        {
            status: "Overdue",
            amount: 25000,
            lastMonth: 1500
        },
        {
            status: "Unpaid",
            amount: 1750,
            lastMonth: 1000
        }
      ]

    return (
        <>
        <div className='paid-statuses'>
        
            {payStatuses.map((payStatus, index) => ( <PaidStatusCard key={index} payStatus={payStatus} /> ))}

        </div> 
        </>
    )
}

export default PaidStatusesCard