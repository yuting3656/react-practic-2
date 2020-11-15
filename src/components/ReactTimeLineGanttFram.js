import React, {
useState,
} from 'react'
import TimeLine from 'react-gantt-timeline'

function ReactTimeLineGanttFram() {
    let data=[ 
           {id:1,start:new Date(), end:new Date()+2 ,name:'Demo Task 1'},
           {id:2,start:new Date(), end:new Date() + 3,name:'Demo Task 2'},
           {id:3,start:new Date(), end:new Date() + 4,name:'Demo Task 2'},
           {id:3,start:new Date(), end:new Date() + 4,name:'Demo Task 2'},
           {id:3,start:new Date(), end:new Date() + 4,name:'Demo Task 2'},
           {id:3,start:new Date(), end:new Date() + 4,name:'Demo Task 2'},
           {id:3,start:new Date(), end:new Date() + 4,name:'Demo Task 2'},
           {id:3,start:new Date(), end:new Date() + 4,name:'Demo Task 2'},
           {id:3,start:new Date(), end:new Date() + 4,name:'Demo Task 2'},
           {id:3,start:new Date(), end:new Date() + 4,name:'Demo Task 2'},
           {id:3,start:new Date(), end:new Date() + 4,name:'Demo Task 2'}
        ]


    return (
        <div>
            <TimeLine 
            data={data}
            />
        </div>
    )
}

export default ReactTimeLineGanttFram
