import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChangeColorDirective } from './change-color.directive';
import { ExtraComponent } from './extra/extra.component';
import { MyFilterPipePipe } from './pipe/my-filter-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChangeColorDirective,
    ExtraComponent,
    MyFilterPipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
