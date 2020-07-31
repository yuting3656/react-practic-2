import React from 'react'
import { JSCharting } from 'jscharting-react';


const JsChartingFram = () => {

    const config = {
        type: 'horizontal column',
        zAxis_scale_type: "stacked",
        xAxis_scale_type: "time",  
        legend_defaultEntry_value: "{days(%yRangeSums*1)}d",
        series: [
            {
              points: [
                { id: "first", x: "First Project", y: ["1/1/2019", "2/1/2019"] },
                { id: "second", x: "Second Project", y: ["1/1/2019", "3/1/2019"] },
              ]
            }
        ]
    };
    
    const divStyle = {
        maxWidth: '700px',
        height: '400px',
        margin: '0px auto'
    };
    
    return (
        <div>
            <div style={divStyle}><JSCharting options={config} /></div>
        </div>
    )
}


export default  JsChartingFram;