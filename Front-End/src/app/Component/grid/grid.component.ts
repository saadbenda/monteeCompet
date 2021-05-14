import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {City} from '../../Model/City.model';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  cities: City[];
  selectedCity: City = new City();


  public constructor(private primengConfig: PrimeNGConfig) {
    this.selectedCity.code = 'test';
    this.cities = [
      {name: 'New York', code: 'NY', inactive: true},
      {name: 'Rome', code: 'RM', inactive: false},
    ];
  }

  public ngOnInit(): void {
    this.primengConfig.ripple = true;

  }

  public onClick(){
    console.log(this.selectedCity);
  }

}
