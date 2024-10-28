import { Component, OnInit } from '@angular/core';
import { EmployeeDto } from '../model/employeedto';
import { CommonModule } from '@angular/common';
import { EmployeeserviceService } from '../service/employeeservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeDto[] = [];

  constructor(
    private employeeService: EmployeeserviceService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      data => {
        console.log('Fetched employees:', data); 
        this.employees = data;
      },
      error => {
        console.error('Error fetching employees:', error);
      }
    );
  }
}
