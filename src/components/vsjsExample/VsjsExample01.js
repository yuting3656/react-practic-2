import React, {
    useEffect,
    useState,
}from 'react'

// import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
// import { Timeline } from 'vis-timeline/standalone'

import Timeline from 'react-visjs-timeline'

//
// IMPORT ZONE
//


const VsjsExample01 = () => {
    const min = new Date(2020, 3, 1); // 1 april
    const max = new Date(2023, 3, 30, 23, 59, 59); // 30 april

    const [ mockData, setMockData ] = useState([ new Date(2020, 5, 1), new Date(2020, 7, 1)  ])

    const options = {
        selectable: true,
        editable: true,
        stack: false,
        itemsAlwaysDraggable: {
            item: true,
            range: true,
        },
        width: '100%',
        height: '600px',
        // stack: true,
        max: new Date(2025, 12, 31),
        min: new Date(2019, 1, 1),
        showMajorLabels: true,
        showCurrentTime: true,
        // zoomMin: 100000,
        type: 'background',
        format: {
            minorLabels: {
                minute: 'h:mma',
                hour: 'ha'
            }
        },
        onMove: function (item, callback) {
            console.log("onMove: ", item)
            var title =
              "Do you really want to move the item to\n" +
              "start: " +
              item.start +
              "\n" +
              "end: " +
              item.end +
              "?";

            if (window.confirm(`Are you sure movine to  ${item.start} ~ ${item.end} ?`)) {
                callback(item); // send back item as confirmation (can be changed)
            }
          },

          onMoving: function (item, callback) {
            console.log("onMoving: ", item)
            if (item.start < min) item.start = min;
            if (item.start > max) item.start = max;
            if (item.end > max) item.end = max;
        
            callback(item); // send back the (possibly) changed item
          },

    }

    const items = [ 
    {    
        id: 1,
        start: mockData[0],
        end: mockData[1],
        content: "A",
        editable: {
            remove: true,
            updateGroup: true,
            updateTime: true,
        },
        selectable: true,
        group: 1

    }, 
    { id: 2,
        start: new Date(2021, 12, 11),
        end: new Date(2022, 12, 12),
        content: "B",
        editable: {
            remove: true,
            updateGroup: true,
            updateTime: true,
        },
        selectable: true,
        group: 2,
        style: "color: balck; background-color: red;"

    }, 
    { id: 3,
        start: new Date(2019, 8, 12),
        end: new Date(2019, 12, 13),
        content: "C",
        editable: {
            remove: true,
            updateGroup: true,
            updateTime: true,
        },
        selectable: true,
        group: 1,
    }, 
] 

const groups = [ 
    { id:1, content: 'group A'}, 
    { id:2, content: 'group B'},  
]

    return (
        <div style={{ padding: '20px'}}>
            <Timeline
             options={options} 
            items={items}
            groups={groups}
            clickHandler={(props, item) => {
                console.log("clickHandler: ", props)
                // setMockData([ new Date(2022, 5, 1),new Date(2022, 7, 1)  ] )
                console.log("clicked: ", props.items)
            }}
            rangechangeHandler={(props, item)=> {
                console.log("rangechangeHandler: ", props)

            }}
            />
            <div id="visualization"></div>

            {/* <XYPlot
              width={300}
              height={300}>
              <HorizontalGridLines />
              <LineSeries
                data={[
                  {x: 1, y: 10},
                  {x: 2, y: 5},
                  {x: 3, y: 15}
                ]}/>
              <XAxis />
              <YAxis />
            </XYPlot> */}
        </div>
    )
}

export default VsjsExample01
