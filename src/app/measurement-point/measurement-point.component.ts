import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurement-point',
  templateUrl: './measurement-point.component.html',
  styleUrls: ['./measurement-point.component.css']
})
export class MeasurementPointComponent implements OnInit {

  measurement = "Measurement Point";

  constructor() { }

  ngOnInit(): void {
  }

}
