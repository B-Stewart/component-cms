import { Component, h, Prop, State } from "@stencil/core";
import { MatchResults } from "@stencil/router";
import { Entity } from "../../../global/types";
import { generateUUID } from "../../../global/helpers";

@Component({
  tag: "page-collection-edit",
})
export class PageCollectionEdit {
  @Prop() match: MatchResults;
  @State() entity = new Entity();

  async componentWillLoad() {
    if (this.match.params.id) {
      const req = await fetch(
        `//localhost:8082/meta/collections/${this.match.params.id}`
      );
      this.entity = await req.json();
      console.log(this.entity);
    }
  }

  addField() {
    this.entity.fields = [
      ...this.entity.fields,
      { id: generateUUID(), type: "text", slug: "", slugName: "", value: null },
    ];
  }

  // TODO: Type event
  handleInput(id: string, key: string, event: any) {
    const value = event.target.value;

    const index = this.entity.fields.findIndex((f) => f.id === id);

    const fields = this.entity.fields;
    fields[index][key] = value;

    this.entity.fields = fields;
  }

  handleSubmit = async () => {
    // TODO: Is this best practice?
    console.log("posting", this.entity);

    const response = await fetch(`//localhost:8082/meta/collection`, {
      method: "POST",
      body: JSON.stringify(this.entity),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const res = await response.json();
    console.log(res);
  };

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

        {this.entity.fields.map((field, i) => (
          <div>
            {/* TODO: Add validation so this can't be 'externalId' / already existing fields */}
            <app-slug-pair
              slugName={field.slugName}
              slug={field.slug}
              onSlugChange={(e) => {
                let temp = this.entity.fields;
                temp[i] = { ...field, ...e.detail };
                this.entity.fields = temp;
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
