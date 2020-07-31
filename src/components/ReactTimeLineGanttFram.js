import React from 'react'
import TimeLine from 'react-gantt-timeline'

function ReactTimeLineGanttFram() {
    let data=[ 
           {id:1,start:new Date(), end:new Date()+20 ,name:'Demo Task 1'},
           {id:2,start:new Date() + 3, end:new Date() + 4,name:'Demo Task 2'}]
    return (
        <div>
            <TimeLine data={data}  />
        </div>
    )
}

export default ReactTimeLineGanttFram
