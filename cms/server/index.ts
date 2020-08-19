import fastify from "fastify";
import fs from "fs";
import cors from "fastify-cors";
import { IFieldRequest } from "../client/src/global/types";
import { v4 } from "uuid";

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
  const data = request.body as IFieldRequest;

  if (!data.id) {
    data.id = v4();
  }

  await fsp.writeFile(
    `./data/collections/${data.id}.json`,
    JSON.stringify(data)
  );

  return JSON.stringify({ status: "Success" });
});

server.get("/collections", async (request, reply) => {
  console.log("collections");
  const files = await fsp.readdir("./data/collections");
  const data = await Promise.all(
    files.map(async (f) => {
      const file = await fsp.readFile(`./data/collections/${f}`);
      return JSON.parse(file.toString()) as IFieldRequest;
    })
  );

  // if (!data.id) {
  //   data.id = v4();
  // }

  // await fsp.writeFile(
  //   `./data/collections/${data.id}.json`,
  //   JSON.stringify(data)
  // );

  return JSON.stringify(data);
});

server.listen(8082, (err, address) => {
  if (err) {
    console.error("Log Error:", err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
