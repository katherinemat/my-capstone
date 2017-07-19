import { Component, OnInit, Input } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css']
})
export class ScatterplotComponent implements OnInit {
  @Input() OfficerInvolvedShootingsGraphData: OfficerInvolvedShooting[];

  constructor() { }

  ngOnInit() {
  }

}
