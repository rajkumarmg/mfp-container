const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const domain = process.env.IPSS_MFP_PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                // marketing: `marketing@${domain}/marketing/remoteEntry.js`,
                auth: `auth@${domain}/auth/remoteEntry.js`,
                // dashboard: `dashboarrd@${domain}/dashboard/remoteEntry.js`,
                user: `user@${domain}/user/remoteEntry.js`,

            },
            shared: ['react', 'react-dom'],
        })
    ]
};
module.exports = merge(commonConfig, prodConfig);