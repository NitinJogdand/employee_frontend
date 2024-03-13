import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ExtraComponent } from './extra/extra.component';
import { AnyngComponent } from './anyng/anyng.component';
import { TaskComponent } from './task/task.component';
import { Task1Component } from './task1/task1.component';

const routes: Routes = [ {path:'', component:MainComponent},{path:'extra', component:ExtraComponent},{path:'nayng', component:AnyngComponent},{path:'task', component:TaskComponent},{path:'task1' , component:Task1Component}];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})