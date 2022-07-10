"use strict";
exports.__esModule = true;
// configura onde eu quero salvar o que eu quero salvar e como quero
var crypto_1 = require("crypto");
var multer_1 = require("multer");
var path_1 = require("path");
exports["default"] = {
    upload: function (folder) {
        return {
            storage: multer_1["default"].diskStorage({
                destination: (0, path_1.resolve)(__dirname, '..', '..', folder),
                filename: function (request, file, callback) {
                    var fileHash = crypto_1["default"].randomBytes(16).toString("hex");
                    var fileName = fileHash + "-" + file.originalname;
                    return callback(null, fileName);
                }
            })
        };
    }
};
