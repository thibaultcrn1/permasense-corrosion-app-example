import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-measurement-point',
  templateUrl: './measurement-point.component.html',
  styleUrls: ['./measurement-point.component.css']
})
export class MeasurementPointComponent implements OnInit {

  products = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) { }
  
  ngOnInit() {

    let gueris = [];
    let deces = [];
    let hospitalises = [];
    let reanimation = [];

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      console.log(data);

      gueris.push(parseInt(data.allLiveFranceData[59].gueris));
      gueris.push(parseInt(data.allLiveFranceData[39].gueris));
      gueris.push(parseInt(data.allLiveFranceData[62].gueris));
      gueris.push(parseInt(data.allLiveFranceData[16].gueris));
      console.log(gueris);

      deces.push(parseInt(data.allLiveFranceData[59].deces));
      deces.push(parseInt(data.allLiveFranceData[39].deces));
      deces.push(parseInt(data.allLiveFranceData[62].deces));
      deces.push(parseInt(data.allLiveFranceData[16].deces));
      console.log(deces);

      hospitalises.push(parseInt(data.allLiveFranceData[59].hospitalises));
      hospitalises.push(parseInt(data.allLiveFranceData[39].hospitalises));
      hospitalises.push(parseInt(data.allLiveFranceData[62].hospitalises));
      hospitalises.push(parseInt(data.allLiveFranceData[16].hospitalises));
      console.log(hospitalises);

      reanimation.push(parseInt(data.allLiveFranceData[59].reanimation));
      reanimation.push(parseInt(data.allLiveFranceData[39].reanimation));
      reanimation.push(parseInt(data.allLiveFranceData[62].reanimation));
      reanimation.push(parseInt(data.allLiveFranceData[16].reanimation));
      console.log(reanimation);

      var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: ['Nord', 'Jura', 'Pas-De-Calais', 'Charente-Maritime'],
          datasets: [{
            label: 'Guéris',
            data: gueris,
            backgroundColor: 'transparent',
            borderColor: 'purple',
            borderWidth: 2
          },
          {
            label: 'Décès',
            data: deces,
            backgroundColor: 'transparent',
            borderColor: 'blue',
            borderWidth: 2
          },
          {
            label: 'Hospitalisés',
            data: hospitalises,
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 2
          },
          {
            label: 'Réanimation',
            data: reanimation,
            backgroundColor: 'transparent',
            borderColor: 'green',
            borderWidth: 2
          },
          ]
        },
      });

    })

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
