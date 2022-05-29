import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    BreadcumbsComponent,
    HeaderComponent,
    SidebarComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],exports: [
    BreadcumbsComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
