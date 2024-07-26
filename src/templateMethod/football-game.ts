import { AbstractGame } from "./abstract-game";

class FootballGame extends AbstractGame {
  createField(): void {
    console.log("Create field...");
  }
  createTeam(): void {
    console.log("Create team...");
  }
  startGame(): void {
    console.log("Start game...");
  }
}

export { FootballGame };