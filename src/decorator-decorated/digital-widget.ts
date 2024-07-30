import AbstractWidgetDecorator from "./abstract-widget-decorator";
import IWidget from "./widget-interface";

class DigitalWidget extends AbstractWidgetDecorator {

  constructor(decorated: IWidget) {
    super(decorated);
  }
  
  override getDescription(): string {
    const descripcion = this._decorated.getDescription();
    return "Digital " + descripcion;
  }
}
export default DigitalWidget;