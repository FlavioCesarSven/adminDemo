import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType} from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {


  datablabelsn1: string[] = [ "comunicacion", "cta", "Religión"];
  datacharn1: ChartData<'doughnut'> = {
    labels: this.datablabelsn1,
    datasets: [
      { data: [ 450, 280, 100 ],
        backgroundColor: ['#BF4024','#cccccc','#000000'],
        hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'] },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ]
  };

  datablabelsn2: string[] = [ "algebra", "geometria", "trigonometria"];
  datacharn2: ChartData<'doughnut'> = {
    labels: this.datablabelsn2,
    datasets: [
      { data: [ 600, 480, 80 ],
        backgroundColor: ['#1E79B8','#B8971E','#9028B4'],
        hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'] },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }



}
