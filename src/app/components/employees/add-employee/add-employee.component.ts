import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployee: Employee = {
    employeeId: '',
    name: '',
    email: '',
    phone: 0

  };
  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewEmployee() {
    this.employeeService.addNewEmployee(this.addEmployee)
    .subscribe({
      next:(employee) => {
        this.router.navigate(['employees'])
      }
    })
  }
}
