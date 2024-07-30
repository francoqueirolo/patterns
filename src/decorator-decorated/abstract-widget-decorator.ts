import IWidget from "./widget-interface";

abstract class AbstractWidgetDecorator implements IWidget {
  protected _decorated: IWidget;

  constructor(decorated: IWidget) {
    this._decorated = decorated;
  }

  getDescription(): string {
    return this._decorated.getDescription();
  }

  run(): void {
    this._decorated.run();
  }
}

export default AbstractWidgetDecorator;
