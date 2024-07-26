import { IField } from "./ifield";

class FootballField implements IField {
  drawField(): void {
    console.log("Draw FootballField... ⚽️");
  }
}

class VolleyballField implements IField {
  drawField(): void {
    console.log("Draw VolleyballField... 🏐");
  }
}
export { FootballField, VolleyballField };
