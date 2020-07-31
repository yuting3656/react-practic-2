import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';


function D3ChartFrame() {


    const myRef = useRef()
    const dataSet = [ 100, 200, 300, 400, 500 ]

    useEffect(() => {
        console.log(myRef)
        let size = 500
        const colors = { green: '#4DC87F', lightGreen: '#D9F0E3' };
        let width = 960, height = 480, offset = 48;
        width += offset * 2;
        height += offset * 2;
        let dimensions = '' + 0 + ' ' + 0 + ' ' + width + ' ' + height;
    
        let svg = d3.select(myRef.current)
        .append('svg')
        .attr('id', 'scene', true)
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', dimensions)
        .classed('svg-content', true);
    
        const steps = ['工一', '工1', '工2', '工3', '工4', '工5', '工6', '工7', '工8', '工9', '工10', '工11'];
        let stepWidth = (width - offset * 2) / (steps.length - 1),
        currentStep = '0';
        
        let progressBar = svg.append('g')
        .attr('transform', 'translate(' + offset + ',' + offset + ')')
        .style('pointer-events', 'none');
    
        let progressBackground = progressBar.append('rect')
        .attr('fill', colors.lightGreen)
        .attr('height', 8)
        .attr('width', width - offset * 2)
        .attr('rx', 4)
        .attr('ry', 4);
    
        const progress = progressBar.append('rect')
        .attr('fill', colors.green)
        .attr('height', 8)
        .attr('width', 0)
        .attr('rx', 4)
        .attr('ry', 4);
    
        progress.transition()
        .duration(1000)
        .attr('width', function(){
            var index = steps.indexOf(currentStep);
            return (index + 1) * stepWidth;
        });
    
        progressBar.selectAll('circle')
        .data(steps)
        .enter()
        .append('circle')
        .attr('id', function(d, i){ return 'step_' + i; })
        .attr('cx', function(d, i){ return i * stepWidth; })
        .attr('cy', 4)
        .attr('r', 20)
        .attr('fill', '#FFFFFF')
        .attr('stroke', colors.lightGreen)
        .attr('stroke-width', 6)
    
        progressBar.selectAll('text')
        .data(steps)
        .enter()
        .append('text')
        .attr('id', function(d, i){ return 'label_' + i; })
        .attr('dx', function(d, i){ return i * stepWidth; })
        .attr('dy', 10)
        .attr('text-anchor', 'middle')
        .text(function(d, i) { return d; })
      
    
      }, [dataSet])
    return (
        <div>
               <div ref={myRef}></div>
        </div>
    )
}

export default D3ChartFrame;
