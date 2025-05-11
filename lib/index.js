const rsshub = require('rsshub');

/**
 * Vercel Serverless Handler
 * Wraps RSSHub app for Vercel's Node.js runtime.
 */
module.exports = async (req, res) => {
    const app = rsshub.app();

    // Vercel's req/res do not have .path by default, reconstruct it
    req.path = req.url.split('?')[0];

    return app(req, res);
};
