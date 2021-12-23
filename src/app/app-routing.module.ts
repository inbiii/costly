import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { CityComponent } from './city/city.component';
import { AddCityComponent } from './add-city/add-city.component';
import { EditCityComponent } from './edit-city/edit-city.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app" },
  { path: "app", component: CityListComponent },
  { path: "app/:id", component: CityComponent },
  { path: "addCity", component: AddCityComponent },
  { path: "app/:id/edit", component: EditCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
