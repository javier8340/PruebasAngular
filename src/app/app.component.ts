import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title  : string = 'Mi web';
  numero : number = 10;
  base   : number = 5;
  acumulador(value: number){
    this.numero += value
  }
}
