import { FastifyRequest, FastifyReply } from "fastify";
export default function registerUserHandler(request: FastifyRequest, reply: FastifyReply) {

 reply.send({ status: 'OK' });
}