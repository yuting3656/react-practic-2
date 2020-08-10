import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2'
import 'chartjs-plugin-dragdata'


const data = canvas => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "rgba(163, 161, 251, 0.8)");
    gradient.addColorStop(1, "rgba(163, 161, 251, 0.2)");

    return {
        labels: [1, 2, 3, 4,5 ],
        datasets: [
            {
                label: "",
                data: [5, 5, 5, 5, 5],
                backgroundColor: gradient,

                borderColor: ["rgba(163, 161, 251, 1)"],
                borderWidth: 1,
                pointHitRaduis: 5,
                pointRadius: 1,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
                pointHoverBorderColor: "rgba(163, 161, 251, 1)"
            }
        ]
    }
}

const ChartjsExample3DragAndDrop = () => {
    
    const chartReference = useRef({});

    const handleDrag = (e, datasetIndex, index, value) => {
        console.log("e: ",  e)
        console.log("datasetIndex: ", datasetIndex)
        console.log("index: ", index )
        console.log("value: ", value)
        let ref = chartReference.current.chartInstance;
        ref.config.data.datasets.forEach( (dataset) => {
        dataset.data[index] = value;
        })
    } 


    const [ chartOptions, setChartOptions ] = useState(
       {
           onDragEnd: handleDrag,
           dragData: true,
           dragDataRound: 0,
           tooltips: {
               backgroundColor: "rgba(255, 255, 255, 0.6)",
               borderWidth: 1,
               borderColor: "rgba(163, 161, 251, 1)",
               bodyFontColor: "rgba(0, 0, 0, 0.8)",
               titleFontColor: "rgba(0, 0, 0, 0.8)"
           },
           elements: {
               point: { radius: 0, hitRadius: 0, borderWidth: 0 },
               line: { tension: 0 }
           },
           maintainAspectRatio: false,
           legend: false,
           animation: { duration : 0 },
           hover: { animationDuration: 0 },
           responseiveAnimationDuration: 0,
           scales: {
               xAxes: [
                   {
                       gridLines: {
                           color: "rgba(234, 240, 244, 1)"
                       },
                       ticks: {
                           max: 10,
                           min: 0
                       }
                   }
               ],
               yAxes: [
                   {
                       gridLines: {
                           color: "rgba(234, 240, 244, 1)"
                       },
                       ticks: {
                           max: 20,
                           min: 0,
                       }
                   }
               ]
           }
       }
    )


    return (
       <div 
         style={{
             width: "400px",
             height: "300px"
         }} 
        >
        <Line 
          ref={chartReference}
          data={data}
          height={30}
          options={chartOptions}
          redraw={true}
        />    
    </div>);

}

export default ChartjsExample3DragAndDrop
