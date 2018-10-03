import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './mainApp/app.component';
import { LoginComponent } from './page/login/login.component';
import { AppRoutingModule, routingComponents } from './routing/app-routing.module';
import { OptionsComponent } from './page/options/options.component';
import { Globals } from "./../global/theme";
import { FooterComponent } from './usableComponent/footer/footer.component';
import { HeaderComponent } from './usableComponent/header/header.component';
import { SubjectListComponent } from './page/subject-list/subject-list.component';
import { HeaderAndFooterComponent } from './page/header-and-footer/header-and-footer.component';
import { HomeWorkDetailComponent } from './page/home-work-detail/home-work-detail.component';

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
    HomeWorkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
