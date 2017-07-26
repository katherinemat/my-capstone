import { Component, ViewChild, OnInit, Input, ElementRef } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';
import { SubjectAgeGroup } from '../subject-age-group.model';
import { PoliceService } from '../police.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-subject-age-group',
  templateUrl: './subject-age-group.component.html',
  styleUrls: ['./subject-age-group.component.css'],
  providers: [PoliceService]
})
export class SubjectAgeGroupComponent implements OnInit {

  public SubjectAgeGroupGraphData: SubjectAgeGroup[];
  public graphElement;
  public pieChartData = [];
  public pieChartLabels = [];
  public pieChartColors = [
    { // grey
      backgroundColor: [
        'rgba(0, 125, 81, 0.8)',
        'rgba(56, 135, 215, 0.8)',
        'rgba(215, 215, 56, 0.8)',
        'rgba(255, 33, 143, 0.8)',
        'rgba(191, 196, 223, 0.8)',
        'rgba(56, 215, 56, 0.8)',
        'rgba(96, 174, 146, 0.8)',
        'rgba(255, 154, 33, 0.8)',
        'rgba(96, 108, 174, 0.8)',
        'rgba(56, 215, 136, 0.8)',
        'rgba(205, 215, 56, 0.8)',
        'rgba(255, 33, 33, 0.8)',
        'rgba(126, 215, 56, 0.8)',
        'rgba(56, 215, 66, 0.8)',
        'rgba(56, 215, 146, 0.8)',
        'rgba(56, 205, 215, 0.8)',
        'rgba(223, 255, 33, 0.8)',
        'rgba(0, 19, 125, 0.8)',
        'rgba(136, 56, 215, 0.8)',
        'rgba(215, 56, 214, 0.8)',
        'rgba(255, 116, 116, 0.8)',
        'rgba(215, 56, 56, 0.8)',
        'rgba(148,159,177, 0.8)',
        'rgba(166, 166, 166, 0.8)',
        'rgba(255, 200, 200, 0.8)',
        'rgba(235, 255, 116, 0.8)',
        'rgba(56, 215, 97, 0.8)',
        'rgba(56, 215, 177, 0.8)',
        'rgba(215, 118, 56, 0.8)',
        'rgba(215, 136, 56, 0.8)',
        'rgba(56, 174, 215, 0.8)',
        'rgba(56, 94, 215, 0.8)',
        'rgba(97, 56, 215, 0.8)',
        'rgba(56, 214, 215, 0.8)',
        'rgba(0, 56, 215, 0.8)',
        'rgba(198, 56, 215, 0.8)',
        'rgba(219, 219, 219, 0.8)',
        'rgba(215, 56, 153, 0.8)',
        'rgba(215, 56, 73, 0.8)',
        'rgba(113, 113, 113, 0.8)'
      ],
      borderColor: 'white',
      pointBackgroundColor: 'white',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'white'
    }
  ];
  public pieChartType:string = 'pie';

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
    }, 2000);

    this.getGroupedSubjectAges();
  }

  getGroupedSubjectAges() {
    this.policeService.getGroupedSubjectAges()
    .then(servicePromise => {
      this.SubjectAgeGroupGraphData = servicePromise;

      this.pieChartLabels = this.SubjectAgeGroupGraphData.map(function(data) {
        return data.subjectAge;
      });

      setTimeout(() => {
        this.pieChartData = this.SubjectAgeGroupGraphData.map(function(data) {
          return data.count;
        });
      }, 500);

      // setTimeout(() => {
      //   this.pieChartColors[0].backgroundColor = this.generateRandomColors(this.pieChartData.length);
      // }, 100);

    });
  }

  onChange(selectedParameter) {
    this.policeService.getPieChartData({param: selectedParameter})
    .then(servicePromise => {
      this.setChart(servicePromise.data, selectedParameter);
    });
  }

  setChart(pieChartObjects, parameter) {
    this.pieChartLabels = pieChartObjects.map(function(data) {
      return data[parameter];
    });

    setTimeout(() => {
      this.pieChartData = pieChartObjects.map(function(data) {
        return data.count;
      });
    }, 50);

    // setTimeout(() => {
    //   this.pieChartColors[0].backgroundColor = this.generateRandomColors(this.pieChartData.length);
    // }, 100);
  }

  // generateRandomColors(amount) {
  //   let colors = [];
  //   var letters = '0123456789ABCDEF';
  //   for(var j = 0; j < amount; j++) {
  //     var color = '#';
  //     for (var i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     colors.push(color);
  //   }
  //   return colors;
  // }

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
