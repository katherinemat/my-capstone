import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';
import * as d3 from 'd3';
import { SubjectAgeGroup } from '../subject-age-group.model';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  providers: [PoliceService]
})
export class PieChartComponent implements OnInit {

  public SubjectAgeGroupGraphData: SubjectAgeGroup[];
  public graphElement;
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

  // events
  public chartClicked(e:any):void {
    if (e.active.length > 0){
      console.log("Index", e.active[0]._index);
      console.log("Data" , e.active[0]._chart.config.data.datasets[0].data[e.active[0]._index]);
      console.log("Label" , e.active[0]._chart.config.data.labels[e.active[0]._index]);
    }
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private elementRef: ElementRef, private policeService: PoliceService) { }

  ngOnInit() {
    this.getGroupedSubjectAges();
  }

  getGroupedSubjectAges() {
    this.policeService.getGroupedSubjectAges()
    .then(servicePromise => {
      this.SubjectAgeGroupGraphData = servicePromise;

      this.pieChartLabels = this.SubjectAgeGroupGraphData.map(function(data) {
        return data.subjectAge;
      });

      setTimeout(() => {
        this.pieChartData = this.SubjectAgeGroupGraphData.map(function(data) {
          return data.count;
        });
      }, 500);
    });
  }

  onChange(selectedParameter) {
    this.policeService.getPieChartData({param: selectedParameter})
    .then(servicePromise => {
      this.setChart(servicePromise.data, selectedParameter);
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
  }

}
