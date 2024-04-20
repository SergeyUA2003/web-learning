!function() {
    "use strict";
    function t(r) {
        var i = n[r];
        if (void 0 !== i)
            return i.exports;
        var s = n[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r](s, s.exports, t),
            s.loaded = !0,
            s.exports
    }
    var e = {
        4057: function(t, e, n) {
            function r() {
                const e = (0,
                    s.cu)();
                if (!e.__SENTRY__)
                    return;
                const n = {
                    mongodb: ()=>new ((0,
                        a.l$)(t, "./node/integrations/mongo").Mongo),
                    mongoose: ()=>new ((0,
                        a.l$)(t, "./node/integrations/mongo").Mongo),
                    mysql: ()=>new ((0,
                        a.l$)(t, "./node/integrations/mysql").Mysql),
                    pg: ()=>new ((0,
                        a.l$)(t, "./node/integrations/postgres").Postgres)
                }
                    , r = Object.keys(n).filter((t=>!!(0,
                    a.$y)(t))).map((t=>{
                        try {
                            return n[t]()
                        } catch (t) {
                            return
                        }
                    }
                )).filter((t=>t));
                r.length > 0 && (e.__SENTRY__.integrations = [...e.__SENTRY__.integrations || [], ...r])
            }
            function i() {
                (0,
                    o.T)(),
                (0,
                    a.KV)() && r()
            }
            n.d(e, {
                r: function() {
                    return i
                }
            });
            var s = n(1142)
                , o = n(8289)
                , a = n(7108);
            t = n.hmd(t)
        },
        1498: function(t, e, n) {
            n.d(e, {
                J: function() {
                    return r
                }
            });
            const r = "production"
        },
        1142: function(t, e, n) {
            function r() {
                return d.n2.__SENTRY__ = d.n2.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                },
                    d.n2
            }
            function i(t) {
                const e = r()
                    , n = c(e);
                return u(e, t),
                    n
            }
            function s() {
                const t = r();
                if (t.__SENTRY__ && t.__SENTRY__.acs) {
                    const e = t.__SENTRY__.acs.getCurrentHub();
                    if (e)
                        return e
                }
                return o(t)
            }
            function o(t=r()) {
                return (!a(t) || c(t).isOlderThan(D)) && u(t, new k),
                    c(t)
            }
            function a(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }
            function c(t) {
                return (0,
                    d.YO)("hub", (()=>new k), t)
            }
            function u(t, e) {
                if (!t)
                    return !1;
                return (t.__SENTRY__ = t.__SENTRY__ || {}).hub = e,
                    !0
            }
            n.d(e, {
                Gd: function() {
                    return s
                },
                cu: function() {
                    return r
                }
            });
            var l = n(7539)
                , p = n(408)
                , _ = n(3342)
                , d = n(9733)
                , f = n(1498)
                , h = n(756)
                , g = n(8652)
                , m = Object.defineProperty
                , y = Object.defineProperties
                , E = Object.getOwnPropertyDescriptors
                , b = Object.getOwnPropertySymbols
                , v = Object.prototype.hasOwnProperty
                , S = Object.prototype.propertyIsEnumerable
                , T = (t,e,n)=>e in t ? m(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
                , O = (t,e)=>{
                for (var n in e || (e = {}))
                    v.call(e, n) && T(t, n, e[n]);
                if (b)
                    for (var n of b(e))
                        S.call(e, n) && T(t, n, e[n]);
                return t
            }
                , R = (t,e)=>y(t, E(e));
            const D = 4
                , w = 100;
            class k {
                constructor(t, e=new h.s, n=D) {
                    this._version = n,
                        this._stack = [{
                            scope: e
                        }],
                    t && this.bindClient(t)
                }
                isOlderThan(t) {
                    return this._version < t
                }
                bindClient(t) {
                    this.getStackTop().client = t,
                    t && t.setupIntegrations && t.setupIntegrations()
                }
                pushScope() {
                    const t = h.s.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: t
                    }),
                        t
                }
                popScope() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }
                withScope(t) {
                    const e = this.pushScope();
                    try {
                        t(e)
                    } finally {
                        this.popScope()
                    }
                }
                getClient() {
                    return this.getStackTop().client
                }
                getScope() {
                    return this.getStackTop().scope
                }
                getStack() {
                    return this._stack
                }
                getStackTop() {
                    return this._stack[this._stack.length - 1]
                }
                captureException(t, e) {
                    const n = this._lastEventId = e && e.event_id ? e.event_id : (0,
                        l.DM)()
                        , r = new Error("Sentry syntheticException");
                    return this._withClient(((i,s)=>{
                            i.captureException(t, R(O({
                                originalException: t,
                                syntheticException: r
                            }, e), {
                                event_id: n
                            }), s)
                        }
                    )),
                        n
                }
                captureMessage(t, e, n) {
                    const r = this._lastEventId = n && n.event_id ? n.event_id : (0,
                        l.DM)()
                        , i = new Error(t);
                    return this._withClient(((s,o)=>{
                            s.captureMessage(t, e, R(O({
                                originalException: t,
                                syntheticException: i
                            }, n), {
                                event_id: r
                            }), o)
                        }
                    )),
                        r
                }
                captureEvent(t, e) {
                    const n = e && e.event_id ? e.event_id : (0,
                        l.DM)();
                    return t.type || (this._lastEventId = n),
                        this._withClient(((r,i)=>{
                                r.captureEvent(t, R(O({}, e), {
                                    event_id: n
                                }), i)
                            }
                        )),
                        n
                }
                lastEventId() {
                    return this._lastEventId
                }
                addBreadcrumb(t, e) {
                    const {scope: n, client: r} = this.getStackTop();
                    if (!r)
                        return;
                    const {beforeBreadcrumb: i=null, maxBreadcrumbs: s=w} = r.getOptions && r.getOptions() || {};
                    if (s <= 0)
                        return;
                    const o = (0,
                        p.yW)()
                        , a = O({
                        timestamp: o
                    }, t)
                        , c = i ? (0,
                        _.Cf)((()=>i(a, e))) : a;
                    null !== c && (r.emit && r.emit("beforeAddBreadcrumb", c, e),
                        n.addBreadcrumb(c, s))
                }
                setUser(t) {
                    this.getScope().setUser(t)
                }
                setTags(t) {
                    this.getScope().setTags(t)
                }
                setExtras(t) {
                    this.getScope().setExtras(t)
                }
                setTag(t, e) {
                    this.getScope().setTag(t, e)
                }
                setExtra(t, e) {
                    this.getScope().setExtra(t, e)
                }
                setContext(t, e) {
                    this.getScope().setContext(t, e)
                }
                configureScope(t) {
                    const {scope: e, client: n} = this.getStackTop();
                    n && t(e)
                }
                run(t) {
                    const e = i(this);
                    try {
                        t(this)
                    } finally {
                        i(e)
                    }
                }
                getIntegration(t) {
                    const e = this.getClient();
                    if (!e)
                        return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
                            null
                    }
                }
                startTransaction(t, e) {
                    const n = this._callExtensionMethod("startTransaction", t, e);
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && !n && console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"),
                        n
                }
                traceHeaders() {
                    return this._callExtensionMethod("traceHeaders")
                }
                captureSession(t=!1) {
                    if (t)
                        return this.endSession();
                    this._sendSessionUpdate()
                }
                endSession() {
                    const t = this.getStackTop().scope
                        , e = t.getSession();
                    e && (0,
                        g.RJ)(e),
                        this._sendSessionUpdate(),
                        t.setSession()
                }
                startSession(t) {
                    const {scope: e, client: n} = this.getStackTop()
                        , {release: r, environment: i=f.J} = n && n.getOptions() || {}
                        , {userAgent: s} = d.n2.navigator || {}
                        , o = (0,
                        g.Hv)(O(O({
                        release: r,
                        environment: i,
                        user: e.getUser()
                    }, s && {
                        userAgent: s
                    }), t))
                        , a = e.getSession && e.getSession();
                    return a && "ok" === a.status && (0,
                        g.CT)(a, {
                        status: "exited"
                    }),
                        this.endSession(),
                        e.setSession(o),
                        o
                }
                shouldSendDefaultPii() {
                    const t = this.getClient()
                        , e = t && t.getOptions();
                    return !(!e || !e.sendDefaultPii)
                }
                _sendSessionUpdate() {
                    const {scope: t, client: e} = this.getStackTop()
                        , n = t.getSession();
                    n && e && e.captureSession && e.captureSession(n)
                }
                _withClient(t) {
                    const {scope: e, client: n} = this.getStackTop();
                    n && t(n, e)
                }
                _callExtensionMethod(t, ...e) {
                    const n = r().__SENTRY__;
                    if (n && n.extensions && "function" == typeof n.extensions[t])
                        return n.extensions[t].apply(this, e);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.warn(`Extension method ${t} couldn't be found, doing nothing.`)
                }
            }
        },
        756: function(t, e, n) {
            function r() {
                return (0,
                    l.YO)("globalEventProcessors", (()=>[]))
            }
            function i(t) {
                r().push(t)
            }
            n.d(e, {
                c: function() {
                    return i
                },
                s: function() {
                    return S
                }
            });
            var s = n(4353)
                , o = n(408)
                , a = n(4295)
                , c = n(3342)
                , u = n(7539)
                , l = n(9733)
                , p = n(8652)
                , _ = Object.defineProperty
                , d = Object.defineProperties
                , f = Object.getOwnPropertyDescriptors
                , h = Object.getOwnPropertySymbols
                , g = Object.prototype.hasOwnProperty
                , m = Object.prototype.propertyIsEnumerable
                , y = (t,e,n)=>e in t ? _(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
                , E = (t,e)=>{
                for (var n in e || (e = {}))
                    g.call(e, n) && y(t, n, e[n]);
                if (h)
                    for (var n of h(e))
                        m.call(e, n) && y(t, n, e[n]);
                return t
            }
                , b = (t,e)=>d(t, f(e));
            const v = 100;
            class S {
                constructor() {
                    this._notifyingListeners = !1,
                        this._scopeListeners = [],
                        this._eventProcessors = [],
                        this._breadcrumbs = [],
                        this._attachments = [],
                        this._user = {},
                        this._tags = {},
                        this._extra = {},
                        this._contexts = {},
                        this._sdkProcessingMetadata = {}
                }
                static clone(t) {
                    const e = new S;
                    return t && (e._breadcrumbs = [...t._breadcrumbs],
                        e._tags = E({}, t._tags),
                        e._extra = E({}, t._extra),
                        e._contexts = E({}, t._contexts),
                        e._user = t._user,
                        e._level = t._level,
                        e._span = t._span,
                        e._session = t._session,
                        e._transactionName = t._transactionName,
                        e._fingerprint = t._fingerprint,
                        e._eventProcessors = [...t._eventProcessors],
                        e._requestSession = t._requestSession,
                        e._attachments = [...t._attachments],
                        e._sdkProcessingMetadata = E({}, t._sdkProcessingMetadata)),
                        e
                }
                addScopeListener(t) {
                    this._scopeListeners.push(t)
                }
                addEventProcessor(t) {
                    return this._eventProcessors.push(t),
                        this
                }
                setUser(t) {
                    return this._user = t || {},
                    this._session && (0,
                        p.CT)(this._session, {
                        user: t
                    }),
                        this._notifyScopeListeners(),
                        this
                }
                getUser() {
                    return this._user
                }
                getRequestSession() {
                    return this._requestSession
                }
                setRequestSession(t) {
                    return this._requestSession = t,
                        this
                }
                setTags(t) {
                    return this._tags = E(E({}, this._tags), t),
                        this._notifyScopeListeners(),
                        this
                }
                setTag(t, e) {
                    return this._tags = b(E({}, this._tags), {
                        [t]: e
                    }),
                        this._notifyScopeListeners(),
                        this
                }
                setExtras(t) {
                    return this._extra = E(E({}, this._extra), t),
                        this._notifyScopeListeners(),
                        this
                }
                setExtra(t, e) {
                    return this._extra = b(E({}, this._extra), {
                        [t]: e
                    }),
                        this._notifyScopeListeners(),
                        this
                }
                setFingerprint(t) {
                    return this._fingerprint = t,
                        this._notifyScopeListeners(),
                        this
                }
                setLevel(t) {
                    return this._level = t,
                        this._notifyScopeListeners(),
                        this
                }
                setTransactionName(t) {
                    return this._transactionName = t,
                        this._notifyScopeListeners(),
                        this
                }
                setContext(t, e) {
                    return null === e ? delete this._contexts[t] : this._contexts[t] = e,
                        this._notifyScopeListeners(),
                        this
                }
                setSpan(t) {
                    return this._span = t,
                        this._notifyScopeListeners(),
                        this
                }
                getSpan() {
                    return this._span
                }
                getTransaction() {
                    const t = this.getSpan();
                    return t && t.transaction
                }
                setSession(t) {
                    return t ? this._session = t : delete this._session,
                        this._notifyScopeListeners(),
                        this
                }
                getSession() {
                    return this._session
                }
                update(t) {
                    if (!t)
                        return this;
                    if ("function" == typeof t) {
                        const e = t(this);
                        return e instanceof S ? e : this
                    }
                    return t instanceof S ? (this._tags = E(E({}, this._tags), t._tags),
                        this._extra = E(E({}, this._extra), t._extra),
                        this._contexts = E(E({}, this._contexts), t._contexts),
                    t._user && Object.keys(t._user).length && (this._user = t._user),
                    t._level && (this._level = t._level),
                    t._fingerprint && (this._fingerprint = t._fingerprint),
                    t._requestSession && (this._requestSession = t._requestSession)) : (0,
                        s.PO)(t) && (this._tags = E(E({}, this._tags), t.tags),
                        this._extra = E(E({}, this._extra), t.extra),
                        this._contexts = E(E({}, this._contexts), t.contexts),
                    t.user && (this._user = t.user),
                    t.level && (this._level = t.level),
                    t.fingerprint && (this._fingerprint = t.fingerprint),
                    t.requestSession && (this._requestSession = t.requestSession)),
                        this
                }
                clear() {
                    return this._breadcrumbs = [],
                        this._tags = {},
                        this._extra = {},
                        this._user = {},
                        this._contexts = {},
                        this._level = void 0,
                        this._transactionName = void 0,
                        this._fingerprint = void 0,
                        this._requestSession = void 0,
                        this._span = void 0,
                        this._session = void 0,
                        this._notifyScopeListeners(),
                        this._attachments = [],
                        this
                }
                addBreadcrumb(t, e) {
                    const n = "number" == typeof e ? e : v;
                    if (n <= 0)
                        return this;
                    const r = E({
                        timestamp: (0,
                            o.yW)()
                    }, t);
                    return this._breadcrumbs = [...this._breadcrumbs, r].slice(-n),
                        this._notifyScopeListeners(),
                        this
                }
                getLastBreadcrumb() {
                    return this._breadcrumbs[this._breadcrumbs.length - 1]
                }
                clearBreadcrumbs() {
                    return this._breadcrumbs = [],
                        this._notifyScopeListeners(),
                        this
                }
                addAttachment(t) {
                    return this._attachments.push(t),
                        this
                }
                getAttachments() {
                    return this._attachments
                }
                clearAttachments() {
                    return this._attachments = [],
                        this
                }
                applyToEvent(t, e={}) {
                    if (this._extra && Object.keys(this._extra).length && (t.extra = E(E({}, this._extra), t.extra)),
                    this._tags && Object.keys(this._tags).length && (t.tags = E(E({}, this._tags), t.tags)),
                    this._user && Object.keys(this._user).length && (t.user = E(E({}, this._user), t.user)),
                    this._contexts && Object.keys(this._contexts).length && (t.contexts = E(E({}, this._contexts), t.contexts)),
                    this._level && (t.level = this._level),
                    this._transactionName && (t.transaction = this._transactionName),
                        this._span) {
                        t.contexts = E({
                            trace: this._span.getTraceContext()
                        }, t.contexts);
                        const e = this._span.transaction;
                        if (e) {
                            t.sdkProcessingMetadata = E({
                                dynamicSamplingContext: e.getDynamicSamplingContext()
                            }, t.sdkProcessingMetadata);
                            const n = e.name;
                            n && (t.tags = E({
                                transaction: n
                            }, t.tags))
                        }
                    }
                    return this._applyFingerprint(t),
                        t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs],
                        t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0,
                        t.sdkProcessingMetadata = E(E({}, t.sdkProcessingMetadata), this._sdkProcessingMetadata),
                        this._notifyEventProcessors([...r(), ...this._eventProcessors], t, e)
                }
                setSDKProcessingMetadata(t) {
                    return this._sdkProcessingMetadata = E(E({}, this._sdkProcessingMetadata), t),
                        this
                }
                _notifyEventProcessors(t, e, n, r=0) {
                    return new a.cW(((i,o)=>{
                            const a = t[r];
                            if (null === e || "function" != typeof a)
                                i(e);
                            else {
                                const u = a(E({}, e), n);
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.id && null === u && c.kg.log(`Event processor "${a.id}" dropped event`),
                                    (0,
                                        s.J8)(u) ? u.then((e=>this._notifyEventProcessors(t, e, n, r + 1).then(i))).then(null, o) : this._notifyEventProcessors(t, u, n, r + 1).then(i).then(null, o)
                            }
                        }
                    ))
                }
                _notifyScopeListeners() {
                    this._notifyingListeners || (this._notifyingListeners = !0,
                        this._scopeListeners.forEach((t=>{
                                t(this)
                            }
                        )),
                        this._notifyingListeners = !1)
                }
                _applyFingerprint(t) {
                    t.fingerprint = t.fingerprint ? (0,
                        u.lE)(t.fingerprint) : [],
                    this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                    t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                }
            }
        },
        8652: function(t, e, n) {
            function r(t) {
                const e = (0,
                    a.ph)()
                    , n = {
                    sid: (0,
                        c.DM)(),
                    init: !0,
                    timestamp: e,
                    started: e,
                    duration: 0,
                    status: "ok",
                    errors: 0,
                    ignoreDuration: !1,
                    toJSON: ()=>o(n)
                };
                return t && i(n, t),
                    n
            }
            function i(t, e={}) {
                if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
                !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)),
                    t.timestamp = e.timestamp || (0,
                        a.ph)(),
                e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
                e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0,
                    c.DM)()),
                void 0 !== e.init && (t.init = e.init),
                !t.did && e.did && (t.did = `${e.did}`),
                "number" == typeof e.started && (t.started = e.started),
                    t.ignoreDuration)
                    t.duration = void 0;
                else if ("number" == typeof e.duration)
                    t.duration = e.duration;
                else {
                    const e = t.timestamp - t.started;
                    t.duration = e >= 0 ? e : 0
                }
                e.release && (t.release = e.release),
                e.environment && (t.environment = e.environment),
                !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
                !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
                "number" == typeof e.errors && (t.errors = e.errors),
                e.status && (t.status = e.status)
            }
            function s(t, e) {
                let n = {};
                e ? n = {
                    status: e
                } : "ok" === t.status && (n = {
                    status: "exited"
                }),
                    i(t, n)
            }
            function o(t) {
                return (0,
                    u.Jr)({
                    sid: `${t.sid}`,
                    init: t.init,
                    started: new Date(1e3 * t.started).toISOString(),
                    timestamp: new Date(1e3 * t.timestamp).toISOString(),
                    status: t.status,
                    errors: t.errors,
                    did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                    duration: t.duration,
                    attrs: {
                        release: t.release,
                        environment: t.environment,
                        ip_address: t.ipAddress,
                        user_agent: t.userAgent
                    }
                })
            }
            n.d(e, {
                CT: function() {
                    return i
                },
                Hv: function() {
                    return r
                },
                RJ: function() {
                    return s
                }
            });
            var a = n(408)
                , c = n(7539)
                , u = n(3813)
        },
        8289: function(t, e, n) {
            function r() {
                m || (m = !0,
                    (0,
                        h.oq)("error", i),
                    (0,
                        h.oq)("unhandledrejection", i))
            }
            function i() {
                const t = (0,
                    g.x1)();
                if (t) {
                    const e = "internal_error";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`),
                        t.setStatus(e)
                }
            }
            function s() {
                const t = this.getScope().getSpan();
                return t ? {
                    "sentry-trace": t.toTraceparent()
                } : {}
            }
            function o(t, e, n) {
                if (!(0,
                    f.z)(e))
                    return t.sampled = !1,
                        t;
                if (void 0 !== t.sampled)
                    return t.setMetadata({
                        sampleRate: Number(t.sampled)
                    }),
                        t;
                let r;
                return "function" == typeof e.tracesSampler ? (r = e.tracesSampler(n),
                    t.setMetadata({
                        sampleRate: Number(r)
                    })) : void 0 !== n.parentSampled ? r = n.parentSampled : void 0 !== e.tracesSampleRate ? (r = e.tracesSampleRate,
                    t.setMetadata({
                        sampleRate: Number(r)
                    })) : (r = 1,
                    t.setMetadata({
                        sampleRate: r
                    })),
                    a(r) ? r ? (t.sampled = Math.random() < r,
                        t.sampled ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`),
                            t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`),
                            t)) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")),
                        t.sampled = !1,
                        t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),
                        t.sampled = !1,
                        t)
            }
            function a(t) {
                return (0,
                    _.i2)(t) || "number" != typeof t && "boolean" != typeof t ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`),
                    !1) : !(t < 0 || t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`),
                    !1)
            }
            function c(t, e) {
                const n = this.getClient()
                    , r = n && n.getOptions() || {}
                    , i = r.instrumenter || "sentry"
                    , s = t.instrumenter || "sentry";
                i !== s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${i}\` instrumenter.\nThe transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`),
                    t.sampled = !1);
                let a = new E.Y(t,this);
                return a = o(a, r, R({
                    parentSampled: t.parentSampled,
                    transactionContext: t
                }, e)),
                a.sampled && a.initSpanRecorder(r._experiments && r._experiments.maxSpans),
                n && n.emit && n.emit("startTransaction", a),
                    a
            }
            function u(t, e, n, r, i, s, a) {
                const c = t.getClient()
                    , u = c && c.getOptions() || {};
                let l = new y.io(e,t,n,r,a,i);
                return l = o(l, u, R({
                    parentSampled: e.parentSampled,
                    transactionContext: e
                }, s)),
                l.sampled && l.initSpanRecorder(u._experiments && u._experiments.maxSpans),
                c && c.emit && c.emit("startTransaction", l),
                    l
            }
            function l() {
                const t = (0,
                    d.cu)();
                t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {},
                t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = c),
                t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = s),
                    r())
            }
            n.d(e, {
                T: function() {
                    return l
                },
                l: function() {
                    return u
                }
            });
            var p = n(3342)
                , _ = n(4353)
                , d = n(1142)
                , f = n(9866)
                , h = n(4553)
                , g = n(7767);
            let m = !1;
            i.tag = "sentry_tracingErrorCallback";
            var y = n(7781)
                , E = n(3681)
                , b = Object.defineProperty
                , v = Object.getOwnPropertySymbols
                , S = Object.prototype.hasOwnProperty
                , T = Object.prototype.propertyIsEnumerable
                , O = (t,e,n)=>e in t ? b(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
                , R = (t,e)=>{
                for (var n in e || (e = {}))
                    S.call(e, n) && O(t, n, e[n]);
                if (v)
                    for (var n of v(e))
                        T.call(e, n) && O(t, n, e[n]);
                return t
            }
        },
        7781: function(t, e, n) {
            n.d(e, {
                AT: function() {
                    return a
                },
                io: function() {
                    return p
                }
            });
            var r = n(408)
                , i = n(3342)
                , s = n(9958)
                , o = n(3681);
            const a = {
                idleTimeout: 1e3,
                finalTimeout: 3e4,
                heartbeatInterval: 5e3
            }
                , c = "finishReason"
                , u = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
            class l extends s.gB {
                constructor(t, e, n, r) {
                    super(r),
                        this._pushActivity = t,
                        this._popActivity = e,
                        this.transactionSpanId = n
                }
                add(t) {
                    t.spanId !== this.transactionSpanId && (t.finish = e=>{
                        t.endTimestamp = "number" == typeof e ? e : (0,
                            r.ph)(),
                            this._popActivity(t.spanId)
                    }
                        ,
                    void 0 === t.endTimestamp && this._pushActivity(t.spanId)),
                        super.add(t)
                }
            }
            class p extends o.Y {
                __init() {
                    this.activities = {}
                }
                __init2() {
                    this._heartbeatCounter = 0
                }
                __init3() {
                    this._finished = !1
                }
                __init4() {
                    this._idleTimeoutCanceledPermanently = !1
                }
                __init5() {
                    this._beforeFinishCallbacks = []
                }
                __init6() {
                    this._finishReason = u[4]
                }
                constructor(t, e, n=a.idleTimeout, r=a.finalTimeout, s=a.heartbeatInterval, o=!1) {
                    super(t, e),
                        this._idleHub = e,
                        this._idleTimeout = n,
                        this._finalTimeout = r,
                        this._heartbeatInterval = s,
                        this._onScope = o,
                        p.prototype.__init.call(this),
                        p.prototype.__init2.call(this),
                        p.prototype.__init3.call(this),
                        p.prototype.__init4.call(this),
                        p.prototype.__init5.call(this),
                        p.prototype.__init6.call(this),
                    o && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
                        e.configureScope((t=>t.setSpan(this)))),
                        this._restartIdleTimeout(),
                        setTimeout((()=>{
                                this._finished || (this.setStatus("deadline_exceeded"),
                                    this._finishReason = u[3],
                                    this.finish())
                            }
                        ), this._finalTimeout)
                }
                finish(t=(0,
                    r.ph)()) {
                    if (this._finished = !0,
                        this.activities = {},
                    "ui.action.click" === this.op && this.setTag(c, this._finishReason),
                        this.spanRecorder) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
                        for (const e of this._beforeFinishCallbacks)
                            e(this, t);
                        this.spanRecorder.spans = this.spanRecorder.spans.filter((e=>{
                                if (e.spanId === this.spanId)
                                    return !0;
                                e.endTimestamp || (e.endTimestamp = t,
                                    e.setStatus("cancelled"),
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                                const n = e.startTimestamp < t;
                                return n || ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)),
                                    n
                            }
                        )),
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] flushing IdleTransaction")
                    } else
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] No active IdleTransaction");
                    if (this._onScope) {
                        const t = this._idleHub.getScope();
                        t.getTransaction() === this && t.setSpan(void 0)
                    }
                    return super.finish(t)
                }
                registerBeforeFinishCallback(t) {
                    this._beforeFinishCallbacks.push(t)
                }
                initSpanRecorder(t) {
                    if (!this.spanRecorder) {
                        const e = t=>{
                                this._finished || this._pushActivity(t)
                            }
                            , n = t=>{
                                this._finished || this._popActivity(t)
                            }
                        ;
                        this.spanRecorder = new l(e,n,this.spanId,t),
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("Starting heartbeat"),
                            this._pingHeartbeat()
                    }
                    this.spanRecorder.add(this)
                }
                cancelIdleTimeout(t, {restartOnChildSpanChange: e}={
                    restartOnChildSpanChange: !0
                }) {
                    this._idleTimeoutCanceledPermanently = !1 === e,
                    this._idleTimeoutID && (clearTimeout(this._idleTimeoutID),
                        this._idleTimeoutID = void 0,
                    0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = u[5],
                        this.finish(t)))
                }
                setFinishReason(t) {
                    this._finishReason = t
                }
                _restartIdleTimeout(t) {
                    this.cancelIdleTimeout(),
                        this._idleTimeoutID = setTimeout((()=>{
                                !this._finished && 0 === Object.keys(this.activities).length && (this._finishReason = u[1],
                                    this.finish(t))
                            }
                        ), this._idleTimeout)
                }
                _pushActivity(t) {
                    this.cancelIdleTimeout(void 0, {
                        restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
                    }),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] pushActivity: ${t}`),
                        this.activities[t] = !0,
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)
                }
                _popActivity(t) {
                    if (this.activities[t] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] popActivity ${t}`),
                        delete this.activities[t],
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)),
                    0 === Object.keys(this.activities).length) {
                        const t = (0,
                            r.ph)();
                        this._idleTimeoutCanceledPermanently ? (this._finishReason = u[5],
                            this.finish(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
                    }
                }
                _beat() {
                    if (this._finished)
                        return;
                    const t = Object.keys(this.activities).join("");
                    t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1,
                        this._prevHeartbeatString = t,
                        this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
                            this.setStatus("deadline_exceeded"),
                            this._finishReason = u[0],
                            this.finish()) : this._pingHeartbeat()
                }
                _pingHeartbeat() {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
                        setTimeout((()=>{
                                this._beat()
                            }
                        ), this._heartbeatInterval)
                }
            }
        },
        9958: function(t, e, n) {
            function r(t) {
                if (t < 400 && t >= 100)
                    return "ok";
                if (t >= 400 && t < 500)
                    switch (t) {
                        case 401:
                            return "unauthenticated";
                        case 403:
                            return "permission_denied";
                        case 404:
                            return "not_found";
                        case 409:
                            return "already_exists";
                        case 413:
                            return "failed_precondition";
                        case 429:
                            return "resource_exhausted";
                        default:
                            return "invalid_argument"
                    }
                if (t >= 500 && t < 600)
                    switch (t) {
                        case 501:
                            return "unimplemented";
                        case 503:
                            return "unavailable";
                        case 504:
                            return "deadline_exceeded";
                        default:
                            return "internal_error"
                    }
                return "unknown_error"
            }
            n.d(e, {
                Dr: function() {
                    return y
                },
                gB: function() {
                    return m
                }
            });
            var i = n(7539)
                , s = n(408)
                , o = n(3342)
                , a = n(3813)
                , c = Object.defineProperty
                , u = Object.defineProperties
                , l = Object.getOwnPropertyDescriptors
                , p = Object.getOwnPropertySymbols
                , _ = Object.prototype.hasOwnProperty
                , d = Object.prototype.propertyIsEnumerable
                , f = (t,e,n)=>e in t ? c(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
                , h = (t,e)=>{
                for (var n in e || (e = {}))
                    _.call(e, n) && f(t, n, e[n]);
                if (p)
                    for (var n of p(e))
                        d.call(e, n) && f(t, n, e[n]);
                return t
            }
                , g = (t,e)=>u(t, l(e));
            class m {
                __init() {
                    this.spans = []
                }
                constructor(t=1e3) {
                    m.prototype.__init.call(this),
                        this._maxlen = t
                }
                add(t) {
                    this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
                }
            }
            class y {
                __init2() {
                    this.traceId = (0,
                        i.DM)()
                }
                __init3() {
                    this.spanId = (0,
                        i.DM)().substring(16)
                }
                __init4() {
                    this.startTimestamp = (0,
                        s.ph)()
                }
                __init5() {
                    this.tags = {}
                }
                __init6() {
                    this.data = {}
                }
                __init7() {
                    this.instrumenter = "sentry"
                }
                constructor(t) {
                    if (y.prototype.__init2.call(this),
                        y.prototype.__init3.call(this),
                        y.prototype.__init4.call(this),
                        y.prototype.__init5.call(this),
                        y.prototype.__init6.call(this),
                        y.prototype.__init7.call(this),
                        !t)
                        return this;
                    t.traceId && (this.traceId = t.traceId),
                    t.spanId && (this.spanId = t.spanId),
                    t.parentSpanId && (this.parentSpanId = t.parentSpanId),
                    "sampled"in t && (this.sampled = t.sampled),
                    t.op && (this.op = t.op),
                    t.description && (this.description = t.description),
                    t.data && (this.data = t.data),
                    t.tags && (this.tags = t.tags),
                    t.status && (this.status = t.status),
                    t.startTimestamp && (this.startTimestamp = t.startTimestamp),
                    t.endTimestamp && (this.endTimestamp = t.endTimestamp),
                    t.instrumenter && (this.instrumenter = t.instrumenter)
                }
                startChild(t) {
                    const e = new y(g(h({}, t), {
                        parentSpanId: this.spanId,
                        sampled: this.sampled,
                        traceId: this.traceId
                    }));
                    if (e.spanRecorder = this.spanRecorder,
                    e.spanRecorder && e.spanRecorder.add(e),
                        e.transaction = this.transaction,
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.transaction) {
                        const n = `[Tracing] Starting '${t && t.op || "< unknown op >"}' span on transaction '${e.transaction.name || "< unknown name >"}' (${e.transaction.spanId}).`;
                        e.transaction.metadata.spanMetadata[e.spanId] = {
                            logMessage: n
                        },
                            o.kg.log(n)
                    }
                    return e
                }
                setTag(t, e) {
                    return this.tags = g(h({}, this.tags), {
                        [t]: e
                    }),
                        this
                }
                setData(t, e) {
                    return this.data = g(h({}, this.data), {
                        [t]: e
                    }),
                        this
                }
                setStatus(t) {
                    return this.status = t,
                        this
                }
                setHttpStatus(t) {
                    this.setTag("http.status_code", String(t));
                    const e = r(t);
                    return "unknown_error" !== e && this.setStatus(e),
                        this
                }
                isSuccess() {
                    return "ok" === this.status
                }
                finish(t) {
                    if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                        const {logMessage: t} = this.transaction.metadata.spanMetadata[this.spanId];
                        t && o.kg.log(t.replace("Starting", "Finishing"))
                    }
                    this.endTimestamp = "number" == typeof t ? t : (0,
                        s.ph)()
                }
                toTraceparent() {
                    let t = "";
                    return void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"),
                        `${this.traceId}-${this.spanId}${t}`
                }
                toContext() {
                    return (0,
                        a.Jr)({
                        data: this.data,
                        description: this.description,
                        endTimestamp: this.endTimestamp,
                        op: this.op,
                        parentSpanId: this.parentSpanId,
                        sampled: this.sampled,
                        spanId: this.spanId,
                        startTimestamp: this.startTimestamp,
                        status: this.status,
                        tags: this.tags,
                        traceId: this.traceId
                    })
                }
                updateWithContext(t) {
                    return this.data = t.data || {},
                        this.description = t.description,
                        this.endTimestamp = t.endTimestamp,
                        this.op = t.op,
                        this.parentSpanId = t.parentSpanId,
                        this.sampled = t.sampled,
                        this.spanId = t.spanId || this.spanId,
                        this.startTimestamp = t.startTimestamp || this.startTimestamp,
                        this.status = t.status,
                        this.tags = t.tags || {},
                        this.traceId = t.traceId || this.traceId,
                        this
                }
                getTraceContext() {
                    return (0,
                        a.Jr)({
                        data: Object.keys(this.data).length > 0 ? this.data : void 0,
                        description: this.description,
                        op: this.op,
                        parent_span_id: this.parentSpanId,
                        span_id: this.spanId,
                        status: this.status,
                        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                        trace_id: this.traceId
                    })
                }
                toJSON() {
                    return (0,
                        a.Jr)({
                        data: Object.keys(this.data).length > 0 ? this.data : void 0,
                        description: this.description,
                        op: this.op,
                        parent_span_id: this.parentSpanId,
                        span_id: this.spanId,
                        start_timestamp: this.startTimestamp,
                        status: this.status,
                        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                        timestamp: this.endTimestamp,
                        trace_id: this.traceId
                    })
                }
            }
        },
        3681: function(t, e, n) {
            n.d(e, {
                Y: function() {
                    return m
                }
            });
            var r = n(3342)
                , i = n(3813)
                , s = n(1498)
                , o = n(1142)
                , a = n(9958)
                , c = Object.defineProperty
                , u = Object.defineProperties
                , l = Object.getOwnPropertyDescriptors
                , p = Object.getOwnPropertySymbols
                , _ = Object.prototype.hasOwnProperty
                , d = Object.prototype.propertyIsEnumerable
                , f = (t,e,n)=>e in t ? c(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
                , h = (t,e)=>{
                for (var n in e || (e = {}))
                    _.call(e, n) && f(t, n, e[n]);
                if (p)
                    for (var n of p(e))
                        d.call(e, n) && f(t, n, e[n]);
                return t
            }
                , g = (t,e)=>u(t, l(e));
            class m extends a.Dr {
                __init() {
                    this._measurements = {}
                }
                __init2() {
                    this._contexts = {}
                }
                __init3() {
                    this._frozenDynamicSamplingContext = void 0
                }
                constructor(t, e) {
                    super(t),
                        m.prototype.__init.call(this),
                        m.prototype.__init2.call(this),
                        m.prototype.__init3.call(this),
                        this._hub = e || (0,
                            o.Gd)(),
                        this._name = t.name || "",
                        this.metadata = g(h({
                            source: "custom"
                        }, t.metadata), {
                            spanMetadata: {}
                        }),
                        this._trimEnd = t.trimEnd,
                        this.transaction = this;
                    const n = this.metadata.dynamicSamplingContext;
                    n && (this._frozenDynamicSamplingContext = h({}, n))
                }
                get name() {
                    return this._name
                }
                set name(t) {
                    this.setName(t)
                }
                setName(t, e="custom") {
                    this._name = t,
                        this.metadata.source = e
                }
                initSpanRecorder(t=1e3) {
                    this.spanRecorder || (this.spanRecorder = new a.gB(t)),
                        this.spanRecorder.add(this)
                }
                setContext(t, e) {
                    null === e ? delete this._contexts[t] : this._contexts[t] = e
                }
                setMeasurement(t, e, n="") {
                    this._measurements[t] = {
                        value: e,
                        unit: n
                    }
                }
                setMetadata(t) {
                    this.metadata = h(h({}, this.metadata), t)
                }
                finish(t) {
                    if (void 0 !== this.endTimestamp)
                        return;
                    this.name || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                        this.name = "<unlabeled transaction>"),
                        super.finish(t);
                    const e = this._hub.getClient();
                    if (e && e.emit && e.emit("finishTransaction", this),
                    !0 !== this.sampled)
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                            void (e && e.recordDroppedEvent("sample_rate", "transaction"));
                    const n = this.spanRecorder ? this.spanRecorder.spans.filter((t=>t !== this && t.endTimestamp)) : [];
                    this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce(((t,e)=>t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t)).endTimestamp);
                    const i = this.metadata
                        , s = h({
                        contexts: g(h({}, this._contexts), {
                            trace: this.getTraceContext()
                        }),
                        spans: n,
                        start_timestamp: this.startTimestamp,
                        tags: this.tags,
                        timestamp: this.endTimestamp,
                        transaction: this.name,
                        type: "transaction",
                        sdkProcessingMetadata: g(h({}, i), {
                            dynamicSamplingContext: this.getDynamicSamplingContext()
                        })
                    }, i.source && {
                        transaction_info: {
                            source: i.source
                        }
                    });
                    return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)),
                        s.measurements = this._measurements),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
                        this._hub.captureEvent(s)
                }
                toContext() {
                    const t = super.toContext();
                    return (0,
                        i.Jr)(g(h({}, t), {
                        name: this.name,
                        trimEnd: this._trimEnd
                    }))
                }
                updateWithContext(t) {
                    return super.updateWithContext(t),
                        this.name = t.name || "",
                        this._trimEnd = t.trimEnd,
                        this
                }
                getDynamicSamplingContext() {
                    if (this._frozenDynamicSamplingContext)
                        return this._frozenDynamicSamplingContext;
                    const t = this._hub || (0,
                        o.Gd)()
                        , e = t && t.getClient();
                    if (!e)
                        return {};
                    const {environment: n, release: r} = e.getOptions() || {}
                        , {publicKey: a} = e.getDsn() || {}
                        , c = this.metadata.sampleRate
                        , u = void 0 !== c ? c.toString() : void 0
                        , {segment: l} = t.getScope().getUser() || {}
                        , p = this.metadata.source
                        , _ = p && "url" !== p ? this.name : void 0
                        , d = (0,
                        i.Jr)({
                        environment: n || s.J,
                        release: r,
                        transaction: _,
                        user_segment: l,
                        public_key: a,
                        trace_id: this.traceId,
                        sample_rate: u
                    });
                    return e.emit && e.emit("createDsc", d),
                        d
                }
                setHub(t) {
                    this._hub = t
                }
            }
        },
        7767: function(t, e, n) {
            function r(t) {
                return (t || (0,
                    i.Gd)()).getScope().getTransaction()
            }
            n.d(e, {
                x1: function() {
                    return r
                }
            });
            var i = n(1142)
        },
        9866: function(t, e, n) {
            function r(t) {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
                    return !1;
                const e = (0,
                    i.Gd)().getClient()
                    , n = t || e && e.getOptions();
                return !!n && (n.enableTracing || "tracesSampleRate"in n || "tracesSampler"in n)
            }
            n.d(e, {
                z: function() {
                    return r
                }
            });
            var i = n(1142)
        },
        4087: function(t, e, n) {
            function r(t, e={}) {
                try {
                    let n = t;
                    const r = 5
                        , s = [];
                    let o = 0
                        , a = 0;
                    const c = " > "
                        , l = c.length;
                    let p;
                    const _ = Array.isArray(e) ? e : e.keyAttrs
                        , d = !Array.isArray(e) && e.maxStringLength || u;
                    for (; n && o++ < r && (p = i(n, _),
                        !("html" === p || o > 1 && a + s.length * l + p.length >= d)); )
                        s.push(p),
                            a += p.length,
                            n = n.parentNode;
                    return s.reverse().join(c)
                } catch (t) {
                    return "<unknown>"
                }
            }
            function i(t, e) {
                const n = t
                    , r = [];
                let i, s, o, c, u;
                if (!n || !n.tagName)
                    return "";
                r.push(n.tagName.toLowerCase());
                const l = e && e.length ? e.filter((t=>n.getAttribute(t))).map((t=>[t, n.getAttribute(t)])) : null;
                if (l && l.length)
                    l.forEach((t=>{
                            r.push(`[${t[0]}="${t[1]}"]`)
                        }
                    ));
                else if (n.id && r.push(`#${n.id}`),
                    i = n.className,
                i && (0,
                    a.HD)(i))
                    for (s = i.split(/\s+/),
                             u = 0; u < s.length; u++)
                        r.push(`.${s[u]}`);
                const p = ["aria-label", "type", "name", "title", "alt"];
                for (u = 0; u < p.length; u++)
                    o = p[u],
                        c = n.getAttribute(o),
                    c && r.push(`[${o}="${c}"]`);
                return r.join("")
            }
            function s() {
                try {
                    return c.document.location.href
                } catch (t) {
                    return ""
                }
            }
            function o(t) {
                return c.document && c.document.querySelector ? c.document.querySelector(t) : null
            }
            n.d(e, {
                Rt: function() {
                    return r
                },
                l4: function() {
                    return s
                },
                qT: function() {
                    return o
                }
            });
            var a = n(4353);
            const c = (0,
                n(9733).Rf)()
                , u = 80
        },
        1041: function(t, e, n) {
            function r() {
                return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
            }
            function i() {
                return "npm"
            }
            n.d(e, {
                S: function() {
                    return i
                },
                n: function() {
                    return r
                }
            })
        },
        4553: function(t, e, n) {
            function r() {
                const t = D.chrome
                    , e = t && t.app && t.app.runtime
                    , n = "history"in D && !!D.history.pushState && !!D.history.replaceState;
                return !e && n
            }
            function i(t) {
                if (!C[t])
                    switch (C[t] = !0,
                        t) {
                        case "console":
                            a();
                            break;
                        case "dom":
                            m();
                            break;
                        case "xhr":
                            _();
                            break;
                        case "fetch":
                            c();
                            break;
                        case "history":
                            d();
                            break;
                        case "error":
                            y();
                            break;
                        case "unhandledrejection":
                            E();
                            break;
                        default:
                            return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("unknown instrumentation type:", t))
                    }
            }
            function s(t, e) {
                $[t] = $[t] || [],
                    $[t].push(e),
                    i(t)
            }
            function o(t, e) {
                if (t && $[t])
                    for (const n of $[t] || [])
                        try {
                            n(e)
                        } catch (e) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${(0,
                                T.$P)(n)}\nError:`, e)
                        }
            }
            function a() {
                "console"in P && v.RU.forEach((function(t) {
                        t in P.console && (0,
                            S.hl)(P.console, t, (function(e) {
                                return function(...n) {
                                    o("console", {
                                        args: n,
                                        level: t
                                    }),
                                    e && e.apply(P.console, n)
                                }
                            }
                        ))
                    }
                ))
            }
            function c() {
                (0,
                    O.t$)() && (0,
                    S.hl)(P, "fetch", (function(t) {
                        return function(...e) {
                            const {method: n, url: r} = p(e)
                                , i = {
                                args: e,
                                fetchData: {
                                    method: n,
                                    url: r
                                },
                                startTimestamp: Date.now()
                            };
                            return o("fetch", B({}, i)),
                                t.apply(P, e).then((t=>(o("fetch", Y(B({}, i), {
                                    endTimestamp: Date.now(),
                                    response: t
                                })),
                                    t)), (t=>{
                                        throw o("fetch", Y(B({}, i), {
                                            endTimestamp: Date.now(),
                                            error: t
                                        })),
                                            t
                                    }
                                ))
                        }
                    }
                ))
            }
            function u(t, e) {
                return !!t && "object" == typeof t && !!t[e]
            }
            function l(t) {
                return "string" == typeof t ? t : t ? u(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
            }
            function p(t) {
                if (0 === t.length)
                    return {
                        method: "GET",
                        url: ""
                    };
                if (2 === t.length) {
                    const [e,n] = t;
                    return {
                        url: l(e),
                        method: u(n, "method") ? String(n.method).toUpperCase() : "GET"
                    }
                }
                const e = t[0];
                return {
                    url: l(e),
                    method: u(e, "method") ? String(e.method).toUpperCase() : "GET"
                }
            }
            function _() {
                if (!("XMLHttpRequest"in P))
                    return;
                const t = XMLHttpRequest.prototype;
                (0,
                    S.hl)(t, "open", (function(t) {
                        return function(...e) {
                            const n = e[1]
                                , r = this[I] = {
                                method: (0,
                                    b.HD)(e[0]) ? e[0].toUpperCase() : e[0],
                                url: e[1],
                                request_headers: {}
                            };
                            (0,
                                b.HD)(n) && "POST" === r.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                            const i = ()=>{
                                    const t = this[I];
                                    if (t && 4 === this.readyState) {
                                        try {
                                            t.status_code = this.status
                                        } catch (t) {}
                                        o("xhr", {
                                            args: e,
                                            endTimestamp: Date.now(),
                                            startTimestamp: Date.now(),
                                            xhr: this
                                        })
                                    }
                                }
                            ;
                            return "onreadystatechange"in this && "function" == typeof this.onreadystatechange ? (0,
                                S.hl)(this, "onreadystatechange", (function(t) {
                                    return function(...e) {
                                        return i(),
                                            t.apply(this, e)
                                    }
                                }
                            )) : this.addEventListener("readystatechange", i),
                                (0,
                                    S.hl)(this, "setRequestHeader", (function(t) {
                                        return function(...e) {
                                            const [n,r] = e
                                                , i = this[I];
                                            return i && (i.request_headers[n.toLowerCase()] = r),
                                                t.apply(this, e)
                                        }
                                    }
                                )),
                                t.apply(this, e)
                        }
                    }
                )),
                    (0,
                        S.hl)(t, "send", (function(t) {
                            return function(...e) {
                                const n = this[I];
                                return n && void 0 !== e[0] && (n.body = e[0]),
                                    o("xhr", {
                                        args: e,
                                        startTimestamp: Date.now(),
                                        xhr: this
                                    }),
                                    t.apply(this, e)
                            }
                        }
                    ))
            }
            function d() {
                function t(t) {
                    return function(...e) {
                        const n = e.length > 2 ? e[2] : void 0;
                        if (n) {
                            const t = A
                                , e = String(n);
                            A = e,
                                o("history", {
                                    from: t,
                                    to: e
                                })
                        }
                        return t.apply(this, e)
                    }
                }
                if (!r())
                    return;
                const e = P.onpopstate;
                P.onpopstate = function(...t) {
                    const n = P.location.href
                        , r = A;
                    if (A = n,
                        o("history", {
                            from: r,
                            to: n
                        }),
                        e)
                        try {
                            return e.apply(this, t)
                        } catch (t) {}
                }
                    ,
                    (0,
                        S.hl)(P.history, "pushState", t),
                    (0,
                        S.hl)(P.history, "replaceState", t)
            }
            function f(t, e) {
                if (!t || t.type !== e.type)
                    return !0;
                try {
                    if (t.target !== e.target)
                        return !0
                } catch (t) {}
                return !1
            }
            function h(t) {
                if ("keypress" !== t.type)
                    return !1;
                try {
                    const e = t.target;
                    if (!e || !e.tagName)
                        return !0;
                    if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable)
                        return !1
                } catch (t) {}
                return !0
            }
            function g(t, e=!1) {
                return n=>{
                    if (!n || q === n || h(n))
                        return;
                    const r = "keypress" === n.type ? "input" : n.type;
                    (void 0 === L || f(q, n)) && (t({
                        event: n,
                        name: r,
                        global: e
                    }),
                        q = n),
                        clearTimeout(L),
                        L = P.setTimeout((()=>{
                                L = void 0
                            }
                        ), M)
                }
            }
            function m() {
                if (!("document"in P))
                    return;
                const t = o.bind(null, "dom")
                    , e = g(t, !0);
                P.document.addEventListener("click", e, !1),
                    P.document.addEventListener("keypress", e, !1),
                    ["EventTarget", "Node"].forEach((e=>{
                            const n = P[e] && P[e].prototype;
                            !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || ((0,
                                S.hl)(n, "addEventListener", (function(e) {
                                    return function(n, r, i) {
                                        if ("click" === n || "keypress" == n)
                                            try {
                                                const r = this
                                                    , s = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}
                                                    , o = s[n] = s[n] || {
                                                    refCount: 0
                                                };
                                                if (!o.handler) {
                                                    const r = g(t);
                                                    o.handler = r,
                                                        e.call(this, n, r, i)
                                                }
                                                o.refCount++
                                            } catch (t) {}
                                        return e.call(this, n, r, i)
                                    }
                                }
                            )),
                                (0,
                                    S.hl)(n, "removeEventListener", (function(t) {
                                        return function(e, n, r) {
                                            if ("click" === e || "keypress" == e)
                                                try {
                                                    const n = this
                                                        , i = n.__sentry_instrumentation_handlers__ || {}
                                                        , s = i[e];
                                                    s && (s.refCount--,
                                                    s.refCount <= 0 && (t.call(this, e, s.handler, r),
                                                        s.handler = void 0,
                                                        delete i[e]),
                                                    0 === Object.keys(i).length && delete n.__sentry_instrumentation_handlers__)
                                                } catch (t) {}
                                            return t.call(this, e, n, r)
                                        }
                                    }
                                )))
                        }
                    ))
            }
            function y() {
                H = P.onerror,
                    P.onerror = function(t, e, n, r, i) {
                        return o("error", {
                            column: r,
                            error: i,
                            line: n,
                            msg: t,
                            url: e
                        }),
                        !(!H || H.__SENTRY_LOADER__) && H.apply(this, arguments)
                    }
                    ,
                    P.onerror.__SENTRY_INSTRUMENTED__ = !0
            }
            function E() {
                F = P.onunhandledrejection,
                    P.onunhandledrejection = function(t) {
                        return o("unhandledrejection", t),
                        !(F && !F.__SENTRY_LOADER__) || F.apply(this, arguments)
                    }
                    ,
                    P.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
            }
            n.d(e, {
                xU: function() {
                    return I
                },
                oq: function() {
                    return s
                }
            });
            var b = n(4353)
                , v = n(3342)
                , S = n(3813)
                , T = n(5142)
                , O = n(3040)
                , R = n(9733);
            const D = (0,
                R.Rf)();
            var w = Object.defineProperty
                , k = Object.defineProperties
                , N = Object.getOwnPropertyDescriptors
                , x = Object.getOwnPropertySymbols
                , j = Object.prototype.hasOwnProperty
                , U = Object.prototype.propertyIsEnumerable
                , G = (t,e,n)=>e in t ? w(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
                , B = (t,e)=>{
                for (var n in e || (e = {}))
                    j.call(e, n) && G(t, n, e[n]);
                if (x)
                    for (var n of x(e))
                        U.call(e, n) && G(t, n, e[n]);
                return t
            }
                , Y = (t,e)=>k(t, N(e));
            const P = (0,
                R.Rf)()
                , I = "__sentry_xhr_v2__"
                , $ = {}
                , C = {};
            let A;
            const M = 1e3;
            let L, q, H = null, F = null
        },
        4353: function(t, e, n) {
            function r(t) {
                switch (y.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return m(t, Error)
                }
            }
            function i(t, e) {
                return y.call(t) === `[object ${e}]`
            }
            function s(t) {
                return i(t, "ErrorEvent")
            }
            function o(t) {
                return i(t, "DOMError")
            }
            function a(t) {
                return i(t, "DOMException")
            }
            function c(t) {
                return i(t, "String")
            }
            function u(t) {
                return null === t || "object" != typeof t && "function" != typeof t
            }
            function l(t) {
                return i(t, "Object")
            }
            function p(t) {
                return "undefined" != typeof Event && m(t, Event)
            }
            function _(t) {
                return "undefined" != typeof Element && m(t, Element)
            }
            function d(t) {
                return i(t, "RegExp")
            }
            function f(t) {
                return !(!t || !t.then || "function" != typeof t.then)
            }
            function h(t) {
                return l(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
            }
            function g(t) {
                return "number" == typeof t && t != t
            }
            function m(t, e) {
                try {
                    return t instanceof e
                } catch (t) {
                    return !1
                }
            }
            n.d(e, {
                Cy: function() {
                    return h
                },
                HD: function() {
                    return c
                },
                J8: function() {
                    return f
                },
                Kj: function() {
                    return d
                },
                PO: function() {
                    return l
                },
                TX: function() {
                    return o
                },
                V9: function() {
                    return m
                },
                VW: function() {
                    return s
                },
                VZ: function() {
                    return r
                },
                cO: function() {
                    return p
                },
                fm: function() {
                    return a
                },
                i2: function() {
                    return g
                },
                kK: function() {
                    return _
                },
                pt: function() {
                    return u
                }
            });
            const y = Object.prototype.toString
        },
        3342: function(t, e, n) {
            function r(t) {
                if (!("console"in s.n2))
                    return t();
                const e = s.n2.console
                    , n = {};
                a.forEach((t=>{
                        const r = e[t] && e[t].__sentry_original__;
                        t in e && r && (n[t] = e[t],
                            e[t] = r)
                    }
                ));
                try {
                    return t()
                } finally {
                    Object.keys(n).forEach((t=>{
                            e[t] = n[t]
                        }
                    ))
                }
            }
            function i() {
                let t = !1;
                const e = {
                    enable: ()=>{
                        t = !0
                    }
                    ,
                    disable: ()=>{
                        t = !1
                    }
                };
                return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? a.forEach((n=>{
                        e[n] = (...e)=>{
                            t && r((()=>{
                                    s.n2.console[n](`${o}[${n}]:`, ...e)
                                }
                            ))
                        }
                    }
                )) : a.forEach((t=>{
                        e[t] = ()=>{}
                    }
                )),
                    e
            }
            n.d(e, {
                Cf: function() {
                    return r
                },
                RU: function() {
                    return a
                },
                kg: function() {
                    return c
                }
            });
            var s = n(9733);
            const o = "Sentry Logger "
                , a = ["debug", "info", "warn", "error", "log", "assert", "trace"];
            let c;
            c = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? (0,
                s.YO)("logger", i) : i()
        },
        7539: function(t, e, n) {
            function r() {
                const t = p.n2
                    , e = t.crypto || t.msCrypto;
                if (e && e.randomUUID)
                    return e.randomUUID().replace(/-/g, "");
                const n = e && e.getRandomValues ? ()=>e.getRandomValues(new Uint8Array(1))[0] : ()=>16 * Math.random();
                return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t=>(t ^ (15 & n()) >> t / 4).toString(16)))
            }
            function i(t) {
                return t.exception && t.exception.values ? t.exception.values[0] : void 0
            }
            function s(t) {
                const {message: e, event_id: n} = t;
                if (e)
                    return e;
                const r = i(t);
                return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
            }
            function o(t, e, n) {
                const r = t.exception = t.exception || {}
                    , i = r.values = r.values || []
                    , s = i[0] = i[0] || {};
                s.value || (s.value = e || ""),
                s.type || (s.type = n || "Error")
            }
            function a(t, e) {
                const n = i(t);
                if (!n)
                    return;
                const r = {
                    type: "generic",
                    handled: !0
                }
                    , s = n.mechanism;
                if (n.mechanism = m(m(m({}, r), s), e),
                e && "data"in e) {
                    const t = m(m({}, s && s.data), e.data);
                    n.mechanism.data = t
                }
            }
            function c(t) {
                if (t && t.__sentry_captured__)
                    return !0;
                try {
                    (0,
                        l.xp)(t, "__sentry_captured__", !0)
                } catch (t) {}
                return !1
            }
            function u(t) {
                return Array.isArray(t) ? t : [t]
            }
            n.d(e, {
                DM: function() {
                    return r
                },
                Db: function() {
                    return o
                },
                EG: function() {
                    return a
                },
                YO: function() {
                    return c
                },
                jH: function() {
                    return s
                },
                lE: function() {
                    return u
                }
            });
            var l = n(3813)
                , p = n(9733)
                , _ = Object.defineProperty
                , d = Object.getOwnPropertySymbols
                , f = Object.prototype.hasOwnProperty
                , h = Object.prototype.propertyIsEnumerable
                , g = (t,e,n)=>e in t ? _(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
                , m = (t,e)=>{
                for (var n in e || (e = {}))
                    f.call(e, n) && g(t, n, e[n]);
                if (d)
                    for (var n of d(e))
                        h.call(e, n) && g(t, n, e[n]);
                return t
            }
        },
        7108: function(t, e, n) {
            function r() {
                return !(0,
                    o.n)() && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
            }
            function i(t, e) {
                return t.require(e)
            }
            function s(e) {
                let n;
                try {
                    n = i(t, e)
                } catch (t) {}
                try {
                    const {cwd: r} = i(t, "process");
                    n = i(t, `${r()}/node_modules/${e}`)
                } catch (t) {}
                return n
            }
            n.d(e, {
                $y: function() {
                    return s
                },
                KV: function() {
                    return r
                },
                l$: function() {
                    return i
                }
            });
            var o = n(1041);
            t = n.hmd(t)
        },
        3813: function(t, e, n) {
            function r(t, e, n) {
                if (!(e in t))
                    return;
                const r = t[e]
                    , i = n(r);
                if ("function" == typeof i)
                    try {
                        s(i, r)
                    } catch (t) {}
                t[e] = i
            }
            function i(t, e, n) {
                Object.defineProperty(t, e, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            }
            function s(t, e) {
                const n = e.prototype || {};
                t.prototype = e.prototype = n,
                    i(t, "__sentry_original__", e)
            }
            function o(t) {
                return t.__sentry_original__
            }
            function a(t) {
                return Object.keys(t).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&")
            }
            function c(t) {
                if ((0,
                    h.VZ)(t))
                    return S({
                        message: t.message,
                        name: t.name,
                        stack: t.stack
                    }, l(t));
                if ((0,
                    h.cO)(t)) {
                    const e = S({
                        type: t.type,
                        target: u(t.target),
                        currentTarget: u(t.currentTarget)
                    }, l(t));
                    return "undefined" != typeof CustomEvent && (0,
                        h.V9)(t, CustomEvent) && (e.detail = t.detail),
                        e
                }
                return t
            }
            function u(t) {
                try {
                    return (0,
                        h.kK)(t) ? (0,
                        f.Rt)(t) : Object.prototype.toString.call(t)
                } catch (t) {
                    return "<unknown>"
                }
            }
            function l(t) {
                if ("object" == typeof t && null !== t) {
                    const e = {};
                    for (const n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }
                return {}
            }
            function p(t, e=40) {
                const n = Object.keys(c(t));
                if (n.sort(),
                    !n.length)
                    return "[object has no keys]";
                if (n[0].length >= e)
                    return (0,
                        g.$G)(n[0], e);
                for (let t = n.length; t > 0; t--) {
                    const r = n.slice(0, t).join(", ");
                    if (!(r.length > e))
                        return t === n.length ? r : (0,
                            g.$G)(r, e)
                }
                return ""
            }
            function _(t) {
                return d(t, new Map)
            }
            function d(t, e) {
                if ((0,
                    h.PO)(t)) {
                    const n = e.get(t);
                    if (void 0 !== n)
                        return n;
                    const r = {};
                    e.set(t, r);
                    for (const n of Object.keys(t))
                        void 0 !== t[n] && (r[n] = d(t[n], e));
                    return r
                }
                if (Array.isArray(t)) {
                    const n = e.get(t);
                    if (void 0 !== n)
                        return n;
                    const r = [];
                    return e.set(t, r),
                        t.forEach((t=>{
                                r.push(d(t, e))
                            }
                        )),
                        r
                }
                return t
            }
            n.d(e, {
                $Q: function() {
                    return s
                },
                HK: function() {
                    return o
                },
                Jr: function() {
                    return _
                },
                Sh: function() {
                    return c
                },
                _j: function() {
                    return a
                },
                hl: function() {
                    return r
                },
                xp: function() {
                    return i
                },
                zf: function() {
                    return p
                }
            });
            var f = n(4087)
                , h = n(4353)
                , g = n(2150)
                , m = Object.defineProperty
                , y = Object.getOwnPropertySymbols
                , E = Object.prototype.hasOwnProperty
                , b = Object.prototype.propertyIsEnumerable
                , v = (t,e,n)=>e in t ? m(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
                , S = (t,e)=>{
                for (var n in e || (e = {}))
                    E.call(e, n) && v(t, n, e[n]);
                if (y)
                    for (var n of y(e))
                        b.call(e, n) && v(t, n, e[n]);
                return t
            }
        },
        5142: function(t, e, n) {
            function r(...t) {
                const e = t.sort(((t,e)=>t[0] - e[0])).map((t=>t[1]));
                return (t,n=0)=>{
                    const r = []
                        , i = t.split("\n");
                    for (let t = n; t < i.length; t++) {
                        const n = i[t];
                        if (n.length > 1024)
                            continue;
                        const s = m.test(n) ? n.replace(m, "$1") : n;
                        if (!s.match(/\S*Error: /)) {
                            for (const t of e) {
                                const e = t(s);
                                if (e) {
                                    r.push(e);
                                    break
                                }
                            }
                            if (r.length >= g)
                                break
                        }
                    }
                    return s(r)
                }
            }
            function i(t) {
                return Array.isArray(t) ? r(...t) : t
            }
            function s(t) {
                if (!t.length)
                    return [];
                const e = t.slice(0, g)
                    , n = e[e.length - 1].function;
                n && /sentryWrapped/.test(n) && e.pop(),
                    e.reverse();
                const r = e[e.length - 1].function;
                return r && /captureMessage|captureException/.test(r) && e.pop(),
                    e.map((t=>h(f({}, t), {
                        filename: t.filename || e[e.length - 1].filename,
                        function: t.function || "?"
                    })))
            }
            function o(t) {
                try {
                    return t && "function" == typeof t && t.name || y
                } catch (t) {
                    return y
                }
            }
            n.d(e, {
                $P: function() {
                    return o
                },
                Sq: function() {
                    return i
                },
                pE: function() {
                    return r
                }
            });
            var a = Object.defineProperty
                , c = Object.defineProperties
                , u = Object.getOwnPropertyDescriptors
                , l = Object.getOwnPropertySymbols
                , p = Object.prototype.hasOwnProperty
                , _ = Object.prototype.propertyIsEnumerable
                , d = (t,e,n)=>e in t ? a(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
                , f = (t,e)=>{
                for (var n in e || (e = {}))
                    p.call(e, n) && d(t, n, e[n]);
                if (l)
                    for (var n of l(e))
                        _.call(e, n) && d(t, n, e[n]);
                return t
            }
                , h = (t,e)=>c(t, u(e));
            const g = 50
                , m = /\(error: (.*)\)/
                , y = "<anonymous>"
        },
        2150: function(t, e, n) {
            function r(t, e=0) {
                return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0, e)}...`
            }
            function i(t, e) {
                if (!Array.isArray(t))
                    return "";
                const n = [];
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    try {
                        n.push(String(r))
                    } catch (t) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(e)
            }
            function s(t, e, n=!1) {
                return !!(0,
                    a.HD)(t) && ((0,
                    a.Kj)(e) ? e.test(t) : !!(0,
                    a.HD)(e) && (n ? t === e : t.includes(e)))
            }
            function o(t, e=[], n=!1) {
                return e.some((e=>s(t, e, n)))
            }
            n.d(e, {
                $G: function() {
                    return r
                },
                U0: function() {
                    return o
                },
                nK: function() {
                    return i
                }
            });
            var a = n(4353)
        },
        3040: function(t, e, n) {
            function r() {
                if (!("fetch"in a))
                    return !1;
                try {
                    return new Headers,
                        new Request("http://www.example.com"),
                        new Response,
                        !0
                } catch (t) {
                    return !1
                }
            }
            function i(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }
            function s() {
                if (!r())
                    return !1;
                if (i(a.fetch))
                    return !0;
                let t = !1;
                const e = a.document;
                if (e && "function" == typeof e.createElement)
                    try {
                        const n = e.createElement("iframe");
                        n.hidden = !0,
                            e.head.appendChild(n),
                        n.contentWindow && n.contentWindow.fetch && (t = i(n.contentWindow.fetch)),
                            e.head.removeChild(n)
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                    }
                return t
            }
            n.d(e, {
                Ak: function() {
                    return r
                },
                Du: function() {
                    return i
                },
                t$: function() {
                    return s
                }
            });
            var o = n(3342);
            const a = (0,
                n(9733).Rf)()
        },
        4295: function(t, e, n) {
            function r(t) {
                return new a((e=>{
                        e(t)
                    }
                ))
            }
            function i(t) {
                return new a(((e,n)=>{
                        n(t)
                    }
                ))
            }
            n.d(e, {
                $2: function() {
                    return i
                },
                WD: function() {
                    return r
                },
                cW: function() {
                    return a
                }
            });
            var s, o = n(4353);
            !function(t) {
                t[t.PENDING = 0] = "PENDING";
                const e = 1;
                t[t.RESOLVED = e] = "RESOLVED";
                const n = 2;
                t[t.REJECTED = n] = "REJECTED"
            }(s || (s = {}));
            class a {
                __init() {
                    this._state = s.PENDING
                }
                __init2() {
                    this._handlers = []
                }
                constructor(t) {
                    a.prototype.__init.call(this),
                        a.prototype.__init2.call(this),
                        a.prototype.__init3.call(this),
                        a.prototype.__init4.call(this),
                        a.prototype.__init5.call(this),
                        a.prototype.__init6.call(this);
                    try {
                        t(this._resolve, this._reject)
                    } catch (t) {
                        this._reject(t)
                    }
                }
                then(t, e) {
                    return new a(((n,r)=>{
                            this._handlers.push([!1, e=>{
                                if (t)
                                    try {
                                        n(t(e))
                                    } catch (t) {
                                        r(t)
                                    }
                                else
                                    n(e)
                            }
                                , t=>{
                                    if (e)
                                        try {
                                            n(e(t))
                                        } catch (t) {
                                            r(t)
                                        }
                                    else
                                        r(t)
                                }
                            ]),
                                this._executeHandlers()
                        }
                    ))
                }
                catch(t) {
                    return this.then((t=>t), t)
                }
                finally(t) {
                    return new a(((e,n)=>{
                            let r, i;
                            return this.then((e=>{
                                    i = !1,
                                        r = e,
                                    t && t()
                                }
                            ), (e=>{
                                    i = !0,
                                        r = e,
                                    t && t()
                                }
                            )).then((()=>{
                                    i ? n(r) : e(r)
                                }
                            ))
                        }
                    ))
                }
                __init3() {
                    this._resolve = t=>{
                        this._setResult(s.RESOLVED, t)
                    }
                }
                __init4() {
                    this._reject = t=>{
                        this._setResult(s.REJECTED, t)
                    }
                }
                __init5() {
                    this._setResult = (t,e)=>{
                        if (this._state === s.PENDING) {
                            if ((0,
                                o.J8)(e))
                                return void e.then(this._resolve, this._reject);
                            this._state = t,
                                this._value = e,
                                this._executeHandlers()
                        }
                    }
                }
                __init6() {
                    this._executeHandlers = ()=>{
                        if (this._state === s.PENDING)
                            return;
                        const t = this._handlers.slice();
                        this._handlers = [],
                            t.forEach((t=>{
                                    t[0] || (this._state === s.RESOLVED && t[1](this._value),
                                    this._state === s.REJECTED && t[2](this._value),
                                        t[0] = !0)
                                }
                            ))
                    }
                }
            }
        },
        408: function(t, e, n) {
            function r() {
                const {performance: t} = a;
                if (!t || !t.now)
                    return;
                return {
                    now: ()=>t.now(),
                    timeOrigin: Date.now() - t.now()
                }
            }
            function i() {
                try {
                    return (0,
                        s.l$)(t, "perf_hooks").performance
                } catch (t) {
                    return
                }
            }
            n.d(e, {
                Z1: function() {
                    return f
                },
                ph: function() {
                    return _
                },
                yW: function() {
                    return p
                }
            });
            var s = n(7108)
                , o = n(9733);
            t = n.hmd(t);
            const a = (0,
                o.Rf)()
                , c = {
                nowSeconds: ()=>Date.now() / 1e3
            }
                , u = (0,
                s.KV)() ? i() : r()
                , l = void 0 === u ? c : {
                nowSeconds: ()=>(u.timeOrigin + u.now()) / 1e3
            }
                , p = c.nowSeconds.bind(c)
                , _ = l.nowSeconds.bind(l);
            let d;
            const f = (()=>{
                    const {performance: t} = a;
                    if (!t || !t.now)
                        return void (d = "none");
                    const e = 36e5
                        , n = t.now()
                        , r = Date.now()
                        , i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e
                        , s = i < e
                        , o = t.timing && t.timing.navigationStart
                        , c = "number" == typeof o ? Math.abs(o + n - r) : e;
                    return s || c < e ? i <= c ? (d = "timeOrigin",
                        t.timeOrigin) : (d = "navigationStart",
                        o) : (d = "dateNow",
                        r)
                }
            )()
        },
        9733: function(t, e, n) {
            function r(t) {
                return t && t.Math == Math ? t : void 0
            }
            function i() {
                return o
            }
            function s(t, e, n) {
                const r = n || o
                    , i = r.__SENTRY__ = r.__SENTRY__ || {};
                return i[t] || (i[t] = e())
            }
            n.d(e, {
                Rf: function() {
                    return i
                },
                YO: function() {
                    return s
                },
                n2: function() {
                    return o
                }
            });
            const o = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {}
        }
    }
        , n = {};
    t.d = function(e, n) {
        for (var r in n)
            t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: n[r]
            })
    }
        ,
        t.g = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        t.hmd = function(t) {
            return (t = Object.create(t)).children || (t.children = []),
                Object.defineProperty(t, "exports", {
                    enumerable: !0,
                    set: function() {
                        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
                    }
                }),
                t
        }
        ,
        t.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
    ;
    !function() {
        function e(t={}, e={}) {
            return {
                allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : ln],
                ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : pn],
                ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
            }
        }
        function n(t, e) {
            return e.ignoreInternal && c(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,
                cn.jH)(t)}`),
                !0) : r(t, e.ignoreErrors) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,
                cn.jH)(t)}`),
                !0) : i(t, e.ignoreTransactions) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,
                cn.jH)(t)}`),
                !0) : s(t, e.denyUrls) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,
                cn.jH)(t)}.\nUrl: ${l(t)}`),
                !0) : !o(t, e.allowUrls) && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,
                cn.jH)(t)}.\nUrl: ${l(t)}`),
                !0)
        }
        function r(t, e) {
            return !(t.type || !e || !e.length) && a(t).some((t=>(0,
                un.U0)(t, e)))
        }
        function i(t, e) {
            if ("transaction" !== t.type || !e || !e.length)
                return !1;
            const n = t.transaction;
            return !!n && (0,
                un.U0)(n, e)
        }
        function s(t, e) {
            if (!e || !e.length)
                return !1;
            const n = l(t);
            return !!n && (0,
                un.U0)(n, e)
        }
        function o(t, e) {
            if (!e || !e.length)
                return !0;
            const n = l(t);
            return !n || (0,
                un.U0)(n, e)
        }
        function a(t) {
            if (t.message)
                return [t.message];
            if (t.exception) {
                const {values: e} = t.exception;
                try {
                    const {type: t="", value: n=""} = e && e[e.length - 1] || {};
                    return [`${n}`, `${t}: ${n}`]
                } catch (e) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error(`Cannot extract message for event ${(0,
                        cn.jH)(t)}`),
                        []
                }
            }
            return []
        }
        function c(t) {
            try {
                return "SentryError" === t.exception.values[0].type
            } catch (t) {}
            return !1
        }
        function u(t=[]) {
            for (let e = t.length - 1; e >= 0; e--) {
                const n = t[e];
                if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                    return n.filename || null
            }
            return null
        }
        function l(t) {
            try {
                let e;
                try {
                    e = t.exception.values[0].stacktrace.frames
                } catch (t) {}
                return e ? u(e) : null
            } catch (e) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error(`Cannot extract url for event ${(0,
                    cn.jH)(t)}`),
                    null
            }
        }
        function p(t) {
            const e = {};
            return t.forEach((t=>{
                    const {name: n} = t
                        , r = e[n];
                    r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
                }
            )),
                Object.keys(e).map((t=>e[t]))
        }
        function _(t) {
            const e = t.defaultIntegrations || []
                , n = t.integrations;
            let r;
            e.forEach((t=>{
                    t.isDefaultInstance = !0
                }
            )),
                r = Array.isArray(n) ? [...e, ...n] : "function" == typeof n ? (0,
                    cn.lE)(n(e)) : e;
            const i = p(r)
                , s = h(i, (t=>"Debug" === t.name));
            if (-1 !== s) {
                const [t] = i.splice(s, 1);
                i.push(t)
            }
            return i
        }
        function d(t) {
            const e = {};
            return t.forEach((t=>{
                    t && f(t, e)
                }
            )),
                e
        }
        function f(t, e) {
            e[t.name] = t,
            -1 === yn.indexOf(t.name) && (t.setupOnce(mn.c, gn.Gd),
                yn.push(t.name),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(`Integration installed: ${t.name}`))
        }
        function h(t, e) {
            for (let n = 0; n < t.length; n++)
                if (!0 === e(t[n]))
                    return n;
            return -1
        }
        function g(t, e) {
            !0 === e.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? an.kg.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
            const n = (0,
                gn.Gd)();
            n.getScope().update(e.initialScope);
            const r = new t(e);
            n.bindClient(r)
        }
        function m(t) {
            return "http" === t || "https" === t
        }
        function y(t, e=!1) {
            const {host: n, path: r, pass: i, port: s, projectId: o, protocol: a, publicKey: c} = t;
            return `${a}://${c}${e && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`
        }
        function E(t) {
            const e = Sn.exec(t);
            if (!e)
                return void console.error(`Invalid Sentry Dsn: ${t}`);
            const [n,r,i="",s,o="",a] = e.slice(1);
            let c = ""
                , u = a;
            const l = u.split("/");
            if (l.length > 1 && (c = l.slice(0, -1).join("/"),
                u = l.pop()),
                u) {
                const t = u.match(/^\d+/);
                t && (u = t[0])
            }
            return b({
                host: s,
                pass: i,
                path: c,
                projectId: u,
                port: o,
                protocol: n,
                publicKey: r
            })
        }
        function b(t) {
            return {
                protocol: t.protocol,
                publicKey: t.publicKey || "",
                pass: t.pass || "",
                host: t.host,
                port: t.port || "",
                path: t.path || "",
                projectId: t.projectId
            }
        }
        function v(t) {
            if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__)
                return !0;
            const {port: e, projectId: n, protocol: r} = t;
            return !["protocol", "publicKey", "host", "projectId"].find((e=>!t[e] && (an.kg.error(`Invalid Sentry Dsn: ${e} missing`),
                !0))) && (n.match(/^\d+$/) ? m(r) ? !e || !isNaN(parseInt(e, 10)) || (an.kg.error(`Invalid Sentry Dsn: Invalid port ${e}`),
                !1) : (an.kg.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
                !1) : (an.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                !1))
        }
        function S(t) {
            const e = "string" == typeof t ? E(t) : b(t);
            if (e && v(e))
                return e
        }
        function T() {
            function t(t) {
                if (n)
                    return !!r.has(t) || (r.add(t),
                        !1);
                for (let e = 0; e < r.length; e++)
                    if (r[e] === t)
                        return !0;
                return r.push(t),
                    !1
            }
            function e(t) {
                if (n)
                    r.delete(t);
                else
                    for (let e = 0; e < r.length; e++)
                        if (r[e] === t) {
                            r.splice(e, 1);
                            break
                        }
            }
            const n = "function" == typeof WeakSet
                , r = n ? new WeakSet : [];
            return [t, e]
        }
        function O(t, e=100, n=1 / 0) {
            try {
                return D("", t, e, n)
            } catch (t) {
                return {
                    ERROR: `**non-serializable** (${t})`
                }
            }
        }
        function R(t, e=3, n=102400) {
            const r = O(t, e);
            return x(r) > n ? R(t, e - 1, n) : r
        }
        function D(t, e, n=1 / 0, r=1 / 0, i=T()) {
            const [s,o] = i;
            if (null == e || ["number", "boolean", "string"].includes(typeof e) && !(0,
                Tn.i2)(e))
                return e;
            const a = w(t, e);
            if (!a.startsWith("[object "))
                return a;
            if (e.__sentry_skip_normalization__)
                return e;
            const c = "number" == typeof e.__sentry_override_normalization_depth__ ? e.__sentry_override_normalization_depth__ : n;
            if (0 === c)
                return a.replace("object ", "");
            if (s(e))
                return "[Circular ~]";
            const u = e;
            if (u && "function" == typeof u.toJSON)
                try {
                    return D("", u.toJSON(), c - 1, r, i)
                } catch (t) {}
            const l = Array.isArray(e) ? [] : {};
            let p = 0;
            const _ = (0,
                dn.Sh)(e);
            for (const t in _) {
                if (!Object.prototype.hasOwnProperty.call(_, t))
                    continue;
                if (p >= r) {
                    l[t] = "[MaxProperties ~]";
                    break
                }
                const e = _[t];
                l[t] = D(t, e, c - 1, r, i),
                    p++
            }
            return o(e),
                l
        }
        function w(e, n) {
            try {
                if ("domain" === e && n && "object" == typeof n && n._events)
                    return "[Domain]";
                if ("domainEmitter" === e)
                    return "[DomainEmitter]";
                if (void 0 !== t.g && n === t.g)
                    return "[Global]";
                if ("undefined" != typeof window && n === window)
                    return "[Window]";
                if ("undefined" != typeof document && n === document)
                    return "[Document]";
                if ((0,
                    Tn.Cy)(n))
                    return "[SyntheticEvent]";
                if ("number" == typeof n && n != n)
                    return "[NaN]";
                if ("function" == typeof n)
                    return `[Function: ${(0,
                        En.$P)(n)}]`;
                if ("symbol" == typeof n)
                    return `[${String(n)}]`;
                if ("bigint" == typeof n)
                    return `[BigInt: ${String(n)}]`;
                const r = k(n);
                return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
            } catch (t) {
                return `**non-serializable** (${t})`
            }
        }
        function k(t) {
            const e = Object.getPrototypeOf(t);
            return e ? e.constructor.name : "null prototype"
        }
        function N(t) {
            return ~-encodeURI(t).split(/%..|./).length
        }
        function x(t) {
            return N(JSON.stringify(t))
        }
        function j(t, e=[]) {
            return [t, e]
        }
        function U(t, e) {
            const [n,r] = t;
            return [n, [...r, e]]
        }
        function G(t, e) {
            const n = t[1];
            for (const t of n) {
                if (e(t, t[0].type))
                    return !0
            }
            return !1
        }
        function B(t, e) {
            return (e || new TextEncoder).encode(t)
        }
        function Y(t, e) {
            function n(t) {
                "string" == typeof s ? s = "string" == typeof t ? s + t : [B(s, e), t] : s.push("string" == typeof t ? B(t, e) : t)
            }
            const [r,i] = t;
            let s = JSON.stringify(r);
            for (const t of i) {
                const [e,r] = t;
                if (n(`\n${JSON.stringify(e)}\n`),
                "string" == typeof r || r instanceof Uint8Array)
                    n(r);
                else {
                    let t;
                    try {
                        t = JSON.stringify(r)
                    } catch (e) {
                        t = JSON.stringify(O(r))
                    }
                    n(t)
                }
            }
            return "string" == typeof s ? s : P(s)
        }
        function P(t) {
            const e = t.reduce(((t,e)=>t + e.length), 0)
                , n = new Uint8Array(e);
            let r = 0;
            for (const e of t)
                n.set(e, r),
                    r += e.length;
            return n
        }
        function I(t, e) {
            const n = "string" == typeof t.data ? B(t.data, e) : t.data;
            return [(0,
                dn.Jr)({
                type: "attachment",
                length: n.length,
                filename: t.filename,
                content_type: t.contentType,
                attachment_type: t.attachmentType
            }), n]
        }
        function $(t) {
            return jn[t]
        }
        function C(t) {
            if (!t || !t.sdk)
                return;
            const {name: e, version: n} = t.sdk;
            return {
                name: e,
                version: n
            }
        }
        function A(t, e, n, r) {
            const i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
            return xn(xn(xn({
                event_id: t.event_id,
                sent_at: (new Date).toISOString()
            }, e && {
                sdk: e
            }), !!n && {
                dsn: y(r)
            }), i && {
                trace: (0,
                    dn.Jr)(xn({}, i))
            })
        }
        function M(t) {
            const e = t.protocol ? `${t.protocol}:` : ""
                , n = t.port ? `:${t.port}` : "";
            return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`
        }
        function L(t) {
            return `${M(t)}${t.projectId}/envelope/`
        }
        function q(t, e) {
            return (0,
                dn._j)($n({
                sentry_key: t.publicKey,
                sentry_version: Cn
            }, e && {
                sentry_client: `${e.name}/${e.version}`
            }))
        }
        function H(t, e={}) {
            const n = "string" == typeof e ? e : e.tunnel
                , r = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
            return n || `${L(t)}?${q(t, r)}`
        }
        function F(t, e) {
            return e && (t.sdk = t.sdk || {},
                t.sdk.name = t.sdk.name || e.name,
                t.sdk.version = t.sdk.version || e.version,
                t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []],
                t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]),
                t
        }
        function W(t, e, n, r) {
            const i = C(n);
            return j(Fn(Fn({
                sent_at: (new Date).toISOString()
            }, i && {
                sdk: i
            }), !!r && {
                dsn: y(e)
            }), ["aggregates"in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t.toJSON()]])
        }
        function J(t, e, n, r) {
            const i = C(n)
                , s = t.type && "replay_event" !== t.type ? t.type : "event";
            F(t, n && n.sdk);
            const o = A(t, i, r, e);
            return delete t.sdkProcessingMetadata,
                j(o, [[{
                    type: s
                }, t]])
        }
        function z(t, e, n, r) {
            const {normalizeDepth: i=3, normalizeMaxBreadth: s=1e3} = t
                , o = ir(rr({}, e), {
                event_id: e.event_id || n.event_id || (0,
                    cn.DM)(),
                timestamp: e.timestamp || (0,
                    Jn.yW)()
            })
                , a = n.integrations || t.integrations.map((t=>t.name));
            K(o, t),
                X(o, a),
            void 0 === e.type && V(o, t.stackParser);
            let c = r;
            n.captureContext && (c = mn.s.clone(c).update(n.captureContext));
            let u = (0,
                On.WD)(o);
            if (c) {
                if (c.getAttachments) {
                    const t = [...n.attachments || [], ...c.getAttachments()];
                    t.length && (n.attachments = t)
                }
                u = c.applyToEvent(o, n)
            }
            return u.then((t=>"number" == typeof i && i > 0 ? Z(t, i, s) : t))
        }
        function K(t, e) {
            const {environment: n, release: r, dist: i, maxValueLength: s=250} = e;
            "environment"in t || (t.environment = "environment"in e ? n : Kn.J),
            void 0 === t.release && void 0 !== r && (t.release = r),
            void 0 === t.dist && void 0 !== i && (t.dist = i),
            t.message && (t.message = (0,
                un.$G)(t.message, s));
            const o = t.exception && t.exception.values && t.exception.values[0];
            o && o.value && (o.value = (0,
                un.$G)(o.value, s));
            const a = t.request;
            a && a.url && (a.url = (0,
                un.$G)(a.url, s))
        }
        function V(t, e) {
            const n = zn.n2._sentryDebugIds;
            if (!n)
                return;
            let r;
            const i = sr.get(e);
            i ? r = i : (r = new Map,
                sr.set(e, r));
            const s = Object.keys(n).reduce(((t,i)=>{
                    let s;
                    const o = r.get(i);
                    o ? s = o : (s = e(i),
                        r.set(i, s));
                    for (let e = s.length - 1; e >= 0; e--) {
                        const r = s[e];
                        if (r.filename) {
                            t[r.filename] = n[i];
                            break
                        }
                    }
                    return t
                }
            ), {})
                , o = new Set;
            try {
                t.exception.values.forEach((t=>{
                        t.stacktrace.frames.forEach((t=>{
                                t.filename && o.add(t.filename)
                            }
                        ))
                    }
                ))
            } catch (t) {}
            t.debug_meta = t.debug_meta || {},
                t.debug_meta.images = t.debug_meta.images || [];
            const a = t.debug_meta.images;
            o.forEach((t=>{
                    s[t] && a.push({
                        type: "sourcemap",
                        code_file: t,
                        debug_id: s[t]
                    })
                }
            ))
        }
        function X(t, e) {
            e.length > 0 && (t.sdk = t.sdk || {},
                t.sdk.integrations = [...t.sdk.integrations || [], ...e])
        }
        function Z(t, e, n) {
            if (!t)
                return null;
            const r = rr(rr(rr(rr(rr({}, t), t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map((t=>rr(rr({}, t), t.data && {
                    data: O(t.data, e, n)
                })))
            }), t.user && {
                user: O(t.user, e, n)
            }), t.contexts && {
                contexts: O(t.contexts, e, n)
            }), t.extra && {
                extra: O(t.extra, e, n)
            });
            return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace,
            t.contexts.trace.data && (r.contexts.trace.data = O(t.contexts.trace.data, e, n))),
            t.spans && (r.spans = t.spans.map((t=>(t.data && (t.data = O(t.data, e, n)),
                t)))),
                r
        }
        function Q(t, e) {
            const n = `${e} must return \`null\` or a valid event.`;
            if ((0,
                Tn.J8)(t))
                return t.then((t=>{
                        if (!(0,
                            Tn.PO)(t) && null !== t)
                            throw new Un(n);
                        return t
                    }
                ), (t=>{
                        throw new Un(`${e} rejected with ${t}`)
                    }
                ));
            if (!(0,
                Tn.PO)(t) && null !== t)
                throw new Un(n);
            return t
        }
        function tt(t, e, n) {
            const {beforeSend: r, beforeSendTransaction: i} = t;
            return et(e) && r ? r(e, n) : nt(e) && i ? i(e, n) : e
        }
        function et(t) {
            return void 0 === t.type
        }
        function nt(t) {
            return "transaction" === t.type
        }
        function rt(t, e, n) {
            return j(e ? {
                dsn: e
            } : {}, [[{
                type: "client_report"
            }, {
                timestamp: n || (0,
                    Jn.yW)(),
                discarded_events: t
            }]])
        }
        function it(t, e) {
            const n = at(t, e)
                , r = {
                type: e && e.name,
                value: ut(e)
            };
            return n.length && (r.stacktrace = {
                frames: n
            }),
            void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
                r
        }
        function st(t, e, n, r) {
            const i = (0,
                gn.Gd)().getClient()
                , s = i && i.getOptions().normalizeDepth
                , o = {
                exception: {
                    values: [{
                        type: (0,
                            Tn.cO)(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: `Non-Error ${r ? "promise rejection" : "exception"} captured with keys: ${(0,
                            dn.zf)(e)}`
                    }]
                },
                extra: {
                    __serialized__: R(e, s)
                }
            };
            if (n) {
                const e = at(t, n);
                e.length && (o.exception.values[0].stacktrace = {
                    frames: e
                })
            }
            return o
        }
        function ot(t, e) {
            return {
                exception: {
                    values: [it(t, e)]
                }
            }
        }
        function at(t, e) {
            const n = e.stacktrace || e.stack || ""
                , r = ct(e);
            try {
                return t(n, r)
            } catch (t) {}
            return []
        }
        function ct(t) {
            if (t) {
                if ("number" == typeof t.framesToPop)
                    return t.framesToPop;
                if (kr.test(t.message))
                    return 1
            }
            return 0
        }
        function ut(t) {
            const e = t && t.message;
            return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
        }
        function lt(t, e, n, r) {
            const i = _t(t, e, n && n.syntheticException || void 0, r);
            return (0,
                cn.EG)(i),
                i.level = "error",
            n && n.event_id && (i.event_id = n.event_id),
                (0,
                    On.WD)(i)
        }
        function pt(t, e, n="info", r, i) {
            const s = dt(t, e, r && r.syntheticException || void 0, i);
            return s.level = n,
            r && r.event_id && (s.event_id = r.event_id),
                (0,
                    On.WD)(s)
        }
        function _t(t, e, n, r, i) {
            let s;
            if ((0,
                Tn.VW)(e) && e.error)
                return ot(t, e.error);
            if ((0,
                Tn.TX)(e) || (0,
                Tn.fm)(e)) {
                const i = e;
                if ("stack"in e)
                    s = ot(t, e);
                else {
                    const e = i.name || ((0,
                        Tn.TX)(i) ? "DOMError" : "DOMException")
                        , o = i.message ? `${e}: ${i.message}` : e;
                    s = dt(t, o, n, r),
                        (0,
                            cn.Db)(s, o)
                }
                return "code"in i && (s.tags = wr(Dr({}, s.tags), {
                    "DOMException.code": `${i.code}`
                })),
                    s
            }
            return (0,
                Tn.VZ)(e) ? ot(t, e) : (0,
                Tn.PO)(e) || (0,
                Tn.cO)(e) ? (s = st(t, e, n, i),
                (0,
                    cn.EG)(s, {
                    synthetic: !0
                }),
                s) : (s = dt(t, e, n, r),
                (0,
                    cn.Db)(s, `${e}`, void 0),
                (0,
                    cn.EG)(s, {
                    synthetic: !0
                }),
                s)
        }
        function dt(t, e, n, r) {
            const i = {
                message: e
            };
            if (r && n) {
                const r = at(t, n);
                r.length && (i.exception = {
                    values: [{
                        value: e,
                        stacktrace: {
                            frames: r
                        }
                    }]
                })
            }
            return i
        }
        function ft(t, e) {
            return (0,
                gn.Gd)().captureException(t, {
                captureContext: e
            })
        }
        function ht(t) {
            (0,
                gn.Gd)().withScope(t)
        }
        function gt() {
            return Cr > 0
        }
        function mt() {
            Cr++,
                setTimeout((()=>{
                        Cr--
                    }
                ))
        }
        function yt(t, e={}, n) {
            if ("function" != typeof t)
                return t;
            try {
                const e = t.__sentry_wrapped__;
                if (e)
                    return e;
                if ((0,
                    dn.HK)(t))
                    return t
            } catch (e) {
                return t
            }
            const r = function() {
                const r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    const i = r.map((t=>yt(t, e)));
                    return t.apply(this, i)
                } catch (t) {
                    throw mt(),
                        ht((n=>{
                                n.addEventProcessor((t=>(e.mechanism && ((0,
                                    cn.Db)(t, void 0, void 0),
                                    (0,
                                        cn.EG)(t, e.mechanism)),
                                    t.extra = Ir(Pr({}, t.extra), {
                                        arguments: r
                                    }),
                                    t))),
                                    ft(t)
                            }
                        )),
                        t
                }
            };
            try {
                for (const e in t)
                    Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e])
            } catch (t) {}
            (0,
                dn.$Q)(r, t),
                (0,
                    dn.xp)(t, "__sentry_wrapped__", r);
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                    get: ()=>t.name
                })
            } catch (t) {}
            return r
        }
        function Et(t) {
            return "warn" === t ? "warning" : Mr.includes(t) ? t : "log"
        }
        function bt(t) {
            if (!t)
                return {};
            const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e)
                return {};
            const n = e[6] || ""
                , r = e[8] || "";
            return {
                host: e[4],
                path: e[5],
                protocol: e[2],
                search: n,
                hash: r,
                relative: e[5] + n + r
            }
        }
        function vt(t) {
            return t.split(/[\?#]/, 1)[0]
        }
        function St(t) {
            return t.split(/\\?\//).filter((t=>t.length > 0 && "," !== t)).length
        }
        function Tt(t) {
            function e(e) {
                let n, r = "object" == typeof t ? t.serializeAttribute : void 0, i = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                i && i > Xr && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`\`dom.maxStringLength\` cannot exceed ${Xr}, but a value of ${i} was configured. Sentry will use ${Xr} instead.`),
                    i = Xr),
                "string" == typeof r && (r = [r]);
                try {
                    const t = e.event;
                    n = kt(t) ? (0,
                        Ar.Rt)(t.target, {
                        keyAttrs: r,
                        maxStringLength: i
                    }) : (0,
                        Ar.Rt)(t, {
                        keyAttrs: r,
                        maxStringLength: i
                    })
                } catch (t) {
                    n = "<unknown>"
                }
                0 !== n.length && (0,
                    gn.Gd)().addBreadcrumb({
                    category: `ui.${e.name}`,
                    message: n
                }, {
                    event: e.event,
                    name: e.name,
                    global: e.global
                })
            }
            return e
        }
        function Ot(t) {
            for (let e = 0; e < t.args.length; e++)
                if ("ref=Ref<" === t.args[e]) {
                    t.args[e + 1] = "viewRef";
                    break
                }
            const e = {
                category: "console",
                data: {
                    arguments: t.args,
                    logger: "console"
                },
                level: Et(t.level),
                message: (0,
                    un.nK)(t.args, " ")
            };
            if ("assert" === t.level) {
                if (!1 !== t.args[0])
                    return;
                e.message = `Assertion failed: ${(0,
                    un.nK)(t.args.slice(1), " ") || "console.assert"}`,
                    e.data.arguments = t.args.slice(1)
            }
            (0,
                gn.Gd)().addBreadcrumb(e, {
                input: t.args,
                level: t.level
            })
        }
        function Rt(t) {
            const {startTimestamp: e, endTimestamp: n} = t
                , r = t.xhr[vn.xU];
            if (!e || !n || !r)
                return;
            const {method: i, url: s, status_code: o, body: a} = r
                , c = {
                method: i,
                url: s,
                status_code: o
            }
                , u = {
                xhr: t.xhr,
                input: a,
                startTimestamp: e,
                endTimestamp: n
            };
            (0,
                gn.Gd)().addBreadcrumb({
                category: "xhr",
                data: c,
                type: "http"
            }, u)
        }
        function Dt(t) {
            const {startTimestamp: e, endTimestamp: n} = t;
            if (n && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                if (t.error) {
                    const r = t.fetchData
                        , i = {
                        data: t.error,
                        input: t.args,
                        startTimestamp: e,
                        endTimestamp: n
                    };
                    (0,
                        gn.Gd)().addBreadcrumb({
                        category: "fetch",
                        data: r,
                        level: "error",
                        type: "http"
                    }, i)
                } else {
                    const r = Vr(Kr({}, t.fetchData), {
                        status_code: t.response && t.response.status
                    })
                        , i = {
                        input: t.args,
                        response: t.response,
                        startTimestamp: e,
                        endTimestamp: n
                    };
                    (0,
                        gn.Gd)().addBreadcrumb({
                        category: "fetch",
                        data: r,
                        type: "http"
                    }, i)
                }
        }
        function wt(t) {
            let e = t.from
                , n = t.to;
            const r = bt($r.location.href);
            let i = bt(e);
            const s = bt(n);
            i.path || (i = r),
            r.protocol === s.protocol && r.host === s.host && (n = s.relative),
            r.protocol === i.protocol && r.host === i.host && (e = i.relative),
                (0,
                    gn.Gd)().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: e,
                        to: n
                    }
                })
        }
        function kt(t) {
            return t && !!t.target
        }
        function Nt(t, {metadata: e, tunnel: n, dsn: r}) {
            return j(si(si({
                event_id: t.event_id,
                sent_at: (new Date).toISOString()
            }, e && e.sdk && {
                sdk: {
                    name: e.sdk.name,
                    version: e.sdk.version
                }
            }), !!n && !!r && {
                dsn: y(r)
            }), [xt(t)])
        }
        function xt(t) {
            return [{
                type: "user_report"
            }, t]
        }
        function jt() {
            (0,
                vn.oq)("error", (t=>{
                    const [e,n,r] = $t();
                    if (!e.getIntegration(di))
                        return;
                    const {msg: i, url: s, line: o, column: a, error: c} = t;
                    if (gt() || c && c.__sentry_own_request__)
                        return;
                    const u = void 0 === c && (0,
                        Tn.HD)(i) ? Bt(i, s, o, a) : Yt(_t(n, c || i, void 0, r, !1), s, o, a);
                    u.level = "error",
                        It(e, c, u, "onerror")
                }
            ))
        }
        function Ut() {
            (0,
                vn.oq)("unhandledrejection", (t=>{
                    const [e,n,r] = $t();
                    if (!e.getIntegration(di))
                        return;
                    let i = t;
                    try {
                        "reason"in t ? i = t.reason : "detail"in t && "reason"in t.detail && (i = t.detail.reason)
                    } catch (t) {}
                    if (gt() || i && i.__sentry_own_request__)
                        return !0;
                    const s = (0,
                        Tn.pt)(i) ? Gt(i) : _t(n, i, void 0, r, !0);
                    s.level = "error",
                        It(e, i, s, "onunhandledrejection")
                }
            ))
        }
        function Gt(t) {
            return {
                exception: {
                    values: [{
                        type: "UnhandledRejection",
                        value: `Non-Error promise rejection captured with value: ${String(t)}`
                    }]
                }
            }
        }
        function Bt(t, e, n, r) {
            const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
            let s = (0,
                Tn.VW)(t) ? t.message : t
                , o = "Error";
            const a = s.match(i);
            return a && (o = a[1],
                s = a[2]),
                Yt({
                    exception: {
                        values: [{
                            type: o,
                            value: s
                        }]
                    }
                }, e, n, r)
        }
        function Yt(t, e, n, r) {
            const i = t.exception = t.exception || {}
                , s = i.values = i.values || []
                , o = s[0] = s[0] || {}
                , a = o.stacktrace = o.stacktrace || {}
                , c = a.frames = a.frames || []
                , u = isNaN(parseInt(r, 10)) ? void 0 : r
                , l = isNaN(parseInt(n, 10)) ? void 0 : n
                , p = (0,
                Tn.HD)(e) && e.length > 0 ? e : (0,
                Ar.l4)();
            return 0 === c.length && c.push({
                colno: u,
                filename: p,
                function: "?",
                in_app: !0,
                lineno: l
            }),
                t
        }
        function Pt(t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(`Global Handler attached: ${t}`)
        }
        function It(t, e, n, r) {
            (0,
                cn.EG)(n, {
                handled: !1,
                type: r
            }),
                t.captureEvent(n, {
                    originalException: e
                })
        }
        function $t() {
            const t = (0,
                gn.Gd)()
                , e = t.getClient()
                , n = e && e.getOptions() || {
                stackParser: ()=>[],
                attachStacktrace: !1
            };
            return [t, n.stackParser, n.attachStacktrace]
        }
        function Ct(t) {
            return function(...e) {
                const n = e[0];
                return e[0] = yt(n, {
                    mechanism: {
                        data: {
                            function: (0,
                                En.$P)(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }),
                    t.apply(this, e)
            }
        }
        function At(t) {
            return function(e) {
                return t.apply(this, [yt(e, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: (0,
                                En.$P)(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                })])
            }
        }
        function Mt(t) {
            return function(...e) {
                const n = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((t=>{
                        t in n && "function" == typeof n[t] && (0,
                            dn.hl)(n, t, (function(e) {
                                const n = {
                                    mechanism: {
                                        data: {
                                            function: t,
                                            handler: (0,
                                                En.$P)(e)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }
                                    , r = (0,
                                    dn.HK)(e);
                                return r && (n.mechanism.data.handler = (0,
                                    En.$P)(r)),
                                    yt(e, n)
                            }
                        ))
                    }
                )),
                    t.apply(this, e)
            }
        }
        function Lt(t) {
            const e = $r
                , n = e[t] && e[t].prototype;
            !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || ((0,
                dn.hl)(n, "addEventListener", (function(e) {
                    return function(n, r, i) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = yt(r.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: (0,
                                            En.$P)(r),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return e.apply(this, [n, yt(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: (0,
                                        En.$P)(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), i])
                    }
                }
            )),
                (0,
                    dn.hl)(n, "removeEventListener", (function(t) {
                        return function(e, n, r) {
                            const i = n;
                            try {
                                const n = i && i.__sentry_wrapped__;
                                n && t.call(this, e, n, r)
                            } catch (t) {}
                            return t.call(this, e, i, r)
                        }
                    }
                )))
        }
        function qt(t, e, n, r, i) {
            if (!(r.exception && r.exception.values && i && (0,
                Tn.V9)(i.originalException, Error)))
                return r;
            const s = Ht(t, n, i.originalException, e);
            return r.exception.values = [...s, ...r.exception.values],
                r
        }
        function Ht(t, e, n, r, i=[]) {
            if (!(0,
                Tn.V9)(n[r], Error) || i.length + 1 >= e)
                return i;
            const s = it(t, n[r]);
            return Ht(t, e, n[r], r, [s, ...i])
        }
        function Ft(t, e) {
            return !!e && !(!Wt(t, e) && !Jt(t, e))
        }
        function Wt(t, e) {
            const n = t.message
                , r = e.message;
            return !(!n && !r || n && !r || !n && r || n !== r || !Kt(t, e) || !zt(t, e))
        }
        function Jt(t, e) {
            const n = Vt(e)
                , r = Vt(t);
            return !!(n && r && n.type === r.type && n.value === r.value && Kt(t, e) && zt(t, e))
        }
        function zt(t, e) {
            let n = Xt(t)
                , r = Xt(e);
            if (!n && !r)
                return !0;
            if (n && !r || !n && r || r.length !== n.length)
                return !1;
            for (let t = 0; t < r.length; t++) {
                const e = r[t]
                    , i = n[t];
                if (e.filename !== i.filename || e.lineno !== i.lineno || e.colno !== i.colno || e.function !== i.function)
                    return !1
            }
            return !0
        }
        function Kt(t, e) {
            let n = t.fingerprint
                , r = e.fingerprint;
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            try {
                return n.join("") === r.join("")
            } catch (t) {
                return !1
            }
        }
        function Vt(t) {
            return t.exception && t.exception.values && t.exception.values[0]
        }
        function Xt(t) {
            const e = t.exception;
            if (e)
                try {
                    return e.values[0].stacktrace.frames
                } catch (t) {
                    return
                }
        }
        function Zt(t, e, n, r) {
            const i = {
                filename: t,
                function: e,
                in_app: !0
            };
            return void 0 !== n && (i.lineno = n),
            void 0 !== r && (i.colno = r),
                i
        }
        function Qt(t) {
            function e() {
                return void 0 === t || s.length < t
            }
            function n(t) {
                return s.splice(s.indexOf(t), 1)[0]
            }
            function r(t) {
                if (!e())
                    return (0,
                        On.$2)(new Un("Not adding Promise because buffer limit was reached."));
                const r = t();
                return -1 === s.indexOf(r) && s.push(r),
                    r.then((()=>n(r))).then(null, (()=>n(r).then(null, (()=>{}
                    )))),
                    r
            }
            function i(t) {
                return new On.cW(((e,n)=>{
                        let r = s.length;
                        if (!r)
                            return e(!0);
                        const i = setTimeout((()=>{
                                t && t > 0 && e(!1)
                            }
                        ), t);
                        s.forEach((t=>{
                                (0,
                                    On.WD)(t).then((()=>{
                                        --r || (clearTimeout(i),
                                            e(!0))
                                    }
                                ), n)
                            }
                        ))
                    }
                ))
            }
            const s = [];
            return {
                $: s,
                add: r,
                drain: i
            }
        }
        function te(t, e=Date.now()) {
            const n = parseInt(`${t}`, 10);
            if (!isNaN(n))
                return 1e3 * n;
            const r = Date.parse(`${t}`);
            return isNaN(r) ? Xi : r - e
        }
        function ee(t, e) {
            return t[e] || t.all || 0
        }
        function ne(t, e, n=Date.now()) {
            return ee(t, e) > n
        }
        function re(t, {statusCode: e, headers: n}, r=Date.now()) {
            const i = Vi({}, t)
                , s = n && n["x-sentry-rate-limits"]
                , o = n && n["retry-after"];
            if (s)
                for (const t of s.trim().split(",")) {
                    const [e,n] = t.split(":", 2)
                        , s = parseInt(e, 10)
                        , o = 1e3 * (isNaN(s) ? 60 : s);
                    if (n)
                        for (const t of n.split(";"))
                            i[t] = r + o;
                    else
                        i.all = r + o
                }
            else
                o ? i.all = r + te(o, r) : 429 === e && (i.all = r + 6e4);
            return i
        }
        function ie(t, e, n=Qt(t.bufferSize || Zi)) {
            function r(r) {
                const s = [];
                if (G(r, ((e,n)=>{
                        const r = $(n);
                        if (ne(i, r)) {
                            const i = se(e, n);
                            t.recordDroppedEvent("ratelimit_backoff", r, i)
                        } else
                            s.push(e)
                    }
                )),
                0 === s.length)
                    return (0,
                        On.WD)();
                const o = j(r[0], s)
                    , a = e=>{
                    G(o, ((n,r)=>{
                            const i = se(n, r);
                            t.recordDroppedEvent(e, $(r), i)
                        }
                    ))
                }
                    , c = ()=>e({
                    body: Y(o, t.textEncoder)
                }).then((t=>(void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`),
                    i = re(i, t),
                    t)), (t=>{
                        throw a("network_error"),
                            t
                    }
                ));
                return n.add(c).then((t=>t), (t=>{
                        if (t instanceof Un)
                            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("Skipped sending event because buffer is full."),
                                a("queue_overflow"),
                                (0,
                                    On.WD)();
                        throw t
                    }
                ))
            }
            let i = {};
            const s = t=>n.drain(t);
            return r.__sentry__baseTransport__ = !0,
                {
                    send: r,
                    flush: s
                }
        }
        function se(t, e) {
            if ("event" === e || "transaction" === e)
                return Array.isArray(t) ? t[1] : void 0
        }
        function oe() {
            if (Qi)
                return Qi;
            if ((0,
                bn.Du)($r.fetch))
                return Qi = $r.fetch.bind($r);
            const t = $r.document;
            let e = $r.fetch;
            if (t && "function" == typeof t.createElement)
                try {
                    const n = t.createElement("iframe");
                    n.hidden = !0,
                        t.head.appendChild(n);
                    const r = n.contentWindow;
                    r && r.fetch && (e = r.fetch),
                        t.head.removeChild(n)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
            return Qi = e.bind($r)
        }
        function ae() {
            Qi = void 0
        }
        function ce(t, e=oe()) {
            function n(n) {
                const s = n.body.length;
                r += s,
                    i++;
                const o = ss({
                    body: n.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: t.headers,
                    keepalive: r <= 6e4 && i < 15
                }, t.fetchOptions);
                try {
                    return e(t.url, o).then((t=>(r -= s,
                        i--,
                        {
                            statusCode: t.status,
                            headers: {
                                "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": t.headers.get("Retry-After")
                            }
                        })))
                } catch (t) {
                    return ae(),
                        r -= s,
                        i--,
                        (0,
                            On.$2)(t)
                }
            }
            let r = 0
                , i = 0;
            return ie(t, n)
        }
        function ue(t) {
            function e(e) {
                return new On.cW(((n,r)=>{
                        const i = new XMLHttpRequest;
                        i.onerror = r,
                            i.onreadystatechange = ()=>{
                                i.readyState === os && n({
                                    statusCode: i.status,
                                    headers: {
                                        "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                        "retry-after": i.getResponseHeader("Retry-After")
                                    }
                                })
                            }
                            ,
                            i.open("POST", t.url);
                        for (const e in t.headers)
                            Object.prototype.hasOwnProperty.call(t.headers, e) && i.setRequestHeader(e, t.headers[e]);
                        i.send(e.body)
                    }
                ))
            }
            return ie(t, e)
        }
        function le(t={}) {
            void 0 === t.defaultIntegrations && (t.defaultIntegrations = gs),
            void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__),
            $r.SENTRY_RELEASE && $r.SENTRY_RELEASE.id && (t.release = $r.SENTRY_RELEASE.id)),
            void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
            void 0 === t.sendClientReports && (t.sendClientReports = !0);
            const e = hs(fs({}, t), {
                stackParser: (0,
                    En.Sq)(t.stackParser || qi),
                integrations: _(t),
                transport: t.transport || ((0,
                    bn.Ak)() ? ce : ue)
            });
            g(oi, e),
            t.autoSessionTracking && _e()
        }
        function pe(t) {
            t.startSession({
                ignoreDuration: !0
            }),
                t.captureSession()
        }
        function _e() {
            if (void 0 === $r.document)
                return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
            const t = (0,
                gn.Gd)();
            t.captureSession && (pe(t),
                (0,
                    vn.oq)("history", (({from: t, to: e})=>{
                        void 0 === t || t === e || pe((0,
                            gn.Gd)())
                    }
                )))
        }
        function de(t) {
            const e = t.match(Es);
            if (!t || !e)
                return;
            let n;
            return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1),
                {
                    traceId: e[1],
                    parentSampled: n,
                    parentSpanId: e[2]
                }
        }
        function fe(t) {
            if (!(0,
                Tn.HD)(t) && !Array.isArray(t))
                return;
            let e = {};
            if (Array.isArray(t))
                e = t.reduce(((t,e)=>{
                        const n = ge(e);
                        return Ds(Ds({}, t), n)
                    }
                ), {});
            else {
                if (!t)
                    return;
                e = ge(t)
            }
            const n = Object.entries(e).reduce(((t,[e,n])=>{
                    if (e.match(Ns)) {
                        t[e.slice(ks.length)] = n
                    }
                    return t
                }
            ), {});
            return Object.keys(n).length > 0 ? n : void 0
        }
        function he(t) {
            return me(Object.entries(t).reduce(((t,[e,n])=>(n && (t[`${ks}${e}`] = n),
                t)), {}))
        }
        function ge(t) {
            return t.split(",").map((t=>t.split("=").map((t=>decodeURIComponent(t.trim()))))).reduce(((t,[e,n])=>(t[e] = n,
                t)), {})
        }
        function me(t) {
            if (0 !== Object.keys(t).length)
                return Object.entries(t).reduce(((t,[e,n],r)=>{
                        const i = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`
                            , s = 0 === r ? i : `${t},${i}`;
                        return s.length > xs ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`),
                            t) : s
                    }
                ), "")
        }
        function ye() {
            js && js.document ? js.document.addEventListener("visibilitychange", (()=>{
                    const t = (0,
                        bs.x1)();
                    if (js.document.hidden && t) {
                        const e = "cancelled";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`),
                        t.status || t.setStatus(e),
                            t.setTag("visibilitychange", "document.hidden"),
                            t.finish()
                    }
                }
            )) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")
        }
        function Ee(t) {
            return "number" == typeof t && isFinite(t)
        }
        function be(t, e) {
            var n = e
                , {startTimestamp: r} = n
                , i = to(n, ["startTimestamp"]);
            return r && t.startTimestamp > r && (t.startTimestamp = r),
                t.startChild(Qs({
                    startTimestamp: r
                }, i))
        }
        function ve(t) {
            return t / 1e3
        }
        function Se() {
            return js && js.addEventListener && js.performance
        }
        function Te() {
            const t = Se();
            if (t && Jn.Z1) {
                t.mark && js.performance.mark("sentry-tracing-init"),
                    ke();
                const e = De()
                    , n = we();
                return ()=>{
                    e && e(),
                    n && n()
                }
            }
            return ()=>{}
        }
        function Oe() {
            $s("longtask", (t=>{
                    for (const e of t) {
                        const t = (0,
                            bs.x1)();
                        if (!t)
                            return;
                        const n = ve(Jn.Z1 + e.startTime)
                            , r = ve(e.duration);
                        t.startChild({
                            description: "Main UI thread blocked",
                            op: "ui.long-task",
                            startTimestamp: n,
                            endTimestamp: n + r
                        })
                    }
                }
            ))
        }
        function Re() {
            $s("event", (t=>{
                    for (const e of t) {
                        const t = (0,
                            bs.x1)();
                        if (!t)
                            return;
                        if ("click" === e.name) {
                            const n = ve(Jn.Z1 + e.startTime)
                                , r = ve(e.duration);
                            t.startChild({
                                description: (0,
                                    Ar.Rt)(e.target),
                                op: `ui.interaction.${e.name}`,
                                startTimestamp: n,
                                endTimestamp: n + r
                            })
                        }
                    }
                }
            ), {
                durationThreshold: 0
            })
        }
        function De() {
            return As((t=>{
                    const e = t.entries.pop();
                    e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("[Measurements] Adding CLS"),
                        io.cls = {
                            value: t.value,
                            unit: ""
                        },
                        no = e)
                }
            ))
        }
        function we() {
            return Js((t=>{
                    const e = t.entries.pop();
                    e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("[Measurements] Adding LCP"),
                        io.lcp = {
                            value: t.value,
                            unit: "millisecond"
                        },
                        eo = e)
                }
            ))
        }
        function ke() {
            Fs((t=>{
                    const e = t.entries.pop();
                    if (!e)
                        return;
                    const n = ve(Jn.Z1)
                        , r = ve(e.startTime);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("[Measurements] Adding FID"),
                        io.fid = {
                            value: t.value,
                            unit: "millisecond"
                        },
                        io["mark.fid"] = {
                            value: n + r,
                            unit: "second"
                        }
                }
            ))
        }
        function Ne(t) {
            const e = Se();
            if (!e || !js.performance.getEntries || !Jn.Z1)
                return;
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("[Tracing] Adding & adjusting spans using Performance API");
            const n = ve(Jn.Z1)
                , r = e.getEntries();
            let i, s;
            if (r.slice(ro).forEach((e=>{
                    const r = ve(e.startTime)
                        , o = ve(e.duration);
                    if (!("navigation" === t.op && n + r < t.startTimestamp))
                        switch (e.entryType) {
                            case "navigation":
                                je(t, e, n),
                                    i = n + ve(e.responseStart),
                                    s = n + ve(e.requestStart);
                                break;
                            case "mark":
                            case "paint":
                            case "measure":
                            {
                                xe(t, e, r, o, n);
                                const i = Hs()
                                    , s = e.startTime < i.firstHiddenTime;
                                "first-paint" === e.name && s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("[Measurements] Adding FP"),
                                    io.fp = {
                                        value: e.startTime,
                                        unit: "millisecond"
                                    }),
                                "first-contentful-paint" === e.name && s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("[Measurements] Adding FCP"),
                                    io.fcp = {
                                        value: e.startTime,
                                        unit: "millisecond"
                                    });
                                break
                            }
                            case "resource":
                            {
                                const i = e.name.replace(js.location.origin, "");
                                Be(t, e, i, r, o, n);
                                break
                            }
                        }
                }
            )),
                ro = Math.max(r.length - 1, 0),
                Ye(t),
            "pageload" === t.op) {
                "number" == typeof i && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("[Measurements] Adding TTFB"),
                    io.ttfb = {
                        value: 1e3 * (i - t.startTimestamp),
                        unit: "millisecond"
                    },
                "number" == typeof s && s <= i && (io["ttfb.requestTime"] = {
                    value: 1e3 * (i - s),
                    unit: "millisecond"
                })),
                    ["fcp", "fp", "lcp"].forEach((e=>{
                            if (!io[e] || n >= t.startTimestamp)
                                return;
                            const r = io[e].value
                                , i = n + ve(r)
                                , s = Math.abs(1e3 * (i - t.startTimestamp))
                                , o = s - r;
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(`[Measurements] Normalized ${e} from ${r} to ${s} (${o})`),
                                io[e].value = s
                        }
                    ));
                const e = io["mark.fid"];
                e && io.fid && (be(t, {
                    description: "first input delay",
                    endTimestamp: e.value + ve(io.fid.value),
                    op: "ui.action",
                    startTimestamp: e.value
                }),
                    delete io["mark.fid"]),
                "fcp"in io || delete io.cls,
                    Object.keys(io).forEach((e=>{
                            t.setMeasurement(e, io[e].value, io[e].unit)
                        }
                    )),
                    Pe(t)
            }
            eo = void 0,
                no = void 0,
                io = {}
        }
        function xe(t, e, n, r, i) {
            const s = i + n
                , o = s + r;
            return be(t, {
                description: e.name,
                endTimestamp: o,
                op: e.entryType,
                startTimestamp: s
            }),
                s
        }
        function je(t, e, n) {
            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r=>{
                    Ue(t, e, r, n)
                }
            )),
                Ue(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"),
                Ue(t, e, "fetch", n, "cache", "domainLookupStart"),
                Ue(t, e, "domainLookup", n, "DNS"),
                Ge(t, e, n)
        }
        function Ue(t, e, n, r, i, s) {
            const o = s ? e[s] : e[`${n}End`]
                , a = e[`${n}Start`];
            !a || !o || be(t, {
                op: "browser",
                description: i || n,
                startTimestamp: r + ve(a),
                endTimestamp: r + ve(o)
            })
        }
        function Ge(t, e, n) {
            be(t, {
                op: "browser",
                description: "request",
                startTimestamp: n + ve(e.requestStart),
                endTimestamp: n + ve(e.responseEnd)
            }),
                be(t, {
                    op: "browser",
                    description: "response",
                    startTimestamp: n + ve(e.responseStart),
                    endTimestamp: n + ve(e.responseEnd)
                })
        }
        function Be(t, e, n, r, i, s) {
            if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType)
                return;
            const o = {};
            "transferSize"in e && (o["http.response_transfer_size"] = e.transferSize),
            "encodedBodySize"in e && (o["http.response_content_length"] = e.encodedBodySize),
            "decodedBodySize"in e && (o["http.decoded_response_content_length"] = e.decodedBodySize),
            "renderBlockingStatus"in e && (o["resource.render_blocking_status"] = e.renderBlockingStatus);
            const a = s + r;
            be(t, {
                description: n,
                endTimestamp: a + i,
                op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                startTimestamp: a,
                data: o
            })
        }
        function Ye(t) {
            const e = js.navigator;
            if (!e)
                return;
            const n = e.connection;
            n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType),
            n.type && t.setTag("connectionType", n.type),
            Ee(n.rtt) && (io["connection.rtt"] = {
                value: n.rtt,
                unit: "millisecond"
            })),
            Ee(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`),
            Ee(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
        }
        function Pe(t) {
            eo && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("[Measurements] Adding LCP Data"),
            eo.element && t.setTag("lcp.element", (0,
                Ar.Rt)(eo.element)),
            eo.id && t.setTag("lcp.id", eo.id),
            eo.url && t.setTag("lcp.url", eo.url.trim().slice(0, 200)),
                t.setTag("lcp.size", eo.size)),
            no && no.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("[Measurements] Adding CLS Data"),
                no.sources.forEach(((e,n)=>t.setTag(`cls.source.${n + 1}`, (0,
                    Ar.Rt)(e.node)))))
        }
        function Ie(t) {
            const {traceFetch: e, traceXHR: n, tracePropagationTargets: r, tracingOrigins: i, shouldCreateSpanForRequest: s} = fo({
                traceFetch: mo.traceFetch,
                traceXHR: mo.traceXHR
            }, t)
                , o = "function" == typeof s ? s : ()=>!0
                , a = t=>$e(t, r || i)
                , c = {};
            e && (0,
                vn.oq)("fetch", (t=>{
                    Ce(t, o, a, c)
                }
            )),
            n && (0,
                vn.oq)("xhr", (t=>{
                    Me(t, o, a, c)
                }
            ))
        }
        function $e(t, e) {
            return (0,
                un.U0)(t, e || go)
        }
        function Ce(t, e, n, r) {
            if (!(0,
                so.z)() || !t.fetchData || !e(t.fetchData.url))
                return;
            if (t.endTimestamp) {
                const e = t.fetchData.__span;
                if (!e)
                    return;
                const n = r[e];
                if (n) {
                    if (t.response) {
                        n.setHttpStatus(t.response.status);
                        const e = t.response && t.response.headers && t.response.headers.get("content-length")
                            , r = parseInt(e);
                        r > 0 && n.setData("http.response_content_length", r)
                    } else
                        t.error && n.setStatus("internal_error");
                    n.finish(),
                        delete r[e]
                }
                return
            }
            const i = (0,
                gn.Gd)().getScope()
                , s = i && i.getSpan()
                , o = s && s.transaction;
            if (s && o) {
                const {method: e, url: i} = t.fetchData
                    , a = s.startChild({
                    data: {
                        url: i,
                        type: "fetch",
                        "http.method": e
                    },
                    description: `${e} ${i}`,
                    op: "http.client"
                });
                t.fetchData.__span = a.spanId,
                    r[a.spanId] = a;
                const c = t.args[0];
                t.args[1] = t.args[1] || {};
                const u = t.args[1];
                n(t.fetchData.url) && (u.headers = Ae(c, o.getDynamicSamplingContext(), a, u))
            }
        }
        function Ae(t, e, n, r) {
            const i = he(e)
                , s = n.toTraceparent()
                , o = "undefined" != typeof Request && (0,
                Tn.V9)(t, Request) ? t.headers : r.headers;
            if (o) {
                if ("undefined" != typeof Headers && (0,
                    Tn.V9)(o, Headers)) {
                    const t = new Headers(o);
                    return t.append("sentry-trace", s),
                    i && t.append(ws, i),
                        t
                }
                if (Array.isArray(o)) {
                    const t = [...o, ["sentry-trace", s]];
                    return i && t.push([ws, i]),
                        t
                }
                {
                    const t = "baggage"in o ? o.baggage : void 0
                        , e = [];
                    return Array.isArray(t) ? e.push(...t) : t && e.push(t),
                    i && e.push(i),
                        ho(fo({}, o), {
                            "sentry-trace": s,
                            baggage: e.length > 0 ? e.join(",") : void 0
                        })
                }
            }
            return {
                "sentry-trace": s,
                baggage: i
            }
        }
        function Me(t, e, n, r) {
            const i = t.xhr
                , s = i && i[vn.xU];
            if (!(0,
                so.z)() || i && i.__sentry_own_request__ || !(i && s && e(s.url)))
                return;
            if (t.endTimestamp) {
                const t = i.__sentry_xhr_span_id__;
                if (!t)
                    return;
                const e = r[t];
                return void (e && (e.setHttpStatus(s.status_code),
                    e.finish(),
                    delete r[t]))
            }
            const o = (0,
                gn.Gd)().getScope()
                , a = o && o.getSpan()
                , c = a && a.transaction;
            if (a && c) {
                const t = a.startChild({
                    data: ho(fo({}, s.data), {
                        type: "xhr",
                        "http.method": s.method,
                        url: s.url
                    }),
                    description: `${s.method} ${s.url}`,
                    op: "http.client"
                });
                if (i.__sentry_xhr_span_id__ = t.spanId,
                    r[i.__sentry_xhr_span_id__] = t,
                i.setRequestHeader && n(s.url))
                    try {
                        i.setRequestHeader("sentry-trace", t.toTraceparent());
                        const e = he(c.getDynamicSamplingContext());
                        e && i.setRequestHeader(ws, e)
                    } catch (t) {}
            }
        }
        function Le(t, e=!0, n=!0) {
            if (!js || !js.location)
                return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn("Could not initialize routing instrumentation due to invalid location"));
            let r, i = js.location.href;
            e && (r = t({
                name: js.location.pathname,
                startTimestamp: Jn.Z1 ? Jn.Z1 / 1e3 : void 0,
                op: "pageload",
                metadata: {
                    source: "url"
                }
            })),
            n && (0,
                vn.oq)("history", (({to: e, from: n})=>{
                    void 0 === n && i && -1 !== i.indexOf(e) ? i = void 0 : n !== e && (i = void 0,
                    r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(`[Tracing] Finishing current transaction with op: ${r.op}`),
                        r.finish()),
                        r = t({
                            name: js.location.pathname,
                            op: "navigation",
                            metadata: {
                                source: "url"
                            }
                        }))
                }
            ))
        }
        function qe(t) {
            const e = (0,
                Ar.qT)(`meta[name=${t}]`);
            return e ? e.getAttribute("content") : null
        }
        function He(t) {
            let e, n = t[0], r = 1;
            for (; r < t.length; ) {
                const i = t[r]
                    , s = t[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (e = n,
                    n = s(n)) : ("call" === i || "optionalCall" === i) && (n = s(((...t)=>n.call(e, ...t))),
                    e = void 0)
            }
            return n
        }
        function Fe(t) {
            const e = He([t, "call", t=>t(), "access", t=>t.getClient, "call", t=>t(), "optionalAccess", t=>t.getOptions, "call", t=>t()]);
            return "sentry" !== (He([e, "optionalAccess", t=>t.instrumenter]) || "sentry")
        }
        function We(t, e) {
            return t.map((t=>(Object.keys(t).forEach((n=>{
                    Object.keys(t[n]).forEach((r=>{
                            "function" == typeof t[n][r] && Je(t, n, r, e)
                        }
                    ))
                }
            )),
                t)))
        }
        function Je(t, e, n, r) {
            (0,
                dn.hl)(t[e], n, (function(t) {
                    return function(...i) {
                        const s = He([r().getScope(), "optionalAccess", t=>t.getSpan, "call", t=>t()])
                            , o = He([s, "optionalAccess", t=>t.startChild, "call", t=>t({
                            description: `${e}.${n}`,
                            op: "graphql.resolve"
                        })])
                            , a = t.call(this, ...i);
                        return (0,
                            Tn.J8)(a) ? a.then((t=>(He([o, "optionalAccess", t=>t.finish, "call", t=>t()]),
                            t))) : (He([o, "optionalAccess", t=>t.finish, "call", t=>t()]),
                            a)
                    }
                }
            ))
        }
        function ze(t, e={}) {
            const n = t.method && t.method.toUpperCase();
            let r = ""
                , i = "url";
            e.customRoute || t.route ? (r = e.customRoute || `${t.baseUrl || ""}${t.route && t.route.path}`,
                i = "route") : (t.originalUrl || t.url) && (r = vt(t.originalUrl || t.url || ""));
            let s = "";
            return e.method && n && (s += n),
            e.method && e.path && (s += " "),
            e.path && r && (s += r),
                [s, i]
        }
        function Ke(t, e) {
            const n = t.length;
            switch (n) {
                case 2:
                    return function(n, r) {
                        const i = r.__sentry_transaction;
                        if (i) {
                            const n = i.startChild({
                                description: t.name,
                                op: `middleware.express.${e}`
                            });
                            r.once("finish", (()=>{
                                    n.finish()
                                }
                            ))
                        }
                        return t.call(this, n, r)
                    }
                        ;
                case 3:
                    return function(n, r, i) {
                        const s = He([r.__sentry_transaction, "optionalAccess", t=>t.startChild, "call", n=>n({
                            description: t.name,
                            op: `middleware.express.${e}`
                        })]);
                        t.call(this, n, r, (function(...t) {
                                He([s, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                    i.call(this, ...t)
                            }
                        ))
                    }
                        ;
                case 4:
                    return function(n, r, i, s) {
                        const o = He([i.__sentry_transaction, "optionalAccess", t=>t.startChild, "call", n=>n({
                            description: t.name,
                            op: `middleware.express.${e}`
                        })]);
                        t.call(this, n, r, i, (function(...t) {
                                He([o, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                    s.call(this, ...t)
                            }
                        ))
                    }
                        ;
                default:
                    throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)
            }
        }
        function Ve(t, e) {
            return t.map((t=>"function" == typeof t ? Ke(t, e) : Array.isArray(t) ? t.map((t=>"function" == typeof t ? Ke(t, e) : t)) : t))
        }
        function Xe(t, e) {
            const n = t[e];
            return t[e] = function(...t) {
                return n.call(this, ...Ve(t, e))
            }
                ,
                t
        }
        function Ze(t, e=[]) {
            e.forEach((e=>Xe(t, e)))
        }
        function Qe(t) {
            const e = "settings"in t;
            e && void 0 === t._router && t.lazyrouter && t.lazyrouter();
            const n = e ? t._router : t;
            if (!n)
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."),
                    void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.debug("Routing instrumentation is currently only supported in Express 4."));
            const r = Object.getPrototypeOf(n)
                , i = r.process_params;
            r.process_params = function(t, e, n, r, s) {
                n._reconstructedRoute || (n._reconstructedRoute = "");
                const {layerRoutePath: o, isRegex: a, isArray: c, numExtraSegments: u} = tn(t);
                (o || a || c) && (n._hasParameters = !0);
                const l = (o || t.path || "").split("/").filter((t=>t.length > 0 && (a || c || !t.includes("*")))).join("/");
                l && l.length > 0 && (n._reconstructedRoute += `/${l}${a ? "/" : ""}`);
                if (St(n.originalUrl || "") + u === St(n._reconstructedRoute)) {
                    n._hasParameters || n._reconstructedRoute !== n.originalUrl && (n._reconstructedRoute = n.originalUrl ? vt(n.originalUrl) : n.originalUrl);
                    const t = r.__sentry_transaction;
                    if (t && "custom" !== t.metadata.source) {
                        const e = n._reconstructedRoute || "/";
                        t.setName(...ze(n, {
                            path: !0,
                            method: !0,
                            customRoute: e
                        }))
                    }
                }
                return i.call(this, t, e, n, r, s)
            }
        }
        function tn(t) {
            const e = He([t, "access", t=>t.route, "optionalAccess", t=>t.path])
                , n = (0,
                Tn.Kj)(e)
                , r = Array.isArray(e);
            if (!e)
                return {
                    isRegex: n,
                    isArray: r,
                    numExtraSegments: 0
                };
            const i = r ? Math.max(en(e) - St(t.path || ""), 0) : 0;
            return {
                layerRoutePath: nn(r, e),
                isRegex: n,
                isArray: r,
                numExtraSegments: i
            }
        }
        function en(t) {
            return t.reduce(((t,e)=>t + St(e.toString())), 0)
        }
        function nn(t, e) {
            return t ? e.map((t=>t.toString())).join(",") : e && e.toString()
        }
        function rn(t) {
            return t && "object" == typeof t && t.once && "function" == typeof t.once
        }
        function sn(t, e, n=(()=>{}
        )) {
            function r() {
                c && c.finish(),
                    s.getScope().setSpan(a)
            }
            const i = Ho({}, t);
            void 0 !== i.name && void 0 === i.description && (i.description = i.name);
            const s = (0,
                gn.Gd)()
                , o = s.getScope()
                , a = o.getSpan()
                , c = a ? a.startChild(i) : s.startTransaction(i);
            let u;
            o.setSpan(c);
            try {
                u = e(c)
            } catch (t) {
                throw c && c.setStatus("internal_error"),
                    n(t),
                    r(),
                    t
            }
            return (0,
                Tn.J8)(u) ? Promise.resolve(u).then((()=>{
                    r()
                }
            ), (t=>{
                    c && c.setStatus("internal_error"),
                        n(t),
                        r()
                }
            )) : r(),
                u
        }
        function on(t) {
            return t && !!t.$use
        }
        var an = t(3342)
            , cn = t(7539)
            , un = t(2150);
        const ln = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
            , pn = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
        class _n {
            static __initStatic() {
                this.id = "InboundFilters"
            }
            __init() {
                this.name = _n.id
            }
            constructor(t={}) {
                this._options = t,
                    _n.prototype.__init.call(this)
            }
            setupOnce(t, r) {
                const i = t=>{
                        const i = r();
                        if (i) {
                            const r = i.getIntegration(_n);
                            if (r) {
                                const s = i.getClient()
                                    , o = s ? s.getOptions() : {};
                                return n(t, e(r._options, o)) ? null : t
                            }
                        }
                        return t
                    }
                ;
                i.id = this.name,
                    t(i)
            }
        }
        _n.__initStatic();
        var dn = t(3813);
        let fn;
        class hn {
            constructor() {
                hn.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "FunctionToString"
            }
            __init() {
                this.name = hn.id
            }
            setupOnce() {
                fn = Function.prototype.toString;
                try {
                    Function.prototype.toString = function(...t) {
                        const e = (0,
                            dn.HK)(this) || this;
                        return fn.apply(e, t)
                    }
                } catch (t) {}
            }
        }
        hn.__initStatic();
        var gn = t(1142)
            , mn = t(756);
        const yn = [];
        var En = t(5142)
            , bn = t(3040)
            , vn = t(4553);
        const Sn = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        var Tn = t(4353)
            , On = t(4295)
            , Rn = Object.defineProperty
            , Dn = Object.getOwnPropertySymbols
            , wn = Object.prototype.hasOwnProperty
            , kn = Object.prototype.propertyIsEnumerable
            , Nn = (t,e,n)=>e in t ? Rn(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , xn = (t,e)=>{
                for (var n in e || (e = {}))
                    wn.call(e, n) && Nn(t, n, e[n]);
                if (Dn)
                    for (var n of Dn(e))
                        kn.call(e, n) && Nn(t, n, e[n]);
                return t
            }
        ;
        const jn = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor"
        };
        class Un extends Error {
            constructor(t, e="warn") {
                super(t),
                    this.message = t,
                    this.name = new.target.prototype.constructor.name,
                    Object.setPrototypeOf(this, new.target.prototype),
                    this.logLevel = e
            }
        }
        var Gn = Object.defineProperty
            , Bn = Object.getOwnPropertySymbols
            , Yn = Object.prototype.hasOwnProperty
            , Pn = Object.prototype.propertyIsEnumerable
            , In = (t,e,n)=>e in t ? Gn(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , $n = (t,e)=>{
                for (var n in e || (e = {}))
                    Yn.call(e, n) && In(t, n, e[n]);
                if (Bn)
                    for (var n of Bn(e))
                        Pn.call(e, n) && In(t, n, e[n]);
                return t
            }
        ;
        const Cn = "7";
        var An = Object.defineProperty
            , Mn = Object.getOwnPropertySymbols
            , Ln = Object.prototype.hasOwnProperty
            , qn = Object.prototype.propertyIsEnumerable
            , Hn = (t,e,n)=>e in t ? An(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , Fn = (t,e)=>{
            for (var n in e || (e = {}))
                Ln.call(e, n) && Hn(t, n, e[n]);
            if (Mn)
                for (var n of Mn(e))
                    qn.call(e, n) && Hn(t, n, e[n]);
            return t
        }
            , Wn = t(8652)
            , Jn = t(408)
            , zn = t(9733)
            , Kn = t(1498)
            , Vn = Object.defineProperty
            , Xn = Object.defineProperties
            , Zn = Object.getOwnPropertyDescriptors
            , Qn = Object.getOwnPropertySymbols
            , tr = Object.prototype.hasOwnProperty
            , er = Object.prototype.propertyIsEnumerable
            , nr = (t,e,n)=>e in t ? Vn(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , rr = (t,e)=>{
            for (var n in e || (e = {}))
                tr.call(e, n) && nr(t, n, e[n]);
            if (Qn)
                for (var n of Qn(e))
                    er.call(e, n) && nr(t, n, e[n]);
            return t
        }
            , ir = (t,e)=>Xn(t, Zn(e));
        const sr = new WeakMap;
        var or = Object.defineProperty
            , ar = Object.defineProperties
            , cr = Object.getOwnPropertyDescriptors
            , ur = Object.getOwnPropertySymbols
            , lr = Object.prototype.hasOwnProperty
            , pr = Object.prototype.propertyIsEnumerable
            , _r = (t,e,n)=>e in t ? or(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , dr = (t,e)=>{
            for (var n in e || (e = {}))
                lr.call(e, n) && _r(t, n, e[n]);
            if (ur)
                for (var n of ur(e))
                    pr.call(e, n) && _r(t, n, e[n]);
            return t
        }
            , fr = (t,e)=>ar(t, cr(e));
        const hr = "Not capturing exception because it's already been captured.";
        class gr {
            __init() {
                this._integrations = {}
            }
            __init2() {
                this._integrationsInitialized = !1
            }
            __init3() {
                this._numProcessing = 0
            }
            __init4() {
                this._outcomes = {}
            }
            __init5() {
                this._hooks = {}
            }
            constructor(t) {
                if (gr.prototype.__init.call(this),
                    gr.prototype.__init2.call(this),
                    gr.prototype.__init3.call(this),
                    gr.prototype.__init4.call(this),
                    gr.prototype.__init5.call(this),
                    this._options = t,
                    t.dsn ? this._dsn = S(t.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn("No DSN provided, client will not do anything."),
                    this._dsn) {
                    const e = H(this._dsn, t);
                    this._transport = t.transport(fr(dr({
                        recordDroppedEvent: this.recordDroppedEvent.bind(this)
                    }, t.transportOptions), {
                        url: e
                    }))
                }
            }
            captureException(t, e, n) {
                if ((0,
                    cn.YO)(t))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(hr));
                let r = e && e.event_id;
                return this._process(this.eventFromException(t, e).then((t=>this._captureEvent(t, e, n))).then((t=>{
                        r = t
                    }
                ))),
                    r
            }
            captureMessage(t, e, n, r) {
                let i = n && n.event_id;
                const s = (0,
                    Tn.pt)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                return this._process(s.then((t=>this._captureEvent(t, n, r))).then((t=>{
                        i = t
                    }
                ))),
                    i
            }
            captureEvent(t, e, n) {
                if (e && e.originalException && (0,
                    cn.YO)(e.originalException))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(hr));
                let r = e && e.event_id;
                return this._process(this._captureEvent(t, e, n).then((t=>{
                        r = t
                    }
                ))),
                    r
            }
            captureSession(t) {
                this._isEnabled() ? "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
                    (0,
                        Wn.CT)(t, {
                        init: !1
                    })) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn("SDK not enabled, will not capture session.")
            }
            getDsn() {
                return this._dsn
            }
            getOptions() {
                return this._options
            }
            getSdkMetadata() {
                return this._options._metadata
            }
            getTransport() {
                return this._transport
            }
            flush(t) {
                const e = this._transport;
                return e ? this._isClientDoneProcessing(t).then((n=>e.flush(t).then((t=>n && t)))) : (0,
                    On.WD)(!0)
            }
            close(t) {
                return this.flush(t).then((t=>(this.getOptions().enabled = !1,
                    t)))
            }
            setupIntegrations() {
                this._isEnabled() && !this._integrationsInitialized && (this._integrations = d(this._options.integrations),
                    this._integrationsInitialized = !0)
            }
            getIntegrationById(t) {
                return this._integrations[t]
            }
            getIntegration(t) {
                try {
                    return this._integrations[t.id] || null
                } catch (e) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`Cannot retrieve integration ${t.id} from the current Client`),
                        null
                }
            }
            addIntegration(t) {
                f(t, this._integrations)
            }
            sendEvent(t, e={}) {
                if (this._dsn) {
                    let n = J(t, this._dsn, this._options._metadata, this._options.tunnel);
                    for (const t of e.attachments || [])
                        n = U(n, I(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                    const r = this._sendEnvelope(n);
                    r && r.then((e=>this.emit("afterSendEvent", t, e)), null)
                }
            }
            sendSession(t) {
                if (this._dsn) {
                    const e = W(t, this._dsn, this._options._metadata, this._options.tunnel);
                    this._sendEnvelope(e)
                }
            }
            recordDroppedEvent(t, e, n) {
                if (this._options.sendClientReports) {
                    const n = `${t}:${e}`;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(`Adding outcome: "${n}"`),
                        this._outcomes[n] = this._outcomes[n] + 1 || 1
                }
            }
            on(t, e) {
                this._hooks[t] || (this._hooks[t] = []),
                    this._hooks[t].push(e)
            }
            emit(t, ...e) {
                this._hooks[t] && this._hooks[t].forEach((t=>t(...e)))
            }
            _updateSessionFromEvent(t, e) {
                let n = !1
                    , r = !1;
                const i = e.exception && e.exception.values;
                if (i) {
                    r = !0;
                    for (const t of i) {
                        const e = t.mechanism;
                        if (e && !1 === e.handled) {
                            n = !0;
                            break
                        }
                    }
                }
                const s = "ok" === t.status;
                (s && 0 === t.errors || s && n) && ((0,
                    Wn.CT)(t, fr(dr({}, n && {
                    status: "crashed"
                }), {
                    errors: t.errors || Number(r || n)
                })),
                    this.captureSession(t))
            }
            _isClientDoneProcessing(t) {
                return new On.cW((e=>{
                        let n = 0;
                        const r = 1
                            , i = setInterval((()=>{
                                0 == this._numProcessing ? (clearInterval(i),
                                    e(!0)) : (n += r,
                                t && n >= t && (clearInterval(i),
                                    e(!1)))
                            }
                        ), r)
                    }
                ))
            }
            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }
            _prepareEvent(t, e, n) {
                const r = this.getOptions()
                    , i = Object.keys(this._integrations);
                return !e.integrations && i.length > 0 && (e.integrations = i),
                    z(r, t, e, n)
            }
            _captureEvent(t, e={}, n) {
                return this._processEvent(t, e, n).then((t=>t.event_id), (t=>{
                        if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            const e = t;
                            "log" === e.logLevel ? an.kg.log(e.message) : an.kg.warn(e)
                        }
                    }
                ))
            }
            _processEvent(t, e, n) {
                const r = this.getOptions()
                    , {sampleRate: i} = r;
                if (!this._isEnabled())
                    return (0,
                        On.$2)(new Un("SDK not enabled, will not capture event.","log"));
                const s = nt(t)
                    , o = et(t)
                    , a = t.type || "error"
                    , c = `before send for type \`${a}\``;
                if (o && "number" == typeof i && Math.random() > i)
                    return this.recordDroppedEvent("sample_rate", "error", t),
                        (0,
                            On.$2)(new Un(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"));
                const u = "replay_event" === a ? "replay" : a;
                return this._prepareEvent(t, e, n).then((n=>{
                        if (null === n)
                            throw this.recordDroppedEvent("event_processor", u, t),
                                new Un("An event processor returned `null`, will not send event.","log");
                        if (e.data && !0 === e.data.__sentry__)
                            return n;
                        return Q(tt(r, n, e), c)
                    }
                )).then((r=>{
                        if (null === r)
                            throw this.recordDroppedEvent("before_send", u, t),
                                new Un(`${c} returned \`null\`, will not send event.`,"log");
                        const i = n && n.getSession();
                        !s && i && this._updateSessionFromEvent(i, r);
                        const o = r.transaction_info;
                        if (s && o && r.transaction !== t.transaction) {
                            const t = "custom";
                            r.transaction_info = fr(dr({}, o), {
                                source: t
                            })
                        }
                        return this.sendEvent(r, e),
                            r
                    }
                )).then(null, (t=>{
                        throw t instanceof Un ? t : (this.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }),
                            new Un(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`))
                    }
                ))
            }
            _process(t) {
                this._numProcessing++,
                    t.then((t=>(this._numProcessing--,
                        t)), (t=>(this._numProcessing--,
                        t)))
            }
            _sendEnvelope(t) {
                if (this._transport && this._dsn)
                    return this.emit("beforeEnvelope", t),
                        this._transport.send(t).then(null, (t=>{
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("Error while sending event:", t)
                            }
                        ));
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("Transport disabled")
            }
            _clearOutcomes() {
                const t = this._outcomes;
                return this._outcomes = {},
                    Object.keys(t).map((e=>{
                            const [n,r] = e.split(":");
                            return {
                                reason: n,
                                category: r,
                                quantity: t[e]
                            }
                        }
                    ))
            }
        }
        const mr = "7.54.0";
        var yr = t(1041)
            , Er = Object.defineProperty
            , br = Object.defineProperties
            , vr = Object.getOwnPropertyDescriptors
            , Sr = Object.getOwnPropertySymbols
            , Tr = Object.prototype.hasOwnProperty
            , Or = Object.prototype.propertyIsEnumerable
            , Rr = (t,e,n)=>e in t ? Er(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , Dr = (t,e)=>{
            for (var n in e || (e = {}))
                Tr.call(e, n) && Rr(t, n, e[n]);
            if (Sr)
                for (var n of Sr(e))
                    Or.call(e, n) && Rr(t, n, e[n]);
            return t
        }
            , wr = (t,e)=>br(t, vr(e));
        const kr = /Minified React error #\d+;/i;
        Object.defineProperty,
            Object.getOwnPropertySymbols,
            Object.prototype.hasOwnProperty,
            Object.prototype.propertyIsEnumerable;
        var Nr = Object.defineProperty
            , xr = Object.defineProperties
            , jr = Object.getOwnPropertyDescriptors
            , Ur = Object.getOwnPropertySymbols
            , Gr = Object.prototype.hasOwnProperty
            , Br = Object.prototype.propertyIsEnumerable
            , Yr = (t,e,n)=>e in t ? Nr(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , Pr = (t,e)=>{
            for (var n in e || (e = {}))
                Gr.call(e, n) && Yr(t, n, e[n]);
            if (Ur)
                for (var n of Ur(e))
                    Br.call(e, n) && Yr(t, n, e[n]);
            return t
        }
            , Ir = (t,e)=>xr(t, jr(e));
        const $r = zn.n2;
        let Cr = 0;
        var Ar = t(4087);
        const Mr = ["fatal", "error", "warning", "log", "info", "debug"];
        var Lr = Object.defineProperty
            , qr = Object.defineProperties
            , Hr = Object.getOwnPropertyDescriptors
            , Fr = Object.getOwnPropertySymbols
            , Wr = Object.prototype.hasOwnProperty
            , Jr = Object.prototype.propertyIsEnumerable
            , zr = (t,e,n)=>e in t ? Lr(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , Kr = (t,e)=>{
            for (var n in e || (e = {}))
                Wr.call(e, n) && zr(t, n, e[n]);
            if (Fr)
                for (var n of Fr(e))
                    Jr.call(e, n) && zr(t, n, e[n]);
            return t
        }
            , Vr = (t,e)=>qr(t, Hr(e));
        const Xr = 1024
            , Zr = "Breadcrumbs";
        class Qr {
            static __initStatic() {
                this.id = Zr
            }
            __init() {
                this.name = Qr.id
            }
            constructor(t) {
                Qr.prototype.__init.call(this),
                    this.options = Kr({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    }, t)
            }
            setupOnce() {
                this.options.console && (0,
                    vn.oq)("console", Ot),
                this.options.dom && (0,
                    vn.oq)("dom", Tt(this.options.dom)),
                this.options.xhr && (0,
                    vn.oq)("xhr", Rt),
                this.options.fetch && (0,
                    vn.oq)("fetch", Dt),
                this.options.history && (0,
                    vn.oq)("history", wt)
            }
            addSentryBreadcrumb(t) {
                this.options.sentry && (0,
                    gn.Gd)().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: (0,
                        cn.jH)(t)
                }, {
                    event: t
                })
            }
        }
        Qr.__initStatic();
        var ti = Object.defineProperty
            , ei = Object.getOwnPropertySymbols
            , ni = Object.prototype.hasOwnProperty
            , ri = Object.prototype.propertyIsEnumerable
            , ii = (t,e,n)=>e in t ? ti(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , si = (t,e)=>{
                for (var n in e || (e = {}))
                    ni.call(e, n) && ii(t, n, e[n]);
                if (ei)
                    for (var n of ei(e))
                        ri.call(e, n) && ii(t, n, e[n]);
                return t
            }
        ;
        class oi extends gr {
            constructor(t) {
                const e = $r.SENTRY_SDK_SOURCE || (0,
                    yr.S)();
                t._metadata = t._metadata || {},
                    t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: `${e}:@sentry/browser`,
                            version: mr
                        }],
                        version: mr
                    },
                    super(t),
                t.sendClientReports && $r.document && $r.document.addEventListener("visibilitychange", (()=>{
                        "hidden" === $r.document.visibilityState && this._flushOutcomes()
                    }
                ))
            }
            eventFromException(t, e) {
                return lt(this._options.stackParser, t, e, this._options.attachStacktrace)
            }
            eventFromMessage(t, e="info", n) {
                return pt(this._options.stackParser, t, e, n, this._options.attachStacktrace)
            }
            sendEvent(t, e) {
                const n = this.getIntegrationById(Zr);
                n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t),
                    super.sendEvent(t, e)
            }
            captureUserFeedback(t) {
                if (!this._isEnabled())
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn("SDK not enabled, will not capture user feedback."));
                const e = Nt(t, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                });
                this._sendEnvelope(e)
            }
            _prepareEvent(t, e, n) {
                return t.platform = t.platform || "javascript",
                    super._prepareEvent(t, e, n)
            }
            _flushOutcomes() {
                const t = this._clearOutcomes();
                if (0 === t.length)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("No outcomes to send"));
                if (!this._dsn)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("No dsn provided, will not send outcomes"));
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("Sending outcomes:", t);
                const e = rt(t, this._options.tunnel && y(this._dsn));
                this._sendEnvelope(e)
            }
        }
        var ai = Object.defineProperty
            , ci = Object.getOwnPropertySymbols
            , ui = Object.prototype.hasOwnProperty
            , li = Object.prototype.propertyIsEnumerable
            , pi = (t,e,n)=>e in t ? ai(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , _i = (t,e)=>{
                for (var n in e || (e = {}))
                    ui.call(e, n) && pi(t, n, e[n]);
                if (ci)
                    for (var n of ci(e))
                        li.call(e, n) && pi(t, n, e[n]);
                return t
            }
        ;
        class di {
            static __initStatic() {
                this.id = "GlobalHandlers"
            }
            __init() {
                this.name = di.id
            }
            __init2() {
                this._installFunc = {
                    onerror: jt,
                    onunhandledrejection: Ut
                }
            }
            constructor(t) {
                di.prototype.__init.call(this),
                    di.prototype.__init2.call(this),
                    this._options = _i({
                        onerror: !0,
                        onunhandledrejection: !0
                    }, t)
            }
            setupOnce() {
                Error.stackTraceLimit = 50;
                const t = this._options;
                for (const e in t) {
                    const n = this._installFunc[e];
                    n && t[e] && (Pt(e),
                        n(),
                        this._installFunc[e] = void 0)
                }
            }
        }
        di.__initStatic();
        var fi = Object.defineProperty
            , hi = Object.getOwnPropertySymbols
            , gi = Object.prototype.hasOwnProperty
            , mi = Object.prototype.propertyIsEnumerable
            , yi = (t,e,n)=>e in t ? fi(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , Ei = (t,e)=>{
                for (var n in e || (e = {}))
                    gi.call(e, n) && yi(t, n, e[n]);
                if (hi)
                    for (var n of hi(e))
                        mi.call(e, n) && yi(t, n, e[n]);
                return t
            }
        ;
        const bi = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
        class vi {
            static __initStatic() {
                this.id = "TryCatch"
            }
            __init() {
                this.name = vi.id
            }
            constructor(t) {
                vi.prototype.__init.call(this),
                    this._options = Ei({
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0
                    }, t)
            }
            setupOnce() {
                this._options.setTimeout && (0,
                    dn.hl)($r, "setTimeout", Ct),
                this._options.setInterval && (0,
                    dn.hl)($r, "setInterval", Ct),
                this._options.requestAnimationFrame && (0,
                    dn.hl)($r, "requestAnimationFrame", At),
                this._options.XMLHttpRequest && "XMLHttpRequest"in $r && (0,
                    dn.hl)(XMLHttpRequest.prototype, "send", Mt);
                const t = this._options.eventTarget;
                t && (Array.isArray(t) ? t : bi).forEach(Lt)
            }
        }
        vi.__initStatic();
        const Si = "cause"
            , Ti = 5;
        class Oi {
            static __initStatic() {
                this.id = "LinkedErrors"
            }
            __init() {
                this.name = Oi.id
            }
            constructor(t={}) {
                Oi.prototype.__init.call(this),
                    this._key = t.key || Si,
                    this._limit = t.limit || Ti
            }
            setupOnce() {
                const t = (0,
                    gn.Gd)().getClient();
                t && (0,
                    mn.c)(((e,n)=>{
                        const r = (0,
                            gn.Gd)().getIntegration(Oi);
                        return r ? qt(t.getOptions().stackParser, r._key, r._limit, e, n) : e
                    }
                ))
            }
        }
        Oi.__initStatic();
        var Ri = Object.defineProperty
            , Di = Object.defineProperties
            , wi = Object.getOwnPropertyDescriptors
            , ki = Object.getOwnPropertySymbols
            , Ni = Object.prototype.hasOwnProperty
            , xi = Object.prototype.propertyIsEnumerable
            , ji = (t,e,n)=>e in t ? Ri(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , Ui = (t,e)=>{
            for (var n in e || (e = {}))
                Ni.call(e, n) && ji(t, n, e[n]);
            if (ki)
                for (var n of ki(e))
                    xi.call(e, n) && ji(t, n, e[n]);
            return t
        }
            , Gi = (t,e)=>Di(t, wi(e));
        class Bi {
            constructor() {
                Bi.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "HttpContext"
            }
            __init() {
                this.name = Bi.id
            }
            setupOnce() {
                (0,
                    mn.c)((t=>{
                        if ((0,
                            gn.Gd)().getIntegration(Bi)) {
                            if (!$r.navigator && !$r.location && !$r.document)
                                return t;
                            const e = t.request && t.request.url || $r.location && $r.location.href
                                , {referrer: n} = $r.document || {}
                                , {userAgent: r} = $r.navigator || {}
                                , i = Ui(Ui(Ui({}, t.request && t.request.headers), n && {
                                Referer: n
                            }), r && {
                                "User-Agent": r
                            })
                                , s = Gi(Ui(Ui({}, t.request), e && {
                                url: e
                            }), {
                                headers: i
                            });
                            return Gi(Ui({}, t), {
                                request: s
                            })
                        }
                        return t
                    }
                ))
            }
        }
        Bi.__initStatic();
        class Yi {
            constructor() {
                Yi.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "Dedupe"
            }
            __init() {
                this.name = Yi.id
            }
            setupOnce(t, e) {
                const n = t=>{
                        if (t.type)
                            return t;
                        const n = e().getIntegration(Yi);
                        if (n) {
                            try {
                                if (Ft(t, n._previousEvent))
                                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn("Event dropped due to being a duplicate of previously captured event."),
                                        null
                            } catch (e) {
                                return n._previousEvent = t
                            }
                            return n._previousEvent = t
                        }
                        return t
                    }
                ;
                n.id = this.name,
                    t(n)
            }
        }
        Yi.__initStatic();
        const Pi = "?"
            , Ii = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
            , $i = /\((\S*)(?::(\d+))(?::(\d+))\)/
            , Ci = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
            , Ai = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
            , Mi = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
            , Li = [[30, t=>{
                const e = Ii.exec(t);
                if (e) {
                    if (e[2] && 0 === e[2].indexOf("eval")) {
                        const t = $i.exec(e[2]);
                        t && (e[2] = t[1],
                            e[3] = t[2],
                            e[4] = t[3])
                    }
                    const [t,n] = Hi(e[1] || Pi, e[2]);
                    return Zt(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                }
            }
            ], [50, t=>{
                const e = Ci.exec(t);
                if (e) {
                    if (e[3] && e[3].indexOf(" > eval") > -1) {
                        const t = Ai.exec(e[3]);
                        t && (e[1] = e[1] || "eval",
                            e[3] = t[1],
                            e[4] = t[2],
                            e[5] = "")
                    }
                    let t = e[3]
                        , n = e[1] || Pi;
                    return [n,t] = Hi(n, t),
                        Zt(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                }
            }
            ], [40, t=>{
                const e = Mi.exec(t);
                return e ? Zt(e[2], e[1] || Pi, +e[3], e[4] ? +e[4] : void 0) : void 0
            }
            ]]
            , qi = (0,
                En.pE)(...Li)
            , Hi = (t,e)=>{
                const n = -1 !== t.indexOf("safari-extension")
                    , r = -1 !== t.indexOf("safari-web-extension");
                return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : Pi, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
            }
        ;
        var Fi = Object.defineProperty
            , Wi = Object.getOwnPropertySymbols
            , Ji = Object.prototype.hasOwnProperty
            , zi = Object.prototype.propertyIsEnumerable
            , Ki = (t,e,n)=>e in t ? Fi(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , Vi = (t,e)=>{
                for (var n in e || (e = {}))
                    Ji.call(e, n) && Ki(t, n, e[n]);
                if (Wi)
                    for (var n of Wi(e))
                        zi.call(e, n) && Ki(t, n, e[n]);
                return t
            }
        ;
        const Xi = 6e4
            , Zi = 30;
        let Qi;
        var ts = Object.defineProperty
            , es = Object.getOwnPropertySymbols
            , ns = Object.prototype.hasOwnProperty
            , rs = Object.prototype.propertyIsEnumerable
            , is = (t,e,n)=>e in t ? ts(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , ss = (t,e)=>{
                for (var n in e || (e = {}))
                    ns.call(e, n) && is(t, n, e[n]);
                if (es)
                    for (var n of es(e))
                        rs.call(e, n) && is(t, n, e[n]);
                return t
            }
        ;
        const os = 4;
        var as = Object.defineProperty
            , cs = Object.defineProperties
            , us = Object.getOwnPropertyDescriptors
            , ls = Object.getOwnPropertySymbols
            , ps = Object.prototype.hasOwnProperty
            , _s = Object.prototype.propertyIsEnumerable
            , ds = (t,e,n)=>e in t ? as(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , fs = (t,e)=>{
            for (var n in e || (e = {}))
                ps.call(e, n) && ds(t, n, e[n]);
            if (ls)
                for (var n of ls(e))
                    _s.call(e, n) && ds(t, n, e[n]);
            return t
        }
            , hs = (t,e)=>cs(t, us(e));
        const gs = [new _n, new hn, new vi, new Qr, new di, new Oi, new Yi, new Bi];
        var ms = t(7781)
            , ys = t(8289);
        const Es = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
        var bs = t(7767)
            , vs = Object.defineProperty
            , Ss = Object.getOwnPropertySymbols
            , Ts = Object.prototype.hasOwnProperty
            , Os = Object.prototype.propertyIsEnumerable
            , Rs = (t,e,n)=>e in t ? vs(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , Ds = (t,e)=>{
                for (var n in e || (e = {}))
                    Ts.call(e, n) && Rs(t, n, e[n]);
                if (Ss)
                    for (var n of Ss(e))
                        Os.call(e, n) && Rs(t, n, e[n]);
                return t
            }
        ;
        const ws = "baggage"
            , ks = "sentry-"
            , Ns = /^sentry-/
            , xs = 8192
            , js = zn.n2
            , Us = (t,e,n)=>{
                let r, i;
                return s=>{
                    e.value >= 0 && (s || n) && (i = e.value - (r || 0),
                    (i || void 0 === r) && (r = e.value,
                        e.delta = i,
                        t(e)))
                }
            }
            , Gs = ()=>`v3-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`
            , Bs = ()=>{
                const t = js.performance.timing
                    , e = js.performance.navigation.type
                    , n = {
                    entryType: "navigation",
                    startTime: 0,
                    type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
                };
                for (const e in t)
                    "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
                return n
            }
            , Ys = ()=>js.__WEB_VITALS_POLYFILL__ ? js.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || Bs()) : js.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
            , Ps = ()=>{
                const t = Ys();
                return t && t.activationStart || 0
            }
            , Is = (t,e)=>{
                const n = Ys();
                let r = "navigate";
                return n && (r = js.document.prerendering || Ps() > 0 ? "prerender" : n.type.replace(/_/g, "-")),
                    {
                        name: t,
                        value: void 0 === e ? -1 : e,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: Gs(),
                        navigationType: r
                    }
            }
            , $s = (t,e,n)=>{
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                        const r = new PerformanceObserver((t=>{
                                e(t.getEntries())
                            }
                        ));
                        return r.observe(Object.assign({
                            type: t,
                            buffered: !0
                        }, n || {})),
                            r
                    }
                } catch (t) {}
            }
            , Cs = (t,e)=>{
                const n = r=>{
                        ("pagehide" === r.type || "hidden" === js.document.visibilityState) && (t(r),
                        e && (removeEventListener("visibilitychange", n, !0),
                            removeEventListener("pagehide", n, !0)))
                    }
                ;
                addEventListener("visibilitychange", n, !0),
                    addEventListener("pagehide", n, !0)
            }
            , As = t=>{
                const e = Is("CLS", 0);
                let n, r = 0, i = [];
                const s = t=>{
                    t.forEach((t=>{
                            if (!t.hadRecentInput) {
                                const s = i[0]
                                    , o = i[i.length - 1];
                                r && 0 !== i.length && t.startTime - o.startTime < 1e3 && t.startTime - s.startTime < 5e3 ? (r += t.value,
                                    i.push(t)) : (r = t.value,
                                    i = [t]),
                                r > e.value && (e.value = r,
                                    e.entries = i,
                                n && n())
                            }
                        }
                    ))
                }
                    , o = $s("layout-shift", s);
                if (o) {
                    n = Us(t, e);
                    const r = ()=>{
                            s(o.takeRecords()),
                                n(!0)
                        }
                    ;
                    return Cs(r),
                        r
                }
            }
        ;
        let Ms = -1;
        const Ls = ()=>"hidden" !== js.document.visibilityState || js.document.prerendering ? 1 / 0 : 0
            , qs = ()=>{
                Cs((({timeStamp: t})=>{
                        Ms = t
                    }
                ), !0)
            }
            , Hs = ()=>(Ms < 0 && (Ms = Ls(),
                qs()),
                {
                    get firstHiddenTime() {
                        return Ms
                    }
                })
            , Fs = t=>{
                const e = Hs()
                    , n = Is("FID");
                let r;
                const i = t=>{
                    t.startTime < e.firstHiddenTime && (n.value = t.processingStart - t.startTime,
                        n.entries.push(t),
                        r(!0))
                }
                    , s = t=>{
                    t.forEach(i)
                }
                    , o = $s("first-input", s);
                r = Us(t, n),
                o && Cs((()=>{
                        s(o.takeRecords()),
                            o.disconnect()
                    }
                ), !0)
            }
            , Ws = {}
            , Js = t=>{
                const e = Hs()
                    , n = Is("LCP");
                let r;
                const i = t=>{
                    const i = t[t.length - 1];
                    if (i) {
                        const t = Math.max(i.startTime - Ps(), 0);
                        t < e.firstHiddenTime && (n.value = t,
                            n.entries = [i],
                            r())
                    }
                }
                    , s = $s("largest-contentful-paint", i);
                if (s) {
                    r = Us(t, n);
                    const e = ()=>{
                            Ws[n.id] || (i(s.takeRecords()),
                                s.disconnect(),
                                Ws[n.id] = !0,
                                r(!0))
                        }
                    ;
                    return ["keydown", "click"].forEach((t=>{
                            addEventListener(t, e, {
                                once: !0,
                                capture: !0
                            })
                        }
                    )),
                        Cs(e, !0),
                        e
                }
            }
        ;
        var zs = Object.defineProperty
            , Ks = Object.getOwnPropertySymbols
            , Vs = Object.prototype.hasOwnProperty
            , Xs = Object.prototype.propertyIsEnumerable
            , Zs = (t,e,n)=>e in t ? zs(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , Qs = (t,e)=>{
                for (var n in e || (e = {}))
                    Vs.call(e, n) && Zs(t, n, e[n]);
                if (Ks)
                    for (var n of Ks(e))
                        Xs.call(e, n) && Zs(t, n, e[n]);
                return t
            }
            , to = (t,e)=>{
                var n = {};
                for (var r in t)
                    Vs.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && Ks)
                    for (var r of Ks(t))
                        e.indexOf(r) < 0 && Xs.call(t, r) && (n[r] = t[r]);
                return n
            }
        ;
        let eo, no, ro = 0, io = {};
        var so = t(9866)
            , oo = Object.defineProperty
            , ao = Object.defineProperties
            , co = Object.getOwnPropertyDescriptors
            , uo = Object.getOwnPropertySymbols
            , lo = Object.prototype.hasOwnProperty
            , po = Object.prototype.propertyIsEnumerable
            , _o = (t,e,n)=>e in t ? oo(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , fo = (t,e)=>{
            for (var n in e || (e = {}))
                lo.call(e, n) && _o(t, n, e[n]);
            if (uo)
                for (var n of uo(e))
                    po.call(e, n) && _o(t, n, e[n]);
            return t
        }
            , ho = (t,e)=>ao(t, co(e));
        const go = ["localhost", /^\/(?!\/)/]
            , mo = {
            traceFetch: !0,
            traceXHR: !0,
            tracingOrigins: go,
            tracePropagationTargets: go
        };
        var yo = Object.defineProperty
            , Eo = Object.defineProperties
            , bo = Object.getOwnPropertyDescriptors
            , vo = Object.getOwnPropertySymbols
            , So = Object.prototype.hasOwnProperty
            , To = Object.prototype.propertyIsEnumerable
            , Oo = (t,e,n)=>e in t ? yo(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[e] = n
            , Ro = (t,e)=>{
            for (var n in e || (e = {}))
                So.call(e, n) && Oo(t, n, e[n]);
            if (vo)
                for (var n of vo(e))
                    To.call(e, n) && Oo(t, n, e[n]);
            return t
        }
            , Do = (t,e)=>Eo(t, bo(e));
        const wo = "BrowserTracing"
            , ko = Ro(Do(Ro({}, ms.AT), {
            markBackgroundTransactions: !0,
            routingInstrumentation: Le,
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            _experiments: {}
        }), mo);
        class No {
            __init() {
                this.name = wo
            }
            constructor(t) {
                No.prototype.__init.call(this),
                    (0,
                        ys.T)(),
                    this.options = Ro(Ro({}, ko), t),
                void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask),
                t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins),
                    this._collectWebVitals = Te(),
                this.options.enableLongTask && Oe(),
                this.options._experiments.enableInteractions && Re()
            }
            setupOnce(t, e) {
                this._getCurrentHub = e;
                const {routingInstrumentation: n, startTransactionOnLocationChange: r, startTransactionOnPageLoad: i, markBackgroundTransactions: s, traceFetch: o, traceXHR: a, tracePropagationTargets: c, shouldCreateSpanForRequest: u, _experiments: l} = this.options;
                n((t=>{
                        const n = this._createRouteTransaction(t);
                        return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e),
                            n
                    }
                ), i, r),
                s && ye(),
                l.enableInteractions && this._registerInteractionListener(),
                    Ie({
                        traceFetch: o,
                        traceXHR: a,
                        tracePropagationTargets: c,
                        shouldCreateSpanForRequest: u
                    })
            }
            _createRouteTransaction(t) {
                if (!this._getCurrentHub)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`));
                const {beforeNavigate: e, idleTimeout: n, finalTimeout: r, heartbeatInterval: i} = this.options
                    , s = "pageload" === t.op
                    , o = s ? qe("sentry-trace") : null
                    , a = s ? qe("baggage") : null
                    , c = o ? de(o) : void 0
                    , u = a ? fe(a) : void 0
                    , l = Do(Ro(Ro({}, t), c), {
                    metadata: Do(Ro({}, t.metadata), {
                        dynamicSamplingContext: c && !u ? {} : u
                    }),
                    trimEnd: !0
                })
                    , p = "function" == typeof e ? e(l) : l
                    , _ = void 0 === p ? Do(Ro({}, l), {
                    sampled: !1
                }) : p;
                _.metadata = _.name !== l.name ? Do(Ro({}, _.metadata), {
                    source: "custom"
                }) : _.metadata,
                    this._latestRouteName = _.name,
                    this._latestRouteSource = _.metadata && _.metadata.source,
                !1 === _.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(`[Tracing] Will not send ${_.op} transaction because of beforeNavigate.`),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log(`[Tracing] Starting ${_.op} transaction on scope`);
                const d = this._getCurrentHub()
                    , {location: f} = js
                    , h = (0,
                    ys.l)(d, _, n, r, !0, {
                    location: f
                }, i);
                return h.registerBeforeFinishCallback((t=>{
                        this._collectWebVitals(),
                            Ne(t)
                    }
                )),
                    h
            }
            _registerInteractionListener() {
                let t;
                const e = ()=>{
                        const {idleTimeout: e, finalTimeout: n, heartbeatInterval: r} = this.options
                            , i = "ui.action.click"
                            , s = (0,
                            bs.x1)();
                        if (s && s.op && ["navigation", "pageload"].includes(s.op))
                            return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`[Tracing] Did not create ${i} transaction because a pageload or navigation transaction is in progress.`));
                        if (t && (t.setFinishReason("interactionInterrupted"),
                            t.finish(),
                            t = void 0),
                            !this._getCurrentHub)
                            return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`[Tracing] Did not create ${i} transaction because _getCurrentHub is invalid.`));
                        if (!this._latestRouteName)
                            return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`[Tracing] Did not create ${i} transaction because _latestRouteName is missing.`));
                        const o = this._getCurrentHub()
                            , {location: a} = js
                            , c = {
                            name: this._latestRouteName,
                            op: i,
                            trimEnd: !0,
                            metadata: {
                                source: this._latestRouteSource || "url"
                            }
                        };
                        t = (0,
                            ys.l)(o, c, e, n, !0, {
                            location: a
                        }, r)
                    }
                ;
                ["click"].forEach((t=>{
                        addEventListener(t, e, {
                            once: !1,
                            capture: !0
                        })
                    }
                ))
            }
        }
        var xo = t(7108);
        class jo {
            static __initStatic() {
                this.id = "Apollo"
            }
            __init() {
                this.name = jo.id
            }
            constructor(t={
                useNestjs: !1
            }) {
                jo.prototype.__init.call(this),
                    this._useNest = !!t.useNestjs
            }
            loadDependency() {
                return this._useNest ? this._module = this._module || (0,
                    xo.$y)("@nestjs/graphql") : this._module = this._module || (0,
                    xo.$y)("apollo-server-core"),
                    this._module
            }
            setupOnce(t, e) {
                if (Fe(e))
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("Apollo Integration is skipped because of instrumenter configuration.");
                else if (this._useNest) {
                    const t = this.loadDependency();
                    if (!t)
                        return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package."));
                    (0,
                        dn.hl)(t.GraphQLFactory.prototype, "mergeWithSchema", (function(t) {
                            return function(...n) {
                                return (0,
                                    dn.hl)(this.resolversExplorerService, "explore", (function(t) {
                                        return function() {
                                            return We((0,
                                                cn.lE)(t.call(this)), e)
                                        }
                                    }
                                )),
                                    t.call(this, ...n)
                            }
                        }
                    ))
                } else {
                    const t = this.loadDependency();
                    if (!t)
                        return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("Apollo Integration was unable to require apollo-server-core package."));
                    (0,
                        dn.hl)(t.ApolloServerBase.prototype, "constructSchema", (function(t) {
                            return function() {
                                if (!this.config.resolvers)
                                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this.config.schema ? (an.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."),
                                        an.kg.warn()) : this.config.modules && an.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."),
                                        an.kg.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")),
                                        t.call(this);
                                const n = (0,
                                    cn.lE)(this.config.resolvers);
                                return this.config.resolvers = We(n, e),
                                    t.call(this)
                            }
                        }
                    ))
                }
            }
        }
        jo.__initStatic();
        Object.defineProperty,
            Object.defineProperties,
            Object.getOwnPropertyDescriptors,
            Object.getOwnPropertySymbols,
            Object.prototype.hasOwnProperty,
            Object.prototype.propertyIsEnumerable;
        class Uo {
            static __initStatic() {
                this.id = "Express"
            }
            __init() {
                this.name = Uo.id
            }
            constructor(t={}) {
                Uo.prototype.__init.call(this),
                    this._router = t.router || t.app,
                    this._methods = (Array.isArray(t.methods) ? t.methods : []).concat("use")
            }
            setupOnce(t, e) {
                this._router ? Fe(e) ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("Express Integration is skipped because of instrumenter configuration.") : (Ze(this._router, this._methods),
                    Qe(this._router)) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("ExpressIntegration is missing an Express instance")
            }
        }
        Uo.__initStatic();
        class Go {
            constructor() {
                Go.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "GraphQL"
            }
            __init() {
                this.name = Go.id
            }
            loadDependency() {
                return this._module = this._module || (0,
                    xo.$y)("graphql/execution/execute.js")
            }
            setupOnce(t, e) {
                if (Fe(e))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("GraphQL Integration is skipped because of instrumenter configuration."));
                const n = this.loadDependency();
                n ? (0,
                    dn.hl)(n, "execute", (function(t) {
                        return function(...n) {
                            const r = e().getScope()
                                , i = He([r, "optionalAccess", t=>t.getSpan, "call", t=>t()])
                                , s = He([i, "optionalAccess", t=>t.startChild, "call", t=>t({
                                description: "execute",
                                op: "graphql.execute"
                            })]);
                            He([r, "optionalAccess", t=>t.setSpan, "call", t=>t(s)]);
                            const o = t.call(this, ...n);
                            return (0,
                                Tn.J8)(o) ? o.then((t=>(He([s, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                He([r, "optionalAccess", t=>t.setSpan, "call", t=>t(i)]),
                                t))) : (He([s, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                He([r, "optionalAccess", t=>t.setSpan, "call", t=>t(i)]),
                                o)
                        }
                    }
                )) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("GraphQL Integration was unable to require graphql/execution package.")
            }
        }
        Go.__initStatic();
        const Bo = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"]
            , Yo = {
            bulkWrite: ["operations"],
            countDocuments: ["query"],
            createIndex: ["fieldOrSpec"],
            createIndexes: ["indexSpecs"],
            deleteMany: ["filter"],
            deleteOne: ["filter"],
            distinct: ["key", "query"],
            dropIndex: ["indexName"],
            find: ["query"],
            findOne: ["query"],
            findOneAndDelete: ["filter"],
            findOneAndReplace: ["filter", "replacement"],
            findOneAndUpdate: ["filter", "update"],
            indexExists: ["indexes"],
            insertMany: ["docs"],
            insertOne: ["doc"],
            mapReduce: ["map", "reduce"],
            rename: ["newName"],
            replaceOne: ["filter", "doc"],
            updateMany: ["filter", "update"],
            updateOne: ["filter", "update"]
        };
        class Po {
            static __initStatic() {
                this.id = "Mongo"
            }
            __init() {
                this.name = Po.id
            }
            constructor(t={}) {
                Po.prototype.__init.call(this),
                    this._operations = Array.isArray(t.operations) ? t.operations : Bo,
                    this._describeOperations = !("describeOperations"in t) || t.describeOperations,
                    this._useMongoose = !!t.useMongoose
            }
            loadDependency() {
                const t = this._useMongoose ? "mongoose" : "mongodb";
                return this._module = this._module || (0,
                    xo.$y)(t)
            }
            setupOnce(t, e) {
                if (Fe(e))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("Mongo Integration is skipped because of instrumenter configuration."));
                const n = this.loadDependency();
                if (n)
                    this._instrumentOperations(n.Collection, this._operations, e);
                else {
                    const t = this._useMongoose ? "mongoose" : "mongodb";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error(`Mongo Integration was unable to require \`${t}\` package.`)
                }
            }
            _instrumentOperations(t, e, n) {
                e.forEach((e=>this._patchOperation(t, e, n)))
            }
            _patchOperation(t, e, n) {
                if (!(e in t.prototype))
                    return;
                const r = this._getSpanContextFromOperationArguments.bind(this);
                (0,
                    dn.hl)(t.prototype, e, (function(t) {
                        return function(...i) {
                            const s = i[i.length - 1]
                                , o = He([n().getScope(), "optionalAccess", t=>t.getSpan, "call", t=>t()]);
                            if ("function" != typeof s || "mapReduce" === e && 2 === i.length) {
                                const n = He([o, "optionalAccess", t=>t.startChild, "call", t=>t(r(this, e, i))])
                                    , s = t.call(this, ...i);
                                if ((0,
                                    Tn.J8)(s))
                                    return s.then((t=>(He([n, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                        t)));
                                if (rn(s)) {
                                    const t = s;
                                    try {
                                        t.once("close", (()=>{
                                                He([n, "optionalAccess", t=>t.finish, "call", t=>t()])
                                            }
                                        ))
                                    } catch (t) {
                                        He([n, "optionalAccess", t=>t.finish, "call", t=>t()])
                                    }
                                    return t
                                }
                                return He([n, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                    s
                            }
                            const a = He([o, "optionalAccess", t=>t.startChild, "call", t=>t(r(this, e, i.slice(0, -1)))]);
                            return t.call(this, ...i.slice(0, -1), (function(t, e) {
                                    He([a, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                        s(t, e)
                                }
                            ))
                        }
                    }
                ))
            }
            _getSpanContextFromOperationArguments(t, e, n) {
                const r = {
                    collectionName: t.collectionName,
                    dbName: t.dbName,
                    namespace: t.namespace,
                    "db.system": "mongodb"
                }
                    , i = {
                    op: "db",
                    description: e,
                    data: r
                }
                    , s = Yo[e]
                    , o = Array.isArray(this._describeOperations) ? this._describeOperations.includes(e) : this._describeOperations;
                if (!s || !o)
                    return i;
                try {
                    if ("mapReduce" === e) {
                        const [t,e] = n;
                        r[s[0]] = "string" == typeof t ? t : t.name || "<anonymous>",
                            r[s[1]] = "string" == typeof e ? e : e.name || "<anonymous>"
                    } else
                        for (let t = 0; t < s.length; t++)
                            r[s[t]] = JSON.stringify(n[t])
                } catch (t) {}
                return i
            }
        }
        Po.__initStatic();
        class Io {
            constructor() {
                Io.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "Mysql"
            }
            __init() {
                this.name = Io.id
            }
            loadDependency() {
                return this._module = this._module || (0,
                    xo.$y)("mysql/lib/Connection.js")
            }
            setupOnce(t, e) {
                if (Fe(e))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("Mysql Integration is skipped because of instrumenter configuration."));
                const n = this.loadDependency();
                n ? (0,
                    dn.hl)(n, "createQuery", (function(t) {
                        return function(n, r, i) {
                            const s = He([e().getScope(), "optionalAccess", t=>t.getSpan, "call", t=>t()])
                                , o = He([s, "optionalAccess", t=>t.startChild, "call", t=>t({
                                description: "string" == typeof n ? n : n.sql,
                                op: "db",
                                data: {
                                    "db.system": "mysql"
                                }
                            })]);
                            return "function" == typeof i ? t.call(this, n, r, (function(t, e, n) {
                                    He([o, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                        i(t, e, n)
                                }
                            )) : "function" == typeof r ? t.call(this, n, (function(t, e, n) {
                                    He([o, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                        r(t, e, n)
                                }
                            )) : t.call(this, n, r, i)
                        }
                    }
                )) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("Mysql Integration was unable to require `mysql` package.")
            }
        }
        Io.__initStatic();
        class $o {
            static __initStatic() {
                this.id = "Postgres"
            }
            __init() {
                this.name = $o.id
            }
            constructor(t={}) {
                $o.prototype.__init.call(this),
                    this._usePgNative = !!t.usePgNative
            }
            loadDependency() {
                return this._module = this._module || (0,
                    xo.$y)("pg")
            }
            setupOnce(t, e) {
                if (Fe(e))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("Postgres Integration is skipped because of instrumenter configuration."));
                const n = this.loadDependency();
                if (!n)
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("Postgres Integration was unable to require `pg` package."));
                if (this._usePgNative && !He([n, "access", t=>t.native, "optionalAccess", t=>t.Client]))
                    return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("Postgres Integration was unable to access 'pg-native' bindings."));
                const {Client: r} = this._usePgNative ? n.native : n;
                (0,
                    dn.hl)(r.prototype, "query", (function(t) {
                        return function(n, r, i) {
                            const s = He([e().getScope(), "optionalAccess", t=>t.getSpan, "call", t=>t()])
                                , o = He([s, "optionalAccess", t=>t.startChild, "call", t=>t({
                                description: "string" == typeof n ? n : n.text,
                                op: "db",
                                data: {
                                    "db.system": "postgresql"
                                }
                            })]);
                            if ("function" == typeof i)
                                return t.call(this, n, r, (function(t, e) {
                                        He([o, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                            i(t, e)
                                    }
                                ));
                            if ("function" == typeof r)
                                return t.call(this, n, (function(t, e) {
                                        He([o, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                            r(t, e)
                                    }
                                ));
                            const a = void 0 !== r ? t.call(this, n, r) : t.call(this, n);
                            return (0,
                                Tn.J8)(a) ? a.then((t=>(He([o, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                t))) : (He([o, "optionalAccess", t=>t.finish, "call", t=>t()]),
                                a)
                        }
                    }
                ))
            }
        }
        $o.__initStatic();
        var Co = Object.defineProperty
            , Ao = Object.getOwnPropertySymbols
            , Mo = Object.prototype.hasOwnProperty
            , Lo = Object.prototype.propertyIsEnumerable
            , qo = (t,e,n)=>e in t ? Co(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
            , Ho = (t,e)=>{
                for (var n in e || (e = {}))
                    Mo.call(e, n) && qo(t, n, e[n]);
                if (Ao)
                    for (var n of Ao(e))
                        Lo.call(e, n) && qo(t, n, e[n]);
                return t
            }
        ;
        class Fo {
            static __initStatic() {
                this.id = "Prisma"
            }
            __init() {
                this.name = Fo.id
            }
            constructor(t={}) {
                Fo.prototype.__init.call(this),
                    on(t.client) ? this._client = t.client : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(t.client)}`)
            }
            setupOnce(t, e) {
                this._client ? Fe(e) ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.log("Prisma Integration is skipped because of instrumenter configuration.") : this._client.$use(((t,e)=>{
                        const n = t.action
                            , r = t.model;
                        return sn({
                            name: r ? `${r} ${n}` : n,
                            op: "db.sql.prisma",
                            data: {
                                "db.system": "prisma"
                            }
                        }, (()=>e(t)))
                    }
                )) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && an.kg.error("PrismaIntegration is missing a Prisma Client Instance")
            }
        }
        Fo.__initStatic();
        var Wo = t(4057);
        const Jo = No;
        ("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && (0,
            Wo.r)(),
            le({
                dsn: "https://9aa813134b4a4cd2a5700ace36241a58@o1090356.ingest.sentry.io/6298540",
                integrations: [new Jo],
                tracesSampleRate: .02,
                ignoreErrors: ["top.GLOBALS", "VK is", "VK.Retargeting is ", "Can't find variable: VK", "pktAnnotationHighlighter", "Unexpected keyword", "illegal character", "Unexpected identifier", "Illegal invocation", "missing = in const declaration"],
                allowUrls: [/https?:\/\/((cdn|cdn2|ru)\.)?code-basics.com/],
                beforeSend(t, e) {
                    var n;
                    const r = ((null == (n = null == e ? void 0 : e.originalException) ? void 0 : n.stack) || "").split("\n").map((t=>t.trim())).find((t=>t.startsWith("at")));
                    return r && r.includes("<anonymous>:") ? null : t
                }
            })
    }()
}();
