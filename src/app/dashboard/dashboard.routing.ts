import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';


const routes: Routes = [

  {path:'', component: HomeComponent, children: [
    {path: 'inicio', component: InicioComponent },
    {path: 'progress', component: ProgressComponent },
    {path: 'grafica1', component: Grafica1Component },
    {path: '*', redirectTo: 'inicio', pathMatch:'full'},
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
