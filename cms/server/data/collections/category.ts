import {
  IHtmlField,
  ITypedEntity,
  ITypedField,
} from "../../../client/src/global/types";

export interface IcategoryGenerated extends ITypedEntity {
  fields: IcategoryGeneratedField;
}

export interface IcategoryGeneratedField extends ITypedField {
  name: string;
  test: IHtmlField;
}
