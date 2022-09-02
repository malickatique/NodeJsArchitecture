const Joi = require('joi');
const { exists, notExists } = require('../../framework/helpers');

const rules = {
    //  Users CRUD
    'GET:admin/users': Joi.object({}),
    'POST:admin/users': Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        email: Joi.string().external(async (value) => await notExists({ value, model: 'User', field: 'email' })),
        phone: Joi.string().required(),
        status: Joi.number().valid(1, 0),
    }),
    'PUT:admin/users': Joi.object({
        id: Joi.string().external(async (value) => await exists({ value, model: 'User', field: '_id' })),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        status: Joi.number().valid(1, 0),
    }),
    'PATCH:admin/users': Joi.object({
        id: Joi.string().external(async (value) => await exists({ value, model: 'User', field: '_id' })),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        status: Joi.number().valid(1, 0),
    }),
    'DELETE:admin/users': Joi.object({
        id: Joi.string()
            .required()
            .external(async (value) => await exists({ value, model: 'User', field: '_id', formField: 'id' })),
    }),
};

module.exports = rules;
