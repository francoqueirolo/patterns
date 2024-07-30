import "./style.css";
import typescriptLogo from "./typescript.svg";
import { ClockTest } from "./mvc/controller/clock-test";
import { FootballGame } from "./templateMethod/football-game";
import { FootballGame as FootballGameFactory } from "./factoryMethod/football-game";
import { ClientProxy } from "./proxy/client.proxy";
import { Slider } from "./iterator/slider";

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
      <li>
        <a href="#" id="link4">
          Ver ejemplo proxy
        </a>
      </li>
      <li>
        <a href="#" id="link5">
          Ver ejemplo Iterator
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

const proxy = new ClientProxy();
const link4 = document.getElementById("link4");
link4!.addEventListener("click", () => {
  proxy.getJoke("food");
});

const slider = new Slider();
const link5 = document.getElementById("link5");
link5!.addEventListener("click", () => {
  while (slider.iterator.hasNext()) {
    console.log(slider.iterator.next());
  }
  slider.iterator.reset();
  console.log(slider.iterator.next());
});

export const patterns = {
  mvc,
  templateMethod,
  factoryMethod,
  proxy,
  slider,
};
