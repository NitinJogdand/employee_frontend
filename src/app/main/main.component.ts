import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  employees:any[]=[];
  showTable:boolean = false;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  onShowAll(){
    this.employeeService.getAllEmployeeList().subscribe((result)=>{
      this.employees = result;
      console.log(this.employees)
    },(error)=>{
      console.log("Something went wrong..")
    })
    this.showTable = true
  }

  hidAll(){
    this.showTable = false;
    this.employees = [];
  }

}
