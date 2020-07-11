import { IHero } from "../../shared/app-hero/type";

export interface IHome {
  hero: IHero;
  highlights: {
    content: string;
    header: string;
  }[];
  content: string;
  banner: IHero;
}
