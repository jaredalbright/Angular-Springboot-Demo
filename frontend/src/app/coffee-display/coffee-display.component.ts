import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { Coffee } from '../coffee';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-coffee-display',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './coffee-display.component.html',
  styleUrl: './coffee-display.component.css'
})
export class CoffeeDisplayComponent {

  @Input() coffee: Coffee = {id: 0, shop: "", type: "", price: 0, rating: 0};
  @Output() removeItemEvent = new EventEmitter();
  @Output() editItemEvent = new EventEmitter();  

}
