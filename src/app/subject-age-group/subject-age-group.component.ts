import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';
import { SubjectAgeGroup } from '../subject-age-group.model';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-subject-age-group',
  templateUrl: './subject-age-group.component.html',
  styleUrls: ['./subject-age-group.component.css'],
  providers: [PoliceService]
})
export class SubjectAgeGroupComponent implements OnInit {

  public SubjectAgeGroupGraphData: SubjectAgeGroup[];
  public graphElement;

  constructor(private elementRef: ElementRef, private policeService: PoliceService) { }

  ngOnInit() {
    this.graphElement = this.elementRef.nativeElement.querySelector('#subject-age-group-graph');

    this.policeService.getGroupedSubjectAges()
    .then(servicePromise => {
      this.SubjectAgeGroupGraphData = servicePromise;
    });

    setTimeout(() => {
      this.d3SubjectAgeGroupBubble(this.graphElement.clientWidth);
    }, 2000);
  }

  onResize(event) {
    this.d3SubjectAgeGroupBubble(event.target.innerWidth);
  }

  d3SubjectAgeGroupBubble(graphWidth) {
    var w = graphWidth;
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
                .html("")
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
       })
       .on("mouseover", function(){
         d3.select(this).style("fill", "green");
       })
       .on("mouseout", function(){
         d3.select(this).style("fill", "black");
       })
       .on("mousedown", function(){
         d3.select(this).transition()
                        .delay(0)
                        .duration(1000)
                        .attr("cy", 100)
         d3.select(this).transition()
                        .delay(1000)
                        .attr("cy", 250);
       })

  }
}
