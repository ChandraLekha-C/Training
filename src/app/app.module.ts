import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component'; // Example component
import { EmployeeCreateComponent } from './employee-create/employee-create.component'; // Example component

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create', component: EmployeeCreateComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
