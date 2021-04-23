import React from 'react';
import './App.css';

import {
  Row,
  Col,
  Card
} from 'antd'

import JsChartingFram from './components/JsChartingFram'
import ReactTimeLineGanttFram from './components/ReactTimeLineGanttFram'
// react schedule timeline
import ReactScheduleTimeline01 from './components/reactScheduleTimeline/ReactScheduleTimeline01'
import TimeLineFrame from './components/TimeLineFrame'

// CSV
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

// fullcalendar
import FullcalendarEx1 from './components/fullcalendarExample/FullcalendarEx1'

// jsGantt
import JsGanttExample1 from './components/jsGanttExample/JsGanttExample1'

// table
import Table1  from './components/editableTableAnt/Table1'

// stt
import SpeechToText01 from './components/speechToText/SpeechToText01'

// vsjs
import VsjsExample01 from './components/vsjsExample/VsjsExample01'

// jexcel
import JexcelExample01 from './components/jexcelExample/JexcelExample01'


function App() {


  return (
    <> 
    <Row gutter={[8, 8]}>
      <Col spen={24}>
      <Card 
         title="人一定要靠自己 你是醫生！"
        >
          
        {/* <JsChartingFram />
        <EchartsForReactFrame /> */}
        {/* <ReactTimeLineGanttFram /> */}

        {/* D3 */}
        {/* <D3ChartFrame /> */}
        {/* <D3GantChartExample /> */}

        {/* React Calendar Timeline */}
        {/* <TimeLineFrame /> */}
        {/* <ReactScheduleTimeline01 /> */}

        {/* <ReactExportExcelFrame /> */}
        {/* <ReactCsvFrame /> */}

        {/* <JsChartingFram /> */}

        {/* <ReactTimeLineGanttFram /> */}

        {/* Echarts */}
        {/* <EchartsForReactFrame /> */}

        {/* ChartJS */}
        {/* <ChartjsExample2WithZoom /> */}
        {/* <ChartjsExample1 /> */}
        {/* <ChartjsExample3DragAndDrop /> */}
        {/* <ChartjsExample4WithZoomAndTimeLine /> */}

        {/* fullcalendar */}
        {/* <FullcalendarEx1 /> */}

        {/* CSV */}
        {/* < ReactExportExcelFrame /> */}

        {/* JsGantt */}
        {/* <JsGanttExample1 />
        
        {/* Table */}
        <Table1 />

        {/* SpeechToText */}
        {/* <SpeechToText01 /> */}

        {/* vsjs */}
        {/* <VsjsExample01 /> */}

        {/* jexcel */}
        {/* <JexcelExample01 /> */}
        </Card>
      </Col>
        </Row>
    </>
  );
}

export default App;
