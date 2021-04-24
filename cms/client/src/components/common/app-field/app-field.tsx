import { Component, h, Prop } from "@stencil/core";
import { IField } from "../../../global/types";

@Component({
  tag: "app-field",
})
export class AppField {
  @Prop() field: Partial<IField>;

  render() {
    switch (this.field.type) {
      case "text":
        return (
          <input
            value={this.field.value}
            name={this.field.id}
            onChange={(e: Event) =>
              (this.field.value = (e.target as HTMLInputElement).value)
            }
          />
        );
      case "html":
        return <app-field-html />;
    }
  }
}
