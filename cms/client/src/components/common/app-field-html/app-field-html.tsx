import { Component, Host, h, Element, Prop } from "@stencil/core";

@Component({
  tag: "app-field-html",
  styleUrl: "app-field-html.css",
})
export class AppFieldHtml {
  @Element() el: HTMLElement;
  @Prop() fieldId: string;

  componentDidLoad() {}

  render() {
    return (
      <Host>
        <tinymce-editor
          api-key="no-api-key"
          height="500"
          menubar="false"
          plugins="advlist autolink lists link image charmap print preview anchor
      searchreplace visualblocks code fullscreen
      insertdatetime media table paste code help wordcount"
          toolbar="undo redo | formatselect | bold italic backcolor |
      alignleft aligncenter alignright alignjustify |
      bullist numlist outdent indent | removeformat | help"
          content_style="body
      {
        font-family:Helvetica,Arial,sans-serif;
        font-size:14px
      }"
        >
          {/* <!-- Adding some initial editor content --> */}
          &lt;p&gt;Welcome to the TinyMCE Web Component example!&lt;/p&gt;
        </tinymce-editor>

        {/* <!--
      Sourcing the `tinymce-webcomponent` from jsDelivr,
      which sources TinyMCE from the Tiny Cloud.
    --> */}
        <script src="https://cdn.jsdelivr.net/npm/@tinymce/tinymce-webcomponent@1/dist/tinymce-webcomponent.min.js"></script>
      </Host>
    );
  }
}
