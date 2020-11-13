import React from 'react'
import JSGantt from 'react-jsgantt'

const JsGanttExample1 = () => {

    const data = [{
        'pID': 1,
      'pName': 'Define Chart API v2',
      'pStart': '',
      'pEnd': '',
      'pClass': 'ggroupblack',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 0,
      'pGroup': 1,
      'pParent': 0,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': 'Some Notes text'
    }]

    const editorOptions = {
        vCaptionType: 'Complete',  // Set to Show Caption : None,Caption,Resource,Duration,Complete,
        vQuarterColWidth: 100,
        vDateTaskDisplayFormat: 'day dd month yyyy', // Shown in tool tip box
        vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', // Set format to display dates in the "Major" header of the "Day" view
        vWeekMinorDateDisplayFormat: 'dd mon'
    }
    return (
        <JSGantt data={data} options={editorOptions} />
    )
}

export default JsGanttExample1
