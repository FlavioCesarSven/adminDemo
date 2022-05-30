import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';

import { FormsModule } from '@angular/forms';
import { ComponentModule } from './components/component.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    HomeComponent,
    InicioComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    FormsModule,
    ComponentModule,
    NgChartsModule,

  ],exports:[
    SharedModule,
  ]
})
export class DashboardModule { }
