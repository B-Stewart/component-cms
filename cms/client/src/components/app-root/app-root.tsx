import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>CMS Client</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route
                url="/collections/edit"
                component="page-collection-edit"
              />
              <stencil-route url="/collections" component="page-collections" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
