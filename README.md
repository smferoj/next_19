npx prisma init 
or, npx prisma init --datasourc-provider mysql
npx prisma migrate dev
npx prisma studio

// operations
root=>utils=>prismaClient.js
root=>utils=>getQueryOutput.js
app=>queryOutput=>page.js

// find many method 
 const qureyOutput = await prisma.users.findMany();
 

