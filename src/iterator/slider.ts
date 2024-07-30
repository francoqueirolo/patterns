import ICollection from "./interfaces/collection-interface";
import IIterator from "./interfaces/iterator-interface";
import { Joke } from "./interfaces/joke-type";
import { JokeCollection } from "./joke-collection";

class Slider {
  collection: ICollection<Joke> = new JokeCollection();
  iterator: IIterator<Joke> = this.collection.iterator();

  constructor() {
    this.collection.addElement({ id: "1", url: "/jokes/1", value: "Joke1" });
    this.collection.addElement({ id: "2", url: "/jokes/2", value: "Joke2" });
    this.collection.addElement({ id: "3", url: "/jokes/3", value: "Joke3" });
  }
}

export { Slider };
