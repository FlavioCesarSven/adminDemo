import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progressn1: number = 40;
  progressn2: number = 60;

  constructor() { }


  ngOnInit(): void {
  }

  get getProgressn1(){
    return `${this.progressn1}%`;
  }
  get getProgressn2(){
    return `${this.progressn2}%`;
  }




}
