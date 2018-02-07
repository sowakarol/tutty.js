
export default abstract class PopupStrategyInterface {

    protected left;
    protected right;
    protected top;
    protected bottom;
    protected innerWindowWidth;
    protected height;

    protected shit(boundingClientRect, popupComponent){
        this.left = boundingClientRect.left;
        this.right = boundingClientRect.right;
        this.top = boundingClientRect.top;
        this.bottom = boundingClientRect.bottom;
        this.innerWindowWidth = window.innerWidth;
        this.height = document.getElementById('popup').getBoundingClientRect().height;
    }

    public abstract setPosition(boundingClientRect,popupComponent);
}
