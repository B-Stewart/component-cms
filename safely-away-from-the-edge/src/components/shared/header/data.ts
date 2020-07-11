import { IRegionHeader } from "./type";

export const data: IRegionHeader = {
  logo: "/assets/cms/logo.svg",
  menuItems: [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/categories",
      name: "Blog",
    },
    {
      link: "#contact",
      name: "Contact",
    },
    {
      link:
        "https://github.com/B-Stewart/gatsby-starter-typescript-tailwindcss-netlifycms",
      iconName: "logo-github",
    },
  ],
};
