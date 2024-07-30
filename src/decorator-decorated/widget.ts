import IWidget from "./widget-interface";

//Clase decorado concreta
export class Widget implements IWidget {
  getDescription(): string {
    return "Widget";
  }
  run(): void {
    console.log("runing...");
  }
}

export default Widget;
