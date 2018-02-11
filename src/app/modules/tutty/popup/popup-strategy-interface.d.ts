export default abstract class PopupStrategyInterface {
    protected left: any;
    protected right: any;
    protected top: any;
    protected bottom: any;
    protected innerWindowWidth: any;
    protected height: any;
    protected positionPopup(boundingClientRect: any): void;
    abstract setPosition(boundingClientRect: any, popupComponent: any): any;
}
