import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription,Subject} from 'rxjs';
import { DataNumber } from 'src/app/common/data-number';
import { DataStringNumber } from 'src/app/common/data-string-number';
import { DataStringStringNumber } from 'src/app/common/data-string-string-number';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

class AppConfigService {
    config: AppConfig = {
        theme: 'lara-light-blue',
        dark: false,
        inputStyle: 'outlined',
        ripple: true
    };

    private configUpdate = new Subject<AppConfig>();
    configUpdate$ = this.configUpdate.asObservable();
    updateConfig(config: AppConfig) {
        this.config = config;
        this.configUpdate.next(config);
    }
    getConfig() {
        return this.config;
    }
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [AppConfigService]
})

// const datapieclass: DataNumber = new DataNumber();

export class AdminDashboardComponent implements OnInit {
      datapieclass: DataNumber = new DataNumber();
      datapie2class: DataNumber = new DataNumber();
      dashboardtortaclass: DataStringNumber = new DataStringNumber();
      dashboardnormalclass: DataStringNumber = new DataStringNumber();
      dataVentasTotalespormes: DataStringNumber = new DataStringNumber();
      dashboardmulticlass: DataStringStringNumber = new DataStringStringNumber();
      dashboardradarclass: DataStringNumber = new DataStringNumber();
      //information;
      info: DataNumber = new DataNumber();

      //data
      piedata: any;
      multidata: any;
      basicData: any;
      stackedData: any;
      radardata: any;
      polardata:any;
      //options
      chartOptions: any;
      basicOptions: any;
      stackedOptions: any;
      horizontalOptions: any;

      subscription: Subscription;
      config: AppConfig;
      total1: any;
      contador: any;

      datawithstock:any;

    constructor(private configService: AppConfigService,
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    public oktaAuthService: OktaAuthService,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleDashboard();
      this.handleDashboard2();
      this.handleDashboard3();
      this.handleDashboard4();
      this.handleDashboard5();
      this.handleInformation();
      this.optionscharge();
    });
    }

    handleInformation(){
      this.dashboardService.getQuantityofOrders().subscribe(
        data => {
          this.info = data;
       });
    }

