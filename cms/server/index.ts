import fastify from "fastify";
import fs from "fs";

const fsp = fs.promises;

const server = fastify();

server.get("/ping", async (request, reply) => {
  // create a JSON object
  const user = {
    id: 1,
    name: "John Doe",
    age: 22,
  };

  // convert JSON object to string
  const data = JSON.stringify(user);

  // write JSON string to a file

  await fsp.writeFile("./data/user.json", data);

  return "pong\n";
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
