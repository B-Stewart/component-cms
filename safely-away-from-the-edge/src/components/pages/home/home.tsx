import { Component, h, Prop } from "@stencil/core";
import { IHome } from "./type";
import { IHero } from "../../shared/app-hero/type";

@Component({
  tag: "page-home",
})
export class PageHome implements IHome {
  @Prop()
  hero: IHero;
  @Prop()
  header: string;
  @Prop()
  banner: IHero;
  @Prop()
  highlights: {
    content: string;
    header: string;
  }[];
  @Prop()
  content: string;

  render() {
    return (
      <div>
        <app-hero {...this.hero} />
        <div class="py-8 container">
          <div class="pb-5 text-center" innerHTML={this.content} />
          <div class="md:flex">
            {this.highlights.map((ib, i) => (
              <div key={i} class="mb-4 md:mb-0 md:mr-4 md:last:mr-0">
                <div class="uppercase text-lg font-semibold mb-2">
                  {ib.header}
                </div>
                <div>{ib.content}</div>
              </div>
            ))}
          </div>
        </div>
        <app-hero {...this.banner} />
      </div>
    );
  }
}
