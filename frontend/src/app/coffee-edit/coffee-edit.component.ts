import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Coffee } from '../coffee';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-coffee-edit',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './coffee-edit.component.html',
  styleUrl: './coffee-edit.component.css'
})
export class CoffeeEditComponent {
  @Input() coffee: Coffee  = {id: 0, shop: "", type: "", price: 0, rating: 0};
  
  @Output() editDataEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.coffee.shop && this.coffee.type 
      && this.coffee.price && this.coffee.rating
      && this.coffee.price >= 0 && this.coffee.rating >= 0
       && this.coffee.rating <= 5)
    {
      this.http.post<Coffee>(
        "http://localhost:8080/coffees",
        this.coffee
      ).subscribe(data => this.editDataEvent.emit(data));
    }
  }
}
