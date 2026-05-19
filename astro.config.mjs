import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import CompressionPlugin from "vite-plugin-compression";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        plugins: [CompressionPlugin()],
    },
});
