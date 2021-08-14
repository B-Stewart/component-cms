import { Component, h, Prop, State } from "@stencil/core";
import { RouterHistory } from "@stencil/router";
import { Entity } from "../../../global/types";

@Component({
  tag: "page-entity-edit",
})
export class PageEntityEdit {
  @Prop() history: RouterHistory;
  @State() entity = new Entity();

  async componentWillLoad() {
    // if (this.history.location.query.collectionId) {
    //   const req = await fetch(
    //     `//localhost:8082/meta/collections/${this.history.location.query.collectionId}`
    //   );
    //   this.entity = await req.json();
    //   console.log(this.entity);
    // }
  }

  handleSubmit = async () => {
    // TODO: Is this best practice?
    console.log("posting", this.entity);

    // const response = await fetch(`//localhost:8082/meta/collection`, {
    //   method: "POST",
    //   body: JSON.stringify(this.entity),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });

    // const res = await response.json();
    // console.log(res);
  };

  render() {
    // const isNew = !!collectionId;

    return (
      <section>
        <div>New {this.entity.slugName}</div>

        <h1>Fields:</h1>

        {this.entity.fields.map((field, i) => (
          <div>
            <label>{field.slugName}</label>
            <app-field field={field} />
          </div>
        ))}
        <button onClick={this.handleSubmit}>Save</button>
      </section>
    );
  }
}
