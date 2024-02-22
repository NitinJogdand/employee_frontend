import { Component, OnInit } from '@angular/core';
import { EmployeeService, InputEmployee } from '../service/employee.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

  employees:any[]=[];
  showTable:boolean = false;
  addRecord:boolean = false;
  updateRecord:boolean = false;
  forUpdate:boolean = false
  showSave:boolean = true
  inputEmpolyee:InputEmployee = new InputEmployee();
  
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
    this.addRecord = false
    this.updateRecord = false
  }

  addRecordOption(){
    this.forUpdate = false
    this.updateRecord = false
    this.inputEmpolyee = new InputEmployee();
    this.showTable = false
    this.addRecord = true
   

    
  }

  savedata(){
    console.log(this.inputEmpolyee)
    this.employeeService.saveEmployee(this.inputEmpolyee).subscribe((data)=>{
      console.log(data)
    },(error)=>{
      console.log(error)
    })
  }

  deleteRecord(deleteRecord:any){
    let id = deleteRecord.id;
    this.employeeService.deleteRecord(id).subscribe((data)=>{
      console.log(data)
    },(error)=>{
      console.log(error)
    })
  }

  updateRecordClick(data:any){
    this.showTable = false
    this.addRecord = true
    this.updateRecord = false
    this.forUpdate =true
    this.forUpdate = false
    this.inputEmpolyee.employeeName = data.employeeName;
    this.inputEmpolyee.employeeAge = data.employeeAge;
    this.inputEmpolyee.employeeMobailNumber = data.employeeMobailNumber;
    this.inputEmpolyee.employeeSalary = data.employeeSalary;
    this.inputEmpolyee.employeeCompany = data.employeeCompany;
    this.inputEmpolyee.employeeLivingCity = data.employeeLivingCity;
    this.inputEmpolyee.employeeNationality = data.employeeNationality;

    console.log(this.inputEmpolyee)
  }

  updateRecordSave(){

  }

  hidAll(){
    this.showTable = false;
    this.employees = [];
  }

}
