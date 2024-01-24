import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Coffee } from '../coffee';

import { CoffeeEditComponent } from '../coffee-edit/coffee-edit.component';
import { CoffeeDisplayComponent } from '../coffee-display/coffee-display.component';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-coffee-wrapper',
  standalone: true,
  imports: [CoffeeEditComponent, CoffeeDisplayComponent, MatCardModule, CommonModule],
  templateUrl: './coffee-wrapper.component.html',
  styleUrl: './coffee-wrapper.component.css'
})
export class CoffeeWrapperComponent {
  @Input() coffee: Coffee = {id: 0, shop: "", type: "", price: 0, rating: 0};
  @Output() removeItemEvent = new EventEmitter(); 

  editable: boolean = false;

  handleEditClick(): void {
    this.editable = true;
  }

  handleSaveEdition(coffee: Coffee): void {
    this.editable = false;
    this.coffee = coffee;
  }
}
