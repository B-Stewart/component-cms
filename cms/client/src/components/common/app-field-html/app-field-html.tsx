import { Component, Host, h, Element, Prop, State } from "@stencil/core";

// import Quill from "quill/core";

// import Toolbar from "quill/modules/toolbar";
// import Snow from "quill/themes/snow";

// import Bold from "quill/formats/bold";
// import Italic from "quill/formats/italic";
// import Header from "quill/formats/header";

// Quill.register({
//   "modules/toolbar": Toolbar,
//   "themes/snow": Snow,
//   "formats/bold": Bold,
//   "formats/italic": Italic,
//   "formats/header": Header,
// });

import Quill from "quill";

declare global {
  interface Window {
    quill: any;
  }
}

@Component({
  tag: "app-field-html",
  styleUrls: ["app-field-html.css"],
})
export class AppFieldHtml {
  @Element() el: HTMLElement;
  @Prop() fieldId: string;
  @State() quill: any;

  componentDidLoad() {
    var toolbarOptions = [["bold", "italic"]];
    // @ts-ignore
    this.quill = new Quill("#editor", {
      // modules: {
      //   toolbar: toolbarOptions,
      // },
      theme: "snow",
    });
  }

  render() {
    return (
      <Host>
        <div id="editor" style={{ height: "200px" }}></div>
        <button onClick={() => console.log(this.quill.root.innerHTML)}>
          Log as Html
        </button>
      </Host>
    );
  }
}
