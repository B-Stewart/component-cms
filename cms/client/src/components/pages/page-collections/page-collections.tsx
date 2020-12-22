import { Component, h, State } from "@stencil/core";
import { ITypedEntity } from "../../../global/types";

@Component({
  tag: "page-collections",
})
export class PageCollections {
  @State() collections: ITypedEntity[] = [];

  async componentWillLoad() {
    const collectionsRequest = await fetch(`//localhost:8082/collection`);

    this.collections = await collectionsRequest.json();
  }

  render() {
    return (
      <section>
        <stencil-route-link url="/collections/edit">
          Add New Collection
        </stencil-route-link>

        <div></div>
      </section>
    );
  }
}
