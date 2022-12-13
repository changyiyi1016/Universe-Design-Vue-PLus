var N=Object.defineProperty;var u=(e,t)=>N(e,"name",{value:t,configurable:!0});import{d as x,U as r,W as o,X as y,f as d,w as C,Y as i,Z as s,a4 as c,H as f}from"./vue.esm-bundler.aefa13d0.js";import{_ as I}from"./plugin-vue_export-helper.f63bf49c.js";const _=x({name:"InputNumber2",props:{value:{type:Number,required:!0},max:{type:Number}},emits:["update:value","change"],setup(e,{emit:t}){const a=d({get:()=>Number.isNaN(+e.value)?null:+e.value,set:n=>{t("update:value",n),t("change",n)}}),m=d(()=>e.max);function p(){a.value?a.value+=1:a.value=1}u(p,"onAdd");function l(){a.value&&(a.value-=1)}return u(l,"onMinus"),C(()=>e,n=>{n.max&&n.value>n.max&&t("update:value",n.max)},{deep:!0}),{onAdd:p,onMinus:l,computedValue:a,computedMax:m}}}),h=f("-"),k=f("+");function $(e,t,a,m,p,l){const n=i("a-button"),v=i("a-input");return s(),r(v,y(e.$attrs,{value:e.computedValue,"onUpdate:value":t[0]||(t[0]=g=>e.computedValue=g),valueModifiers:{number:!0},"max-length":5,size:"small",type:"number",min:0,max:e.computedMax}),{addonBefore:o(()=>[e.$attrs.disabled?c("",!0):(s(),r(n,{key:0,onClick:e.onMinus,size:"small"},{default:o(()=>[h]),_:1},8,["onClick"]))]),addonAfter:o(()=>[e.$attrs.disabled?c("",!0):(s(),r(n,{key:0,onClick:e.onAdd,size:"small"},{default:o(()=>[k]),_:1},8,["onClick"]))]),_:1},16,["value","max"])}u($,"_sfc_render");const b=I(_,[["render",$],["__scopeId","data-v-70202569"]]);_.__docgenInfo={displayName:"InputNumber2",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"number"},required:!0},{name:"max",type:{name:"number"}}],events:[{name:"update:value"},{name:"change"}]};const A={parameters:{storySource:{source:`import InputNumber from './index.vue';

export default {
    component: InputNumber,
    title: '\u6570\u636E\u5C55\u793A/InputNumber',
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
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:16},startBody:{col:17,line:10},endBody:{col:2,line:16}}}}},component:b,title:"\u6570\u636E\u5C55\u793A/InputNumber",onChange:{},argTypes:{}},M=u(e=>({components:{InputNumber:b},setup(){return{args:e}},template:'<input-number v-bind="args" />'}),"Template"),T=M.bind({});T.args={};const q=["Default"];export{T as Default,q as __namedExportsOrder,A as default};
//# sourceMappingURL=index.stories.eb218be3.js.map
