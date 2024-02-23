import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployeeList(){
    return this.http.get<any>('http://localhost:8081/employee/employee/getAll');
  }

  saveEmployee(inputEmployee:InputEmployee){
    return this.http.post('http://localhost:8081/employee/employee/save',inputEmployee)
  }

  deleteRecord(id:number){
    return this.http.delete(`http://localhost:8081/employee/employee/${id}`)
  }

  updateEmployee(employee:any){
    return this.http.put(`http://localhost:8081/employee/employee/update`,employee)
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