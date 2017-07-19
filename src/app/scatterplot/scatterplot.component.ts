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
    var graphData = this.OfficerInvolvedShootingsGraphData;

    var yScale = d3.scaleLinear()
                   .domain([0, d3.max(graphData, function(d) {
                     return d.subjectAge;
                   })])
                   .range([0, h]);

    var svg = d3.select("#subject-age-graph")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("circle")
       .data(graphData)
       .enter()
       .append("circle")
       .attr("cx", function(d, i) {
         return i * (w / graphData.length);
       })
       .attr("cy", function(d) {
         return h - (yScale(d.subjectAge));
       })
       .attr("r", 5);

    svg.selectAll("text")
       .data(graphData)
       .enter()
       .append("text")
       .text(function(d) {
         return d.subjectAge;
       })
       .attr("x", function(d, i) {
         return i * (w / graphData.length);
       })
       .attr("y", function(d) {
         return h - (yScale(d.subjectAge));
       })
  }
}
