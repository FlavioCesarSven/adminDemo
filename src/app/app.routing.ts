import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'404', component: ErrorPageComponent},
  {path:'**', redirectTo: '404', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
