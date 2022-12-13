import BioButton from './BasicButton.vue';

//More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: '基础通用/Button',
    component: BioButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        color: {
            control: { type: 'color' },
        },
        type: {
            control: { type: 'select' },
            options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'],
        },
    },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { BioButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<bio-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {};
