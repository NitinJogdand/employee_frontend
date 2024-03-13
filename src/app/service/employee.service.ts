import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   tomcatPath:string = 'http://localhost:8081/employee/';
   developmentPath:string = 'http://localhost:9090/'

  constructor(private http:HttpClient) { }

  getAllEmployeeList(){
    return this.http.get<any>(`${this.developmentPath}employee/getAll`);
  }

  saveEmployee(inputEmployee:InputEmployee){
    return this.http.post(`${this.developmentPath}employee/save`,inputEmployee)
  }

  deleteRecord(id:number){
    return this.http.delete(`${this.developmentPath}employee/deleteEmployee/${id}`)
  }

  updateEmployee(employee:any){
    console.log("In API")
    return this.http.put(`${this.developmentPath}employee/update`,employee)
  }

  getAllTheDataResponseEntity(){
    return this.http.get(`${this.developmentPath}employee/getAllData`)
  }

  getDataUsingParames(){
    let names = ['Nitin','Prathamesh','vishal','pooja']
    let param = new HttpParams();
    for(let i=0;i<names.length-1;i++){
     param= param.append('names',names[i])
    }
     return this.http.get(`${this.developmentPath}employee/getThedata`,{params:param})
  }

  getAllStudents(){
   let s1:student = new student(1,"Nitin","Jogdand",23);
   let s2:student = new student(2,"Vishal","Mane",21);
   let s3:student = new student(1,"Pranav","Munde",24);
   let s4:student = new student(2,"Rahul","Gaikwad",24);
   let s5:student = new student(5,"Ganesh","Mote",20);
   let s6:student = new student(6,"Virag","Londhe",25);
   let s7:student = new student(7,"Pinki","Jadhav",25);
   let s8:student = new student(8,"Sumit","Bhujbal",23);
   let studentList:student[] = [];
   studentList.push(s1);
   studentList.push(s2);
   studentList.push(s3);
   studentList.push(s4);
   studentList.push(s5);
   studentList.push(s6);
   studentList.push(s7);
   studentList.push(s8);
   return studentList;
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

export class student{
  id:number=0;
  firstName:string='';
  lastName:string='';
  age:number = 0;

  constructor(id:number,firstName:string,lastName:string,age:number){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


}