import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/Admin')
  }

  addNewEmployee(addEmployee: Employee) : Observable<Employee>{
     addEmployee.employeeId = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + '/api/Admin', addEmployee);
  }

  editEmployee(employeeId: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/Admin/' + employeeId)
  }

  updateEmployee(employeeId: string, updateEmployee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/Admin/' 
    + employeeId, updateEmployee);
  }

  deleteEmployee(employeeId: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/Admin/' + employeeId)
  }
}
