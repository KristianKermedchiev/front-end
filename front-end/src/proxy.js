const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/merchant/get-all',
        createProxyMiddleware({
            target: 'http://localhost:3000/',
            changeOrigin: true,
        })
    );
};