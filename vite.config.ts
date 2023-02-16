import { defineConfig } from "vite";
import path from "path";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "run-svg", //输出文件名称
    lib: {
      entry: path.resolve(__dirname, "./src/components/run-svg/index.ts"), //指定组件编译入口文件
      // entry: path.resolve(__dirname, "./src/components/ccd-ui/index.js"), //指定组件编译入口文件
      name: "run-svg",
      fileName: "run-svg",
    }, //库编译模式配置

    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
