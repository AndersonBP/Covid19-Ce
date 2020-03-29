import { MaterialModule } from './material-module';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './home/map/map.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartComponent } from './home/chart/chart.component';
import { DiagnoticPlaceComponent } from './home/diagnotic-place/diagnotic-place.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { BlockUIModule } from 'ng-block-ui';
import { NgxLoadingModule } from 'ngx-loading';
import { DatePipe } from '@angular/common';
import { QuestionsComponent } from './home/questions/questions.component';
import { AboutComponent } from './home/about/about.component';
import { environment } from '../environments/environment';
import { InformativeComponent } from './home/informative/informative.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    ChartComponent,
    DiagnoticPlaceComponent,
    DashboardComponent,
    QuestionsComponent,
    AboutComponent,
    InformativeComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    Ng2GoogleChartsModule,
    BlockUIModule.forRoot(),
    NgxLoadingModule.forRoot({
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
