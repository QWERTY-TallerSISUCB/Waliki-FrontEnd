import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription,Subject} from 'rxjs';
import { Injectable } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

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

data: any;


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

  constructor(private configService: AppConfigService, private dashboardService: DashboardService,) { }

  ngOnInit(): void {

                 this.basicData = {
                    labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5', 'Categoria 6'],
                    datasets: [
                        {
                            label: 'Numero de prendas',
                            backgroundColor: '#42A5F5',
                            data: [this.dashboardService.getDashboardCategory]
                        },
                        {
                            label: 'My Second dataset',
                            backgroundColor: '#FFA726',
                            data: [28, 48, 40, 19, 86, 27, 90]
                        }
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
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        type: 'bar',
                        label: 'Dataset 1',
                        backgroundColor: '#42A5F5',
                        data: [
                            50,
                            25,
                            12,
                            48,
                            90,
                            76,
                            42
                        ]
                    }, {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: '#66BB6A',
                        data: [
                            21,
                            84,
                            24,
                            75,
                            37,
                            65,
                            34
                        ]
                    }, {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: '#FFA726',
                        data: [
                            41,
                            52,
                            24,
                            74,
                            23,
                            21,
                            32
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
