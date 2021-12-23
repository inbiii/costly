import { Component, Input, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { states } from '../data/states';
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  states: any = [];
  tempRent: string = '';
  tempSal: string = '';
  city = {
    city: '',
    state: '',
    monthlyRent: 0,
    averageSal: 0,
    updatedYear: '2021',
  }
  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.states = states;
  }

  postMe() {
    this.city.monthlyRent = parseInt(this.tempRent);
    this.city.averageSal = parseInt(this.tempSal);
    this.cityService.postCity(this.city).subscribe(res => {
      console.log(res)
    })

  }

}
