import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    employeeId: '',
    name: '',
    email: '',
    phone: 0
  }

  constructor(private employeesService: EmployeesService ,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const employeeId = params.get('employeeId');

        if(employeeId){
          this.employeesService.editEmployee(employeeId).subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          })
        }
      }
    })
  }

  updateEmployee() {
    this.employeesService.updateEmployee(this.employeeDetails.employeeId,
      this.employeeDetails).subscribe({
        next: (response) => {
          this.router.navigate(['employees']);
        }
      });
  }

  
}
