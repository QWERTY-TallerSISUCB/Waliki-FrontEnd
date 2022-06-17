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

      //data
      piedata: any;
      multidata: any;
      basicData: any;
      stackedData: any;
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
      this.optionscharge();
    });
    }
    //prendas vendidas por mes
    handleDashboard3(){
      this.dashboardService.getDashboardProductSells().subscribe(
        data => {
          this.dataVentasTotalespormes = data;
          console.log("data of clothes sell by month in quantity")
          console.log(this.dataVentasTotalespormes);

        }
      ),
      this.dashboardService.getDashboardQuantitySellsbyMonthCategory().subscribe(
        data => {
          this.dashboardmulticlass = data;
          console.log("data of clothes sell by month and category")
          const data1 = this.dashboardmulticlass.category;
          const data2 = this.dashboardmulticlass.category;
          console.log(this.dashboardmulticlass);
          // console.log(`name: ${this.dashboardmulticlass}`);
          this.multidata = {
            labels: data1,
            datasets: [{
                type: 'line',
                label: 'Ventas totales',
                borderColor: '#42A5F5',
                borderWidth: 3,
                fill: false,
                data: this.dataVentasTotalespormes.quantity
            },{
              type: 'bar',
              label: 'Categoria 1',
              backgroundColor: '#00b3ff',
              data: [
                23,
                60,
                24,
                50,
              ],
              borderColor: 'white',
              borderWidth: 2
          },{
            type: 'bar',
            label: 'Categoria 2',
            backgroundColor: '#ee00ff',
            data: [
                21,
                54,
                24,
                44,
            ],
            borderColor: 'white',
            borderWidth: 2
        },{
          type: 'bar',
          label: 'Categoria 3',
          backgroundColor: '#a2ff00',
          data: [
              24,
              47,
              50,
              10,
          ],
          borderColor: 'white',
          borderWidth: 2
      },{
              type: 'bar',
              label: 'Categoria 4',
              backgroundColor: '#66BB6A',
              data: [
                  25,
                  66,
                  35,
                  39,
              ],
              borderColor: 'white',
              borderWidth: 2
          }, {
                type: 'bar',
                label: 'Categoria 5',
                backgroundColor: '#ff0000',
                data: [
                    22,
                    84,
                    44,
                    26,
                ],
                borderColor: 'white',
                borderWidth: 2
            }, {
                type: 'bar',
                label: 'Categoria 6',
                backgroundColor: '#FFA726',
                data: [
                    23,
                    52,
                    46,
                    45,
                ]
            }]
        };
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
      ),
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
          let numero;let numero2;let numero3;let numero4;
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
            let values = Object.keys(this.dashboardnormalclass).map(key => this.dashboardnormalclass[key]);
            // console.log(values);
            let keys = Object.getOwnPropertyNames(this.dashboardnormalclass).sort();
            console.log(keys);

            var meses:string[];

            for (numero of values){
                let nombre = this.dashboardnormalclass[1].category;
                let pais = this.dashboardnormalclass.quantity;

                console.log(nombre); // "Sarah"
                console.log(pais); // "Nigeria"

              console.log(numero);

              let a= Object.values(numero);
              console.log(a);


              const hero = {
                name: 'Batman',
                city: 'Gotham'
              };
              let b=Object.values(hero); // => ['Batman', 'Gotham']

          this.stackedData = {
            labels: [pais,pais,a[1]],
            datasets: [{
                type: 'bar',
                label: 'Monto en Bs de las ventas totales por mes',
                backgroundColor: '#FFA726',
                data: [
                  a[1],a[1],a[1]
                ]
            }]
        };}
        }
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

