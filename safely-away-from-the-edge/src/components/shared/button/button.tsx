import { Component, h } from "@stencil/core";

@Component({
  tag: "app-button",
})
export class AppButton {
  render() {
    return (
      <button class="btn">
        <slot />
      </button>
    );
  }
}
