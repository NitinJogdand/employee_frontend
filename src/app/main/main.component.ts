import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService, InputEmployee } from '../service/employee.service';
import { from } from 'rxjs';

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

   data = from(fetch("http://localhost:8081/employee/employee/getAll"))
  
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.data.subscribe((data)=>{
      console.log("Data is Here..")
      console.log(data);
    },(error)=>{
      console.log("ERROR...")
    })
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
    this.forUpdate = false
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
      this.onShowAll();
    })
    
  }

  deleteRecord(deleteRecord:any){
    this.onShowAll();
    let id = deleteRecord.id;
    this.employeeService.deleteRecord(id).subscribe((data)=>{
      console.log(data)
      
    },(error)=>{
      console.log(error)
      this.onShowAll();
    })
    
  }
 id:number = 0;
  updateRecordClick(data:any){
    this.showTable = false
    this.addRecord = false
    this.updateRecord = false
    this.forUpdate =true
    this.id = data.id;
    this.inputEmpolyee.employeeName = data.employeeName;
    this.inputEmpolyee.employeeAge = data.employeeAge;
    this.inputEmpolyee.employeeMobailNumber = data.employeeMobailNumber;
    this.inputEmpolyee.employeeSalary = data.employeeSalary;
    this.inputEmpolyee.employeeCompany = data.employeeCompany;
    this.inputEmpolyee.employeeLivingCity = data.employeeLivingCity;
    this.inputEmpolyee.employeeNationality = data.employeeNationality;
    console.log(this.inputEmpolyee)
    console.log("For Update")
    console.log(data)
    this.employeeService.updateEmployee(data).subscribe((result)=>{
      console.log(result);
    },(error)=>{
      console.log(error)
    })
  }
  dataForUpdate:Employee = new Employee();
  updateRecordSave(){
    console.log(this.inputEmpolyee)
    this.dataForUpdate.id = this.id;
    this.dataForUpdate.employeeName = this.inputEmpolyee.employeeName;
    this.dataForUpdate.employeeAge = this.inputEmpolyee.employeeAge;
    this.dataForUpdate.employeeMobailNumber = this.inputEmpolyee.employeeMobailNumber;
    this.dataForUpdate.employeeSalary = this.inputEmpolyee.employeeSalary;
    this.dataForUpdate.employeeCompany = this.inputEmpolyee.employeeCompany;
    this.dataForUpdate.employeeLivingCity = this.inputEmpolyee.employeeLivingCity;
    this.dataForUpdate.employeeNationality = this.inputEmpolyee.employeeNationality;
    this.employeeService.updateEmployee(this.dataForUpdate).subscribe((result)=>{
      console.log(result)
      this.onShowAll();
    },(error)=>{
      console.log(error)
    })
   
  }

  hidAll(){
    this.showTable = false;
    this.employees = [];
    this.forUpdate = false
    this.addRecord=false
  }

}
