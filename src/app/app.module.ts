import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './Componentes/cabecero/cabecero.component';
import { PiePaginaComponent } from './Componentes/pie-pagina/pie-pagina.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { MonitoreoComponent } from './Componentes/monitoreo/monitoreo.component';
import { CalendarioComponent } from './Componentes/calendario/calendario.component';

// Estos modulos siguientes junto a LOCALE_ID sirven para cambiar el idioma predeterminado a español
import localeEs from "@angular/common/locales/es"
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs,"es");

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    PiePaginaComponent,
    LoginComponent,
    HomeComponent,
    MonitoreoComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
