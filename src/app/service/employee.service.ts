import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   tomcatPath:string = 'http://localhost:8081/employee/';
   developmentPath:string = 'http://localhost:9090/'

  constructor(private http:HttpClient) { }

  getAllEmployeeList(){
    return this.http.get<any>(`${this.tomcatPath}employee/getAll`);
  }

  saveEmployee(inputEmployee:InputEmployee){
    return this.http.post(`${this.tomcatPath}employee/save`,inputEmployee)
  }

  deleteRecord(id:number){
    return this.http.delete(`${this.tomcatPath}employee/deleteEmployee/${id}`)
  }

  updateEmployee(employee:any){
    console.log("In API")
    return this.http.put(`${this.tomcatPath}employee/update`,employee)
  }
}
export class InputEmployee{
  employeeName:string='';
  employeeAge:number=0;
  employeeMobailNumber:number=0;
  employeeSalary:number = 0;
  employeeCompany:string='';
  employeeLivingCity:string='';
  employeeNationality:string=''
}

export class Employee{
  id:number=0;
  employeeName:string='';
  employeeAge:number=0;
  employeeMobailNumber:number=0;
  employeeSalary:number = 0;
  employeeCompany:string='';
  employeeLivingCity:string='';
  employeeNationality:string=''
}