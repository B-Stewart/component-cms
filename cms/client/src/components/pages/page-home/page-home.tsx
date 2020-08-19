import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-home",
  styleUrl: "page-home.css",
})
export class PageHome {
  api: string = "//localhost:8082/ping";
  render() {
    return (
      <Host>
        <div>Home:</div>
        <stencil-route-link url="/collections">Collections</stencil-route-link>
        <app-form action={this.api}>
          <input id="tset2" name="inputname" />
          <app-field-html fieldId={"tinymce"} />
          <button>Submit</button>
        </app-form>
        <slot></slot>
      </Host>
    );
  }
}
