import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Employee} from '../../share/model/employee';
import {} from ''

@Component({
  selector: 'app-tutorial-emp-table',
  templateUrl: './tutorial-emp-table.component.html',
  styleUrls: ['./tutorial-emp-table.component.css']
})
export class TutorialEmpTableComponent implements OnInit {

  @Input() dataList:Employee[];
  @Output() rowClick:EventEmitter<Employee> = new EventEmitter();
  @Output() delClick:EventEmitter<number> = new EventEmitter();

  selectedEmp:Employee;

  constructor() { }

  ngOnInit() {
  }

  clickRow(event:{data:Employee}){
    this.rowClick.emit(event.data);
  }

  delete(empId:number){
    this.delClick.emit(empId);
  }


}
