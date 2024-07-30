interface IIterator<T> {
  reset(): void;
  hasNext(): boolean;
  next(): T;
}

export default IIterator;
