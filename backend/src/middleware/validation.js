'use strict';

module.exports = function validateInput(req, res, next) {
    const { body } = req;

    // Example validation checks
    if (!body.username || typeof body.username !== 'string') {
        return res.status(400).json({ error: 'Invalid username' });
    }
    if (!body.password || typeof body.password !== 'string') {
        return res.status(400).json({ error: 'Invalid password' });
    }

    // Add more validation as needed

    next();
};