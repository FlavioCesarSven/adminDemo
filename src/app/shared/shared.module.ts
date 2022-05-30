import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadcumbsComponent,
    HeaderComponent,
    SidebarComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports: [
    BreadcumbsComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
