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
  }

  test() {
    console.log(this.OfficerInvolvedShootingsGraphData);
    this.d3SvgBar();
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

    // svg.selectAll("circle")
      //   .data(this.graphData)
      //   .enter()
      //   .append("circle")
      //   //i is index position, d is piece of data
      //   .attr("cx", function(d, i) {
      //     return (i * 50) + 25;
      //   })
      //   .attr("cy", h/2)
      //   .attr("r", function(d) {
      //     return d;
      //   })
      //   .attr("fill", "yellow")
      //   .attr("stroke", "orange")
      //   .attr("stroke-width", function(d) {
      //       return d/2;
      //   });
  }

  d3Html() {
    d3.select("#outside").selectAll("div")
      .data(this.OfficerInvolvedShootingsGraphData)
      .enter()
      .append("div")
      // .text(function(d) { return d; })
      // .style("color", function(d) {
      //   if (d > 3) {
      //     return "green";
      //   } else {
      //     return "blue";
      //   }
      // })
      .attr("class", "bar")
      .style("width", function(d) {
        return d.summary.length / 10 + "px";
      });
  }

}
