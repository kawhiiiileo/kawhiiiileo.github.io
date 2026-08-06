import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["dsw-gateway-cn-wulanchabu.data.aliyun.com"],
  },
  preview: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: ["dsw-gateway-cn-wulanchabu.data.aliyun.com"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
