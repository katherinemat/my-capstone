import { Component, OnInit, Input } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() OfficerInvolvedShootingsGraphData: OfficerInvolvedShooting[];
  public testData = [5, 10, 13, 19, 11];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.d3SvgBarHorizontal(), 1000);
  }

  test() {
    console.log(this.OfficerInvolvedShootingsGraphData);
  }

  d3SvgBarHorizontal() {
    var w = 800;
    var h = 300;
    var barPadding = 1;
    //declared locally because some d3 functions can't reach all the way out to component properties
    var graphData = this.OfficerInvolvedShootingsGraphData;

    var yScale = d3.scaleLinear()
                   .domain([0, d3.max(graphData, function(d) {
                     return d.summary.length;
                   })])
                   .range([0, h]);

    var xScale = d3.scaleTime()
                   .domain([new Date(2005, 0, 1), new Date(2017, 0, 1)])
                   .range([0, w]);

    var svg = d3.select("#test-bar")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    console.log(xScale.invert(200));
    console.log(xScale(new Date(2006, 0, 1, 5)));

    svg.selectAll("rect")
        .data(graphData)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
          console.log(new Date(d.date));
          return xScale(new Date(d.date));
        })
        .attr("y", function(d, i) {
          // return w - (d * 4);
          return h - yScale(d.summary.length);
        })
        .attr("width", function(d) {
          return w / graphData.length - barPadding;
        })
        .attr("height", function(d) {
          return yScale(d.summary.length);
        })
        .attr("fill", "teal");

    // svg.selectAll("text")
    //     .data(graphData)
    //     .enter()
    //     .append("text")
    //     .text(function(d, i) {
    //       return d.summary.length;
    //     })
    //     .attr("x", function(d) {
    //       return xScale(d.summary.length) - 30;
    //     })
    //     .attr("y", function(d, i) {
    //       return (i + 1) * (h / graphData.length);
    //     });
  }

  d3SvgBar() {
    var w = 500;
    var h = 1600;
    var barPadding = 1;
    //declared locally because some d3 functions can't reach all the way out to component properties
    var graphData = this.OfficerInvolvedShootingsGraphData;

    var xScale = d3.scaleLinear()
                   .domain([0, d3.max(graphData, function(d) {
                     return d.summary.length;
                   })])
                   .range([0, w]);

    var svg = d3.select("#test-bar")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("rect")
        .data(graphData)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", function(d, i) {
          // return w - (d * 4);
          return i * (h / graphData.length);
        })
        .attr("width", function(d) {
          return xScale(d.summary.length);
        })
        .attr("height", function() {
          return h / graphData.length - barPadding;
        })
        .attr("fill", "teal");

    svg.selectAll("text")
        .data(graphData)
        .enter()
        .append("text")
        .text(function(d, i) {
          return d.summary.length;
        })
        .attr("x", function(d) {
          return xScale(d.summary.length) - 30;
        })
        .attr("y", function(d, i) {
          return (i + 1) * (h / graphData.length);
        });
  }
}
