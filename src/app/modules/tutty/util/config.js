"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
let Config = class Config {
    constructor(http) {
        this.http = http;
        this._config = null;
    }
    load() {
        return new Promise((resolve, reject) => {
            this.http.get('../assets/configuration.json')
                .subscribe((ids_data) => {
                this._config = JSON.parse(ids_data['_body']);
                console.log(this._config);
                resolve(true);
            }, (error) => {
                reject(false);
                return Observable_1.Observable.throw(error.json().error || 'Server error');
            });
        });
    }
    getConfig() {
        return this._config;
    }
    get(key) {
        return this._config[key];
    }
};
Config = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Config);
exports.Config = Config;
;
//# sourceMappingURL=config.js.map