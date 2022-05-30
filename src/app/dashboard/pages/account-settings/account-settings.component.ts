import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',

})
export class AccountSettingsComponent implements OnInit {


  constructor(private settingService: SettingService) { }

  ngOnInit(): void {

    this.settingService.checkCurrentTheme();

  }

  dataTheme( theme: String ){

    this.settingService.changedataTheme( theme );

  }



}
