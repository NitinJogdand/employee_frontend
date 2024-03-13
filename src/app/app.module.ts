import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChangeColorDirective } from './change-color.directive';
import { ExtraComponent } from './extra/extra.component';
import { MyFilterPipePipe } from './pipe/my-filter-pipe.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SpeechSynthesisModule } from '@ng-web-apis/speech';
import { AnyngComponent } from './anyng/anyng.component';
import { TaskComponent } from './task/task.component';
import { Task1Component } from './task1/task1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChangeColorDirective,
    ExtraComponent,
    MyFilterPipePipe,
    AnyngComponent,
    TaskComponent,
    Task1Component,
  
    
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    SpeechSynthesisModule,

  ],
  providers: [],
  exports: [
    AutoCompleteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
