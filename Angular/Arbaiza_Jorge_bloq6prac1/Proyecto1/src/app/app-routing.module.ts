import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';
import { AgregarMascotasComponent } from './agregar-mascotas/agregar-mascotas.component';

const routes: Routes = [
{ path: "mascotas", component: ListarMascotasComponent },
{ path: "mascotas/agregar", component: AgregarMascotasComponent },
{ path: "", redirectTo: "/mascotas", pathMatch: "full" },// Cuando es la raíz
{ path: "**", redirectTo: "/mascotas" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
