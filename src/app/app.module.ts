import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './mainApp/app.component';
import { LoginComponent } from './page/login/login.component';
import { AppRoutingModule, routingComponents } from './routing/app-routing.module';
import { OptionsComponent } from './page/options/options.component';
import { GlobalTheme } from "./../global/theme";
import { GlobalUrl } from "./../global/url";
import { FooterComponent } from './usableComponent/footer/footer.component';
import { HeaderComponent } from './usableComponent/header/header.component';
import { SubjectListComponent } from './page/subject-list/subject-list.component';
import { HeaderAndFooterComponent } from './page/header-and-footer/header-and-footer.component';
import { HomeWorkDetailComponent } from './page/home-work-detail/home-work-detail.component';
import { SignupComponent } from './page/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import {
  AjaxCallService
} from "./service/ajax-call.service";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    OptionsComponent,
    FooterComponent,
    HeaderComponent,
    SubjectListComponent,
    HeaderAndFooterComponent,
    HomeWorkDetailComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [GlobalTheme, AjaxCallService, GlobalUrl],
  bootstrap: [AppComponent]
})
export class AppModule { }
