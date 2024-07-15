import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { map } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {

  weatherApiData: any = [];
  weatherData: FormGroup
  constructor(
    public global: GlobalService,
  ) {
    this.weatherData = new FormGroup({
      city: new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  getCityWeatherData() {
    console.log(this.weatherData.value.city)
    this.global.getWeatherData(this.weatherData.value.city).pipe(map((data: any) => {
      return data;
    })).subscribe((data: any) => {
      console.log(data)
      if (data != null) {
        this.weatherApiData.push(data);
      }
      else{
        alert("API Data not Found")
      }
      console.log(this.weatherApiData);
    })
    this.weatherData.reset();
  }
}
