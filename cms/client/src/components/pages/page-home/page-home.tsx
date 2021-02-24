import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-home",
  styleUrl: "page-home.css",
})
export class PageHome {
  render() {
    return (
      <Host>
        <div>Home:</div>
        <stencil-route-link url="/collections">Collections</stencil-route-link>
        <slot></slot>
      </Host>
    );
  }
}
