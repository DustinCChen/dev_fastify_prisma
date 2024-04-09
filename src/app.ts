import fastify from "fastify";
import userRoutes from "./modules/user/user.route";

const server = fastify();
server.get('/v1', async function () {
  return { status: 'OK' };
});

async function main() {
  server.register(userRoutes,{prefix: 'api/users'});
  try {
    const address = await server.listen(3000, "0.0.0.0");
    console.log(`Server started at ${address}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
