import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';
import { Unite } from '../../models/unite';

@Component({
  selector: 'app-unite',
  templateUrl: './unite.component.html',
  styleUrls: ['./unite.component.css']
})
export class UniteComponent implements OnInit {
  showMots: boolean = false;
  showSyllabes: boolean = false;
  words: string[] = [];
  syllabes: string[] = [];
  id: number = 0;

  constructor(private route: ActivatedRoute, private unitService: DataService) {}

  ngOnInit(): void {}

  toggleUnite(id: number): void {
    // Set the unit ID
    this.id = id;
    // Toggle mots or syllabes based on the unit ID
    if (id === 1) {
      this.toggleMots();
    } else if (id === 2) {
      this.toggleSyllabes();
    }
  }

  toggleMots(): void {
    this.showMots = !this.showMots;
    this.showSyllabes = false; // Hide syllabes if mots are shown
    if (this.showMots) {
      // Retrieve mots data from the service
      const unit: Unite | undefined = this.unitService.getUnitById(this.id);
      if (unit) {
        this.words = unit.words; // Assign words data to the array
        console.log(this.words); // Check if mots data is correctly assigned
      } else {
        console.error(`Unit with ID ${this.id} not found.`);
      }
    }
  }

  toggleSyllabes(): void {
    this.showSyllabes = !this.showSyllabes;
    this.showMots = false; // Hide mots if syllabes are shown
    if (this.showSyllabes) {
      // Retrieve syllabes data from the service
      const unit: Unite | undefined = this.unitService.getUnitById(this.id);
      if (unit) {
        this.syllabes = unit.syllabes; // Assign syllabes data to the array
        console.log(this.syllabes); // Check if syllabes data is correctly assigned
      } else {
        console.error(`Unit with ID ${this.id} not found.`);
      }
    }
  }
}
