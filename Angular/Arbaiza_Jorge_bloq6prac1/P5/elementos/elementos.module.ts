import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc/calc.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  exports: [CalcComponent],
  declarations: [CalcComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ElementosModule { }
