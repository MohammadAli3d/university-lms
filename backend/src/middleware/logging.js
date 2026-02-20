'use strict';

const winston = require('winston');

// Create a logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/request.log' })
    ]
});

// Middleware for logging requests
const requestLoggingMiddleware = (req, res, next) => {
    logger.info({
        time: new Date().toISOString(),
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
    });
    next();
};

module.exports = requestLoggingMiddleware;
