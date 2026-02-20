'use strict';

const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const express = require('express');
const app = express();

// Security Configuration

// Helmet to secure HTTP headers
app.use(helmet());

// CORS settings
const corsOptions = {
    origin: 'https://yourdomain.com', // Update this to match your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Password Policies
const passwordPolicy = {
    minLength: 8,
    maxLength: 20,
    requireUppercase: true,
    requireLowercase: true,
    requireSpecialCharacter: true,
    requireNumeric: true
};

module.exports = { corsOptions, passwordPolicy };