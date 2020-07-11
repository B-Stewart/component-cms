export interface ICategory {
  slug: string;
  name: string;
  blogs?: string[]; // TODO: relation
}
