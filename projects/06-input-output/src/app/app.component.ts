import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Saved Cars {{ savedCarList.length }}</h1>
    @for (savedCar of savedCarList; track savedCar){
    <span>{{ savedCar.make }} </span>

    }
    <section class="container">
      @for (carEntry of carList; track $index) {
      <app-listing [car]="carEntry" (carSaved)="addCarToSaved($event)" />
      }@empty {
      <p>No Items...</p>
      }
    </section>`,
  styles: [],
  imports: [ListingComponent],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  addCarToSaved(car: Car) {
    console.log(car);
    const isExist = this.savedCarList.find(
      (currentCar) => currentCar.make === car.make
    );

    if (!isExist) {
      this.savedCarList.push(car);
    }
  }
}
