import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
];

export const ConfiguracionRoutes = RouterModule.forChild(routes);
