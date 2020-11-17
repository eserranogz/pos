import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PosSharedModule } from 'app/shared/shared.module';
import { PosCoreModule } from 'app/core/core.module';
import { PosAppRoutingModule } from './app-routing.module';
import { PosHomeModule } from './home/home.module';
import { PosEntityModule } from './entities/entity.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { SalesComponent } from './sales/sales.component';
import { PosSalesModule } from './sales/sales.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PosSharedModule,
    PosCoreModule,
    PosHomeModule,
    PosSalesModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PosEntityModule,
    PosAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class PosAppModule {}
