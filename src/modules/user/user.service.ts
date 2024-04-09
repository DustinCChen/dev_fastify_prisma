import prisma from "../../utils/prisma";
export async function createUser(input: any) {
  const user = await prisma.user.create({
    data: input
  })
  return user
}