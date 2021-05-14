import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {City} from '../../Model/City.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  city = new City();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCity();
  }

  getCity(): void{
    this.city.code = this.route.snapshot.paramMap.get('code');
    console.log(this.city.code);
  }

}
