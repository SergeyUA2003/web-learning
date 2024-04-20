var V4 = Object.defineProperty
    , Z4 = Object.defineProperties
    , G4 = Object.getOwnPropertyDescriptors
    , Fc = Object.getOwnPropertySymbols
    , Y4 = Object.prototype.hasOwnProperty
    , X4 = Object.prototype.propertyIsEnumerable
    , Bc = (e,t,n)=>t in e ? V4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
    , Mt = (e,t)=>{
    for (var n in t || (t = {}))
        Y4.call(t, n) && Bc(e, n, t[n]);
    if (Fc)
        for (var n of Fc(t))
            X4.call(t, n) && Bc(e, n, t[n]);
    return e
}
    , $c = (e,t)=>Z4(e, G4(t));
!function() {
    function e(t) {
        var o = r[t];
        if (void 0 !== o)
            return o.exports;
        var i = r[t] = {
            exports: {}
        };
        return n[t].call(i.exports, i, i.exports, e),
            i.exports
    }
    var t, n = {
        2295: function(e, t, n) {
            "use strict";
            t._ = void 0;
            var r = n(3134);
            Object.defineProperty(t, "_", {
                enumerable: !0,
                get: function() {
                    return r.useLocalStorage
                }
            });
            var o = n(9567);
            Object.defineProperty(t, "DC", {
                enumerable: !0,
                get: function() {
                    return o.deleteFromStorage
                }
            }),
                r.useLocalStorage
        },
        5826: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.isBrowser = void 0,
                t.isBrowser = function() {
                    return "undefined" != typeof window && void 0 !== window.document
                }
        },
        9567: function(e, t, n) {
            "use strict";
            function r(e) {
                return !!e && e.type === t.LOCAL_STORAGE_CHANGE_EVENT_NAME
            }
            function o(e, n) {
                if (u.isBrowser())
                    try {
                        a.storage.setItem(e, "object" == typeof n ? JSON.stringify(n) : "" + n),
                            window.dispatchEvent(new CustomEvent(t.LOCAL_STORAGE_CHANGE_EVENT_NAME,{
                                detail: {
                                    key: e,
                                    value: n
                                }
                            }))
                    } catch (e) {
                        throw e instanceof TypeError && e.message.includes("circular structure") ? new TypeError("The object that was given to the writeStorage function has circular references.\nFor more information, check here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value") : e
                    }
            }
            function i(e) {
                u.isBrowser() && (a.storage.removeItem(e),
                    window.dispatchEvent(new CustomEvent(t.LOCAL_STORAGE_CHANGE_EVENT_NAME,{
                        detail: {
                            key: e,
                            value: null
                        }
                    })))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.deleteFromStorage = t.writeStorage = t.isTypeOfLocalStorageChanged = t.LOCAL_STORAGE_CHANGE_EVENT_NAME = void 0;
            var a = n(9003)
                , u = n(5826);
            t.LOCAL_STORAGE_CHANGE_EVENT_NAME = "onLocalStorageChange",
                function() {
                    function e(e, t) {
                        var n, r;
                        void 0 === t && (t = {
                            bubbles: !1,
                            cancelable: !1
                        });
                        var o = document.createEvent("CustomEvent");
                        return o.initCustomEvent(e, null !== (n = null == t ? void 0 : t.bubbles) && void 0 !== n && n, null !== (r = null == t ? void 0 : t.cancelable) && void 0 !== r && r, null == t ? void 0 : t.detail),
                            o
                    }
                    u.isBrowser() && "function" != typeof n.g.window.CustomEvent && (window.CustomEvent = e)
                }(),
                t.isTypeOfLocalStorageChanged = r,
                t.writeStorage = o,
                t.deleteFromStorage = i
        },
        9003: function(e, t, n) {
            "use strict";
            function r() {
                try {
                    var e = "@rehooks/local-storage:" + (new Date).toISOString();
                    return localStorage.setItem(e, e),
                        localStorage.removeItem(e),
                        !0
                } catch (e) {
                    return o.isBrowser() && e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && localStorage && 0 !== localStorage.length
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.storage = t.MemoryStorageProxy = t.LocalStorageProxy = t.localStorageAvailable = void 0;
            var o = n(5826);
            t.localStorageAvailable = r;
            var i = function() {
                function e() {}
                return e.prototype.getItem = function(e) {
                    return localStorage.getItem(e)
                }
                    ,
                    e.prototype.setItem = function(e, t) {
                        localStorage.setItem(e, t)
                    }
                    ,
                    e.prototype.removeItem = function(e) {
                        localStorage.removeItem(e)
                    }
                    ,
                    e
            }();
            t.LocalStorageProxy = i;
            var a = function() {
                function e() {
                    this._memoryStorage = new Map
                }
                return e.prototype.getItem = function(e) {
                    var t;
                    return null !== (t = this._memoryStorage.get(e)) && void 0 !== t ? t : null
                }
                    ,
                    e.prototype.setItem = function(e, t) {
                        this._memoryStorage.set(e, t)
                    }
                    ,
                    e.prototype.removeItem = function(e) {
                        this._memoryStorage.delete(e)
                    }
                    ,
                    e
            }();
            t.MemoryStorageProxy = a;
            var u = function(e) {
                return e ? new i : new a
            };
            t.storage = u(r())
        },
        3134: function(e, t, n) {
            "use strict";
            function r(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }
            function o(e, t) {
                void 0 === t && (t = null);
                var n = c.useState(null === u.storage.getItem(e) ? t : r(u.storage.getItem(e)))
                    , o = n[0]
                    , s = n[1]
                    , l = c.useCallback((function(t) {
                        i.isTypeOfLocalStorageChanged(t) ? t.detail.key === e && s(t.detail.value) : t.key === e && s(null === t.newValue ? null : r(t.newValue))
                    }
                ), [s, e]);
                c.useEffect((function() {
                        if (a.isBrowser()) {
                            var n = function(e) {
                                l(e)
                            };
                            return window.addEventListener(i.LOCAL_STORAGE_CHANGE_EVENT_NAME, n),
                                window.addEventListener("storage", n),
                            null === u.storage.getItem(e) && null !== t && i.writeStorage(e, t),
                                function() {
                                    window.removeEventListener(i.LOCAL_STORAGE_CHANGE_EVENT_NAME, n),
                                        window.removeEventListener("storage", n)
                                }
                        }
                    }
                ), [e, t, l]);
                var f = c.useCallback((function(t) {
                        return i.writeStorage(e, t)
                    }
                ), [e])
                    , p = c.useCallback((function() {
                        return i.deleteFromStorage(e)
                    }
                ), [e]);
                return [null != o ? o : t, f, p]
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.useLocalStorage = void 0;
            var i = n(9567)
                , a = n(5826)
                , u = n(9003)
                , c = n(1214);
            t.useLocalStorage = o
        },
        3032: function(e, t) {
            var n, r;
            !function() {
                "use strict";
                function o() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var r = typeof n;
                            if ("string" === r || "number" === r)
                                e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var a = o.apply(null, n);
                                    a && e.push(a)
                                }
                            } else if ("object" === r) {
                                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                    e.push(n.toString());
                                    continue
                                }
                                for (var u in n)
                                    i.call(n, u) && n[u] && e.push(u)
                            }
                        }
                    }
                    return e.join(" ")
                }
                var i = {}.hasOwnProperty;
                e.exports ? (o.default = o,
                    e.exports = o) : (n = [],
                void 0 !== (r = function() {
                    return o
                }
                    .apply(t, n)) && (e.exports = r))
            }()
        },
        1064: function(e, t, n) {
            var r = n(3420);
            e.exports = r
        },
        9678: function(e, t, n) {
            n(5434);
            var r = n(7140);
            e.exports = r.escape
        },
        960: function(e, t, n) {
            var r = n(5705)
                , o = n(9699)
                , i = TypeError;
            e.exports = function(e) {
                if (r(e))
                    return e;
                throw i(o(e) + " is not a function")
            }
        },
        8130: function(e, t, n) {
            var r = n(1137)
                , o = String
                , i = TypeError;
            e.exports = function(e) {
                if (r(e))
                    return e;
                throw i(o(e) + " is not an object")
            }
        },
        2328: function(e, t, n) {
            var r = n(8191)
                , o = n(4877)
                , i = n(4448)
                , a = function(e) {
                return function(t, n, a) {
                    var u, c = r(t), s = i(c), l = o(a, s);
                    if (e && n != n) {
                        for (; s > l; )
                            if ((u = c[l++]) != u)
                                return !0
                    } else
                        for (; s > l; l++)
                            if ((e || l in c) && c[l] === n)
                                return e || l || 0;
                    return !e && -1
                }
            };
            e.exports = {
                includes: a(!0),
                indexOf: a(!1)
            }
        },
        1450: function(e, t, n) {
            var r = n(3108)
                , o = r({}.toString)
                , i = r("".slice);
            e.exports = function(e) {
                return i(o(e), 8, -1)
            }
        },
        1084: function(e, t, n) {
            var r = n(8507)
                , o = n(5705)
                , i = n(1450)
                , a = n(888)("toStringTag")
                , u = Object
                , c = "Arguments" == i(function() {
                return arguments
            }())
                , s = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            };
            e.exports = r ? i : function(e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = s(t = u(e), a)) ? n : c ? i(t) : "Object" == (r = i(t)) && o(t.callee) ? "Arguments" : r
            }
        },
        497: function(e, t, n) {
            var r = n(7025)
                , o = n(1680)
                , i = n(6460)
                , a = n(7145);
            e.exports = function(e, t, n) {
                for (var u = o(t), c = a.f, s = i.f, l = 0; l < u.length; l++) {
                    var f = u[l];
                    !r(e, f) && (!n || !r(n, f)) && c(e, f, s(t, f))
                }
            }
        },
        7951: function(e, t, n) {
            var r = n(3745)
                , o = n(7145)
                , i = n(8629);
            e.exports = r ? function(e, t, n) {
                    return o.f(e, t, i(1, n))
                }
                : function(e, t, n) {
                    return e[t] = n,
                        e
                }
        },
        8629: function(e) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        4250: function(e, t, n) {
            var r = n(5705)
                , o = n(7145)
                , i = n(6465)
                , a = n(7120);
            e.exports = function(e, t, n, u) {
                u || (u = {});
                var c = u.enumerable
                    , s = void 0 !== u.name ? u.name : t;
                if (r(n) && i(n, s, u),
                    u.global)
                    c ? e[t] = n : a(t, n);
                else {
                    try {
                        u.unsafe ? e[t] && (c = !0) : delete e[t]
                    } catch (e) {}
                    c ? e[t] = n : o.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !u.nonConfigurable,
                        writable: !u.nonWritable
                    })
                }
                return e
            }
        },
        7120: function(e, t, n) {
            var r = n(8853)
                , o = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    o(r, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        },
        3745: function(e, t, n) {
            var r = n(4958);
            e.exports = !r((function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }
            ))
        },
        1924: function(e) {
            var t = "object" == typeof document && document.all
                , n = void 0 === t && void 0 !== t;
            e.exports = {
                all: t,
                IS_HTMLDDA: n
            }
        },
        3379: function(e, t, n) {
            var r = n(8853)
                , o = n(1137)
                , i = r.document
                , a = o(i) && o(i.createElement);
            e.exports = function(e) {
                return a ? i.createElement(e) : {}
            }
        },
        7248: function(e) {
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        },
        8850: function(e, t, n) {
            var r, o, i = n(8853), a = n(7248), u = i.process, c = i.Deno, s = u && u.versions || c && c.version, l = s && s.v8;
            l && (o = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
            !o && a && ((!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && ((r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]))),
                e.exports = o
        },
        5396: function(e) {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        5815: function(e, t, n) {
            var r = n(8853)
                , o = n(6460).f
                , i = n(7951)
                , a = n(4250)
                , u = n(7120)
                , c = n(497)
                , s = n(3841);
            e.exports = function(e, t) {
                var n, l, f, p, d, v = e.target, y = e.global, m = e.stat;
                if (n = y ? r : m ? r[v] || u(v, {}) : (r[v] || {}).prototype)
                    for (l in t) {
                        if (p = t[l],
                            e.dontCallGetSet ? f = (d = o(n, l)) && d.value : f = n[l],
                        !s(y ? l : v + (m ? "." : "#") + l, e.forced) && void 0 !== f) {
                            if (typeof p == typeof f)
                                continue;
                            c(p, f)
                        }
                        (e.sham || f && f.sham) && i(p, "sham", !0),
                            a(n, l, p, e)
                    }
            }
        },
        4958: function(e) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        7855: function(e, t, n) {
            var r = n(4958);
            e.exports = !r((function() {
                    var e = function() {}
                        .bind();
                    return "function" != typeof e || e.hasOwnProperty("prototype")
                }
            ))
        },
        981: function(e, t, n) {
            var r = n(7855)
                , o = Function.prototype.call;
            e.exports = r ? o.bind(o) : function() {
                return o.apply(o, arguments)
            }
        },
        8886: function(e, t, n) {
            var r = n(3745)
                , o = n(7025)
                , i = Function.prototype
                , a = r && Object.getOwnPropertyDescriptor
                , u = o(i, "name")
                , c = u && "something" === function() {}
                .name
                , s = u && (!r || r && a(i, "name").configurable);
            e.exports = {
                EXISTS: u,
                PROPER: c,
                CONFIGURABLE: s
            }
        },
        3108: function(e, t, n) {
            var r = n(7855)
                , o = Function.prototype
                , i = o.call
                , a = r && o.bind.bind(i, i);
            e.exports = r ? a : function(e) {
                return function() {
                    return i.apply(e, arguments)
                }
            }
        },
        8648: function(e, t, n) {
            var r = n(8853)
                , o = n(5705)
                , i = function(e) {
                return o(e) ? e : void 0
            };
            e.exports = function(e, t) {
                return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
            }
        },
        4248: function(e, t, n) {
            var r = n(960)
                , o = n(4569);
            e.exports = function(e, t) {
                var n = e[t];
                return o(n) ? void 0 : r(n)
            }
        },
        8853: function(e, t, n) {
            var r = function(e) {
                return e && e.Math == Math && e
            };
            e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() {
                return this
            }() || this || Function("return this")()
        },
        7025: function(e, t, n) {
            var r = n(3108)
                , o = n(7403)
                , i = r({}.hasOwnProperty);
            e.exports = Object.hasOwn || function(e, t) {
                return i(o(e), t)
            }
        },
        229: function(e) {
            e.exports = {}
        },
        5031: function(e, t, n) {
            var r = n(3745)
                , o = n(4958)
                , i = n(3379);
            e.exports = !r && !o((function() {
                    return 7 != Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }
            ))
        },
        897: function(e, t, n) {
            var r = n(3108)
                , o = n(4958)
                , i = n(1450)
                , a = Object
                , u = r("".split);
            e.exports = o((function() {
                    return !a("z").propertyIsEnumerable(0)
                }
            )) ? function(e) {
                    return "String" == i(e) ? u(e, "") : a(e)
                }
                : a
        },
        3155: function(e, t, n) {
            var r = n(3108)
                , o = n(5705)
                , i = n(3089)
                , a = r(Function.toString);
            o(i.inspectSource) || (i.inspectSource = function(e) {
                    return a(e)
                }
            ),
                e.exports = i.inspectSource
        },
        5687: function(e, t, n) {
            var r, o, i, a = n(4291), u = n(8853), c = n(1137), s = n(7951), l = n(7025), f = n(3089), p = n(8501), d = n(229), v = "Object already initialized", y = u.TypeError, m = u.WeakMap, h = function(e) {
                return i(e) ? o(e) : r(e, {})
            }, b = function(e) {
                return function(t) {
                    var n;
                    if (!c(t) || (n = o(t)).type !== e)
                        throw y("Incompatible receiver, " + e + " required");
                    return n
                }
            };
            if (a || f.state) {
                var g = f.state || (f.state = new m);
                g.get = g.get,
                    g.has = g.has,
                    g.set = g.set,
                    r = function(e, t) {
                        if (g.has(e))
                            throw y(v);
                        return t.facade = e,
                            g.set(e, t),
                            t
                    }
                    ,
                    o = function(e) {
                        return g.get(e) || {}
                    }
                    ,
                    i = function(e) {
                        return g.has(e)
                    }
            } else {
                var w = p("state");
                d[w] = !0,
                    r = function(e, t) {
                        if (l(e, w))
                            throw y(v);
                        return t.facade = e,
                            s(e, w, t),
                            t
                    }
                    ,
                    o = function(e) {
                        return l(e, w) ? e[w] : {}
                    }
                    ,
                    i = function(e) {
                        return l(e, w)
                    }
            }
            e.exports = {
                set: r,
                get: o,
                has: i,
                enforce: h,
                getterFor: b
            }
        },
        5705: function(e, t, n) {
            var r = n(1924)
                , o = r.all;
            e.exports = r.IS_HTMLDDA ? function(e) {
                    return "function" == typeof e || e === o
                }
                : function(e) {
                    return "function" == typeof e
                }
        },
        3841: function(e, t, n) {
            var r = n(4958)
                , o = n(5705)
                , i = /#|\.prototype\./
                , a = function(e, t) {
                var n = c[u(e)];
                return n == l || n != s && (o(t) ? r(t) : !!t)
            }
                , u = a.normalize = function(e) {
                return String(e).replace(i, ".").toLowerCase()
            }
                , c = a.data = {}
                , s = a.NATIVE = "N"
                , l = a.POLYFILL = "P";
            e.exports = a
        },
        4569: function(e) {
            e.exports = function(e) {
                return null == e
            }
        },
        1137: function(e, t, n) {
            var r = n(5705)
                , o = n(1924)
                , i = o.all;
            e.exports = o.IS_HTMLDDA ? function(e) {
                    return "object" == typeof e ? null !== e : r(e) || e === i
                }
                : function(e) {
                    return "object" == typeof e ? null !== e : r(e)
                }
        },
        5555: function(e) {
            e.exports = !1
        },
        8909: function(e, t, n) {
            var r = n(8648)
                , o = n(5705)
                , i = n(262)
                , a = n(6300)
                , u = Object;
            e.exports = a ? function(e) {
                    return "symbol" == typeof e
                }
                : function(e) {
                    var t = r("Symbol");
                    return o(t) && i(t.prototype, u(e))
                }
        },
        4448: function(e, t, n) {
            var r = n(5964);
            e.exports = function(e) {
                return r(e.length)
            }
        },
        6465: function(e, t, n) {
            var r = n(3108)
                , o = n(4958)
                , i = n(5705)
                , a = n(7025)
                , u = n(3745)
                , c = n(8886).CONFIGURABLE
                , s = n(3155)
                , l = n(5687)
                , f = l.enforce
                , p = l.get
                , d = String
                , v = Object.defineProperty
                , y = r("".slice)
                , m = r("".replace)
                , h = r([].join)
                , b = u && !o((function() {
                        return 8 !== v((function() {}
                        ), "length", {
                            value: 8
                        }).length
                    }
                ))
                , g = String(String).split("String")
                , w = e.exports = function(e, t, n) {
                    "Symbol(" === y(d(t), 0, 7) && (t = "[" + m(d(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
                    n && n.getter && (t = "get " + t),
                    n && n.setter && (t = "set " + t),
                    (!a(e, "name") || c && e.name !== t) && (u ? v(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t),
                    b && n && a(n, "arity") && e.length !== n.arity && v(e, "length", {
                        value: n.arity
                    });
                    try {
                        n && a(n, "constructor") && n.constructor ? u && v(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (e) {}
                    var r = f(e);
                    return a(r, "source") || (r.source = h(g, "string" == typeof t ? t : "")),
                        e
                }
            ;
            Function.prototype.toString = w((function() {
                    return i(this) && p(this).source || s(this)
                }
            ), "toString")
        },
        7087: function(e) {
            var t = Math.ceil
                , n = Math.floor;
            e.exports = Math.trunc || function(e) {
                var r = +e;
                return (r > 0 ? n : t)(r)
            }
        },
        7145: function(e, t, n) {
            var r = n(3745)
                , o = n(5031)
                , i = n(1944)
                , a = n(8130)
                , u = n(7069)
                , c = TypeError
                , s = Object.defineProperty
                , l = Object.getOwnPropertyDescriptor
                , f = "enumerable"
                , p = "configurable"
                , d = "writable";
            t.f = r ? i ? function(e, t, n) {
                    if (a(e),
                        t = u(t),
                        a(n),
                    "function" == typeof e && "prototype" === t && "value"in n && d in n && !n[d]) {
                        var r = l(e, t);
                        r && r[d] && (e[t] = n.value,
                            n = {
                                configurable: p in n ? n[p] : r[p],
                                enumerable: f in n ? n[f] : r[f],
                                writable: !1
                            })
                    }
                    return s(e, t, n)
                }
                : s : function(e, t, n) {
                if (a(e),
                    t = u(t),
                    a(n),
                    o)
                    try {
                        return s(e, t, n)
                    } catch (e) {}
                if ("get"in n || "set"in n)
                    throw c("Accessors not supported");
                return "value"in n && (e[t] = n.value),
                    e
            }
        },
        6460: function(e, t, n) {
            var r = n(3745)
                , o = n(981)
                , i = n(1997)
                , a = n(8629)
                , u = n(8191)
                , c = n(7069)
                , s = n(7025)
                , l = n(5031)
                , f = Object.getOwnPropertyDescriptor;
            t.f = r ? f : function(e, t) {
                if (e = u(e),
                    t = c(t),
                    l)
                    try {
                        return f(e, t)
                    } catch (e) {}
                if (s(e, t))
                    return a(!o(i.f, e, t), e[t])
            }
        },
        4637: function(e, t, n) {
            var r = n(1510)
                , o = n(5396).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return r(e, o)
            }
        },
        4518: function(e, t) {
            t.f = Object.getOwnPropertySymbols
        },
        262: function(e, t, n) {
            var r = n(3108);
            e.exports = r({}.isPrototypeOf)
        },
        1510: function(e, t, n) {
            var r = n(3108)
                , o = n(7025)
                , i = n(8191)
                , a = n(2328).indexOf
                , u = n(229)
                , c = r([].push);
            e.exports = function(e, t) {
                var n, r = i(e), s = 0, l = [];
                for (n in r)
                    !o(u, n) && o(r, n) && c(l, n);
                for (; t.length > s; )
                    o(r, n = t[s++]) && (~a(l, n) || c(l, n));
                return l
            }
        },
        1997: function(e, t) {
            "use strict";
            var n = {}.propertyIsEnumerable
                , r = Object.getOwnPropertyDescriptor
                , o = r && !n.call({
                1: 2
            }, 1);
            t.f = o ? function(e) {
                    var t = r(this, e);
                    return !!t && t.enumerable
                }
                : n
        },
        2356: function(e, t, n) {
            var r = n(981)
                , o = n(5705)
                , i = n(1137)
                , a = TypeError;
            e.exports = function(e, t) {
                var n, u;
                if ("string" === t && o(n = e.toString) && !i(u = r(n, e)) || o(n = e.valueOf) && !i(u = r(n, e)) || "string" !== t && o(n = e.toString) && !i(u = r(n, e)))
                    return u;
                throw a("Can't convert object to primitive value")
            }
        },
        1680: function(e, t, n) {
            var r = n(8648)
                , o = n(3108)
                , i = n(4637)
                , a = n(4518)
                , u = n(8130)
                , c = o([].concat);
            e.exports = r("Reflect", "ownKeys") || function(e) {
                var t = i.f(u(e))
                    , n = a.f;
                return n ? c(t, n(e)) : t
            }
        },
        7140: function(e, t, n) {
            var r = n(8853);
            e.exports = r
        },
        9225: function(e, t, n) {
            var r = n(4569)
                , o = TypeError;
            e.exports = function(e) {
                if (r(e))
                    throw o("Can't call method on " + e);
                return e
            }
        },
        8501: function(e, t, n) {
            var r = n(5230)
                , o = n(3786)
                , i = r("keys");
            e.exports = function(e) {
                return i[e] || (i[e] = o(e))
            }
        },
        3089: function(e, t, n) {
            var r = n(8853)
                , o = n(7120)
                , i = "__core-js_shared__"
                , a = r[i] || o(i, {});
            e.exports = a
        },
        5230: function(e, t, n) {
            var r = n(5555)
                , o = n(3089);
            (e.exports = function(e, t) {
                    return o[e] || (o[e] = void 0 !== t ? t : {})
                }
            )("versions", []).push({
                version: "3.31.0",
                mode: r ? "pure" : "global",
                copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        8335: function(e, t, n) {
            var r = n(8850)
                , o = n(4958)
                , i = n(8853).String;
            e.exports = !!Object.getOwnPropertySymbols && !o((function() {
                    var e = Symbol();
                    return !i(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && r && r < 41
                }
            ))
        },
        4877: function(e, t, n) {
            var r = n(4862)
                , o = Math.max
                , i = Math.min;
            e.exports = function(e, t) {
                var n = r(e);
                return n < 0 ? o(n + t, 0) : i(n, t)
            }
        },
        8191: function(e, t, n) {
            var r = n(897)
                , o = n(9225);
            e.exports = function(e) {
                return r(o(e))
            }
        },
        4862: function(e, t, n) {
            var r = n(7087);
            e.exports = function(e) {
                var t = +e;
                return t != t || 0 === t ? 0 : r(t)
            }
        },
        5964: function(e, t, n) {
            var r = n(4862)
                , o = Math.min;
            e.exports = function(e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0
            }
        },
        7403: function(e, t, n) {
            var r = n(9225)
                , o = Object;
            e.exports = function(e) {
                return o(r(e))
            }
        },
        6744: function(e, t, n) {
            var r = n(981)
                , o = n(1137)
                , i = n(8909)
                , a = n(4248)
                , u = n(2356)
                , c = n(888)
                , s = TypeError
                , l = c("toPrimitive");
            e.exports = function(e, t) {
                if (!o(e) || i(e))
                    return e;
                var n, c = a(e, l);
                if (c) {
                    if (void 0 === t && (t = "default"),
                        n = r(c, e, t),
                    !o(n) || i(n))
                        return n;
                    throw s("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"),
                    u(e, t)
            }
        },
        7069: function(e, t, n) {
            var r = n(6744)
                , o = n(8909);
            e.exports = function(e) {
                var t = r(e, "string");
                return o(t) ? t : t + ""
            }
        },
        8507: function(e, t, n) {
            var r = {};
            r[n(888)("toStringTag")] = "z",
                e.exports = "[object z]" === String(r)
        },
        8492: function(e, t, n) {
            var r = n(1084)
                , o = String;
            e.exports = function(e) {
                if ("Symbol" === r(e))
                    throw TypeError("Cannot convert a Symbol value to a string");
                return o(e)
            }
        },
        9699: function(e) {
            var t = String;
            e.exports = function(e) {
                try {
                    return t(e)
                } catch (e) {
                    return "Object"
                }
            }
        },
        3786: function(e, t, n) {
            var r = n(3108)
                , o = 0
                , i = Math.random()
                , a = r(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36)
            }
        },
        6300: function(e, t, n) {
            var r = n(8335);
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        1944: function(e, t, n) {
            var r = n(3745)
                , o = n(4958);
            e.exports = r && o((function() {
                    return 42 != Object.defineProperty((function() {}
                    ), "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                }
            ))
        },
        4291: function(e, t, n) {
            var r = n(8853)
                , o = n(5705)
                , i = r.WeakMap;
            e.exports = o(i) && /native code/.test(String(i))
        },
        888: function(e, t, n) {
            var r = n(8853)
                , o = n(5230)
                , i = n(7025)
                , a = n(3786)
                , u = n(8335)
                , c = n(6300)
                , s = r.Symbol
                , l = o("wks")
                , f = c ? s.for || s : s && s.withoutSetter || a;
            e.exports = function(e) {
                return i(l, e) || (l[e] = u && i(s, e) ? s[e] : f("Symbol." + e)),
                    l[e]
            }
        },
        5434: function(e, t, n) {
            "use strict";
            var r = n(5815)
                , o = n(3108)
                , i = n(8492)
                , a = o("".charAt)
                , u = o("".charCodeAt)
                , c = o(/./.exec)
                , s = o(1..toString)
                , l = o("".toUpperCase)
                , f = /[\w*+\-./@]/
                , p = function(e, t) {
                for (var n = s(e, 16); n.length < t; )
                    n = "0" + n;
                return n
            };
            r({
                global: !0
            }, {
                escape: function(e) {
                    for (var t, n, r = i(e), o = "", s = r.length, d = 0; d < s; )
                        t = a(r, d++),
                            c(f, t) ? o += t : o += (n = u(t, 0)) < 256 ? "%" + p(n, 2) : "%u" + l(p(n, 4));
                    return o
                }
            })
        },
        3420: function(e, t, n) {
            var r = n(9678);
            e.exports = r
        },
        5357: function(e, t, n) {
            "use strict";
            function r(e) {
                return i.isMemo(e) ? s : l[e.$$typeof] || a
            }
            function o(e, t, n) {
                if ("string" != typeof t) {
                    if (m) {
                        var i = y(t);
                        i && i !== m && o(e, i, n)
                    }
                    var a = p(t);
                    d && (a = a.concat(d(t)));
                    for (var c = r(e), s = r(t), l = 0; l < a.length; ++l) {
                        var h = a[l];
                        if (!(u[h] || n && n[h] || s && s[h] || c && c[h])) {
                            var b = v(t, h);
                            try {
                                f(e, h, b)
                            } catch (e) {}
                        }
                    }
                }
                return e
            }
            var i = n(3981)
                , a = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }
                , u = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            }
                , c = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }
                , s = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            }
                , l = {};
            l[i.ForwardRef] = c,
                l[i.Memo] = s;
            var f = Object.defineProperty
                , p = Object.getOwnPropertyNames
                , d = Object.getOwnPropertySymbols
                , v = Object.getOwnPropertyDescriptor
                , y = Object.getPrototypeOf
                , m = Object.prototype;
            e.exports = o
        },
        8408: function(e) {
            "use strict";
            var t = function(e, t, n, r, o, i, a, u) {
                if (!e) {
                    var c;
                    if (void 0 === t)
                        c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var s = [n, r, o, i, a, u]
                            , l = 0;
                        (c = new Error(t.replace(/%s/g, (function() {
                                return s[l++]
                            }
                        )))).name = "Invariant Violation"
                    }
                    throw c.framesToPop = 1,
                        c
                }
            };
            e.exports = t
        },
        5048: function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function o() {
                function e() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    var o = null;
                    return n.forEach((function(e) {
                            if (null == o) {
                                var n = e.apply(void 0, t);
                                null != n && (o = n)
                            }
                        }
                    )),
                        o
                }
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                return (0,
                    i.default)(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = o;
            var i = r(n(4024));
            e.exports = t.default
        },
        4024: function(e, t) {
            "use strict";
            function n(e) {
                function t(t, n, r, o, i, a) {
                    var u = o || "<<anonymous>>"
                        , c = a || r;
                    if (null == n[r])
                        return t ? new Error("Required " + i + " `" + c + "` was not specified in `" + u + "`.") : null;
                    for (var s = arguments.length, l = Array(s > 6 ? s - 6 : 0), f = 6; f < s; f++)
                        l[f - 6] = arguments[f];
                    return e.apply(void 0, [n, r, u, i, c].concat(l))
                }
                var n = t.bind(null, !1);
                return n.isRequired = t.bind(null, !0),
                    n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = n,
                e.exports = t.default
        },
        4698: function(e, t, n) {
            "use strict";
            function r() {}
            function o() {}
            var i = n(9924);
            o.resetWarningCache = r,
                e.exports = function() {
                    function e(e, t, n, r, o, a) {
                        if (a !== i) {
                            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw u.name = "Invariant Violation",
                                u
                        }
                    }
                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: o,
                        resetWarningCache: r
                    };
                    return n.PropTypes = n,
                        n
                }
        },
        8246: function(e, t, n) {
            e.exports = n(4698)()
        },
        9924: function(e) {
            "use strict";
            var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            e.exports = t
        },
        9989: function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function o(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            function a(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , c = n(1214)
                , s = (r(c),
                r(n(8246)))
                , l = function(e) {
                function t() {
                    return o(this, t),
                        i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return a(t, e),
                    u(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.contentDidMount()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.contentDidUpdate()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return c.Children.only(this.props.children)
                        }
                    }]),
                    t
            }(c.Component);
            l.propTypes = {
                children: s.default.element.isRequired,
                contentDidMount: s.default.func.isRequired,
                contentDidUpdate: s.default.func.isRequired
            },
                t.default = l
        },
        9177: function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.FrameContextConsumer = t.FrameContextProvider = t.useFrame = t.FrameContext = void 0;
            var o = r(n(1214))
                , i = void 0
                , a = void 0;
            "undefined" != typeof document && (i = document),
            "undefined" != typeof window && (a = window);
            var u = t.FrameContext = o.default.createContext({
                document: i,
                window: a
            })
                , c = (t.useFrame = function() {
                return o.default.useContext(u)
            }
                ,
                u.Provider)
                , s = u.Consumer;
            t.FrameContextProvider = c,
                t.FrameContextConsumer = s
        },
        8372: function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function o(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            function a(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.Frame = void 0;
            var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
                , c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , s = n(1214)
                , l = r(s)
                , f = r(n(6083))
                , p = r(n(8246))
                , d = n(9177)
                , v = r(n(9989))
                , y = t.Frame = function(e) {
                function t(e, n) {
                    o(this, t);
                    var r = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    return r.setRef = function(e) {
                        r.nodeRef.current = e;
                        var t = r.props.forwardedRef;
                        "function" == typeof t ? t(e) : t && (t.current = e)
                    }
                        ,
                        r.handleLoad = function() {
                            clearInterval(r.loadCheck),
                            r.state.iframeLoaded || r.setState({
                                iframeLoaded: !0
                            })
                        }
                        ,
                        r.loadCheck = function() {
                            return setInterval((function() {
                                    r.handleLoad()
                                }
                            ), 500)
                        }
                        ,
                        r._isMounted = !1,
                        r.nodeRef = l.default.createRef(),
                        r.state = {
                            iframeLoaded: !1
                        },
                        r
                }
                return a(t, e),
                    c(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this._isMounted = !0,
                            this.getDoc() && this.nodeRef.current.contentWindow.addEventListener("DOMContentLoaded", this.handleLoad)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._isMounted = !1,
                                this.nodeRef.current.removeEventListener("DOMContentLoaded", this.handleLoad)
                        }
                    }, {
                        key: "getDoc",
                        value: function() {
                            return this.nodeRef.current ? this.nodeRef.current.contentDocument : null
                        }
                    }, {
                        key: "getMountTarget",
                        value: function() {
                            var e = this.getDoc();
                            return this.props.mountTarget ? e.querySelector(this.props.mountTarget) : e.body.children[0]
                        }
                    }, {
                        key: "renderFrameContents",
                        value: function() {
                            if (!this._isMounted)
                                return null;
                            var e = this.getDoc();
                            if (!e)
                                return null;
                            var t = this.props.contentDidMount
                                , n = this.props.contentDidUpdate
                                , r = e.defaultView || e.parentView
                                , o = l.default.createElement(v.default, {
                                contentDidMount: t,
                                contentDidUpdate: n
                            }, l.default.createElement(d.FrameContextProvider, {
                                value: {
                                    document: e,
                                    window: r
                                }
                            }, l.default.createElement("div", {
                                className: "frame-content"
                            }, this.props.children)))
                                , i = this.getMountTarget();
                            return [f.default.createPortal(this.props.head, this.getDoc().head), f.default.createPortal(o, i)]
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = u({}, this.props, {
                                srcDoc: this.props.initialContent,
                                children: void 0
                            });
                            return delete e.head,
                                delete e.initialContent,
                                delete e.mountTarget,
                                delete e.contentDidMount,
                                delete e.contentDidUpdate,
                                delete e.forwardedRef,
                                l.default.createElement("iframe", u({}, e, {
                                    ref: this.setRef,
                                    onLoad: this.handleLoad
                                }), this.state.iframeLoaded && this.renderFrameContents())
                        }
                    }]),
                    t
            }(s.Component);
            y.propTypes = {
                style: p.default.object,
                head: p.default.node,
                initialContent: p.default.string,
                mountTarget: p.default.string,
                contentDidMount: p.default.func,
                contentDidUpdate: p.default.func,
                children: p.default.oneOfType([p.default.element, p.default.arrayOf(p.default.element)])
            },
                y.defaultProps = {
                    style: {},
                    head: null,
                    children: void 0,
                    mountTarget: void 0,
                    contentDidMount: function() {},
                    contentDidUpdate: function() {},
                    initialContent: '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'
                },
                t.default = l.default.forwardRef((function(e, t) {
                        return l.default.createElement(y, u({}, e, {
                            forwardedRef: t
                        }))
                    }
                ))
        },
        2146: function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = n(8372);
            Object.defineProperty(t, "ZP", {
                enumerable: !0,
                get: function() {
                    return r(o).default
                }
            });
            var i = n(9177)
        },
        8128: function(e, t) {
            "use strict";
            function n(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case i:
                            switch (e = e.type) {
                                case p:
                                case d:
                                case u:
                                case s:
                                case c:
                                case y:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case f:
                                        case v:
                                        case b:
                                        case h:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case a:
                            return t
                    }
                }
            }
            function r(e) {
                return n(e) === d
            }
            var o = "function" == typeof Symbol && Symbol.for
                , i = o ? Symbol.for("react.element") : 60103
                , a = o ? Symbol.for("react.portal") : 60106
                , u = o ? Symbol.for("react.fragment") : 60107
                , c = o ? Symbol.for("react.strict_mode") : 60108
                , s = o ? Symbol.for("react.profiler") : 60114
                , l = o ? Symbol.for("react.provider") : 60109
                , f = o ? Symbol.for("react.context") : 60110
                , p = o ? Symbol.for("react.async_mode") : 60111
                , d = o ? Symbol.for("react.concurrent_mode") : 60111
                , v = o ? Symbol.for("react.forward_ref") : 60112
                , y = o ? Symbol.for("react.suspense") : 60113
                , m = o ? Symbol.for("react.suspense_list") : 60120
                , h = o ? Symbol.for("react.memo") : 60115
                , b = o ? Symbol.for("react.lazy") : 60116
                , g = o ? Symbol.for("react.block") : 60121
                , w = o ? Symbol.for("react.fundamental") : 60117
                , O = o ? Symbol.for("react.responder") : 60118
                , E = o ? Symbol.for("react.scope") : 60119;
            t.AsyncMode = p,
                t.ConcurrentMode = d,
                t.ContextConsumer = f,
                t.ContextProvider = l,
                t.Element = i,
                t.ForwardRef = v,
                t.Fragment = u,
                t.Lazy = b,
                t.Memo = h,
                t.Portal = a,
                t.Profiler = s,
                t.StrictMode = c,
                t.Suspense = y,
                t.isAsyncMode = function(e) {
                    return r(e) || n(e) === p
                }
                ,
                t.isConcurrentMode = r,
                t.isContextConsumer = function(e) {
                    return n(e) === f
                }
                ,
                t.isContextProvider = function(e) {
                    return n(e) === l
                }
                ,
                t.isElement = function(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === i
                }
                ,
                t.isForwardRef = function(e) {
                    return n(e) === v
                }
                ,
                t.isFragment = function(e) {
                    return n(e) === u
                }
                ,
                t.isLazy = function(e) {
                    return n(e) === b
                }
                ,
                t.isMemo = function(e) {
                    return n(e) === h
                }
                ,
                t.isPortal = function(e) {
                    return n(e) === a
                }
                ,
                t.isProfiler = function(e) {
                    return n(e) === s
                }
                ,
                t.isStrictMode = function(e) {
                    return n(e) === c
                }
                ,
                t.isSuspense = function(e) {
                    return n(e) === y
                }
                ,
                t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === u || e === d || e === s || e === c || e === y || e === m || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === h || e.$$typeof === l || e.$$typeof === f || e.$$typeof === v || e.$$typeof === w || e.$$typeof === O || e.$$typeof === E || e.$$typeof === g)
                }
                ,
                t.typeOf = n
        },
        3981: function(e, t, n) {
            "use strict";
            e.exports = n(8128)
        },
        2354: function() {
            "use strict";
            function e(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case o:
                                case a:
                                case i:
                                case f:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case s:
                                        case c:
                                        case l:
                                        case v:
                                        case d:
                                        case u:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case r:
                            return t
                    }
                }
            }
            var t, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen");
            t = Symbol.for("react.module.reference")
        },
        6070: function(e, t, n) {
            "use strict";
            n(2354)
        },
        1125: function(e, t) {
            "use strict";
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                    var r = n - 1 >>> 1
                        , o = e[r];
                    if (!(0 < i(o, t)))
                        break e;
                    e[r] = t,
                        e[n] = o,
                        n = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function o(e) {
                if (0 === e.length)
                    return null;
                var t = e[0]
                    , n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
                        var u = 2 * (r + 1) - 1
                            , c = e[u]
                            , s = u + 1
                            , l = e[s];
                        if (0 > i(c, n))
                            s < o && 0 > i(l, c) ? (e[r] = l,
                                e[s] = n,
                                r = s) : (e[r] = c,
                                e[u] = n,
                                r = u);
                        else {
                            if (!(s < o && 0 > i(l, n)))
                                break e;
                            e[r] = l,
                                e[s] = n,
                                r = s
                        }
                    }
                }
                return t
            }
            function i(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            function a(e) {
                for (var t = r(h); null !== t; ) {
                    if (null === t.callback)
                        o(h);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        o(h),
                            t.sortIndex = t.expirationTime,
                            n(m, t)
                    }
                    t = r(h)
                }
            }
            function u(e) {
                if (x = !1,
                    a(e),
                    !E)
                    if (null !== r(m))
                        E = !0,
                            f(c);
                    else {
                        var t = r(h);
                        null !== t && p(u, t.startTime - e)
                    }
            }
            function c(e, n) {
                E = !1,
                x && (x = !1,
                    j(_),
                    _ = -1),
                    O = !0;
                var i = w;
                try {
                    for (a(n),
                             g = r(m); null !== g && (!(g.expirationTime > n) || e && !s()); ) {
                        var c = g.callback;
                        if ("function" == typeof c) {
                            g.callback = null,
                                w = g.priorityLevel;
                            var l = c(g.expirationTime <= n);
                            n = t.unstable_now(),
                                "function" == typeof l ? g.callback = l : g === r(m) && o(m),
                                a(n)
                        } else
                            o(m);
                        g = r(m)
                    }
                    if (null !== g)
                        var f = !0;
                    else {
                        var d = r(h);
                        null !== d && p(u, d.startTime - n),
                            f = !1
                    }
                    return f
                } finally {
                    g = null,
                        w = i,
                        O = !1
                }
            }
            function s() {
                return !(t.unstable_now() - M < D)
            }
            function l() {
                if (null !== T) {
                    var e = t.unstable_now();
                    M = e;
                    var n = !0;
                    try {
                        n = T(!0, e)
                    } finally {
                        n ? C() : (k = !1,
                            T = null)
                    }
                } else
                    k = !1
            }
            function f(e) {
                T = e,
                k || (k = !0,
                    C())
            }
            function p(e, n) {
                _ = S((function() {
                        e(t.unstable_now())
                    }
                ), n)
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var d = performance;
                t.unstable_now = function() {
                    return d.now()
                }
            } else {
                var v = Date
                    , y = v.now();
                t.unstable_now = function() {
                    return v.now() - y
                }
            }
            var m = []
                , h = []
                , b = 1
                , g = null
                , w = 3
                , O = !1
                , E = !1
                , x = !1
                , S = "function" == typeof setTimeout ? setTimeout : null
                , j = "function" == typeof clearTimeout ? clearTimeout : null
                , P = "undefined" != typeof setImmediate ? setImmediate : null;
            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var C, k = !1, T = null, _ = -1, D = 5, M = -1;
            if ("function" == typeof P)
                C = function() {
                    P(l)
                }
                ;
            else if ("undefined" != typeof MessageChannel) {
                var N = new MessageChannel
                    , A = N.port2;
                N.port1.onmessage = l,
                    C = function() {
                        A.postMessage(null)
                    }
            } else
                C = function() {
                    S(l, 0)
                }
                ;
            t.unstable_IdlePriority = 5,
                t.unstable_ImmediatePriority = 1,
                t.unstable_LowPriority = 4,
                t.unstable_NormalPriority = 3,
                t.unstable_Profiling = null,
                t.unstable_UserBlockingPriority = 2,
                t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }
                ,
                t.unstable_continueExecution = function() {
                    E || O || (E = !0,
                        f(c))
                }
                ,
                t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < e ? Math.floor(1e3 / e) : 5
                }
                ,
                t.unstable_getCurrentPriorityLevel = function() {
                    return w
                }
                ,
                t.unstable_getFirstCallbackNode = function() {
                    return r(m)
                }
                ,
                t.unstable_next = function(e) {
                    switch (w) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = w
                    }
                    var n = w;
                    w = t;
                    try {
                        return e()
                    } finally {
                        w = n
                    }
                }
                ,
                t.unstable_pauseExecution = function() {}
                ,
                t.unstable_requestPaint = function() {}
                ,
                t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = w;
                    w = e;
                    try {
                        return t()
                    } finally {
                        w = n
                    }
                }
                ,
                t.unstable_scheduleCallback = function(e, o, i) {
                    var a = t.unstable_now();
                    switch ("object" == typeof i && null !== i ? i = "number" == typeof (i = i.delay) && 0 < i ? a + i : a : i = a,
                        e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: b++,
                        callback: o,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: s = i + s,
                        sortIndex: -1
                    },
                        i > a ? (e.sortIndex = i,
                            n(h, e),
                        null === r(m) && e === r(h) && (x ? (j(_),
                            _ = -1) : x = !0,
                            p(u, i - a))) : (e.sortIndex = s,
                            n(m, e),
                        E || O || (E = !0,
                            f(c))),
                        e
                }
                ,
                t.unstable_shouldYield = s,
                t.unstable_wrapCallback = function(e) {
                    var t = w;
                    return function() {
                        var n = w;
                        w = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            w = n
                        }
                    }
                }
        },
        5213: function(e, t, n) {
            "use strict";
            e.exports = n(1125)
        },
        3791: function(e, t, n) {
            "use strict";
            function r(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
            function o(e, t) {
                var n = t()
                    , r = s({
                    inst: {
                        value: n,
                        getSnapshot: t
                    }
                })
                    , o = r[0].inst
                    , a = r[1];
                return f((function() {
                        o.value = n,
                            o.getSnapshot = t,
                        i(o) && a({
                            inst: o
                        })
                    }
                ), [e, n, t]),
                    l((function() {
                            return i(o) && a({
                                inst: o
                            }),
                                e((function() {
                                        i(o) && a({
                                            inst: o
                                        })
                                    }
                                ))
                        }
                    ), [e]),
                    p(n),
                    n
            }
            function i(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !c(e, n)
                } catch (e) {
                    return !0
                }
            }
            function a(e, t) {
                return t()
            }
            var u = n(1214)
                , c = "function" == typeof Object.is ? Object.is : r
                , s = u.useState
                , l = u.useEffect
                , f = u.useLayoutEffect
                , p = u.useDebugValue
                , d = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? a : o;
            t.useSyncExternalStore = void 0 !== u.useSyncExternalStore ? u.useSyncExternalStore : d
        },
        2398: function(e, t, n) {
            "use strict";
            function r(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
            var o = n(1214)
                , i = n(5838)
                , a = "function" == typeof Object.is ? Object.is : r
                , u = i.useSyncExternalStore
                , c = o.useRef
                , s = o.useEffect
                , l = o.useMemo
                , f = o.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
                var i = c(null);
                if (null === i.current) {
                    var p = {
                        hasValue: !1,
                        value: null
                    };
                    i.current = p
                } else
                    p = i.current;
                i = l((function() {
                        function e(e) {
                            if (!c) {
                                if (c = !0,
                                    i = e,
                                    e = r(e),
                                void 0 !== o && p.hasValue) {
                                    var t = p.value;
                                    if (o(t, e))
                                        return u = t
                                }
                                return u = e
                            }
                            if (t = u,
                                a(i, e))
                                return t;
                            var n = r(e);
                            return void 0 !== o && o(t, n) ? t : (i = e,
                                u = n)
                        }
                        var i, u, c = !1, s = void 0 === n ? null : n;
                        return [function() {
                            return e(t())
                        }
                            , null === s ? void 0 : function() {
                                return e(s())
                            }
                        ]
                    }
                ), [t, n, r, o]);
                var d = u(e, i[0], i[1]);
                return s((function() {
                        p.hasValue = !0,
                            p.value = d
                    }
                ), [d]),
                    f(d),
                    d
            }
        },
        5838: function(e, t, n) {
            "use strict";
            e.exports = n(3791)
        },
        4234: function(e, t, n) {
            "use strict";
            e.exports = n(2398)
        },
        1835: function(e) {
            e.exports = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }
        },
        6377: function(e) {
            "use strict";
            var t = function() {};
            if (!1) {
                var n = function(e, t) {
                    var n = arguments.length;
                    t = new Array(n > 1 ? n - 1 : 0);
                    for (var r = 1; r < n; r++)
                        t[r - 1] = arguments[r];
                    var o = 0
                        , i = "Warning: " + e.replace(/%s/g, (function() {
                            return t[o++]
                        }
                    ));
                    "undefined" != typeof console && console.error(i);
                    try {
                        throw new Error(i)
                    } catch (e) {}
                };
                t = function(e, t, r) {
                    var o = arguments.length;
                    r = new Array(o > 2 ? o - 2 : 0);
                    for (var i = 2; i < o; i++)
                        r[i - 2] = arguments[i];
                    if (void 0 === t)
                        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                    e || n.apply(null, [t].concat(r))
                }
            }
            e.exports = t
        },
        571: function(e, t, n) {
            "use strict";
            function r(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function(e) {
                        return "'" + e + "'"
                    }
                )).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }
            function o(e) {
                return !!e && !!e[ma]
            }
            function i(e) {
                var t;
                return !!e && (function(e) {
                    if (!e || "object" != typeof e)
                        return !1;
                    var t = Object.getPrototypeOf(e);
                    if (null === t)
                        return !0;
                    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                    return n === Object || "function" == typeof n && Function.toString.call(n) === ha
                }(e) || Array.isArray(e) || !!e[ya] || !(null === (t = e.constructor) || void 0 === t || !t[ya]) || p(e) || d(e))
            }
            function a(e, t, n) {
                void 0 === n && (n = !1),
                    0 === u(e) ? (n ? Object.keys : ba)(e).forEach((function(r) {
                            n && "symbol" == typeof r || t(r, e[r], e)
                        }
                    )) : e.forEach((function(n, r) {
                            return t(r, n, e)
                        }
                    ))
            }
            function u(e) {
                var t = e[ma];
                return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : p(e) ? 2 : d(e) ? 3 : 0
            }
            function c(e, t) {
                return 2 === u(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }
            function s(e, t) {
                return 2 === u(e) ? e.get(t) : e[t]
            }
            function l(e, t, n) {
                var r = u(e);
                2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
            }
            function f(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }
            function p(e) {
                return fa && e instanceof Map
            }
            function d(e) {
                return pa && e instanceof Set
            }
            function v(e) {
                return e.o || e.t
            }
            function y(e) {
                if (Array.isArray(e))
                    return Array.prototype.slice.call(e);
                var t = ga(e);
                delete t[ma];
                for (var n = ba(t), r = 0; r < n.length; r++) {
                    var o = n[r]
                        , i = t[o];
                    !1 === i.writable && (i.writable = !0,
                        i.configurable = !0),
                    (i.get || i.set) && (t[o] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: i.enumerable,
                        value: e[o]
                    })
                }
                return Object.create(Object.getPrototypeOf(e), t)
            }
            function m(e, t) {
                return void 0 === t && (t = !1),
                b(e) || o(e) || !i(e) || (u(e) > 1 && (e.set = e.add = e.clear = e.delete = h),
                    Object.freeze(e),
                t && a(e, (function(e, t) {
                        return m(t, !0)
                    }
                ), !0)),
                    e
            }
            function h() {
                r(2)
            }
            function b(e) {
                return null == e || "object" != typeof e || Object.isFrozen(e)
            }
            function g(e) {
                var t = wa[e];
                return t || r(18, e),
                    t
            }
            function w(e, t) {
                wa[e] || (wa[e] = t)
            }
            function O() {
                return aa
            }
            function E(e, t) {
                t && (g("Patches"),
                    e.u = [],
                    e.s = [],
                    e.v = t)
            }
            function x(e) {
                S(e),
                    e.p.forEach(P),
                    e.p = null
            }
            function S(e) {
                e === aa && (aa = e.l)
            }
            function j(e) {
                return aa = {
                    p: [],
                    l: aa,
                    h: e,
                    m: !0,
                    _: 0
                }
            }
            function P(e) {
                var t = e[ma];
                0 === t.i || 1 === t.i ? t.j() : t.g = !0
            }
            function C(e, t) {
                t._ = t.p.length;
                var n = t.p[0]
                    , o = void 0 !== e && e !== n;
                return t.h.O || g("ES5").S(t, e, o),
                    o ? (n[ma].P && (x(t),
                        r(4)),
                    i(e) && (e = k(t, e),
                    t.l || _(t, e)),
                    t.u && g("Patches").M(n[ma].t, e, t.u, t.s)) : e = k(t, n, []),
                    x(t),
                t.u && t.v(t.u, t.s),
                    e !== va ? e : void 0
            }
            function k(e, t, n) {
                if (b(t))
                    return t;
                var r = t[ma];
                if (!r)
                    return a(t, (function(o, i) {
                            return T(e, r, t, o, i, n)
                        }
                    ), !0),
                        t;
                if (r.A !== e)
                    return t;
                if (!r.P)
                    return _(e, r.t, !0),
                        r.t;
                if (!r.I) {
                    r.I = !0,
                        r.A._--;
                    var o = 4 === r.i || 5 === r.i ? r.o = y(r.k) : r.o
                        , i = o
                        , u = !1;
                    3 === r.i && (i = new Set(o),
                        o.clear(),
                        u = !0),
                        a(i, (function(t, i) {
                                return T(e, r, o, t, i, n, u)
                            }
                        )),
                        _(e, o, !1),
                    n && e.u && g("Patches").N(r, n, e.u, e.s)
                }
                return r.o
            }
            function T(e, t, n, r, a, u, s) {
                if (o(a)) {
                    var f = k(e, a, u && t && 3 !== t.i && !c(t.R, r) ? u.concat(r) : void 0);
                    if (l(n, r, f),
                        !o(f))
                        return;
                    e.m = !1
                } else
                    s && n.add(a);
                if (i(a) && !b(a)) {
                    if (!e.h.D && e._ < 1)
                        return;
                    k(e, a),
                    t && t.A.l || _(e, a)
                }
            }
            function _(e, t, n) {
                void 0 === n && (n = !1),
                !e.l && e.h.D && e.m && m(t, n)
            }
            function D(e, t) {
                var n = e[ma];
                return (n ? v(n) : e)[t]
            }
            function M(e, t) {
                if (t in e)
                    for (var n = Object.getPrototypeOf(e); n; ) {
                        var r = Object.getOwnPropertyDescriptor(n, t);
                        if (r)
                            return r;
                        n = Object.getPrototypeOf(n)
                    }
            }
            function N(e) {
                e.P || (e.P = !0,
                e.l && N(e.l))
            }
            function A(e) {
                e.o || (e.o = y(e.t))
            }
            function R(e, t, n) {
                var r = p(t) ? g("MapSet").F(t, n) : d(t) ? g("MapSet").T(t, n) : e.O ? function(e, t) {
                    var n = Array.isArray(e)
                        , r = {
                        i: n ? 1 : 0,
                        A: t ? t.A : O(),
                        P: !1,
                        I: !1,
                        R: {},
                        l: t,
                        t: e,
                        k: null,
                        o: null,
                        j: null,
                        C: !1
                    }
                        , o = r
                        , i = Oa;
                    n && (o = [r],
                        i = Ea);
                    var a = Proxy.revocable(o, i)
                        , u = a.revoke
                        , c = a.proxy;
                    return r.k = c,
                        r.j = u,
                        c
                }(t, n) : g("ES5").J(t, n);
                return (n ? n.A : O()).p.push(r),
                    r
            }
            function I(e) {
                return o(e) || r(22, e),
                    function e(t) {
                        if (!i(t))
                            return t;
                        var n, r = t[ma], o = u(t);
                        if (r) {
                            if (!r.P && (r.i < 4 || !g("ES5").K(r)))
                                return r.t;
                            r.I = !0,
                                n = L(t, o),
                                r.I = !1
                        } else
                            n = L(t, o);
                        return a(n, (function(t, o) {
                                r && s(r.t, t) === o || l(n, t, e(o))
                            }
                        )),
                            3 === o ? new Set(n) : n
                    }(e)
            }
            function L(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e)
                }
                return y(e)
            }
            function F() {
                function e(e, t) {
                    var n = i[e];
                    return n ? n.enumerable = t : i[e] = n = {
                        configurable: !0,
                        enumerable: t,
                        get: function() {
                            var t = this[ma];
                            return Oa.get(t, e)
                        },
                        set: function(t) {
                            var n = this[ma];
                            Oa.set(n, e, t)
                        }
                    },
                        n
                }
                function t(e) {
                    for (var t = e.length - 1; t >= 0; t--) {
                        var o = e[t][ma];
                        if (!o.P)
                            switch (o.i) {
                                case 5:
                                    r(o) && N(o);
                                    break;
                                case 4:
                                    n(o) && N(o)
                            }
                    }
                }
                function n(e) {
                    for (var t = e.t, n = e.k, r = ba(n), o = r.length - 1; o >= 0; o--) {
                        var i = r[o];
                        if (i !== ma) {
                            var a = t[i];
                            if (void 0 === a && !c(t, i))
                                return !0;
                            var u = n[i]
                                , s = u && u[ma];
                            if (s ? s.t !== a : !f(u, a))
                                return !0
                        }
                    }
                    var l = !!t[ma];
                    return r.length !== ba(t).length + (l ? 0 : 1)
                }
                function r(e) {
                    var t = e.k;
                    if (t.length !== e.t.length)
                        return !0;
                    var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
                    if (n && !n.get)
                        return !0;
                    for (var r = 0; r < t.length; r++)
                        if (!t.hasOwnProperty(r))
                            return !0;
                    return !1
                }
                var i = {};
                w("ES5", {
                    J: function(t, n) {
                        var r = Array.isArray(t)
                            , o = function(t, n) {
                            if (t) {
                                for (var r = Array(n.length), o = 0; o < n.length; o++)
                                    Object.defineProperty(r, "" + o, e(o, !0));
                                return r
                            }
                            var i = ga(n);
                            delete i[ma];
                            for (var a = ba(i), u = 0; u < a.length; u++) {
                                var c = a[u];
                                i[c] = e(c, t || !!i[c].enumerable)
                            }
                            return Object.create(Object.getPrototypeOf(n), i)
                        }(r, t)
                            , i = {
                            i: r ? 5 : 4,
                            A: n ? n.A : O(),
                            P: !1,
                            I: !1,
                            R: {},
                            l: n,
                            t: t,
                            k: o,
                            o: null,
                            g: !1,
                            C: !1
                        };
                        return Object.defineProperty(o, ma, {
                            value: i,
                            writable: !0
                        }),
                            o
                    },
                    S: function(e, n, i) {
                        i ? o(n) && n[ma].A === e && t(e.p) : (e.u && function e(t) {
                            if (t && "object" == typeof t) {
                                var n = t[ma];
                                if (n) {
                                    var o = n.t
                                        , i = n.k
                                        , u = n.R
                                        , s = n.i;
                                    if (4 === s)
                                        a(i, (function(t) {
                                                t !== ma && (void 0 !== o[t] || c(o, t) ? u[t] || e(i[t]) : (u[t] = !0,
                                                    N(n)))
                                            }
                                        )),
                                            a(o, (function(e) {
                                                    void 0 !== i[e] || c(i, e) || (u[e] = !1,
                                                        N(n))
                                                }
                                            ));
                                    else if (5 === s) {
                                        if (r(n) && (N(n),
                                            u.length = !0),
                                        i.length < o.length)
                                            for (var l = i.length; l < o.length; l++)
                                                u[l] = !1;
                                        else
                                            for (var f = o.length; f < i.length; f++)
                                                u[f] = !0;
                                        for (var p = Math.min(i.length, o.length), d = 0; d < p; d++)
                                            i.hasOwnProperty(d) || (u[d] = !0),
                                            void 0 === u[d] && e(i[d])
                                    }
                                }
                            }
                        }(e.p[0]),
                            t(e.p))
                    },
                    K: function(e) {
                        return 4 === e.i ? n(e) : r(e)
                    }
                })
            }
            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                    ))),
                        n.push.apply(n, r)
                }
                return n
            }
            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(n), !0).forEach((function(t) {
                            (0,
                                Ca.Z)(e, t, n[t])
                        }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                    ))
                }
                return e
            }
            function V(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
            }
            function U(e) {
                if ("object" != typeof e || null === e)
                    return !1;
                for (var t = e; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }
            function K(e, t, n) {
                function r() {
                    d === p && (d = p.slice())
                }
                function o() {
                    if (v)
                        throw new Error(V(3));
                    return f
                }
                function i(e) {
                    if ("function" != typeof e)
                        throw new Error(V(4));
                    if (v)
                        throw new Error(V(5));
                    var t = !0;
                    return r(),
                        d.push(e),
                        function() {
                            if (t) {
                                if (v)
                                    throw new Error(V(6));
                                t = !1,
                                    r();
                                var n = d.indexOf(e);
                                d.splice(n, 1),
                                    p = null
                            }
                        }
                }
                function a(e) {
                    if (!U(e))
                        throw new Error(V(7));
                    if (void 0 === e.type)
                        throw new Error(V(8));
                    if (v)
                        throw new Error(V(9));
                    try {
                        v = !0,
                            f = l(f, e)
                    } finally {
                        v = !1
                    }
                    for (var t = p = d, n = 0; n < t.length; n++) {
                        (0,
                            t[n])()
                    }
                    return e
                }
                function u(e) {
                    if ("function" != typeof e)
                        throw new Error(V(10));
                    l = e,
                        a({
                            type: _a.REPLACE
                        })
                }
                function c() {
                    var e, t = i;
                    return (e = {
                        subscribe: function(e) {
                            function n() {
                                e.next && e.next(o())
                            }
                            if ("object" != typeof e || null === e)
                                throw new Error(V(11));
                            return n(),
                                {
                                    unsubscribe: t(n)
                                }
                        }
                    })[ka] = function() {
                        return this
                    }
                        ,
                        e
                }
                var s;
                if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3])
                    throw new Error(V(0));
                if ("function" == typeof t && void 0 === n && (n = t,
                    t = void 0),
                void 0 !== n) {
                    if ("function" != typeof n)
                        throw new Error(V(1));
                    return n(K)(e, t)
                }
                if ("function" != typeof e)
                    throw new Error(V(2));
                var l = e
                    , f = t
                    , p = []
                    , d = p
                    , v = !1;
                return a({
                    type: _a.INIT
                }),
                    (s = {
                        dispatch: a,
                        subscribe: i,
                        getState: o,
                        replaceReducer: u
                    })[ka] = c,
                    s
            }
            function B(e) {
                Object.keys(e).forEach((function(t) {
                        var n = e[t];
                        if (void 0 === n(void 0, {
                            type: _a.INIT
                        }))
                            throw new Error(V(12));
                        if (void 0 === n(void 0, {
                            type: _a.PROBE_UNKNOWN_ACTION()
                        }))
                            throw new Error(V(13))
                    }
                ))
            }
            function W(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var o = t[r];
                    "function" == typeof e[o] && (n[o] = e[o])
                }
                var i, a = Object.keys(n);
                try {
                    B(n)
                } catch (e) {
                    i = e
                }
                return function(e, t) {
                    if (void 0 === e && (e = {}),
                        i)
                        throw i;
                    for (var r = !1, o = {}, u = 0; u < a.length; u++) {
                        var c = a[u]
                            , s = n[c]
                            , l = e[c]
                            , f = s(l, t);
                        if (void 0 === f) {
                            t && t.type;
                            throw new Error(V(14))
                        }
                        o[c] = f,
                            r = r || f !== l
                    }
                    return (r = r || a.length !== Object.keys(e).length) ? o : e
                }
            }
            function z() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return 0 === t.length ? function(e) {
                        return e
                    }
                    : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                            return function() {
                                return e(t.apply(void 0, arguments))
                            }
                        }
                    ))
            }
            function H() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function(e) {
                    return function() {
                        var n = e.apply(void 0, arguments)
                            , r = function() {
                            throw new Error(V(15))
                        }
                            , o = {
                            getState: n.getState,
                            dispatch: function() {
                                return r.apply(void 0, arguments)
                            }
                        }
                            , i = t.map((function(e) {
                                return e(o)
                            }
                        ));
                        return r = z.apply(void 0, i)(n.dispatch),
                            Z(Z({}, n), {}, {
                                dispatch: r
                            })
                    }
                }
            }
            function q(e) {
                return function(t) {
                    var n = t.dispatch
                        , r = t.getState;
                    return function(t) {
                        return function(o) {
                            return "function" == typeof o ? o(n, r, e) : t(o)
                        }
                    }
                }
            }
            function G(e) {
                if ("object" != typeof e || null === e)
                    return !1;
                var t = Object.getPrototypeOf(e);
                if (null === t)
                    return !0;
                for (var n = t; null !== Object.getPrototypeOf(n); )
                    n = Object.getPrototypeOf(n);
                return t === n
            }
            function X(e) {
                return i(e) ? Pa(e, (function() {}
                )) : e
            }
            function Y(e) {
                return "boolean" == typeof e
            }
            function J() {
                return function(e) {
                    return Q(e)
                }
            }
            function Q(e) {
                void 0 === e && (e = {});
                var t = e.thunk
                    , n = void 0 === t || t
                    , r = (e.immutableCheck,
                    e.serializableCheck,
                    new Ga);
                return n && (Y(n) ? r.push(Aa) : r.push(Aa.withExtraArgument(n.extraArgument))),
                    r
            }
            function ee(e) {
                var t, n = J(), r = e || {}, o = r.reducer, i = void 0 === o ? void 0 : o, a = r.middleware, u = void 0 === a ? n() : a, c = r.devTools, s = void 0 === c || c, l = r.preloadedState, f = void 0 === l ? void 0 : l, p = r.enhancers, d = void 0 === p ? void 0 : p;
                if ("function" == typeof i)
                    t = i;
                else {
                    if (!G(i))
                        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
                    t = W(i)
                }
                var v = u;
                if ("function" == typeof v && (v = v(n),
                !Ya && !Array.isArray(v)))
                    throw new Error("when using a middleware builder function, an array of middleware must be returned");
                if (!Ya && v.some((function(e) {
                        return "function" != typeof e
                    }
                )))
                    throw new Error("each middleware provided to configureStore must be a function");
                var y = H.apply(void 0, v)
                    , m = z;
                s && (m = qa(Wa({
                    trace: !Ya
                }, "object" == typeof s && s)));
                var h = new Xa(y)
                    , b = h;
                return Array.isArray(d) ? b = La([y], d) : "function" == typeof d && (b = d(h)),
                    K(t, f, m.apply(void 0, b))
            }
            function te(e, t) {
                function n() {
                    for (var n = [], r = 0; r < arguments.length; r++)
                        n[r] = arguments[r];
                    if (t) {
                        var o = t.apply(void 0, n);
                        if (!o)
                            throw new Error("prepareAction did not return an object");
                        return Wa(Wa({
                            type: e,
                            payload: o.payload
                        }, "meta"in o && {
                            meta: o.meta
                        }), "error"in o && {
                            error: o.error
                        })
                    }
                    return {
                        type: e,
                        payload: n[0]
                    }
                }
                return n.toString = function() {
                    return "" + e
                }
                    ,
                    n.type = e,
                    n.match = function(t) {
                        return t.type === e
                    }
                    ,
                    n
            }
            function ne(e) {
                var t, n = {}, r = [], o = {
                    addCase: function(e, t) {
                        var r = "string" == typeof e ? e : e.type;
                        if (r in n)
                            throw new Error("addCase cannot be called with two reducers for the same action type");
                        return n[r] = t,
                            o
                    },
                    addMatcher: function(e, t) {
                        return r.push({
                            matcher: e,
                            reducer: t
                        }),
                            o
                    },
                    addDefaultCase: function(e) {
                        return t = e,
                            o
                    }
                };
                return e(o),
                    [n, r, t]
            }
            function re(e) {
                return "function" == typeof e
            }
            function oe(e, t, n, r) {
                function a(e, t) {
                    void 0 === e && (e = u());
                    var n = La([s[t.type]], l.filter((function(e) {
                            return (0,
                                e.matcher)(t)
                        }
                    )).map((function(e) {
                            return e.reducer
                        }
                    )));
                    return 0 === n.filter((function(e) {
                            return !!e
                        }
                    )).length && (n = [f]),
                        n.reduce((function(e, n) {
                                if (n) {
                                    var r;
                                    if (o(e))
                                        return void 0 === (r = n(e, t)) ? e : r;
                                    if (i(e))
                                        return Pa(e, (function(e) {
                                                return n(e, t)
                                            }
                                        ));
                                    if (void 0 === (r = n(e, t))) {
                                        if (null === e)
                                            return e;
                                        throw Error("A case reducer on a non-draftable value must not return undefined")
                                    }
                                    return r
                                }
                                return e
                            }
                        ), e)
                }
                void 0 === n && (n = []);
                var u, c = "function" == typeof t ? ne(t) : [t, n, r], s = c[0], l = c[1], f = c[2];
                if (re(e))
                    u = function() {
                        return X(e())
                    }
                    ;
                else {
                    var p = X(e);
                    u = function() {
                        return p
                    }
                }
                return a.getInitialState = u,
                    a
            }
            function ie(e, t) {
                return e + "/" + t
            }
            function ae(e) {
                function t() {
                    var t = "function" == typeof e.extraReducers ? ne(e.extraReducers) : [e.extraReducers]
                        , n = t[0]
                        , r = void 0 === n ? {} : n
                        , i = t[1]
                        , a = void 0 === i ? [] : i
                        , u = t[2]
                        , s = void 0 === u ? void 0 : u
                        , l = Wa(Wa({}, r), c);
                    return oe(o, (function(e) {
                            for (var t in l)
                                e.addCase(t, l[t]);
                            for (var n = 0, r = a; n < r.length; n++) {
                                var o = r[n];
                                e.addMatcher(o.matcher, o.reducer)
                            }
                            s && e.addDefaultCase(s)
                        }
                    ))
                }
                var n = e.name;
                if (!n)
                    throw new Error("`name` is a required option for createSlice");
                var r, o = "function" == typeof e.initialState ? e.initialState : X(e.initialState), i = e.reducers || {}, a = Object.keys(i), u = {}, c = {}, s = {};
                return a.forEach((function(e) {
                        var t, r, o = i[e], a = ie(n, e);
                        "reducer"in o ? (t = o.reducer,
                            r = o.prepare) : t = o,
                            u[e] = t,
                            c[a] = t,
                            s[e] = r ? te(a, r) : te(a)
                    }
                )),
                    {
                        name: n,
                        reducer: function(e, n) {
                            return r || (r = t()),
                                r(e, n)
                        },
                        actions: s,
                        caseReducers: u,
                        getInitialState: function() {
                            return r || (r = t()),
                                r.getInitialState()
                        }
                    }
            }
            function ue(e) {
                if (e.meta && e.meta.rejectedWithValue)
                    throw e.payload;
                if (e.error)
                    throw e.error;
                return e.payload
            }
            function ce(e) {
                return null !== e && "object" == typeof e && "function" == typeof e.then
            }
            function se(e) {
                e()
            }
            function le() {
                return yu || (yu = (0,
                    ca.createContext)(null)),
                    yu
            }
            function fe(e=mu) {
                return function() {
                    return (0,
                        ca.useContext)(e)
                }
            }
            function pe(e=mu) {
                const t = e === mu ? hu : fe(e);
                return function(e, n={}) {
                    const {equalityFn: r=wu, stabilityCheck: o, noopCheck: i} = "function" == typeof n ? {
                        equalityFn: n
                    } : n
                        , {store: a, subscription: u, getServerState: c, stabilityCheck: s, noopCheck: l} = t()
                        , f = ((0,
                        ca.useRef)(!0),
                        (0,
                            ca.useCallback)({
                            [e.name]: t=>e(t)
                        }[e.name], [e, s, o]))
                        , p = bu(u.addNestedSub, a.getState, c || a.getState, f, r);
                    return (0,
                        ca.useDebugValue)(p),
                        p
                }
            }
            function de() {
                const e = vu();
                let t = null
                    , n = null;
                return {
                    clear() {
                        t = null,
                            n = null
                    },
                    notify() {
                        e((()=>{
                                let e = t;
                                for (; e; )
                                    e.callback(),
                                        e = e.next
                            }
                        ))
                    },
                    get() {
                        let e = []
                            , n = t;
                        for (; n; )
                            e.push(n),
                                n = n.next;
                        return e
                    },
                    subscribe(e) {
                        let r = !0
                            , o = n = {
                            callback: e,
                            next: null,
                            prev: n
                        };
                        return o.prev ? o.prev.next = o : t = o,
                            function() {
                                !r || null === t || (r = !1,
                                    o.next ? o.next.prev = o.prev : n = o.prev,
                                    o.prev ? o.prev.next = o.next : t = o.next)
                            }
                    }
                }
            }
            function ve(e, t) {
                function n(e) {
                    return a(),
                        s.subscribe(e)
                }
                function r() {
                    s.notify()
                }
                function o() {
                    l.onStateChange && l.onStateChange()
                }
                function i() {
                    return !!c
                }
                function a() {
                    c || (c = t ? t.addNestedSub(o) : e.subscribe(o),
                        s = de())
                }
                function u() {
                    c && (c(),
                        c = void 0,
                        s.clear(),
                        s = Eu)
                }
                let c, s = Eu;
                const l = {
                    addNestedSub: n,
                    notifyNestedSubs: r,
                    handleChangeWrapper: o,
                    isSubscribed: i,
                    trySubscribe: a,
                    tryUnsubscribe: u,
                    getListeners: ()=>s
                };
                return l
            }
            function ye({store: e, context: t, children: n, serverState: r, stabilityCheck: o="once", noopCheck: i="once"}) {
                const a = (0,
                    ca.useMemo)((()=>{
                        const t = ve(e);
                        return {
                            store: e,
                            subscription: t,
                            getServerState: r ? ()=>r : void 0,
                            stabilityCheck: o,
                            noopCheck: i
                        }
                    }
                ), [e, r, o, i])
                    , u = (0,
                    ca.useMemo)((()=>e.getState()), [e]);
                xu((()=>{
                        const {subscription: t} = a;
                        return t.onStateChange = t.notifyNestedSubs,
                            t.trySubscribe(),
                        u !== e.getState() && t.notifyNestedSubs(),
                            ()=>{
                                t.tryUnsubscribe(),
                                    t.onStateChange = void 0
                            }
                    }
                ), [a, u]);
                const c = t || mu;
                return ca.createElement(c.Provider, {
                    value: a
                }, n)
            }
            function me(e=mu) {
                const t = e === mu ? hu : fe(e);
                return function() {
                    const {store: e} = t();
                    return e
                }
            }
            function he(e=mu) {
                const t = e === mu ? Cu : me(e);
                return function() {
                    return t().dispatch
                }
            }
            function be() {
                if (console && console.warn) {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    "string" == typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
                        (e = console).warn.apply(e, n)
                }
            }
            function ge() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                "string" == typeof t[0] && Mu[t[0]] || ("string" == typeof t[0] && (Mu[t[0]] = new Date),
                    be.apply(void 0, t))
            }
            function we(e, t, n) {
                e.loadNamespaces(t, Nu(e, n))
            }
            function Oe(e, t, n, r) {
                "string" == typeof n && (n = [n]),
                    n.forEach((function(t) {
                            e.options.ns.indexOf(t) < 0 && e.options.ns.push(t)
                        }
                    )),
                    e.loadLanguages(t, Nu(e, r))
            }
            function Ee(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                    , r = t.languages[0]
                    , o = !!t.options && t.options.fallbackLng
                    , i = t.languages[t.languages.length - 1];
                if ("cimode" === r.toLowerCase())
                    return !0;
                var a = function(e, n) {
                    var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                    return -1 === r || 2 === r
                };
                return !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e)) && !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || a(r, e) && (!o || a(i, e)))
            }
            function xe(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return t.languages && t.languages.length ? void 0 !== t.options.ignoreJSONStructure ? t.hasLoadedNamespace(e, {
                    lng: n.lng,
                    precheck: function(t, r) {
                        if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e))
                            return !1
                    }
                }) : Ee(e, t, n) : (ge("i18n.languages were undefined or empty", t.languages),
                    !0)
            }
            function Se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                    ))),
                        n.push.apply(n, r)
                }
                return n
            }
            function je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Se(Object(n), !0).forEach((function(t) {
                            (0,
                                Ca.Z)(e, t, n[t])
                        }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                    ))
                }
                return e
            }
            function Pe() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Lu = je(je({}, Lu), e)
            }
            function Ce() {
                return Lu
            }
            function ke(e) {
                Tu = e
            }
            function Te() {
                return Tu
            }
            function _e(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i, a, u = [], c = !0, s = !1;
                    try {
                        if (i = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = i.call(n)).done) && (u.push(r.value),
                            u.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                            o = e
                    } finally {
                        try {
                            if (!c && null != n.return && (a = n.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }
            function De(e, t) {
                return (0,
                    Ku.Z)(e) || _e(e, t) || (0,
                    Bu.Z)(e, t) || (0,
                    Wu.Z)()
            }
            function Me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                    ))),
                        n.push.apply(n, r)
                }
                return n
            }
            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Me(Object(n), !0).forEach((function(t) {
                            (0,
                                Ca.Z)(e, t, n[t])
                        }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                    ))
                }
                return e
            }
            function Ae(e) {
                function t() {
                    return u.getFixedT(n.lng || null, "fallback" === l.nsMode ? d : d[0], p)
                }
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , r = n.i18n
                    , o = (0,
                    ca.useContext)(Vu) || {}
                    , i = o.i18n
                    , a = o.defaultNS
                    , u = r || i || Te();
                if (u && !u.reportNamespaces && (u.reportNamespaces = new Uu),
                    !u) {
                    ge("You will need to pass in an i18next instance by using initReactI18next");
                    var c = function(e, t) {
                        return "string" == typeof t ? t : t && "object" === (0,
                            zu.Z)(t) && "string" == typeof t.defaultValue ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e
                    }
                        , s = [c, {}, !1];
                    return s.t = c,
                        s.i18n = {},
                        s.ready = !1,
                        s
                }
                u.options.react && void 0 !== u.options.react.wait && ge("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                var l = Ne(Ne(Ne({}, Ce()), u.options.react), n)
                    , f = l.useSuspense
                    , p = l.keyPrefix
                    , d = e || a || u.options && u.options.defaultNS;
                d = "string" == typeof d ? [d] : d || ["translation"],
                u.reportNamespaces.addUsedNamespaces && u.reportNamespaces.addUsedNamespaces(d);
                var v = (u.isInitialized || u.initializedStoreOnce) && d.every((function(e) {
                        return xe(e, u, l)
                    }
                ))
                    , y = De((0,
                    ca.useState)(t), 2)
                    , m = y[0]
                    , h = y[1]
                    , b = d.join();
                n.lng && (b = "".concat(n.lng).concat(b));
                var g = Hu(b)
                    , w = (0,
                    ca.useRef)(!0);
                (0,
                    ca.useEffect)((function() {
                        function e() {
                            w.current && h(t)
                        }
                        var r = l.bindI18n
                            , o = l.bindI18nStore;
                        return w.current = !0,
                        !v && !f && (n.lng ? Oe(u, n.lng, d, (function() {
                                w.current && h(t)
                            }
                        )) : we(u, d, (function() {
                                w.current && h(t)
                            }
                        ))),
                        v && g && g !== b && w.current && h(t),
                        r && u && u.on(r, e),
                        o && u && u.store.on(o, e),
                            function() {
                                w.current = !1,
                                r && u && r.split(" ").forEach((function(t) {
                                        return u.off(t, e)
                                    }
                                )),
                                o && u && o.split(" ").forEach((function(t) {
                                        return u.store.off(t, e)
                                    }
                                ))
                            }
                    }
                ), [u, b]);
                var O = (0,
                    ca.useRef)(!0);
                (0,
                    ca.useEffect)((function() {
                        w.current && !O.current && h(t),
                            O.current = !1
                    }
                ), [u, p]);
                var E = [m, u, v];
                if (E.t = m,
                    E.i18n = u,
                    E.ready = v,
                v || !v && !f)
                    return E;
                throw new Promise((function(e) {
                        n.lng ? Oe(u, n.lng, d, (function() {
                                return e()
                            }
                        )) : we(u, d, (function() {
                                return e()
                            }
                        ))
                    }
                ))
            }
            function Re(e, t, n) {
                const r = (0,
                    ca.useRef)(void 0 !== e)
                    , [o,i] = (0,
                    ca.useState)(t)
                    , a = void 0 !== e
                    , u = r.current;
                return r.current = a,
                !a && u && o !== t && i(t),
                    [a ? e : o, (0,
                        ca.useCallback)(((e,...t)=>{
                            n && n(e, ...t),
                                i(e)
                        }
                    ), [n])]
            }
            function Ie(e=!1) {
                let t = (0,
                    ca.useContext)(Qu)
                    , n = (0,
                    ca.useRef)(null);
                if (null === n.current && !e) {
                    var r, o;
                    let e = null === (r = ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === r || null === (o = r.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
                    if (e) {
                        let n = tc.get(e);
                        null == n ? tc.set(e, {
                            id: t.current,
                            state: e.memoizedState
                        }) : e.memoizedState !== n.state && (t.current = n.id,
                            tc.delete(e))
                    }
                    n.current = ++t.current
                }
                return n.current
            }
            function Le(e) {
                let t = (0,
                    ca.useContext)(Qu);
                t === Ju && !ec && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
                let n = Ie(!!e);
                return e || `react-aria${t.prefix}-${n}`
            }
            function Fe(e) {
                var t = (0,
                    ca.useRef)(e);
                return (0,
                    ca.useEffect)((function() {
                        t.current = e
                    }
                ), [e]),
                    t
            }
            function $e(e) {
                var t = ac(e);
                return (0,
                    ca.useCallback)((function() {
                        return t.current && t.current.apply(t, arguments)
                    }
                ), [t])
            }
            function Ze(e, t) {
                var n = uc(e)
                    , r = uc(t);
                return function(e) {
                    n && n(e),
                    r && r(e)
                }
            }
            function Ve(e, t) {
                return (0,
                    ca.useMemo)((function() {
                        return Ze(e, t)
                    }
                ), [e, t])
            }
            function Ue({children: e, in: t, onExited: n, mountOnEnter: r, unmountOnExit: o}) {
                const i = (0,
                    ca.useRef)(null)
                    , a = (0,
                    ca.useRef)(t)
                    , u = $e(n);
                (0,
                    ca.useEffect)((()=>{
                        t ? a.current = !0 : u(i.current)
                    }
                ), [t, u]);
                const c = cc(i, e.ref)
                    , s = (0,
                    ca.cloneElement)(e, {
                    ref: c
                });
                return t ? s : o || !a.current && r ? null : s
            }
            function Ke(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                return o
            }
            function Be(e) {
                let {active: t, eventKey: n, mountOnEnter: r, transition: o, unmountOnExit: i, role: a="tabpanel", onEnter: u, onEntering: c, onEntered: s, onExit: l, onExiting: f, onExited: p} = e
                    , d = Ke(e, fc);
                const v = (0,
                    ca.useContext)(nc);
                if (!v)
                    return [Object.assign({}, d, {
                        role: a
                    }), {
                        eventKey: n,
                        isActive: t,
                        mountOnEnter: r,
                        transition: o,
                        unmountOnExit: i,
                        onEnter: u,
                        onEntering: c,
                        onEntered: s,
                        onExit: l,
                        onExiting: f,
                        onExited: p
                    }];
                const {activeKey: y, getControlledId: m, getControllerId: h} = v
                    , b = Ke(v, pc)
                    , g = oc(n);
                return [Object.assign({}, d, {
                    role: a,
                    id: m(n),
                    "aria-labelledby": h(n)
                }), {
                    eventKey: n,
                    isActive: null == t && null != g ? oc(y) === g : t,
                    transition: o || b.transition,
                    mountOnEnter: null != r ? r : b.mountOnEnter,
                    unmountOnExit: null != i ? i : b.unmountOnExit,
                    onEnter: u,
                    onEntering: c,
                    onEntered: s,
                    onExit: l,
                    onExiting: f,
                    onExited: p
                }]
            }
            function We(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                return o
            }
            function ze(e, t) {
                e.prototype = Object.create(t.prototype),
                    e.prototype.constructor = e,
                    (0,
                        wc.Z)(e, t)
            }
            function He() {}
            function qe(e) {
                return e && e.ownerDocument || document
            }
            function Ge(e) {
                var t = qe(e);
                return t && t.defaultView || window
            }
            function Xe(e, t) {
                return Ge(e).getComputedStyle(e, t)
            }
            function Ye(e) {
                return e.replace(Dc, "-$1").toLowerCase()
            }
            function Je(e) {
                return Ye(e).replace(Mc, "-ms-")
            }
            function Qe(e) {
                return !(!e || !Nc.test(e))
            }
            function et(e, t) {
                var n = ""
                    , r = "";
                if ("string" == typeof t)
                    return e.style.getPropertyValue(Je(t)) || Xe(e).getPropertyValue(Je(t));
                Object.keys(t).forEach((function(o) {
                        var i = t[o];
                        i || 0 === i ? Qe(o) ? r += o + "(" + i + ") " : n += Je(o) + ": " + i + ";" : e.style.removeProperty(Je(o))
                    }
                )),
                r && (n += "transform: " + r + ";"),
                    e.style.cssText += ";" + n
            }
            function tt(e, t, n, r) {
                if (r && "boolean" != typeof r && !Lc) {
                    var o = r.once
                        , i = r.capture
                        , a = n;
                    !Lc && o && (a = n.__once || function e(r) {
                        this.removeEventListener(t, e, i),
                            n.call(this, r)
                    }
                        ,
                        n.__once = a),
                        e.addEventListener(t, a, Ic ? r : i)
                }
                e.addEventListener(t, n, r)
            }
            function nt(e, t, n, r) {
                var o = r && "boolean" != typeof r ? r.capture : r;
                e.removeEventListener(t, n, o),
                n.__once && e.removeEventListener(t, n.__once, o)
            }
            function rt(e, t, n, r) {
                return Zc(e, t, n, r),
                    function() {
                        Vc(e, t, n, r)
                    }
            }
            function ot(e, t, n, r) {
                if (void 0 === n && (n = !1),
                void 0 === r && (r = !0),
                    e) {
                    var o = document.createEvent("HTMLEvents");
                    o.initEvent(t, n, r),
                        e.dispatchEvent(o)
                }
            }
            function it(e) {
                var t = Ac(e, "transitionDuration") || ""
                    , n = -1 === t.indexOf("ms") ? 1e3 : 1;
                return parseFloat(t) * n
            }
            function at(e, t, n) {
                void 0 === n && (n = 5);
                var r = !1
                    , o = setTimeout((function() {
                        r || ot(e, "transitionend", !0)
                    }
                ), t + n)
                    , i = Uc(e, "transitionend", (function() {
                        r = !0
                    }
                ), {
                    once: !0
                });
                return function() {
                    clearTimeout(o),
                        i()
                }
            }
            function ut(e, t, n, r) {
                null == n && (n = it(e) || 0);
                var o = at(e, n, r)
                    , i = Uc(e, "transitionend", t);
                return function() {
                    o(),
                        i()
                }
            }
            function ct(e, t) {
                const n = Ac(e, t) || ""
                    , r = -1 === n.indexOf("ms") ? 1e3 : 1;
                return parseFloat(n) * r
            }
            function st(e, t) {
                const n = ct(e, "transitionDuration")
                    , r = ct(e, "transitionDelay")
                    , o = ut(e, (n=>{
                        n.target === e && (o(),
                            t(n))
                    }
                ), n + r)
            }
            function lt(e) {
                e.offsetHeight
            }
            function ft(e) {
                return e && "setState"in e ? fu.findDOMNode(e) : null != e ? e : null
            }
            function pt(e) {
                return "boolean" == typeof e ? e ? ps : sc : e
            }
            function dt(e) {
                return e.replace(js, (function(e, t) {
                        return t.toUpperCase()
                    }
                ))
            }
            function vt(e, t) {
                const {prefixes: n} = (0,
                    ca.useContext)(ks);
                return e || n[t] || t
            }
            function yt() {
                const {dir: e} = (0,
                    ca.useContext)(ks);
                return "rtl" === e
            }
            function mt(e, {displayName: t=Fs(e), Component: n, defaultProps: r}={}) {
                const o = ca.forwardRef(((t,o)=>{
                        var i = t
                            , {className: a, bsPrefix: u, as: c=n || "div"} = i
                            , s = Ls(i, ["className", "bsPrefix", "as"]);
                        const l = Is(Is({}, r), s)
                            , f = vt(u, e);
                        return (0,
                            lc.jsx)(c, Is({
                            ref: o,
                            className: gc()(a, f)
                        }, l))
                    }
                ));
                return o.displayName = t,
                    o
            }
            function ht() {
                return ht = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                    ,
                    ht.apply(this, arguments)
            }
            function bt(e) {
                return "default" + e.charAt(0).toUpperCase() + e.substr(1)
            }
            function gt(e) {
                var t = wt(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            function wt(e, t) {
                if ("object" != typeof e || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }
            function Ot(e, t, n) {
                var r = (0,
                    ca.useRef)(void 0 !== e)
                    , o = (0,
                    ca.useState)(t)
                    , i = o[0]
                    , a = o[1]
                    , u = void 0 !== e
                    , c = r.current;
                return r.current = u,
                !u && c && i !== t && a(t),
                    [u ? e : i, (0,
                        ca.useCallback)((function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                                r[o - 1] = arguments[o];
                            n && n.apply(void 0, [e].concat(r)),
                                a(e)
                        }
                    ), [n])]
            }
            function Et(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                        var o, i = n, a = i[bt(r)], u = i[r], c = We(i, [bt(r), r].map(gt)), s = t[r], l = Ot(u, a, e[s]), f = l[0], p = l[1];
                        return ht({}, c, ((o = {})[r] = f,
                            o[s] = p,
                            o))
                    }
                ), e)
            }
            function xt() {
                var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
                null != e && this.setState(e)
            }
            function St(e) {
                function t(t) {
                    var n = this.constructor.getDerivedStateFromProps(e, t);
                    return null != n ? n : null
                }
                this.setState(t.bind(this))
            }
            function jt(e, t) {
                try {
                    var n = this.props
                        , r = this.state;
                    this.props = e,
                        this.state = t,
                        this.__reactInternalSnapshotFlag = !0,
                        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r)
                } finally {
                    this.props = n,
                        this.state = r
                }
            }
            function Pt(e, t) {
                return tl(e.querySelectorAll(t))
            }
            function Ct() {
                return (0,
                    ca.useReducer)((function(e) {
                        return !e
                    }
                ), !1)[1]
            }
            function kt(e) {
                return `${ol}${e}`
            }
            function Tt(e) {
                return `${il}${e}`
            }
            function _t(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                return o
            }
            function Dt(e) {
                return !e || "#" === e.trim()
            }
            function Nt({tagName: e, disabled: t, href: n, target: r, rel: o, role: i, onClick: a, tabIndex: u=0, type: c}) {
                e || (e = null != n || null != r || null != o ? "a" : "button");
                const s = {
                    tagName: e
                };
                if ("button" === e)
                    return [{
                        type: c || "button",
                        disabled: t
                    }, s];
                const l = r=>{
                        (t || "a" === e && Dt(n)) && r.preventDefault(),
                            t ? r.stopPropagation() : null == a || a(r)
                    }
                    , f = e=>{
                        " " === e.key && (e.preventDefault(),
                            l(e))
                    }
                ;
                return "a" === e && (n || (n = "#"),
                t && (n = void 0)),
                    [{
                        role: null != i ? i : "button",
                        disabled: void 0,
                        tabIndex: t ? void 0 : u,
                        href: n,
                        target: "a" === e ? r : void 0,
                        "aria-disabled": t || void 0,
                        rel: "a" === e ? o : void 0,
                        onClick: l,
                        onKeyDown: f
                    }, s]
            }
            function At(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                return o
            }
            function Rt({key: e, onClick: t, active: n, id: r, role: o, disabled: i}) {
                const a = (0,
                    ca.useContext)(ic)
                    , u = (0,
                    ca.useContext)(rl)
                    , c = (0,
                    ca.useContext)(nc);
                let s = n;
                const l = {
                    role: o
                };
                if (u) {
                    !o && "tablist" === u.role && (l.role = "tab");
                    const t = u.getControllerId(null != e ? e : null)
                        , i = u.getControlledId(null != e ? e : null);
                    l[kt("event-key")] = e,
                        l.id = t || r,
                        s = null == n && null != e ? u.activeKey === e : n,
                    (s || (null == c || !c.unmountOnExit) && (null == c || !c.mountOnEnter)) && (l["aria-controls"] = i)
                }
                return "tab" === l.role && (l["aria-selected"] = s,
                s || (l.tabIndex = -1),
                i && (l.tabIndex = -1,
                    l["aria-disabled"] = !0)),
                    l.onClick = $e((n=>{
                            i || (null == t || t(n),
                            null != e && a && !n.isPropagationStopped() && a(e, n))
                        }
                    )),
                    [l, {
                        isActive: s
                    }]
            }
            function It(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                return o
            }
            function Lt() {
                return (0,
                    ca.useState)(null)
            }
            function Ft() {
                var e = (0,
                    ca.useRef)(!0)
                    , t = (0,
                    ca.useRef)((function() {
                        return e.current
                    }
                ));
                return (0,
                    ca.useEffect)((function() {
                        return e.current = !0,
                            function() {
                                e.current = !1
                            }
                    }
                ), []),
                    t.current
            }
            function $t(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                return o
            }
            function Zt(e) {
                return !e || "#" === e.trim()
            }
            function Vt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                    e
            }
            function Ut(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                    ))),
                        n.push.apply(n, r)
                }
                return n
            }
            function Kt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ut(Object(n), !0).forEach((function(t) {
                            Vt(e, t, n[t])
                        }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                    ))
                }
                return e
            }
            function Bt(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                return o
            }
            function Wt(e, t) {
                if (null == e)
                    return {};
                var n, r, o = Bt(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            function zt(e, t) {
                return Ht(e) || qt(e, t) || Gt(e, t) || Yt()
            }
            function Ht(e) {
                if (Array.isArray(e))
                    return e
            }
            function qt(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = []
                        , r = !0
                        , o = !1
                        , i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                        !t || n.length !== t); r = !0)
                            ;
                    } catch (e) {
                        o = !0,
                            i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return n
                }
            }
            function Gt(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return Xt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Xt(e, t)
                }
            }
            function Xt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function Yt() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            function Jt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                    e
            }
            function Qt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                    ))),
                        n.push.apply(n, r)
                }
                return n
            }
            function en(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Qt(Object(n), !0).forEach((function(t) {
                            Jt(e, t, n[t])
                        }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                    ))
                }
                return e
            }
            function tn() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function(e) {
                    return t.reduceRight((function(e, t) {
                            return t(e)
                        }
                    ), e)
                }
            }
            function nn(e) {
                return function t() {
                    for (var n = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                        o[i] = arguments[i];
                    return o.length >= e.length ? e.apply(this, o) : function() {
                        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
                            r[i] = arguments[i];
                        return t.apply(n, [].concat(o, r))
                    }
                }
            }
            function rn(e) {
                return {}.toString.call(e).includes("Object")
            }
            function on(e) {
                return !Object.keys(e).length
            }
            function an(e) {
                return "function" == typeof e
            }
            function un(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            function cn(e, t) {
                return rn(t) || Lf("changeType"),
                Object.keys(t).some((function(t) {
                        return !un(e, t)
                    }
                )) && Lf("changeField"),
                    t
            }
            function sn(e) {
                an(e) || Lf("selectorType")
            }
            function ln(e) {
                an(e) || rn(e) || Lf("handlerType"),
                rn(e) && Object.values(e).some((function(e) {
                        return !an(e)
                    }
                )) && Lf("handlersType")
            }
            function fn(e) {
                e || Lf("initialIsRequired"),
                rn(e) || Lf("initialType"),
                on(e) && Lf("initialContent")
            }
            function pn(e, t) {
                throw new Error(e[t] || e.default)
            }
            function dn(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e) {
                            return e
                        }
                    ;
                    return Ff.selector(e),
                        e(o.current)
                }
                function n(e) {
                    tn(i, a, u, c)(e)
                }
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Ff.initial(e),
                    Ff.handler(r);
                var o = {
                    current: e
                }
                    , i = nn(mn)(o, r)
                    , a = nn(yn)(o)
                    , u = nn(Ff.changes)(e)
                    , c = nn(vn)(o);
                return [t, n]
            }
            function vn(e, t) {
                return an(t) ? t(e.current) : t
            }
            function yn(e, t) {
                return e.current = en(en({}, e.current), t),
                    t
            }
            function mn(e, t, n) {
                return an(t) ? t(e.current) : Object.keys(n).forEach((function(n) {
                        var r;
                        return null === (r = t[n]) || void 0 === r ? void 0 : r.call(t, e.current[n])
                    }
                )),
                    n
            }
            function hn(e) {
                return function t() {
                    for (var n = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                        o[i] = arguments[i];
                    return o.length >= e.length ? e.apply(this, o) : function() {
                        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
                            r[i] = arguments[i];
                        return t.apply(n, [].concat(o, r))
                    }
                }
            }
            function bn(e) {
                return {}.toString.call(e).includes("Object")
            }
            function gn(e) {
                return e || Kf("configIsRequired"),
                Vf(e) || Kf("configType"),
                    e.urls ? (wn(),
                        {
                            paths: {
                                vs: e.urls.monacoBase
                            }
                        }) : e
            }
            function wn() {
                console.warn(Uf.deprecation)
            }
            function On(e, t) {
                throw new Error(e[t] || e.default)
            }
            function En(e, t) {
                return Object.keys(t).forEach((function(n) {
                        t[n]instanceof Object && e[n] && Object.assign(t[n], En(e[n], t[n]))
                    }
                )),
                    Kt(Kt({}, e), t)
            }
            function xn(e) {
                var t = !1
                    , n = new Promise((function(n, r) {
                        e.then((function(e) {
                                return t ? r(qf) : n(e)
                            }
                        )),
                            e.catch(r)
                    }
                ));
                return n.cancel = function() {
                    return t = !0
                }
                    ,
                    n
            }
            function Sn(e) {
                var t = Bf.config(e)
                    , n = t.monaco
                    , r = Wt(t, ["monaco"]);
                Jf((function(e) {
                        return {
                            config: Hf(e.config, r),
                            monaco: n
                        }
                    }
                ))
            }
            function jn() {
                var e = Yf((function(e) {
                        return {
                            monaco: e.monaco,
                            isInitialized: e.isInitialized,
                            resolve: e.resolve
                        }
                    }
                ));
                if (!e.isInitialized) {
                    if (Jf({
                        isInitialized: !0
                    }),
                        e.monaco)
                        return e.resolve(e.monaco),
                            Gf(Qf);
                    if (window.monaco && window.monaco.editor)
                        return _n(window.monaco),
                            e.resolve(window.monaco),
                            Gf(Qf);
                    zf(Pn, kn)(Tn)
                }
                return Gf(Qf)
            }
            function Pn(e) {
                return document.body.appendChild(e)
            }
            function Cn(e) {
                var t = document.createElement("script");
                return e && (t.src = e),
                    t
            }
            function kn(e) {
                var t = Yf((function(e) {
                        return {
                            config: e.config,
                            reject: e.reject
                        }
                    }
                ))
                    , n = Cn("".concat(t.config.paths.vs, "/loader.js"));
                return n.onload = function() {
                    return e()
                }
                    ,
                    n.onerror = t.reject,
                    n
            }
            function Tn() {
                var e = Yf((function(e) {
                        return {
                            config: e.config,
                            resolve: e.resolve,
                            reject: e.reject
                        }
                    }
                ))
                    , t = window.require;
                t.config(e.config),
                    t(["vs/editor/editor.main"], (function(t) {
                            _n(t),
                                e.resolve(t)
                        }
                    ), (function(t) {
                            e.reject(t)
                        }
                    ))
            }
            function _n(e) {
                Yf().monaco || Jf({
                    monaco: e
                })
            }
            function Dn() {
                return Yf((function(e) {
                        return e.monaco
                    }
                ))
            }
            function Mn({children: e}) {
                return ca.createElement("div", {
                    style: np.container
                }, e)
            }
            function Nn({width: e, height: t, isEditorReady: n, loading: r, _ref: o, className: i, wrapperProps: a}) {
                return ca.createElement("section", Mt({
                    style: $c(Mt({}, tp.wrapper), {
                        width: e,
                        height: t
                    })
                }, a), !n && ca.createElement(rp, null, r), ca.createElement("div", {
                    ref: o,
                    style: Mt(Mt({}, tp.fullWidth), !n && tp.hide),
                    className: i
                }))
            }
            function An(e) {
                (0,
                    ca.useEffect)(e, [])
            }
            function Rn(e, t, n=!0) {
                let r = (0,
                    ca.useRef)(!0);
                (0,
                    ca.useEffect)(r.current || !n ? ()=>{
                        r.current = !1
                    }
                    : e, t)
            }
            function In() {}
            function Ln(e, t, n, r) {
                return Fn(e, r) || $n(e, t, n, r)
            }
            function Fn(e, t) {
                return e.editor.getModel(Zn(e, t))
            }
            function $n(e, t, n, r) {
                return e.editor.createModel(t, n, r ? Zn(e, r) : void 0)
            }
            function Zn(e, t) {
                return e.Uri.parse(t)
            }
            function Vn({original: e, modified: t, language: n, originalLanguage: r, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: a, keepCurrentOriginalModel: u=!1, keepCurrentModifiedModel: c=!1, theme: s="light", loading: l="Loading...", options: f={}, height: p="100%", width: d="100%", className: v, wrapperProps: y={}, beforeMount: m=In, onMount: h=In}) {
                function b() {
                    var e, t, n, r;
                    let o = null == (e = x.current) ? void 0 : e.getModel();
                    u || null == (t = null == o ? void 0 : o.original) || t.dispose(),
                    c || null == (n = null == o ? void 0 : o.modified) || n.dispose(),
                    null == (r = x.current) || r.dispose()
                }
                let[g,w] = (0,
                    ca.useState)(!1)
                    , [O,E] = (0,
                    ca.useState)(!0)
                    , x = (0,
                    ca.useRef)(null)
                    , S = (0,
                    ca.useRef)(null)
                    , j = (0,
                    ca.useRef)(null)
                    , P = (0,
                    ca.useRef)(h)
                    , C = (0,
                    ca.useRef)(m)
                    , k = (0,
                    ca.useRef)(!1);
                ap((()=>{
                        let e = ep.init();
                        return e.then((e=>(S.current = e) && E(!1))).catch((e=>"cancelation" !== (null == e ? void 0 : e.type) && console.error("Monaco initialization: error:", e))),
                            ()=>x.current ? b() : e.cancel()
                    }
                )),
                    up((()=>{
                            let e = x.current.getModifiedEditor();
                            e.getOption(S.current.editor.EditorOption.readOnly) ? e.setValue(t || "") : t !== e.getValue() && (e.executeEdits("", [{
                                range: e.getModel().getFullModelRange(),
                                text: t || "",
                                forceMoveMarkers: !0
                            }]),
                                e.pushUndoStop())
                        }
                    ), [t], g),
                    up((()=>{
                            var t, n;
                            null == (n = null == (t = x.current) ? void 0 : t.getModel()) || n.original.setValue(e || "")
                        }
                    ), [e], g),
                    up((()=>{
                            let {original: e, modified: t} = x.current.getModel();
                            S.current.editor.setModelLanguage(e, r || n || "text"),
                                S.current.editor.setModelLanguage(t, o || n || "text")
                        }
                    ), [n, r, o], g),
                    up((()=>{
                            var e;
                            null == (e = S.current) || e.editor.setTheme(s)
                        }
                    ), [s], g),
                    up((()=>{
                            var e;
                            null == (e = x.current) || e.updateOptions(f)
                        }
                    ), [f], g);
                let T = (0,
                    ca.useCallback)((()=>{
                        var u;
                        if (!S.current)
                            return;
                        C.current(S.current);
                        let c = Ln(S.current, e || "", r || n || "text", i || "")
                            , s = Ln(S.current, t || "", o || n || "text", a || "");
                        null == (u = x.current) || u.setModel({
                            original: c,
                            modified: s
                        })
                    }
                ), [n, t, o, e, r, i, a])
                    , _ = (0,
                    ca.useCallback)((()=>{
                        var e;
                        !k.current && j.current && (x.current = S.current.editor.createDiffEditor(j.current, Mt({
                            automaticLayout: !0
                        }, f)),
                            T(),
                        null == (e = S.current) || e.editor.setTheme(s),
                            w(!0),
                            k.current = !0)
                    }
                ), [f, s, T]);
                return (0,
                    ca.useEffect)((()=>{
                        g && P.current(x.current, S.current)
                    }
                ), [g]),
                    (0,
                        ca.useEffect)((()=>{
                            !O && !g && _()
                        }
                    ), [O, g, _]),
                    up((()=>{
                            if (x.current && S.current) {
                                let t = x.current.getOriginalEditor()
                                    , o = Ln(S.current, e || "", r || n || "text", i || "");
                                o !== t.getModel() && t.setModel(o)
                            }
                        }
                    ), [i], g),
                    up((()=>{
                            if (x.current && S.current) {
                                let e = x.current.getModifiedEditor()
                                    , r = Ln(S.current, t || "", o || n || "text", a || "");
                                r !== e.getModel() && e.setModel(r)
                            }
                        }
                    ), [a], g),
                    ca.createElement(ip, {
                        width: d,
                        height: p,
                        isEditorReady: g,
                        loading: l,
                        _ref: j,
                        className: v,
                        wrapperProps: y
                    })
            }
            function Un(e) {
                let t = (0,
                    ca.useRef)();
                return (0,
                    ca.useEffect)((()=>{
                        t.current = e
                    }
                ), [e]),
                    t.current
            }
            function Kn({defaultValue: e, defaultLanguage: t, defaultPath: n, value: r, language: o, path: i, theme: a="light", line: u, loading: c="Loading...", options: s={}, overrideServices: l={}, saveViewState: f=!0, keepCurrentModel: p=!1, width: d="100%", height: v="100%", className: y, wrapperProps: m={}, beforeMount: h=In, onMount: b=In, onChange: g, onValidate: w=In}) {
                function O() {
                    var e, t;
                    null == (e = D.current) || e.dispose(),
                        p ? f && lp.set(i, C.current.saveViewState()) : null == (t = C.current.getModel()) || t.dispose(),
                        C.current.dispose()
                }
                let[E,x] = (0,
                    ca.useState)(!1)
                    , [S,j] = (0,
                    ca.useState)(!0)
                    , P = (0,
                    ca.useRef)(null)
                    , C = (0,
                    ca.useRef)(null)
                    , k = (0,
                    ca.useRef)(null)
                    , T = (0,
                    ca.useRef)(b)
                    , _ = (0,
                    ca.useRef)(h)
                    , D = (0,
                    ca.useRef)()
                    , M = (0,
                    ca.useRef)(r)
                    , N = sp(i)
                    , A = (0,
                    ca.useRef)(!1)
                    , R = (0,
                    ca.useRef)(!1);
                ap((()=>{
                        let e = ep.init();
                        return e.then((e=>(P.current = e) && j(!1))).catch((e=>"cancelation" !== (null == e ? void 0 : e.type) && console.error("Monaco initialization: error:", e))),
                            ()=>C.current ? O() : e.cancel()
                    }
                )),
                    up((()=>{
                            var a, u, c, s;
                            let l = Ln(P.current, e || r || "", t || o || "", i || n || "");
                            l !== (null == (a = C.current) ? void 0 : a.getModel()) && (f && lp.set(N, null == (u = C.current) ? void 0 : u.saveViewState()),
                            null == (c = C.current) || c.setModel(l),
                            f && (null == (s = C.current) || s.restoreViewState(lp.get(i))))
                        }
                    ), [i], E),
                    up((()=>{
                            var e;
                            null == (e = C.current) || e.updateOptions(s)
                        }
                    ), [s], E),
                    up((()=>{
                            !C.current || void 0 === r || (C.current.getOption(P.current.editor.EditorOption.readOnly) ? C.current.setValue(r) : r !== C.current.getValue() && (R.current = !0,
                                C.current.executeEdits("", [{
                                    range: C.current.getModel().getFullModelRange(),
                                    text: r,
                                    forceMoveMarkers: !0
                                }]),
                                C.current.pushUndoStop(),
                                R.current = !1))
                        }
                    ), [r], E),
                    up((()=>{
                            var e, t;
                            let n = null == (e = C.current) ? void 0 : e.getModel();
                            n && o && (null == (t = P.current) || t.editor.setModelLanguage(n, o))
                        }
                    ), [o], E),
                    up((()=>{
                            var e;
                            void 0 !== u && (null == (e = C.current) || e.revealLine(u))
                        }
                    ), [u], E),
                    up((()=>{
                            var e;
                            null == (e = P.current) || e.editor.setTheme(a)
                        }
                    ), [a], E);
                let I = (0,
                    ca.useCallback)((()=>{
                        var u;
                        if (k.current && P.current && !A.current) {
                            _.current(P.current);
                            let c = i || n
                                , p = Ln(P.current, r || e || "", t || o || "", c || "");
                            C.current = null == (u = P.current) ? void 0 : u.editor.create(k.current, Mt({
                                model: p,
                                automaticLayout: !0
                            }, s), l),
                            f && C.current.restoreViewState(lp.get(c)),
                                P.current.editor.setTheme(a),
                                x(!0),
                                A.current = !0
                        }
                    }
                ), [e, t, n, r, o, i, s, l, f, a]);
                return (0,
                    ca.useEffect)((()=>{
                        E && T.current(C.current, P.current)
                    }
                ), [E]),
                    (0,
                        ca.useEffect)((()=>{
                            !S && !E && I()
                        }
                    ), [S, E, I]),
                    M.current = r,
                    (0,
                        ca.useEffect)((()=>{
                            var e, t;
                            E && g && (null == (e = D.current) || e.dispose(),
                                D.current = null == (t = C.current) ? void 0 : t.onDidChangeModelContent((e=>{
                                        R.current || g(C.current.getValue(), e)
                                    }
                                )))
                        }
                    ), [E, g]),
                    (0,
                        ca.useEffect)((()=>{
                            if (E) {
                                let e = P.current.editor.onDidChangeMarkers((e=>{
                                        var t;
                                        let n = null == (t = C.current.getModel()) ? void 0 : t.uri;
                                        if (n && e.find((e=>e.path === n.path))) {
                                            let e = P.current.editor.getModelMarkers({
                                                resource: n
                                            });
                                            null == w || w(e)
                                        }
                                    }
                                ));
                                return ()=>{
                                    null == e || e.dispose()
                                }
                            }
                            return ()=>{}
                        }
                    ), [E, w]),
                    ca.createElement(ip, {
                        width: d,
                        height: v,
                        isEditorReady: E,
                        loading: c,
                        _ref: k,
                        className: y,
                        wrapperProps: m
                    })
            }
            function Bn() {
                const {language: e, lessonVersion: t} = (0,
                    ca.useContext)(xp)
                    , {content: n, focusesCount: r} = Ou((e=>e.editorSlice))
                    , o = ku()
                    , i = (0,
                    ca.useRef)(null)
                    , a = `lesson-version-${t.id}`
                    , [u,c] = (0,
                    dp._)(a);
                (0,
                    ca.useEffect)((()=>{
                        var e;
                        null == (e = i.current) || e.focus()
                    }
                ), [r]);
                const s = ()=>{
                        o(Rf.runCheck({
                            lessonVersion: t
                        }))
                    }
                    , l = {
                        tabSize: Op(e),
                        insertSpaces: Ep(e)
                    }
                    , f = (e,t)=>{
                        i.current = e;
                        const n = e.getModel();
                        n.updateOptions(l),
                            n.pushEOL(0),
                            i.current.focus(),
                            [{
                                key: t.KeyMod.CtrlCmd | t.KeyCode.Enter,
                                action: s
                            }].forEach((({key: e, action: t})=>{
                                    i.current.addCommand(e, t)
                                }
                            )),
                            t.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                                diagnosticCodesToIgnore: [6385]
                            })
                    }
                    , p = e=>{
                        c(e),
                            o(Rf.changeContent({
                                content: e
                            }))
                    }
                ;
                return ca.createElement(pp, {
                    defaultValue: u || "",
                    value: n,
                    options: Sp,
                    defaultLanguage: wp(e),
                    onChange: p,
                    onMount: f,
                    className: "w-100 h-100"
                })
            }
            function Wn() {
                const {lessonMember: e} = (0,
                    ca.useContext)(xp)
                    , t = Ou((e=>e.checkInfoSlice))
                    , {t: n} = Ae();
                if (Gl.checked !== t.processState)
                    return null;
                const r = n(`check.${t.result}.message`)
                    , o = n("signInSuggestion")
                    , i = gc()("mt-auto alert mb-0 small p-2", {
                    "alert-success": t.passed,
                    "alert-warning": !t.passed
                })
                    , a = _p.ansi_to_html(decodeURIComponent(Tp()(t.output)));
                return ca.createElement("div", {
                    className: "d-flex flex-column h-100"
                }, ca.createElement("pre", null, ca.createElement("code", {
                    className: "nohighlight",
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })), ca.createElement("div", {
                    className: i,
                    dangerouslySetInnerHTML: {
                        __html: r
                    }
                }), !e.id && t.passed && ca.createElement("div", {
                    className: "alert alert-warning mt-1 mb-0 small p-2",
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                }))
            }
            function zn(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Hn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                    "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                }
            }
            function qn(e, t, n) {
                return t && Hn(e.prototype, t),
                n && Hn(e, n),
                    e
            }
            function Gn(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Yn(e, t)
            }
            function Xn(e) {
                return (Xn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function Yn(e, t) {
                return (Yn = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            function Jn() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }
            function Qn(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function er(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? Qn(e) : t
            }
            function tr(e) {
                var t = Jn();
                return function() {
                    var n, r = Xn(e);
                    if (t) {
                        var o = Xn(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else
                        n = r.apply(this, arguments);
                    return er(this, n)
                }
            }
            function nr(e) {
                return rr(e) || or(e) || ir(e) || ur()
            }
            function rr(e) {
                if (Array.isArray(e))
                    return ar(e)
            }
            function or(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }
            function ir(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return ar(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ar(e, t)
                }
            }
            function ar(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function ur() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            function cr(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                    , n = String(e);
                if (0 === t)
                    return n;
                var r = n.match(/(.*?)([0-9]+)(.*)/)
                    , o = r ? r[1] : ""
                    , i = r ? r[3] : ""
                    , a = r ? r[2] : n
                    , u = a.length >= t ? a : (nr(Array(t)).map((function() {
                        return "0"
                    }
                )).join("") + a).slice(-1 * t);
                return "".concat(o).concat(u).concat(i)
            }
            function sr(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n.now, o = void 0 === r ? Date.now : r, i = n.precision, a = void 0 === i ? 0 : i, u = n.controlled, c = n.offsetTime, s = void 0 === c ? 0 : c, l = n.overtime;
                t = "string" == typeof e ? new Date(e).getTime() : e instanceof Date ? e.getTime() : e,
                u || (t += s);
                var f = u ? t : t - o()
                    , p = Math.min(20, Math.max(0, a))
                    , d = Math.round(1e3 * parseFloat(((l ? f : Math.max(0, f)) / 1e3).toFixed(p)))
                    , v = Math.abs(d) / 1e3;
                return {
                    total: d,
                    days: Math.floor(v / 86400),
                    hours: Math.floor(v / 3600 % 24),
                    minutes: Math.floor(v / 60 % 60),
                    seconds: Math.floor(v % 60),
                    milliseconds: Number((v % 1 * 1e3).toFixed()),
                    completed: d <= 0
                }
            }
            function lr(e, t) {
                var n = e.days
                    , r = e.hours
                    , o = e.minutes
                    , i = e.seconds
                    , a = Object.assign(Object.assign({}, Mp), t)
                    , u = a.daysInHours
                    , c = a.zeroPadTime
                    , s = a.zeroPadDays
                    , l = void 0 === s ? c : s
                    , f = Math.min(2, c)
                    , p = u ? cr(r + 24 * n, c) : cr(r, f);
                return {
                    days: u ? "" : cr(n, l),
                    hours: p,
                    minutes: cr(o, f),
                    seconds: cr(i, f)
                }
            }
            function fr() {
                const {language: e, lessonVersion: t} = (0,
                        ca.useContext)(xp)
                    , {editor: n, solution: r} = Ou((e=>({
                        editor: e.editorSlice,
                        solution: e.solutionSlice
                    })))
                    , {t: o} = Ae()
                    , i = ku()
                    , a = ()=>{
                        if (!n.content)
                            return ca.createElement("p", {
                                className: "mt-3"
                            }, o("userCodeInstructions"));
                        const t = ua.highlight(n.content, {
                            language: gp(e)
                        }).value;
                        return ca.createElement(ca.Fragment, null, ca.createElement("h2", {
                            className: "h3"
                        }, o("userCode")), ca.createElement("pre", null, ca.createElement("code", null, ca.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        }))))
                    }
                    , u = ()=>{
                        const n = ua.highlight(t.original_code, {
                            language: gp(e)
                        }).value;
                        return ca.createElement("div", {
                            className: "p-lg-3 hexlet-basics-content",
                            id: "basics-solution"
                        }, ca.createElement("h2", {
                            className: "h3"
                        }, o("teacherSolution")), ca.createElement("pre", null, ca.createElement("code", null, ca.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        }))), a())
                    }
                    , c = ()=>{
                        i(Rf.changeSolutionProcessState({
                            processState: Yl.shown
                        }))
                    }
                    , s = ()=>ca.createElement(ca.Fragment, null, ca.createElement("p", null, o("solutionNotice")), ca.createElement("div", {
                        className: "text-center"
                    }, ca.createElement("button", {
                        type: "button",
                        className: "btn btn-secondary px-4",
                        onClick: c
                    }, o("showSolution"))))
                    , l = e=>{
                        const {completed: t} = e;
                        if (t || Yl.canBeShown === r.processState)
                            return s();
                        const n = (0,
                            Ip.Z)(new Date(e.total), "mm:ss");
                        return ca.createElement("div", {
                            className: "text-center"
                        }, ca.createElement("p", {
                            className: "lead"
                        }, o("solutionInstructions")), ca.createElement("div", {
                            className: "display-4"
                        }, n), ca.createElement("img", {
                            className: "img-fluid px-5",
                            src: Lp,
                            alt: "waiting_clock"
                        }))
                    }
                ;
                return ca.createElement("div", null, Yl.shown === r.processState ? u() : ca.createElement(Rp, {
                    date: r.startTime + r.waitingTime,
                    renderer: l
                }))
            }
            function pr() {
                const {language: e, lessonVersion: t} = (0,
                    ca.useContext)(xp)
                    , {t: n} = Ae()
                    , r = ua.highlight(t.test_code, {
                    language: gp(e)
                }).value;
                return ca.createElement("div", null, ca.createElement("p", {
                    className: "text-center lead"
                }, n("testInstructions")), ca.createElement("pre", null, ca.createElement("code", null, ca.createElement("div", {
                    className: "hexlet-basics-content",
                    dangerouslySetInnerHTML: {
                        __html: r
                    }
                }))))
            }
            function dr() {
                const {t: e} = Ae()
                    , t = ku()
                    , {currentTab: n} = Ou((e=>qp(Hp({}, e.tabsBoxSlice), {
                    checkInfo: e.checkInfoSlice
                })))
                    , r = e=>{
                    t(Rf.changeTab({
                        newTabState: e
                    }))
                }
                    , {editor: o, output: i, solution: a, testForExercise: u} = Xl;
                return ca.createElement(el.Container, {
                    id: "tabs",
                    activeKey: n,
                    onSelect: r
                }, ca.createElement(Hl, {
                    variant: "tabs",
                    className: "justify-content-center small"
                }, Object.values(Xl).map((t=>ca.createElement(Hl.Item, {
                    key: t
                }, ca.createElement(Hl.Link, {
                    href: `#${t}`,
                    className: "border-top-0 text-muted rounded-0",
                    eventKey: t
                }, e(t)))))), ca.createElement(el.Content, {
                    bsPrefix: "d-flex h-100 tab-content overflow-auto"
                }, ca.createElement(el.Pane, {
                    eventKey: o,
                    bsPrefix: "tab-pane h-100 pe-3 w-100 overflow-hidden"
                }, ca.createElement(jp, null)), ca.createElement(el.Pane, {
                    eventKey: i,
                    bsPrefix: "tab-pane h-100 p-3 w-100"
                }, ca.createElement(Dp, null)), ca.createElement(el.Pane, {
                    eventKey: u,
                    bsPrefix: "tab-pane h-100 p-3 w-100"
                }, ca.createElement($p, null)), ca.createElement(el.Pane, {
                    eventKey: a,
                    bsPrefix: "tab-pane h-100 p-3 w-100"
                }, ca.createElement(Fp, null))))
            }
            function vr() {
                return vr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                    ,
                    vr.apply(this, arguments)
            }
            function yr(e) {
                return (Yp[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
            }
            function mr(e) {
                return Xp.includes(e)
            }
            function hr(e, t) {
                return void 0 === t && (t = ","),
                    e.split(t)
            }
            function br(e, t, n) {
                void 0 === t && (t = "+");
                var r = e.toLocaleLowerCase().split(t).map((function(e) {
                        return yr(e)
                    }
                ));
                return vr({}, {
                    alt: r.includes("alt"),
                    ctrl: r.includes("ctrl") || r.includes("control"),
                    shift: r.includes("shift"),
                    meta: r.includes("meta"),
                    mod: r.includes("mod")
                }, {
                    keys: r.filter((function(e) {
                            return !Xp.includes(e)
                        }
                    )),
                    description: n
                })
            }
            function gr(e, t) {
                return void 0 === t && (t = ","),
                    (Array.isArray(e) ? e : e.split(t)).every((function(e) {
                            return Jp.has(e.trim().toLowerCase())
                        }
                    ))
            }
            function wr(e) {
                var t = Array.isArray(e) ? e : [e];
                Jp.has("meta") && Jp.forEach((function(e) {
                        return !mr(e) && Jp.delete(e.toLowerCase())
                    }
                )),
                    t.forEach((function(e) {
                            return Jp.add(e.toLowerCase())
                        }
                    ))
            }
            function Or(e) {
                var t = Array.isArray(e) ? e : [e];
                "meta" === e ? Jp.clear() : t.forEach((function(e) {
                        return Jp.delete(e.toLowerCase())
                    }
                ))
            }
            function Er(e, t, n) {
                ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
            }
            function xr(e, t, n) {
                return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
            }
            function Sr(e) {
                return jr(e, ["input", "textarea", "select"])
            }
            function jr(e, t) {
                var n = e.target;
                void 0 === t && (t = !1);
                var r = n && n.tagName;
                return t instanceof Array ? !!(r && t && t.some((function(e) {
                        return e.toLowerCase() === r.toLowerCase()
                    }
                ))) : !(!r || !t || !0 !== t)
            }
            function Pr(e, t) {
                return 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),
                    !0) : !t || (e.some((function(e) {
                        return t.includes(e)
                    }
                )) || e.includes("*"))
            }
            function Cr(e, t) {
                return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
                        return n && Cr(e[r], t[r])
                    }
                ), !0) : e === t
            }
            function kr(e) {
                var t = (0,
                    ca.useRef)(void 0);
                return Cr(t.current, e) || (t.current = e),
                    t.current
            }
            function Tr(e, t, n, r) {
                var o = (0,
                    ca.useRef)(null)
                    , i = (0,
                    ca.useRef)(!1)
                    , a = n instanceof Array ? r instanceof Array ? void 0 : r : n
                    , u = e instanceof Array ? e.join(null == a ? void 0 : a.splitKey) : e
                    , c = n instanceof Array ? n : r instanceof Array ? r : void 0
                    , s = (0,
                    ca.useCallback)(t, null != c ? c : [])
                    , l = (0,
                    ca.useRef)(s);
                l.current = c ? s : t;
                var f = kr(a)
                    , p = rd().enabledScopes
                    , d = td();
                return id((function() {
                        if (!1 !== (null == f ? void 0 : f.enabled) && Pr(p, null == f ? void 0 : f.scopes)) {
                            var e = function(e, t) {
                                var n;
                                if (void 0 === t && (t = !1),
                                (!Sr(e) || jr(e, null == f ? void 0 : f.enableOnFormTags)) && (null == f || null == f.ignoreEventWhen || !f.ignoreEventWhen(e))) {
                                    if (null !== o.current && document.activeElement !== o.current && !o.current.contains(document.activeElement))
                                        return void od(e);
                                    null != (n = e.target) && n.isContentEditable && (null == f || !f.enableOnContentEditable) || hr(u, null == f ? void 0 : f.splitKey).forEach((function(n) {
                                            var r, o = br(n, null == f ? void 0 : f.combinationKey);
                                            if (Qp(e, o, null == f ? void 0 : f.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                                                if (t && i.current)
                                                    return;
                                                if (Er(e, o, null == f ? void 0 : f.preventDefault),
                                                    !xr(e, o, null == f ? void 0 : f.enabled))
                                                    return void od(e);
                                                l.current(e, o),
                                                t || (i.current = !0)
                                            }
                                        }
                                    ))
                                }
                            }
                                , t = function(t) {
                                void 0 !== t.key && (wr(yr(t.code)),
                                (void 0 === (null == f ? void 0 : f.keydown) && !0 !== (null == f ? void 0 : f.keyup) || null != f && f.keydown) && e(t))
                            }
                                , n = function(t) {
                                void 0 !== t.key && (Or(yr(t.code)),
                                    i.current = !1,
                                null != f && f.keyup && e(t, !0))
                            }
                                , r = o.current || (null == a ? void 0 : a.document) || document;
                            return r.addEventListener("keyup", n),
                                r.addEventListener("keydown", t),
                            d && hr(u, null == f ? void 0 : f.splitKey).forEach((function(e) {
                                    return d.addHotkey(br(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
                                }
                            )),
                                function() {
                                    r.removeEventListener("keyup", n),
                                        r.removeEventListener("keydown", t),
                                    d && hr(u, null == f ? void 0 : f.splitKey).forEach((function(e) {
                                            return d.removeHotkey(br(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
                                        }
                                    ))
                                }
                        }
                    }
                ), [u, f, p]),
                    o
            }
            function _r(e, t) {
                let n = e;
                return "left" === e ? n = t ? "end" : "start" : "right" === e && (n = t ? "start" : "end"),
                    n
            }
            function Dr(e="absolute") {
                return {
                    position: e,
                    top: "0",
                    left: "0",
                    opacity: "0",
                    pointerEvents: "none"
                }
            }
            function Mr(e, t) {
                return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : void 0
            }
            function Nr(e) {
                var t = (0,
                    ca.useRef)(e);
                return t.current = e,
                    t
            }
            function Ar(e) {
                var t = Nr(e);
                (0,
                    ca.useEffect)((function() {
                        return function() {
                            return t.current()
                        }
                    }
                ), [])
            }
            function Rr(e, t, n) {
                var r = n - Date.now();
                e.current = r <= Dd ? setTimeout(t, r) : setTimeout((function() {
                        return Rr(e, t, n)
                    }
                ), Dd)
            }
            function Ir() {
                var e = Ft()
                    , t = (0,
                    ca.useRef)();
                return Ar((function() {
                        return clearTimeout(t.current)
                    }
                )),
                    (0,
                        ca.useMemo)((function() {
                            function n(n, o) {
                                void 0 === o && (o = 0),
                                e() && (r(),
                                    o <= Dd ? t.current = setTimeout(n, o) : Rr(t, n, Date.now() + o))
                            }
                            var r = function() {
                                return clearTimeout(t.current)
                            };
                            return {
                                set: n,
                                clear: r
                            }
                        }
                    ), [])
            }
            function Lr(e, t, n) {
                for (n of e.keys())
                    if (Fr(n, t))
                        return n
            }
            function Fr(e, t) {
                var n, r, o;
                if (e === t)
                    return !0;
                if (e && t && (n = e.constructor) === t.constructor) {
                    if (n === Date)
                        return e.getTime() === t.getTime();
                    if (n === RegExp)
                        return e.toString() === t.toString();
                    if (n === Array) {
                        if ((r = e.length) === t.length)
                            for (; r-- && Fr(e[r], t[r]); )
                                ;
                        return -1 === r
                    }
                    if (n === Set) {
                        if (e.size !== t.size)
                            return !1;
                        for (r of e)
                            if ((o = r) && "object" == typeof o && !(o = Lr(t, o)) || !t.has(o))
                                return !1;
                        return !0
                    }
                    if (n === Map) {
                        if (e.size !== t.size)
                            return !1;
                        for (r of e)
                            if ((o = r[0]) && "object" == typeof o && !(o = Lr(t, o)) || !Fr(r[1], t.get(o)))
                                return !1;
                        return !0
                    }
                    if (n === ArrayBuffer)
                        e = new Uint8Array(e),
                            t = new Uint8Array(t);
                    else if (n === DataView) {
                        if ((r = e.byteLength) === t.byteLength)
                            for (; r-- && e.getInt8(r) === t.getInt8(r); )
                                ;
                        return -1 === r
                    }
                    if (ArrayBuffer.isView(e)) {
                        if ((r = e.byteLength) === t.byteLength)
                            for (; r-- && e[r] === t[r]; )
                                ;
                        return -1 === r
                    }
                    if (!n || "object" == typeof e) {
                        for (n in r = 0,
                            e)
                            if (Ad.call(e, n) && ++r && !Ad.call(t, n) || !(n in t) || !Fr(e[n], t[n]))
                                return !1;
                        return Object.keys(t).length === r
                    }
                }
                return e != e && t != t
            }
            function $r(e) {
                var t = Ft();
                return [e[0], (0,
                    ca.useCallback)((function(n) {
                        if (t())
                            return e[1](n)
                    }
                ), [t, e[1]])]
            }
            function Zr(e) {
                return e.split("-")[0]
            }
            function Vr(e) {
                if (null == e)
                    return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }
            function Ur(e) {
                return e instanceof Vr(e).Element || e instanceof Element
            }
            function Kr(e) {
                return e instanceof Vr(e).HTMLElement || e instanceof HTMLElement
            }
            function Br(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof Vr(e).ShadowRoot || e instanceof ShadowRoot)
            }
            function Wr() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                        return e.brand + "/" + e.version
                    }
                )).join(" ") : navigator.userAgent
            }
            function zr() {
                return !/^((?!chrome|android).)*safari/i.test(Wr())
            }
            function Hr(e, t, n) {
                void 0 === t && (t = !1),
                void 0 === n && (n = !1);
                var r = e.getBoundingClientRect()
                    , o = 1
                    , i = 1;
                t && Kr(e) && (o = e.offsetWidth > 0 && Fd(r.width) / e.offsetWidth || 1,
                    i = e.offsetHeight > 0 && Fd(r.height) / e.offsetHeight || 1);
                var a = (Ur(e) ? Vr(e) : window).visualViewport
                    , u = !zr() && n
                    , c = (r.left + (u && a ? a.offsetLeft : 0)) / o
                    , s = (r.top + (u && a ? a.offsetTop : 0)) / i
                    , l = r.width / o
                    , f = r.height / i;
                return {
                    width: l,
                    height: f,
                    top: s,
                    right: c + l,
                    bottom: s + f,
                    left: c,
                    x: c,
                    y: s
                }
            }
            function qr(e) {
                var t = Hr(e)
                    , n = e.offsetWidth
                    , r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width),
                Math.abs(t.height - r) <= 1 && (r = t.height),
                    {
                        x: e.offsetLeft,
                        y: e.offsetTop,
                        width: n,
                        height: r
                    }
            }
            function Gr(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t))
                    return !0;
                if (n && Br(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r))
                            return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }
            function Xr(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }
            function Yr(e) {
                return Vr(e).getComputedStyle(e)
            }
            function Jr(e) {
                return ["table", "td", "th"].indexOf(Xr(e)) >= 0
            }
            function Qr(e) {
                return ((Ur(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }
            function eo(e) {
                return "html" === Xr(e) ? e : e.assignedSlot || e.parentNode || (Br(e) ? e.host : null) || Qr(e)
            }
            function to(e) {
                return Kr(e) && "fixed" !== Yr(e).position ? e.offsetParent : null
            }
            function no(e) {
                var t = /firefox/i.test(Wr());
                if (/Trident/i.test(Wr()) && Kr(e) && "fixed" === Yr(e).position)
                    return null;
                var n = eo(e);
                for (Br(n) && (n = n.host); Kr(n) && ["html", "body"].indexOf(Xr(n)) < 0; ) {
                    var r = Yr(n);
                    if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
                        return n;
                    n = n.parentNode
                }
                return null
            }
            function ro(e) {
                for (var t = Vr(e), n = to(e); n && Jr(n) && "static" === Yr(n).position; )
                    n = to(n);
                return n && ("html" === Xr(n) || "body" === Xr(n) && "static" === Yr(n).position) ? t : n || no(e) || t
            }
            function oo(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }
            function io(e, t, n) {
                return Id(e, Ld(t, n))
            }
            function ao(e, t, n) {
                var r = io(e, t, n);
                return r > n ? n : r
            }
            function uo() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
            function co(e) {
                return Object.assign({}, uo(), e)
            }
            function so(e, t) {
                return t.reduce((function(t, n) {
                        return t[n] = e,
                            t
                    }
                ), {})
            }
            function lo(e) {
                var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, u = Zr(n.placement), c = oo(u), s = [Ud, Vd].indexOf(u) >= 0 ? "height" : "width";
                if (i && a) {
                    var l = ev(o.padding, n)
                        , f = qr(i)
                        , p = "y" === c ? $d : Ud
                        , d = "y" === c ? Zd : Vd
                        , v = n.rects.reference[s] + n.rects.reference[c] - a[c] - n.rects.popper[s]
                        , y = a[c] - n.rects.reference[c]
                        , m = ro(i)
                        , h = m ? "y" === c ? m.clientHeight || 0 : m.clientWidth || 0 : 0
                        , b = v / 2 - y / 2
                        , g = l[p]
                        , w = h - f[s] - l[d]
                        , O = h / 2 - f[s] / 2 + b
                        , E = io(g, O, w)
                        , x = c;
                    n.modifiersData[r] = ((t = {})[x] = E,
                        t.centerOffset = E - O,
                        t)
                }
            }
            function fo(e) {
                var t = e.state
                    , n = e.options.element
                    , r = void 0 === n ? "[data-popper-arrow]" : n;
                null != r && ("string" == typeof r && !(r = t.elements.popper.querySelector(r)) || Gr(t.elements.popper, r) && (t.elements.arrow = r))
            }
            function po(e) {
                return e.split("-")[1]
            }
            function vo(e, t) {
                var n = e.x
                    , r = e.y
                    , o = t.devicePixelRatio || 1;
                return {
                    x: Fd(n * o) / o || 0,
                    y: Fd(r * o) / o || 0
                }
            }
            function yo(e) {
                var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, u = e.position, c = e.gpuAcceleration, s = e.adaptive, l = e.roundOffsets, f = e.isFixed, p = a.x, d = void 0 === p ? 0 : p, v = a.y, y = void 0 === v ? 0 : v, m = "function" == typeof l ? l({
                    x: d,
                    y: y
                }) : {
                    x: d,
                    y: y
                };
                d = m.x,
                    y = m.y;
                var h = a.hasOwnProperty("x")
                    , b = a.hasOwnProperty("y")
                    , g = Ud
                    , w = $d
                    , O = window;
                if (s) {
                    var E = ro(n)
                        , x = "clientHeight"
                        , S = "clientWidth";
                    if (E === Vr(n) && ("static" !== Yr(E = Qr(n)).position && "absolute" === u && (x = "scrollHeight",
                        S = "scrollWidth")),
                    o === $d || (o === Ud || o === Vd) && i === zd)
                        w = Zd,
                            y -= (f && E === O && O.visualViewport ? O.visualViewport.height : E[x]) - r.height,
                            y *= c ? 1 : -1;
                    if (o === Ud || (o === $d || o === Zd) && i === zd)
                        g = Vd,
                            d -= (f && E === O && O.visualViewport ? O.visualViewport.width : E[S]) - r.width,
                            d *= c ? 1 : -1
                }
                var j, P = Object.assign({
                    position: u
                }, s && tv), C = !0 === l ? vo({
                    x: d,
                    y: y
                }, Vr(n)) : {
                    x: d,
                    y: y
                };
                return d = C.x,
                    y = C.y,
                    c ? Object.assign({}, P, ((j = {})[w] = b ? "0" : "",
                        j[g] = h ? "0" : "",
                        j.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)",
                        j)) : Object.assign({}, P, ((t = {})[w] = b ? y + "px" : "",
                        t[g] = h ? d + "px" : "",
                        t.transform = "",
                        t))
            }
            function mo(e) {
                var t = e.state
                    , n = e.options
                    , r = n.gpuAcceleration
                    , o = void 0 === r || r
                    , i = n.adaptive
                    , a = void 0 === i || i
                    , u = n.roundOffsets
                    , c = void 0 === u || u
                    , s = {
                    placement: Zr(t.placement),
                    variation: po(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === t.options.strategy
                };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, yo(Object.assign({}, s, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: a,
                    roundOffsets: c
                })))),
                null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, yo(Object.assign({}, s, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: c
                })))),
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-placement": t.placement
                    })
            }
            function ho(e) {
                var t = e.state
                    , n = e.instance
                    , r = e.options
                    , o = r.scroll
                    , i = void 0 === o || o
                    , a = r.resize
                    , u = void 0 === a || a
                    , c = Vr(t.elements.popper)
                    , s = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return i && s.forEach((function(e) {
                        e.addEventListener("scroll", n.update, nv)
                    }
                )),
                u && c.addEventListener("resize", n.update, nv),
                    function() {
                        i && s.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, nv)
                            }
                        )),
                        u && c.removeEventListener("resize", n.update, nv)
                    }
            }
            function bo(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                        return rv[e]
                    }
                ))
            }
            function go(e) {
                return e.replace(/start|end/g, (function(e) {
                        return ov[e]
                    }
                ))
            }
            function wo(e) {
                var t = Vr(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }
            function Oo(e) {
                return Hr(Qr(e)).left + wo(e).scrollLeft
            }
            function Eo(e, t) {
                var n = Vr(e)
                    , r = Qr(e)
                    , o = n.visualViewport
                    , i = r.clientWidth
                    , a = r.clientHeight
                    , u = 0
                    , c = 0;
                if (o) {
                    i = o.width,
                        a = o.height;
                    var s = zr();
                    (s || !s && "fixed" === t) && (u = o.offsetLeft,
                        c = o.offsetTop)
                }
                return {
                    width: i,
                    height: a,
                    x: u + Oo(e),
                    y: c
                }
            }
            function xo(e) {
                var t, n = Qr(e), r = wo(e), o = null == (t = e.ownerDocument) ? void 0 : t.body, i = Id(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Id(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -r.scrollLeft + Oo(e), c = -r.scrollTop;
                return "rtl" === Yr(o || n).direction && (u += Id(n.clientWidth, o ? o.clientWidth : 0) - i),
                    {
                        width: i,
                        height: a,
                        x: u,
                        y: c
                    }
            }
            function So(e) {
                var t = Yr(e)
                    , n = t.overflow
                    , r = t.overflowX
                    , o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }
            function jo(e) {
                return ["html", "body", "#document"].indexOf(Xr(e)) >= 0 ? e.ownerDocument.body : Kr(e) && So(e) ? e : jo(eo(e))
            }
            function Po(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = jo(e)
                    , o = r === (null == (n = e.ownerDocument) ? void 0 : n.body)
                    , i = Vr(r)
                    , a = o ? [i].concat(i.visualViewport || [], So(r) ? r : []) : r
                    , u = t.concat(a);
                return o ? u : u.concat(Po(eo(a)))
            }
            function Co(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }
            function ko(e, t) {
                var n = Hr(e, !1, "fixed" === t);
                return n.top = n.top + e.clientTop,
                    n.left = n.left + e.clientLeft,
                    n.bottom = n.top + e.clientHeight,
                    n.right = n.left + e.clientWidth,
                    n.width = e.clientWidth,
                    n.height = e.clientHeight,
                    n.x = n.left,
                    n.y = n.top,
                    n
            }
            function To(e, t, n) {
                return t === qd ? Co(Eo(e, n)) : Ur(t) ? ko(t, n) : Co(xo(Qr(e)))
            }
            function _o(e) {
                var t = Po(eo(e))
                    , n = ["absolute", "fixed"].indexOf(Yr(e).position) >= 0 && Kr(e) ? ro(e) : e;
                return Ur(n) ? t.filter((function(e) {
                        return Ur(e) && Gr(e, n) && "body" !== Xr(e)
                    }
                )) : []
            }
            function Do(e, t, n, r) {
                var o = "clippingParents" === t ? _o(e) : [].concat(t)
                    , i = [].concat(o, [n])
                    , a = i[0]
                    , u = i.reduce((function(t, n) {
                        var o = To(e, n, r);
                        return t.top = Id(o.top, t.top),
                            t.right = Ld(o.right, t.right),
                            t.bottom = Ld(o.bottom, t.bottom),
                            t.left = Id(o.left, t.left),
                            t
                    }
                ), To(e, a, r));
                return u.width = u.right - u.left,
                    u.height = u.bottom - u.top,
                    u.x = u.left,
                    u.y = u.top,
                    u
            }
            function Mo(e) {
                var t, n = e.reference, r = e.element, o = e.placement, i = o ? Zr(o) : null, a = o ? po(o) : null, u = n.x + n.width / 2 - r.width / 2, c = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case $d:
                        t = {
                            x: u,
                            y: n.y - r.height
                        };
                        break;
                    case Zd:
                        t = {
                            x: u,
                            y: n.y + n.height
                        };
                        break;
                    case Vd:
                        t = {
                            x: n.x + n.width,
                            y: c
                        };
                        break;
                    case Ud:
                        t = {
                            x: n.x - r.width,
                            y: c
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var s = i ? oo(i) : null;
                if (null != s) {
                    var l = "y" === s ? "height" : "width";
                    switch (a) {
                        case Wd:
                            t[s] = t[s] - (n[l] / 2 - r[l] / 2);
                            break;
                        case zd:
                            t[s] = t[s] + (n[l] / 2 - r[l] / 2)
                    }
                }
                return t
            }
            function No(e, t) {
                void 0 === t && (t = {});
                var n = t
                    , r = n.placement
                    , o = void 0 === r ? e.placement : r
                    , i = n.strategy
                    , a = void 0 === i ? e.strategy : i
                    , u = n.boundary
                    , c = void 0 === u ? Hd : u
                    , s = n.rootBoundary
                    , l = void 0 === s ? qd : s
                    , f = n.elementContext
                    , p = void 0 === f ? Gd : f
                    , d = n.altBoundary
                    , v = void 0 !== d && d
                    , y = n.padding
                    , m = void 0 === y ? 0 : y
                    , h = co("number" != typeof m ? m : so(m, Bd))
                    , b = p === Gd ? Xd : Gd
                    , g = e.rects.popper
                    , w = e.elements[v ? b : p]
                    , O = Do(Ur(w) ? w : w.contextElement || Qr(e.elements.popper), c, l, a)
                    , E = Hr(e.elements.reference)
                    , x = Mo({
                    reference: E,
                    element: g,
                    strategy: "absolute",
                    placement: o
                })
                    , S = Co(Object.assign({}, g, x))
                    , j = p === Gd ? S : E
                    , P = {
                    top: O.top - j.top + h.top,
                    bottom: j.bottom - O.bottom + h.bottom,
                    left: O.left - j.left + h.left,
                    right: j.right - O.right + h.right
                }
                    , C = e.modifiersData.offset;
                if (p === Gd && C) {
                    var k = C[o];
                    Object.keys(P).forEach((function(e) {
                            var t = [Vd, Zd].indexOf(e) >= 0 ? 1 : -1
                                , n = [$d, Zd].indexOf(e) >= 0 ? "y" : "x";
                            P[e] += k[n] * t
                        }
                    ))
                }
                return P
            }
            function Ao(e, t) {
                void 0 === t && (t = {});
                var n = t
                    , r = n.placement
                    , o = n.boundary
                    , i = n.rootBoundary
                    , a = n.padding
                    , u = n.flipVariations
                    , c = n.allowedAutoPlacements
                    , s = void 0 === c ? Jd : c
                    , l = po(r)
                    , f = l ? u ? Yd : Yd.filter((function(e) {
                        return po(e) === l
                    }
                )) : Bd
                    , p = f.filter((function(e) {
                        return s.indexOf(e) >= 0
                    }
                ));
                0 === p.length && (p = f);
                var d = p.reduce((function(t, n) {
                        return t[n] = No(e, {
                            placement: n,
                            boundary: o,
                            rootBoundary: i,
                            padding: a
                        })[Zr(n)],
                            t
                    }
                ), {});
                return Object.keys(d).sort((function(e, t) {
                        return d[e] - d[t]
                    }
                ))
            }
            function Ro(e) {
                if (Zr(e) === Kd)
                    return [];
                var t = bo(e);
                return [go(e), t, go(t)]
            }
            function Io(e) {
                var t = e.state
                    , n = e.options
                    , r = e.name;
                if (!t.modifiersData[r]._skip) {
                    for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, u = void 0 === a || a, c = n.fallbackPlacements, s = n.padding, l = n.boundary, f = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, v = void 0 === d || d, y = n.allowedAutoPlacements, m = t.options.placement, h = Zr(m), b = c || (h === m || !v ? [bo(m)] : Ro(m)), g = [m].concat(b).reduce((function(e, n) {
                            return e.concat(Zr(n) === Kd ? Ao(t, {
                                placement: n,
                                boundary: l,
                                rootBoundary: f,
                                padding: s,
                                flipVariations: v,
                                allowedAutoPlacements: y
                            }) : n)
                        }
                    ), []), w = t.rects.reference, O = t.rects.popper, E = new Map, x = !0, S = g[0], j = 0; j < g.length; j++) {
                        var P = g[j]
                            , C = Zr(P)
                            , k = po(P) === Wd
                            , T = [$d, Zd].indexOf(C) >= 0
                            , _ = T ? "width" : "height"
                            , D = No(t, {
                            placement: P,
                            boundary: l,
                            rootBoundary: f,
                            altBoundary: p,
                            padding: s
                        })
                            , M = T ? k ? Vd : Ud : k ? Zd : $d;
                        w[_] > O[_] && (M = bo(M));
                        var N = bo(M)
                            , A = [];
                        if (i && A.push(D[C] <= 0),
                        u && A.push(D[M] <= 0, D[N] <= 0),
                            A.every((function(e) {
                                    return e
                                }
                            ))) {
                            S = P,
                                x = !1;
                            break
                        }
                        E.set(P, A)
                    }
                    if (x)
                        for (var R = function(e) {
                            var t = g.find((function(t) {
                                    var n = E.get(t);
                                    if (n)
                                        return n.slice(0, e).every((function(e) {
                                                return e
                                            }
                                        ))
                                }
                            ));
                            if (t)
                                return S = t,
                                    "break"
                        }, I = v ? 3 : 1; I > 0; I--) {
                            if ("break" === R(I))
                                break
                        }
                    t.placement !== S && (t.modifiersData[r]._skip = !0,
                        t.placement = S,
                        t.reset = !0)
                }
            }
            function Lo(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }),
                    {
                        top: e.top - t.height - n.y,
                        right: e.right - t.width + n.x,
                        bottom: e.bottom - t.height + n.y,
                        left: e.left - t.width - n.x
                    }
            }
            function Fo(e) {
                return [$d, Vd, Zd, Ud].some((function(t) {
                        return e[t] >= 0
                    }
                ))
            }
            function $o(e) {
                var t = e.state
                    , n = e.name
                    , r = t.rects.reference
                    , o = t.rects.popper
                    , i = t.modifiersData.preventOverflow
                    , a = No(t, {
                    elementContext: "reference"
                })
                    , u = No(t, {
                    altBoundary: !0
                })
                    , c = Lo(a, r)
                    , s = Lo(u, o, i)
                    , l = Fo(c)
                    , f = Fo(s);
                t.modifiersData[n] = {
                    referenceClippingOffsets: c,
                    popperEscapeOffsets: s,
                    isReferenceHidden: l,
                    hasPopperEscaped: f
                },
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-reference-hidden": l,
                        "data-popper-escaped": f
                    })
            }
            function Zo(e, t, n) {
                var r = Zr(e)
                    , o = [Ud, $d].indexOf(r) >= 0 ? -1 : 1
                    , i = "function" == typeof n ? n(Object.assign({}, t, {
                    placement: e
                })) : n
                    , a = i[0]
                    , u = i[1];
                return a = a || 0,
                    u = (u || 0) * o,
                    [Ud, Vd].indexOf(r) >= 0 ? {
                        x: u,
                        y: a
                    } : {
                        x: a,
                        y: u
                    }
            }
            function Vo(e) {
                var t = e.state
                    , n = e.options
                    , r = e.name
                    , o = n.offset
                    , i = void 0 === o ? [0, 0] : o
                    , a = Jd.reduce((function(e, n) {
                        return e[n] = Zo(n, t.rects, i),
                            e
                    }
                ), {})
                    , u = a[t.placement]
                    , c = u.x
                    , s = u.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c,
                    t.modifiersData.popperOffsets.y += s),
                    t.modifiersData[r] = a
            }
            function Uo(e) {
                var t = e.state
                    , n = e.name;
                t.modifiersData[n] = Mo({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            }
            function Ko(e) {
                return "x" === e ? "y" : "x"
            }
            function Bo(e) {
                var t = e.state
                    , n = e.options
                    , r = e.name
                    , o = n.mainAxis
                    , i = void 0 === o || o
                    , a = n.altAxis
                    , u = void 0 !== a && a
                    , c = n.boundary
                    , s = n.rootBoundary
                    , l = n.altBoundary
                    , f = n.padding
                    , p = n.tether
                    , d = void 0 === p || p
                    , v = n.tetherOffset
                    , y = void 0 === v ? 0 : v
                    , m = No(t, {
                    boundary: c,
                    rootBoundary: s,
                    padding: f,
                    altBoundary: l
                })
                    , h = Zr(t.placement)
                    , b = po(t.placement)
                    , g = !b
                    , w = oo(h)
                    , O = Ko(w)
                    , E = t.modifiersData.popperOffsets
                    , x = t.rects.reference
                    , S = t.rects.popper
                    , j = "function" == typeof y ? y(Object.assign({}, t.rects, {
                    placement: t.placement
                })) : y
                    , P = "number" == typeof j ? {
                    mainAxis: j,
                    altAxis: j
                } : Object.assign({
                    mainAxis: 0,
                    altAxis: 0
                }, j)
                    , C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
                    , k = {
                    x: 0,
                    y: 0
                };
                if (E) {
                    if (i) {
                        var T, _ = "y" === w ? $d : Ud, D = "y" === w ? Zd : Vd, M = "y" === w ? "height" : "width", N = E[w], A = N + m[_], R = N - m[D], I = d ? -S[M] / 2 : 0, L = b === Wd ? x[M] : S[M], F = b === Wd ? -S[M] : -x[M], $ = t.elements.arrow, Z = d && $ ? qr($) : {
                            width: 0,
                            height: 0
                        }, V = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : uo(), U = V[_], K = V[D], B = io(0, x[M], Z[M]), W = g ? x[M] / 2 - I - B - U - P.mainAxis : L - B - U - P.mainAxis, z = g ? -x[M] / 2 + I + B + K + P.mainAxis : F + B + K + P.mainAxis, H = t.elements.arrow && ro(t.elements.arrow), q = H ? "y" === w ? H.clientTop || 0 : H.clientLeft || 0 : 0, G = null != (T = null == C ? void 0 : C[w]) ? T : 0, X = N + z - G, Y = io(d ? Ld(A, N + W - G - q) : A, N, d ? Id(R, X) : R);
                        E[w] = Y,
                            k[w] = Y - N
                    }
                    if (u) {
                        var J, Q = "x" === w ? $d : Ud, ee = "x" === w ? Zd : Vd, te = E[O], ne = "y" === O ? "height" : "width", re = te + m[Q], oe = te - m[ee], ie = -1 !== [$d, Ud].indexOf(h), ae = null != (J = null == C ? void 0 : C[O]) ? J : 0, ue = ie ? re : te - x[ne] - S[ne] - ae + P.altAxis, ce = ie ? te + x[ne] + S[ne] - ae - P.altAxis : oe, se = d && ie ? ao(ue, te, ce) : io(d ? ue : re, te, d ? ce : oe);
                        E[O] = se,
                            k[O] = se - te
                    }
                    t.modifiersData[r] = k
                }
            }
            function Wo(e) {
                return {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                }
            }
            function zo(e) {
                return e !== Vr(e) && Kr(e) ? Wo(e) : wo(e)
            }
            function Ho(e) {
                var t = e.getBoundingClientRect()
                    , n = Fd(t.width) / e.offsetWidth || 1
                    , r = Fd(t.height) / e.offsetHeight || 1;
                return 1 !== n || 1 !== r
            }
            function qo(e, t, n) {
                void 0 === n && (n = !1);
                var r = Kr(t)
                    , o = Kr(t) && Ho(t)
                    , i = Qr(t)
                    , a = Hr(e, o, n)
                    , u = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                    , c = {
                    x: 0,
                    y: 0
                };
                return (r || !r && !n) && (("body" !== Xr(t) || So(i)) && (u = zo(t)),
                    Kr(t) ? ((c = Hr(t, !0)).x += t.clientLeft,
                        c.y += t.clientTop) : i && (c.x = Oo(i))),
                    {
                        x: a.left + u.scrollLeft - c.x,
                        y: a.top + u.scrollTop - c.y,
                        width: a.width,
                        height: a.height
                    }
            }
            function Go(e) {
                function t(e) {
                    r.add(e.name),
                        [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                                if (!r.has(e)) {
                                    var o = n.get(e);
                                    o && t(o)
                                }
                            }
                        )),
                        o.push(e)
                }
                var n = new Map
                    , r = new Set
                    , o = [];
                return e.forEach((function(e) {
                        n.set(e.name, e)
                    }
                )),
                    e.forEach((function(e) {
                            r.has(e.name) || t(e)
                        }
                    )),
                    o
            }
            function Xo(e) {
                var t = Go(e);
                return Qd.reduce((function(e, n) {
                        return e.concat(t.filter((function(e) {
                                return e.phase === n
                            }
                        )))
                    }
                ), [])
            }
            function Yo(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                            Promise.resolve().then((function() {
                                    t = void 0,
                                        n(e())
                                }
                            ))
                        }
                    ))),
                        t
                }
            }
            function Jo(e) {
                var t = e.reduce((function(e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data)
                        }) : t,
                            e
                    }
                ), {});
                return Object.keys(t).map((function(e) {
                        return t[e]
                    }
                ))
            }
            function Qo() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return !t.some((function(e) {
                        return !(e && "function" == typeof e.getBoundingClientRect)
                    }
                ))
            }
            function ei(e) {
                void 0 === e && (e = {});
                var t = e
                    , n = t.defaultModifiers
                    , r = void 0 === n ? [] : n
                    , o = t.defaultOptions
                    , i = void 0 === o ? iv : o;
                return function(e, t, n) {
                    function o() {
                        u.orderedModifiers.forEach((function(e) {
                                var t = e.name
                                    , n = e.options
                                    , r = void 0 === n ? {} : n
                                    , o = e.effect;
                                if ("function" == typeof o) {
                                    var i = o({
                                        state: u,
                                        name: t,
                                        instance: l,
                                        options: r
                                    })
                                        , a = function() {};
                                    c.push(i || a)
                                }
                            }
                        ))
                    }
                    function a() {
                        c.forEach((function(e) {
                                return e()
                            }
                        )),
                            c = []
                    }
                    void 0 === n && (n = i);
                    var u = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, iv, i),
                        modifiersData: {},
                        elements: {
                            reference: e,
                            popper: t
                        },
                        attributes: {},
                        styles: {}
                    }
                        , c = []
                        , s = !1
                        , l = {
                        state: u,
                        setOptions: function(n) {
                            var c = "function" == typeof n ? n(u.options) : n;
                            a(),
                                u.options = Object.assign({}, i, u.options, c),
                                u.scrollParents = {
                                    reference: Ur(e) ? Po(e) : e.contextElement ? Po(e.contextElement) : [],
                                    popper: Po(t)
                                };
                            var s = Xo(Jo([].concat(r, u.options.modifiers)));
                            return u.orderedModifiers = s.filter((function(e) {
                                    return e.enabled
                                }
                            )),
                                o(),
                                l.update()
                        },
                        forceUpdate: function() {
                            if (!s) {
                                var e = u.elements
                                    , t = e.reference
                                    , n = e.popper;
                                if (Qo(t, n)) {
                                    u.rects = {
                                        reference: qo(t, ro(n), "fixed" === u.options.strategy),
                                        popper: qr(n)
                                    },
                                        u.reset = !1,
                                        u.placement = u.options.placement,
                                        u.orderedModifiers.forEach((function(e) {
                                                return u.modifiersData[e.name] = Object.assign({}, e.data)
                                            }
                                        ));
                                    for (var r = 0; r < u.orderedModifiers.length; r++)
                                        if (!0 !== u.reset) {
                                            var o = u.orderedModifiers[r]
                                                , i = o.fn
                                                , a = o.options
                                                , c = void 0 === a ? {} : a
                                                , f = o.name;
                                            "function" == typeof i && (u = i({
                                                state: u,
                                                options: c,
                                                name: f,
                                                instance: l
                                            }) || u)
                                        } else
                                            u.reset = !1,
                                                r = -1
                                }
                            }
                        },
                        update: Yo((function() {
                                return new Promise((function(e) {
                                        l.forceUpdate(),
                                            e(u)
                                    }
                                ))
                            }
                        )),
                        destroy: function() {
                            a(),
                                s = !0
                        }
                    };
                    return Qo(e, t) ? (l.setOptions(n).then((function(e) {
                            !s && n.onFirstUpdate && n.onFirstUpdate(e)
                        }
                    )),
                        l) : l
                }
            }
            function ti(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                return o
            }
            function ni(e, t, n={}) {
                let {enabled: r=!0, placement: o="bottom", strategy: i="absolute", modifiers: a=lv} = n
                    , u = ti(n, uv);
                const c = (0,
                    ca.useRef)(a)
                    , s = (0,
                    ca.useRef)()
                    , l = (0,
                    ca.useCallback)((()=>{
                        var e;
                        null == (e = s.current) || e.update()
                    }
                ), [])
                    , f = (0,
                    ca.useCallback)((()=>{
                        var e;
                        null == (e = s.current) || e.forceUpdate()
                    }
                ), [])
                    , [p,d] = Rd((0,
                    ca.useState)({
                    placement: o,
                    update: l,
                    forceUpdate: f,
                    attributes: {},
                    styles: {
                        popper: {},
                        arrow: {}
                    }
                }))
                    , v = (0,
                    ca.useMemo)((()=>({
                    name: "updateStateModifier",
                    enabled: !0,
                    phase: "write",
                    requires: ["computeStyles"],
                    fn: ({state: e})=>{
                        const t = {}
                            , n = {};
                        Object.keys(e.elements).forEach((r=>{
                                t[r] = e.styles[r],
                                    n[r] = e.attributes[r]
                            }
                        )),
                            d({
                                state: e,
                                styles: t,
                                attributes: n,
                                update: l,
                                forceUpdate: f,
                                placement: e.placement
                            })
                    }
                })), [l, f, d])
                    , y = (0,
                    ca.useMemo)((()=>(Fr(c.current, a) || (c.current = a),
                    c.current)), [a]);
                return (0,
                    ca.useEffect)((()=>{
                        !s.current || !r || s.current.setOptions({
                            placement: o,
                            strategy: i,
                            modifiers: [...y, v, cv]
                        })
                    }
                ), [i, o, v, r, y]),
                    (0,
                        ca.useEffect)((()=>{
                            if (r && null != e && null != t)
                                return s.current = av(e, t, Object.assign({}, u, {
                                    placement: o,
                                    strategy: i,
                                    modifiers: [...y, sv, v]
                                })),
                                    ()=>{
                                        null != s.current && (s.current.destroy(),
                                            s.current = void 0,
                                            d((e=>Object.assign({}, e, {
                                                attributes: {},
                                                styles: {
                                                    popper: {}
                                                }
                                            }))))
                                    }
                        }
                    ), [r, e, t]),
                    p
            }
            function ri(e) {
                return 0 === e.button
            }
            function oi(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
            }
            function ii(e, t=pv, {disabled: n, clickTrigger: r="click"}={}) {
                const o = (0,
                    ca.useRef)(!1)
                    , i = (0,
                    ca.useRef)(!1)
                    , a = (0,
                    ca.useCallback)((t=>{
                        const n = dv(e);
                        Nd()(!!n, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),
                            o.current = !n || oi(t) || !ri(t) || !!Mr(n, t.target) || i.current,
                            i.current = !1
                    }
                ), [e])
                    , u = $e((t=>{
                        const n = dv(e);
                        n && Mr(n, t.target) && (i.current = !0)
                    }
                ))
                    , c = $e((e=>{
                        o.current || t(e)
                    }
                ));
                (0,
                    ca.useEffect)((()=>{
                        var t, o;
                        if (n || null == e)
                            return;
                        const i = qe(dv(e))
                            , s = i.defaultView || window;
                        let l = null != (t = s.event) ? t : null == (o = s.parent) ? void 0 : o.event
                            , f = null;
                        vv[r] && (f = Uc(i, vv[r], u, !0));
                        const p = Uc(i, r, a, !0)
                            , d = Uc(i, r, (e=>{
                                e !== l ? c(e) : l = void 0
                            }
                        ));
                        let v = [];
                        return "ontouchstart"in i.documentElement && (v = [].slice.call(i.body.children).map((e=>Uc(e, "mousemove", pv)))),
                            ()=>{
                                null == f || f(),
                                    p(),
                                    d(),
                                    v.forEach((e=>e()))
                            }
                    }
                ), [e, n, r, a, u, c])
            }
            function ai(e) {
                return "Escape" === e.code || 27 === e.keyCode
            }
            function ui(e, t, {disabled: n, clickTrigger: r}={}) {
                const o = t || mv;
                yv(e, o, {
                    disabled: n,
                    clickTrigger: r
                });
                const i = $e((e=>{
                        ai(e) && o(e)
                    }
                ));
                (0,
                    ca.useEffect)((()=>{
                        if (n || null == e)
                            return;
                        const t = qe(dv(e));
                        let r = (t.defaultView || window).event;
                        const o = Uc(t, "keyup", (e=>{
                                e !== r ? i(e) : r = void 0
                            }
                        ));
                        return ()=>{
                            o()
                        }
                    }
                ), [e, n, i])
            }
            function ci() {
                return (0,
                    ca.useContext)(bv)
            }
            function si(e, t) {
                const n = ci()
                    , [r,o] = (0,
                    ca.useState)((()=>gv(e, null == n ? void 0 : n.document)));
                if (!r) {
                    const t = gv(e);
                    t && o(t)
                }
                return (0,
                    ca.useEffect)((()=>{
                        t && r && t(r)
                    }
                ), [t, r]),
                    (0,
                        ca.useEffect)((()=>{
                            const t = gv(e);
                            t !== r && o(t)
                        }
                    ), [e, r]),
                    r
            }
            function li(e) {
                const t = {};
                return Array.isArray(e) ? (null == e || e.forEach((e=>{
                        t[e.name] = e
                    }
                )),
                    t) : e || t
            }
            function fi(e={}) {
                return Array.isArray(e) ? e : Object.keys(e).map((t=>(e[t].name = t,
                    e[t])))
            }
            function pi({enabled: e, enableEvents: t, placement: n, flip: r, offset: o, fixed: i, containerPadding: a, arrowElement: u, popperConfig: c={}}) {
                var s, l, f, p, d;
                const v = li(c.modifiers);
                return Object.assign({}, c, {
                    placement: n,
                    enabled: e,
                    strategy: i ? "fixed" : c.strategy,
                    modifiers: fi(Object.assign({}, v, {
                        eventListeners: {
                            enabled: t,
                            options: null == (s = v.eventListeners) ? void 0 : s.options
                        },
                        preventOverflow: Object.assign({}, v.preventOverflow, {
                            options: a ? Object.assign({
                                padding: a
                            }, null == (l = v.preventOverflow) ? void 0 : l.options) : null == (f = v.preventOverflow) ? void 0 : f.options
                        }),
                        offset: {
                            options: Object.assign({
                                offset: o
                            }, null == (p = v.offset) ? void 0 : p.options)
                        },
                        arrow: Object.assign({}, v.arrow, {
                            enabled: !!u,
                            options: Object.assign({}, null == (d = v.arrow) ? void 0 : d.options, {
                                element: u
                            })
                        }),
                        flip: Object.assign({
                            enabled: !!r
                        }, v.flip)
                    }))
                })
            }
            function di({in: e, onTransition: t}) {
                const n = (0,
                    ca.useRef)(null)
                    , r = (0,
                    ca.useRef)(!0)
                    , o = $e(t);
                return xl((()=>{
                        if (!n.current)
                            return;
                        let t = !1;
                        return o({
                            in: e,
                            element: n.current,
                            initial: r.current,
                            isStale: ()=>t
                        }),
                            ()=>{
                                t = !0
                            }
                    }
                ), [e, o]),
                    xl((()=>(r.current = !1,
                            ()=>{
                                r.current = !0
                            }
                    )), []),
                    n
            }
            function vi({children: e, in: t, onExited: n, onEntered: r, transition: o}) {
                const [i,a] = (0,
                    ca.useState)(!t);
                t && i && a(!1);
                const u = di({
                    in: !!t,
                    onTransition: e=>{
                        const t = ()=>{
                                e.isStale() || (e.in ? null == r || r(e.element, e.initial) : (a(!0),
                                null == n || n(e.element)))
                            }
                        ;
                        Promise.resolve(o(e)).then(t, (t=>{
                                throw e.in || a(!0),
                                    t
                            }
                        ))
                    }
                })
                    , c = cc(u, e.ref);
                return i && !t ? null : (0,
                    ca.cloneElement)(e, {
                    ref: c
                })
            }
            function yi(e, t, n) {
                return e ? (0,
                    lc.jsx)(e, Object.assign({}, n)) : t ? (0,
                    lc.jsx)(vi, Object.assign({}, n, {
                    transition: t
                })) : (0,
                    lc.jsx)(sc, Object.assign({}, n))
            }
            function mi(e, t) {
                return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
            }
            function hi(e) {
                const t = (0,
                    ca.useRef)(null)
                    , n = vt(void 0, "popover")
                    , r = (0,
                    ca.useMemo)((()=>({
                    name: "offset",
                    options: {
                        offset: ()=>t.current && mi(t.current, n) ? e || _d.POPPER_OFFSET : e || [0, 0]
                    }
                })), [e, n]);
                return [t, [r]]
            }
            function bi(e, t) {
                const {ref: n} = e
                    , {ref: r} = t;
                e.ref = n.__wrapped || (n.__wrapped = e=>n(ft(e))),
                    t.ref = r.__wrapped || (r.__wrapped = e=>r(ft(e)))
            }
            function gi(e) {
                return e && "object" == typeof e ? e : {
                    show: e,
                    hide: e
                }
            }
            function wi(e, t, n) {
                const [r] = t
                    , o = r.currentTarget
                    , i = r.relatedTarget || r.nativeEvent[n];
                (!i || i !== o) && !Mr(o, i) && e(...t)
            }
            function Oi(e) {
                var t = e
                    , {trigger: n=["hover", "focus"], overlay: r, children: o, popperConfig: i={}, show: a, defaultShow: u=!1, onToggle: c, delay: s, placement: l, flip: f=l && -1 !== l.indexOf("auto")} = t
                    , p = Kv(t, ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"]);
                const d = (0,
                    ca.useRef)(null)
                    , v = cc(d, o.ref)
                    , y = Ir()
                    , m = (0,
                    ca.useRef)("")
                    , [h,b] = Ot(a, u, c)
                    , g = gi(s)
                    , {onFocus: w, onBlur: O, onClick: E} = "function" != typeof o ? ca.Children.only(o).props : {}
                    , x = e=>{
                    v(ft(e))
                }
                    , S = (0,
                    ca.useCallback)((()=>{
                        y.clear(),
                            m.current = "show",
                            g.show ? y.set((()=>{
                                    "show" === m.current && b(!0)
                                }
                            ), g.show) : b(!0)
                    }
                ), [g.show, b, y])
                    , j = (0,
                    ca.useCallback)((()=>{
                        y.clear(),
                            m.current = "hide",
                            g.hide ? y.set((()=>{
                                    "hide" === m.current && b(!1)
                                }
                            ), g.hide) : b(!1)
                    }
                ), [g.hide, b, y])
                    , P = (0,
                    ca.useCallback)(((...e)=>{
                        S(),
                        null == w || w(...e)
                    }
                ), [S, w])
                    , C = (0,
                    ca.useCallback)(((...e)=>{
                        j(),
                        null == O || O(...e)
                    }
                ), [j, O])
                    , k = (0,
                    ca.useCallback)(((...e)=>{
                        b(!h),
                        null == E || E(...e)
                    }
                ), [E, b, h])
                    , T = (0,
                    ca.useCallback)(((...e)=>{
                        wi(S, e, "fromElement")
                    }
                ), [S])
                    , _ = (0,
                    ca.useCallback)(((...e)=>{
                        wi(j, e, "toElement")
                    }
                ), [j])
                    , D = null == n ? [] : [].concat(n)
                    , M = {
                    ref: x
                };
                return -1 !== D.indexOf("click") && (M.onClick = k),
                -1 !== D.indexOf("focus") && (M.onFocus = P,
                    M.onBlur = C),
                -1 !== D.indexOf("hover") && (M.onMouseOver = T,
                    M.onMouseOut = _),
                    (0,
                        lc.jsxs)(lc.Fragment, {
                        children: ["function" == typeof o ? o(M) : (0,
                            ca.cloneElement)(o, M), (0,
                            lc.jsx)(Nv, Uv(Vv({}, p), {
                            show: h,
                            onHide: j,
                            flip: f,
                            placement: l,
                            popperConfig: i,
                            target: d.current,
                            children: r
                        }))]
                    })
            }
            function Ei() {
                const {t: e} = Ae()
                    , {checkInfo: t, lessonInfo: n} = Ou((e=>({
                    checkInfo: e.checkInfoSlice,
                    lessonInfo: e.lessonSlice
                })))
                    , r = ku()
                    , {lessonVersion: o, language: i, lesson: a} = (0,
                    ca.useContext)(xp)
                    , u = ()=>{
                    r(Rf.runCheck({
                        lessonVersion: o
                    }))
                }
                    , c = ()=>{
                    if (window.confirm(e("confirm"))) {
                        const e = `lesson-version-${o.id}`;
                        (0,
                            dp.DC)(e),
                            window.location.reload()
                    }
                }
                    , s = t.processState === Gl.checking
                    , l = ()=>{
                    const t = e("run");
                    return s ? ca.createElement(ca.Fragment, null, ca.createElement(hd, {
                        as: "span",
                        animation: "border",
                        size: "sm",
                        role: "status",
                        "aria-hidden": "true"
                    }), ca.createElement("span", {
                        className: "visually-hidden"
                    }, e("loading")), ca.createElement("span", {
                        className: "d-none d-sm-block d-md-none d-lg-block ms-1"
                    }, t)) : ca.createElement(ca.Fragment, null, ca.createElement("span", {
                        className: "bi bi-play-circle"
                    }), ca.createElement("span", {
                        className: "d-none d-sm-block d-md-none d-lg-block ms-1"
                    }, t))
                }
                    , f = gc()("btn btn-outline-secondary\n    fw-normal me-3 order-first order-sm-0 order-md-first order-lg-0")
                    , p = gc()("btn btn-outline-primary fw-normal", {
                    disabled: !n.finished
                })
                    , d = n.finished ? ef.nextLessonLanguageLessonPath(i, a.slug) : null
                    , v = ef.prevLessonLanguageLessonPath(i, a.slug);
                Tr("ctrl+enter", u);
                const y = ca.createElement(_d, {
                    id: "popover-basic"
                }, ca.createElement(_d.Header, {
                    as: "h3"
                }, e("help.controls.header")), ca.createElement(_d.Body, null, e("help.controls.body")));
                return ca.createElement("div", {
                    className: "d-flex p-3 border-top"
                }, ca.createElement("div", {
                    className: "m-auto"
                }, ca.createElement(Bv, {
                    trigger: ["hover", "focus"],
                    placement: "top",
                    overlay: y
                }, ca.createElement(ny, {
                    variant: "outline-secondary",
                    className: "me-3",
                    onClick: c
                }, ca.createElement("span", {
                    className: "bi bi-arrow-repeat"
                }))), ca.createElement("a", {
                    className: f,
                    href: v
                }, ca.createElement("span", {
                    className: "bi bi-arrow-left-short d-sm-none d-md-block d-lg-none"
                }), ca.createElement("span", {
                    className: "d-none d-sm-block d-md-none d-lg-block"
                }, e("prevLesson"))), ca.createElement(ny, {
                    variant: "primary",
                    className: "me-3 d-inline-flex align-items-center",
                    onClick: u,
                    disabled: s
                }, l()), ca.createElement("a", {
                    className: p,
                    href: d
                }, ca.createElement("span", {
                    className: "bi bi-arrow-right-short d-sm-none d-md-block d-lg-none"
                }), ca.createElement("span", {
                    className: "d-none d-sm-block d-md-none d-lg-block"
                }, e("nextLesson")))))
            }
            function xi({html: e}) {
                return ca.createElement("div", {
                    className: "pt-3 px-2 pb-2 h-50 bg-white border-top"
                }, ca.createElement(oy.ZP, {
                    className: "border-0 h-100 w-100"
                }, ca.createElement("div", {
                    className: "text-black",
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                })))
            }
            function Si() {
                const {currentTab: e, content: t} = Ou((e=>dy(dy({}, e.tabsBoxSlice), e.editorSlice)))
                    , {language: n} = ca.useContext(xp)
                    , r = ()=>e === Xl.editor && uy(n) ? ca.createElement(iy, {
                    html: t
                }) : null;
                return ca.createElement("div", {
                    className: "card vh-100 x-h-md-100"
                }, ca.createElement(Gp, null), r(), ca.createElement(ry, null))
            }
            var ji = n(919)
                , Pi = n(9272)
                , Ci = n(3802)
                , ki = n(8361)
                , Ti = n(4733)
                , _i = n(7436)
                , Di = n(4148)
                , Mi = n(673)
                , Ni = n(6904)
                , Ai = n(1754)
                , Ri = n(9022)
                , Ii = n(4522)
                , Li = n(3998)
                , Fi = n(7902)
                , $i = n(5714)
                , Zi = n(4096)
                , Vi = n(6753)
                , Ui = n(8541)
                , Ki = n(8846)
                , Bi = n(9267)
                , Wi = n(7496)
                , zi = n(4748)
                , Hi = n(989)
                , qi = n(7253)
                , Gi = n(4538)
                , Xi = n(8894)
                , Yi = n(8352)
                , Ji = n(493)
                , Qi = n(181)
                , ea = n(1852)
                , ta = n(5303)
                , na = n(7225)
                , ra = n(1795);
            const oa = {
                ocaml: Qi.Z,
                perl: Ji.Z,
                rust: Yi.Z,
                haskell: Xi.Z,
                fortran: Gi.Z,
                bash: qi.Z,
                elixir: Hi.Z,
                kotlin: zi.Z,
                swift: Wi.Z,
                prolog: Bi.Z,
                lua: Ki.Z,
                javascript: Pi.Z,
                ruby: Di.Z,
                shell: ki.Z,
                php: Ti.Z,
                java: _i.Z,
                sql: Mi.Z,
                powershell: na.Z,
                python: Ci.Z,
                scss: Ni.Z,
                css: Ai.Z,
                html: Ri.Z,
                xml: Ri.Z,
                clojure: Li.Z,
                scheme: Ii.Z,
                c: Fi.Z,
                csharp: $i.Z,
                typescript: Zi.Z,
                cpp: Vi.Z,
                go: Ui.Z,
                crystal: ea.Z,
                dart: ta.Z,
                d: ra.Z
            };
            Object.keys(oa).forEach((e=>ji.Z.registerLanguage(e, oa[e])));
            var ia, aa, ua = ji.Z, ca = n(1214), sa = n(297), la = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), fa = "undefined" != typeof Map, pa = "undefined" != typeof Set, da = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, va = la ? Symbol.for("immer-nothing") : ((ia = {})["immer-nothing"] = !0,
                ia), ya = la ? Symbol.for("immer-draftable") : "__$immer_draftable", ma = la ? Symbol.for("immer-state") : "__$immer_state", ha = ("undefined" != typeof Symbol && Symbol.iterator,
            "" + Object.prototype.constructor), ba = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                }
                : Object.getOwnPropertyNames, ga = Object.getOwnPropertyDescriptors || function(e) {
                var t = {};
                return ba(e).forEach((function(n) {
                        t[n] = Object.getOwnPropertyDescriptor(e, n)
                    }
                )),
                    t
            }
                , wa = {}, Oa = {
                get: function(e, t) {
                    if (t === ma)
                        return e;
                    var n, r, o, a = v(e);
                    if (!c(a, t))
                        return n = e,
                            (o = M(a, t)) ? "value"in o ? o.value : null === (r = o.get) || void 0 === r ? void 0 : r.call(n.k) : void 0;
                    var u = a[t];
                    return e.I || !i(u) ? u : u === D(e.t, t) ? (A(e),
                        e.o[t] = R(e.A.h, u, e)) : u
                },
                has: function(e, t) {
                    return t in v(e)
                },
                ownKeys: function(e) {
                    return Reflect.ownKeys(v(e))
                },
                set: function(e, t, n) {
                    var r = M(v(e), t);
                    if (null != r && r.set)
                        return r.set.call(e.k, n),
                            !0;
                    if (!e.P) {
                        var o = D(v(e), t)
                            , i = null == o ? void 0 : o[ma];
                        if (i && i.t === n)
                            return e.o[t] = n,
                                e.R[t] = !1,
                                !0;
                        if (f(n, o) && (void 0 !== n || c(e.t, t)))
                            return !0;
                        A(e),
                            N(e)
                    }
                    return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n,
                        e.R[t] = !0),
                        !0
                },
                deleteProperty: function(e, t) {
                    return void 0 !== D(e.t, t) || t in e.t ? (e.R[t] = !1,
                        A(e),
                        N(e)) : delete e.R[t],
                    e.o && delete e.o[t],
                        !0
                },
                getOwnPropertyDescriptor: function(e, t) {
                    var n = v(e)
                        , r = Reflect.getOwnPropertyDescriptor(n, t);
                    return r && {
                        writable: !0,
                        configurable: 1 !== e.i || "length" !== t,
                        enumerable: r.enumerable,
                        value: n[t]
                    }
                },
                defineProperty: function() {
                    r(11)
                },
                getPrototypeOf: function(e) {
                    return Object.getPrototypeOf(e.t)
                },
                setPrototypeOf: function() {
                    r(12)
                }
            }, Ea = {};
            a(Oa, (function(e, t) {
                    Ea[e] = function() {
                        return arguments[0] = arguments[0][0],
                            t.apply(this, arguments)
                    }
                }
            )),
                Ea.deleteProperty = function(e, t) {
                    return Ea.set.call(this, e, t, void 0)
                }
                ,
                Ea.set = function(e, t, n) {
                    return Oa.set.call(this, e[0], t, n, e[0])
                }
            ;
            var xa = function() {
                function e(e) {
                    var t = this;
                    this.O = da,
                        this.D = !0,
                        this.produce = function(e, n, o) {
                            if ("function" == typeof e && "function" != typeof n) {
                                var a = n;
                                n = e;
                                var u = t;
                                return function(e) {
                                    var t = this;
                                    void 0 === e && (e = a);
                                    for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                                        o[i - 1] = arguments[i];
                                    return u.produce(e, (function(e) {
                                            var r;
                                            return (r = n).call.apply(r, [t, e].concat(o))
                                        }
                                    ))
                                }
                            }
                            var c;
                            if ("function" != typeof n && r(6),
                            void 0 !== o && "function" != typeof o && r(7),
                                i(e)) {
                                var s = j(t)
                                    , l = R(t, e, void 0)
                                    , f = !0;
                                try {
                                    c = n(l),
                                        f = !1
                                } finally {
                                    f ? x(s) : S(s)
                                }
                                return "undefined" != typeof Promise && c instanceof Promise ? c.then((function(e) {
                                        return E(s, o),
                                            C(e, s)
                                    }
                                ), (function(e) {
                                        throw x(s),
                                            e
                                    }
                                )) : (E(s, o),
                                    C(c, s))
                            }
                            if (!e || "object" != typeof e) {
                                if (void 0 === (c = n(e)) && (c = e),
                                c === va && (c = void 0),
                                t.D && m(c, !0),
                                    o) {
                                    var p = []
                                        , d = [];
                                    g("Patches").M(e, c, p, d),
                                        o(p, d)
                                }
                                return c
                            }
                            r(21, e)
                        }
                        ,
                        this.produceWithPatches = function(e, n) {
                            if ("function" == typeof e)
                                return function(n) {
                                    for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                                        o[i - 1] = arguments[i];
                                    return t.produceWithPatches(n, (function(t) {
                                            return e.apply(void 0, [t].concat(o))
                                        }
                                    ))
                                }
                                    ;
                            var r, o, i = t.produce(e, n, (function(e, t) {
                                    r = e,
                                        o = t
                                }
                            ));
                            return "undefined" != typeof Promise && i instanceof Promise ? i.then((function(e) {
                                    return [e, r, o]
                                }
                            )) : [i, r, o]
                        }
                        ,
                    "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                    "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
                }
                var t = e.prototype;
                return t.createDraft = function(e) {
                    i(e) || r(8),
                    o(e) && (e = I(e));
                    var t = j(this)
                        , n = R(this, e, void 0);
                    return n[ma].C = !0,
                        S(t),
                        n
                }
                    ,
                    t.finishDraft = function(e, t) {
                        var n = (e && e[ma]).A;
                        return E(n, t),
                            C(void 0, n)
                    }
                    ,
                    t.setAutoFreeze = function(e) {
                        this.D = e
                    }
                    ,
                    t.setUseProxies = function(e) {
                        e && !da && r(20),
                            this.O = e
                    }
                    ,
                    t.applyPatches = function(e, t) {
                        var n;
                        for (n = t.length - 1; n >= 0; n--) {
                            var r = t[n];
                            if (0 === r.path.length && "replace" === r.op) {
                                e = r.value;
                                break
                            }
                        }
                        n > -1 && (t = t.slice(n + 1));
                        var i = g("Patches").$;
                        return o(e) ? i(e, t) : this.produce(e, (function(e) {
                                return i(e, t)
                            }
                        ))
                    }
                    ,
                    e
            }()
                , Sa = new xa
                , ja = Sa.produce
                , Pa = (Sa.produceWithPatches.bind(Sa),
                Sa.setAutoFreeze.bind(Sa),
                Sa.setUseProxies.bind(Sa),
                Sa.applyPatches.bind(Sa),
                Sa.createDraft.bind(Sa),
                Sa.finishDraft.bind(Sa),
                ja)
                , Ca = n(3232)
                , ka = "function" == typeof Symbol && Symbol.observable || "@@observable"
                , Ta = function() {
                return Math.random().toString(36).substring(7).split("").join(".")
            }
                , _a = {
                INIT: "@@redux/INIT" + Ta(),
                REPLACE: "@@redux/REPLACE" + Ta(),
                PROBE_UNKNOWN_ACTION: function() {
                    return "@@redux/PROBE_UNKNOWN_ACTION" + Ta()
                }
            }
                , Da = q();
            Da.withExtraArgument = q;
            var Ma, Na, Aa = Da, Ra = (Ma = function(e, t) {
                    return (Ma = Object.setPrototypeOf || {
                                __proto__: []
                            }instanceof Array && function(e, t) {
                                e.__proto__ = t
                            }
                            || function(e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }
                    )(e, t)
                }
                    ,
                    function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                        Ma(e, t),
                            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                new n)
                    }
            ), Ia = function(e, t) {
                function n(e) {
                    return function(t) {
                        return r([e, t])
                    }
                }
                function r(n) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; c; )
                        try {
                            if (o = 1,
                            i && (a = 2 & n[0] ? i.return : n[0] ? i.throw || ((a = i.return) && a.call(i),
                                0) : i.next) && !(a = a.call(i, n[1])).done)
                                return a;
                            switch (i = 0,
                            a && (n = [2 & n[0], a.value]),
                                n[0]) {
                                case 0:
                                case 1:
                                    a = n;
                                    break;
                                case 4:
                                    return c.label++,
                                        {
                                            value: n[1],
                                            done: !1
                                        };
                                case 5:
                                    c.label++,
                                        i = n[1],
                                        n = [0];
                                    continue;
                                case 7:
                                    n = c.ops.pop(),
                                        c.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = c.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                                        c.label = n[1];
                                        break
                                    }
                                    if (6 === n[0] && c.label < a[1]) {
                                        c.label = a[1],
                                            a = n;
                                        break
                                    }
                                    if (a && c.label < a[2]) {
                                        c.label = a[2],
                                            c.ops.push(n);
                                        break
                                    }
                                    a[2] && c.ops.pop(),
                                        c.trys.pop();
                                    continue
                            }
                            n = t.call(e, c)
                        } catch (e) {
                            n = [6, e],
                                i = 0
                        } finally {
                            o = a = 0
                        }
                    if (5 & n[0])
                        throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
                var o, i, a, u, c = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0])
                            throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                },
                "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                        return this
                    }
                ),
                    u
            }, La = function(e, t) {
                for (var n = 0, r = t.length, o = e.length; n < r; n++,
                    o++)
                    e[o] = t[n];
                return e
            }, Fa = Object.defineProperty, $a = Object.defineProperties, Za = Object.getOwnPropertyDescriptors, Va = Object.getOwnPropertySymbols, Ua = Object.prototype.hasOwnProperty, Ka = Object.prototype.propertyIsEnumerable, Ba = function(e, t, n) {
                return t in e ? Fa(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            }, Wa = function(e, t) {
                for (var n in t || (t = {}))
                    Ua.call(t, n) && Ba(e, n, t[n]);
                if (Va)
                    for (var r = 0, o = Va(t); r < o.length; r++) {
                        n = o[r];
                        Ka.call(t, n) && Ba(e, n, t[n])
                    }
                return e
            }, za = function(e, t) {
                return $a(e, Za(t))
            }, Ha = function(e, t, n) {
                return new Promise((function(r, o) {
                        var i = function(e) {
                            try {
                                u(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }
                            , a = function(e) {
                            try {
                                u(n.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }
                            , u = function(e) {
                            return e.done ? r(e.value) : Promise.resolve(e.value).then(i, a)
                        };
                        u((n = n.apply(e, t)).next())
                    }
                ))
            }, qa = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                if (0 !== arguments.length)
                    return "object" == typeof arguments[0] ? z : z.apply(null, arguments)
            }
                , Ga = ("undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__,
                function(e) {
                    function t() {
                        for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r];
                        var o = e.apply(this, n) || this;
                        return Object.setPrototypeOf(o, t.prototype),
                            o
                    }
                    return Ra(t, e),
                        Object.defineProperty(t, Symbol.species, {
                            get: function() {
                                return t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.concat = function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            return e.prototype.concat.apply(this, t)
                        }
                        ,
                        t.prototype.prepend = function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            return 1 === e.length && Array.isArray(e[0]) ? new (t.bind.apply(t, La([void 0], e[0].concat(this)))) : new (t.bind.apply(t, La([void 0], e.concat(this))))
                        }
                        ,
                        t
                }(Array)), Xa = function(e) {
                function t() {
                    for (var n = [], r = 0; r < arguments.length; r++)
                        n[r] = arguments[r];
                    var o = e.apply(this, n) || this;
                    return Object.setPrototypeOf(o, t.prototype),
                        o
                }
                return Ra(t, e),
                    Object.defineProperty(t, Symbol.species, {
                        get: function() {
                            return t
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    t.prototype.concat = function() {
                        for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                        return e.prototype.concat.apply(this, t)
                    }
                    ,
                    t.prototype.prepend = function() {
                        for (var e = [], n = 0; n < arguments.length; n++)
                            e[n] = arguments[n];
                        return 1 === e.length && Array.isArray(e[0]) ? new (t.bind.apply(t, La([void 0], e[0].concat(this)))) : new (t.bind.apply(t, La([void 0], e.concat(this))))
                    }
                    ,
                    t
            }(Array), Ya = !0, Ja = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Qa = function(e) {
                void 0 === e && (e = 21);
                for (var t = "", n = e; n--; )
                    t += Ja[64 * Math.random() | 0];
                return t
            }, eu = ["name", "message", "stack", "code"], tu = function() {
                function e(e, t) {
                    this.payload = e,
                        this.meta = t
                }
                return e
            }(), nu = function() {
                function e(e, t) {
                    this.payload = e,
                        this.meta = t
                }
                return e
            }(), ru = function(e) {
                if ("object" == typeof e && null !== e) {
                    for (var t = {}, n = 0, r = eu; n < r.length; n++) {
                        var o = r[n];
                        "string" == typeof e[o] && (t[o] = e[o])
                    }
                    return t
                }
                return {
                    message: String(e)
                }
            }, ou = function() {
                function e(e, t, n) {
                    function r(e) {
                        return function(r, c, s) {
                            function l(e) {
                                f = e,
                                    d.abort()
                            }
                            var f, p = null != n && n.idGenerator ? n.idGenerator(e) : Qa(), d = new u, v = function() {
                                return Ha(this, null, (function() {
                                        var u, v, y, m, h, b;
                                        return Ia(this, (function(g) {
                                                switch (g.label) {
                                                    case 0:
                                                        return g.trys.push([0, 4, , 5]),
                                                            ce(m = null == (u = null == n ? void 0 : n.condition) ? void 0 : u.call(n, e, {
                                                                getState: c,
                                                                extra: s
                                                            })) ? [4, m] : [3, 2];
                                                    case 1:
                                                        m = g.sent(),
                                                            g.label = 2;
                                                    case 2:
                                                        if (!1 === m || d.signal.aborted)
                                                            throw {
                                                                name: "ConditionError",
                                                                message: "Aborted due to condition callback returning false."
                                                            };
                                                        return !0,
                                                            h = new Promise((function(e, t) {
                                                                    return d.signal.addEventListener("abort", (function() {
                                                                            return t({
                                                                                name: "AbortError",
                                                                                message: f || "Aborted"
                                                                            })
                                                                        }
                                                                    ))
                                                                }
                                                            )),
                                                            r(i(p, e, null == (v = null == n ? void 0 : n.getPendingMeta) ? void 0 : v.call(n, {
                                                                requestId: p,
                                                                arg: e
                                                            }, {
                                                                getState: c,
                                                                extra: s
                                                            }))),
                                                            [4, Promise.race([h, Promise.resolve(t(e, {
                                                                dispatch: r,
                                                                getState: c,
                                                                extra: s,
                                                                requestId: p,
                                                                signal: d.signal,
                                                                abort: l,
                                                                rejectWithValue: function(e, t) {
                                                                    return new tu(e,t)
                                                                },
                                                                fulfillWithValue: function(e, t) {
                                                                    return new nu(e,t)
                                                                }
                                                            })).then((function(t) {
                                                                    if (t instanceof tu)
                                                                        throw t;
                                                                    return t instanceof nu ? o(t.payload, p, e, t.meta) : o(t, p, e)
                                                                }
                                                            ))])];
                                                    case 3:
                                                        return y = g.sent(),
                                                            [3, 5];
                                                    case 4:
                                                        return b = g.sent(),
                                                            y = b instanceof tu ? a(null, p, e, b.payload, b.meta) : a(b, p, e),
                                                            [3, 5];
                                                    case 5:
                                                        return n && !n.dispatchConditionRejection && a.match(y) && y.meta.condition || r(y),
                                                            [2, y]
                                                }
                                            }
                                        ))
                                    }
                                ))
                            }();
                            return Object.assign(v, {
                                abort: l,
                                requestId: p,
                                arg: e,
                                unwrap: function() {
                                    return v.then(ue)
                                }
                            })
                        }
                    }
                    var o = te(e + "/fulfilled", (function(e, t, n, r) {
                            return {
                                payload: e,
                                meta: za(Wa({}, r || {}), {
                                    arg: n,
                                    requestId: t,
                                    requestStatus: "fulfilled"
                                })
                            }
                        }
                    ))
                        , i = te(e + "/pending", (function(e, t, n) {
                            return {
                                payload: void 0,
                                meta: za(Wa({}, n || {}), {
                                    arg: t,
                                    requestId: e,
                                    requestStatus: "pending"
                                })
                            }
                        }
                    ))
                        , a = te(e + "/rejected", (function(e, t, r, o, i) {
                            return {
                                payload: o,
                                error: (n && n.serializeError || ru)(e || "Rejected"),
                                meta: za(Wa({}, i || {}), {
                                    arg: r,
                                    requestId: t,
                                    rejectedWithValue: !!o,
                                    requestStatus: "rejected",
                                    aborted: "AbortError" === (null == e ? void 0 : e.name),
                                    condition: "ConditionError" === (null == e ? void 0 : e.name)
                                })
                            }
                        }
                    ))
                        , u = "undefined" != typeof AbortController ? AbortController : function() {
                        function e() {
                            this.signal = {
                                aborted: !1,
                                addEventListener: function() {},
                                dispatchEvent: function() {
                                    return !1
                                },
                                onabort: function() {},
                                removeEventListener: function() {},
                                reason: void 0,
                                throwIfAborted: function() {}
                            }
                        }
                        return e.prototype.abort = function() {}
                            ,
                            e
                    }();
                    return Object.assign(r, {
                        pending: i,
                        rejected: a,
                        fulfilled: o,
                        typePrefix: e
                    })
                }
                return e.withTypes = function() {
                    return e
                }
                    ,
                    e
            }(), iu = "task", au = "cancelled", uu = (function() {
                function e(e) {
                    this.code = e,
                        this.name = "TaskAbortError",
                        this.message = iu + " " + au + " (reason: " + e + ")"
                }
            }(),
                Object.assign,
                "listenerMiddleware"), cu = (te(uu + "/add"),
                    te(uu + "/removeAll"),
                    te(uu + "/remove"),
                "function" == typeof queueMicrotask && queueMicrotask.bind("undefined" != typeof window ? window : void 0 !== n.g ? n.g : globalThis),
                    function(e) {
                        return function(t) {
                            setTimeout(t, e)
                        }
                    }
            );
            "undefined" != typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : cu(10);
            F();
            var su = n(5838)
                , lu = n(4234)
                , fu = n(6083);
            let pu = se;
            const du = e=>pu = e
                , vu = ()=>pu;
            let yu = null;
            const mu = new Proxy({},new Proxy({},{
                get(e, t) {
                    const n = le();
                    return (e,...r)=>Reflect[t](n, ...r)
                }
            }));
            const hu = fe();
            let bu = ()=>{
                    throw new Error("uSES not initialized!")
                }
            ;
            const gu = e=>{
                bu = e
            }
                , wu = (e,t)=>e === t
                , Ou = pe();
            n(5357),
                n(6070);
            const Eu = {
                notify() {},
                get: ()=>[]
            }
                , xu = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? ca.useLayoutEffect : ca.useEffect;
            let Su = null;
            const ju = e=>{
                    Su = e
                }
            ;
            var Pu = ye;
            const Cu = me()
                , ku = he();
            gu(lu.useSyncExternalStoreWithSelector),
                ju(su.useSyncExternalStore),
                du(fu.unstable_batchedUpdates);
            var Tu, _u = n(2791), Du = n(1835), Mu = (n.n(Du),
                Object.create(null),
                {}), Nu = function(e, t) {
                return function() {
                    if (e.isInitialized)
                        t();
                    else {
                        var n = function n() {
                            setTimeout((function() {
                                    e.off("initialized", n)
                                }
                            ), 0),
                                t()
                        };
                        e.on("initialized", n)
                    }
                }
            }, Au = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ru = {
                "&amp;": "&",
                "&#38;": "&",
                "&lt;": "<",
                "&#60;": "<",
                "&gt;": ">",
                "&#62;": ">",
                "&apos;": "'",
                "&#39;": "'",
                "&quot;": '"',
                "&#34;": '"',
                "&nbsp;": " ",
                "&#160;": " ",
                "&copy;": "\xa9",
                "&#169;": "\xa9",
                "&reg;": "\xae",
                "&#174;": "\xae",
                "&hellip;": "\u2026",
                "&#8230;": "\u2026",
                "&#x2F;": "/",
                "&#47;": "/"
            }, Iu = function(e) {
                return Ru[e]
            }, Lu = {
                bindI18n: "languageChanged",
                bindI18nStore: "",
                transEmptyNodeValue: "",
                transSupportBasicHtmlNodes: !0,
                transWrapTextNodes: "",
                transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                useSuspense: !0,
                unescape: function(e) {
                    return e.replace(Au, Iu)
                }
            }, Fu = n(9486), $u = n(3208), Zu = {
                type: "3rdParty",
                init: function(e) {
                    Pe(e.options.react),
                        ke(e)
                }
            }, Vu = (0,
                ca.createContext)(), Uu = function() {
                function e() {
                    (0,
                        Fu.Z)(this, e),
                        this.usedNamespaces = {}
                }
                return (0,
                    $u.Z)(e, [{
                    key: "addUsedNamespaces",
                    value: function(e) {
                        var t = this;
                        e.forEach((function(e) {
                                t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                            }
                        ))
                    }
                }, {
                    key: "getUsedNamespaces",
                    value: function() {
                        return Object.keys(this.usedNamespaces)
                    }
                }]),
                    e
            }(), Ku = n(9414), Bu = n(3301), Wu = n(5953), zu = n(9382), Hu = function(e, t) {
                var n = (0,
                    ca.useRef)();
                return (0,
                    ca.useEffect)((function() {
                        n.current = t ? n.current : e
                    }
                ), [e, t]),
                    n.current
            }, qu = gon, Gu = n.n(qu), Xu = n(8246), Yu = n.n(Xu);
            const Ju = {
                prefix: String(Math.round(1e10 * Math.random())),
                current: 0,
                isSSR: !1
            }
                , Qu = ca.createContext(Ju);
            let ec = !("undefined" == typeof window || !window.document || !window.document.createElement)
                , tc = new WeakMap;
            var nc = ca.createContext(null);
            const rc = ca.createContext(null)
                , oc = (e,t=null)=>null != e ? String(e) : t || null;
            var ic = rc
                , ac = Fe
                , uc = function(e) {
                return e && "function" != typeof e ? function(t) {
                        e.current = t
                    }
                    : e
            }
                , cc = Ve
                , sc = Ue
                , lc = n(7683);
            const fc = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]
                , pc = ["activeKey", "getControlledId", "getControllerId"]
                , dc = ["as"]
                , vc = ca.forwardRef(((e,t)=>{
                    let {as: n="div"} = e
                        , r = Ke(e, dc);
                    const [o,{isActive: i, onEnter: a, onEntering: u, onEntered: c, onExit: s, onExiting: l, onExited: f, mountOnEnter: p, unmountOnExit: d, transition: v=sc}] = Be(r);
                    return (0,
                        lc.jsx)(nc.Provider, {
                        value: null,
                        children: (0,
                            lc.jsx)(ic.Provider, {
                            value: null,
                            children: (0,
                                lc.jsx)(v, {
                                in: i,
                                onEnter: a,
                                onEntering: u,
                                onEntered: c,
                                onExit: s,
                                onExiting: l,
                                onExited: f,
                                mountOnEnter: p,
                                unmountOnExit: d,
                                children: (0,
                                    lc.jsx)(n, Object.assign({}, o, {
                                    ref: t,
                                    hidden: !i,
                                    "aria-hidden": !i
                                }))
                            })
                        })
                    })
                }
            ));
            vc.displayName = "TabPanel";
            var yc = vc;
            const mc = e=>{
                    const {id: t, generateChildId: n, onSelect: r, activeKey: o, defaultActiveKey: i, transition: a, mountOnEnter: u, unmountOnExit: c, children: s} = e
                        , [l,f] = Re(o, i, r)
                        , p = Le(t)
                        , d = (0,
                        ca.useMemo)((()=>n || ((e,t)=>p ? `${p}-${t}-${e}` : null)), [p, n])
                        , v = (0,
                        ca.useMemo)((()=>({
                        onSelect: f,
                        activeKey: l,
                        transition: a,
                        mountOnEnter: u || !1,
                        unmountOnExit: c || !1,
                        getControlledId: e=>d(e, "tabpane"),
                        getControllerId: e=>d(e, "tab")
                    })), [f, l, a, u, c, d]);
                    return (0,
                        lc.jsx)(nc.Provider, {
                        value: v,
                        children: (0,
                            lc.jsx)(ic.Provider, {
                            value: f || null,
                            children: s
                        })
                    })
                }
            ;
            mc.Panel = yc;
            var hc = mc
                , bc = n(3032)
                , gc = n.n(bc)
                , wc = n(3370)
                , Oc = {
                disabled: !1
            }
                , Ec = ca.createContext(null)
                , xc = function(e) {
                return e.scrollTop
            }
                , Sc = "unmounted"
                , jc = "exited"
                , Pc = "entering"
                , Cc = "entered"
                , kc = "exiting"
                , Tc = function(e) {
                function t(t, n) {
                    var r;
                    r = e.call(this, t, n) || this;
                    var o, i = n && !n.isMounting ? t.enter : t.appear;
                    return r.appearStatus = null,
                        t.in ? i ? (o = jc,
                            r.appearStatus = Pc) : o = Cc : o = t.unmountOnExit || t.mountOnEnter ? Sc : jc,
                        r.state = {
                            status: o
                        },
                        r.nextCallback = null,
                        r
                }
                ze(t, e),
                    t.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === Sc ? {
                            status: jc
                        } : null
                    }
                ;
                var n = t.prototype;
                return n.componentDidMount = function() {
                    this.updateStatus(!0, this.appearStatus)
                }
                    ,
                    n.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== Pc && n !== Cc && (t = Pc) : (n === Pc || n === Cc) && (t = kc)
                        }
                        this.updateStatus(!1, t)
                    }
                    ,
                    n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }
                    ,
                    n.getTimeouts = function() {
                        var e, t, n, r = this.props.timeout;
                        return e = t = n = r,
                        null != r && "number" != typeof r && (e = r.exit,
                            t = r.enter,
                            n = void 0 !== r.appear ? r.appear : t),
                            {
                                exit: e,
                                enter: t,
                                appear: n
                            }
                    }
                    ,
                    n.updateStatus = function(e, t) {
                        if (void 0 === e && (e = !1),
                        null !== t)
                            if (this.cancelNextCallback(),
                            t === Pc) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var n = this.props.nodeRef ? this.props.nodeRef.current : fu.findDOMNode(this);
                                    n && xc(n)
                                }
                                this.performEnter(e)
                            } else
                                this.performExit();
                        else
                            this.props.unmountOnExit && this.state.status === jc && this.setState({
                                status: Sc
                            })
                    }
                    ,
                    n.performEnter = function(e) {
                        var t = this
                            , n = this.props.enter
                            , r = this.context ? this.context.isMounting : e
                            , o = this.props.nodeRef ? [r] : [fu.findDOMNode(this), r]
                            , i = o[0]
                            , a = o[1]
                            , u = this.getTimeouts()
                            , c = r ? u.appear : u.enter;
                        !e && !n || Oc.disabled ? this.safeSetState({
                            status: Cc
                        }, (function() {
                                t.props.onEntered(i)
                            }
                        )) : (this.props.onEnter(i, a),
                            this.safeSetState({
                                status: Pc
                            }, (function() {
                                    t.props.onEntering(i, a),
                                        t.onTransitionEnd(c, (function() {
                                                t.safeSetState({
                                                    status: Cc
                                                }, (function() {
                                                        t.props.onEntered(i, a)
                                                    }
                                                ))
                                            }
                                        ))
                                }
                            )))
                    }
                    ,
                    n.performExit = function() {
                        var e = this
                            , t = this.props.exit
                            , n = this.getTimeouts()
                            , r = this.props.nodeRef ? void 0 : fu.findDOMNode(this);
                        t && !Oc.disabled ? (this.props.onExit(r),
                            this.safeSetState({
                                status: kc
                            }, (function() {
                                    e.props.onExiting(r),
                                        e.onTransitionEnd(n.exit, (function() {
                                                e.safeSetState({
                                                    status: jc
                                                }, (function() {
                                                        e.props.onExited(r)
                                                    }
                                                ))
                                            }
                                        ))
                                }
                            ))) : this.safeSetState({
                            status: jc
                        }, (function() {
                                e.props.onExited(r)
                            }
                        ))
                    }
                    ,
                    n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(),
                            this.nextCallback = null)
                    }
                    ,
                    n.safeSetState = function(e, t) {
                        t = this.setNextCallback(t),
                            this.setState(e, t)
                    }
                    ,
                    n.setNextCallback = function(e) {
                        var t = this
                            , n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1,
                                t.nextCallback = null,
                                e(r))
                        }
                            ,
                            this.nextCallback.cancel = function() {
                                n = !1
                            }
                            ,
                            this.nextCallback
                    }
                    ,
                    n.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : fu.findDOMNode(this)
                            , r = null == e && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback]
                                    , i = o[0]
                                    , a = o[1];
                                this.props.addEndListener(i, a)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else
                            setTimeout(this.nextCallback, 0)
                    }
                    ,
                    n.render = function() {
                        var e = this.state.status;
                        if (e === Sc)
                            return null;
                        var t = this.props
                            , n = t.children
                            , r = (t.in,
                            t.mountOnEnter,
                            t.unmountOnExit,
                            t.appear,
                            t.enter,
                            t.exit,
                            t.timeout,
                            t.addEndListener,
                            t.onEnter,
                            t.onEntering,
                            t.onEntered,
                            t.onExit,
                            t.onExiting,
                            t.onExited,
                            t.nodeRef,
                            We(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return ca.createElement(Ec.Provider, {
                            value: null
                        }, "function" == typeof n ? n(e, r) : ca.cloneElement(ca.Children.only(n), r))
                    }
                    ,
                    t
            }(ca.Component);
            Tc.contextType = Ec,
                Tc.propTypes = {},
                Tc.defaultProps = {
                    in: !1,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    onEnter: He,
                    onEntering: He,
                    onEntered: He,
                    onExit: He,
                    onExiting: He,
                    onExited: He
                },
                Tc.UNMOUNTED = Sc,
                Tc.EXITED = jc,
                Tc.ENTERING = Pc,
                Tc.ENTERED = Cc,
                Tc.EXITING = kc;
            var _c = Tc
                , Dc = /([A-Z])/g
                , Mc = /^ms-/
                , Nc = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i
                , Ac = et
                , Rc = !("undefined" == typeof window || !window.document || !window.document.createElement)
                , Ic = !1
                , Lc = !1;
            try {
                var Fc = {
                    get passive() {
                        return Ic = !0
                    },
                    get once() {
                        return Lc = Ic = !0
                    }
                };
                Rc && (window.addEventListener("test", Fc, Fc),
                    window.removeEventListener("test", Fc, !0))
            } catch (Ma) {}
            var Zc = tt
                , Vc = nt
                , Uc = rt
                , Kc = Object.defineProperty
                , Bc = Object.defineProperties
                , Wc = Object.getOwnPropertyDescriptors
                , zc = Object.getOwnPropertySymbols
                , Hc = Object.prototype.hasOwnProperty
                , qc = Object.prototype.propertyIsEnumerable
                , Gc = (e,t,n)=>t in e ? Kc(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , Xc = (e,t)=>{
                    for (var n in t || (t = {}))
                        Hc.call(t, n) && Gc(e, n, t[n]);
                    if (zc)
                        for (var n of zc(t))
                            qc.call(t, n) && Gc(e, n, t[n]);
                    return e
                }
                , Yc = (e,t)=>Bc(e, Wc(t))
                , Jc = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        Hc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && zc)
                        for (var r of zc(e))
                            t.indexOf(r) < 0 && qc.call(e, r) && (n[r] = e[r]);
                    return n
                }
                , Qc = ca.forwardRef(((e,t)=>{
                        var n = e
                            , {onEnter: r, onEntering: o, onEntered: i, onExit: a, onExiting: u, onExited: c, addEndListener: s, children: l, childRef: f} = n
                            , p = Jc(n, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children", "childRef"]);
                        const d = (0,
                            ca.useRef)(null)
                            , v = cc(d, f)
                            , y = e=>{
                            v(ft(e))
                        }
                            , m = e=>t=>{
                            e && d.current && e(d.current, t)
                        }
                            , h = (0,
                            ca.useCallback)(m(r), [r])
                            , b = (0,
                            ca.useCallback)(m(o), [o])
                            , g = (0,
                            ca.useCallback)(m(i), [i])
                            , w = (0,
                            ca.useCallback)(m(a), [a])
                            , O = (0,
                            ca.useCallback)(m(u), [u])
                            , E = (0,
                            ca.useCallback)(m(c), [c])
                            , x = (0,
                            ca.useCallback)(m(s), [s]);
                        return (0,
                            lc.jsx)(_c, Yc(Xc({
                            ref: t
                        }, p), {
                            onEnter: h,
                            onEntered: g,
                            onEntering: b,
                            onExit: w,
                            onExited: E,
                            onExiting: O,
                            addEndListener: x,
                            nodeRef: d,
                            children: "function" == typeof l ? (e,t)=>l(e, Yc(Xc({}, t), {
                                ref: y
                            })) : ca.cloneElement(l, {
                                ref: y
                            })
                        }))
                    }
                ))
                , es = Object.defineProperty
                , ts = Object.defineProperties
                , ns = Object.getOwnPropertyDescriptors
                , rs = Object.getOwnPropertySymbols
                , os = Object.prototype.hasOwnProperty
                , is = Object.prototype.propertyIsEnumerable
                , as = (e,t,n)=>t in e ? es(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , us = (e,t)=>{
                    for (var n in t || (t = {}))
                        os.call(t, n) && as(e, n, t[n]);
                    if (rs)
                        for (var n of rs(t))
                            is.call(t, n) && as(e, n, t[n]);
                    return e
                }
                , cs = (e,t)=>ts(e, ns(t))
                , ss = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        os.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && rs)
                        for (var r of rs(e))
                            t.indexOf(r) < 0 && is.call(e, r) && (n[r] = e[r]);
                    return n
                }
            ;
            const ls = {
                [Pc]: "show",
                [Cc]: "show"
            }
                , fs = ca.forwardRef(((e,t)=>{
                    var n = e
                        , {className: r, children: o, transitionClasses: i={}, onEnter: a} = n
                        , u = ss(n, ["className", "children", "transitionClasses", "onEnter"]);
                    const c = us({
                        in: !1,
                        timeout: 300,
                        mountOnEnter: !1,
                        unmountOnExit: !1,
                        appear: !1
                    }, u)
                        , s = (0,
                        ca.useCallback)(((e,t)=>{
                            lt(e),
                            null == a || a(e, t)
                        }
                    ), [a]);
                    return (0,
                        lc.jsx)(Qc, cs(us({
                        ref: t,
                        addEndListener: st
                    }, c), {
                        onEnter: s,
                        childRef: o.ref,
                        children: (e,t)=>ca.cloneElement(o, cs(us({}, t), {
                            className: gc()("fade", r, o.props.className, ls[e], i[e])
                        }))
                    }))
                }
            ));
            fs.displayName = "Fade";
            var ps = fs
                , ds = Object.defineProperty
                , vs = Object.defineProperties
                , ys = Object.getOwnPropertyDescriptors
                , ms = Object.getOwnPropertySymbols
                , hs = Object.prototype.hasOwnProperty
                , bs = Object.prototype.propertyIsEnumerable
                , gs = (e,t,n)=>t in e ? ds(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , ws = (e,t)=>{
                    for (var n in t || (t = {}))
                        hs.call(t, n) && gs(e, n, t[n]);
                    if (ms)
                        for (var n of ms(t))
                            bs.call(t, n) && gs(e, n, t[n]);
                    return e
                }
                , Os = (e,t)=>vs(e, ys(t))
                , Es = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        hs.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && ms)
                        for (var r of ms(e))
                            t.indexOf(r) < 0 && bs.call(e, r) && (n[r] = e[r]);
                    return n
                }
            ;
            const xs = e=>{
                    var t = e
                        , {transition: n} = t
                        , r = Es(t, ["transition"]);
                    return (0,
                        lc.jsx)(hc, Os(ws({}, r), {
                        transition: pt(n)
                    }))
                }
            ;
            xs.displayName = "TabContainer";
            var Ss = xs
                , js = /-(.)/g;
            Object.defineProperty,
                Object.defineProperties,
                Object.getOwnPropertyDescriptors,
                Object.getOwnPropertySymbols,
                Object.prototype.hasOwnProperty,
                Object.prototype.propertyIsEnumerable;
            const Ps = ["xxl", "xl", "lg", "md", "sm", "xs"]
                , Cs = "xs"
                , ks = ca.createContext({
                prefixes: {},
                breakpoints: Ps,
                minBreakpoint: Cs
            })
                , {Consumer: Ts, Provider: _s} = ks;
            var Ds = Object.defineProperty
                , Ms = Object.getOwnPropertySymbols
                , Ns = Object.prototype.hasOwnProperty
                , As = Object.prototype.propertyIsEnumerable
                , Rs = (e,t,n)=>t in e ? Ds(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , Is = (e,t)=>{
                    for (var n in t || (t = {}))
                        Ns.call(t, n) && Rs(e, n, t[n]);
                    if (Ms)
                        for (var n of Ms(t))
                            As.call(t, n) && Rs(e, n, t[n]);
                    return e
                }
                , Ls = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        Ns.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && Ms)
                        for (var r of Ms(e))
                            t.indexOf(r) < 0 && As.call(e, r) && (n[r] = e[r]);
                    return n
                }
            ;
            const Fs = e=>e[0].toUpperCase() + dt(e).slice(1);
            var $s = mt("tab-content")
                , Zs = Object.defineProperty
                , Vs = Object.defineProperties
                , Us = Object.getOwnPropertyDescriptors
                , Ks = Object.getOwnPropertySymbols
                , Bs = Object.prototype.hasOwnProperty
                , Ws = Object.prototype.propertyIsEnumerable
                , zs = (e,t,n)=>t in e ? Zs(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , Hs = (e,t)=>{
                    for (var n in t || (t = {}))
                        Bs.call(t, n) && zs(e, n, t[n]);
                    if (Ks)
                        for (var n of Ks(t))
                            Ws.call(t, n) && zs(e, n, t[n]);
                    return e
                }
                , qs = (e,t)=>Vs(e, Us(t))
                , Gs = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        Bs.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && Ks)
                        for (var r of Ks(e))
                            t.indexOf(r) < 0 && Ws.call(e, r) && (n[r] = e[r]);
                    return n
                }
            ;
            const Xs = ca.forwardRef(((e,t)=>{
                    var n = e
                        , {bsPrefix: r, transition: o} = n
                        , i = Gs(n, ["bsPrefix", "transition"]);
                    const [a,...u] = Be(qs(Hs({}, i), {
                        transition: pt(o)
                    }))
                        , c = a
                        , {className: s, as: l="div"} = c
                        , f = Gs(c, ["className", "as"])
                        , [{isActive: p, onEnter: d, onEntering: v, onEntered: y, onExit: m, onExiting: h, onExited: b, mountOnEnter: g, unmountOnExit: w, transition: O=ps}] = u
                        , E = vt(r, "tab-pane");
                    return (0,
                        lc.jsx)(nc.Provider, {
                        value: null,
                        children: (0,
                            lc.jsx)(ic.Provider, {
                            value: null,
                            children: (0,
                                lc.jsx)(O, {
                                in: p,
                                onEnter: d,
                                onEntering: v,
                                onEntered: y,
                                onExit: m,
                                onExiting: h,
                                onExited: b,
                                mountOnEnter: g,
                                unmountOnExit: w,
                                children: (0,
                                    lc.jsx)(l, qs(Hs({}, f), {
                                    ref: t,
                                    className: gc()(s, E, p && "active")
                                }))
                            })
                        })
                    })
                }
            ));
            Xs.displayName = "TabPane";
            var Ys = Xs;
            const Js = {
                    eventKey: Yu().oneOfType([Yu().string, Yu().number]),
                    title: Yu().node.isRequired,
                    disabled: Yu().bool,
                    tabClassName: Yu().string,
                    tabAttrs: Yu().object
                }
                , Qs = ()=>{
                    throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")
                }
            ;
            Qs.propTypes = Js;
            var el = Object.assign(Qs, {
                Container: Ss,
                Content: $s,
                Pane: Ys
            });
            n(5048),
                n(8408);
            xt.__suppressDeprecationWarning = !0,
                St.__suppressDeprecationWarning = !0,
                jt.__suppressDeprecationWarning = !0;
            var tl = Function.prototype.bind.call(Function.prototype.call, [].slice);
            const nl = ca.createContext(null);
            nl.displayName = "NavContext";
            var rl = nl;
            const ol = "data-rr-ui-"
                , il = "rrUi"
                , al = ["as", "disabled"]
                , ul = ca.forwardRef(((e,t)=>{
                    let {as: n, disabled: r} = e
                        , o = _t(e, al);
                    const [i,{tagName: a}] = Nt(Object.assign({
                        tagName: n,
                        disabled: r
                    }, o));
                    return (0,
                        lc.jsx)(a, Object.assign({}, o, i, {
                        ref: t
                    }))
                }
            ));
            ul.displayName = "Button";
            var cl = ul;
            const sl = ["as", "active", "eventKey"]
                , ll = ca.forwardRef(((e,t)=>{
                    let {as: n=cl, active: r, eventKey: o} = e
                        , i = At(e, sl);
                    const [a,u] = Rt(Object.assign({
                        key: oc(o, i.href),
                        active: r
                    }, i));
                    return a[kt("active")] = u.isActive,
                        (0,
                            lc.jsx)(n, Object.assign({}, i, a, {
                            ref: t
                        }))
                }
            ));
            ll.displayName = "NavItem";
            var fl = ll;
            const pl = ["as", "onSelect", "activeKey", "role", "onKeyDown"]
                , dl = ()=>{}
                , vl = kt("event-key")
                , yl = ca.forwardRef(((e,t)=>{
                    let {as: n="div", onSelect: r, activeKey: o, role: i, onKeyDown: a} = e
                        , u = It(e, pl);
                    const c = Ct()
                        , s = (0,
                        ca.useRef)(!1)
                        , l = (0,
                        ca.useContext)(ic)
                        , f = (0,
                        ca.useContext)(nc);
                    let p, d;
                    f && (i = i || "tablist",
                        o = f.activeKey,
                        p = f.getControlledId,
                        d = f.getControllerId);
                    const v = (0,
                            ca.useRef)(null)
                        , y = e=>{
                            const t = v.current;
                            if (!t)
                                return null;
                            const n = Pt(t, `[${vl}]:not([aria-disabled=true])`)
                                , r = t.querySelector("[aria-selected=true]");
                            if (!r || r !== document.activeElement)
                                return null;
                            const o = n.indexOf(r);
                            if (-1 === o)
                                return null;
                            let i = o + e;
                            return i >= n.length && (i = 0),
                            i < 0 && (i = n.length - 1),
                                n[i]
                        }
                        , m = (e,t)=>{
                            null != e && (null == r || r(e, t),
                            null == l || l(e, t))
                        }
                        , h = e=>{
                            if (null == a || a(e),
                                !f)
                                return;
                            let t;
                            switch (e.key) {
                                case "ArrowLeft":
                                case "ArrowUp":
                                    t = y(-1);
                                    break;
                                case "ArrowRight":
                                case "ArrowDown":
                                    t = y(1);
                                    break;
                                default:
                                    return
                            }
                            t && (e.preventDefault(),
                                m(t.dataset[Tt("EventKey")] || null, e),
                                s.current = !0,
                                c())
                        }
                    ;
                    (0,
                        ca.useEffect)((()=>{
                            if (v.current && s.current) {
                                const e = v.current.querySelector(`[${vl}][aria-selected=true]`);
                                null == e || e.focus()
                            }
                            s.current = !1
                        }
                    ));
                    const b = cc(t, v);
                    return (0,
                        lc.jsx)(ic.Provider, {
                        value: m,
                        children: (0,
                            lc.jsx)(rl.Provider, {
                            value: {
                                role: i,
                                activeKey: oc(o),
                                getControlledId: p || dl,
                                getControllerId: d || dl
                            },
                            children: (0,
                                lc.jsx)(n, Object.assign({}, u, {
                                onKeyDown: h,
                                ref: b,
                                role: i
                            }))
                        })
                    })
                }
            ));
            yl.displayName = "Nav";
            var ml = Object.assign(yl, {
                Item: fl
            });
            const hl = ca.createContext(null);
            hl.displayName = "NavbarContext";
            var bl = hl;
            const gl = ca.createContext(null);
            gl.displayName = "CardHeaderContext";
            var wl = gl
                , Ol = mt("nav-item")
                , El = void 0 !== n.g && n.g.navigator && "ReactNative" === n.g.navigator.product
                , xl = "undefined" != typeof document || El ? ca.useLayoutEffect : ca.useEffect;
            new WeakMap;
            const Sl = ["onKeyDown"]
                , jl = ca.forwardRef(((e,t)=>{
                    let {onKeyDown: n} = e
                        , r = $t(e, Sl);
                    const [o] = Nt(Object.assign({
                        tagName: "a"
                    }, r))
                        , i = $e((e=>{
                            o.onKeyDown(e),
                            null == n || n(e)
                        }
                    ));
                    return Zt(r.href) || "button" === r.role ? (0,
                        lc.jsx)("a", Object.assign({
                        ref: t
                    }, r, o, {
                        onKeyDown: i
                    })) : (0,
                        lc.jsx)("a", Object.assign({
                        ref: t
                    }, r, {
                        onKeyDown: n
                    }))
                }
            ));
            jl.displayName = "Anchor";
            var Pl = jl
                , Cl = Object.defineProperty
                , kl = Object.defineProperties
                , Tl = Object.getOwnPropertyDescriptors
                , _l = Object.getOwnPropertySymbols
                , Dl = Object.prototype.hasOwnProperty
                , Ml = Object.prototype.propertyIsEnumerable
                , Nl = (e,t,n)=>t in e ? Cl(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , Al = (e,t)=>{
                    for (var n in t || (t = {}))
                        Dl.call(t, n) && Nl(e, n, t[n]);
                    if (_l)
                        for (var n of _l(t))
                            Ml.call(t, n) && Nl(e, n, t[n]);
                    return e
                }
                , Rl = (e,t)=>kl(e, Tl(t))
                , Il = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        Dl.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && _l)
                        for (var r of _l(e))
                            t.indexOf(r) < 0 && Ml.call(e, r) && (n[r] = e[r]);
                    return n
                }
            ;
            const Ll = ca.forwardRef(((e,t)=>{
                    var n = e
                        , {bsPrefix: r, className: o, as: i=Pl, active: a, eventKey: u, disabled: c=!1} = n
                        , s = Il(n, ["bsPrefix", "className", "as", "active", "eventKey", "disabled"]);
                    r = vt(r, "nav-link");
                    const [l,f] = Rt(Al({
                        key: oc(u, s.href),
                        active: a,
                        disabled: c
                    }, s));
                    return (0,
                        lc.jsx)(i, Rl(Al(Al({}, s), l), {
                        ref: t,
                        disabled: c,
                        className: gc()(o, r, c && "disabled", f.isActive && "active")
                    }))
                }
            ));
            Ll.displayName = "NavLink";
            var Fl = Ll
                , $l = Object.defineProperty
                , Zl = Object.getOwnPropertySymbols
                , Vl = Object.prototype.hasOwnProperty
                , Ul = Object.prototype.propertyIsEnumerable
                , Kl = (e,t,n)=>t in e ? $l(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , Bl = (e,t)=>{
                    for (var n in t || (t = {}))
                        Vl.call(t, n) && Kl(e, n, t[n]);
                    if (Zl)
                        for (var n of Zl(t))
                            Ul.call(t, n) && Kl(e, n, t[n]);
                    return e
                }
                , Wl = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        Vl.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && Zl)
                        for (var r of Zl(e))
                            t.indexOf(r) < 0 && Ul.call(e, r) && (n[r] = e[r]);
                    return n
                }
            ;
            const zl = ca.forwardRef(((e,t)=>{
                    const n = Et(e, {
                        activeKey: "onSelect"
                    })
                        , {as: r="div", bsPrefix: o, variant: i, fill: a=!1, justify: u=!1, navbar: c, navbarScroll: s, className: l, activeKey: f} = n
                        , p = Wl(n, ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "navbarScroll", "className", "activeKey"])
                        , d = vt(o, "nav");
                    let v, y, m = !1;
                    const h = (0,
                        ca.useContext)(bl)
                        , b = (0,
                        ca.useContext)(wl);
                    return h ? (v = h.bsPrefix,
                        m = null == c || c) : b && ({cardHeaderBsPrefix: y} = b),
                        (0,
                            lc.jsx)(ml, Bl({
                            as: r,
                            ref: t,
                            activeKey: f,
                            className: gc()(l, {
                                [d]: !m,
                                [`${v}-nav`]: m,
                                [`${v}-nav-scroll`]: m && s,
                                [`${y}-${i}`]: !!y,
                                [`${d}-${i}`]: !!i,
                                [`${d}-fill`]: a,
                                [`${d}-justified`]: u
                            })
                        }, p))
                }
            ));
            zl.displayName = "Nav";
            var Hl = Object.assign(zl, {
                Item: Ol,
                Link: Fl
            })
                , ql = n(1876).Z.create({
                withCredentials: !0
            });
            const Gl = {
                unchecked: "unchecked",
                checking: "checking",
                checked: "checked"
            }
                , Xl = {
                editor: "editor",
                output: "output",
                testForExercise: "testForExercise",
                solution: "solution"
            }
                , Yl = {
                notAllowedToShown: "notAllowedToShown",
                canBeShown: "canBeShown",
                shown: "shown"
            }
                , Jl = {
                started: "started",
                finished: "finished"
            };
            var Ql = n(4677);
            "en" !== qu.locale && Ql.configure({
                default_url_options: {
                    locale: qu.locale
                }
            });
            var ef = Ql
                , tf = Object.defineProperty
                , nf = Object.defineProperties
                , rf = Object.getOwnPropertyDescriptors
                , of = Object.getOwnPropertySymbols
                , af = Object.prototype.hasOwnProperty
                , uf = Object.prototype.propertyIsEnumerable
                , cf = (e,t,n)=>t in e ? tf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
                , sf = (e,t)=>{
                for (var n in t || (t = {}))
                    af.call(t, n) && cf(e, n, t[n]);
                if (of)
                    for (var n of of(t))
                        uf.call(t, n) && cf(e, n, t[n]);
                return e
            }
                , lf = (e,t)=>nf(e, rf(t))
                , ff = (e,t,n)=>new Promise(((r,o)=>{
                    var i = e=>{
                        try {
                            u(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                        , a = e=>{
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                        , u = e=>e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
                    u((n = n.apply(e, t)).next())
                }
            ));
            const pf = ou("runCheck", ((e,t)=>ff(void 0, [e, t], (function*({lessonVersion: e}, {getState: t}) {
                    const {editorSlice: {content: n}} = t()
                        , r = ef.checkApiLessonPath(e.lesson_id)
                        , o = yield ql.post(r, {
                        version_id: e.id,
                        data: {
                            attributes: {
                                code: n
                            }
                        }
                    });
                    return lf(sf({}, o.data.attributes), {
                        output: atob(o.data.attributes.output)
                    })
                }
            ))))
                , df = ae({
                name: "checkInfoSlice",
                initialState: {
                    processState: Gl.unchecked,
                    result: null,
                    output: "",
                    passed: !1
                },
                reducers: {},
                extraReducers: e=>{
                    e.addCase(pf.pending, (e=>{
                            e.processState = Gl.checking
                        }
                    )).addCase(pf.fulfilled, ((e,{payload: t})=>{
                            e.result = t.result,
                                e.output = t.output,
                                e.passed = t.passed,
                                e.processState = Gl.checked
                        }
                    )).addCase(pf.rejected, (e=>{
                            e.passed = !1,
                                e.result = "error",
                                e.processState = Gl.checked
                        }
                    ))
                }
            })
                , vf = lf(sf({}, df.actions), {
                runCheck: pf
            });
            var yf = df.reducer;
            const mf = ae({
                name: "tabsBoxSlice",
                initialState: {
                    currentTab: Xl.editor
                },
                reducers: {
                    changeTab(e, {payload: t}) {
                        e.currentTab = t.newTabState
                    }
                },
                extraReducers: e=>{
                    e.addCase(vf.runCheck.pending, (e=>{
                            e.currentTab = Xl.output
                        }
                    ))
                }
            })
                , {actions: hf} = mf;
            var bf = mf.reducer;
            const gf = ae({
                name: "editorSlice",
                initialState: {
                    content: "",
                    focusesCount: 1
                },
                reducers: {
                    changeContent(e, {payload: t}) {
                        e.content = t.content
                    }
                },
                extraReducers: e=>{
                    e.addCase(hf.changeTab, ((e,{payload: t})=>{
                            const {newTabState: n} = t;
                            "editor" === n && (e.focusesCount += 1)
                        }
                    ))
                }
            })
                , {actions: wf} = gf;
            var Of = gf.reducer;
            const Ef = ae({
                name: "solutionSlice",
                initialState: {
                    startTime: 0,
                    processState: Yl.notAllowedToShown,
                    waitingTime: 0
                },
                reducers: {
                    setStartTime(e, {payload: t}) {
                        e.startTime = t.startTime
                    },
                    changeSolutionProcessState(e, {payload: t}) {
                        e.processState = t.processState
                    }
                },
                extraReducers: e=>{
                    e.addCase(vf.runCheck.fulfilled, ((e,{payload: t})=>{
                            t.passed && (e.processState = Yl.shown)
                        }
                    ))
                }
            })
                , {actions: xf} = Ef;
            var Sf = Ef.reducer;
            const jf = ae({
                name: "lessonSlice",
                initialState: {
                    finished: !1
                },
                reducers: {},
                extraReducers: e=>{
                    e.addCase(vf.runCheck.fulfilled, ((e,{payload: t})=>{
                            e.finished || (e.finished = t.passed)
                        }
                    ))
                }
            })
                , {actions: Pf} = jf;
            var Cf = jf.reducer
                , kf = Object.defineProperty
                , Tf = Object.getOwnPropertySymbols
                , _f = Object.prototype.hasOwnProperty
                , Df = Object.prototype.propertyIsEnumerable
                , Mf = (e,t,n)=>t in e ? kf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
                , Nf = (e,t)=>{
                for (var n in t || (t = {}))
                    _f.call(t, n) && Mf(e, n, t[n]);
                if (Tf)
                    for (var n of Tf(t))
                        Df.call(t, n) && Mf(e, n, t[n]);
                return e
            }
                , Af = W({
                tabsBoxSlice: bf,
                editorSlice: Of,
                solutionSlice: Sf,
                lessonSlice: Cf,
                checkInfoSlice: yf
            });
            const Rf = Nf(Nf(Nf(Nf(Nf({}, hf), wf), Pf), xf), vf);
            var If = {
                initialIsRequired: "initial state is required",
                initialType: "initial state should be an object",
                initialContent: "initial state shouldn't be an empty object",
                handlerType: "handler should be an object or a function",
                handlersType: "all handlers should be a functions",
                selectorType: "selector should be a function",
                changeType: "provided value of changes should be an object",
                changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
                default: "an unknown error accured in `state-local` package"
            }
                , Lf = nn(pn)(If)
                , Ff = {
                changes: cn,
                selector: sn,
                handler: ln,
                initial: fn
            }
                , $f = {
                create: dn
            }
                , Zf = {
                paths: {
                    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
                }
            }
                , Vf = bn
                , Uf = {
                configIsRequired: "the configuration object is required",
                configType: "the configuration object should be an object",
                default: "an unknown error accured in `@monaco-editor/loader` package",
                deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
            }
                , Kf = hn(On)(Uf)
                , Bf = {
                config: gn
            }
                , Wf = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function(e) {
                    return t.reduceRight((function(e, t) {
                            return t(e)
                        }
                    ), e)
                }
            }
                , zf = Wf
                , Hf = En
                , qf = {
                type: "cancelation",
                msg: "operation is manually canceled"
            }
                , Gf = xn
                , Xf = zt($f.create({
                config: Zf,
                isInitialized: !1,
                resolve: null,
                reject: null,
                monaco: null
            }), 2)
                , Yf = Xf[0]
                , Jf = Xf[1]
                , Qf = new Promise((function(e, t) {
                    return Jf({
                        resolve: e,
                        reject: t
                    })
                }
            ))
                , ep = {
                config: Sn,
                init: jn,
                __getMonacoInstance: Dn
            }
                , tp = {
                wrapper: {
                    display: "flex",
                    position: "relative",
                    textAlign: "initial"
                },
                fullWidth: {
                    width: "100%"
                },
                hide: {
                    display: "none"
                }
            }
                , np = {
                container: {
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
                , rp = Mn
                , op = Nn
                , ip = (0,
                ca.memo)(op)
                , ap = An
                , up = Rn
                , cp = Vn
                , sp = ((0,
                ca.memo)(cp),
                Un)
                , lp = new Map
                , fp = Kn
                , pp = (0,
                ca.memo)(fp)
                , dp = n(2295);
            const vp = {
                    racket: "scheme",
                    clang: "c",
                    dlang: "d",
                    "layout-designer": "html",
                    "pre-course-java": "java",
                    "pre-course-python": "python",
                    "pre-course-javascript": "javascript"
                }
                , yp = {
                    css: "html",
                    racket: "scheme",
                    clang: "c",
                    dlang: "d",
                    bash: "shell",
                    "layout-designer": "html",
                    "pre-course-java": "java",
                    "pre-course-python": "python",
                    "pre-course-javascript": "javascript"
                }
                , mp = {
                    javascript: 2,
                    ruby: 2,
                    racket: 2,
                    erlang: 2,
                    elixir: 2,
                    html: 2,
                    css: 2,
                    python: 4,
                    java: 4,
                    go: 4,
                    clang: 2,
                    csharp: 4,
                    typescript: 2,
                    haskell: 2,
                    prolog: 1,
                    cpp: 2,
                    bash: 2,
                    fortran: 2,
                    kotlin: 4,
                    swift: 2,
                    rust: 4,
                    perl: 4,
                    ocaml: 2,
                    crystal: 2,
                    dart: 2,
                    powershell: 2,
                    dlang: 2
                }
                , hp = {
                    javascript: !0,
                    json: !0,
                    jsx: !0,
                    ruby: !0,
                    yaml: !0,
                    java: !0,
                    erlang: !0,
                    python: !0,
                    php: !0,
                    pug: !0,
                    html: !0,
                    css: !0,
                    elixir: !0,
                    racket: !0,
                    clojure: !0,
                    clang: !0,
                    csharp: !0,
                    typescript: !0,
                    haskell: !0,
                    lua: !0,
                    cpp: !0,
                    bash: !0,
                    fortran: !0,
                    kotlin: !0,
                    swift: !0,
                    rust: !0,
                    perl: !0
                }
                , bp = 4
                , gp = e=>{
                    var t;
                    return null != (t = vp[e]) ? t : e
                }
                , wp = e=>{
                    var t;
                    return null != (t = yp[e]) ? t : e
                }
                , Op = e=>{
                    var t;
                    return null != (t = mp[e]) ? t : bp
                }
                , Ep = e=>{
                    var t;
                    return null != (t = hp[e]) && t
                }
            ;
            var xp = ca.createContext({});
            const Sp = {
                fontSize: 14,
                scrollBeyondLastLine: !1,
                minimap: {
                    enabled: !1
                },
                hover: {
                    delay: 500
                },
                renderWhitespace: "trailing",
                formatOnPaste: !0,
                renderLineHighlight: !1,
                fixedOverflowWidgets: !0
            };
            var jp = Bn
                , Pp = n(1926)
                , Cp = n.n(Pp)
                , kp = n(1064)
                , Tp = n.n(kp);
            const _p = new (Cp());
            var Dp = Wn
                , Mp = {
                daysInHours: !1,
                zeroPadTime: 2
            }
                , Np = function(e) {
                function t() {
                    var e;
                    return zn(this, t),
                        (e = n.apply(this, arguments)).state = {
                            count: e.props.count || 3
                        },
                        e.startCountdown = function() {
                            e.interval = window.setInterval((function() {
                                    0 === e.state.count - 1 ? (e.stopCountdown(),
                                    e.props.onComplete && e.props.onComplete()) : e.setState((function(e) {
                                            return {
                                                count: e.count - 1
                                            }
                                        }
                                    ))
                                }
                            ), 1e3)
                        }
                        ,
                        e.stopCountdown = function() {
                            clearInterval(e.interval)
                        }
                        ,
                        e.addTime = function(t) {
                            e.stopCountdown(),
                                e.setState((function(e) {
                                        return {
                                            count: e.count + t
                                        }
                                    }
                                ), e.startCountdown)
                        }
                        ,
                        e
                }
                Gn(t, e);
                var n = tr(t);
                return qn(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.startCountdown()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.interval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.children ? (0,
                            ca.cloneElement)(this.props.children, {
                            count: this.state.count
                        }) : null
                    }
                }]),
                    t
            }(ca.Component);
            Np.propTypes = {
                count: Xu.number,
                children: Xu.element,
                onComplete: Xu.func
            };
            var Ap = function(e) {
                function t(e) {
                    var r;
                    if (zn(this, t),
                        (r = n.call(this, e)).mounted = !1,
                        r.initialTimestamp = r.calcOffsetStartTimestamp(),
                        r.offsetStartTimestamp = r.props.autoStart ? 0 : r.initialTimestamp,
                        r.offsetTime = 0,
                        r.legacyMode = !1,
                        r.legacyCountdownRef = (0,
                            ca.createRef)(),
                        r.tick = function() {
                            var e = r.calcTimeDelta()
                                , t = e.completed && !r.props.overtime ? void 0 : r.props.onTick;
                            r.setTimeDeltaState(e, void 0, t)
                        }
                        ,
                        r.start = function() {
                            if (!r.isStarted()) {
                                var e = r.offsetStartTimestamp;
                                r.offsetStartTimestamp = 0,
                                    r.offsetTime += e ? r.calcOffsetStartTimestamp() - e : 0;
                                var t = r.calcTimeDelta();
                                r.setTimeDeltaState(t, "STARTED", r.props.onStart),
                                !r.props.controlled && (!t.completed || r.props.overtime) && (r.clearTimer(),
                                    r.interval = window.setInterval(r.tick, r.props.intervalDelay))
                            }
                        }
                        ,
                        r.pause = function() {
                            r.isPaused() || (r.clearTimer(),
                                r.offsetStartTimestamp = r.calcOffsetStartTimestamp(),
                                r.setTimeDeltaState(r.state.timeDelta, "PAUSED", r.props.onPause))
                        }
                        ,
                        r.stop = function() {
                            r.isStopped() || (r.clearTimer(),
                                r.offsetStartTimestamp = r.calcOffsetStartTimestamp(),
                                r.offsetTime = r.offsetStartTimestamp - r.initialTimestamp,
                                r.setTimeDeltaState(r.calcTimeDelta(), "STOPPED", r.props.onStop))
                        }
                        ,
                        r.isStarted = function() {
                            return r.isStatus("STARTED")
                        }
                        ,
                        r.isPaused = function() {
                            return r.isStatus("PAUSED")
                        }
                        ,
                        r.isStopped = function() {
                            return r.isStatus("STOPPED")
                        }
                        ,
                        r.isCompleted = function() {
                            return r.isStatus("COMPLETED")
                        }
                        ,
                        e.date) {
                        var o = r.calcTimeDelta();
                        r.state = {
                            timeDelta: o,
                            status: o.completed ? "COMPLETED" : "STOPPED"
                        }
                    } else
                        r.legacyMode = !0;
                    return r
                }
                Gn(t, e);
                var n = tr(t);
                return qn(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.legacyMode || (this.mounted = !0,
                        this.props.onMount && this.props.onMount(this.calcTimeDelta()),
                        this.props.autoStart && this.start())
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.legacyMode || this.props.date !== e.date && (this.initialTimestamp = this.calcOffsetStartTimestamp(),
                            this.offsetStartTimestamp = this.initialTimestamp,
                            this.offsetTime = 0,
                            this.setTimeDeltaState(this.calcTimeDelta()))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.legacyMode || (this.mounted = !1,
                            this.clearTimer())
                    }
                }, {
                    key: "calcTimeDelta",
                    value: function() {
                        var e = this.props
                            , t = e.date
                            , n = e.now
                            , r = e.precision
                            , o = e.controlled
                            , i = e.overtime;
                        return sr(t, {
                            now: n,
                            precision: r,
                            controlled: o,
                            offsetTime: this.offsetTime,
                            overtime: i
                        })
                    }
                }, {
                    key: "calcOffsetStartTimestamp",
                    value: function() {
                        return Date.now()
                    }
                }, {
                    key: "addTime",
                    value: function(e) {
                        this.legacyCountdownRef.current.addTime(e)
                    }
                }, {
                    key: "clearTimer",
                    value: function() {
                        window.clearInterval(this.interval)
                    }
                }, {
                    key: "isStatus",
                    value: function(e) {
                        return this.state.status === e
                    }
                }, {
                    key: "setTimeDeltaState",
                    value: function(e, t, n) {
                        var r = this;
                        if (this.mounted) {
                            var o = e.completed && !this.state.timeDelta.completed
                                , i = e.completed && "STARTED" === t;
                            o && !this.props.overtime && this.clearTimer();
                            var a = function() {
                                n && n(r.state.timeDelta),
                                r.props.onComplete && (o || i) && r.props.onComplete(e, i)
                            };
                            return this.setState((function(n) {
                                    var o = t || n.status;
                                    return e.completed && !r.props.overtime ? o = "COMPLETED" : !t && "COMPLETED" === o && (o = "STOPPED"),
                                        {
                                            timeDelta: e,
                                            status: o
                                        }
                                }
                            ), a)
                        }
                    }
                }, {
                    key: "getApi",
                    value: function() {
                        return this.api = this.api || {
                            start: this.start,
                            pause: this.pause,
                            stop: this.stop,
                            isStarted: this.isStarted,
                            isPaused: this.isPaused,
                            isStopped: this.isStopped,
                            isCompleted: this.isCompleted
                        }
                    }
                }, {
                    key: "getRenderProps",
                    value: function() {
                        var e = this.props
                            , t = e.daysInHours
                            , n = e.zeroPadTime
                            , r = e.zeroPadDays
                            , o = this.state.timeDelta;
                        return Object.assign(Object.assign({}, o), {
                            api: this.getApi(),
                            props: this.props,
                            formatted: lr(o, {
                                daysInHours: t,
                                zeroPadTime: n,
                                zeroPadDays: r
                            })
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.legacyMode) {
                            var e = this.props
                                , t = e.count
                                , n = e.children
                                , r = e.onComplete;
                            return (0,
                                ca.createElement)(Np, {
                                ref: this.legacyCountdownRef,
                                count: t,
                                onComplete: r
                            }, n)
                        }
                        var o = this.props
                            , i = o.className
                            , a = o.overtime
                            , u = o.children
                            , c = o.renderer
                            , s = this.getRenderProps();
                        if (c)
                            return c(s);
                        if (u && this.state.timeDelta.completed && !a)
                            return (0,
                                ca.cloneElement)(u, {
                                countdown: s
                            });
                        var l = s.formatted
                            , f = l.days
                            , p = l.hours
                            , d = l.minutes
                            , v = l.seconds;
                        return (0,
                            ca.createElement)("span", {
                            className: i
                        }, s.total < 0 ? "-" : "", f, f ? ":" : "", p, ":", d, ":", v)
                    }
                }]),
                    t
            }(ca.Component);
            Ap.defaultProps = Object.assign(Object.assign({}, Mp), {
                controlled: !1,
                intervalDelay: 1e3,
                precision: 0,
                autoStart: !0
            }),
                Ap.propTypes = {
                    date: (0,
                        Xu.oneOfType)([(0,
                        Xu.instanceOf)(Date), Xu.string, Xu.number]),
                    daysInHours: Xu.bool,
                    zeroPadTime: Xu.number,
                    zeroPadDays: Xu.number,
                    controlled: Xu.bool,
                    intervalDelay: Xu.number,
                    precision: Xu.number,
                    autoStart: Xu.bool,
                    overtime: Xu.bool,
                    className: Xu.string,
                    children: Xu.element,
                    renderer: Xu.func,
                    now: Xu.func,
                    onMount: Xu.func,
                    onStart: Xu.func,
                    onPause: Xu.func,
                    onStop: Xu.func,
                    onTick: Xu.func,
                    onComplete: Xu.func
                };
            var Rp = Ap
                , Ip = n(8285)
                , Lp = n.p + "images/waiting_clock-780e59c781f15a27516b9f5ae78f33622f3e37fb941e2a1165410aeb411c6537.digested.png"
                , Fp = fr
                , $p = pr
                , Zp = Object.defineProperty
                , Vp = Object.defineProperties
                , Up = Object.getOwnPropertyDescriptors
                , Kp = Object.getOwnPropertySymbols
                , Bp = Object.prototype.hasOwnProperty
                , Wp = Object.prototype.propertyIsEnumerable
                , zp = (e,t,n)=>t in e ? Zp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
                , Hp = (e,t)=>{
                for (var n in t || (t = {}))
                    Bp.call(t, n) && zp(e, n, t[n]);
                if (Kp)
                    for (var n of Kp(t))
                        Wp.call(t, n) && zp(e, n, t[n]);
                return e
            }
                , qp = (e,t)=>Vp(e, Up(t))
                , Gp = dr
                , Xp = ["shift", "alt", "meta", "mod", "ctrl"]
                , Yp = {
                esc: "escape",
                return: "enter",
                ".": "period",
                ",": "comma",
                "-": "slash",
                " ": "space",
                "`": "backquote",
                "#": "backslash",
                "+": "bracketright",
                ShiftLeft: "shift",
                ShiftRight: "shift",
                AltLeft: "alt",
                AltRight: "alt",
                MetaLeft: "meta",
                MetaRight: "meta",
                OSLeft: "meta",
                OSRight: "meta",
                ControlLeft: "ctrl",
                ControlRight: "ctrl"
            };
            "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
                    void 0 !== e.key && wr([yr(e.key), yr(e.code)])
                }
            )),
                document.addEventListener("keyup", (function(e) {
                        void 0 !== e.key && Or([yr(e.key), yr(e.code)])
                    }
                ))),
            "undefined" != typeof window && window.addEventListener("blur", (function() {
                    Jp.clear()
                }
            ));
            var Jp = new Set
                , Qp = function(e, t, n) {
                    void 0 === n && (n = !1);
                    var r = t.alt
                        , o = t.meta
                        , i = t.mod
                        , a = t.shift
                        , u = t.ctrl
                        , c = t.keys
                        , s = e.key
                        , l = e.code
                        , f = e.ctrlKey
                        , p = e.metaKey
                        , d = e.shiftKey
                        , v = e.altKey
                        , y = yr(l)
                        , m = s.toLowerCase();
                    if (!n) {
                        if (r === !v && "alt" !== m || a === !d && "shift" !== m)
                            return !1;
                        if (i) {
                            if (!p && !f)
                                return !1
                        } else if (o === !p && "meta" !== m && "os" !== m || u === !f && "ctrl" !== m && "control" !== m)
                            return !1
                    }
                    return !(!c || 1 !== c.length || !c.includes(m) && !c.includes(y)) || (c ? gr(c) : !c)
                }
                , ed = (0,
                    ca.createContext)(void 0)
                , td = function() {
                    return (0,
                        ca.useContext)(ed)
                }
                , nd = (0,
                    ca.createContext)({
                    hotkeys: [],
                    enabledScopes: [],
                    toggleScope: function() {},
                    enableScope: function() {},
                    disableScope: function() {}
                })
                , rd = function() {
                    return (0,
                        ca.useContext)(nd)
                }
                , od = function(e) {
                    e.stopPropagation(),
                        e.preventDefault(),
                        e.stopImmediatePropagation()
                }
                , id = "undefined" != typeof window ? ca.useLayoutEffect : ca.useEffect
                , ad = Object.defineProperty
                , ud = Object.defineProperties
                , cd = Object.getOwnPropertyDescriptors
                , sd = Object.getOwnPropertySymbols
                , ld = Object.prototype.hasOwnProperty
                , fd = Object.prototype.propertyIsEnumerable
                , pd = (e,t,n)=>t in e ? ad(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , dd = (e,t)=>{
                    for (var n in t || (t = {}))
                        ld.call(t, n) && pd(e, n, t[n]);
                    if (sd)
                        for (var n of sd(t))
                            fd.call(t, n) && pd(e, n, t[n]);
                    return e
                }
                , vd = (e,t)=>ud(e, cd(t))
                , yd = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        ld.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && sd)
                        for (var r of sd(e))
                            t.indexOf(r) < 0 && fd.call(e, r) && (n[r] = e[r]);
                    return n
                }
            ;
            const md = ca.forwardRef(((e,t)=>{
                    var n = e
                        , {bsPrefix: r, variant: o, animation: i="border", size: a, as: u="div", className: c} = n
                        , s = yd(n, ["bsPrefix", "variant", "animation", "size", "as", "className"]);
                    const l = `${r = vt(r, "spinner")}-${i}`;
                    return (0,
                        lc.jsx)(u, vd(dd({
                        ref: t
                    }, s), {
                        className: gc()(c, l, a && `${l}-${a}`, o && `text-${o}`)
                    }))
                }
            ));
            md.displayName = "Spinner";
            var hd = md
                , bd = mt("popover-header")
                , gd = mt("popover-body");
            ca.Component;
            var wd = Object.defineProperty
                , Od = Object.defineProperties
                , Ed = Object.getOwnPropertyDescriptors
                , xd = Object.getOwnPropertySymbols
                , Sd = Object.prototype.hasOwnProperty
                , jd = Object.prototype.propertyIsEnumerable
                , Pd = (e,t,n)=>t in e ? wd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
                , Cd = (e,t)=>{
                for (var n in t || (t = {}))
                    Sd.call(t, n) && Pd(e, n, t[n]);
                if (xd)
                    for (var n of xd(t))
                        jd.call(t, n) && Pd(e, n, t[n]);
                return e
            }
                , kd = (e,t)=>Od(e, Ed(t))
                , Td = (e,t)=>{
                var n = {};
                for (var r in e)
                    Sd.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && xd)
                    for (var r of xd(e))
                        t.indexOf(r) < 0 && jd.call(e, r) && (n[r] = e[r]);
                return n
            }
                , _d = Object.assign(ca.forwardRef(((e,t)=>{
                    var n = e
                        , {bsPrefix: r, placement: o="right", className: i, style: a, children: u, body: c, arrowProps: s, hasDoneInitialMeasure: l, popper: f, show: p} = n
                        , d = Td(n, ["bsPrefix", "placement", "className", "style", "children", "body", "arrowProps", "hasDoneInitialMeasure", "popper", "show"]);
                    const v = vt(r, "popover")
                        , y = yt()
                        , [m] = (null == o ? void 0 : o.split("-")) || []
                        , h = _r(m, y);
                    let b = a;
                    return p && !l && (b = Cd(Cd({}, a), Dr(null == f ? void 0 : f.strategy))),
                        (0,
                            lc.jsxs)("div", kd(Cd({
                            ref: t,
                            role: "tooltip",
                            style: b,
                            "x-placement": m,
                            className: gc()(i, v, m && `bs-popover-${h}`)
                        }, d), {
                            children: [(0,
                                lc.jsx)("div", Cd({
                                className: "popover-arrow"
                            }, s)), c ? (0,
                                lc.jsx)(gd, {
                                children: u
                            }) : u]
                        }))
                }
            )), {
                Header: bd,
                Body: gd,
                POPPER_OFFSET: [0, 8]
            })
                , Dd = Math.pow(2, 31) - 1
                , Md = n(6377)
                , Nd = n.n(Md)
                , Ad = Object.prototype.hasOwnProperty
                , Rd = $r
                , Id = Math.max
                , Ld = Math.min
                , Fd = Math.round
                , $d = "top"
                , Zd = "bottom"
                , Vd = "right"
                , Ud = "left"
                , Kd = "auto"
                , Bd = [$d, Zd, Vd, Ud]
                , Wd = "start"
                , zd = "end"
                , Hd = "clippingParents"
                , qd = "viewport"
                , Gd = "popper"
                , Xd = "reference"
                , Yd = Bd.reduce((function(e, t) {
                    return e.concat([t + "-" + Wd, t + "-" + zd])
                }
            ), [])
                , Jd = [].concat(Bd, [Kd]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + Wd, t + "-" + zd])
                }
            ), [])
                , Qd = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]
                , ev = function(e, t) {
                return co("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                    placement: t.placement
                })) : e) ? e : so(e, Bd))
            }
                , tv = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            }
                , nv = {
                passive: !0
            }
                , rv = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            }
                , ov = {
                start: "end",
                end: "start"
            }
                , iv = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };
            const av = ei({
                defaultModifiers: [{
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: $o
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: Uo,
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: mo,
                    data: {}
                }, {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: ho,
                    data: {}
                }, {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: Vo
                }, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: Io,
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: Bo,
                    requiresIfExists: ["offset"]
                }, {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: lo,
                    effect: fo,
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                }]
            })
                , uv = ["enabled", "placement", "strategy", "modifiers"]
                , cv = {
                name: "applyStyles",
                enabled: !1,
                phase: "afterWrite",
                fn: ()=>{}
            }
                , sv = {
                name: "ariaDescribedBy",
                enabled: !0,
                phase: "afterWrite",
                effect: ({state: e})=>()=>{
                    const {reference: t, popper: n} = e.elements;
                    if ("removeAttribute"in t) {
                        const e = (t.getAttribute("aria-describedby") || "").split(",").filter((e=>e.trim() !== n.id));
                        e.length ? t.setAttribute("aria-describedby", e.join(",")) : t.removeAttribute("aria-describedby")
                    }
                }
                ,
                fn: ({state: e})=>{
                    var t;
                    const {popper: n, reference: r} = e.elements
                        , o = null == (t = n.getAttribute("role")) ? void 0 : t.toLowerCase();
                    if (n.id && "tooltip" === o && "setAttribute"in r) {
                        const e = r.getAttribute("aria-describedby");
                        if (e && -1 !== e.split(",").indexOf(n.id))
                            return;
                        r.setAttribute("aria-describedby", e ? `${e},${n.id}` : n.id)
                    }
                }
            }
                , lv = [];
            var fv = ni;
            const pv = ()=>{}
                , dv = e=>e && ("current"in e ? e.current : e)
                , vv = {
                click: "mousedown",
                mouseup: "mousedown",
                pointerup: "pointerdown"
            };
            var yv = ii;
            const mv = ()=>{}
            ;
            var hv = ui;
            const bv = (0,
                ca.createContext)(Rc ? window : void 0)
                , gv = (bv.Provider,
                (e,t)=>Rc ? null == e ? (t || qe()).body : ("function" == typeof e && (e = e()),
                e && "current"in e && (e = e.current),
                    e && ("nodeType"in e || e.getBoundingClientRect) ? e : null) : null)
                , wv = ca.forwardRef(((e,t)=>{
                    const {flip: n, offset: r, placement: o, containerPadding: i, popperConfig: a={}, transition: u, runTransition: c} = e
                        , [s,l] = Lt()
                        , [f,p] = Lt()
                        , d = cc(l, t)
                        , v = si(e.container)
                        , y = si(e.target)
                        , [m,h] = (0,
                        ca.useState)(!e.show)
                        , b = fv(y, s, pi({
                        placement: o,
                        enableEvents: !!e.show,
                        containerPadding: i || 5,
                        flip: n,
                        offset: r,
                        arrowElement: f,
                        popperConfig: a
                    }));
                    e.show && m && h(!1);
                    const g = (...t)=>{
                        h(!0),
                        e.onExited && e.onExited(...t)
                    }
                        , w = e.show || !m;
                    if (hv(s, e.onHide, {
                        disabled: !e.rootClose || e.rootCloseDisabled,
                        clickTrigger: e.rootCloseEvent
                    }),
                        !w)
                        return null;
                    const {onExit: O, onExiting: E, onEnter: x, onEntering: S, onEntered: j} = e;
                    let P = e.children(Object.assign({}, b.attributes.popper, {
                        style: b.styles.popper,
                        ref: d
                    }), {
                        popper: b,
                        placement: o,
                        show: !!e.show,
                        arrowProps: Object.assign({}, b.attributes.arrow, {
                            style: b.styles.arrow,
                            ref: p
                        })
                    });
                    return P = yi(u, c, {
                        in: !!e.show,
                        appear: !0,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        children: P,
                        onExit: O,
                        onExiting: E,
                        onExited: g,
                        onEnter: x,
                        onEntering: S,
                        onEntered: j
                    }),
                        v ? fu.createPortal(P, v) : null
                }
            ));
            wv.displayName = "Overlay";
            var Ov = wv
                , Ev = Object.defineProperty
                , xv = Object.defineProperties
                , Sv = Object.getOwnPropertyDescriptors
                , jv = Object.getOwnPropertySymbols
                , Pv = Object.prototype.hasOwnProperty
                , Cv = Object.prototype.propertyIsEnumerable
                , kv = (e,t,n)=>t in e ? Ev(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , Tv = (e,t)=>{
                    for (var n in t || (t = {}))
                        Pv.call(t, n) && kv(e, n, t[n]);
                    if (jv)
                        for (var n of jv(t))
                            Cv.call(t, n) && kv(e, n, t[n]);
                    return e
                }
                , _v = (e,t)=>xv(e, Sv(t))
                , Dv = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        Pv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && jv)
                        for (var r of jv(e))
                            t.indexOf(r) < 0 && Cv.call(e, r) && (n[r] = e[r]);
                    return n
                }
            ;
            const Mv = ca.forwardRef(((e,t)=>{
                    var n = e
                        , {children: r, transition: o=ps, popperConfig: i={}, rootClose: a=!1, placement: u="top", show: c=!1} = n
                        , s = Dv(n, ["children", "transition", "popperConfig", "rootClose", "placement", "show"]);
                    const l = (0,
                        ca.useRef)({})
                        , [f,p] = (0,
                        ca.useState)(null)
                        , [d,v] = hi(s.offset)
                        , y = cc(t, d)
                        , m = !0 === o ? ps : o || void 0
                        , h = $e((e=>{
                            p(e),
                            null == i || null == i.onFirstUpdate || i.onFirstUpdate(e)
                        }
                    ));
                    return xl((()=>{
                            f && (null == l.current.scheduleUpdate || l.current.scheduleUpdate())
                        }
                    ), [f]),
                        (0,
                            ca.useEffect)((()=>{
                                c || p(null)
                            }
                        ), [c]),
                        (0,
                            lc.jsx)(Ov, _v(Tv({}, s), {
                            ref: y,
                            popperConfig: _v(Tv({}, i), {
                                modifiers: v.concat(i.modifiers || []),
                                onFirstUpdate: h
                            }),
                            transition: m,
                            rootClose: a,
                            placement: u,
                            show: c,
                            children: (e,{arrowProps: t, popper: n, show: a})=>{
                                var u, c;
                                bi(e, t);
                                const s = null == n ? void 0 : n.placement
                                    , p = Object.assign(l.current, {
                                    state: null == n ? void 0 : n.state,
                                    scheduleUpdate: null == n ? void 0 : n.update,
                                    placement: s,
                                    outOfBoundaries: (null == n || null == (u = n.state) || null == (c = u.modifiersData.hide) ? void 0 : c.isReferenceHidden) || !1,
                                    strategy: i.strategy
                                })
                                    , d = !!f;
                                return "function" == typeof r ? r(_v(Tv(_v(Tv({}, e), {
                                    placement: s,
                                    show: a
                                }), !o && a && {
                                    className: "show"
                                }), {
                                    popper: p,
                                    arrowProps: t,
                                    hasDoneInitialMeasure: d
                                })) : ca.cloneElement(r, _v(Tv({}, e), {
                                    placement: s,
                                    arrowProps: t,
                                    popper: p,
                                    hasDoneInitialMeasure: d,
                                    className: gc()(r.props.className, !o && a && "show"),
                                    style: Tv(Tv({}, r.props.style), e.style)
                                }))
                            }
                        }))
                }
            ));
            Mv.displayName = "Overlay";
            var Nv = Mv
                , Av = Object.defineProperty
                , Rv = Object.defineProperties
                , Iv = Object.getOwnPropertyDescriptors
                , Lv = Object.getOwnPropertySymbols
                , Fv = Object.prototype.hasOwnProperty
                , $v = Object.prototype.propertyIsEnumerable
                , Zv = (e,t,n)=>t in e ? Av(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , Vv = (e,t)=>{
                    for (var n in t || (t = {}))
                        Fv.call(t, n) && Zv(e, n, t[n]);
                    if (Lv)
                        for (var n of Lv(t))
                            $v.call(t, n) && Zv(e, n, t[n]);
                    return e
                }
                , Uv = (e,t)=>Rv(e, Iv(t))
                , Kv = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        Fv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && Lv)
                        for (var r of Lv(e))
                            t.indexOf(r) < 0 && $v.call(e, r) && (n[r] = e[r]);
                    return n
                }
                , Bv = Oi
                , Wv = Object.defineProperty
                , zv = Object.defineProperties
                , Hv = Object.getOwnPropertyDescriptors
                , qv = Object.getOwnPropertySymbols
                , Gv = Object.prototype.hasOwnProperty
                , Xv = Object.prototype.propertyIsEnumerable
                , Yv = (e,t,n)=>t in e ? Wv(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
                , Jv = (e,t)=>{
                    for (var n in t || (t = {}))
                        Gv.call(t, n) && Yv(e, n, t[n]);
                    if (qv)
                        for (var n of qv(t))
                            Xv.call(t, n) && Yv(e, n, t[n]);
                    return e
                }
                , Qv = (e,t)=>zv(e, Hv(t))
                , ey = (e,t)=>{
                    var n = {};
                    for (var r in e)
                        Gv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && qv)
                        for (var r of qv(e))
                            t.indexOf(r) < 0 && Xv.call(e, r) && (n[r] = e[r]);
                    return n
                }
            ;
            const ty = ca.forwardRef(((e,t)=>{
                    var n = e
                        , {as: r, bsPrefix: o, variant: i="primary", size: a, active: u=!1, disabled: c=!1, className: s} = n
                        , l = ey(n, ["as", "bsPrefix", "variant", "size", "active", "disabled", "className"]);
                    const f = vt(o, "btn")
                        , [p,{tagName: d}] = Nt(Jv({
                        tagName: r,
                        disabled: c
                    }, l))
                        , v = d;
                    return (0,
                        lc.jsx)(v, Qv(Jv(Jv({}, p), l), {
                        ref: t,
                        disabled: c,
                        className: gc()(s, f, u && "active", i && `${f}-${i}`, a && `${f}-${a}`, l.href && c && "disabled")
                    }))
                }
            ));
            ty.displayName = "Button";
            var ny = ty
                , ry = Ei
                , oy = n(2146)
                , iy = xi;
            const ay = {
                    "layout-designer": "layout-designer",
                    "pre-course-java": "pre-course-java",
                    "pre-course-python": "pre-course-python",
                    "pre-course-javascript": "pre-course-javascript",
                    css: "css",
                    html: "html",
                    javascript: "javascript",
                    php: "php",
                    python: "python",
                    java: "java",
                    scheme: "scheme",
                    ruby: "ruby",
                    go: "go",
                    elixir: "elixir",
                    clojure: "clojure",
                    clang: "clang",
                    dlang: "dlang",
                    lua: "lua",
                    prolog: "prolog",
                    haskell: "haskell",
                    cpp: "cpp",
                    bash: "bash",
                    fortran: "fortran",
                    kotlin: "kotlin",
                    swift: "swift"
                }
                , uy = e=>{
                    switch (e) {
                        case ay.css:
                        case ay.html:
                        case ay["layout-designer"]:
                            return !0;
                        default:
                            return !1
                    }
                }
            ;
            var cy = Object.defineProperty
                , sy = Object.getOwnPropertySymbols
                , ly = Object.prototype.hasOwnProperty
                , fy = Object.prototype.propertyIsEnumerable
                , py = (e,t,n)=>t in e ? cy(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
                , dy = (e,t)=>{
                for (var n in t || (t = {}))
                    ly.call(t, n) && py(e, n, t[n]);
                if (sy)
                    for (var n of sy(t))
                        fy.call(t, n) && py(e, n, t[n]);
                return e
            }
                , vy = Si
                , yy = {
                en: {
                    translation: {
                        help: {
                            controls: {
                                header: "Help",
                                body: "Reset progress. If something breaks and cannot be fixed click this button to return to the beginning of the exercises. The current code won\u2019t be saved. If you'll need it, copy it before resetting. For example, to the notepads"
                            }
                        },
                        errors: {
                            network: "There was a network problem. Please try again. If it doesn\u2019t work, make sure you have good internet and no blockers.",
                            server: "Error on server. Maybe it\u2019ll let go soon, but maybe not. Try to find out what happened in https://slack.hexlet.io/"
                        },
                        signInSuggestion: '<a href="/users/new">Create an account</a> to save your progress',
                        run: "Run",
                        resetCode: "Reset code",
                        confirm: "You want to reset the exercise progress. The current code version will not be saved. We hope you\u2019ve already copied it. Continue resetting?",
                        editor: "Editor",
                        output: "Output",
                        solution: "Solution",
                        teacherSolution: "Teacher's solution:",
                        testForExercise: "Tests",
                        userCode: "Your solution:",
                        userCodeInstructions: "(start writing in Editor, your code will appear here and you'll be able to compare it to the teacher's solution)",
                        solutionInstructions: "Teacher's solution will be available in:",
                        testInstructions: "Your exercise will be checked with these tests:",
                        solutionNotice: "It's best to solve the problem yourself, but if you're stuck for a long time, feel free to check out the solution. But make sure to study it thoroughly to truly understand it.",
                        showSolution: "Show solution",
                        lesson: "Lesson",
                        discuss: "Discussion",
                        instructions: "Instructions",
                        nextLesson: "Next",
                        prevLesson: "Previous",
                        loading: "Loading...",
                        check: {
                            error: {
                                message: "Something went wrong, try one more time, please",
                                headline: "Oops!"
                            },
                            passed: {
                                message: "Yippee! Well done! Compare your answer with the teacher\u2019s one and move to the next lesson",
                                headline: "Tests passed"
                            },
                            failed: {
                                message: "Your code contains errors. Read carefully tests output and try to find errors yourself",
                                headline: "Tests Failed"
                            },
                            "failed-infinity": {
                                message: "Maybe the test ran too long or you have an infinite loop in your solution. Make sure your loop has the correct breaking condition and you consider edge cases. If your loop works correctly, send it for checking again in 5 minutes. ",
                                headline: "Tests Failed (Infinity Loop!)"
                            }
                        }
                    }
                },
                ru: {
                    translation: {
                        help: {
                            controls: {
                                header: "\u0421\u043f\u0440\u0430\u0432\u043a\u0430",
                                body: "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441. \u041f\u043e \u044d\u0442\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u043d\u0430\u0447\u0430\u043b\u043e \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e-\u0442\u043e \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c \u0438 \u043d\u0435 \u0447\u0438\u043d\u0438\u0442\u0441\u044f. \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u043e\u0434 \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f. \u0415\u0441\u043b\u0438 \u043e\u043d \u0432\u0430\u043c \u0435\u0449\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0434 \u0441\u0431\u0440\u043e\u0441\u043e\u043c \u2014 \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0431\u043b\u043e\u043a\u043d\u043e\u0442"
                            }
                        },
                        errors: {
                            network: "\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u0441\u0435\u0442\u0435\u0432\u0430\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437. \u0415\u0441\u043b\u0438 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0432\u0441\u0451 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b",
                            server: "\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0441\u043a\u043e\u0440\u043e \u043e\u0442\u043f\u0443\u0441\u0442\u0438\u0442, \u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u2014 \u043d\u0435\u0442. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c, \u0447\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u0432 https://t.me/hexletcommunity/12"
                        },
                        signInSuggestion: '<a href="/users/new">\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442</a> \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430',
                        run: "\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",
                        resetCode: "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043a\u043e\u0434",
                        confirm: "\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f. \u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043a\u043e\u0434\u0430 \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u2014 \u043d\u0430\u0434\u0435\u0435\u043c\u0441\u044f, \u0432\u044b \u0443\u0436\u0435 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0435\u0433\u043e. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u043c \u0441\u0431\u0440\u043e\u0441?",
                        editor: "\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440",
                        output: "\u0412\u044b\u0432\u043e\u0434",
                        testForExercise: "\u0422\u0435\u0441\u0442\u044b",
                        solution: "\u0420\u0435\u0448\u0435\u043d\u0438\u0435",
                        teacherSolution: "\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u0443\u0447\u0438\u0442\u0435\u043b\u044f:",
                        userCode: "\u0412\u0430\u0448\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435:",
                        userCodeInstructions: "\u041a\u043e\u0433\u0434\u0430 \u0432\u044b \u043d\u0430\u0447\u043d\u0451\u0442\u0435 \u043f\u0438\u0441\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0432 \u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435, \u043e\u043d\u043e \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0442\u0443\u0442 \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0441 \u0443\u0447\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c",
                        solutionInstructions: "\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u0443\u0447\u0438\u0442\u0435\u043b\u044f \u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437:",
                        testInstructions: "\u0412\u0430\u0448\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u043f\u043e \u044d\u0442\u0438\u043c \u0442\u0435\u0441\u0442\u0430\u043c",
                        solutionNotice: "\u0416\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0440\u0435\u0448\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u0441\u0442\u0440\u044f\u043b\u0438 \u0438 \u0434\u043e\u043b\u0433\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0443\u0447\u0438\u0442\u0435\u043b\u044f. \u041d\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u0431\u0435\u0440\u0438\u0442\u0435\u0441\u044c \u0432 \u043d\u0451\u043c \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e \u043f\u0430\u043c\u044f\u0442\u0438",
                        showSolution: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435",
                        lesson: "\u0423\u0440\u043e\u043a",
                        discuss: "\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435",
                        instructions: "\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438",
                        nextLesson: "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439",
                        prevLesson: "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439",
                        loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",
                        check: {
                            error: {
                                message: "\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437",
                                headline: "\u0423\u043f\u0441!"
                            },
                            passed: {
                                message: "\u0423\u0440\u0430! \u0412\u0441\u0451 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c! \u0421\u0440\u0430\u0432\u043d\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0441 \u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u0443\u0447\u0438\u0442\u0435\u043b\u044f \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u0435 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0443\u0440\u043e\u043a\u0443",
                                headline: "\u0422\u0435\u0441\u0442\u044b \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u044b"
                            },
                            failed: {
                                message: '\u0412 \u0432\u0430\u0448\u0435\u043c \u043a\u043e\u0434\u0435 \u0435\u0441\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438. \u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u0432\u043e\u0434 \u0442\u0435\u0441\u0442\u043e\u0432, \u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0438\u0445. <a href="http://help.hexlet.io/ru/articles/111500-kak-nayti-oshibki-v-kode" target="_blank">\u041a\u0430\u043a \u0438\u0441\u043a\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438 \u0432 \u043a\u043e\u0434\u0435</a>. \u0415\u0441\u043b\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0441\u043b\u043e\u0436\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 <a href="https://premium.hexlet.io/?promo_name=premium&promo_position=body&promo_type=link&promo_creative=test-failed-link" target="_blank">\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0441 \u043d\u0430\u0441\u0442\u0430\u0432\u043d\u0438\u043a\u043e\u043c</a>',
                                headline: "\u0422\u0435\u0441\u0442\u044b \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0438"
                            },
                            "failed-infinity": {
                                message: "\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0442\u0435\u0441\u0442\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043e\u043b\u0433\u043e \u0438\u043b\u0438 \u0432 \u0432\u0430\u0448\u0435\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u0438 \u0435\u0441\u0442\u044c \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u0446\u0438\u043a\u043b. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432 \u0446\u0438\u043a\u043b\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438, \u0438 \u0432\u044b \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0435 \u043f\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438. \u0415\u0441\u043b\u0438 \u0441 \u0446\u0438\u043a\u043b\u043e\u043c \u0432\u0441\u0451 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434 \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0441\u043d\u043e\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 5 \u043c\u0438\u043d\u0443\u0442",
                                headline: "\u0414\u043e\u043b\u0433\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"
                            }
                        }
                    }
                }
            }
                , my = (e,t,n)=>new Promise(((r,o)=>{
                    var i = e=>{
                        try {
                            u(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                        , a = e=>{
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                        , u = e=>e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
                    u((n = n.apply(e, t)).next())
                }
            ));
            const hy = 12e5;
            var by = ()=>my(void 0, null, (function*() {
                    yield _u.ZP.use(Zu).init({
                        resources: yy,
                        load: "languageOnly",
                        fallbackLng: !1,
                        lng: Gu().locale,
                        debug: !1,
                        react: {
                            useSuspense: !0
                        }
                    });
                    const e = {
                        lessonVersion: Gu().lesson_version,
                        lesson: Gu().lesson,
                        language: Gu().language,
                        lessonMember: Gu().lesson_member
                    }
                        , t = Gu().lesson_member.state === Jl.finished
                        , n = `lesson-version-${Gu().lesson_version.id}`
                        , r = ee({
                        preloadedState: {
                            editorSlice: {
                                content: localStorage.getItem(n) || Gu().lesson_version.prepared_code || "",
                                focusesCount: 1
                            },
                            solutionSlice: {
                                startTime: Date.now(),
                                processState: t ? Yl.shown : Yl.notAllowedToShown,
                                waitingTime: hy
                            },
                            lessonSlice: {
                                finished: t
                            }
                        },
                        reducer: Af
                    })
                        , o = document.querySelector("#basics-lesson-container");
                    (0,
                        sa.s)(o).render(ca.createElement(Pu, {
                        store: r
                    }, ca.createElement(xp.Provider, {
                        value: e
                    }, ca.createElement(vy, null))))
                }
            ));
            ua.highlightAll(),
                by()
        },
        9414: function(e, t, n) {
            "use strict";
            function r(e) {
                if (Array.isArray(e))
                    return e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        1892: function(e, t, n) {
            "use strict";
            function r(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        9486: function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        3208: function(e, t, n) {
            "use strict";
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                    "value"in r && (r.writable = !0),
                        Object.defineProperty(e, (0,
                            i.Z)(r.key), r)
                }
            }
            function o(e, t, n) {
                return t && r(e.prototype, t),
                n && r(e, n),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    e
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = n(1872)
        },
        3232: function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                return (t = (0,
                    o.Z)(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                    e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = n(1872)
        },
        3075: function(e, t, n) {
            "use strict";
            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        4139: function(e, t, n) {
            "use strict";
            function r(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                t && (0,
                    o.Z)(e, t)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = n(3370)
        },
        5953: function(e, t, n) {
            "use strict";
            function r() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        9589: function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (t && ("object" === (0,
                    o.Z)(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return (0,
                    i.Z)(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = n(9382)
                , i = n(1892)
        },
        3370: function(e, t, n) {
            "use strict";
            function r(e, t) {
                return (r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        8702: function(e, t, n) {
            "use strict";
            function r(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }
            function o(e) {
                return (0,
                    i.Z)(e) || r(e) || (0,
                    a.Z)(e) || (0,
                    u.Z)()
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = n(9414)
                , a = n(3301)
                , u = n(5953)
        },
        1872: function(e, t, n) {
            "use strict";
            function r(e, t) {
                if ("object" !== (0,
                    i.Z)(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== (0,
                        i.Z)(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }
            function o(e) {
                var t = r(e, "string");
                return "symbol" === (0,
                    i.Z)(t) ? t : String(t)
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = n(9382)
        },
        9382: function(e, t, n) {
            "use strict";
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        3301: function(e, t, n) {
            "use strict";
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function o(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return r(e, t)
                }
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        }
    }, r = {};
    e.m = n,
        t = [],
        e.O = function(n, r, o, i) {
            if (!r) {
                var a = 1 / 0;
                for (l = 0; l < t.length; l++) {
                    r = t[l][0],
                        o = t[l][1],
                        i = t[l][2];
                    for (var u = !0, c = 0; c < r.length; c++)
                        (!1 & i || a >= i) && Object.keys(e.O).every((function(t) {
                                return e.O[t](r[c])
                            }
                        )) ? r.splice(c--, 1) : (u = !1,
                        i < a && (a = i));
                    if (u) {
                        t.splice(l--, 1);
                        var s = o();
                        void 0 !== s && (n = s)
                    }
                }
                return n
            }
            i = i || 0;
            for (var l = t.length; l > 0 && t[l - 1][2] > i; l--)
                t[l] = t[l - 1];
            t[l] = [r, o, i]
        }
        ,
        e.n = function(t) {
            var n = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
            ;
            return e.d(n, {
                a: n
            }),
                n
        }
        ,
        e.d = function(t, n) {
            for (var r in n)
                e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: n[r]
                })
        }
        ,
        e.g = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        e.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        e.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        function() {
            var t;
            e.g.importScripts && (t = e.g.location + "");
            var n = e.g.document;
            if (!t && n && (n.currentScript && (t = n.currentScript.src),
                !t)) {
                var r = n.getElementsByTagName("script");
                if (r.length)
                    for (var o = r.length - 1; o > -1 && !t; )
                        t = r[o--].src
            }
            if (!t)
                throw new Error("Automatic publicPath is not supported in this browser");
            t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
                e.p = t
        }(),
        function() {
            var t = {
                458: 0
            };
            e.O.j = function(e) {
                return 0 === t[e]
            }
            ;
            var n = function(n, r) {
                var o, i, a = r[0], u = r[1], c = r[2], s = 0;
                if (a.some((function(e) {
                        return 0 !== t[e]
                    }
                ))) {
                    for (o in u)
                        e.o(u, o) && (e.m[o] = u[o]);
                    if (c)
                        var l = c(e)
                }
                for (n && n(r); s < a.length; s++)
                    i = a[s],
                    e.o(t, i) && t[i] && t[i][0](),
                        t[i] = 0;
                return e.O(l)
            }
                , r = self.webpackChunkhexlet_basics = self.webpackChunkhexlet_basics || [];
            r.forEach(n.bind(null, 0)),
                r.push = n.bind(null, r.push.bind(r))
        }();
    var o = e.O(void 0, [216, 116, 770], (function() {
            return e(571)
        }
    ));
    o = e.O(o)
}();
