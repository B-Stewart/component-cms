import { Component, h, Prop, State } from "@stencil/core";
import { MatchResults } from "@stencil/router";
import { ITypedEntity } from "../../../global/types";

@Component({
  tag: "page-collection",
})
export class PageCollection {
  @Prop() match: MatchResults;
  @State() collection: ITypedEntity;

  async componentWillLoad() {
    // const collectionsRequest = await fetch(
    //   `//localhost:8082/collections/${this.match.params.id}`
    // );
    // this.collection = await collectionsRequest.json();
  }

  render() {
    return (
      <section>
        <stencil-route-link url={`/collections/edit/${this.match.params.id}`}>
          <button>Edit Meta Data</button>
        </stencil-route-link>

        <stencil-route-link url={`/collections/edit`}>
          <button>Add New Collection</button>
        </stencil-route-link>

        <div>
          {/* TODO: List items */}
          {/* {this.collections.map((c) => (
            <div>
              <stencil-route-link url={`/collections/edit/${c.slug}`}>
                {c.slugName}
              </stencil-route-link>
            </div>
          ))} */}
        </div>
      </section>
    );
  }
}
