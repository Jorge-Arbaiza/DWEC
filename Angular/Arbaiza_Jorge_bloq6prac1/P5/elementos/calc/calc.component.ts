import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  public number1 : number;
  public number2 : number;
  public result : number;
  add(){
    this.result = this.number1 + this.number2
}

 
  constructor() { }

  ngOnInit(): void {
  }

}
