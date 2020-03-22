import { MaterialModule } from './material-module';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './home/map/map.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartComponent } from './home/chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    ChartComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
