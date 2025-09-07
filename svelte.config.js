import adapter from "svelte-adapter-bun";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
export default {
    compilerOptions: {
        runes: true
    },
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        alias: {
            "$styles/*": "./src/styles/*",
            "$common/*": "./src/common/*"
        }
    }
};