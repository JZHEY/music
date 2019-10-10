module.exports = {
    devServer: {
        port: 8000,
        proxy: {
            '^/api': {
              // target: 'http://cn1.vxtrans.link:36421',
              target: 'http://localhost:3000',
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                '^/api': '/', // rewrite path
              },
            },
        }
    },
}