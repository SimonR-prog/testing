import React from 'react'
import Event_card from './components/Event_card'

const Eventcard = () => {
  const events = [
    {
      category: "Sport",
      title: "American Football",
      location: "Florida",
      date: "Apr 20, 2026",
      price: 2000
    },
    {
      category: "Food",
      title: "Le Bernadin",
      location: "New York",
      date: "Apr 20, 2026",
      price: 120
    },
    {
      category: "Music",
      title: "Linkin Park",
      location: "Rock Am Ring",
      date: "Apr 2, 2026",
      price: 250
    }
  ]

  return (
    <>
      
      <div className='events'>
        
        {events.map((event, index) => ( <Event_card key={index} event={event} /> ))}

      </div>    
    
    </>
  )
}

export default Eventcard