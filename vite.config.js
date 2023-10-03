import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],
    // CSS モジュールの設定
    css: {
        modules: {
            // CSS モジュールをインポートする際に使用する名前空間
            importName: "styles",
        },
    },

    // SCSS モジュールの設定
    scss: {
        modules: {
            // CSS モジュールをインポートする際に使用する名前空間
            importName: "styles",
        },
    },
});
