import { Component, Host, h, Element, Prop } from "@stencil/core";

declare const tinymce: any;

@Component({
  tag: "app-field-html",
  styleUrl: "app-field-html.css",
})
export class AppFieldHtml {
  @Element() el: HTMLElement;
  @Prop() fieldId: string;

  componentDidLoad() {
    tinymce.init({
      selector: `#${this.fieldId}`,
    });
  }

  render() {
    return (
      <Host>
        <textarea id={this.fieldId} name={this.fieldId}></textarea>
      </Host>
    );
  }
}
