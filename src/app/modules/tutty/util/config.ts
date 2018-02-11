import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';



declare var Promise: any;


@Injectable()
export class Config {
    private _config: Object = null;


    
    constructor(private http: Http) {}

    load() {
        return new Promise((resolve, reject) => {
          this.http.get('../assets/configuration.json')
            .subscribe((ids_data) => {
                this._config = JSON.parse(ids_data['_body']);
                console.log(this._config);
                resolve(true);
            } ,  (error) => {
                reject(false);
                return Observable.throw(error.json().error || 'Server error'); 
            })
        });
    }



    getConfig(){
        return this._config;
    }

    get(key: any) {
      return this._config[key];
    }

};
