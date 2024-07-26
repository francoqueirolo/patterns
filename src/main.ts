import "./style.css";
import typescriptLogo from "./typescript.svg";
import { ClockTest } from "./mvc/controller/clock-test";
import { FootballGame } from "./templateMethod/football-game";
import { FootballGame as FootballGameFactory } from "./factoryMethod/football-game";

let app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h3>
      Ejemplos de patrones de diseño
    </h3>
    <ul>
      <li>
        <a href="#" id="link1">
          Ver ejemplo mvc
        </a>
      </li>
      <li>
        <a href="#" id="link2">
          Ver ejemplo template method
        </a>
      </li>
      <li>
        <a href="#" id="link3">
          Ver ejemplo factory method
        </a>
      </li>
    </ul>
  </div>
`;

const mvc = new ClockTest();
const link1 = document.getElementById("link1");
link1!.addEventListener("click", () => {
  mvc.start();
});

const templateMethod = new FootballGame();
const link2 = document.getElementById("link2");
link2!.addEventListener("click", () => {
  templateMethod.initialize();
});

const factoryMethod = new FootballGameFactory();
const link3 = document.getElementById("link3");
link3!.addEventListener("click", () => {
  factoryMethod.initialize();
});

export const patterns = {
  mvc,
  templateMethod,
  factoryMethod,
};
