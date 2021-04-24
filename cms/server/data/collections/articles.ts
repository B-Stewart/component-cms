
import { IHtmlField, ITypedEntity, ITypedField } from "../../../client/src/global/types";

export interface IarticlesGenerated extends ITypedEntity {
  fields: IarticlesGeneratedField
}

export interface IarticlesGeneratedField extends ITypedField {
  fields: {
    title: string;
    content: IHtmlField;
  }
}
  