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
  apiURL = "https://newsapi.org/v2/everything?q=apple&from=2024-06-29&to=2024-06-29&sortBy=popularity&pageSize=10&apiKey=cb9a703c5aed41ceb0f7f9b9d32c7ded"
  
  sub = new Subject<string>();

  constructor(
    private http : HttpClient,
  ) { 
    console.log("global")
  }

  getNewAPI(){
    return this.http.get(this.apiURL)
  }
}
