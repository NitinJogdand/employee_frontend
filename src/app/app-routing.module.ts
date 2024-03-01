import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [ {path:'', component:MainComponent},{path:'extra', component:ExtraComponent}];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})