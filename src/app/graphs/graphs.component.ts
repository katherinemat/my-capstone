import { Component, OnInit, Input } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  @Input() OfficerInvolvedShootingsGraphData: OfficerInvolvedShooting[];
  testData = [5, 10, 13, 19, 11];
  letters = [
    {name: "A", age: 12, frequency: .08167},
    {name: "B", age: 1, frequency: .01492},
    {name: "C", age: 20, frequency: .02780},
    {name: "D", age: 34, frequency: .04253},
    {name: "E", age: 4, frequency: .12702}
  ];

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log(this.OfficerInvolvedShootingsGraphData);
    this.d3Svg();
  }

  d3Svg() {
    var w = 500;
    var h = 800;
    var barPadding = 1;
    var testData = this.OfficerInvolvedShootingsGraphData;

    var svg = d3.select("#outside")
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
