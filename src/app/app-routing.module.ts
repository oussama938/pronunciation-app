import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BienvenueComponent } from './components/bienvenue/bienvenue.component';
import { PageUExComponent } from './components/page-uex/page-uex.component';
import { UniteComponent } from './components/unite/unite.component';
import { ListeDesUniteComponent } from './components/liste-des-unite/liste-des-unite.component';

const routes: Routes = [{
   path: 'acceuil', component: AcceuilComponent },
  {path:'bienvenue',component:BienvenueComponent},
  {path:'uex',component:PageUExComponent},
  {path:'listedesunite',component:ListeDesUniteComponent},
  {path:'unite',component:UniteComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
 }