//prendas vendidas por mes
    handleDashboard5(){
      this.dashboardService.getProducsSellbyMonth().subscribe(
        data => {
          this.dashboardradarclass = data;
          console.log("data of clothes sell by month and category")
          console.log(this.dashboardradarclass);
          let numero;
          const alphas:string[] = [];
          const betas:string[] = [];
          //para la data
          const charlies:string[] = [];
          const deltas:string[] = [];
          const echo:string[] = [];
          const foxtrot:string[] = [];
          const golf:string[] = [];
          //cambiar por un for en
          let values:any; let valuei:any;
          let ai;
          values= Object.keys(this.dashboardradarclass).map(key => this.dashboardradarclass[key]);
          for(let i=0;i<values.length;i++){
            valuei = Object.keys(this.dashboardradarclass).map(key => this.dashboardradarclass[i]);
            for (numero of valuei){
                console.log(numero[0]);
                ai= Object.values(numero);

            }
            alphas.push(ai[0]);
            betas.push(ai[1]);
          }
          console.log("alphas");
          console.log(alphas);
          console.log("betas");
          console.log(betas);


          this.radardata = {
            labels: alphas,
            datasets: [
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: betas
                }
            ]
        };


        }


      );

    }

    //prendas vendidas por mes y categoria
    handleDashboard3(){
      this.dashboardService.getDashboardProductSells().subscribe(
        data => {
          this.dataVentasTotalespormes = data;
          console.log("data of clothes sell by month in quantity")
          console.log(this.dataVentasTotalespormes);
        }
      );
      this.dashboardService.getDashboardQuantitySellsbyMonthCategory().subscribe(
        data => {
          this.dashboardmulticlass = data;
          console.log("data of clothes sell by month and category")
          console.log(this.dashboardmulticlass);
          let numero;
          const alphas:string[] = [];
          const betas:string[] = [];
          //para la data
          const charlies:string[] = [];
          const deltas:string[] = [];
          const echo:string[] = [];
          const foxtrot:string[] = [];
          const golf:string[] = [];
          //cambiar por un for en
          let values:any; let valuei:any;
          let ai;
          values= Object.keys(this.dashboardmulticlass).map(key => this.dashboardmulticlass[key]);
          for(let i=0;i<values.length;i++){
            valuei = Object.keys(this.dashboardmulticlass).map(key => this.dashboardmulticlass[i]);
            for (numero of valuei){
                console.log(numero[0]);
                ai= Object.values(numero);

            }
            alphas.push(ai[0]);
            betas.push(ai[1]);
            charlies.push(ai[2]);
          }
          console.log("alphas");
          console.log(alphas);
          console.log("betas");
          console.log(betas);
          console.log("charlies")
          console.log(charlies);
          this.polardata = {
            labels: betas,
            datasets: [
                {
                    label: 'Ventas',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: charlies
                },
            ]
        };


          // for(let i=0;i<values.length;i++){
          //   if(charlies.length<41){
          //       this.multidata = {
          //           labels: [alphas[i],] ,
          //           datasets: [{
          //               type: 'line',
          //               label: betas,
          //               borderColor: '#42A5F5',
          //               borderWidth: 3,
          //               fill: false,
          //               //arreglar
          //               data: charlies
          //           }]
          //       };
          //   }
          // }

    //       this.multidata = {
    //         labels: [alphas[0],alphas[11],alphas[21],alphas[31]],
    //         datasets: [{
    //             type: 'line',
    //             label: 'Ventas totales',
    //             borderColor: '#42A5F5',
    //             borderWidth: 3,
    //             fill: false,
    //             //arreglar
    //             data: this.dataVentasTotalespormes.quantity
    //         },
    //         {
    //           type: 'bar',
    //           label: betas[0],
    //           backgroundColor: '#00b3ff',
    //           data: [charlies[0],charlies[1],charlies[2],charlies[3],charlies[4],charlies[9]
    //           ],
    //           borderColor: 'white',
    //           borderWidth: 2
    //       },{
    //         type: 'bar',
    //         label: betas[1],
    //         backgroundColor: '#ee00ff',
    //         data: [
    //             21,
    //             54,
    //             24,
    //             44,
    //         ],
    //         borderColor: 'white',
    //         borderWidth: 2
    //     },{
    //       type: 'bar',
    //       label: betas[2],
    //       backgroundColor: '#a2ff00',
    //       data: [
    //           24,
    //           47,
    //           50,
    //           10,
    //       ],
    //       borderColor: 'white',
    //       borderWidth: 2
    //   },{
    //           type: 'bar',
    //           label: betas[3],
    //           backgroundColor: '#66BB6A',
    //           data: [
    //               25,
    //               66,
    //               35,
    //               39,
    //           ],
    //           borderColor: 'white',
    //           borderWidth: 2
    //       }, {
    //             type: 'bar',
    //             label: betas[4],
    //             backgroundColor: '#ff0000',
    //             data: [
    //                 22,
    //                 84,
    //                 44,
    //                 26,
    //             ],
    //             borderColor: 'white',
    //             borderWidth: 2
    //         }, {
    //             type: 'bar',
    //             label: betas[5],
    //             backgroundColor: '#FFA726',
    //             data: [
    //                 23,
    //                 52,
    //                 46,
    //                 45,
    //             ]
    //         },
    //         {
    //             type: 'bar',
    //             label: betas[6],
    //             backgroundColor: '#FFA726',
    //             data: [
    //                 23,
    //                 52,
    //                 46,
    //                 45,
    //             ]
    //         },{
    //             type: 'bar',
    //             label: betas[7],
    //             backgroundColor: '#FFA726',
    //             data: [
    //                 23,
    //                 52,
    //                 46,
    //                 45,
    //             ]
    //         },{
    //             type: 'bar',
    //             label: betas[8],
    //             backgroundColor: '#FFA726',
    //             data: [
    //                 23,
    //                 52,
    //                 46,
    //                 45,
    //             ]
    //         },{
    //             type: 'bar',
    //             label: betas[9],
    //             backgroundColor: '#FFA726',
    //             data: [
    //                 23,
    //                 52,
    //                 46,
    //                 45,
    //             ]
    //         }]
    //     };

        if(alphas.length>50){
            this.multidata={

            }
        }
        }
      )
    }
    //prendas en stock/sin stock
    handleDashboard4(){
      this.dashboardService.getDashboardOffStock().subscribe(
        data => {
          this.datapie2class = data;
          console.log("data of clothes without stock")
          console.log(this.datapie2class);
        }
      );
      this.dashboardService.getDashboardWithStock().subscribe(
        data => {
          this.datapieclass = data;
          console.log("data of clothes with stock")
          console.log(this.datapieclass);
          this.piedata = {
            labels: ['Sin Stock','Con Stock'],
            datasets: [
                {
                    data: [this.datapie2class.quantity,this.datapieclass.quantity],
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
        }
      )
    }

    optionscharge(){
      this.stackedOptions = {
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
       }
      },
      this.horizontalOptions = {
        indexAxis: 'y',
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
      this.chartOptions =  {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe(config => {
        this.config = config;
        this.updateChartOptions();
    });
    }
    //numero de prendas por categoria
    handleDashboard2(){
      this.dashboardService.getDashboardCategory().subscribe(
        data => {
          this.dashboardtortaclass = data;
          console.log("data of clothes by category");
          console.log(this.dashboardtortaclass);
          console.log("categorys");
          let numero;
          const alphas:string[] = [];
          const betas:string[] = [];
          //cambiar por un for en
          let values:any; let valuei:any;
          let ai;
          values= Object.keys(this.dashboardtortaclass).map(key => this.dashboardtortaclass[key]);
          for(let i=0;i<values.length;i++){
            valuei = Object.keys(this.dashboardtortaclass).map(key => this.dashboardtortaclass[i]);
            for (numero of valuei){
                console.log(numero[0]);
                ai= Object.values(numero);

            }
            alphas.push(ai[0]);
            betas.push(ai[1]);
          }
          console.log("alphas");
          console.log(alphas);
          console.log("betas");
          console.log(betas);

          this.basicData = {
            labels: alphas,
            datasets: [
                {
                    label: 'Numero de prendas en la categoria 1',
                    backgroundColor: ['#EC407A',
                    '#AB47BC',
                    '#42A5F5',
                    '#7E57C2',
                    '#66BB6A',
                    '#FFCA28',
                    '#26A69A','#ff0000','#ff00f7','#000dff'],
                    data: betas
                },

            ]
          };
        }
          //aqui termina el for
      );
    }
    // monto de ventas por mes
    handleDashboard() {
      this.dashboardService.getDashboardSellsbyMonth().subscribe(
        data => {
            this.dashboardnormalclass = data;
            console.log("data Bs ");
            console.log(this.dashboardtortaclass);
            console.log("money");
            let numero;
            const alphas:string[] = [];
            const betas:string[] = [];
          //cambiar por un for en
          let values:any; let valuei:any;
          let ai;
          values= Object.keys(this.dashboardnormalclass).map(key => this.dashboardnormalclass[key]);
          for(let i=0;i<values.length;i++){
            valuei = Object.keys(this.dashboardnormalclass).map(key => this.dashboardnormalclass[i]);
            for (numero of valuei){
                console.log(numero[0]);
                ai= Object.values(numero);

            }
            alphas.push(ai[0]);
            betas.push(ai[1]);
          }
          console.log("alphas");
          console.log(alphas);
          console.log("betas");
          console.log(betas);

          this.stackedData = {
            labels: alphas,
            datasets: [{
                type: 'bar',
                label: 'Monto en Bs de las ventas totales por mes',
                backgroundColor: '#FFA726',
                data: betas
            }]
        };}

      )

}
updateChartOptions() {
//pie
this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
//bar
if (this.config.dark)
this.applyDarkTheme();
else
this.applyLightTheme();
}
//pie
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
//chart
applyDarkTheme() {
this.basicOptions = {
plugins: {
    legend: {
        labels: {
            color: '#ebedef'
        }
    }
},
scales: {
    x: {
        ticks: {
            color: '#ebedef'
        },
        grid: {
            color: 'rgba(255,255,255,0.2)'
        }
    },
    y: {
        ticks: {
            color: '#ebedef'
        },
        grid: {
            color: 'rgba(255,255,255,0.2)'
        }
    }
}
};

this.horizontalOptions = {
indexAxis: 'y',
plugins: {
    legend: {
        labels: {
            color: '#ebedef'
        }
    }
},
scales: {
    x: {
        ticks: {
            color: '#ebedef'
        },
        grid: {
            color: 'rgba(255,255,255,0.2)'
        }
    },
    y: {
        ticks: {
            color: '#ebedef'
        },
        grid: {
            color: 'rgba(255,255,255,0.2)'
        }
    }
}
};


this.stackedOptions = {
plugins: {
    legend: {
        labels: {
            color: '#ebedef'
        }
    },
    tooltips: {
        mode: 'index',
        intersect: false
    }
},
scales: {
    x: {
        stacked: true,
        ticks: {
            color: '#ebedef'
        },
        grid: {
            color: 'rgba(255,255,255,0.2)'
        }
    },
    y: {
        stacked: true,
        ticks: {
            color: '#ebedef'
        },
        grid: {
            color: 'rgba(255,255,255,0.2)'
        }
    }
}
};
}
applyLightTheme() {
this.basicOptions = {
plugins: {
    legend: {
        labels: {
            color: '#495057'
        }
    }
},
scales: {
    x: {
        ticks: {
            color: '#495057'
        },
        grid: {
            color: '#ebedef'
        }
    },
    y: {
        ticks: {
            color: '#495057'
        },
        grid: {
            color: '#ebedef'
        }
    }
}
};

this.horizontalOptions = {
indexAxis: 'y',
plugins: {
    legend: {
        labels: {
            color: '#495057'
        }
    }
},
scales: {
    x: {
        ticks: {
            color: '#495057'
        },
        grid: {
            color: '#ebedef'
        }
    },
    y: {
        ticks: {
            color: '#495057'
        },
        grid: {
            color: '#ebedef'
        }
    }
}
};




    }
}

interface AppConfig {
    inputStyle?: string;
    dark?: boolean;
    theme?: string;
    ripple?: boolean;
}

