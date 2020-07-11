import { Component, Prop, h } from "@stencil/core";
import { MatchResults } from "@stencil/router";
import { data } from "./data";

@Component({
  tag: "page-category",
})
export class PageCategory {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return "";
  }

  render() {
    // TODO: Optimize to dictionary
    // TODO: See if this affects import size if it adds all the object to the dom.
    const category = data.find((cat) => cat.slug === this.match?.params.slug);

    if (!category) {
      return null;
    }

    return (
      <div class="py-8 container">
        <h1 class="text-4xl text-center">{category.name}</h1>
        <div class="text-center mb-8">
          <stencil-route-link url="/categories/">
            Browse all Categories
          </stencil-route-link>
        </div>
        {/* <ArticleRow edges={data.articles.edges} /> */}
      </div>
    );
  }
}
