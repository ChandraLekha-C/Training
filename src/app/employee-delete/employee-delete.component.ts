import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  employeeId: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id')!;
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.employeeId).subscribe(
      () => this.router.navigate(['/employees']),
      error => console.error(error)
    );
  }
}
