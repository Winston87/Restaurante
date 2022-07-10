"use strict";
exports.__esModule = true;
var client_1 = require(".prisma/client");
// configuraçao
var prismaClient = new client_1.PrismaClient();
require("dotenv").config();
exports["default"] = prismaClient;
// com este voce consegue fazer um crud total
