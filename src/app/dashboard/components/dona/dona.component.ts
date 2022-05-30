import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: String = 'Sales';

  @Input() doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['#00821C','#09DB36','#024D0F'],
        hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'] },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ]
  };

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
