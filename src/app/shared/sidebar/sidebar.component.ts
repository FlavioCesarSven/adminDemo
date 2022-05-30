import { Component, OnInit } from '@angular/core';
import { SiderbarService } from '../services/siderbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems!: any[];

  constructor(private siderBarService:SiderbarService) {

    this.menuItems = this.siderBarService.menu;
    console.log( this.menuItems );

  }

  ngOnInit(): void {
  }

}
