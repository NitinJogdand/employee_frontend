import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {

  recordedData: any;
  isRecording: boolean = false;
  mediaRecorder: any;

  constructor() {}

  async startRecording() {
    this.isRecording = true;
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);

        // Create a MediaRecorder to record the audio
        this.mediaRecorder = new MediaRecorder(stream);
        let chunks: any[] = [];

        this.mediaRecorder.ondataavailable = (event:any) => {
          chunks.push(event.data);
        };

        this.mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          this.recordedData = window.URL.createObjectURL(blob);
          this.isRecording = false;
        };

        this.mediaRecorder.start();

        // Stop recording after 5 seconds (adjust as needed)
        setTimeout(() => {
          this.stopRecording();
        }, 1000);
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
      });
  }
  stopRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
    }
  }
  
  ngOnInit(): void {
  }

}
