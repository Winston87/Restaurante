"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require(".prisma/client");
// configuraçao
const prismaClient = new client_1.PrismaClient();
require("dotenv").config();
exports.default = prismaClient;
// com este voce consegue fazer um crud total
