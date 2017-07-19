import { Component, OnInit, Input } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
  providers: [PoliceService]
})

export class GraphsComponent implements OnInit {

  public OfficerInvolvedShootingsGraphData;

  constructor(private policeService: PoliceService) { }

  ngOnInit() {
    this.getPoliceData();
  }
  getPoliceData() {
     this.policeService.getPoliceDataFromSocrata().then(servicePromise => this.OfficerInvolvedShootingsGraphData = servicePromise);
  }
}
