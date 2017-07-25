import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() OfficerInvolvedShootingsGraphData: OfficerInvolvedShooting[];
  // @ViewChild('test-bar') div;
  public graphElement;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.graphElement = this.elementRef.nativeElement.querySelector('div');

    setTimeout(() => this.d3SvgBarHorizontal(this.graphElement.clientWidth), 1000);
  }

  // ngAfterViewInit() {
  //   console.log(this.graphElement);
  // }

  onResize(event) {
    this.d3SvgBarHorizontal(event.target.innerWidth);
  }

  onYearChange(year) {
  }

  test() {
    this.OfficerInvolvedShootingsGraphData = [];
    for(var i = 0; i < this.OfficerInvolvedShootingsGraphData.length; i++) {
      if(this.OfficerInvolvedShootingsGraphData[i].subjectRace == "white") {
        this.OfficerInvolvedShootingsGraphData.push(this.OfficerInvolvedShootingsGraphData[i]);
      }
    }

    this.d3SvgBarHorizontal(this.graphElement.clientWidth);
    console.log(this.OfficerInvolvedShootingsGraphData);
  }

  d3SvgBarHorizontal(graphWidth) {
    var w = graphWidth;
    // var w = this.graphElement.clientWidth;
    var h = 300;
    var padding = 20;
    var barPadding = 1;
    //declared locally because some d3 functions can't reach all the way out to component properties
    var graphData = this.OfficerInvolvedShootingsGraphData;

    var yScale = d3.scaleLinear()
                   .domain([0, d3.max(graphData, function(d) {
                     return d.summary.length;
                   })])
                   .range([padding, h - padding]);

    var xScale = d3.scaleTime()
                   .domain([d3.min(graphData, function(d) {
                     return new Date(d.date);
                   }),
                   d3.max(graphData, function(d) {
                     return new Date(d.date);
                   })])
                   .range([padding, w - padding]);

    var xAxis = d3.axisBottom(xScale);

    var svg = d3.select("#test-bar")
                .html("")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("rect")
        .data(graphData)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
          return xScale(new Date(d.date));
        })
        .attr("y", function(d, i) {
          // return w - (d * 4);
          return h - yScale(d.summary.length);
        })
        .attr("width", function(d) {
          return w / graphData.length;
        })
        .attr("height", function(d) {
          return yScale(d.summary.length) - padding;
        })
        .attr("fill", "purple")
        .attr("fill-opacity", "0.3")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    function handleMouseOver(d, i) {
      d3.select(this).attr("fill", "teal");

      svg.append("text")
         .attr("id", "mouse-over-text")
         .attr("x", w / 2)
         .attr("y", 50)
         .text(function() {
           return d.summary.length;
         });
    }

    function handleMouseOut(d, i) {
      d3.select(this).attr("fill", "purple");
      d3.select("#mouse-over-text").remove();
    }

    svg.append("g")
       .attr("class", "axis")
       .attr("transform", "translate(" + 0 + "," + (h - padding) + ")")
       .call(xAxis);

    // function update(graphData) {
    //   xScale.domain([d3.min(graphData, function(d) {
    //     return new Date(d.date);
    //   }),
    //   d3.max(graphData, function(d) {
    //     return new Date(d.date);
    //   })])
    // }

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
