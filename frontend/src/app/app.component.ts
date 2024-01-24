import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Coffee } from './coffee';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CoffeeInputComponent } from './coffee-input/coffee-input.component';
import { CoffeeWrapperComponent } from './coffee-wrapper/coffee-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CoffeeWrapperComponent, CoffeeInputComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  coffees: Coffee[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Coffee[]>(
      "http://localhost:8080/coffees"
    ).subscribe(data => this.coffees = data);
  }

  appendData(newCoffee: any): void {
    this.coffees.push(newCoffee);
  }

  removeItem(coffeeId: number): void {
    this.http.delete("http://localhost:8080/coffees/" + coffeeId)
      .subscribe(data => this.coffees = this.coffees.filter((coffee: Coffee) => coffee.id != coffeeId));
  }

}
