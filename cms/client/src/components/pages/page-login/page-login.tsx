import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-login",
})
export class PageLogin {
  render() {
    return (
      <Host>
        <h1>Login:</h1>
        <input placeholder="username" />
        <input placeholder="password" />
        <stencil-route-link url="/sign-up">Sign Up Here</stencil-route-link>
      </Host>
    );
  }
}
