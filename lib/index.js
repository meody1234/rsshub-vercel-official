// 动态引入 RSSHub 主程序
let rsshub;
try {
    rsshub = require('rsshub');
} catch (err) {
    console.error('RSSHub package not found. Please ensure rsshub is installed as a dependency.');
    throw err;
}

/**
 * Vercel Serverless Handler
 * Dynamically wraps RSSHub application for Vercel deployment
 */
module.exports = async (req, res) => {
    try {
        const app = await rsshub();
        req.path = req.url.split('?')[0];
        return app.callback()(req, res);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'RSSHub Serverless Function Failed', details: error.message }));
    }
};
