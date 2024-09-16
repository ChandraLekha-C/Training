import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeDto } from '../employee.dto';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employee: EmployeeDto = {
    Employee_Id: 0,
    Employee_Name: '',
    Age: 0,
    Department_Id: 0,
    Role: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.employeeService.getEmployeeById(id).subscribe(
      data => this.employee = data,
      error => console.error(error)
    );
  }

  updateEmployee(): void {
    const id = this.employee.Employee_Id;
    this.employeeService.updateEmployee(id, this.employee).subscribe(
      () => this.router.navigate(['/employees']),
      error => console.error(error)
    );
  }
}
