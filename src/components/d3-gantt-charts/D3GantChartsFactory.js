import React, { Component } from "react";
import * as d3 from "d3";
/* eslint-disable import/first */
window.d3 = d3
import "d3-gantt-chart";


class GanttChart extends Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const { tasks, taskTypes, taskStatus, tickFormat } = this.props;
    var gantt = window.d3
      .gantt()
      .taskTypes(taskTypes)
      .taskStatus(taskStatus)
      .tickFormat(tickFormat);
    gantt(tasks);
  }

  render() {
    return null;
  }
}

export default GanttChart;