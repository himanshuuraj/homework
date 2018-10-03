import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './mainApp/app.component';
import { LoginComponent } from './page/login/login.component';
import { AppRoutingModule, routingComponents } from './routing/app-routing.module';
import { OptionsComponent } from './page/options/options.component';
import { Globals } from "./../global/theme";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
