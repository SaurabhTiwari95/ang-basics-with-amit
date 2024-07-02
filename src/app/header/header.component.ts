import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  constructor(
    private global: GlobalService,
    private router: Router,
  ) {

  }
  filterData(event: any) {
    this.global.sub.next(event.target.value)
  }

  navigateToWeather() {
    this.router.navigateByUrl('weather')
  }
}

