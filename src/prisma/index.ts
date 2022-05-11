import { PrismaClient } from ".prisma/client";
// configuraçao
const prismaClient =  new PrismaClient();

require("dotenv").config();

export default prismaClient;

// com este voce consegue fazer um crud total
