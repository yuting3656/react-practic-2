import React, {
    useState,
    useEffect
} from 'react'
import * as Zoom from 'chartjs-plugin-zoom'
import { Bar } from 'react-chartjs-2'

const ChartjsExample2WithZoom = () => {
    const [ chartData, setChartData  ] = useState({});

    const getRandomColors = (numOfBars) => {
        const letters = "01234565789ABCDEF".split("")
        let colors = [];
        for (let i = 0 ; i < numOfBars; i ++) {
            let color = "#"
            for( let k = 0; k < 6; k++) {
               color += letters[Math.floor(Math.random() * 16)]
            }
            colors.push(color)
        }
        return colors
    }

    const chart = () => {
        const labels = [
            'yuting',
            'chris',
            'shera',
            'brand',
            'hy',
            'ellllmon'
        ];

        setChartData({
            labels,
            datasets: [
                {
                   label: "Ratings /10 IMO",
                   data:[10, 7, 7, 8, 9 , 6.88],
                   backgroundColor: getRandomColors(labels.length),
                },
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])
    return (
        <div style={{  width: '750px', height:'750px', marginLeft: 'auto', marginRight: 'auto'  }}>
            <Bar 
              data={chartData}
              options={{
                  responsive: true,
                  title: { text: "Top 10 Rappers", display: true, fontSize: 50},
                  scales: {
                      yAxes: [{
                          ticks: {
                          autoSkip: true, 
                          maxTicksLimit: 10, 
                          beginAtZero: true,
                      },
                      gridLines:{
                          display: true,
                      }
                      }],
                      xAxes:[{
                          gridLines: {
                              display: true
                          }
                      },
                    ],
                  },
                pan: {
                    enabled: true,
                    mode: "xy",
                    speed:  10,
                },
                zoom: {
                    enabled: true,
                    drag: false,
                    mode: "xy",
                    rangeMin: {
                       x: 0,
                       y: 0,
                    },
                    rangeMax: {
                        x: 10,
                        y: 25, 
                    }
                }
              }}
            />
        </div>
    )
}

export default ChartjsExample2WithZoom
