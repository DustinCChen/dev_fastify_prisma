# dev_fastify_prisma
fastify prisma CRUD operation
# cmd line
```bash
pnpm init 
pnpm --package=typescript dlx tsc --init
pnpm i @prisma/client fastify fastify-zod zod-to-json-schema fastify-jwt
mkdir src
# initialise prisma
pnpx prisma init --datasource-provider mysql
# migrate the schema
pnpx prisma migrate dev --name init
```
# prisma
* D:\workdir\nodedev\github\dev_fastify_prisma\node_modules\.pnpm\@prisma+client@5.12.1\node_modules\.prisma\client\index.d.ts
* check UserUncheckedCreateInput
