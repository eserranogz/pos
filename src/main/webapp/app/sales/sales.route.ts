import { Route } from '@angular/router';

import { SalesComponent } from './sales.component';

export const SALES_ROUTE: Route = {
  path: 'sales',
  component: SalesComponent,
  data: {
    authorities: [],
    pageTitle: 'sales.title',
  },
};
