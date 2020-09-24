const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { target: 'https://localhost:8888/', secure: false, changeOrigin: true }));
};
