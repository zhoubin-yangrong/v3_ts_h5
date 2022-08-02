const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 跨域配置
  devServer:{
    host:"localhost",
    port:"9527",
    https:false,
    // 跨域配置
    proxy:{
      "/api":{
        target:"http://127.0.0.1:1228",
        changOrigin:true,
        ws:true,
        pathRewrite:{
          "^/api":""
        }
      }
    }
  }
})

