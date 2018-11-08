import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../page/login/login.component';
import { OptionsComponent } from "./../page/options/options.component";
// import { SubjectListComponent } from "./../page/subject-list/subject-list.component";
import { HomeWorkDetailComponent } from './../page/home-work-detail/home-work-detail.component';
import { SignupComponent } from "./../page/signup/signup.component";
import { AddclassandsectionComponent } from "./../page/admin/class/addclassandsection/addclassandsection.component";
import { ClassoptionComponent } from "./../page/admin/class/classoption/classoption.component";
import { AdminOptionComponent } from "./../page/admin/admin-option/admin-option.component";
import { ListclassandsectionComponent } from "./../page/admin/class/listclassandsection/listclassandsection.component";
import { SubjectoptionComponent } from "./../page/admin/subject/subjectoption/subjectoption.component";
import { AddsubjectComponent } from "./../page/admin/subject/addsubject/addsubject.component";
import { TeacherOptionComponent } from "./../page/admin/teacher/teacher-option/teacher-option.component";
import { TeacherlistComponent } from "./../page/admin/teacher/teacherlist/teacherlist.component";
import { SubjectlistComponent } from "./../page/admin/subject/subjectlist/subjectlist.component";
import { StudentoptionComponent } from "./../page/admin/student/studentoption/studentoption.component";
import { StudentListComponent } from "./../page/admin/student/student-list/student-list.component";
import { ParentOptionComponent } from "./../page/admin/parent/parent-option/parent-option.component";
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'classOption', component: ClassoptionComponent},
  { path: 'viewClassAndSection', component: ListclassandsectionComponent},
  { path: 'deleteClassAndSection', component: ListclassandsectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'option', component: OptionsComponent},
  { path: 'adminOption', component: AdminOptionComponent},
  { path: 'subjectOption', component: SubjectoptionComponent},
  { path: 'addSubject', component: AddsubjectComponent},
  { path: 'teacherOption', component: TeacherOptionComponent},
  { path: 'teacherList', component: TeacherlistComponent},
  { path: 'deleteTeacher', component: TeacherlistComponent },
  { path: 'deleteSubject', component: SubjectlistComponent },
  { path: 'studentOption', component: StudentoptionComponent},
  { path: 'studentList', component: StudentListComponent},
  { path: 'deleteStudent', component: StudentListComponent},
  { path: 'parentOption', component: ParentOptionComponent},
  { path: 'subjectList', component: SubjectlistComponent,
    // children: [
    //     { path: '', component: SubjectListComponent}
    //   ]
  },
  {
    path: 'homeworkDetail', component : HomeWorkDetailComponent
  },
  {
    path: 'signup', component : SignupComponent
  },
  {
    path: 'addClassAndSection', component : AddclassandsectionComponent
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
