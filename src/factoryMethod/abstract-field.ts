import { IField } from "./ifield";

abstract class AbstractGame {
  initialize(): void {
    const field = this.createField();
    field.drawField();

    this.createTeam();
    this.startGame();
  }
  // Factory Method
  createField(): IField {
    throw new Error("Abstract method");
  }
  createTeam(): void {
    throw new Error("Abstract method");
  }

  startGame(): void {
    throw new Error("Abstract method");
  }
}

export { AbstractGame };
