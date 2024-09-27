import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list-employee', component: EmployeeListComponent },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'update-employee', component: EmployeeUpdateComponent },
  { path: 'delete-employee', component: EmployeeDeleteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
