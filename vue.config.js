const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/static/colors.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/tours-portal/" : "/",
  transpileDependencies: true,
});
