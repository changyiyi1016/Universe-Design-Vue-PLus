import { defineComponent as yt, reactive as Ie, computed as w, openBlock as H, createElementBlock as bt, normalizeClass as Q, normalizeStyle as St, toDisplayString as xe, inject as Ce, createElementVNode as ke, ref as Ee, watch as Te, onMounted as Oe, unref as et, nextTick as Pe, resolveComponent as je, createBlock as Ae } from "vue";
const vt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, Le = yt({
  name: "BioButton",
  props: {
    label: {
      type: String,
      required: !0
    },
    primary: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      validator: function(t) {
        return ["small", "medium", "large"].indexOf(t) !== -1;
      }
    },
    backgroundColor: {
      type: String
    }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    return t = Ie(t), {
      classes: w(() => ({
        "storybook-button": !0,
        "storybook-button--primary": t.primary,
        "storybook-button--secondary": !t.primary,
        [`storybook-button--${t.size || "medium"}`]: !0
      })),
      style: w(() => ({
        backgroundColor: t.backgroundColor
      })),
      onClick() {
        e("click");
      }
    };
  }
});
function $e(t, e, n, r, o, s) {
  return H(), bt("button", {
    type: "button",
    class: Q(t.classes),
    onClick: e[0] || (e[0] = (...i) => t.onClick && t.onClick(...i)),
    style: St(t.style)
  }, xe(t.label), 7);
}
const Tt = /* @__PURE__ */ vt(Le, [["render", $e]]);
function Me(t = Symbol(), e) {
  return Ce(t, e || {});
}
const _e = Symbol();
function Fe() {
  return Me(_e);
}
function Ne(t) {
  const e = Fe();
  return {
    prefixCls: `${e.prefixCls}-${t}`,
    prefixVar: e.prefixCls
  };
}
const Be = yt({
  name: "BioSvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: !0
    },
    size: {
      type: [Number, String],
      default: 16
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const { prefixCls: e } = Ne("svg-icon"), n = w(() => `#${t.prefix}-${t.name}`), r = w(() => {
      const { size: o } = t;
      let s = `${o}`;
      return s = `${s.replace("px", "")}px`, {
        width: s,
        height: s
      };
    });
    return { iconName: n, prefixCls: e, getStyle: r };
  }
}), De = ["xlink:href"];
function ze(t, e, n, r, o, s) {
  return H(), bt("svg", {
    class: Q(["biomap-svg-icon", t.$attrs.class, t.spin && "svg-icon-spin"]),
    style: St(t.getStyle),
    "aria-hidden": "true"
  }, [
    ke("use", { "xlink:href": t.iconName }, null, 8, De)
  ], 6);
}
const st = /* @__PURE__ */ vt(Be, [["render", ze], ["__scopeId", "data-v-32cabde0"]]);
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.0.0
*/
const zt = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), G = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), _ = Object.freeze({
  ...zt,
  ...G
}), it = Object.freeze({
  ..._,
  body: "",
  hidden: !1
});
function Re(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Ot(t, e) {
  const n = Re(t, e);
  for (const r in it)
    r in G ? r in t && !(r in n) && (n[r] = G[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
  return n;
}
function Ve(t, e) {
  const n = t.icons, r = t.aliases || {}, o = /* @__PURE__ */ Object.create(null);
  function s(i) {
    if (n[i])
      return o[i] = [];
    if (!(i in o)) {
      o[i] = null;
      const c = r[i] && r[i].parent, a = c && s(c);
      a && (o[i] = [c].concat(a));
    }
    return o[i];
  }
  return (e || Object.keys(n).concat(Object.keys(r))).forEach(s), o;
}
function qe(t, e, n) {
  const r = t.icons, o = t.aliases || {};
  let s = {};
  function i(c) {
    s = Ot(
      r[c] || o[c],
      s
    );
  }
  return i(e), n.forEach(i), Ot(t, s);
}
function Rt(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((o) => {
    e(o, null), n.push(o);
  });
  const r = Ve(t);
  for (const o in r) {
    const s = r[o];
    s && (e(o, qe(t, o, s)), n.push(o));
  }
  return n;
}
const A = /^[a-z0-9]+(-[a-z0-9]+)*$/, O = (t, e, n, r = "") => {
  const o = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const c = o.pop(), a = o.pop(), f = {
      provider: o.length > 0 ? o[0] : r,
      prefix: a,
      name: c
    };
    return e && !V(f) ? null : f;
  }
  const s = o[0], i = s.split("-");
  if (i.length > 1) {
    const c = {
      provider: r,
      prefix: i.shift(),
      name: i.join("-")
    };
    return e && !V(c) ? null : c;
  }
  if (n && r === "") {
    const c = {
      provider: r,
      prefix: "",
      name: s
    };
    return e && !V(c, n) ? null : c;
  }
  return null;
}, V = (t, e) => t ? !!((t.provider === "" || t.provider.match(A)) && (e && t.prefix === "" || t.prefix.match(A)) && t.name.match(A)) : !1, He = {
  provider: "",
  aliases: {},
  not_found: {},
  ...zt
};
function nt(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function Vt(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !nt(t, He))
    return null;
  const n = e.icons;
  for (const o in n) {
    const s = n[o];
    if (!o.match(A) || typeof s.body != "string" || !nt(
      s,
      it
    ))
      return null;
  }
  const r = e.aliases || {};
  for (const o in r) {
    const s = r[o], i = s.parent;
    if (!o.match(A) || typeof i != "string" || !n[i] && !r[i] || !nt(
      s,
      it
    ))
      return null;
  }
  return e;
}
const U = /* @__PURE__ */ Object.create(null);
function Qe(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function S(t, e) {
  const n = U[t] || (U[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = Qe(t, e));
}
function wt(t, e) {
  return Vt(e) ? Rt(e, (n, r) => {
    r ? t.icons[n] = r : t.missing.add(n);
  }) : [];
}
function Ge(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
function Ue(t, e) {
  let n = [];
  return (typeof t == "string" ? [t] : Object.keys(U)).forEach((o) => {
    (typeof o == "string" && typeof e == "string" ? [e] : Object.keys(U[o] || {})).forEach((i) => {
      const c = S(o, i);
      n = n.concat(
        Object.keys(c.icons).map(
          (a) => (o !== "" ? "@" + o + ":" : "") + i + ":" + a
        )
      );
    });
  }), n;
}
let $ = !1;
function We(t) {
  return typeof t == "boolean" && ($ = t), $;
}
function F(t) {
  const e = typeof t == "string" ? O(t, !0, $) : t;
  if (e) {
    const n = S(e.provider, e.prefix), r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function qt(t, e) {
  const n = O(t, !0, $);
  if (!n)
    return !1;
  const r = S(n.provider, n.prefix);
  return Ge(r, n.name, e);
}
function Ht(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), $ && !e && !t.prefix) {
    let o = !1;
    return Vt(t) && (t.prefix = "", Rt(t, (s, i) => {
      i && qt(s, i) && (o = !0);
    })), o;
  }
  const n = t.prefix;
  if (!V({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = S(e, n);
  return !!wt(r, t);
}
function Ke(t) {
  return !!F(t);
}
function Je(t) {
  const e = F(t);
  return e ? {
    ..._,
    ...e
  } : null;
}
const Qt = Object.freeze({
  width: null,
  height: null
}), Gt = Object.freeze({
  ...Qt,
  ...G
}), Xe = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ye = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ct(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const r = t.split(Xe);
  if (r === null || !r.length)
    return t;
  const o = [];
  let s = r.shift(), i = Ye.test(s);
  for (; ; ) {
    if (i) {
      const c = parseFloat(s);
      isNaN(c) ? o.push(s) : o.push(Math.ceil(c * e * n) / n);
    } else
      o.push(s);
    if (s = r.shift(), s === void 0)
      return o.join("");
    i = !i;
  }
}
function J(t, e) {
  const n = {
    ..._,
    ...t
  }, r = {
    ...Gt,
    ...e
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, r].forEach((g) => {
    const h = [], E = g.hFlip, v = g.vFlip;
    let b = g.rotate;
    E ? v ? b += 2 : (h.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), h.push("scale(-1 1)"), o.top = o.left = 0) : v && (h.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), h.push("scale(1 -1)"), o.top = o.left = 0);
    let m;
    switch (b < 0 && (b -= Math.floor(b / 4) * 4), b = b % 4, b) {
      case 1:
        m = o.height / 2 + o.top, h.unshift(
          "rotate(90 " + m.toString() + " " + m.toString() + ")"
        );
        break;
      case 2:
        h.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        m = o.width / 2 + o.left, h.unshift(
          "rotate(-90 " + m.toString() + " " + m.toString() + ")"
        );
        break;
    }
    b % 2 === 1 && (o.left !== o.top && (m = o.left, o.left = o.top, o.top = m), o.width !== o.height && (m = o.width, o.width = o.height, o.height = m)), h.length && (s = '<g transform="' + h.join(" ") + '">' + s + "</g>");
  });
  const i = r.width, c = r.height, a = o.width, f = o.height;
  let u, l;
  return i === null ? (l = c === null ? "1em" : c === "auto" ? f : c, u = ct(l, a / f)) : (u = i === "auto" ? a : i, l = c === null ? ct(u, f / a) : c === "auto" ? f : c), {
    attributes: {
      width: u.toString(),
      height: l.toString(),
      viewBox: o.left.toString() + " " + o.top.toString() + " " + a.toString() + " " + f.toString()
    },
    body: s
  };
}
const Ze = /\sid="(\S+)"/g, tn = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let en = 0;
function Ut(t, e = tn) {
  const n = [];
  let r;
  for (; r = Ze.exec(t); )
    n.push(r[1]);
  return n.length && n.forEach((o) => {
    const s = typeof e == "function" ? e(o) : e + (en++).toString(), i = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      new RegExp('([#;"])(' + i + ')([")]|\\.[a-z])', "g"),
      "$1" + s + "$3"
    );
  }), t;
}
const C = {
  local: !0,
  session: !0
}, Wt = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let It = !1;
function nn(t) {
  It = t;
}
const Pt = "iconify2", M = "iconify", Kt = M + "-count", jt = M + "-version", Jt = 36e5, on = 168;
function at(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function xt(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function At(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function ut(t, e) {
  return xt(t, Kt, e.toString());
}
function ft(t) {
  return parseInt(at(t, Kt)) || 0;
}
let z = typeof window > "u" ? {} : window;
function Xt(t) {
  const e = t + "Storage";
  try {
    if (z && z[e] && typeof z[e].length == "number")
      return z[e];
  } catch {
  }
  C[t] = !1;
}
function Yt(t, e) {
  const n = Xt(t);
  if (!n)
    return;
  const r = at(n, jt);
  if (r !== Pt) {
    if (r) {
      const c = ft(n);
      for (let a = 0; a < c; a++)
        At(n, M + a.toString());
    }
    xt(n, jt, Pt), ut(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Jt) - on, s = (c) => {
    const a = M + c.toString(), f = at(n, a);
    if (typeof f == "string") {
      try {
        const u = JSON.parse(f);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > o && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && e(u, c))
          return !0;
      } catch {
      }
      At(n, a);
    }
  };
  let i = ft(n);
  for (let c = i - 1; c >= 0; c--)
    s(c) || (c === i - 1 ? (i--, ut(n, i)) : Wt[t].add(c));
}
function Zt() {
  if (!It) {
    nn(!0);
    for (const t in C)
      Yt(t, (e) => {
        const n = e.data, r = e.provider, o = n.prefix, s = S(
          r,
          o
        );
        if (!wt(s, n).length)
          return !1;
        const i = n.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, i) : i, !0;
      });
  }
}
function te(t, e) {
  switch (t) {
    case "local":
    case "session":
      C[t] = e;
      break;
    case "all":
      for (const n in C)
        C[n] = e;
      break;
  }
}
const lt = /* @__PURE__ */ Object.create(null);
function ee(t, e) {
  lt[t] = e;
}
function dt(t) {
  return lt[t] || lt[""];
}
function Ct(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    resources: e,
    path: t.path || "/",
    maxURL: t.maxURL || 500,
    rotate: t.rotate || 750,
    timeout: t.timeout || 5e3,
    random: t.random === !0,
    index: t.index || 0,
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const X = /* @__PURE__ */ Object.create(null), j = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], q = [];
for (; j.length > 0; )
  j.length === 1 || Math.random() > 0.5 ? q.push(j.shift()) : q.push(j.pop());
X[""] = Ct({
  resources: ["https://api.iconify.design"].concat(q)
});
function ne(t, e) {
  const n = Ct(e);
  return n === null ? !1 : (X[t] = n, !0);
}
function Y(t) {
  return X[t];
}
function rn() {
  return Object.keys(X);
}
const sn = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let W = sn();
function cn(t) {
  W = t;
}
function an() {
  return W;
}
function un(t, e) {
  const n = Y(t);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((i) => {
      o = Math.max(o, i.length);
    });
    const s = e + ".json?icons=";
    r = n.maxURL - o - n.path.length - s.length;
  }
  return r;
}
function fn(t) {
  return t === 404;
}
const ln = (t, e, n) => {
  const r = [], o = un(t, e), s = "icons";
  let i = {
    type: s,
    provider: t,
    prefix: e,
    icons: []
  }, c = 0;
  return n.forEach((a, f) => {
    c += a.length + 1, c >= o && f > 0 && (r.push(i), i = {
      type: s,
      provider: t,
      prefix: e,
      icons: []
    }, c = a.length), i.icons.push(a);
  }), r.push(i), r;
};
function dn(t) {
  if (typeof t == "string") {
    const e = Y(t);
    if (e)
      return e.path;
  }
  return "/";
}
const pn = (t, e, n) => {
  if (!W) {
    n("abort", 424);
    return;
  }
  let r = dn(e.provider);
  switch (e.type) {
    case "icons": {
      const s = e.prefix, c = e.icons.join(","), a = new URLSearchParams({
        icons: c
      });
      r += s + ".json?" + a.toString();
      break;
    }
    case "custom": {
      const s = e.uri;
      r += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  W(t + r).then((s) => {
    const i = s.status;
    if (i !== 200) {
      setTimeout(() => {
        n(fn(i) ? "abort" : "next", i);
      });
      return;
    }
    return o = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", s);
    });
  }).catch(() => {
    n("next", o);
  });
}, hn = {
  prepare: ln,
  send: pn
};
function gn(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  t.sort((o, s) => o.provider !== s.provider ? o.provider.localeCompare(s.provider) : o.prefix !== s.prefix ? o.prefix.localeCompare(s.prefix) : o.name.localeCompare(s.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((o) => {
    if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
      return;
    r = o;
    const s = o.provider, i = o.prefix, c = o.name, a = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), f = a[i] || (a[i] = S(s, i));
    let u;
    c in f.icons ? u = e.loaded : i === "" || f.missing.has(c) ? u = e.missing : u = e.pending;
    const l = {
      provider: s,
      prefix: i,
      name: c
    };
    u.push(l);
  }), e;
}
function oe(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== e));
  });
}
function mn(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const r = t.provider, o = t.prefix;
    e.forEach((s) => {
      const i = s.icons, c = i.pending.length;
      i.pending = i.pending.filter((a) => {
        if (a.prefix !== o)
          return !0;
        const f = a.name;
        if (t.icons[f])
          i.loaded.push({
            provider: r,
            prefix: o,
            name: f
          });
        else if (t.missing.has(f))
          i.missing.push({
            provider: r,
            prefix: o,
            name: f
          });
        else
          return n = !0, !0;
        return !1;
      }), i.pending.length !== c && (n || oe([t], s.id), s.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let yn = 0;
function bn(t, e, n) {
  const r = yn++, o = oe.bind(null, n, r);
  if (!e.pending.length)
    return o;
  const s = {
    id: r,
    icons: e,
    callback: t,
    abort: o
  };
  return n.forEach((i) => {
    (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s);
  }), o;
}
function Sn(t, e = !0, n = !1) {
  const r = [];
  return t.forEach((o) => {
    const s = typeof o == "string" ? O(o, e, n) : o;
    s && r.push(s);
  }), r;
}
var vn = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function wn(t, e, n, r) {
  const o = t.resources.length, s = t.random ? Math.floor(Math.random() * o) : t.index;
  let i;
  if (t.random) {
    let p = t.resources.slice(0);
    for (i = []; p.length > 1; ) {
      const y = Math.floor(Math.random() * p.length);
      i.push(p[y]), p = p.slice(0, y).concat(p.slice(y + 1));
    }
    i = i.concat(p);
  } else
    i = t.resources.slice(s).concat(t.resources.slice(0, s));
  const c = Date.now();
  let a = "pending", f = 0, u, l = null, d = [], g = [];
  typeof r == "function" && g.push(r);
  function h() {
    l && (clearTimeout(l), l = null);
  }
  function E() {
    a === "pending" && (a = "aborted"), h(), d.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), d = [];
  }
  function v(p, y) {
    y && (g = []), typeof p == "function" && g.push(p);
  }
  function b() {
    return {
      startTime: c,
      payload: e,
      status: a,
      queriesSent: f,
      queriesPending: d.length,
      subscribe: v,
      abort: E
    };
  }
  function m() {
    a = "failed", g.forEach((p) => {
      p(void 0, u);
    });
  }
  function Et() {
    d.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), d = [];
  }
  function we(p, y, P) {
    const D = y !== "success";
    switch (d = d.filter((x) => x !== p), a) {
      case "pending":
        break;
      case "failed":
        if (D || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (y === "abort") {
      u = P, m();
      return;
    }
    if (D) {
      u = P, d.length || (i.length ? tt() : m());
      return;
    }
    if (h(), Et(), !t.random) {
      const x = t.resources.indexOf(p.resource);
      x !== -1 && x !== t.index && (t.index = x);
    }
    a = "completed", g.forEach((x) => {
      x(P);
    });
  }
  function tt() {
    if (a !== "pending")
      return;
    h();
    const p = i.shift();
    if (p === void 0) {
      if (d.length) {
        l = setTimeout(() => {
          h(), a === "pending" && (Et(), m());
        }, t.timeout);
        return;
      }
      m();
      return;
    }
    const y = {
      status: "pending",
      resource: p,
      callback: (P, D) => {
        we(y, P, D);
      }
    };
    d.push(y), f++, l = setTimeout(tt, t.rotate), n(p, e, y.callback);
  }
  return setTimeout(tt), b;
}
function re(t) {
  const e = {
    ...vn,
    ...t
  };
  let n = [];
  function r() {
    n = n.filter((c) => c().status === "pending");
  }
  function o(c, a, f) {
    const u = wn(
      e,
      c,
      a,
      (l, d) => {
        r(), f && f(l, d);
      }
    );
    return n.push(u), u;
  }
  function s(c) {
    return n.find((a) => c(a)) || null;
  }
  return {
    query: o,
    find: s,
    setIndex: (c) => {
      e.index = c;
    },
    getIndex: () => e.index,
    cleanup: r
  };
}
function Lt() {
}
const ot = /* @__PURE__ */ Object.create(null);
function In(t) {
  if (!ot[t]) {
    const e = Y(t);
    if (!e)
      return;
    const n = re(e), r = {
      config: e,
      redundancy: n
    };
    ot[t] = r;
  }
  return ot[t];
}
function se(t, e, n) {
  let r, o;
  if (typeof t == "string") {
    const s = dt(t);
    if (!s)
      return n(void 0, 424), Lt;
    o = s.send;
    const i = In(t);
    i && (r = i.redundancy);
  } else {
    const s = Ct(t);
    if (s) {
      r = re(s);
      const i = t.resources ? t.resources[0] : "", c = dt(i);
      c && (o = c.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Lt) : r.query(e, o, n)().abort;
}
function xn(t, e) {
  const n = t.lastModifiedCached;
  if (n && n >= e)
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const r in C)
      Yt(r, (o) => {
        const s = o.data;
        return o.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function Cn(t, e) {
  It || Zt();
  function n(r) {
    let o;
    if (!C[r] || !(o = Xt(r)))
      return;
    const s = Wt[r];
    let i;
    if (s.size)
      s.delete(i = Array.from(s).shift());
    else if (i = ft(o), !ut(o, i + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / Jt),
      provider: t.provider,
      data: e
    };
    return xt(
      o,
      M + i.toString(),
      JSON.stringify(c)
    );
  }
  e.lastModified && !xn(t, e.lastModified) || !Object.keys(e.icons).length || (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function $t() {
}
function kn(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, mn(t);
  }));
}
function En(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = t, o = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!o || !(s = dt(n)))
      return;
    s.prepare(n, r, o).forEach((c) => {
      se(n, c, (a, f) => {
        if (typeof a != "object") {
          if (f !== 404)
            return;
          c.icons.forEach((u) => {
            t.missing.add(u);
          });
        } else
          try {
            const u = wt(
              t,
              a
            );
            if (!u.length)
              return;
            const l = t.pendingIcons;
            l && u.forEach((d) => {
              l.delete(d);
            }), Cn(t, a);
          } catch (u) {
            console.error(u);
          }
        kn(t);
      });
    });
  }));
}
const Tn = (t) => {
  const n = S(
    t.provider,
    t.prefix
  ).pendingIcons;
  return !!(n && n.has(t.name));
}, kt = (t, e) => {
  const n = Sn(t, !0, We()), r = gn(n);
  if (!r.pending.length) {
    let a = !0;
    return e && setTimeout(() => {
      a && e(
        r.loaded,
        r.missing,
        r.pending,
        $t
      );
    }), () => {
      a = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), s = [];
  let i, c;
  return r.pending.forEach((a) => {
    const { provider: f, prefix: u } = a;
    if (u === c && f === i)
      return;
    i = f, c = u, s.push(S(f, u));
    const l = o[f] || (o[f] = /* @__PURE__ */ Object.create(null));
    l[u] || (l[u] = []);
  }), r.pending.forEach((a) => {
    const { provider: f, prefix: u, name: l } = a, d = S(f, u), g = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    g.has(l) || (g.add(l), o[f][u].push(l));
  }), s.forEach((a) => {
    const { provider: f, prefix: u } = a;
    o[f][u].length && En(a, o[f][u]);
  }), e ? bn(e, r, s) : $t;
}, On = (t) => new Promise((e, n) => {
  const r = typeof t == "string" ? O(t) : t;
  kt([r || t], (o) => {
    if (o.length && r) {
      const s = F(r);
      if (s) {
        e({
          ..._,
          ...s
        });
        return;
      }
    }
    n(t);
  });
});
function ie(t, e) {
  const n = {
    ...t
  };
  for (const r in e) {
    const o = e[r], s = typeof o;
    r in Qt ? (o === null || o && (s === "string" || s === "number")) && (n[r] = o) : s === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const Z = {
  ...Gt,
  inline: !1
}, rt = "iconify", pt = "iconify-inline", I = "iconifyData" + Date.now();
let k = [];
function N(t) {
  for (let e = 0; e < k.length; e++) {
    const n = k[e];
    if ((typeof n.node == "function" ? n.node() : n.node) === t)
      return n;
  }
}
function ce(t, e = !1) {
  let n = N(t);
  return n ? (n.temporary && (n.temporary = e), n) : (n = {
    node: t,
    temporary: e
  }, k.push(n), n);
}
function Pn() {
  if (document.documentElement)
    return ce(document.documentElement);
  k.push({
    node: () => document.documentElement
  });
}
function jn(t) {
  k = k.filter((e) => t !== e && t !== (typeof e.node == "function" ? e.node() : e.node));
}
function B() {
  return k;
}
function An(t) {
  const e = document;
  e.readyState && e.readyState !== "loading" ? t() : e.addEventListener("DOMContentLoaded", t);
}
let L = null;
const Ln = {
  childList: !0,
  subtree: !0,
  attributes: !0
};
function ae(t) {
  if (!t.observer)
    return;
  const e = t.observer;
  e.pendingScan || (e.pendingScan = setTimeout(() => {
    delete e.pendingScan, L && L(t);
  }));
}
function $n(t, e) {
  if (!t.observer)
    return;
  const n = t.observer;
  if (!n.pendingScan)
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if (o.addedNodes && o.addedNodes.length > 0 || o.type === "attributes" && o.target[I] !== void 0) {
        n.paused || ae(t);
        return;
      }
    }
}
function ue(t, e) {
  t.observer.instance.observe(e, Ln);
}
function K(t) {
  let e = t.observer;
  if (e && e.instance)
    return;
  const n = typeof t.node == "function" ? t.node() : t.node;
  !n || !window || (e || (e = {
    paused: 0
  }, t.observer = e), e.instance = new window.MutationObserver($n.bind(null, t)), ue(t, n), e.paused || ae(t));
}
function Mt() {
  B().forEach(K);
}
function fe(t) {
  if (!t.observer)
    return;
  const e = t.observer;
  e.pendingScan && (clearTimeout(e.pendingScan), delete e.pendingScan), e.instance && (e.instance.disconnect(), delete e.instance);
}
function Mn(t) {
  const e = L !== null;
  if (L !== t && (L = t, e && B().forEach(fe)), e) {
    Mt();
    return;
  }
  An(Mt);
}
function ht(t) {
  (t ? [t] : B()).forEach((e) => {
    if (!e.observer) {
      e.observer = {
        paused: 1
      };
      return;
    }
    const n = e.observer;
    if (n.paused++, n.paused > 1 || !n.instance)
      return;
    n.instance.disconnect();
  });
}
function _n(t) {
  if (t) {
    const e = N(t);
    e && ht(e);
  } else
    ht();
}
function gt(t) {
  (t ? [t] : B()).forEach((e) => {
    if (!e.observer) {
      K(e);
      return;
    }
    const n = e.observer;
    if (n.paused && (n.paused--, !n.paused)) {
      const r = typeof e.node == "function" ? e.node() : e.node;
      if (r)
        n.instance ? ue(e, r) : K(e);
      else
        return;
    }
  });
}
function Fn(t) {
  if (t) {
    const e = N(t);
    e && gt(e);
  } else
    gt();
}
function le(t, e = !1) {
  const n = ce(t, e);
  return K(n), n;
}
function de(t) {
  const e = N(t);
  e && (fe(e), jn(t));
}
function Nn(t, e) {
  if (t.name !== e.name || t.mode !== e.mode)
    return !0;
  const n = t.customisations, r = e.customisations;
  for (const o in Z)
    if (n[o] !== r[o])
      return !0;
  return !1;
}
function Bn(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function r(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (n === "") {
    const o = parseInt(t);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== t) {
    let o = 0;
    switch (n) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let s = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(s) ? 0 : (s = s / o, s % 1 === 0 ? r(s) : 0);
    }
  }
  return e;
}
const Dn = /[\s,]+/;
function zn(t, e) {
  e.split(Dn).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
const Rn = ["width", "height"], Vn = [
  "inline",
  "hFlip",
  "vFlip"
];
function qn(t, e) {
  return t === e || t === "true" ? !0 : t === "" || t === "false" ? !1 : null;
}
function Hn(t) {
  const e = t.getAttribute("data-icon"), n = typeof e == "string" && O(e, !0);
  if (!n)
    return null;
  const r = {
    ...Z,
    inline: t.classList && t.classList.contains(pt)
  };
  Rn.forEach((c) => {
    const a = t.getAttribute("data-" + c);
    a && (r[c] = a);
  });
  const o = t.getAttribute("data-rotate");
  typeof o == "string" && (r.rotate = Bn(o));
  const s = t.getAttribute("data-flip");
  typeof s == "string" && zn(r, s), Vn.forEach((c) => {
    const a = "data-" + c, f = qn(t.getAttribute(a), a);
    typeof f == "boolean" && (r[c] = f);
  });
  const i = t.getAttribute("data-mode");
  return {
    name: e,
    icon: n,
    customisations: r,
    mode: i
  };
}
const Qn = "svg." + rt + ", i." + rt + ", span." + rt + ", i." + pt + ", span." + pt;
function Gn(t) {
  const e = [];
  return t.querySelectorAll(Qn).forEach((n) => {
    const r = n[I] || n.tagName.toLowerCase() !== "svg" ? Hn(n) : null;
    r && e.push({
      node: n,
      props: r
    });
  }), e;
}
function pe(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function he(t) {
  const e = /* @__PURE__ */ new Set(["iconify"]);
  return ["provider", "prefix"].forEach((n) => {
    t[n] && e.add("iconify--" + t[n]);
  }), e;
}
function ge(t, e, n, r) {
  const o = t.classList;
  if (r) {
    const i = r.classList;
    Array.from(i).forEach((c) => {
      o.add(c);
    });
  }
  const s = [];
  return e.forEach((i) => {
    o.contains(i) ? n.has(i) && s.push(i) : (o.add(i), s.push(i));
  }), n.forEach((i) => {
    e.has(i) || o.remove(i);
  }), s;
}
function me(t, e, n) {
  const r = t.style;
  (n || []).forEach((s) => {
    r.removeProperty(s);
  });
  const o = [];
  for (const s in e)
    r.getPropertyValue(s) || (o.push(s), r.setProperty(s, e[s]));
  return o;
}
function ye(t, e, n) {
  let r;
  try {
    r = document.createElement("span");
  } catch {
    return t;
  }
  const o = e.customisations, s = J(n, o), i = t[I], c = pe(Ut(s.body), {
    "aria-hidden": "true",
    role: "img",
    ...s.attributes
  });
  r.innerHTML = c;
  const a = r.childNodes[0], f = t.attributes;
  for (let h = 0; h < f.length; h++) {
    const E = f.item(h), v = E.name;
    v !== "class" && !a.hasAttribute(v) && a.setAttribute(v, E.value);
  }
  const u = he(e.icon), l = ge(a, u, new Set(i && i.addedClasses), t), d = me(a, o.inline ? {
    "vertical-align": "-0.125em"
  } : {}, i && i.addedStyles), g = {
    ...e,
    status: "loaded",
    addedClasses: l,
    addedStyles: d
  };
  return a[I] = g, t.parentNode && t.parentNode.replaceChild(a, t), a;
}
function Un(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Wn(t) {
  return 'url("data:image/svg+xml,' + Un(t) + '")';
}
const Kn = {
  display: "inline-block"
}, mt = {
  "background-color": "currentColor"
}, be = {
  "background-color": "transparent"
}, _t = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Ft = {
  "-webkit-mask": mt,
  mask: mt,
  background: be
};
for (const t in Ft) {
  const e = Ft[t];
  for (const n in _t)
    e[t + "-" + n] = _t[n];
}
function Nt(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Jn(t, e, n, r) {
  const o = e.customisations, s = J(n, o), i = s.attributes, c = t[I], a = pe(s.body, {
    ...i,
    width: n.width + "",
    height: n.height + ""
  }), f = he(e.icon), u = ge(t, f, new Set(c && c.addedClasses)), d = {
    "--svg": Wn(a),
    width: Nt(i.width),
    height: Nt(i.height),
    ...Kn,
    ...r ? mt : be
  };
  o.inline && (d["vertical-align"] = "-0.125em");
  const g = me(t, d, c && c.addedStyles), h = {
    ...e,
    status: "loaded",
    addedClasses: u,
    addedStyles: g
  };
  return t[I] = h, t;
}
let R = !1;
function Xn() {
  R || (R = !0, setTimeout(() => {
    R && (R = !1, T());
  }));
}
function T(t, e = !1) {
  const n = /* @__PURE__ */ Object.create(null);
  function r(o, s) {
    const { provider: i, prefix: c, name: a } = o, f = S(i, c), u = f.icons[a];
    if (u)
      return {
        status: "loaded",
        icon: u
      };
    if (f.missing.has(a))
      return {
        status: "missing"
      };
    if (s && !Tn(o)) {
      const l = n[i] || (n[i] = /* @__PURE__ */ Object.create(null));
      (l[c] || (l[c] = /* @__PURE__ */ new Set())).add(a);
    }
    return {
      status: "loading"
    };
  }
  (t ? [t] : B()).forEach((o) => {
    const s = typeof o.node == "function" ? o.node() : o.node;
    if (!s || !s.querySelectorAll)
      return;
    let i = !1, c = !1;
    function a(f, u, l) {
      if (c || (c = !0, ht(o)), f.tagName.toUpperCase() !== "SVG") {
        const d = u.mode, g = d === "mask" || (d === "bg" ? !1 : d === "style" ? l.body.indexOf("currentColor") !== -1 : null);
        if (typeof g == "boolean") {
          Jn(f, u, {
            ..._,
            ...l
          }, g);
          return;
        }
      }
      ye(f, u, l);
    }
    Gn(s).forEach(({ node: f, props: u }) => {
      const l = f[I];
      if (!l) {
        const { status: g, icon: h } = r(u.icon, !0);
        if (h) {
          a(f, u, h);
          return;
        }
        i = i || g === "loading", f[I] = {
          ...u,
          status: g
        };
        return;
      }
      let d;
      if (Nn(l, u)) {
        if (d = r(u.icon, l.name !== u.name), !d.icon) {
          i = i || d.status === "loading", Object.assign(l, {
            ...u,
            status: d.status
          });
          return;
        }
      } else {
        if (l.status !== "loading")
          return;
        if (d = r(u.icon, !1), !d.icon) {
          l.status = d.status;
          return;
        }
      }
      a(f, u, d.icon);
    }), o.temporary && !i ? de(s) : e && i ? le(s, !0) : c && o.observer && gt(o);
  });
  for (const o in n) {
    const s = n[o];
    for (const i in s) {
      const c = s[i];
      kt(Array.from(c).map((a) => ({
        provider: o,
        prefix: i,
        name: a
      })), Xn);
    }
  }
}
function Yn(t) {
  const e = N(t);
  e ? T(e) : T({
    node: t,
    temporary: !0
  }, !0);
}
function Se(t, e, n = !1) {
  const r = F(t);
  if (!r)
    return null;
  const o = O(t), s = ie(Z, e || {}), i = ye(document.createElement("span"), {
    name: t,
    icon: o,
    customisations: s
  }, r);
  return n ? i.outerHTML : i;
}
function Zn() {
  return "3.0.0";
}
function to(t, e) {
  return Se(t, e, !1);
}
function eo(t, e) {
  return Se(t, e, !0);
}
function no(t, e) {
  const n = F(t);
  if (!n)
    return null;
  const r = ie(Z, e || {});
  return J(n, r);
}
function oo(t) {
  t ? Yn(t) : T();
}
if (typeof document < "u" && typeof window < "u") {
  Pn();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((r) => {
      try {
        (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !Ht(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  setTimeout(() => {
    Mn(T), T();
  });
}
function ro(t, e) {
  te(t, e !== !1);
}
function so(t) {
  te(t, !0);
}
ee("", hn);
if (typeof document < "u" && typeof window < "u") {
  Zt();
  const t = window;
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (const n in e) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const o = e[n];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          ne(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const io = {
  getAPIConfig: Y,
  setAPIModule: ee,
  sendAPIQuery: se,
  setFetch: cn,
  getFetch: an,
  listAPIProviders: rn
}, ve = {
  _api: io,
  addAPIProvider: ne,
  loadIcons: kt,
  loadIcon: On,
  iconExists: Ke,
  getIcon: Je,
  listIcons: Ue,
  addIcon: qt,
  addCollection: Ht,
  replaceIDs: Ut,
  calculateSize: ct,
  buildIcon: J,
  getVersion: Zn,
  renderSVG: to,
  renderHTML: eo,
  renderIcon: no,
  scan: oo,
  observe: le,
  stopObserving: de,
  pauseObserver: _n,
  resumeObserver: Fn,
  enableCache: ro,
  disableCache: so
};
try {
  self.Iconify === void 0 && (self.Iconify = ve);
} catch {
}
const co = Object.prototype.toString;
function ao(t, e) {
  return co.call(t) === `[object ${e}]`;
}
function uo(t) {
  return ao(t, "String");
}
const Bt = "|svg", fo = yt({
  name: "BioIcon",
  components: { SvgIcon: st },
  props: {
    icon: {
      type: String,
      required: !0
    },
    color: String,
    size: {
      type: [String, Number],
      default: 16
    },
    spin: Boolean,
    prefix: {
      type: String,
      default: "biomap"
    }
  },
  setup(t) {
    const e = Ee(null), n = w(() => {
      var c;
      return (c = t.icon) == null ? void 0 : c.endsWith(Bt);
    }), r = w(() => {
      var c;
      return (c = t.icon) == null ? void 0 : c.replace(Bt, "");
    }), o = w(
      () => `${t.prefix ? t.prefix + ":" : ""}${t.icon}`
    ), s = async () => {
      if (et(n))
        return;
      const c = et(e);
      if (!c)
        return;
      await Pe();
      const a = et(o);
      if (!a)
        return;
      const f = ve.renderSVG(a, {});
      if (f)
        c.textContent = "", c.appendChild(f);
      else {
        const u = document.createElement("span");
        u.className = "iconify", u.dataset.icon = a, c.textContent = "", c.appendChild(u);
      }
    }, i = w(() => {
      const { size: c, color: a } = t;
      let f = c;
      return uo(c) && (f = parseInt(c, 10)), {
        fontSize: `${f}px`,
        color: a,
        display: "inline-flex"
      };
    });
    return Te(() => t.icon, s, { flush: "post" }), Oe(s), { elRef: e, getWrapStyle: i, isSvgIcon: n, getSvgIcon: r };
  }
});
function lo(t, e, n, r, o, s) {
  const i = je("SvgIcon");
  return t.isSvgIcon ? (H(), Ae(i, {
    key: 0,
    size: t.size,
    name: t.getSvgIcon,
    class: Q([t.$attrs.class, "anticon"]),
    spin: t.spin
  }, null, 8, ["size", "name", "class", "spin"])) : (H(), bt("span", {
    key: 1,
    ref: "elRef",
    class: Q([t.$attrs.class, "app-iconify anticon", t.spin && "app-iconify-spin"]),
    style: St(t.getWrapStyle)
  }, null, 6));
}
const Dt = /* @__PURE__ */ vt(fo, [["render", lo]]), ho = {
  install(t) {
    t.component(Tt.name, Tt), t.component(Dt.name, Dt), t.component(st.name, st);
  }
};
export {
  Tt as BioButton,
  Dt as BioIcon,
  ho as default
};
