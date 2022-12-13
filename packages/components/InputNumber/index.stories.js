import InputNumber from './index.vue';

export default {
    component: InputNumber,
    title: '数据展示/InputNumber',
    onChange: {},
    argTypes: {},
};

const Template = (args) => ({
    components: { InputNumber },
    setup() {
        return { args };
    },
    template: '<input-number v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {};
