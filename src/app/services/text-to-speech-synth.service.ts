import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechSynthService {
  specchSynt:SpeechSynthesis

  constructor() { 
    this.specchSynt=window.speechSynthesis
  }

  speak(): void {
    let text="Bonjour a tous";
    const utterance = new SpeechSynthesisUtterance(text);
    this.specchSynt.speak(utterance);
  }
}
