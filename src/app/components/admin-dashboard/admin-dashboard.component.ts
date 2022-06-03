import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription,Subject} from 'rxjs';
import { Dashboard } from 'src/app/common/dashboard';
import { Injectable } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router';

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

export class AdminDashboardComponent implements OnInit {
      dashboardclass: Dashboard = new Dashboard();
      data: any;
      multidata: any;
      basicData: any;
      basicOptions: any;
      multiAxisData: any;
      chartOptions: any;
      multiAxisOptions: any;
      stackedData: any;
      stackedOptions: any;
      horizontalOptions: any;
      subscription: Subscription;
      config: AppConfig;
      total1: any;
      contador: any;
      A:[];
      B:[];
      C:[];
      D:[];
      E:[];
      F:[];

  constructor(private configService: AppConfigService,private route: ActivatedRoute, private dashboardService: DashboardService,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.chargeData();
    });
    }


    handleFirstDashboard() {
      this.dashboardService.getDashboardCategory().subscribe(
        data => {
          this.dashboardclass = data;
          console.log("data de los dashboard")
          console.log(this.dashboardclass.data);
        }
      )
    }

    chargeData() {
      this.handleFirstDashboard();

      /*var total1:any;
      var total2:any;
      var total3:any;
      var total4:any;
      var total5:any;
      var total6:any;
      var total7:any;
      A: [1,2,3,4,5,6];
      B: [1,2,3,4,5,6];
      C: [1,2,3,4,5,6];
      D: [1,2,3,4,5,6];
      E: [1,2,3,4,5,6];
      F: [1,2,3,4,5,6];

      this.contador=this.A.length;
      /*while(this.A.length>0){
        this.contador=this.contador-1;
      }*/
      //this.total1 = this.A[1]+this.B[1]+this.C[1]+this.D[1]+this.E[1];

      this.multidata = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [{
            type: 'line',
            label: 'Ventas totales',
            borderColor: '#42A5F5',
            borderWidth: 2,
            fill: false,
            data: [
              139,
              311,
              280,
              270
            ]
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

      this.basicData = {
        labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5', 'Categoria 6','Categoria 7','Categoria 8','Categoria 9','Categoria 10'],
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
                data: [34,21,23,24,18,22,31,24,23,22]
            },

        ]
    };

    this.multiAxisData = {
        labels: ['hola', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: [
                '#EC407A',
                '#AB47BC',
                '#42A5F5',
                '#7E57C2',
                '#66BB6A',
                '#FFCA28',
                '#26A69A'
            ],
            yAxisID: 'y',
            data: [65, 59, 80, 81, 56, 55, 10]
        }, {
            label: 'Dataset 2',
            backgroundColor: '#78909C',
            yAxisID: 'y1',
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    };

    this.multiAxisOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            },
            tooltips: {
                mode: 'index',
                intersect: true
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
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    min: 0,
                    max: 100,
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                    color: '#ebedef'
                },
                ticks: {
                    min: 0,
                    max: 100,
                    color: '#495057'
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

    this.stackedData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [{
            type: 'bar',
            label: 'Monto en Bs de las ventas totales por mes',
            backgroundColor: '#FFA726',
            data: [
              329434.11,
              759720.00,
              727670.00,
              712269.00,
            ]
        }]
    };

    this.stackedOptions = {
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };

//pie chart
this.data = {
labels: ['Sin Stock','Con Stock'],
datasets: [
    {
        data: [31, 900],
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
//fin pie chart
    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe(config => {
        this.config = config;
        this.updateChartOptions();
    });
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

this.multiAxisOptions = {
plugins: {
    legend: {
        labels: {
            color: '#ebedef'
        }
    },
    tooltips: {
        mode: 'index',
        intersect: true
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
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
            min: 0,
            max: 100,
            color: '#ebedef'
        },
        grid: {
            color: 'rgba(255,255,255,0.2)'
        }
    },
    y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
            drawOnChartArea: false,
            color: 'rgba(255,255,255,0.2)'
        },
        ticks: {
            min: 0,
            max: 100,
            color: '#ebedef'
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

this.multiAxisOptions = {
plugins: {
    legend: {
        labels: {
            color: '#495057'
        }
    },
    tooltips: {
        mode: 'index',
        intersect: true
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
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
            min: 0,
            max: 100,
            color: '#495057'
        },
        grid: {
            color: '#ebedef'
        }
    },
    y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
            drawOnChartArea: false,
            color: '#ebedef'
        },
        ticks: {
            min: 0,
            max: 100,
            color: '#495057'
        }
    }
}
};

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
};

    }
}


interface AppConfig {
    inputStyle?: string;
    dark?: boolean;
    theme?: string;
    ripple?: boolean;
}
