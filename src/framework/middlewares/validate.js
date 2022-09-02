const path = require('path');
const rules = require(path.join(process.cwd(), '/src/app/validations'));
const { Response } = require('../classes');

/**
 * Validation APIs
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */

const validate = async function (req, res, next) {
    var endpoint = req.originalUrl.replace(/^\/|\/$/g, '');
    endpoint = endpoint?.split('/');
    if (!endpoint) return next();

    if (endpoint[2])
        endpoint = req.method + ':' + endpoint[0] + '/' + endpoint[1] + (endpoint[2].length <= 22 ? endpoint[2] : '*');
    else if (endpoint[1])
        endpoint = req.method + ':' + endpoint[0] + '/' + (endpoint[1].length <= 22 ? endpoint[1] : '*');
    else endpoint = req.method + ':' + endpoint[0];

    const schema = rules[endpoint] ?? false;
    if (schema) {
        try {
            await schema.validateAsync(req.body);
        } catch (error) {
            var errors = [];
            error.details?.forEach((detail) => {
                errors.push({
                    path: detail.context.label,
                    field: detail.context.key,
                    message: detail.message,
                });
            });
            return res.status(422).json(Response.validation({ data: { errors } }));
        }
    }

    return next();
};

module.exports = validate;
