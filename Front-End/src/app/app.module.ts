import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './Component/dashboard/dashboard.component';

import {AppRoutingModule} from './app-routing.module';
import { GridComponent } from './Component/grid/grid.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
