import React from 'react';
import './App.css';
import JsChartingFram from './components/JsChartingFram'
import ReactTimeLineGanttFram from './components/ReactTimeLineGanttFram'
import EchartsForReactFrame from './components/EchartsForReactFrame'
// import D3ChartFrame from './components/D3ChartFrame'
import TimeLineFrame from './components/TimeLineFrame'
import ReactExportExcelFrame from './components/csvAndExcel/ReactExportExcelFrame'
import ReactCsvFrame from './components/csvAndExcel/ReactCsvFrame'


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
    </div>
  );
}

export default App;
