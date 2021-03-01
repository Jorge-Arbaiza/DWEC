import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';
import { AgregarMascotasComponent } from './agregar-mascotas/agregar-mascotas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarMascotasComponent,
    AgregarMascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
