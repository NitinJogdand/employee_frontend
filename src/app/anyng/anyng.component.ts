import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionServiceService } from '../voice-recognition-service.service';
import { SpeechRecognition } from "@capacitor-community/speech-recognition";



@Component({
  selector: 'app-anyng',
  templateUrl: './anyng.component.html',
  styleUrls: ['./anyng.component.scss']
})
export class AnyngComponent {

  recognitionActive: boolean = false;
  recognizedText: string = '';


  constructor(private voiceRecognitionService: VoiceRecognitionServiceService) {

    SpeechRecognition.available();

  }

  speak(){
    let msg = new SpeechSynthesisUtterance("some text");
    msg.lang = "fr-FR" ;
   window.speechSynthesis.speak(msg);
  }

  // async startListening111() {
  //   try {
  //     const text = await this.voiceRecognitionService.startRecognition111();
  //     console.log('Recognized text:', text);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // stopListening111() {
  //   this.voiceRecognitionService.stopRecognition111();
  // }

  start(){
    SpeechRecognition.start({
      language: "en-US",
      maxResults: 2,
      prompt: "Say something",
      partialResults: true,
      popup: true,
    });
    // listen to partial results
    SpeechRecognition.addListener("partialResults", (data: any) => {
      console.log("partialResults was fired", data.matches);
    });
  }

  startRecognition() {
    this.voiceRecognitionService.startRecognition((text: string) => {
      this.recognizedText = text;
    });
    this.recognitionActive = true;
  }

  stopRecognition() {
    this.voiceRecognitionService.stopRecognition();
    this.recognitionActive = false;
  }



}
