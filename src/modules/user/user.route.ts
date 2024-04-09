import { FastifyInstance } from "fastify";
import registerUserHandler from "./user.controller";
export default function userRoutes(server: FastifyInstance) {
 // server.get('/', async function (request, reply) {
 //  return { status: 'OK' };
 // });
 server.post("/", registerUserHandler);
}
