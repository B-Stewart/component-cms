import fastify from "fastify";
import fs from "fs";
import cors from "fastify-cors";
import { IEntity } from "../client/src/global/types";
import {
  getAllEntities,
  getEntity,
  getTypedEntityString,
} from "./services/entity-service";
import { COLLECTION_PATH } from "./constants";

const fsp = fs.promises;

const server = fastify();

// CORS config
server.register(cors, {
  origin: (origin, cb) => {
    // TODO: Fix

    return cb(null, true);
    // if (/localhost|127.0.0.1/.test(origin)) {
    //   //  Request from localhost will pass
    //   cb(null, true);
    //   return;
    // }
    cb(new Error("Not allowed because of cors"), false);
  },
});

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.post("/ping", async (request, reply) => {
  const data = JSON.stringify(request.body);

  // write JSON string to a file
  await fsp.writeFile("./data/user.json", data);

  return "pong\n";
});

server.post("/collection", async (request, reply) => {
  const data = request.body as IEntity;
  console.log(data);

  const dataPath = `${COLLECTION_PATH}/${data.id}.json`;
  const entities = await getAllEntities(COLLECTION_PATH);
  const fileNameMatches = entities.find((e) => e.slug === data.slug);

  if (!data.slug) {
    throw Error("Slug must exist");
  }

  if (!data.id) {
    // TODO: Initial file name is the slug, if slug changes the file name won't. Evaluate this.
    data.id = data.slug;

    if (fileNameMatches) {
      throw Error("File name (slug) already exists. Must be unique.");
    }
  } else {
    // TODO: Check for name clashes
  }
  await fsp.writeFile(
    `${COLLECTION_PATH}/${data.id}.json`,
    JSON.stringify(data, null, 2)
  );

  await fsp.writeFile(
    `${COLLECTION_PATH}/${data.id}.ts`,
    getTypedEntityString(data)
  );

  return JSON.stringify({ status: "Success" });
});

server.get("/meta/collections", async (request, reply) => {
  console.log("collections");

  const data = await getAllEntities(COLLECTION_PATH);

  return JSON.stringify(data);
});

server.get("/meta/collections/:collectionId", async (request, reply) => {
  const { collectionId } = request.params as { collectionId: string };

  const data = await getEntity(COLLECTION_PATH, collectionId);
  console.log(data);
  return JSON.stringify(data);
});

server.listen(8082, (err, address) => {
  if (err) {
    console.error("Log Error:", err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
