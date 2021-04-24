import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>
            <stencil-route-link url="/">CMS Client</stencil-route-link>
          </h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route
                url="/collections/edit/:id"
                component="page-collection-edit"
              />
              <stencil-route
                url="/collections/:id"
                component="page-collection"
              />
              <stencil-route url="/collections" component="page-collections" />
              <stencil-route
                url="/entities/edit"
                component="page-entity-edit"
              />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
