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

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log(this.OfficerInvolvedShootingsGraphData);
    d3.select("div").append("p").text("New paragraph appended with d3");
  }

}
