/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vitest/config';
// import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    define: {
        'import.meta.vitest': 'undefined',
    },
    test: {
        /* for example, use global to avoid globals imports (describe, test, expect): */
        globals: true,
        includeSource: ['src/**/*.{js,ts}'],
    },

    plugins: [eslintPlugin()],
});
