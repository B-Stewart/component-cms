import fastify from "fastify";
import fs from "fs";
import cors from "fastify-cors";

const fsp = fs.promises;

const server = fastify();

// CORS config
server.register(cors, {
  origin: (origin, cb) => {
    if (/localhost/.test(origin)) {
      //  Request from localhost will pass
      cb(null, true);
      return;
    }
    cb(new Error("Not allowed"), false);
  },
});

server.post("/ping", async (request, reply) => {
  const data = JSON.stringify(request.body);

  // write JSON string to a file
  await fsp.writeFile("./data/user.json", data);

  return "pong\n";
});

server.listen(8082, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
