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
const popup_service_1 = require("../popup/popup.service");
const popup_component_1 = require("../popup/popup.component");
const hint_provider_service_1 = require("../hint-provider/hint-provider.service");
const json_parser_service_1 = require("../parser/json-parser.service");
let OverlayComponent = class OverlayComponent {
    constructor(popupService, resolver, cdRef, hintsService) {
        this.popupService = popupService;
        this.resolver = resolver;
        this.cdRef = cdRef;
        this.hintsService = hintsService;
        this.overlayDisplay = 'none';
        this.exitModalDisplay = 'none';
        this.nextButtonText = 'Next';
        this.showNextHint = () => {
            if (this.currentHintIndex === this.numberOfHints - 1) {
                this.close();
                return;
            }
            this.currentHintIndex++;
            if (this.currentHintIndex === this.numberOfHints - 1) {
                this.nextButtonText = 'Close';
            }
            this.popupService.popNext();
        };
        this.showPrevHint = () => {
            this.currentHintIndex--;
            if (this.currentHintIndex === this.numberOfHints - 2) {
                this.nextButtonText = 'Next';
            }
            this.popupService.popPrev();
        };
        this.showExitModal = () => this.exitModalDisplay = 'block';
        this.closeExitModal = () => this.exitModalDisplay = 'none';
        this.close = () => this.overlayDisplay = 'none';
    }
    show(collection) {
        let hints = this.hintsService.getHints(collection);
        !hints && console.warn('tutty: ' + collection + ' not found!');
        this.preparePopupService(hints);
        this.currentHintIndex = 0;
        this.numberOfHints = hints.length;
        this.popupService.pop();
        this.display();
    }
    preparePopupService(hints) {
        this.popupService.setHints(hints);
        this.popupService.elem = this.getElements(hints);
        this.popupService.popupComponent = this.createComponent();
    }
    display() {
        this.overlayDisplay = 'block';
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    createComponent() {
        this.popupContainer.clear();
        const factory = this.resolver.resolveComponentFactory(popup_component_1.PopupComponent);
        return this.popupContainer.createComponent(factory).instance;
    }
    getElements(hints) {
        return hints.map((hint) => {
            return document.getElementById(hint.getId());
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OverlayComponent.prototype, "collection", void 0);
__decorate([
    core_1.ViewChild('popupContainer', {
        read: core_1.ViewContainerRef
    }),
    __metadata("design:type", Object)
], OverlayComponent.prototype, "popupContainer", void 0);
OverlayComponent = __decorate([
    core_1.Component({
        selector: 'app-overlay',
        templateUrl: './overlay.component.html',
        styleUrls: ['./overlay.component.css'],
        entryComponents: [popup_component_1.PopupComponent],
        providers: [json_parser_service_1.JsonParserService,
            hint_provider_service_1.HintProviderService,
            popup_service_1.PopupService]
    }),
    __metadata("design:paramtypes", [popup_service_1.PopupService,
        core_1.ComponentFactoryResolver,
        core_1.ChangeDetectorRef,
        hint_provider_service_1.HintProviderService])
], OverlayComponent);
exports.OverlayComponent = OverlayComponent;
//# sourceMappingURL=overlay.component.js.map