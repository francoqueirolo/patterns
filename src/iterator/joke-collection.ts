import JokeIterator from "./joke-iterator";
import ICollection from "./interfaces/collection-interface";
import IIterator from "./interfaces/iterator-interface";
import { Joke } from "./interfaces/joke-type";

class JokeCollection implements ICollection<Joke> {
  jokes!: Joke[];
  constructor() {
    this.jokes = [];
  }

  addElement(joke: Joke): void {
    this.jokes.push(joke);
  }

  iterator(): IIterator<Joke> {
    return new JokeIterator(this.jokes);
  }
}

export { JokeCollection };
