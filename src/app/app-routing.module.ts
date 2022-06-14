import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabeceroComponent } from './Componentes/cabecero/cabecero.component';
import { CalendarioComponent } from './Componentes/calendario/calendario.component';
import { Calendario_DisponibilidadComponent } from './Componentes/Calendario_Disponibilidad/Calendario_Disponibilidad.component';
import { ConfiguracionComponent } from './Componentes/configuracion/configuracion.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MonitoreoComponent } from './Componentes/monitoreo/monitoreo.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "monitoreo", component: MonitoreoComponent},
  {path: "calendario", component: CalendarioComponent},
  {path: "calendario_Disponibilidad", component: Calendario_DisponibilidadComponent},
  {path: "configuracion", component: ConfiguracionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
