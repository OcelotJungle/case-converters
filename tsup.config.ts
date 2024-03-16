import type { Format, Options } from "tsup";

import { defineConfig } from "tsup";

const formats: Record<Format, string> = {
    cjs: "c",
    esm: "m",
    iife: "",
};

function createConfig(entry: string[], outDir: string) {
    return [{
        entry,
        outDir,
        format: ["cjs", "esm"],
        splitting: false,
        sourcemap: true,
        clean: true,
        outExtension: ({ format }) => ({ js: `.${formats[format]}js` }),
    },
    {
        entry,
        outDir,
        format: "esm",
        dts: {
            only: true,
        },
    }] as Options[];
}

export default defineConfig([
    ...createConfig(["src/index.ts"], "dist"),
    ...createConfig(["src/deep-transform/presets/index.ts"], "dist/presets"),
]);
