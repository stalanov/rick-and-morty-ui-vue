const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
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
