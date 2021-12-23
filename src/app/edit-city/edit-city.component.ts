import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city-list/city.model';
import { CityService } from '../city.service';


@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {
  tempRent: any = '';
  tempSal: any = '';
  city: City = {};


  constructor(private cityService: CityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let myid = +params['id'];
      this.cityService.getCity(myid).subscribe(res => {
        console.log(res);
        this.city = res;
        this.tempRent = res.monthlyRent;
        this.tempSal = res.averageSal;
      })
    })
  }

  onClick(): void {
    this.city.monthlyRent = parseInt(this.tempRent);
    this.city.averageSal = parseFloat(parseFloat(this.tempSal).toFixed(2));
    this.cityService.patchCity(this.city.id, this.city).subscribe(res => {

    })
  }

}
