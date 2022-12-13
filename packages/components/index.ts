import { App } from 'vue';

import BioButton from './Button/index.vue';

import BioIcon from './Icon/index.vue';
import BioSvgIcon from './Icon/SvgIcon.vue';
// 导出单独组件
export { BioButton, BioIcon };
//编写一个插件，实现一个install方法全局注册引入组件

export default {
    install(app: App): void {
        // Object.keys(components).forEach((key) => {
        //     app.component(key, components[key]);
        // });
        app.component(BioButton.name, BioButton);
        app.component(BioIcon.name, BioIcon);
        app.component(BioSvgIcon.name, BioSvgIcon);
    },
};
