import { createUser } from "@app/services/auth-service";
import { Component, Host, h, State } from "@stencil/core";

@Component({
  tag: "page-sign-up",
})
export class PageSignUp {
  @State() form = {};

  handleChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.form[element.name] = element.value;
  }

  async signUp(event: Event) {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    await createUser(this.form["email"], this.form["password"]);
  }

  render() {
    return (
      <Host>
        <h1>Sign Up:</h1>
        <form onSubmit={(e) => this.signUp(e)}>
          <input
            placeholder="email"
            name="email"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            placeholder="password"
            name="password"
            onChange={(e) => this.handleChange(e)}
          />
          <button>Sign Up</button>
        </form>
      </Host>
    );
  }
}
