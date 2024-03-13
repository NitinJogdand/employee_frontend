import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionServiceService } from '../voice-recognition-service.service';
import { Employee, EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  resultString: string = '';
  recognizing: boolean = false;
  text:string = ''
  item = {
    color:'red'
  }

  constructor(private voiceRecoginition:VoiceRecognitionServiceService,private emps:EmployeeService){
 
  }
  onClick(){
    this.emps.getDataUsingParames().subscribe((data)=>{
      console.log(data)
     })
  }

  ngOnInit(): void {
    const commands:any = {
      'hello': () => {
        console.log('Hello!');
        // Perform actions when "hello" is recognized
      },
      'go to *place': (place: string) => {
        console.log('Navigating to:', place);
        // Perform actions when "go to" followed by a place is recognized
      }

    // this.startRecognition();

  }
  this.voiceRecoginition.startListening(commands);

}

  startRecognition() {
    const recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = true;

    recognition.onstart = () => {
      this.recognizing = true;
    };

    recognition.onresult = (event:any) => {
      const last = event.results.length - 1;
      const transcript = event.results[last][0].transcript;
      console.log('Recognized text:', transcript);
      this.resultString = transcript;
    };

    recognition.onend = () => {
      this.recognizing = false;
      // Restart recognition
      if (this.recognizing) {
        recognition.start();
      }
    };

    recognition.onerror = (event:any) => {
      console.error('Speech recognition error:', event.error);
    };

    // Start recognition
    recognition.start();
  }
  stopRecognition() {
    // Stop recognition
    this.recognizing = false;
  }

  datas:any = [];
  getAllTheData(){
    this.emps.getAllTheDataResponseEntity().subscribe((result)=>{
      console.log("In Data")
      console.log(result)
      this.datas=result;
    })
  }

}
