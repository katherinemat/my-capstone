import { Component, OnInit } from '@angular/core';
import { PoliceService } from '../police.service';
import { DatabaseColumn } from '../database-column.model';
import { TimeChart } from '../time-chart.model';
import { OfficerInvolvedShooting } from '../officer-involved-shooting.model';


@Component({
  selector: 'app-time-chart',
  templateUrl: './time-chart.component.html',
  styleUrls: ['./time-chart.component.css'],
  providers: [PoliceService]
})
export class TimeChartComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public currentDescription = "";

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public barChartColors = [
    {
      backgroundColor: 'rgba(191, 196, 223, 0.8)',
      borderColor: 'white',
      pointBackgroundColor: 'white',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'white'
    },
    {
      backgroundColor: 'rgba(198, 56, 215, 0.8)',
      borderColor: 'white',
      pointBackgroundColor: 'white',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'white'
    },
    {
      backgroundColor: 'rgba(215, 215, 56, 0.8)',
      borderColor: 'white',
      pointBackgroundColor: 'white',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'white'
    }
  ];

  public databaseColumns: DatabaseColumn[] = [
    new DatabaseColumn('officer_injured', 'Whether the officer suffered serious injury during the incident. Either yes or no.'),
    new DatabaseColumn('fatal', 'Whether the subject was fatally injured during the incident. Either "yes" or "no"'),
    new DatabaseColumn('officer_gender', 'The gender of the officer in the incident.'),
    new DatabaseColumn('on_duty', 'Whether the officer was on duty at the time of the incident. Either "yes" or "no".'),
    new DatabaseColumn('subject_gender', 'The gender of the subject involved in the incident if known.'),
    new DatabaseColumn('subject_weapon', 'Indicates whether the subject involved in the incident was armed with a weapon. Either "yes" or "no".')
  ]

  public subject_gender: TimeChart[] = [
    new TimeChart([1, 0, 0, 0, 0, 0, 0, 0, 1, 6, 0, 0], 'Female'),
    new TimeChart([9, 6, 5, 6, 15, 10, 3, 7, 12, 19, 14, 6], 'Male')
  ];
  public officer_gender: TimeChart[] = [
    new TimeChart([0, 0, 0, 1, 1, 0, 2, 1, 0, 6, 1, 1], 'Female'),
    new TimeChart([10, 6, 5, 5, 14, 10, 1, 6, 13, 19, 13, 5], 'Male')
  ]
  public fatal: TimeChart[] = [
    new TimeChart([6, 4, 3, 6, 7, 5, 2, 5, 2, 18, 2, 2], 'No'),
    new TimeChart([4, 2, 2, 0, 8, 5, 1, 2, 11, 7, 12, 4], 'Yes')
  ]
  public officer_injured: TimeChart[] = [
    new TimeChart([9, 5, 4, 3, 14, 10, 3, 7, 12, 25, 14, 6], 'No'),
    new TimeChart([1, 1, 1, 3, 1, 0, 0, 0, 1, 0, 0, 0], 'Yes')
  ]
  public subject_weapon: TimeChart[] = [
    new TimeChart([3, 1, 1, 1, 1, 0, 1, 0, 1, 16, 0, 0], 'No'),
    new TimeChart([7, 5, 4, 5, 14, 10, 2, 7, 12, 9, 14, 6], 'Yes')
  ]
  public on_duty: TimeChart[] = [
    new TimeChart([0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], 'No'),
    new TimeChart([10, 5, 4, 5, 15, 10, 3, 7, 13, 25, 14, 6], 'Yes')
  ]

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private policeService: PoliceService) { }

  ngOnInit() {
    this.policeService.getPoliceDataFromPsqlDB()
    .then(servicePromise => {
      console.log(servicePromise);
    });
    this.getData();
    this.barChartData = this.officer_injured;
    this.currentDescription = this.findDatabaseColumn("officer_injured");
  }

  onChange(selectedParameter) {
    this.barChartData = this[selectedParameter];
    this.currentDescription = this.findDatabaseColumn(selectedParameter);
  }

  findDatabaseColumn(param) {
    let description = "";
    this.databaseColumns.forEach(function(column) {
      if(column.column === param) {
        description = column.description;
      }
    });
    return description;
  }

  getData() {
    this.policeService.getTimeChartData()
    .then(servicePromise => {
      this.convertObjectsToTimeCharts(servicePromise.data.rows);
    });
  }

  convertObjectsToTimeCharts(databaseObjects) {
    console.log(databaseObjects);
  }
}
