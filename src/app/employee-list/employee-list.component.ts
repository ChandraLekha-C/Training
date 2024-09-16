import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeDto } from '../employee.dto';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeDto[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.error(error)
    );
  }
}
