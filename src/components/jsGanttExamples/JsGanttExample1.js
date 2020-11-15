import React, { Component } from 'react'

import JSGantt from 'react-jsgantt'


export default class jsGanttExample1 extends Component {
    
  constructor(props){
    super(props);
    this.data = [{
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
    }];

    this.editorOptions = {
      vCaptionType: 'Complete',  // Set to Show Caption : None,Caption,Resource,Duration,Complete,
      vQuarterColWidth: 36,
      vDateTaskDisplayFormat: 'day dd month yyyy', // Shown in tool tip box
      vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', // Set format to display dates in the "Major" header of the "Day" view
      vWeekMinorDateDisplayFormat: 'dd mon'
    }
  }
    render() {
        return (
            <JSGantt data={this.data} options={this.editorOptions} />
        )
    }
}
