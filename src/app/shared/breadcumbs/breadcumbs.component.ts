import { Component, OnDestroy} from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcumbs',
  templateUrl: './breadcumbs.component.html',
  styles: [
  ]
})
export class BreadcumbsComponent implements OnDestroy{

  titulo!: string;
  public tituloSubs! : Subscription;


  constructor( private route: Router ) {

    this.tituloSubs = this.getArgumentRoutes().subscribe( ({titulo}) => {
      this.titulo = titulo;
      document.title= `Admin Pro - ${ this.titulo }`;

    } );;

  }
  ngOnDestroy(): void {
    this.tituloSubs.unsubscribe();
  }

  getArgumentRoutes(){

    return this.route.events
    .pipe(
      filter( (event : any) => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild == null ),
      map( (event: ActivationEnd) => event.snapshot.data )

    );

  }

}
