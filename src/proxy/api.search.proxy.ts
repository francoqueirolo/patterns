class ApiSearchProxy extends EventTarget {
  static readonly API = "https://api.chucknorris.io/jokes/random";

  search(category: string): void {
    fetch(`${ApiSearchProxy.API}?category=${category}`)
      .then((response) => response.json())
      .then((data) =>
        this.dispatchEvent(new CustomEvent("onSearch", { detail: data }))
      );
  }
}

export { ApiSearchProxy };
