import React from 'react';
import './App.css';

import JsChartingFram from './components/JsChartingFram'
import ReactTimeLineGanttFram from './components/ReactTimeLineGanttFram'
import EchartsForReactFrame from './components/EchartsForReactFrame'
import TimeLineFrame from './components/TimeLineFrame'
import ReactExportExcelFrame from './components/csvAndExcel/ReactExportExcelFrame'
import ReactCsvFrame from './components/csvAndExcel/ReactCsvFrame'

// import D3ChartFrame from './components/D3ChartFrame'
// import D3GantChartExample from './components/d3-gantt-charts/D3GantChartExample'
import ChartjsExample1 from './components/chartJs/ChartjsExample1'


function App() {


  return (
    <div>
        {/* <JsChartingFram />
        <ReactTimeLineGanttFram />
        <EchartsForReactFrame /> */}
        {/* <D3ChartFrame /> */}
        {/* <TimeLineFrame /> */}
        {/* <ReactExportExcelFrame /> */}
        <ReactCsvFrame />

        {/* <JsChartingFram /> */}
        {/* <ReactTimeLineGanttFram /> */}
         <EchartsForReactFrame />
        {/* <D3ChartFrame /> */}
        {/* <D3GantChartExample /> */}
        <ChartjsExample1 />
    </div>
  );
}

export default App;
