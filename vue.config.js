const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/',
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/_mixins.scss";
          @import "@/styles/_variables.scss";
        `,
      },
    },
  },
});
