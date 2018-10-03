import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../page/login/login.component';
import { OptionsComponent } from "./../page/options/options.component";
import { SubjectListComponent } from "./../page/subject-list/subject-list.component";
import { HeaderAndFooterComponent } from "./../page/header-and-footer/header-and-footer.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'option', component: OptionsComponent},
  { path: 'subjectList', component: SubjectListComponent,
    // children: [
    //     { path: '', component: SubjectListComponent}
    //   ]
  }
  // { 
  //   path: 'departments/:id', 
  //   component: DepartmentDetailComponent,
  //   children: [
  //     { path: 'overview', component: DepartmentOverviewComponent},
  //     { path: 'contact', component: DepartmentContactComponent}
  //   ]
  //  },
  // { path: 'employees',   component: EmployeeListComponent },
  // { path: '**',   component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]
