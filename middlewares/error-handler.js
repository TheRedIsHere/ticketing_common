"use strict";
exports.__esModule = true;
exports.errorHandler = void 0;
var custom_error_1 = require("../errors/custom-error");
var errorHandler = function (err, req, res, next) {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        errors: [{ message: 'Something went wrong' }]
    });
};
exports.errorHandler = errorHandler;
