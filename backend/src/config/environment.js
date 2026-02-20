'use strict';

const Joi = require('joi');

const envSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'test', 'production').required(),
    PORT: Joi.number().default(3000),
    DB_URI: Joi.string().required(),
    SECRET: Joi.string().required(),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    dbUri: envVars.DB_URI,
    secret: envVars.SECRET,
};

module.exports = config;
