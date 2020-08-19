export interface IFieldRequest {
  id: string;
  fields: IField[];
}

export interface IField {
  type: string;
  id: string;
  externalId: string;
  value: string;
}
