import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Employee} from '../../share/model/employee';

@Component({
  selector: 'app-tutorial-emp-form',
  templateUrl: './tutorial-emp-form.component.html',
  styleUrls: ['./tutorial-emp-form.component.css']
})
export class TutorialEmpFormComponent implements OnInit {

  @Input() dataModel:Employee;

  @Output() textcancle: EventEmitter<Employee> = new EventEmitter();

  @Output() add: EventEmitter<Employee> = new EventEmitter();
  @Output() edit: EventEmitter<Employee> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.dataModel={};
  }
  save(emp:Employee){
    emp.empId
        ? this.edit.emit(emp)
        : this.add.emit(emp);
  }

  clear(){
    this.dataModel = {};
    this.textcancle.emit({});
  }




}
