import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import { SubjectAgeGroup } from '../subject-age-group.model';

@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css']
})
export class ScatterplotComponent implements OnInit {
  @Input() OfficerInvolvedShootingsGraphData: OfficerInvolvedShooting[];
  @Input() SubjectAgeGroupGraphData: SubjectAgeGroup[];

  public testData = [5, 10, 13, 19, 11];

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log(this.SubjectAgeGroupGraphData);
    this.d3SvgScatterplot();
  }

  // d3SubjectAgeGroupScatterplot() {
  //   var h = 500;
  //   var w = 500;
  //   var padding = 10;
  //   var graphData = this.testData;
  //
  //   var pack = d3.pack()
  //                 .size([h, w])
  //                 .padding(padding);
  //
  //   var root = d3.hierarchy(graphData);
  //   console.log(root);
  //
  //   var circles = svg.selectAll(".node")
  //                    .data(graphData)
  //                    .enter()
  //                    .append("circle")
  //                    .attr("class", "node")
  //                    .attr("r", 10);
  //
  //   // var svg = d3.select("#subject-age-group-scatterplot")
  //   //             .append("svg")
  //   //             .attr("width", w)
  //   //             .attr("height", h)
  //   //             .append("g")
  //   //             .attr("transform", "translate(0,0)");
  //   //
  //   //
  //   //
  //   // simulation.nodes(graphData);
  //   //
  //
  //   // var root = d3.hierarchy(graphData);
  //   //
  //   // svg.selectAll("circle")
  //   //    .data(root)
  //   //    .enter()
  //   //    .append("circle")
  //   //    .attr("cx", function(d, i) {
  //   //      return (i);
  //   //    })
  //   //    .attr("cy", function(d) {
  //   //      return d;
  //   //    })
  //   //    .attr("r", function(d) {
  //   //      return d.count;
  //   //    });
  // }

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
