import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
