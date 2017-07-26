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

  public graphElement;
  public pieChartData = [];
  public pieChartLabels = [];
  public SubjectAgeGroupGraphData: SubjectAgeGroup[];

  public pieChartType:string = 'pie';
  // public pieChartLabels:string[];
  // public pieChartData:number[];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private elementRef: ElementRef, private policeService: PoliceService) { }

  ngOnInit() {
    this.graphElement = this.elementRef.nativeElement.querySelector('#subject-age-group-graph');

    setTimeout(() => {
      this.d3SubjectAgeGroupBubble(this.graphElement.clientWidth);
      console.log(this.pieChartData);
      console.log(this.pieChartLabels);
    }, 2000);

    this.getGroupedSubjectAges();
  }

  getGroupedSubjectAges() {
    this.policeService.getGroupedSubjectAges()
    .then(servicePromise => {
      this.SubjectAgeGroupGraphData = servicePromise;

      this.pieChartData = this.SubjectAgeGroupGraphData.map(function(data) {
        return data.count;
      });

      this.pieChartLabels = this.SubjectAgeGroupGraphData.map(function(data) {
        return data.subjectAge;
      });
    });
  }

  onChange(selectedParameter) {
    this.policeService.getPieChartData({param: selectedParameter})
    .then(servicePromise => {
      console.log(servicePromise.data);

      this.pieChartData = servicePromise.data.map(function(data) {
        return data.count;
      });

      this.pieChartLabels = servicePromise.data.map(function(data) {
        return data.selectedParameter;
      });
    });
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
