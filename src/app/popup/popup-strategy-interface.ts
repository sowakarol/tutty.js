export default abstract class PopupStrategyInterface {

  protected left;
  protected right;
  protected top;
  protected bottom;
  protected innerWindowWidth;
  protected height;

  protected positionPopup(boundingClientRect) {
    this.left = boundingClientRect.left;
    this.right = boundingClientRect.right;
    this.top = boundingClientRect.top;
    this.bottom = boundingClientRect.bottom;
    this.innerWindowWidth = window.innerWidth;
    this.height = document.getElementById('popup').getBoundingClientRect().height;
  }

  protected positionArrow(arrow: HTMLElement, type :string){
    arrow.className = "arrow " + type;
  }

  public abstract setPosition(boundingClientRect, popupComponent);
}
