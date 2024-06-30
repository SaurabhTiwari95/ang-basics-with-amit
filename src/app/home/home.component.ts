import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  newData: any = [];
  apiData: any = [];

  constructor(
    private global: GlobalService,
  ) { }

  ngOnInit(): void {
    /*Now subscribing the search func data here using observable*/
    this.global.sub.subscribe((data) => {
      console.log(data)
      if (data.length > 3) {
        this.newData = this.apiData.filter((filterData: any) => {
          if (filterData.author?.toLowerCase().includes(data.toLowerCase()) ||
            filterData.title?.toLowerCase().includes(data.toLowerCase()) ||
            filterData.description?.toLowerCase().includes(data.toLowerCase())) {
            return filterData;
          }
        })
      }
      else this.newData = Object.assign([], this.apiData);
    })

    /*
      tap() is used instead of map() when we want to performs any other 
      operation(like calling a function etc.) before subscribing the data using observable
    */
    this.global.getNewAPI().pipe(map((data: any) => {
      data.articles.forEach((articleData: any) => {
        articleData.publishedAt = `${new Date(articleData.publishedAt).getFullYear().toString()} - ${new Date(articleData.publishedAt).getMonth() + 1} - ${new Date(articleData.publishedAt).getDate()}`;
      })
      return data.articles
    })).subscribe((data: any) => {
      // this.global.getNewAPI().pipe(map((data: any) => data.articles)).subscribe((data: any) => {
      // console.log(data.articles)
      console.log(data)
      // this.newData = data.articles
      this.apiData = data
      this.newData = Object.assign([], this.apiData);
    }, (error: any) => {
      console.log(error)
    });
  }
  // ngAfterViewInit(): void {
  //   this.global.sub.subscribe((data) => {
  //     console.log(data);

  //   })
  // }
}
