import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() OfficerInvolvedShootingsGraphData: OfficerInvolvedShooting[];

  public testData = [5, 10, 13, 19];

  constructor() { }
  ngOnInit() {
  }

  testTable() {
    this.d3Table();
  }

  d3Table() {
    var w = 500;
    var h = 500;
    var padding = 10;
    var graphData = this.testData;

    var table = d3.select("#table-graph")
                .append("table")
                .style("border-collapse", "collapse")
                .style("border", "2px black solid");

    table.selectAll("tr")
         .data(graphData)
         .enter()
         .append("tr")

         .selectAll("td")
         .data(graphData)
          .enter().append("td")
          .style("border", "1px black solid")
          .style("padding", "10px")
          .text("hey")
          .style("font-size", "12px");

  }

  // lineTest() {
  //   var data = [[0, 50], [100, 80], [200, 40], [300, 60], [400, 30]];
  //
  //   var lineGenerator = d3.line();
  //   var pathString = lineGenerator(data);
  //
  //   d3.select('table-graph')
  //   	.attr('d', pathString);
  // }
}
