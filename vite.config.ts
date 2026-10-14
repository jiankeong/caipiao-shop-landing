import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import javascriptObfuscator from "vite-plugin-javascript-obfuscator";

//基础配置
export default defineConfig({
  //先对路径
  base: "/",

  //插件
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),

    // //添加混淆器，使用最简单的配置
    // javascriptObfuscator({
    //   //只使用最基础的混淆选项，避免影响代码执行
    //   options: {
    //     compact: true,
    //     controlFlowFlattening: false,
    //     deadCodeInjection: false,
    //     debugProtection: true, // 禁用调试保护，可能导致问题
    //     disableConsoleOutput: true,
    //     identifierNamesGenerator: "hexadecimal",
    //     log: false,
    //     numbersToExpressions: false,
    //     renameGlobals: false,
    //     selfDefending: false,
    //     simplify: true,
    //     splitStrings: false,
    //     stringArray: false, // 禁用字符串数组，减少复杂性
    //     stringArrayEncoding: [],
    //     stringArrayThreshold: 0,
    //     transformObjectKeys: false,
    //     unicodeEscapeSequence: false,
    //   },

    //   //排除所有可能导致问题的文件
    //   exclude: ["node_modules/**", "**/vendor*.js", "**/chunk-*.js", "**/view/**/*.vue", "**/view/**/*.js", "**/components/**/*.vue", "**/components/**/*.js", "**/components/**/*.ts", "**/containers/**/*.vue"],
    // }),
  ],

  //解析
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  //端口
  server: {
    port: 4200,
    hmr: {
      overlay: false,
    },
  },

  //生产环境配置 - 添加移除console的配置
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 使用更简单的打包策略，将所有代码打包到更少的文件中
    rollupOptions: {
      output: {
        // 控制 chunk 文件的命名格式
        chunkFileNames: "assets/js/[name]-[hash].js",
        // 控制入口文件的命名格式
        entryFileNames: "assets/js/[name]-[hash].js",
        // 控制静态资源的命名格式
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        // 使用函数形式的 manualChunks，更精确地控制模块分组
        manualChunks(id) {
          // 第三方库
          if (id.includes("node_modules")) {
            if (id.includes("vue") || id.includes("vant")) {
              return "vendor-vue";
            }
            return "vendor";
          }

          // 核心模块
          if (id.includes("src/router") || id.includes("src/store") || id.includes("src/api") || id.includes("src/utils") || id.includes("src/layout")) {
            return "app-core";
          }

          // 组件和容器 - 全部打包到一个文件中避免循环依赖
          if (id.includes("src/components") || id.includes("src/containers") || id.includes("src/view/comp")) {
            return "app-components";
          }

          // 视图文件 - 全部打包到一个文件中
          if (id.includes("src/view")) {
            return "app-views";
          }
        },
      },
    },
  },
});
