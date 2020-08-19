import { Component, h, Prop, State } from "@stencil/core";
import { RouterHistory } from "@stencil/router";
import { IField } from "../../../global/types";
import { generateUUID } from "../../../global/helpers";

@Component({
  tag: "page-collection-edit",
})
export class PageCollectionEdit {
  @Prop() history: RouterHistory;
  @State() fields: Partial<IField>[] = [];

  addField() {
    console.log("field");
    this.fields = [...this.fields, { id: generateUUID() }];
  }

  handleInput(id: string, key: string, event: any) {
    const value = event.target.value;

    const index = this.fields.findIndex((f) => f.id === id);

    const fields = this.fields;
    fields[index][key] = value;

    this.fields = fields;
  }

  handleSubmit = async () => {
    const response = await fetch(`//localhost:8082/collection`, {
      method: "POST",
      body: JSON.stringify({
        id: this.history.location.query.id,
        fields: this.fields,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const res = await response.json();
    console.log(res);
  };

  render() {
    const collectionId = this.history.location.query.id;

    // const isNew = !!collectionId;

    return (
      <section>
        <div>collectionid: {collectionId}</div>
        <button onClick={() => this.addField()}>Add Field</button>
        <h1>Fields:</h1>

        {this.fields.map((field) => (
          <div>
            <input
              name="externalId"
              value={field.externalId}
              onInput={(e) => this.handleInput(field.id, "externalId", e)}
            />
            <select
              name="type"
              onChange={(e) => this.handleInput(field.id, "type", e)}
            >
              <option value="text" selected={field.type === "text"}>
                Text
              </option>
              <option value="html" selected={field.type === "html"}>
                HTML
              </option>
            </select>
          </div>
        ))}
        <button onClick={this.handleSubmit}>Save</button>
      </section>
    );
  }
}
