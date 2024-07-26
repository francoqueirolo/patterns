import { AbstractGame } from "./abstract-field";
import { FootballField } from "./football-field";
import { IField } from "./ifield";

class FootballGame extends AbstractGame {
  createField(): IField {
    return new FootballField();
  }

  createTeam(): void {
    console.log("Create team...");
  }

  startGame(): void {
    console.log("Start game...");
  }
}

export { FootballGame };
