import { Component, h } from "@stencil/core";
import { headerData, footerData, homeData, categoriesData } from "../../data";

@Component({
  tag: "app-root",
})
export class AppRoot {
  render() {
    return (
      <div>
        <app-header {...headerData}></app-header>
        {/* 
        <stencil-route-link url="/profile/stencil">
          <app-button>Profile page</app-button>
        </stencil-route-link>
         */}

        <main class="z-0 relative">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route
                url="/"
                component="page-home"
                exact={true}
                componentProps={homeData}
              />
              <stencil-route
                url="/categories/:slug"
                component="page-category"
              />
              <stencil-route
                url="/categories"
                component="page-categories"
                componentProps={categoriesData}
              />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <app-footer {...footerData}></app-footer>
      </div>
    );
  }
}
