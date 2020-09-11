import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const FullcalendarEx1 = ()  => {
    return (
        <div>
            <FullCalendar 
               plugins={[ dayGridPlugin ]}
               initialView="dayGridMonth"
            />
        </div>
    )
}

export default FullcalendarEx1
