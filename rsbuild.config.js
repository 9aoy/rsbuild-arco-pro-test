import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSvgr({
      svgrOptions: {
        exportType: "named",
      },
    }),
  ],
  performance: {
    printFileSize: false,
  },
  output: {
    // injectStyles: true
  },
  source: {
    transformImport: [
      {
        libraryName: "@arco-design/web-react",
        libraryDirectory: "es",
        camelToDashComponentName: false,
        style: "css",
      },
      {
        libraryName: "@arco-design/web-react/icon",
        libraryDirectory: "react-icon",
        camelToDashComponentName: false,
      },
    ],
  },
});
