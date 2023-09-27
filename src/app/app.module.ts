import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BryntumGanttModule } from '@bryntum/gantt-angular';
import { View2Component } from './Components/view2/view2.component';
import { GanttSampleComponent } from './Components/gantt-sample/gantt-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    View2Component,
    GanttSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BryntumGanttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
