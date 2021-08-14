import { Component, h, State } from "@stencil/core";
import { ITypedEntity } from "../../../global/types";

@Component({
  tag: "page-collections",
})
export class PageCollections {
  @State() collections: ITypedEntity[] = [];

  async componentWillLoad() {
    //const collectionsRequest = await fetch(`//localhost:8082/meta/collections`);
    //this.collections = await collectionsRequest.json();
  }

  render() {
    return (
      <section>
        <h1>Page Collections</h1>
        <stencil-route-link url="/collections/edit">
          Add New Collection
        </stencil-route-link>

        <div>
          {this.collections.map((c) => (
            <div>
              <stencil-route-link url={`/collections/${c.slug}`}>
                {c.slugName}
              </stencil-route-link>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
