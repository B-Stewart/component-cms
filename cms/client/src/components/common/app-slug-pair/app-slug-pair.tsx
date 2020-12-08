import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from "@stencil/core";
import { slugify } from "../../../global/helpers";

@Component({
  tag: "app-slug-pair",
})
export class AppSlugPair {
  @Prop({ mutable: true }) slugName: string = "";
  @Prop({ mutable: true }) slug: string = "";
  @State() dirtySlug: boolean = false;
  @Event() slugChange: EventEmitter<{ slugName: string; slug: string }>;

  handleSlugName = (event: any) => {
    this.slugName = event.target.value;

    if (!this.dirtySlug) {
      this.slug = slugify(this.slugName);
    }
    this.slugChangeHandler();
  };

  handleSlug = (event: any) => {
    console.log("handleSlug");
    this.dirtySlug = true;
    this.slug = slugify(event.target.value);
    this.slugChangeHandler();
  };

  slugChangeHandler() {
    console.log("emitting slug");
    this.slugChange.emit({
      slug: this.slug,
      slugName: this.slugName,
    });
  }

  render() {
    return (
      <Host>
        <input
          name="slugName"
          value={this.slugName}
          placeholder="Name"
          onInput={(e) => this.handleSlugName(e)}
        />
        <input
          name="slug"
          value={this.slug}
          placeholder="Identifier"
          onInput={(e) => this.handleSlug(e)}
        />
      </Host>
    );
  }
}
