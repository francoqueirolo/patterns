import { ApiSearchProxy } from "./api.search.proxy";

class ClientProxy {
  getJoke(category: string = "animal"): void {
    const proxy = new ApiSearchProxy();
    proxy.addEventListener("onSearch", this.onSearch.bind(this));
    proxy.search(category);
  }

  onSearch(event: any): void {
    const data = event.detail;
    console.log(data);
    document.getElementById(
      "launcher"
    )!.innerHTML += `<div><div><img src="${data.icon_url}" alt="${data.value}" /><div><p>${data.value}</p></div>`;
  }
}
export { ClientProxy };
