export interface IEntity {
  id: string;
  slugName: string; // Custom name of the uri
  slug: string; // url/unique alphabetical lower case id

  fields: IField[];
}

export class Entity implements IEntity {
  id: string;
  slugName: string; // Custom name of the uri
  slug: string; // url/unique alphabetical lower case id

  fields: IField[];

  constructor() {
    this.id = null;
    this.slug = null;
    this.slugName = null;
    this.fields = [];
  }
}

export interface IField {
  type: "html" | "text"; // TODO: Unify with map so we don't have copy pasta
  id: string;
  slugName: string;
  slug: string;
  value: any;
}

// Saved values

export interface ITypedEntity {
  id: string;
  slugName: string; // Custom name of the uri
  slug: string; // url/unique alphabetical lower case id
  fields: ITypedField;
}

export interface ITypedField {
  slug: string;
  slugName: string;
  id: string;
}

export interface IHtmlField extends ITypedField {}
