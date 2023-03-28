import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const API_ULR = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todayDay = new Date();
  weatherTemp: any;
  weatherDetails: any;
  icon: any;
  cityName = 'Hanoi';

  constructor(public httpClient: HttpClient) {}
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.httpClient
      .get(`${API_ULR}/weather?q=${this.cityName}&appid=${API_KEY}`)
      .subscribe((results: any) => {
        console.log(results);
        this.weatherTemp = results.main;
        console.log(this.weatherTemp);
        this.weatherDetails = results.weather[0];
        console.log(this.weatherDetails);
        this.icon =
          'https://openweathermap.org/img/wn/' +
          this.weatherDetails.icon +
          '@4x.png';
      });
  }

  loader() {}
}


