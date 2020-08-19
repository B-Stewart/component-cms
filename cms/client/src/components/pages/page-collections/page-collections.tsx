import { Component, h } from "@stencil/core";

@Component({
  tag: "page-collections",
})
export class PageCollections {
  render() {
    return (
      <stencil-route-link url="/collections/edit">
        Add New Collection
      </stencil-route-link>
    );
  }
}
