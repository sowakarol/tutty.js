import { Http } from '@angular/http';
export declare class Config {
    private http;
    private _config;
    constructor(http: Http);
    load(): any;
    getConfig(): Object;
    get(key: any): any;
}
