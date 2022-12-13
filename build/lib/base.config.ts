import vue from '@vitejs/plugin-vue';

// import PurgeIcons from 'vite-plugin-purge-icons';
import { resolve } from 'path';
function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default {
    plugins: [vue()],
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
};
