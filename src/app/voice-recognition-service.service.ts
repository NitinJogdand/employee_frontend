import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
// import * as RecordRTC from 'recordrtc';


// import * as annyang from 'annyang';

declare var annyang:any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionServiceService {
  // recognition111: SpeechRecognition;

  constructor() {
    // this.recognition111:SpeechRecognition;
    // this.recognition111.lang = 'en-US';
    // this.recognition111.interimResults = false;
    // this.recognition111.maxAlternatives = 1;
   }
   startListening(commands: Record<string, any>) {
    annyang.addCommands(commands);
    annyang.start();
  }
  
  stopListening() {
    annyang.abort();
  }
  //  startRecognition111(): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     this.recognition111.onresult = (event:any) => {
  //       const transcript = event.results[0][0].transcript;
  //       resolve(transcript);
  //     };

  //     this.recognition111.onerror = (event:any) => {
  //       reject('Speech recognition error: ' + event.error);
  //     };

  //     this.recognition111.start();
  //   });
  // }
  
  // stopRecognition111() {
  //   this.recognition111.stop();
  // }
  startRecognition(callback: (text: string) => void) {
    annyang.start();
    annyang.addCallback('result', (phrases: string[]) => {
      if (phrases.length > 0) {
        callback(phrases[0]); // Pass the first recognized phrase to the callback
      }
    });
  }

  stopRecognition() {
    annyang.abort();
  }

  // private mediaRecorder: any;
  // private audioStream: MediaStream | null = null; // Initialize with null
  // private audioChunks: Blob[] = [];

  // constructor() {}

  // startRecording() {
  //   navigator.mediaDevices.getUserMedia({ audio: true })
  //     .then((stream) => {
  //       this.audioStream = stream;
  //       this.mediaRecorder = new RecordRTC.MediaStreamRecorder(stream);
  //       this.mediaRecorder.mimeType = 'audio/wav'; // Change mimeType as per requirement
  //       this.mediaRecorder.start(3000); // Record for 3 seconds, adjust as needed

  //       this.mediaRecorder.ondataavailable = (blob: Blob) => {
  //         this.audioChunks.push(blob);
  //       };
  //     })
  //     .catch((error) => {
  //       console.error('Error accessing microphone:', error);
  //     });
  // }

  // stopRecording(): Promise<Blob> {
  //   return new Promise((resolve, reject) => {
  //     this.mediaRecorder.stop(() => {
  //       this.audioStream.getTracks().forEach(track => track.stop());
  //       const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' }); // Change type as per mimeType
  //       resolve(audioBlob);
  //     }, reject);
  //   });
  // }
}
