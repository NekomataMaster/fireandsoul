import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../share/service/employee.service';
import {Employee} from '../../share/model/employee';

@Component({
  selector: 'app-tutorial-emp',
  templateUrl: './tutorial-emp.component.html',
  styleUrls: ['./tutorial-emp.component.css']
})
export class TutorialEmpComponent implements OnInit {

  empList: Employee[];
  selectEmp:Employee;

  constructor(private employeeService:EmployeeService) { }
  // constructor() { }
  ngOnInit() {
    this.selectEmp={};
    this.employeeService.getEmployee().subscribe((response) => this.empList = response);
  }

  onRowClick(data:Employee){
    this.selectEmp = data;
  }

  onDelEmp(dataId:number){
    console.log(dataId);
    this.employeeService.deleteEmployee(dataId).subscribe(response => this.empList = [...this.empList]);
  }

  onAdd(emp:Employee){
    this.validateForm(emp)
        ? (
            this.employeeService.addEmployee(emp).subscribe(response => this.empList = [...this.empList,response]),
            this.selectEmp={}
          )
    : alert('Please Insert Data');
  }

  onEdit(emp:Employee){
    this.validateForm(emp)
        ? (
            this.employeeService.updateEmployee(emp).subscribe(response => console.log(response,'EDIT')),
            this.selectEmp={}
        )
    : alert('Please Insert Data');
  }

  validateForm(emp:Employee){
    return emp.empName && emp.empAddr && emp.empMail
  }


}
