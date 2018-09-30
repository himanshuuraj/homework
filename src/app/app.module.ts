import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './mainApp/app.component';
import { LoginComponent } from './page/login/login.component';
import { AppRoutingModule, routingComponents } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
