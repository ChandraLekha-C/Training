import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment'; // Import the environment
import { EmployeeDto } from './employee.dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `${environment.apiBaseUrl}`; // Use the environment variable

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getEmployeeById(id: number): Observable<EmployeeDto> {
    return this.http.get<EmployeeDto>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createEmployee(employee: EmployeeDto): Observable<EmployeeDto> {
    return this.http.post<EmployeeDto>(this.apiUrl, employee, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  updateEmployee(id: number, employee: EmployeeDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, employee, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updatePartialEmployee(id: number, patchDoc: any): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}`, patchDoc, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
