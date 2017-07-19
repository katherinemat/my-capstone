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
    this.d3Svg();
  }

  d3Svg() {
    var w = 500;
    var h = 1600;
    var barPadding = 1;
    var testData = this.OfficerInvolvedShootingsGraphData;

    var svg = d3.select("#summary-length-graph")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    svg.selectAll("rect")
      .data(testData)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", function(d, i) {
        // return w - (d * 4);
        return i * (h / testData.length);
      })
      .attr("width", function(d) {
        return d.summary.length / 10;
      })
      .attr("height", function() {
        return h / testData.length - barPadding;
      })
      .attr("fill", "teal");

    svg.selectAll("text")
      .data(testData)
      .enter()
      .append("text")
      .text(function(d, i) {
        return d.summary.length;
      })
      .attr("x", 0)
      .attr("y", function(d, i) {
        return (i + 1) * (h / testData.length);
      });

    // svg.selectAll("circle")
    //   .data(this.testData)
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
