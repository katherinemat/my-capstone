import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';
import { SubjectAgeGroup } from '../subject-age-group.model';
import { DatabaseColumn } from '../database-column.model';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  providers: [PoliceService]
})
export class PieChartComponent implements OnInit {

  // public OfficerInvolvedShootingsGraphData: OfficerInvolvedShooting[];
  public graphElement;
  public dataCount = 0;
  public dataDescription = "The number of rounds the officer fired during the incident, if known. If the officer fired more than one round, and the exact number of rounds fired by each officer in an incident cannot be determined, multiple is indicated."
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
  //starting parameter matches the default selected option in the .html form
  public currentParameter: string= "number_of_rounds";

  public databaseColumns: DatabaseColumn[] = [
    new DatabaseColumn('number_of_rounds', 'The number of rounds the officer fired during the incident, if known. If the officer fired more than one round, and the exact number of rounds fired by each officer in an incident cannot be determined, multiple is indicated.'),
    new DatabaseColumn('city', 'City where the incident occurred'),
    new DatabaseColumn('fatal', 'Whether the subject was fatally injured during the incident. Either "yes" or "no"'),
    new DatabaseColumn('justified', 'Prior to 2014 the Firearms Review Board judged officer involved shootings to be justified or not justified. Incidents in this dataset that occurred prior to the 2014 policy changes governing the department\'s use of force reporting and review indicate either "Yes" (justified) or "No" (not justified). For incidents reviewed by the Force Review Board after the 2014 the column indicating justified is blank.'),
    new DatabaseColumn('within_policy', 'For incidents occurring after 2014 and reviewed by the Force Review Board, incidents are determined to be within policy ("yes") or not within policy("no").'),
    new DatabaseColumn('justified_policy', 'Combined field including justified and within policy, according to relevant standard.'),
    new DatabaseColumn('officer_disciplined', 'Indicates whether the officer involved in the incident was disciplined for the policy violations associated with the indident.'),
    new DatabaseColumn('officer_gender', 'The gender of the officer in the incident.'),
    new DatabaseColumn('officer_injured', 'Whether the officer suffered serious injury during the incident. Either yes or no.'),
    new DatabaseColumn('officer_race', 'The race of the officer involved in the incident.'),
    new DatabaseColumn('on_duty', 'Whether the officer was on duty at the time of the incident. Either "yes" or "no".'),
    new DatabaseColumn('rank', 'The rank of the officer involved in the incident at the time of the incident.'),
    new DatabaseColumn('subject_age', 'The age of the subject involved in the incident if known. Rounded to the nearest full year.'),
    new DatabaseColumn('subject_gender', 'The gender of the subject involved in the incident if known.'),
    new DatabaseColumn('subject_race', 'The race of the subject involved in the incident if known.'),
    new DatabaseColumn('subject_weapon', 'Indicates whether the subject involved in the incident was armed with a weapon. Either "yes" or "no".'),
    new DatabaseColumn('type_of_weapon', 'A brief description of the weapon the subject was armed with, if applicable. If the subject had no weapon, the data field is blank.')
  ]

  // events
  public chartClicked(e:any):void {
    if (e.active.length > 0){
      var index = e.active[0]._index;
      var data = e.active[0]._chart.config.data.datasets[0].data[e.active[0]._index];
      var label = e.active[0]._chart.config.data.labels[e.active[0]._index];
      console.log("data: " + data + " label: " + label);
    }
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private elementRef: ElementRef, private policeService: PoliceService) { }

  ngOnInit() {
    this.policeService.getPoliceDataFromPsqlDB()
    .then(servicePromise => {
      this.dataCount = servicePromise.length;
      console.log(servicePromise.length);
    });
    this.getData();
  }

  getData() {
    this.policeService.getPieChartData({param: this.currentParameter})
    .then(servicePromise => {
      this.setChart(servicePromise.data, this.currentParameter);
    });
  }

  onChange(selectedParameter) {
    this.currentParameter = selectedParameter;

    this.policeService.getPieChartData({param: this.currentParameter})
    .then(servicePromise => {
      this.setChart(servicePromise.data, this.currentParameter);
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
    //   let dataCount = 0;
    //   for (var i = 0; i < this.pieChartData.length; i++) {
    //
    //   }
    // });
  }

}
