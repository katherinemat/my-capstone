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
  testData = [1, 2, 3, 4, 5];
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
    this.d3();
  }

  d3() {
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
