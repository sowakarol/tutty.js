import { AfterViewChecked, ChangeDetectorRef, ComponentFactoryResolver } from '@angular/core';
import { PopupService } from '../popup/popup.service';
import { HintProviderService } from '../hint-provider/hint-provider.service';
export declare class OverlayComponent implements AfterViewChecked {
    popupService: PopupService;
    private resolver;
    private cdRef;
    private hintsService;
    collection: string;
    popupContainer: any;
    constructor(popupService: PopupService, resolver: ComponentFactoryResolver, cdRef: ChangeDetectorRef, hintsService: HintProviderService);
    show(collection: string): void;
    private preparePopupService(hints);
    private display();
    ngAfterViewChecked(): void;
    currentHintIndex: number;
    numberOfHints: number;
    overlayDisplay: string;
    exitModalDisplay: string;
    nextButtonText: string;
    showNextHint: () => void;
    showPrevHint: () => void;
    createComponent(): any;
    showExitModal: () => string;
    closeExitModal: () => string;
    close: () => string;
    private getElements(hints);
}
