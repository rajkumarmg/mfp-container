const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const hostip = Object.values(require("os").networkInterfaces())
        .flat()
        .filter((item) => !item.internal && item.family === "IPv4")
        .find(Boolean).address;

const HOST_IP = process.env.HOST_IP?process.env.HOST_IP:hostip;         
const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://' + HOST_IP + ':8080/',
    },
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                // marketing: 'marketing@http://' + HOST_IP + ':8081/remoteEntry.js',
                auth: 'auth@http://' + HOST_IP + ':8082/remoteEntry.js',
                // dashboard: 'dashboard@http://' + HOST_IP + ':8083/remoteEntry.js',
                user: 'user@http://' + HOST_IP + ':8084/remoteEntry.js'
            },
            shared: ['react', 'react-dom'],

        }),
        
    ]
};

module.exports = merge(commonConfig, devConfig);