import { Component, OnInit, Input } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css']
})
export class ScatterplotComponent implements OnInit {
  @Input() OfficerInvolvedShootingsGraphData: OfficerInvolvedShooting[];

  public testData = [5, 10, 13, 19, 11];

  constructor() { }

  ngOnInit() {
  }

  test() {
    this.d3SvgScatterplot();
  }

  d3SvgScatterplot() {
    var h = 500;
    var w = 800;
    var padding = 30;
    var graphData = this.OfficerInvolvedShootingsGraphData;

    var yScale = d3.scaleLinear()
                   .domain([0, d3.max(graphData, function(d) {
                     return d.subjectAge;
                   })])
                   .range([padding, h - padding]);

    var xScale = d3.scaleLinear()
                   .domain([0, d3.max(graphData, function(d, i) {
                     return i;
                   })])
                   .range([padding, w - padding]);

    //consider adding .clamp(true) in order to take any numbers outside the domain and force them to round to the nearest high or low value. or clamp() lets scale return numbers outside a range if a number is outside the given domain
    var rScale = d3.scaleLinear()
                   .domain([0, d3.max(graphData, function(d) {
                     return d.subjectAge;
                   })])
                   .range([2, 5]);

    var yAxis = d3.axisLeft(yScale);

    var svg = d3.select("#test-scatterplot")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("circle")
       .data(graphData)
       .enter()
       .append("circle")
       .attr("cx", function(d, i) {
         return xScale(i);
       })
       .attr("cy", function(d) {
         return h - (yScale(d.subjectAge));
       })
       .attr("r", function(d) {
         return rScale(d.subjectAge);
       });

    svg.selectAll("text")
       .data(graphData)
       .enter()
       .append("text")
       .text(function(d) {
         return d.subjectAge;
       })
       .attr("x", function(d, i) {
         return xScale(i);
       })
       .attr("y", function(d) {
         return h - (yScale(d.subjectAge));
       });

    svg.append("g")
       .attr("class", "axis")
       .attr("transform", "translate(" + (padding) + ", 0)")
       .call(yAxis);
  }
}
