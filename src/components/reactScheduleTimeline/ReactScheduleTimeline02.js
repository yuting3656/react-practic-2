import React from 'react'
import Timeline from 'react-calendar-timeline'
import {   
    TimelineHeaders,
    SidebarHeader,
    DateHeader,
    TimelineMarkers,
    CustomMarker,
    TodayMarker,
    CursorMarker
} from 'react-calendar-timeline'


const ReactScheduleTimeline02 = () => {
    return (
        <Timeline>
            <TimelineHeaders >
             {/* left sidebar */}
             <SidebarHeader>
               {({ getRootProps }) => {
                   console.log("getRootProps(): ", getRootProps())
                    return <Row style={{ backgroundColor: '#F1A709', width: 150, padding: 'auto'}} >  
                 <Col>
                 </Col>
                    </Row>
               }}
             </SidebarHeader>
             {/* right sidebar */}
             <SidebarHeader variant="right" headerData={{someData: 'extra'}}>
               {({ getRootProps, data }) => {
                 return <div 
                //  {...getRootProps()}
                 style={{ backgroundColor: '#F1A709', width: 150, padding: 'auto'}}
                 > 人一定要靠自己 Right {data.someData}</div>
               }}
             </SidebarHeader>
               {/* 第一排的地方 （點選： 將時間軸 觀察角度拉大 ex: 月 ---> 年 ） */}
              <DateHeader unit="primaryHeader" style={{ backgroundColor:'#6F94CD', fontWeight: 'bold', border: 'none', minHeight: '8vh' }}/>
               {/* 第二排的地方 （點選： 將時間軸 觀察角度拉大 ex: 小時 ---> 分鐘 ） */}
              <DateHeader style={{ color:'#8AA228', fontWeight: 'bold', minHeight: '7vh'  }}/>
            
            </TimelineHeaders>
        </Timeline>
    )
}

export default ReactScheduleTimeline02
