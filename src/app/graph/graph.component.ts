import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var graphChart = new Chart("graphChart", {
      type: 'line',
      data: {
        labels: ['Ex.1', 'Ex.2', 'Ex.3', 'Ex.4'],
        datasets: [{
          label: 'Guéris',
          data: [5, 1, 3, 6],
          backgroundColor: 'transparent',
          borderColor: 'purple',
          borderWidth: 2
        }
        ]
      },
    });


  }

}
