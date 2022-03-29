const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_END === 'production' ? '/f1-driver-graphics-2022/' : '',
});
