import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coffee } from '../coffee';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-coffee-input',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './coffee-input.component.html',
  styleUrl: './coffee-input.component.css'
})
export class CoffeeInputComponent {

  @ViewChild("coffeeForm") coffeeForm!: NgForm;
  
  @Output() newDataEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.coffeeForm.value.shop && this.coffeeForm.value.type 
      && this.coffeeForm.value.price >=0 && this.coffeeForm.value.rating >= 0
       && this.coffeeForm.value.rating <= 5)
    {
      this.http.post<Coffee>(
        "http://localhost:8080/coffees",
        this.coffeeForm.value
      ).subscribe(data => this.newDataEvent.emit(data))
    }
  }

}
