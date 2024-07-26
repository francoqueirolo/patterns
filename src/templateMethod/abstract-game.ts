abstract class AbstractGame {
  initialize(): void {
    this.createField();
    this.createTeam();
    this.startGame();
  }
  createField(): void {
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
