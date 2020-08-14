import React, { useState, useEffect} from 'react'
import {Line } from 'react-chartjs-2'


const ChartjsExample4WithZoomAndTimeLine = () => {
    const [ chartData, setChartData ] = useState({})

    const chart = () => {

        const s1 = {
            label: 'test 1',
            borderColor: 'rgb(11, 49, 143)',
            borderWidth: 15, // 線粗細
            pointRadius: 3, // 起點 終點圓圓的 css default: 3
            fill: false,
            data:[ 
                { x: new Date().getTime() + 1000, y: "MC-22"},
                { x: new Date().getTime() + 4000, y: "MC-22"}
            ]
        }
        const s2 = {
            label: 'test 2',
            borderColor: 'rgb(244, 199, 2)',
            borderWidth: 15, // 線粗細
            pointRadius: 3, // 起點 終點圓圓的 css default: 3

            fill: false,
            data:[ 
                { x: new Date().getTime() + 4000, y: "MC-11"},
                { x: new Date().getTime() + 10000, y: "MC-11"}
            ]
        }
        const s3 = {
            label: 'test 3',
            borderColor: 'rgb(77, 108, 64)',
            borderWidth: 15, // 線粗細
            pointRadius: 3, // 起點 終點圓圓的 css default: 3
            fill: false,
            data:[ 
                { x: new Date().getTime() + 1000, y: "MC-13"},
                { x: new Date().getTime() + 10000, y: "MC-13"}
            ]
        }
        const s4 = {
            label: 'test 4',
            borderColor: 'rgb(91, 182, 71)',
            borderWidth: 15, // 線粗細
            pointRadius: 3, // 起點 終點圓圓的 css default: 3
            fill: false,
            data:[ 
                { x: new Date().getTime() + 1000, y: "MC-01"},
                { x: new Date().getTime() + 10000, y: "MC-01"}
            ]
        }

        setChartData({
            // labels:[ new Date().getTime() + 1000, new Date().getTime() + 10000,],
            datasets:
            [
                s1, s2, s3, s4
            ]
        })
    }
    
    useEffect(() => {
        chart()
    }, [])
    return (
        <div>
             <Line 
               data={chartData}
               options={{
                   legend: {
                     display: false, // show bar 在 top
                   },

                  scales: {
                    xAxes: [{
                        type: 'time',
                        gridLines: {
                            display: true, // 內部隔線
                        },
                        distribution: 'series', // linear, series
                        time: {
                            displayFormats: {
                                second: 'YYYY/MM/DD h:mm:ss' // https://www.chartjs.org/docs/latest/axes/cartesian/time.html
                            }
                        }
                    }],
                    yAxes: [
                        {
                            display: true, // show 在整張圖表左邊
                            type: 'category',
                            labels: ['MC-22', 'MC-11', 'MC-13', 'MC-01'],
                            gridLines: {
                                display: false, // 內部隔線
                            },
                        }
                    ]
                 },

                 tooltips: {
                     callbacks: {
                         // https://www.chartjs.org/docs/latest/configuration/tooltip.html
                        //  title: function(tooltipItem, data) {

                        //  },
                         label: function(tooltipItem, data) {
                             var label = data[tooltipItem.datasetIndex] || '';
                             console.log(data)
                             console.log(data.datasets)
                             console.log(data.datasets[tooltipItem.datasetIndex])
                             console.log(data.datasets[tooltipItem.datasetIndex].data[0]) // start time
                             console.log(data.datasets[tooltipItem.datasetIndex].data[1]) // end time
                             const machine = data.datasets[tooltipItem.datasetIndex].data[0].y
                             return machine
                         },
                         afterLabel: function(tooltipItem, data) {
                            console.log(data.datasets[tooltipItem.datasetIndex].data[0].x) // start time
                            console.log(data.datasets[tooltipItem.datasetIndex].data[1].x) // end time
                            const startTime = data.datasets[tooltipItem.datasetIndex].data[0].x
                            const endTime = data.datasets[tooltipItem.datasetIndex].data[1].x
                            return '工時：' + (+endTime - +startTime)/1000 + 'S'
                         }
                     },
                 }
            }}/>
        </div>
    )
}

export default ChartjsExample4WithZoomAndTimeLine
