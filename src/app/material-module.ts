import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule, MatDividerModule, MatListModule, MatChipsModule, MatExpansionModule } from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  exports: [
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
