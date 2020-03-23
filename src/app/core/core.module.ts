import { BairrosService } from './services/api/bairros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoletimService } from './services/api/boletim.service';
import { HttpService } from './services/http.service';
import { HttpModule } from '@angular/http';
import { LoadingService } from './services/loading.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MatToolbarModule
  ],
  providers: [
    HttpService,
    LoadingService,
    BoletimService,
    BairrosService
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule { }
