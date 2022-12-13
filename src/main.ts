import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import BioCom from '@biomap/ui-components';
import 'virtual:svg-icons-register';
async function bootstrap() {
    const app = createApp(App);
    app.use(BioCom);
    app.use(Antd);
    app.mount('#biomap-UI-app');
}

bootstrap();
