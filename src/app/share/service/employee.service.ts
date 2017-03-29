import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Employee} from '../../share/model/employee'

@Injectable()
export class EmployeeService {

  constructor(private http:Http) { }

  getEmployee() {
    return this.http.get('http://157.179.132.123:3000/api/Employees')
        .map((response: Response) => response.json());
  }

  addEmployee(payload){
    return this.http.post('http://157.179.132.123:3000/api/Employees', payload)
        .map((response: Response) => response.json());
  }

  updateEmployee(payload: Employee){
    return this.http.put('http://157.179.132.123:3000/api/Employees/'+payload.empId, payload)
        .map((response: Response) => response.json());
  }

  deleteEmployee(id){
    return this.http.delete(`http://157.179.132.123:3000/api/Employees${id}`)
        .map((response: Response) => response.json());
  }
}
