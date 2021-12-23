import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CityComponent } from './city/city.component';
import { AddCityComponent } from './add-city/add-city.component'
import { FormsModule } from '@angular/forms';
import { EditCityComponent } from './edit-city/edit-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityComponent,
    AddCityComponent,
    EditCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
