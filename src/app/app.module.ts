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
import { AddclassandsectionComponent } from './page/admin/class/addclassandsection/addclassandsection.component';
import { ListclassandsectionComponent } from './page/admin/class/listclassandsection/listclassandsection.component';
import { ClassoptionComponent } from './page/admin/class/classoption/classoption.component';
import { OptionComponent } from './option/option.component';
import { AdminOptionComponent } from './page/admin/admin-option/admin-option.component';
import { MainContentComponent } from './usableComponent/main-content/main-content.component';
import { SpinnerComponent } from './usableComponent/spinner/spinner.component';
import { InfoModalComponent } from './usableComponent/info-modal/info-modal.component';
import { SubjectoptionComponent } from './page/admin/subject/subjectoption/subjectoption.component';
import { AddsubjectComponent } from './page/admin/subject/addsubject/addsubject.component';
import { TeacherOptionComponent } from './page/admin/teacher/teacher-option/teacher-option.component';
import { TeacherlistComponent } from './page/admin/teacher/teacherlist/teacherlist.component';
import { SubjectlistComponent } from './page/admin/subject/subjectlist/subjectlist.component';

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
    SignupComponent,
    AddclassandsectionComponent,
    ListclassandsectionComponent,
    ClassoptionComponent,
    OptionComponent,
    AdminOptionComponent,
    MainContentComponent,
    SpinnerComponent,
    InfoModalComponent,
    SubjectoptionComponent,
    AddsubjectComponent,
    TeacherOptionComponent,
    TeacherlistComponent,
    SubjectlistComponent
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
