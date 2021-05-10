import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

interface City {
  name: string;
  code: string;
  inactive: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities: City[];
  selectedCity: City;
  title = 'Front-End';


  public constructor(private primengConfig: PrimeNGConfig) {
    this.cities = [
      {name: 'New York', code: 'NY', inactive: true},
      {name: 'Rome', code: 'RM', inactive: false},
    ];
  }

  public ngOnInit(): void {
    this.primengConfig.ripple = true;

  }
}
