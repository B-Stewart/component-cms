import { Component, h, Prop, State } from "@stencil/core";
import { RouterHistory } from "@stencil/router";
import { IEntity, IField } from "../../../global/types";
import { generateUUID } from "../../../global/helpers";

@Component({
  tag: "page-collection-edit",
})
export class PageCollectionEdit {
  @Prop() history: RouterHistory;
  @State() fields: Partial<IField>[] = [];
  @State() entity: Partial<IEntity> = {};

  addField() {
    this.fields = [...this.fields, { id: generateUUID(), type: "text" }];
  }

  // TODO: Type event
  handleInput(id: string, key: string, event: any) {
    const value = event.target.value;

    const index = this.fields.findIndex((f) => f.id === id);

    const fields = this.fields;
    fields[index][key] = value;

    this.fields = fields;
  }

  handleSubmit = async () => {
    // TODO: Is this best practice?
    this.entity.fields = this.fields as IField[];
    console.log("posting", this.entity);

    const response = await fetch(`//localhost:8082/collection`, {
      method: "POST",
      body: JSON.stringify(this.entity),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const res = await response.json();
    console.log(res);
  };

  componentWillLoad() {
    this.entity.id = this.history.location.query.id;
  }

  render() {
    // const isNew = !!collectionId;

    return (
      <section>
        <div>Entity id: {this.entity.id}</div>
        <div>
          <app-slug-pair
            slugName={this.entity.slugName}
            slug={this.entity.slug}
            onSlugChange={(e) => {
              this.entity = { ...this.entity, ...e.detail };
              console.log("slug changed", e.detail, this.entity);
            }}
          />
        </div>

        <h1>Fields:</h1>
        <div>
          <button onClick={() => this.addField()}>Add Field</button>
        </div>

        {this.fields.map((field, i) => (
          <div>
            {/* TODO: Add validation so this can't be 'externalId' / already existing fields */}
            <app-slug-pair
              slugName={field.slugName}
              slug={field.slug}
              onSlugChange={(e) => {
                let temp = this.fields;
                temp[i] = { ...field, ...e.detail };
                this.fields = temp;
                console.log("slug changed", e.detail, field);
              }}
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
