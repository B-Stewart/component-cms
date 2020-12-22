import fs from "fs";
import nodePath from "path";
import { IEntity, IHtmlField } from "../../client/src/global/types";
import { FIELD_TYPE_INTERFACE_MAP } from "../constants";
const fsp = fs.promises;

export const getAllEntities = async (path: string): Promise<IEntity[]> => {
  path = path.replace(/\/$/, "");
  const files = await fsp.readdir(path);
  const data = (await Promise.all(
    files
      .map(async (f) => {
        const filePath = `${path}/${f}`;
        if (nodePath.extname(filePath) === ".json") {
          const file = await fsp.readFile(filePath);

          return JSON.parse(file.toString()) as IEntity;
        }
        return false;
      })
      .filter(Boolean)
  )) as IEntity[]; // Need this because it doens't pick up the filter(Boolean)

  return data;
};

export const getTypedEntityString = (entity: IEntity) => {
  const predicates = ["string"];
  const adds = ["ITypedEntity", "ITypedField"];
  const importString = [
    ...new Set(entity.fields.map((f) => FIELD_TYPE_INTERFACE_MAP[f.type])),
    ...adds,
  ]
    .filter((x) => !predicates.includes(x))
    .join(", ");

  let tsString = `
import { ${importString} } from "../../../client/src/global/types";

export interface I${entity.slug}Generated extends ITypedEntity {
  fields: I${entity.slug}GeneratedField
}

export interface I${entity.slug}GeneratedField extends ITypedField {
  fields: {
    ${entity.fields
      .map((f) => {
        return `${f.slug}: ${FIELD_TYPE_INTERFACE_MAP[f.type]};`;
      })
      .join("\n    ")}
  }
}
  `;

  return tsString;
};
