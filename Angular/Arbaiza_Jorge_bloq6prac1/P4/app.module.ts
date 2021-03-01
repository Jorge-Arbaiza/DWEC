import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FechaactualComponent } from '../fechaactual/fechaactual.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
