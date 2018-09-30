import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../page/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
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
