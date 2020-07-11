import { Component, h, Prop } from "@stencil/core";
import { IPageCategories } from "./type";
import { ICategory } from "../category/type";
import { createSubArrays } from "../../../utilities";

@Component({
  tag: "page-categories",
})
export class PageCategories implements IPageCategories {
  @Prop() categories: ICategory[];
  @Prop() header: string;
  @Prop() image?: string;

  render() {
    return (
      <div>
        <app-hero imageSrc={this.image} name={this.header} />
        <div class="py-8 container">
          {createSubArrays(3, this.categories).map((categories, i) => (
            <div class="block md:flex" key={i}>
              {categories.map((cat, j) => (
                <div
                  key={j}
                  class="mb-4 md:mb-0 md:mr-4 p-4 flex-grow flex-basis-0 text-center"
                >
                  <stencil-route-link url={`/categories/${cat.slug}`}>
                    {cat.name}
                  </stencil-route-link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
