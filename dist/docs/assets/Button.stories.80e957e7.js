var y=Object.defineProperty;var s=(t,e)=>y(t,"name",{value:e,configurable:!0});import{d as i,N as g,f as r,U as f,W as b,X as B,u as o,Y as h,Z as x,H as _,_ as k}from"./vue.esm-bundler.aefa13d0.js";const v=i({name:"BioButton",inheritAttrs:!1}),l=i({...v,props:{type:{type:String},label:{type:String,default:"\u70B9\u51FB"},color:{type:String,default:""},loading:{type:Boolean},disabled:{type:Boolean},preIcon:{type:String},postIcon:{type:String},iconSize:{type:Number,default:14},onClick:{type:Function,default:null}},setup(t){const e=t,c=g(),u=r(()=>{const{color:n,disabled:a}=e;return[{[`ant-btn-${n}`]:n,["is-disabled"]:a}]}),d=r(()=>({...o(c),...e}));return(n,a)=>{const m=h("a-button");return x(),f(m,B(o(d),{class:o(u),onClick:t.onClick}),{default:b(()=>[_(k(t.label),1)]),_:1},16,["class","onClick"])}}}),p=l;l.__docgenInfo={exportName:"default",displayName:"BasicButton",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"'\u70B9\u51FB'"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"loading",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"preIcon",description:"Text before icon.",type:{name:"string"}},{name:"postIcon",description:"Text after icon.",type:{name:"string"}},{name:"iconSize",description:"preIcon and postIcon icon size.",tags:{default:[{description:": 14",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"14"}},{name:"onClick",type:{name:"func"},defaultValue:{func:!1,value:"null"}}]};const V={parameters:{storySource:{source:`import BioButton from './BasicButton.vue';

//More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: '\u57FA\u7840\u901A\u7528/Button',
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
    // Components used in your story \`template\` are defined in the \`components\` object
    components: { BioButton },
    // The story's \`args\` need to be mapped into the template through the \`setup()\` method
    setup() {
        return { args };
    },
    // And then the \`args\` are bound to your component with \`v-bind="args"\`
    template: '<bio-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {};
`,locationsMap:{primary:{startLoc:{col:17,line:20},endLoc:{col:2,line:29},startBody:{col:17,line:20},endBody:{col:2,line:29}}}}},title:"\u57FA\u7840\u901A\u7528/Button",component:p,argTypes:{color:{control:{type:"color"}},type:{control:{type:"select"},options:["primary","ghost","dashed","link","text","default"]}}},C=s(t=>({components:{BioButton:p},setup(){return{args:t}},template:'<bio-button v-bind="args" />'}),"Template"),T=C.bind({});T.args={};const j=["Primary"];export{T as Primary,j as __namedExportsOrder,V as default};
//# sourceMappingURL=Button.stories.80e957e7.js.map
