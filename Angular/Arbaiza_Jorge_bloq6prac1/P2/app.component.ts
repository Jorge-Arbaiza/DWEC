import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero1='';
  numero2='';
  resultado: number;

  suma(){
    this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
  }
}
