import { Component, OnInit } from '@angular/core';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PoliceService]
})
export class MainComponent implements OnInit {
  public OfficerInvolvedShootings;

  constructor(private policeService: PoliceService) { }

  ngOnInit() {
    this.getPoliceData();
  }
  getPoliceData() {
     this.policeService.getPoliceDataFromSocrata().then(servicePromise => this.OfficerInvolvedShootings = servicePromise);
  }

  test() {
    console.log(this.OfficerInvolvedShootings);
  }

}
