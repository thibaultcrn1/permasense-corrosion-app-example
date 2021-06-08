import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-measurement-point',
  templateUrl: './measurement-point.component.html',
  styleUrls: ['./measurement-point.component.css']
})
export class MeasurementPointComponent implements OnInit {

  products = [];

  constructor(private dataService: DataService) { }
  
  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    })

    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Nord', 'Jura', 'Pas-De-Calais', 'Charente-Maritime'],
        datasets: [{
          label: 'Contaminés',
          data: [12, 19, 3, 5],
          backgroundColor: 'transparent',
          borderColor: 'blue',
          borderWidth: 2
        },
        {
          label: 'Décés',
          data: [3, 5, 2, 3],
          backgroundColor: 'transparent',
          borderColor: 'red',
          borderWidth: 2
        },
        {
          label: 'Réanimation',
          data: [12, 19, 2, 3],
          backgroundColor: 'transparent',
          borderColor: 'green',
          borderWidth: 2
        },
        {
          label: 'Hospitalisations',
          data: [12, 19, 3, 7],
          backgroundColor: 'transparent',
          borderColor: 'purple',
          borderWidth: 2
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
