import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService, InputEmployee, student } from '../service/employee.service';
import { SpeechRecognitionService } from '@ng-web-apis/speech';
// import SpeechRecognition from 'web-speech-api';

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  isRecord:boolean = false
  employees:any[]=[];
  showTable:boolean = false;
  addRecord:boolean = false;
  updateRecord:boolean = false;
  forUpdate:boolean = false
  showSave:boolean = true
  inputEmpolyee:InputEmployee = new InputEmployee();

  content_condition:boolean = true;
  students:student[] = [];
  num1:number=1;
  num2:number=1;
  myName:string = "Nitin"
  selectedItem:string = ''
  suggestions:string[] = ["prathamesh","nitin","vishal","nikhil","rahul","ravi","vinayak","shiva"]
  testData = {
      'key1': [{'key11':'value11'}, {'key12':'value12'}],
      'key2': [{'key21':'value21'}, {'key22':'value22'}],     
    }

    products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
      { id: 4, name: 'Product 4' },
      { id: 5, name: 'Product 5' },
      { id: 6, name: 'Product 6' },
      { id: 7, name: 'Product 7' },
      { id: 8, name: 'Product 8' },
      { id: 9, name: 'Product 9' },
      { id: 10, name: 'Product 10' }
    ];

    @ViewChild('productsData') productsData!: ElementRef;

    isChecked:boolean = false

    myLink:string = '<h4>Nitin Jogdand</h4>';
    
    outputText:string = ''
    recognition:any;


  constructor(private employeeService:EmployeeService) {

    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.addEventListener('result', (e: any) => {
            const transcriptArray = Array.from(e.results      )
              .map((result: any) => result[0])
              .map((result: any) => result.transcript);
              console.log("Data")
              console.log(e)
            this.outputText = transcriptArray.join(' ');
            
          });
    // this.recognition.onresult = (event: any) => {
    //   const transcript = event.results[event.results.length - 1][0].transcript;
    //   this.outputText += transcript;
    // };
    
   }

  //  speech:boolean = true;
  //  recognition1: any;
  //  transcript = '';
  ngOnInit(): void {

    // const data = from(fetch("http://localhost:8081/employee/employee/getAll"))
    // data.subscribe((result)=>{
    //   (next())
    // })

    this.students = this.employeeService.getAllStudents();
    // this.initializeSpeechRecognition();

  }

  text:string=''
  paused:boolean=false
  options:any;
  onEnd(){

  }

 resultString:string = ''
  justWorking(){
    var speech = true;
    const recognition = new webkitSpeechRecognition();
    // const recognition = new SpeechRecognition();

    recognition.interimResults = true;
    recognition.addEventListener('result', (e: any) => {
      const transcriptArray = Array.from(e.results      )
        .map((result: any) => result[0])
        .map((result: any) => result.transcript);
        console.log("Data")
        console.log(e)
       this.resultString = transcriptArray.join(' ');
      
    });

    if(speech == true){
      recognition.start();
    }
    // recognition.addEventListener('end', () => {
    //   if (speech) {
    //     recognition.start();
    //   }
    // });
  }

  // initializeSpeechRecognition(): void {
  //   if ('SpeechRecognition' in window) {
  //     const SpeechRecognition = (window as any).webkitSpeechRecognition;
  //     this.recognition1 = new SpeechRecognition();
  //     this.recognition1.interimResults = true;
  
  //     this.recognition1.addEventListener('result', (e: any) => {
  //       const transcriptArray = Array.from(e.results)
  //         .map((result: any) => result[0])
  //         .map((result: any) => result.transcript);
  
  //       this.transcript = transcriptArray.join(' ');
  //     });     
  //   } else {
  //     console.log('Speech recognition not supported');
  //   }
  // }

  // startRecognition1(): void {
  //   if (this.recognition1) {
  //     this.recognition1.start();
  //   } else {
  //     console.log('Speech recognition not initialized');
  //   }
  // }

  // stopRecognition1(): void {
  //   if (this.recognition1) {
  //     this.recognition1.stop();
  //   } else {
  //     console.log('Speech recognition not initialized');
  //   }
  // }

  // speech(){
  //   var speech = true;
  //   window.SpeechRecognition = window.webkitSpeechRecognition;
  //   const recognition = new SpeechRecognition();
  //   recognition.interimResults = true;

  //   recognition.addEventListner('result',e=>{
  //     const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript)
  //     conver_text.innerHTML = transcript;
  //   })

  //   if(speech == true){
  //     recognition.start();
  //   }
  // }
  // speech = true;
  // recognition1: any;
  // transcript: string = '';

  // initializeSpeechRecognition(): void {
  //   if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  //     const SpeechRecognition = (window as any).webkitSpeechRecognition;
  //     this.recognition1 = new SpeechRecognition();
  //     this.recognition1.interimResults = true;

  //     this.recognition1.addEventListener('result', (e: any) => {
  //       const transcriptArray = Array.from(e.results)
  //         .map((result: any) => result[0])
  //         .map((result: any) => result.transcript);
          
  //       this.transcript = transcriptArray.join(' ');
  //     });

  //   } else {
  //     console.log('Speech recognition not supported');
  //   }
  // }

  // toggleRecognition(){
  //   this.initializeSpeechRecognition();
  //   this.recognition1.start();
  // }
 
  
  startRecognition() {
    this.isRecord = true
    // this.outputText = ''
    this.recognition.start();
  }

  stopRecognition() {
    this.isRecord = false
    this.recognition.stop();
  }

  textFroSpeech:string = ''
  callOnButton(){
    // const text:string = this.textFroSpeech;
    const text:string = this.resultString;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance)
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

  updateMyName(value:string){
    console.log(value)
    if(value == ''){
      this.myName = "Nitin";
    }else{
      this.myName = value
    }
    
  }

  pressKeyUpEvent(){
    console.log("Key up event")
  }

  keyDownEvent(){
    console.log("key down event")
  }

  templateVariable(data:any){
    console.log(data.nativeElement.value)
  }

  onCheckBoxChange(){
    console.log('Checkbox state changed. New state:', this.isChecked);

  }

  search(event:any){
   console.log(event)
   this.suggestions = this.suggestions.map(item => item);
  }

}
