import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniteComponent } from './components/unite/unite.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PageUExComponent } from './components/page-uex/page-uex.component';
import { BienvenueComponent } from './components/bienvenue/bienvenue.component';
import { ListeDesUniteComponent } from './components/liste-des-unite/liste-des-unite.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    UniteComponent,
    AcceuilComponent,
    PageUExComponent,
    BienvenueComponent,
    ListeDesUniteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
