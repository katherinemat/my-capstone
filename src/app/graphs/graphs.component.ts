import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import { SubjectAgeGroup } from '../subject-age-group.model';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
  providers: [PoliceService]
})

export class GraphsComponent implements OnInit {

  public OfficerInvolvedShootingsGraphData;
  public SubjectAgeGroupGraphData;

  constructor(private policeService: PoliceService) { }

  ngOnInit() {
    this.getPoliceDataFromPsqlDB();
    this.getGroupedSubjectAges();
  }

  getPoliceDataFromSocrata() {
     this.policeService.getPoliceDataFromSocrata();
  }

  getPoliceDataFromPsqlDB() {
    this.policeService.getPoliceDataFromPsqlDB()
    .then(servicePromise => this.OfficerInvolvedShootingsGraphData = servicePromise);
  }

  getGroupedSubjectAges() {
    this.policeService.getGroupedSubjectAges()
    .then(servicePromise => this.SubjectAgeGroupGraphData = servicePromise);
  }

  queryByYear(year) {
    this.policeService.getPoliceDataFromPsqlDBWhereYear(year)
    .then(servicePromise => console.log(servicePromise));
  }
}
