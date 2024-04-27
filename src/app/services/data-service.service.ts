import { Injectable } from '@angular/core';
import { Unite } from '../models/unite'; // Assuming your Unite model is in a file named unite.ts

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Array to store your Unite objects
  public unites: Unite[] = [];

  constructor() {
    // Push your unit instances into the units array
    this.unites.push(new Unite(1, ['word1', 'word2', 'word3'], ['syllabe1', 'syllabe2']));
    this.unites.push(new Unite(2, ['word4', 'word5', 'word6'], ['syllabe3', 'syllabe4']));
  }

  getUnitById(id: number): Unite {
    const unit = this.unites.find(unit => unit.id === id);
    if (!unit) {
        console.error(`Unit with ID ${id} not found.`);
        // You can handle this error case as per your application's requirements.
        // For now, let's return a default empty Unite object.
        return new Unite(-1, [], []); // Default empty Unite object with ID -1
    }
    console.log('Unit retrieved:', unit);
    return unit;
  } 
}