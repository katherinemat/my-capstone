import { Component, OnInit, Input } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';
import { SubjectAgeGroup } from '../subject-age-group.model';

@Component({
  selector: 'app-subject-age-group',
  templateUrl: './subject-age-group.component.html',
  styleUrls: ['./subject-age-group.component.css']
})
export class SubjectAgeGroupComponent implements OnInit {
  @Input() SubjectAgeGroupGraphData: SubjectAgeGroup[];
  public testData = [5, 10, 13, 19, 11];

  constructor() { }

  ngOnInit() {
  }

  testGraph() {
    this.d3SvgBar();
  }

  d3SvgBar() {
    var w = 500;
    var h = 500;
    var padding = 10;
    var graphData = this.SubjectAgeGroupGraphData;

    var rScale = d3.scaleLinear()
                   .domain([0, d3.max(graphData, function(d) {
                     return d.count;
                   })])
                   .range([2, 20]);

    var xScale = d3.scaleLinear()
                   .domain([0, d3.max(graphData, function(d, i) {
                     return d.subjectAge;
                   })])
                   .range([padding, w - padding]);

    var svg = d3.select("#subject-age-group-graph")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("circle")
       .data(graphData)
       .enter()
       .append("circle")
       .attr("cx", function(d, i) {
         return xScale(d.subjectAge);
       })
       .attr("cy", 250)
       .attr("r", function(d) {
         return rScale(d.count);
       });
  }
}
