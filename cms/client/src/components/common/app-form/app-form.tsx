import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "app-form",
  styleUrl: "app-form.css",
})
export class AppForm {
  @Prop() action: string;

  form!: HTMLFormElement;

  handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const jsonData = JSON.stringify(
        Object.fromEntries(new FormData(this.form))
      );

      const response = await fetch(this.action, {
        method: "POST",
        body: jsonData,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const res = await response.json();
      console.log(res);
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <Host>
        <form
          ref={(el) => (this.form = el as HTMLFormElement)}
          onSubmit={this.handleSubmit}
        >
          <slot></slot>
        </form>
      </Host>
    );
  }
}
