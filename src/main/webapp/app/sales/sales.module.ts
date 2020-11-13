import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PosSharedModule } from 'app/shared/shared.module';
import { SALES_ROUTE } from './sales.route';
import { SalesComponent } from './sales.component';

@NgModule({
  imports: [PosSharedModule, RouterModule.forChild([SALES_ROUTE])],
  declarations: [SalesComponent],
})
export class PosSalesModule {}
