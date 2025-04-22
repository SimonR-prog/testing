import React from 'react'
import CalendarDayCard from './components/CalendarDayCard'

const CalendarDaysCard = () => {


    const calendar_days = [
        {
            date: "12",
            day: "Mon",
            title: "Fashion Show",
            description: "Fashion show for the homeless.",
            theme: "Fashion",
            startTime: "12:00",
            endTime: "13:30"
        },
        {
            date: "13",
            day: "Tue",
            title: "Dinner",
            description: "Eating the rich.",
            theme: "Dinner",
            startTime: "11:00",
            endTime: "13:00"
        },
        {
            date: "14",
            day: "Wed",
            title: "Fashion Show",
            description: "How to look nice other peoples clothes.",
            theme: "Fashion",
            startTime: "13:00",
            endTime: "16:00"
        }
    ]


    return (
        <>
            <div>

                {calendar_days.map((calendarDays, index) => ( <CalendarDayCard key={index} calendarDays={calendarDays} /> ))}

            </div>
        </>
    )
}

export default CalendarDaysCard