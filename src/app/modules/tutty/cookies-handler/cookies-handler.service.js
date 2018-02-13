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
const ngx_cookie_1 = require("ngx-cookie");
let CookiesHandlerService = class CookiesHandlerService {
    constructor(_cookieService) {
        this._cookieService = _cookieService;
        this.COOKIE_KEY = 'shown';
        this.SEPARATOR = ',';
        console.log("konstruktor cookies handlera");
    }
    getShown() {
        var rawString = this._cookieService.get(this.COOKIE_KEY);
        console.log(rawString);
        return rawString ? rawString.split(this.SEPARATOR) : [];
    }
    wasShown(id) {
        return (this.getShown().indexOf(id) != -1);
    }
    setShown(id) {
        var shownElements = this.getShown(), newVal;
        id && shownElements.push(id);
        newVal = shownElements.join(this.SEPARATOR);
        console.log(newVal);
        this._cookieService.put(this.COOKIE_KEY, newVal, {
            expires: new Date(2027, 12, 31),
            path: '/'
        });
    }
    resetAll() {
        this._cookieService.removeAll();
    }
};
CookiesHandlerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ngx_cookie_1.CookieService])
], CookiesHandlerService);
exports.CookiesHandlerService = CookiesHandlerService;
//# sourceMappingURL=cookies-handler.service.js.map
