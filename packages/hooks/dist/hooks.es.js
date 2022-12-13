import { reactive as p, readonly as d, provide as y, inject as b } from "vue";
function o(e, t = Symbol(), a = {}) {
  const { readonly: c = !0, createProvider: u = !1, native: s = !1 } = a, r = p(e), f = c ? d(r) : r;
  return !u && y(t, s ? e : f), {
    state: r
  };
}
function n(e = Symbol(), t) {
  return b(e, t || {});
}
const m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createContext: o,
  useContext: n
}, Symbol.toStringTag, { value: "Module" })), i = Symbol();
function v(e) {
  return o(e, i);
}
function l() {
  return n(i);
}
function x(e) {
  const t = l();
  return {
    prefixCls: `${t.prefixCls}-${e}`,
    prefixVar: t.prefixCls
  };
}
const C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createAppProviderContext: v,
  useAppProviderContext: l,
  useDesign: x
}, Symbol.toStringTag, { value: "Module" }));
export {
  m as core,
  C as web
};
