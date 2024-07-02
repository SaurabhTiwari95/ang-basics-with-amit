import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {

  weatherApiData = [];
  constructor(
    private  global : GlobalService,
  ){

  }
  ngOnInit(): void {
      this.global.getWeatherData().pipe(map((data:any)=>{
        return data;
      })).subscribe((data : any)=>{
        console.log(data)
      })
  }
}
