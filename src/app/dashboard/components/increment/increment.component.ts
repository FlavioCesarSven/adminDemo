import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {

  @Input() progress: number = 15;
  @Input() btnclass: string = 'btn-primary';


  @Output() cambiarValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.btnclass = `btn ${this.btnclass}`;

  }

  onChange( nuevoValor: number ){

    if( nuevoValor>= 100 ){
      this.progress = 100;
    }else if( nuevoValor <= 0 ){
      this.progress = 0;
    }else{
      this.progress = nuevoValor;
    }

    this.cambiarValor.emit( this.progress );

  }

  changueValor( valor: number ){

    if( this.progress >= 100 && valor>=0){
      this.cambiarValor.emit( 100 );
      return this.progress = 100;

    }

    if( this.progress <= 0 && valor < 0 ){
      this.cambiarValor.emit( 0 );
      return this.progress = 0;
    }

    this.cambiarValor.emit( this.progress );
    return this.progress = this.progress + valor;
  }


}
