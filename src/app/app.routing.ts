import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './examples/home/home.component';
import { RegistroComponent } from './examples/registro/registro.component';
import { ReunionComponent } from './examples/reunion/reunion.component';
import { ContactoComponent } from './examples/contacto/contacto.component';

const routes: Routes =[
    { path: '',          component: HomeComponent },
    { path: 'registro',     component: RegistroComponent },
    { path: 'reunion',     component: ReunionComponent },
    { path: 'contacto',     component: ContactoComponent },
    { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
