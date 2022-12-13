import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { configSvgIconsPlugin } from './build/plugin/svgSprite';
// import PurgeIcons from 'vite-plugin-purge-icons';
import { resolve } from 'path';
const rollupOptions = {
    external: ['vue', 'vue-router'],
    globals: {
        vue: 'Vue',
    },
};
function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), configSvgIconsPlugin(true)],
    resolve: {
        alias: [
            {
                find: 'vue-i18n',
                replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
            },
            {
                find: /@\//,
                replacement: pathResolve('src') + '/',
            },
            {
                find: /\/$\//,
                replacement: pathResolve('packages') + '/',
            },
        ],
    },
    build: {
        target: 'modules',
        rollupOptions,
        outDir: 'dist',
        minify: true,
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, 'packages/components/index.ts'),
            name: 'Biomap-UI-Components',
            fileName: (format) => `[name].${format}.js`,
            // 导出模块格式
            formats: ['es', 'cjs'],
        },
    },
});
