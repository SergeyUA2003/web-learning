!function() {
    function t(a) {
        var r = n[a];
        if (void 0 !== r)
            return r.exports;
        var o = n[a] = {
            exports: {}
        };
        return e[a].call(o.exports, o, o.exports, t),
            o.exports
    }
    var e = {
        5034: function(t, e, n) {
            var a, r;
            (function() {
                    var o = this;
                    (function() {
                            (function() {
                                    this.Rails = {
                                        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
                                        buttonClickSelector: {
                                            selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                                            exclude: "form button"
                                        },
                                        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                                        formSubmitSelector: "form:not([data-turbo=true])",
                                        formInputClickSelector: "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                                        formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                                        formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                                        fileInputSelector: "input[name][type=file]:not([disabled])",
                                        linkDisableSelector: "a[data-disable-with], a[data-disable]",
                                        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
                                    }
                                }
                            ).call(this)
                        }
                    ).call(o);
                    var i = o.Rails;
                    (function() {
                            (function() {
                                    var t;
                                    t = null,
                                        i.loadCSPNonce = function() {
                                            var e;
                                            return t = null != (e = document.querySelector("meta[name=csp-nonce]")) ? e.content : void 0
                                        }
                                        ,
                                        i.cspNonce = function() {
                                            return null != t ? t : i.loadCSPNonce()
                                        }
                                }
                            ).call(this),
                                function() {
                                    var t, e;
                                    e = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector,
                                        i.matches = function(t, n) {
                                            return null != n.exclude ? e.call(t, n.selector) && !e.call(t, n.exclude) : e.call(t, n)
                                        }
                                        ,
                                        t = "_ujsData",
                                        i.getData = function(e, n) {
                                            var a;
                                            return null != (a = e[t]) ? a[n] : void 0
                                        }
                                        ,
                                        i.setData = function(e, n, a) {
                                            return null == e[t] && (e[t] = {}),
                                                e[t][n] = a
                                        }
                                        ,
                                        i.isContentEditable = function(t) {
                                            var e;
                                            for (e = !1; ; ) {
                                                if (t.isContentEditable) {
                                                    e = !0;
                                                    break
                                                }
                                                if (!(t = t.parentElement))
                                                    break
                                            }
                                            return e
                                        }
                                        ,
                                        i.$ = function(t) {
                                            return Array.prototype.slice.call(document.querySelectorAll(t))
                                        }
                                }
                                    .call(this),
                                function() {
                                    var t, e, n;
                                    t = i.$,
                                        n = i.csrfToken = function() {
                                            var t;
                                            return (t = document.querySelector("meta[name=csrf-token]")) && t.content
                                        }
                                        ,
                                        e = i.csrfParam = function() {
                                            var t;
                                            return (t = document.querySelector("meta[name=csrf-param]")) && t.content
                                        }
                                        ,
                                        i.CSRFProtection = function(t) {
                                            var e;
                                            if (null != (e = n()))
                                                return t.setRequestHeader("X-CSRF-Token", e)
                                        }
                                        ,
                                        i.refreshCSRFTokens = function() {
                                            var a, r;
                                            if (r = n(),
                                                a = e(),
                                            null != r && null != a)
                                                return t('form input[name="' + a + '"]').forEach((function(t) {
                                                        return t.value = r
                                                    }
                                                ))
                                        }
                                }
                                    .call(this),
                                function() {
                                    var t, e, n, a;
                                    n = i.matches,
                                    "function" != typeof (t = window.CustomEvent) && ((t = function(t, e) {
                                                var n;
                                                return (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
                                                    n
                                            }
                                        ).prototype = window.Event.prototype,
                                            a = t.prototype.preventDefault,
                                            t.prototype.preventDefault = function() {
                                                var t;
                                                return t = a.call(this),
                                                this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
                                                    get: function() {
                                                        return !0
                                                    }
                                                }),
                                                    t
                                            }
                                    ),
                                        e = i.fire = function(e, n, a) {
                                            var r;
                                            return r = new t(n,{
                                                bubbles: !0,
                                                cancelable: !0,
                                                detail: a
                                            }),
                                                e.dispatchEvent(r),
                                                !r.defaultPrevented
                                        }
                                        ,
                                        i.stopEverything = function(t) {
                                            return e(t.target, "ujs:everythingStopped"),
                                                t.preventDefault(),
                                                t.stopPropagation(),
                                                t.stopImmediatePropagation()
                                        }
                                        ,
                                        i.delegate = function(t, e, a, r) {
                                            return t.addEventListener(a, (function(t) {
                                                    var a;
                                                    for (a = t.target; a instanceof Element && !n(a, e); )
                                                        a = a.parentNode;
                                                    if (a instanceof Element && !1 === r.call(a, t))
                                                        return t.preventDefault(),
                                                            t.stopPropagation()
                                                }
                                            ))
                                        }
                                }
                                    .call(this),
                                function() {
                                    var t, e, n, a, r, o;
                                    a = i.cspNonce,
                                        e = i.CSRFProtection,
                                        i.fire,
                                        t = {
                                            "*": "*/*",
                                            text: "text/plain",
                                            html: "text/html",
                                            xml: "application/xml, text/xml",
                                            json: "application/json, text/javascript",
                                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                                        },
                                        i.ajax = function(t) {
                                            var e;
                                            return t = r(t),
                                                e = n(t, (function() {
                                                        var n, a;
                                                        return a = o(null != (n = e.response) ? n : e.responseText, e.getResponseHeader("Content-Type")),
                                                            2 === Math.floor(e.status / 100) ? "function" == typeof t.success && t.success(a, e.statusText, e) : "function" == typeof t.error && t.error(a, e.statusText, e),
                                                            "function" == typeof t.complete ? t.complete(e, e.statusText) : void 0
                                                    }
                                                )),
                                            !(null != t.beforeSend && !t.beforeSend(e, t)) && (e.readyState === XMLHttpRequest.OPENED ? e.send(t.data) : void 0)
                                        }
                                        ,
                                        r = function(e) {
                                            return e.url = e.url || location.href,
                                                e.type = e.type.toUpperCase(),
                                            "GET" === e.type && e.data && (e.url.indexOf("?") < 0 ? e.url += "?" + e.data : e.url += "&" + e.data),
                                            null == t[e.dataType] && (e.dataType = "*"),
                                                e.accept = t[e.dataType],
                                            "*" !== e.dataType && (e.accept += ", */*; q=0.01"),
                                                e
                                        }
                                        ,
                                        n = function(t, n) {
                                            var a;
                                            return (a = new XMLHttpRequest).open(t.type, t.url, !0),
                                                a.setRequestHeader("Accept", t.accept),
                                            "string" == typeof t.data && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                                            t.crossDomain || (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                                                e(a)),
                                                a.withCredentials = !!t.withCredentials,
                                                a.onreadystatechange = function() {
                                                    if (a.readyState === XMLHttpRequest.DONE)
                                                        return n(a)
                                                }
                                                ,
                                                a
                                        }
                                        ,
                                        o = function(t, e) {
                                            var n, r;
                                            if ("string" == typeof t && "string" == typeof e)
                                                if (e.match(/\bjson\b/))
                                                    try {
                                                        t = JSON.parse(t)
                                                    } catch (t) {}
                                                else if (e.match(/\b(?:java|ecma)script\b/))
                                                    (r = document.createElement("script")).setAttribute("nonce", a()),
                                                        r.text = t,
                                                        document.head.appendChild(r).parentNode.removeChild(r);
                                                else if (e.match(/\b(xml|html|svg)\b/)) {
                                                    n = new DOMParser,
                                                        e = e.replace(/;.+/, "");
                                                    try {
                                                        t = n.parseFromString(t, e)
                                                    } catch (t) {}
                                                }
                                            return t
                                        }
                                        ,
                                        i.href = function(t) {
                                            return t.href
                                        }
                                        ,
                                        i.isCrossDomain = function(t) {
                                            var e, n;
                                            (e = document.createElement("a")).href = location.href,
                                                n = document.createElement("a");
                                            try {
                                                return n.href = t,
                                                    !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                                            } catch (t) {
                                                return t,
                                                    !0
                                            }
                                        }
                                }
                                    .call(this),
                                function() {
                                    var t, e;
                                    t = i.matches,
                                        e = function(t) {
                                            return Array.prototype.slice.call(t)
                                        }
                                        ,
                                        i.serializeElement = function(n, a) {
                                            var r, o;
                                            return r = [n],
                                            t(n, "form") && (r = e(n.elements)),
                                                o = [],
                                                r.forEach((function(n) {
                                                        if (n.name && !n.disabled && !t(n, "fieldset[disabled] *")) {
                                                            if (t(n, "select"))
                                                                return e(n.options).forEach((function(t) {
                                                                        if (t.selected)
                                                                            return o.push({
                                                                                name: n.name,
                                                                                value: t.value
                                                                            })
                                                                    }
                                                                ));
                                                            if (n.checked || -1 === ["radio", "checkbox", "submit"].indexOf(n.type))
                                                                return o.push({
                                                                    name: n.name,
                                                                    value: n.value
                                                                })
                                                        }
                                                    }
                                                )),
                                            a && o.push(a),
                                                o.map((function(t) {
                                                        return null != t.name ? encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value) : t
                                                    }
                                                )).join("&")
                                        }
                                        ,
                                        i.formElements = function(n, a) {
                                            return t(n, "form") ? e(n.elements).filter((function(e) {
                                                    return t(e, a)
                                                }
                                            )) : e(n.querySelectorAll(a))
                                        }
                                }
                                    .call(this),
                                function() {
                                    var t, e, n;
                                    e = i.fire,
                                        n = i.stopEverything,
                                        i.handleConfirm = function(e) {
                                            if (!t(this))
                                                return n(e)
                                        }
                                        ,
                                        i.confirm = function(t) {
                                            return confirm(t)
                                        }
                                        ,
                                        t = function(t) {
                                            var n, a, r;
                                            if (!(r = t.getAttribute("data-confirm")))
                                                return !0;
                                            if (n = !1,
                                                e(t, "confirm")) {
                                                try {
                                                    n = i.confirm(r, t)
                                                } catch (t) {}
                                                a = e(t, "confirm:complete", [n])
                                            }
                                            return n && a
                                        }
                                }
                                    .call(this),
                                function() {
                                    var t, e, n, a, r, o, l, u, c, s, d, m, f;
                                    d = i.matches,
                                        u = i.getData,
                                        m = i.setData,
                                        f = i.stopEverything,
                                        l = i.formElements,
                                        c = i.isContentEditable,
                                        i.handleDisabledElement = function(t) {
                                            if (this.disabled)
                                                return f(t)
                                        }
                                        ,
                                        i.enableElement = function(t) {
                                            var e;
                                            if (t instanceof Event) {
                                                if (s(t))
                                                    return;
                                                e = t.target
                                            } else
                                                e = t;
                                            if (!c(e)) {
                                                if (d(e, i.linkDisableSelector))
                                                    return o(e);
                                                if (d(e, i.buttonDisableSelector) || d(e, i.formEnableSelector))
                                                    return a(e);
                                                if (d(e, i.formSubmitSelector))
                                                    return r(e)
                                            }
                                        }
                                        ,
                                        i.disableElement = function(a) {
                                            var r;
                                            if (r = a instanceof Event ? a.target : a,
                                                !c(r)) {
                                                if (d(r, i.linkDisableSelector))
                                                    return n(r);
                                                if (d(r, i.buttonDisableSelector) || d(r, i.formDisableSelector))
                                                    return t(r);
                                                if (d(r, i.formSubmitSelector))
                                                    return e(r)
                                            }
                                        }
                                        ,
                                        n = function(t) {
                                            var e;
                                            if (!u(t, "ujs:disabled"))
                                                return null != (e = t.getAttribute("data-disable-with")) && (m(t, "ujs:enable-with", t.innerHTML),
                                                    t.innerHTML = e),
                                                    t.addEventListener("click", f),
                                                    m(t, "ujs:disabled", !0)
                                        }
                                        ,
                                        o = function(t) {
                                            var e;
                                            return null != (e = u(t, "ujs:enable-with")) && (t.innerHTML = e,
                                                m(t, "ujs:enable-with", null)),
                                                t.removeEventListener("click", f),
                                                m(t, "ujs:disabled", null)
                                        }
                                        ,
                                        e = function(e) {
                                            return l(e, i.formDisableSelector).forEach(t)
                                        }
                                        ,
                                        t = function(t) {
                                            var e;
                                            if (!u(t, "ujs:disabled"))
                                                return null != (e = t.getAttribute("data-disable-with")) && (d(t, "button") ? (m(t, "ujs:enable-with", t.innerHTML),
                                                    t.innerHTML = e) : (m(t, "ujs:enable-with", t.value),
                                                    t.value = e)),
                                                    t.disabled = !0,
                                                    m(t, "ujs:disabled", !0)
                                        }
                                        ,
                                        r = function(t) {
                                            return l(t, i.formEnableSelector).forEach(a)
                                        }
                                        ,
                                        a = function(t) {
                                            var e;
                                            return null != (e = u(t, "ujs:enable-with")) && (d(t, "button") ? t.innerHTML = e : t.value = e,
                                                m(t, "ujs:enable-with", null)),
                                                t.disabled = !1,
                                                m(t, "ujs:disabled", null)
                                        }
                                        ,
                                        s = function(t) {
                                            var e, n;
                                            return null != (null != (n = null != (e = t.detail) ? e[0] : void 0) ? n.getResponseHeader("X-Xhr-Redirect") : void 0)
                                        }
                                }
                                    .call(this),
                                function() {
                                    var t, e;
                                    e = i.stopEverything,
                                        t = i.isContentEditable,
                                        i.handleMethod = function(n) {
                                            var a, r, o, l, u, c, s;
                                            if ((s = (c = this).getAttribute("data-method")) && !t(this))
                                                return u = i.href(c),
                                                    r = i.csrfToken(),
                                                    a = i.csrfParam(),
                                                    o = document.createElement("form"),
                                                    l = "<input name='_method' value='" + s + "' type='hidden' />",
                                                null != a && null != r && !i.isCrossDomain(u) && (l += "<input name='" + a + "' value='" + r + "' type='hidden' />"),
                                                    l += '<input type="submit" />',
                                                    o.method = "post",
                                                    o.action = u,
                                                    o.target = c.target,
                                                    o.innerHTML = l,
                                                    o.style.display = "none",
                                                    document.body.appendChild(o),
                                                    o.querySelector('[type="submit"]').click(),
                                                    e(n)
                                        }
                                }
                                    .call(this),
                                function() {
                                    var t, e, n, a, r, o, l, u, c, s, d = [].slice;
                                    l = i.matches,
                                        n = i.getData,
                                        c = i.setData,
                                        e = i.fire,
                                        s = i.stopEverything,
                                        t = i.ajax,
                                        r = i.isCrossDomain,
                                        u = i.serializeElement,
                                        a = i.isContentEditable,
                                        o = function(t) {
                                            var e;
                                            return null != (e = t.getAttribute("data-remote")) && "false" !== e
                                        }
                                        ,
                                        i.handleRemote = function(m) {
                                            var f, p, b, h, v, S, y;
                                            return !o(h = this) || (!e(h, "ajax:before") || a(h) ? (e(h, "ajax:stopped"),
                                                !1) : (y = h.getAttribute("data-with-credentials"),
                                                b = h.getAttribute("data-type") || "script",
                                                l(h, i.formSubmitSelector) ? (f = n(h, "ujs:submit-button"),
                                                    v = n(h, "ujs:submit-button-formmethod") || h.method,
                                                    S = n(h, "ujs:submit-button-formaction") || h.getAttribute("action") || location.href,
                                                "GET" === v.toUpperCase() && (S = S.replace(/\?.*$/, "")),
                                                    "multipart/form-data" === h.enctype ? (p = new FormData(h),
                                                    null != f && p.append(f.name, f.value)) : p = u(h, f),
                                                    c(h, "ujs:submit-button", null),
                                                    c(h, "ujs:submit-button-formmethod", null),
                                                    c(h, "ujs:submit-button-formaction", null)) : l(h, i.buttonClickSelector) || l(h, i.inputChangeSelector) ? (v = h.getAttribute("data-method"),
                                                    S = h.getAttribute("data-url"),
                                                    p = u(h, h.getAttribute("data-params"))) : (v = h.getAttribute("data-method"),
                                                    S = i.href(h),
                                                    p = h.getAttribute("data-params")),
                                                t({
                                                    type: v || "GET",
                                                    url: S,
                                                    data: p,
                                                    dataType: b,
                                                    beforeSend: function(t, n) {
                                                        return e(h, "ajax:beforeSend", [t, n]) ? e(h, "ajax:send", [t]) : (e(h, "ajax:stopped"),
                                                            !1)
                                                    },
                                                    success: function() {
                                                        var t;
                                                        return t = 1 <= arguments.length ? d.call(arguments, 0) : [],
                                                            e(h, "ajax:success", t)
                                                    },
                                                    error: function() {
                                                        var t;
                                                        return t = 1 <= arguments.length ? d.call(arguments, 0) : [],
                                                            e(h, "ajax:error", t)
                                                    },
                                                    complete: function() {
                                                        var t;
                                                        return t = 1 <= arguments.length ? d.call(arguments, 0) : [],
                                                            e(h, "ajax:complete", t)
                                                    },
                                                    crossDomain: r(S),
                                                    withCredentials: null != y && "false" !== y
                                                }),
                                                s(m)))
                                        }
                                        ,
                                        i.formSubmitButtonClick = function() {
                                            var t, e;
                                            if (e = (t = this).form)
                                                return t.name && c(e, "ujs:submit-button", {
                                                    name: t.name,
                                                    value: t.value
                                                }),
                                                    c(e, "ujs:formnovalidate-button", t.formNoValidate),
                                                    c(e, "ujs:submit-button-formaction", t.getAttribute("formaction")),
                                                    c(e, "ujs:submit-button-formmethod", t.getAttribute("formmethod"))
                                        }
                                        ,
                                        i.preventInsignificantClick = function(t) {
                                            var e, n, a, r;
                                            if (r = ((a = this).getAttribute("data-method") || "GET").toUpperCase(),
                                                e = a.getAttribute("data-params"),
                                                n = (t.metaKey || t.ctrlKey) && "GET" === r && !e,
                                            null != t.button && 0 !== t.button || n)
                                                return t.stopImmediatePropagation()
                                        }
                                }
                                    .call(this),
                                function() {
                                    var t, e, n, a, r, o, l, u, c, s, d, m, f, p, b;
                                    if (o = i.fire,
                                        n = i.delegate,
                                        u = i.getData,
                                        t = i.$,
                                        b = i.refreshCSRFTokens,
                                        e = i.CSRFProtection,
                                        f = i.loadCSPNonce,
                                        r = i.enableElement,
                                        a = i.disableElement,
                                        s = i.handleDisabledElement,
                                        c = i.handleConfirm,
                                        p = i.preventInsignificantClick,
                                        m = i.handleRemote,
                                        l = i.formSubmitButtonClick,
                                        d = i.handleMethod,
                                    "undefined" != typeof jQuery && null !== jQuery && null != jQuery.ajax) {
                                        if (jQuery.rails)
                                            throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
                                        jQuery.rails = i,
                                            jQuery.ajaxPrefilter((function(t, n, a) {
                                                    if (!t.crossDomain)
                                                        return e(a)
                                                }
                                            ))
                                    }
                                    i.start = function() {
                                        if (window._rails_loaded)
                                            throw new Error("rails-ujs has already been loaded!");
                                        return window.addEventListener("pageshow", (function() {
                                                return t(i.formEnableSelector).forEach((function(t) {
                                                        if (u(t, "ujs:disabled"))
                                                            return r(t)
                                                    }
                                                )),
                                                    t(i.linkDisableSelector).forEach((function(t) {
                                                            if (u(t, "ujs:disabled"))
                                                                return r(t)
                                                        }
                                                    ))
                                            }
                                        )),
                                            n(document, i.linkDisableSelector, "ajax:complete", r),
                                            n(document, i.linkDisableSelector, "ajax:stopped", r),
                                            n(document, i.buttonDisableSelector, "ajax:complete", r),
                                            n(document, i.buttonDisableSelector, "ajax:stopped", r),
                                            n(document, i.linkClickSelector, "click", p),
                                            n(document, i.linkClickSelector, "click", s),
                                            n(document, i.linkClickSelector, "click", c),
                                            n(document, i.linkClickSelector, "click", a),
                                            n(document, i.linkClickSelector, "click", m),
                                            n(document, i.linkClickSelector, "click", d),
                                            n(document, i.buttonClickSelector, "click", p),
                                            n(document, i.buttonClickSelector, "click", s),
                                            n(document, i.buttonClickSelector, "click", c),
                                            n(document, i.buttonClickSelector, "click", a),
                                            n(document, i.buttonClickSelector, "click", m),
                                            n(document, i.inputChangeSelector, "change", s),
                                            n(document, i.inputChangeSelector, "change", c),
                                            n(document, i.inputChangeSelector, "change", m),
                                            n(document, i.formSubmitSelector, "submit", s),
                                            n(document, i.formSubmitSelector, "submit", c),
                                            n(document, i.formSubmitSelector, "submit", m),
                                            n(document, i.formSubmitSelector, "submit", (function(t) {
                                                    return setTimeout((function() {
                                                            return a(t)
                                                        }
                                                    ), 13)
                                                }
                                            )),
                                            n(document, i.formSubmitSelector, "ajax:send", a),
                                            n(document, i.formSubmitSelector, "ajax:complete", r),
                                            n(document, i.formInputClickSelector, "click", p),
                                            n(document, i.formInputClickSelector, "click", s),
                                            n(document, i.formInputClickSelector, "click", c),
                                            n(document, i.formInputClickSelector, "click", l),
                                            document.addEventListener("DOMContentLoaded", b),
                                            document.addEventListener("DOMContentLoaded", f),
                                            window._rails_loaded = !0
                                    }
                                        ,
                                    window.Rails === i && o(document, "rails:attachBindings") && i.start()
                                }
                                    .call(this)
                        }
                    ).call(this),
                        t.exports ? t.exports = i : void 0 !== (r = "function" == typeof (a = i) ? a.call(e, n, e, t) : a) && (t.exports = r)
                }
            ).call(this)
        }
    }
        , n = {};
    !function() {
        "use strict";
        t(5034).start()
    }()
}();
