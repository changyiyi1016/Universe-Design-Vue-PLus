const H = (t, n) => {
  if (t.install = (r) => {
    for (const e of [t, ...Object.values(n != null ? n : {})])
      r.component(e.name, e);
  }, n)
    for (const [r, e] of Object.entries(n))
      t[r] = e;
  return t;
}, Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  withInstall: H
}, Symbol.toStringTag, { value: "Module" })), K = Object.prototype.toString;
function g(t, n) {
  return K.call(t) === `[object ${n}]`;
}
function $(t) {
  return typeof t < "u";
}
function N(t) {
  return !$(t);
}
function S(t) {
  return t !== null && g(t, "Object");
}
function Q(t) {
  return F(t) || z(t) ? t.length === 0 : t instanceof Map || t instanceof Set ? t.size === 0 : S(t) ? Object.keys(t).length === 0 : !1;
}
function X(t) {
  return g(t, "Date");
}
function E(t) {
  return t === null;
}
function tt(t) {
  return N(t) && E(t);
}
function nt(t) {
  return N(t) || E(t);
}
function et(t) {
  return g(t, "Number");
}
function rt(t) {
  return g(t, "Promise") && S(t) && A(t.then) && A(t.catch);
}
function z(t) {
  return g(t, "String");
}
function A(t) {
  return typeof t == "function";
}
function ot(t) {
  return g(t, "Boolean");
}
function it(t) {
  return g(t, "RegExp");
}
function F(t) {
  return t && Array.isArray(t);
}
function ut(t) {
  return typeof window < "u" && g(t, "Window");
}
function at(t) {
  return S(t) && !!t.tagName;
}
function ft(t) {
  return g(t, "Map");
}
const B = typeof window > "u", ct = !B;
function st(t) {
  return /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(t);
}
const xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  is: g,
  isDef: $,
  isUnDef: N,
  isObject: S,
  isEmpty: Q,
  isDate: X,
  isNull: E,
  isNullAndUnDef: tt,
  isNullOrUnDef: nt,
  isNumber: et,
  isPromise: rt,
  isString: z,
  isFunction: A,
  isBoolean: ot,
  isRegExp: it,
  isArray: F,
  isWindow: ut,
  isElement: at,
  isMap: ft,
  isServer: B,
  isClient: ct,
  isUrl: st
}, Symbol.toStringTag, { value: "Module" }));
function D(t, n) {
  for (var r = 0; r < n.length; r++) {
    var e = n[r];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
  }
}
function L(t, n, r) {
  return n && D(t.prototype, n), r && D(t, r), t;
}
function T() {
  return (T = Object.assign || function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var e in r)
        Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
    }
    return t;
  }).apply(this, arguments);
}
function R(t, n) {
  t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
}
function U(t, n) {
  if (t == null)
    return {};
  var r, e, o = {}, i = Object.keys(t);
  for (e = 0; e < i.length; e++)
    n.indexOf(r = i[e]) >= 0 || (o[r] = t[r]);
  return o;
}
function V(t) {
  return ((n = t) != null && typeof n == "object" && Array.isArray(n) === !1) == 1 && Object.prototype.toString.call(t) === "[object Object]";
  var n;
}
var Y = Object.prototype, I = Y.toString, lt = Y.hasOwnProperty, C = /^\s*function (\w+)/;
function q(t) {
  var n, r = (n = t == null ? void 0 : t.type) !== null && n !== void 0 ? n : t;
  if (r) {
    var e = r.toString().match(C);
    return e ? e[1] : "";
  }
  return "";
}
var h = function(t) {
  var n, r;
  return V(t) !== !1 && typeof (n = t.constructor) == "function" && V(r = n.prototype) !== !1 && r.hasOwnProperty("isPrototypeOf") !== !1;
}, J = function(t) {
  return t;
}, l = J;
if (process.env.NODE_ENV !== "production") {
  var pt = typeof console < "u";
  l = pt ? function(t) {
    console.warn("[VueTypes warn]: " + t);
  } : J;
}
var _ = function(t, n) {
  return lt.call(t, n);
}, dt = Number.isInteger || function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
}, m = Array.isArray || function(t) {
  return I.call(t) === "[object Array]";
}, j = function(t) {
  return I.call(t) === "[object Function]";
}, P = function(t) {
  return h(t) && _(t, "_vueTypes_name");
}, W = function(t) {
  return h(t) && (_(t, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(n) {
    return _(t, n);
  }));
};
function x(t, n) {
  return Object.defineProperty(t.bind(n), "__original", { value: t });
}
function O(t, n, r) {
  var e;
  r === void 0 && (r = !1);
  var o = !0, i = "";
  e = h(t) ? t : { type: t };
  var f = P(e) ? e._vueTypes_name + " - " : "";
  if (W(e) && e.type !== null) {
    if (e.type === void 0 || e.type === !0 || !e.required && n === void 0)
      return o;
    m(e.type) ? (o = e.type.some(function(a) {
      return O(a, n, !0) === !0;
    }), i = e.type.map(function(a) {
      return q(a);
    }).join(" or ")) : o = (i = q(e)) === "Array" ? m(n) : i === "Object" ? h(n) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(a) {
      if (a == null)
        return "";
      var y = a.constructor.toString().match(C);
      return y ? y[1] : "";
    }(n) === i : n instanceof e.type;
  }
  if (!o) {
    var s = f + 'value "' + n + '" should be of type "' + i + '"';
    return r === !1 ? (l(s), !1) : s;
  }
  if (_(e, "validator") && j(e.validator)) {
    var u = l, c = [];
    if (l = function(a) {
      c.push(a);
    }, o = e.validator(n), l = u, !o) {
      var d = (c.length > 1 ? "* " : "") + c.join(`
* `);
      return c.length = 0, r === !1 ? (l(d), o) : d;
    }
  }
  return o;
}
function p(t, n) {
  var r = Object.defineProperties(n, { _vueTypes_name: { value: t, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? j(o) || O(this, o, !0) === !0 ? (this.default = m(o) ? function() {
      return [].concat(o);
    } : h(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (l(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), e = r.validator;
  return j(e) && (r.validator = x(e, r)), r;
}
function b(t, n) {
  var r = p(t, n);
  return Object.defineProperty(r, "validate", { value: function(e) {
    return j(this.validator) && l(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = x(e, this), this;
  } });
}
function M(t, n, r) {
  var e, o, i = (e = n, o = {}, Object.getOwnPropertyNames(e).forEach(function(a) {
    o[a] = Object.getOwnPropertyDescriptor(e, a);
  }), Object.defineProperties({}, o));
  if (i._vueTypes_name = t, !h(r))
    return i;
  var f, s, u = r.validator, c = U(r, ["validator"]);
  if (j(u)) {
    var d = i.validator;
    d && (d = (s = (f = d).__original) !== null && s !== void 0 ? s : f), i.validator = x(d ? function(a) {
      return d.call(this, a) && u.call(this, a);
    } : u, i);
  }
  return Object.assign(i, c);
}
function k(t) {
  return t.replace(/^(?!\s*$)/gm, "  ");
}
var yt = function() {
  return b("any", {});
}, vt = function() {
  return b("function", { type: Function });
}, bt = function() {
  return b("boolean", { type: Boolean });
}, gt = function() {
  return b("string", { type: String });
}, ht = function() {
  return b("number", { type: Number });
}, Ot = function() {
  return b("array", { type: Array });
}, mt = function() {
  return b("object", { type: Object });
}, jt = function() {
  return p("integer", { type: Number, validator: function(t) {
    return dt(t);
  } });
}, _t = function() {
  return p("symbol", { validator: function(t) {
    return typeof t == "symbol";
  } });
};
function wt(t, n) {
  if (n === void 0 && (n = "custom validation failed"), typeof t != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return p(t.name || "<<anonymous function>>", { validator: function(r) {
    var e = t(r);
    return e || l(this._vueTypes_name + " - " + n), e;
  } });
}
function Tt(t) {
  if (!m(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var n = 'oneOf - value should be one of "' + t.join('", "') + '".', r = t.reduce(function(e, o) {
    if (o != null) {
      var i = o.constructor;
      e.indexOf(i) === -1 && e.push(i);
    }
    return e;
  }, []);
  return p("oneOf", { type: r.length > 0 ? r : void 0, validator: function(e) {
    var o = t.indexOf(e) !== -1;
    return o || l(n), o;
  } });
}
function Pt(t) {
  if (!m(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var n = !1, r = [], e = 0; e < t.length; e += 1) {
    var o = t[e];
    if (W(o)) {
      if (P(o) && o._vueTypes_name === "oneOf") {
        r = r.concat(o.type);
        continue;
      }
      if (j(o.validator) && (n = !0), o.type !== !0 && o.type) {
        r = r.concat(o.type);
        continue;
      }
    }
    r.push(o);
  }
  return r = r.filter(function(i, f) {
    return r.indexOf(i) === f;
  }), p("oneOfType", n ? { type: r, validator: function(i) {
    var f = [], s = t.some(function(u) {
      var c = O(P(u) && u._vueTypes_name === "oneOf" ? u.type || null : u, i, !0);
      return typeof c == "string" && f.push(c), c === !0;
    });
    return s || l("oneOfType - provided value does not match any of the " + f.length + ` passed-in validators:
` + k(f.join(`
`))), s;
  } } : { type: r });
}
function St(t) {
  return p("arrayOf", { type: Array, validator: function(n) {
    var r, e = n.every(function(o) {
      return (r = O(t, o, !0)) === !0;
    });
    return e || l(`arrayOf - value validation error:
` + k(r)), e;
  } });
}
function kt(t) {
  return p("instanceOf", { type: t });
}
function At(t) {
  return p("objectOf", { type: Object, validator: function(n) {
    var r, e = Object.keys(n).every(function(o) {
      return (r = O(t, n[o], !0)) === !0;
    });
    return e || l(`objectOf - value validation error:
` + k(r)), e;
  } });
}
function Nt(t) {
  var n = Object.keys(t), r = n.filter(function(o) {
    var i;
    return !!(!((i = t[o]) === null || i === void 0) && i.required);
  }), e = p("shape", { type: Object, validator: function(o) {
    var i = this;
    if (!h(o))
      return !1;
    var f = Object.keys(o);
    if (r.length > 0 && r.some(function(u) {
      return f.indexOf(u) === -1;
    })) {
      var s = r.filter(function(u) {
        return f.indexOf(u) === -1;
      });
      return l(s.length === 1 ? 'shape - required property "' + s[0] + '" is not defined.' : 'shape - required properties "' + s.join('", "') + '" are not defined.'), !1;
    }
    return f.every(function(u) {
      if (n.indexOf(u) === -1)
        return i._vueTypes_isLoose === !0 || (l('shape - shape definition does not include a "' + u + '" property. Allowed keys: "' + n.join('", "') + '".'), !1);
      var c = O(t[u], o[u], !0);
      return typeof c == "string" && l('shape - "' + u + `" property validation error:
 ` + k(c)), c === !0;
    });
  } });
  return Object.defineProperty(e, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(e, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), e;
}
var v = function() {
  function t() {
  }
  return t.extend = function(n) {
    var r = this;
    if (m(n))
      return n.forEach(function(a) {
        return r.extend(a);
      }), this;
    var e = n.name, o = n.validate, i = o !== void 0 && o, f = n.getter, s = f !== void 0 && f, u = U(n, ["name", "validate", "getter"]);
    if (_(this, e))
      throw new TypeError('[VueTypes error]: Type "' + e + '" already defined');
    var c, d = u.type;
    return P(d) ? (delete u.type, Object.defineProperty(this, e, s ? { get: function() {
      return M(e, d, u);
    } } : { value: function() {
      var a, y = M(e, d, u);
      return y.validator && (y.validator = (a = y.validator).bind.apply(a, [y].concat([].slice.call(arguments)))), y;
    } })) : (c = s ? { get: function() {
      var a = Object.assign({}, u);
      return i ? b(e, a) : p(e, a);
    }, enumerable: !0 } : { value: function() {
      var a, y, w = Object.assign({}, u);
      return a = i ? b(e, w) : p(e, w), w.validator && (a.validator = (y = w.validator).bind.apply(y, [a].concat([].slice.call(arguments)))), a;
    }, enumerable: !0 }, Object.defineProperty(this, e, c));
  }, L(t, null, [{ key: "any", get: function() {
    return yt();
  } }, { key: "func", get: function() {
    return vt().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return bt().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return gt().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return ht().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Ot().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return mt().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return jt().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return _t();
  } }]), t;
}();
function Z(t) {
  var n;
  return t === void 0 && (t = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (n = function(r) {
    function e() {
      return r.apply(this, arguments) || this;
    }
    return R(e, r), L(e, null, [{ key: "sensibleDefaults", get: function() {
      return T({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? T({}, o !== !0 ? o : t) : {};
    } }]), e;
  }(v)).defaults = T({}, t), n;
}
v.defaults = {}, v.custom = wt, v.oneOf = Tt, v.instanceOf = kt, v.oneOfType = Pt, v.arrayOf = St, v.objectOf = At, v.shape = Nt, v.utils = { validate: function(t, n) {
  return O(n, t, !0) === !0;
}, toType: function(t, n, r) {
  return r === void 0 && (r = !1), r ? b(t, n) : p(t, n);
} };
(function(t) {
  function n() {
    return t.apply(this, arguments) || this;
  }
  return R(n, t), n;
})(Z());
const G = Z({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  object: void 0,
  integer: void 0
});
G.extend([
  {
    name: "style",
    getter: !0,
    type: [String, Object],
    default: void 0
  },
  {
    name: "VNodeChild",
    getter: !0,
    type: void 0
  }
]);
const Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  propTypes: G
}, Symbol.toStringTag, { value: "Module" }));
export {
  xt as lib,
  Et as plugin,
  Dt as types
};
