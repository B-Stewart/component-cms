import { Component, h, Prop, State } from "@stencil/core";
import { IRegionHeader, IRegionHeaderMenuItems } from "./type";

@Component({
  tag: "app-header",
})
export class AppHeader implements IRegionHeader {
  @Prop() menuItems: IRegionHeaderMenuItems[] = [];
  @Prop() logo: string;

  @State() isMenuOpen: boolean;

  setMenuOpen(value: boolean) {
    this.isMenuOpen = value;
  }

  render() {
    const menuItemView = this.menuItems.map(({ link, name, iconName }, i) => (
      <span class="children-no-link-underline block  md:flex mr-4 last:mr-0 border-b border-neutral-300 last:border-0 md:border-b-0">
        <stencil-route-link
          url={link}
          key={i}
          onClick={() => this.setMenuOpen(false)}
        >
          <div class="font-bold flex py-2 md:py-0 text-black uppercase cursor-pointer hover:text-neutral-600">
            {name ? name : <ion-icon name={iconName} class="h-5 w-5" />}
          </div>
        </stencil-route-link>
      </span>
    ));

    return (
      <header class="bg-white sticky z-30 top-0 shadow-lg border-b border-neutral-300 py-1">
        <div class="container">
          <div class="flex justify-between items-center">
            <stencil-route-link url="/" class="block text-lg h-8">
              <img src={this.logo} alt="Logo" class="h-full" />
            </stencil-route-link>
            <div class="hidden md:flex items-center">{menuItemView}</div>
            <div
              class="flex items-center md:hidden"
              onClick={() => this.setMenuOpen(!this.isMenuOpen)}
            >
              <ion-icon name="menu-outline" class="cursor-pointer h-8 w-8" />
            </div>
          </div>

          {this.isMenuOpen ? (
            <div class="block md:hidden">
              <div class="bg-white p-4">{menuItemView}</div>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}
