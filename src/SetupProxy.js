const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://52.79.70.47/:8080',
            changeOrigin: true
        })
    )
};