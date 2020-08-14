import React from 'react';
import './App.css';

import JsChartingFram from './components/JsChartingFram'
import ReactTimeLineGanttFram from './components/ReactTimeLineGanttFram'
import TimeLineFrame from './components/TimeLineFrame'
import ReactExportExcelFrame from './components/csvAndExcel/ReactExportExcelFrame'
import ReactCsvFrame from './components/csvAndExcel/ReactCsvFrame'
// Echarts
import EchartsForReactFrame from './components/EchartsForReactFrame'

// D3
// import D3ChartFrame from './components/D3ChartFrame'
// import D3GantChartExample from './components/d3-gantt-charts/D3GantChartExample'

// chartsjs
import ChartjsExample1 from './components/chartJs/ChartjsExample1'
import ChartjsExample2WithZoom from './components/chartJs/ChartjsExample2WithZoom'
import ChartjsExample3DragAndDrop from './components/chartJs/ChartjsExample3DragAndDrop'
import ChartjsExample4WithZoomAndTimeLine from './components/chartJs/ChartjsExample4WithZoomAndTimeLine'


function App() {


  return (
    <> 
    <div style={{ width: "1100px"}}>
        {/* <JsChartingFram />
        <ReactTimeLineGanttFram />
        <EchartsForReactFrame /> */}

        {/* D3 */}
        {/* <D3ChartFrame /> */}
        {/* <D3GantChartExample /> */}

        {/* <TimeLineFrame /> */}
        {/* <ReactExportExcelFrame /> */}
        {/* <ReactCsvFrame /> */}

        {/* <JsChartingFram /> */}

        {/* <ReactTimeLineGanttFram /> */}

        {/* Echarts */}
        {/* <EchartsForReactFrame /> */}

        {/* ChartJS */}
        {/* <ChartjsExample2WithZoom /> */}
        {/* <ChartjsExample1 /> */}
        <ChartjsExample3DragAndDrop />
        {/* <ChartjsExample4WithZoomAndTimeLine /> */}
        </div>
    </>
  );
}

export default App;
