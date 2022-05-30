import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';


const routes: Routes = [

  {path:'', component: HomeComponent, children: [
    {path: 'inicio', component: InicioComponent, data: {titulo: 'Inicio'}   },
    {path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
    {path: 'grafica1', component: Grafica1Component, data: { titulo: 'Grafica'} },
    {path: 'setting', component: AccountSettingsComponent, data: { titulo: 'Configuración'} },
    {path: '**', redirectTo: 'inicio', pathMatch:'full'},
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
