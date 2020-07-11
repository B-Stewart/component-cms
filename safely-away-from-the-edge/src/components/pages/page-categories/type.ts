import { ICategory } from "../category/type";

export interface IPageCategories {
  categories: ICategory[];
  header: string;
  image?: string;
}
