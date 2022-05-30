import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

declare function customInitFunctions():any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {


  constructor( private settingService: SettingService ) { }

  ngOnInit(): void {
    customInitFunctions();

  }

}
