import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  /*
    choose Subject for standard multicasting needs. Opt for BehaviorSubject when the latest value or seed value is critical, and ReplaySubject when you want to ensure a history of values is available for late subscribers.
  */
  pageNumber = 1;
  startDate = this.datePipe.transform(new Date().setDate(new Date().getDate() - 1), 'yyyy-MM-dd');
  endDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  apiURL = `https://newsapi.org/v2/everything?q=apple&from=${this.startDate}&to=${this.endDate}&sortBy=popularity&pageSize=10&apiKey=cb9a703c5aed41ceb0f7f9b9d32c7ded`
  // weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a94da488b3c8310272e1596e5c4d124d`
  weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Varanasi&appid=a94da488b3c8310272e1596e5c4d124d`  
  sub = new Subject<string>();
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) {
    console.log("global")

  }

  getNewAPI(pageNo: any) {
    return this.http.get(`${this.apiURL}&page=${pageNo}`)
  }

  getWeatherData() {
    return this.http.get(`${this.weatherApiUrl}`)
  }
}


