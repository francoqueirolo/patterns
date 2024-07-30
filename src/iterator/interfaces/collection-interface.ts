import IIterator from "./iterator-interface";

interface ICollection<T> {
  addElement(element: T): void;
  iterator(): IIterator<T>;
}

export default ICollection;
