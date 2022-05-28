import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Appconfig } from '../common/appconfig';

@Injectable()
export class AppConfigService {

    config: Appconfig = {
        theme: 'lara-light-blue',
        dark: false,
        inputStyle: 'outlined',
        ripple: true
    };

    private configUpdate = new Subject<Appconfig>();

    configUpdate$ = this.configUpdate.asObservable();

    updateConfig(config: Appconfig) {
        this.config = config;
        this.configUpdate.next(config);
    }

    getConfig() {
        return this.config;
    }
}
