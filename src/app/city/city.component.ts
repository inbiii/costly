import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city-list/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  city: City = {};
  constructor(private route: ActivatedRoute, private router: Router, private cityService: CityService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const myid = params['id'];
      this.cityService.getCity(myid).subscribe(res => {
        this.city = res;
      }
      )
    })
  }

  goToEdit() {
    this.router.navigateByUrl(`app/${this.city.id}/edit`)
  }
}
