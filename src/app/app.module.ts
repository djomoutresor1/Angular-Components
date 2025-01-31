import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbpDividingLineOneComponent } from './components/nbp-dividing-lines/nbp-dividing-line-one/nbp-dividing-line-one.component';
import { NbpBackgroundBoxComponent } from './components/nbp-background-box/nbp-background-box.component';
import { NbpButtonComponent } from './components/nbp-button/nbp-button.component';
import { NbpAlertBoxOneComponent } from './components/nbp-alert-boxes/nbp-alert-box-one/nbp-alert-box-one.component';
import { NbpScrollTopComponent } from './components/nbp-scroll-top/nbp-scroll-top.component';
import { NbpFeedbackComponent } from './components/nbp-feedback/nbp-feedback.component';
import { NbpInputTextComponent } from './components/nbp-input-text/nbp-input-text.component';
import { FormsModule } from '@angular/forms';
import { NbpTextareaComponent } from './components/nbp-textarea/nbp-textarea.component';
import { HomeComponent } from './pages/home/home.component';
import { ComposantsComponent } from './pages/composants/composants.component';
import { NbpTextareaPageComponent } from './pages/composants/nbp-textarea-page/nbp-textarea-page.component';
import { NbpInputTextPageComponent } from './pages/composants/nbp-input-text-page/nbp-input-text-page.component';
import { NbpAlertBoxPageComponent } from './pages/composants/nbp-alert-box-page/nbp-alert-box-page.component';
import { NbpBackgroundBoxPageComponent } from './pages/composants/nbp-background-box-page/nbp-background-box-page.component';
import { NbpButtonPageComponent } from './pages/composants/nbp-button-page/nbp-button-page.component';
import { NbpDividingLinePageComponent } from './pages/composants/nbp-dividing-line-page/nbp-dividing-line-page.component';
import { NbpFeedbackPageComponent } from './pages/composants/nbp-feedback-page/nbp-feedback-page.component';
import { NbpHeaderOneComponent } from './components/nbp-headers/nbp-header-one/nbp-header-one.component';
import { NbpFooterOneComponent } from './components/nbp-footers/nbp-footer-one/nbp-footer-one.component';
import { NbpNavbarComponent } from './components/nbp-navbar/nbp-navbar.component';
import { NbpBreadcrumbOneComponent } from './components/nbp-breadcrumbs/nbp-breadcrumb-one/nbp-breadcrumb-one.component';
import { NbpBreadcrumbTwoComponent } from './components/nbp-breadcrumbs/nbp-breadcrumb-two/nbp-breadcrumb-two.component';
import { NbpHeaderPageComponent } from './pages/composants/nbp-header-page/nbp-header-page.component';
import { NbpInputCheckboxComponent } from './components/nbp-input-checkbox/nbp-input-checkbox.component';
import { NbpInputCheckboxPageComponent } from './pages/composants/nbp-input-checkbox-page/nbp-input-checkbox-page.component';
import { NbpColorComponent } from './components/nbp-color/nbp-color.component';
import { NbpColorPageComponent } from './pages/composants/nbp-color-page/nbp-color-page.component';
import { NbpTableOneComponent } from './components/nbp-tables/nbp-table-one/nbp-table-one.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { NbpTablePageComponent } from './pages/composants/nbp-table-page/nbp-table-page.component';
import { NbpSortDirective } from './directive/nbp-sort.directive';
import { DataTablesModule } from 'angular-datatables';
import { NbpBreadcrumdPageComponent } from './pages/composants/nbp-breadcrumd-page/nbp-breadcrumd-page.component';
import { NbpTableTwoComponent } from './components/nbp-tables/nbp-table-two/nbp-table-two.component';
import { NbpBadgeComponent } from './components/nbp-badge/nbp-badge.component';
import { NbpIconComponent } from './components/nbp-icon/nbp-icon.component';
import { NbpIconPageComponent } from './pages/composants/nbp-icon-page/nbp-icon-page.component';
import { NbpBadgePageComponent } from './pages/composants/nbp-badge-page/nbp-badge-page.component';
import { NbpTypographyPageComponent } from './pages/composants/nbp-typography-page/nbp-typography-page.component';
import { NbpPanelTitleOneComponent } from './components/nbp-panel-titles/nbp-panel-title-one/nbp-panel-title-one.component';
import { NbpPanelTitlePageComponent } from './pages/composants/nbp-panel-title-page/nbp-panel-title-page.component';
import { NbpInputRadioComponent } from './components/nbp-input-radio/nbp-input-radio.component';
import { NbpInputRadioPageComponent } from './pages/composants/nbp-input-radio-page/nbp-input-radio-page.component';
import { NbpBreadcrumdThreeComponent } from './components/nbp-breadcrumbs/nbp-breadcrumd-three/nbp-breadcrumd-three.component';
import { NbpAlertBoxTwoComponent } from './components/nbp-alert-boxes/nbp-alert-box-two/nbp-alert-box-two.component';
import { NbpArrowLinkComponent } from './components/nbp-links/nbp-arrow-link/nbp-arrow-link.component';
import { NbpDeepLinkComponent } from './components/nbp-links/nbp-deep-link/nbp-deep-link.component';
import { NbpLinkPageComponent } from './pages/composants/nbp-link-page/nbp-link-page.component';
import { NbpAlertBoxThreeComponent } from './components/nbp-alert-boxes/nbp-alert-box-three/nbp-alert-box-three.component';
import { NbpPanelTitleTwoComponent } from './components/nbp-panel-titles/nbp-panel-title-two/nbp-panel-title-two.component';
import { NbpBaseComponent } from './components/nbp-base-component/nbp-base.component';
import { NbpCookieOneComponent } from './components/nbp-cookies/nbp-cookie-one.component';
import { NbpDividingLineTwoComponent } from './components/nbp-dividing-lines/nbp-dividing-line-two/nbp-dividing-line-two.component';
import { NbpBoxOneComponent } from './components/nbp-boxes/nbp-box-one/nbp-box-one.component';
import { NbpBoxPageComponent } from './pages/composants/nbp-box-page/nbp-box-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NbpBaseComponent,
    NbpDividingLineOneComponent,
    NbpBackgroundBoxComponent,
    NbpButtonComponent,
    NbpAlertBoxOneComponent,
    NbpScrollTopComponent,
    NbpFeedbackComponent,
    NbpInputTextComponent,
    NbpTextareaComponent,
    HomeComponent,
    ComposantsComponent,
    NbpTextareaPageComponent,
    NbpInputTextPageComponent,
    NbpAlertBoxPageComponent,
    NbpBackgroundBoxPageComponent,
    NbpButtonPageComponent,
    NbpDividingLinePageComponent,
    NbpFeedbackPageComponent,
    NbpHeaderOneComponent,
    NbpFooterOneComponent,
    NbpNavbarComponent,
    NbpBreadcrumbOneComponent,
    NbpBreadcrumbTwoComponent,
    NbpHeaderPageComponent,
    NbpInputCheckboxComponent,
    NbpInputCheckboxPageComponent,
    NbpColorComponent,
    NbpColorPageComponent,
    NbpTableOneComponent,
    ExamplesComponent,
    NbpTablePageComponent,
    NbpSortDirective,
    NbpBreadcrumdPageComponent,
    NbpTableTwoComponent,
    NbpBadgeComponent,
    NbpIconComponent,
    NbpIconPageComponent,
    NbpBadgePageComponent,
    NbpTypographyPageComponent,
    NbpPanelTitleOneComponent,
    NbpPanelTitlePageComponent,
    NbpInputRadioComponent,
    NbpInputRadioPageComponent,
    NbpBreadcrumdThreeComponent,
    NbpAlertBoxTwoComponent,
    NbpArrowLinkComponent,
    NbpDeepLinkComponent,
    NbpLinkPageComponent,
    NbpAlertBoxThreeComponent,
    NbpPanelTitleTwoComponent,
    NbpCookieOneComponent,
    NbpDividingLineTwoComponent,
    NbpBoxOneComponent,
    NbpBoxPageComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
