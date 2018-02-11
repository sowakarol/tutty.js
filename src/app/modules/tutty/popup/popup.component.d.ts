export declare class PopupComponent {
    text: String;
    idToPopup: String;
    popupDisplay: string;
    divRef: any;
    direction: any;
    onResize(): void;
    popUp(text: String, id: String): void;
    set: (divRef: any, direction: any) => void;
}
