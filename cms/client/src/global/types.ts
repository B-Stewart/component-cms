export interface IEntity {
  id: string;
  slugName: string; // Custom name of the uri
  slug: string; // url/unique alphabetical lower case id

  fields: IField[];
}

export interface IField {
  type: string;
  id: string;
  slugName: string;
  slug: string;
  value: string; // Can this be any? Should we extend based on type?
}
