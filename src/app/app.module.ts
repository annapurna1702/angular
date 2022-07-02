import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskComponent } from './task/task.component';
import { FacultydetailsComponent } from './facultydetails/facultydetails.component';

@NgModule({
  declarations: [
    AppComponent,
    
    TaskComponent,
         FacultydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
