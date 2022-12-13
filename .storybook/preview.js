
import { app } from '@storybook/vue3'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
app.use(Antd)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  controls: {
    expanded: true
  }
}

