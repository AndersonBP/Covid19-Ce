import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule, MatDividerModule, MatListModule, MatChipsModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  exports: [
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule
  ]
})
export class MaterialModule {}
