import { IHome } from "./type";

export const data: IHome = {
  banner: {
    imageSrc: "/assets/cms/workers.jpg",
    height: "400px",
  },
  hero: {
    videoSrc: "/assets/cms/home-video.mp4",
    overlay: true,
    name: "We Love Tailwind",
  },
  highlights: [
    {
      header: "TailwindCSS",
      content: `In the React component world, it makes a lot of sense to bring your
      styles into components and Tailwind is built just for that with it's
      utility-first approach.`,
    },
    {
      header: "TypeScript",
      content: `Ever wonder why your JavaScript isn't working as intended and then
      realize you  misspelt a variable name, or didn't use the right property?
      TypeScript saves all these errors and more.`,
    },
    {
      header: "NetlifyCMS",
      content: `A Git based CMS that allows for content editability outside of the
      codebase. The ease of access to the data in markdown files and webhook
      integration makes it easy to work with in all use cases.`,
    },
  ],
  content: `<h1>Tailwind, TypeScript, and NetlifyCMS</h1>

  <p>There isn't a better tech stack for developing small static sites. Hosted on Netlify for fast performance</p>
  
  <a href="#contact" class="btn mt-4">Learn More</a>`,
};
