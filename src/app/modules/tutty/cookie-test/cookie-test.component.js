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
const cookies_handler_service_1 = require("../cookies-handler/cookies-handler.service");
let CookieTestComponent = class CookieTestComponent {
    constructor(_cookiesHandler) {
        this._cookiesHandler = _cookiesHandler;
        this.wasShown = false;
    }
    show() {
        console.log("wyswietlono " + this.id);
        this._cookiesHandler.setShown(this.id);
    }
    checkIfShown() {
        console.log("sprawdzam czy " + this.id);
        this.wasShown = this._cookiesHandler.wasShown(this.id);
    }
    refresh() {
        this.wasShown = false;
        console.log("reset");
        this._cookiesHandler.resetAll();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CookieTestComponent.prototype, "id", void 0);
CookieTestComponent = __decorate([
    core_1.Component({
        selector: 'cookie-test',
        templateUrl: './cookie-test.component.html',
        styleUrls: ['./cookie-test.component.css']
    }),
    __metadata("design:paramtypes", [cookies_handler_service_1.CookiesHandlerService])
], CookieTestComponent);
exports.CookieTestComponent = CookieTestComponent;
//# sourceMappingURL=cookie-test.component.js.map