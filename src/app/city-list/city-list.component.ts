import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { City } from './city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cityList: City[] = [];
  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe(res => {
      this.cityList = res.sort((a: any, b: any) => {
        if (a.monthlyRent === b.monthlyRent) {
          return b.averageSal - a.averageSal;
        }
        return b.monthlyRent - a.monthlyRent;
      });
    }
    )
  }

  delCity(id: any, city: any) {
    console.log(`${city.name} removed from City List`);

    this.cityService.deleteCity(id, city).subscribe(res => {
      this.ngOnInit();
    })
  }


}
