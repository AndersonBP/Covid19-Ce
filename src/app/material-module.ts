import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule, MatDividerModule, MatListModule, MatChipsModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  exports: [
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
