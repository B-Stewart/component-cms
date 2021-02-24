import { Component, h, State } from "@stencil/core";
import { ITypedEntity } from "../../../global/types";

@Component({
  tag: "page-collections",
})
export class PageCollections {
  @State() collections: ITypedEntity[] = [];

  async componentWillLoad() {
    const collectionsRequest = await fetch(`//localhost:8082/collections`);

    this.collections = await collectionsRequest.json();
  }

  render() {
    return (
      <section>
        <stencil-route-link url="/collections/edit">
          Add New Collection
        </stencil-route-link>

        <div>
          {this.collections.map((c) => (
            <div>
              <stencil-route-link url={`/collections/edit/${c.slug}`}>
                {c.slugName}
              </stencil-route-link>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
