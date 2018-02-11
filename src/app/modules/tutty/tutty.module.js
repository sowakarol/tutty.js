"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const core_2 = require("@angular/core");
const config_1 = require("./util/config");
const http_1 = require("@angular/http");
const overlay_component_1 = require("./overlay/overlay.component");
const ngx_cookie_1 = require("ngx-cookie");
const popup_component_1 = require("./popup/popup.component");
const cookie_test_component_1 = require("./cookie-test/cookie-test.component");
const cookies_handler_service_1 = require("./cookies-handler/cookies-handler.service");
let TuttyModule = class TuttyModule {
};
TuttyModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            ngx_cookie_1.CookieModule.forRoot()
        ],
        providers: [
            config_1.Config,
            cookies_handler_service_1.CookiesHandlerService,
            { provide: core_2.APP_INITIALIZER, useFactory: useFactory, deps: [config_1.Config], multi: true }
        ],
        declarations: [
            overlay_component_1.OverlayComponent,
            cookie_test_component_1.CookieTestComponent,
            popup_component_1.PopupComponent
        ],
        exports: [
            overlay_component_1.OverlayComponent
        ]
    })
], TuttyModule);
exports.TuttyModule = TuttyModule;
function useFactory(config) {
    return () => {
        try {
            return config.load();
        }
        catch (ex) {
            return null;
        }
        ;
    };
}
exports.useFactory = useFactory;
//# sourceMappingURL=tutty.module.js.map