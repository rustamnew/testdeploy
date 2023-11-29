const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    publicPath: '/testdeploy/',
    transpileDependencies: true,
    chainWebpack: config => {
        config.module.rules.delete("svg");
    },
    configureWebpack: {
        module: {
            rules: [
                {
                  test: /\.svg$/, 
                  loader: 'vue-svg-loader', 
                },
            ],
        }      
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://dist.nd.ru',
                changeOrigin: true
            }
        }
    },

})



