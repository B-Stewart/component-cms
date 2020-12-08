import fs from "fs";
import { IEntity } from "../../client/src/global/types";
const fsp = fs.promises;

export const getAllEntities = async (path: string): Promise<IEntity[]> => {
  path = path.replace(/\/$/, "");
  const files = await fsp.readdir(path);
  const data = await Promise.all(
    files.map(async (f) => {
      const file = await fsp.readFile(`${path}/${f}`);
      return JSON.parse(file.toString()) as IEntity;
    })
  );

  return data;
};
