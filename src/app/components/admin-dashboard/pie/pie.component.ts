import { Component, OnDestroy, OnInit } from '@angular/core';
import {AppConfigService} from '../../../services/appconfig.service';
import {AppConfig} from '../../../common/appconfig';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html'
})
export class PieComponent implements OnInit, OnDestroy  {

  data: any;

  chartOptions: any;

  subscription: Subscription;

  config: AppConfig;

  constructor(private configService: AppConfigService) { }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
  }
  }

  ngOnInit(){
    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
  };

  this.config = this.configService.config;
  this.updateChartOptions();
  this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
      this.updateChartOptions();
  });
}

updateChartOptions() {
  this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
}

getLightTheme() {
  return {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      }
  }
}

getDarkTheme() {
  return {
      plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          }
      }
  }


  }

}
