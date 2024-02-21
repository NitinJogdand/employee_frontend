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
}
