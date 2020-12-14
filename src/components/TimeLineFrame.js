import React, {
  useState
} from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const TimeLineFrame = () => {

    const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

    const items = [
      {
        id: 1,
        group: 1,
        title: 'item 1',
        start_time: moment(),
        end_time: moment().add(1, 'hour'),
        canMove: true,
        itemProps: {
          style:{
              background: "red"
          }
        }
      },
      {
        id: 2,
        group: 1,          
        title: 'item 2',
        start_time: moment().add(-0.5, 'hour'),
        end_time: moment().add(0.5, 'hour')
      },
      {
        id: 3,
        group: 1,
        title: 'item 3',
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(3, 'hour')
      }
    ]
    const [ itemsArr, setItemsArr ] = useState( items)

    const handleItemMove = ( itemId, dragTime, newGroupOrder ) => {
    const group = groups[newGroupOrder]
    console.log("itemId: ", itemId)
    console.log("dragTime: ", dragTime)
    const reorderArr = itemsArr.map( 
        item => item.id === itemId 
        ? Object.assign({}, item, {
          start_time: dragTime,
          end_time: dragTime + (item.end_time - item.start_time),
          group: group.id
        }) 
        : item
      )
    setItemsArr(reorderArr)
    console.log("reorderArr: ", reorderArr)
    }
      
    return (
        <div>
            <Timeline 
               groups={groups}
               items={itemsArr}
               defaultTimeStart={moment().add(-12, 'hour')}
               defaultTimeEnd={moment().add(12, 'hour')}
               // 2020-12-14 onMove
               onItemMove={handleItemMove}
            />
        </div>
    )
}

export default TimeLineFrame
