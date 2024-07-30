import IIterator from "./interfaces/iterator-interface";
import { Joke } from "./interfaces/joke-type";

class JokeIterator implements IIterator<Joke> {
  private _array: Joke[];
  private _position: number = 0;
  constructor(array: Joke[]) {
    this._array = array;
  }
  reset(): void {
    this._position = 0;
  }
  hasNext(): boolean {
    return this._position < this._array.length;
  }
  next(): Joke {
    return this._array[this._position++];
  }
}
export default JokeIterator;
