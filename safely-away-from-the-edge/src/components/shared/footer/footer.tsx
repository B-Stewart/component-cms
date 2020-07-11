import { Component, h, Prop } from "@stencil/core";
import { IRegionFooter } from "./type";

@Component({
  tag: "app-footer",
})
export class AppFooter implements IRegionFooter {
  @Prop() attribution: string;

  render() {
    return (
      <footer class="bg-primary-600 py-4">
        <div class="container" innerHTML={this.attribution}></div>
      </footer>
    );
  }
}
