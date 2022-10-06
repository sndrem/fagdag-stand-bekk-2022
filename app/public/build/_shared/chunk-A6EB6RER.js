import { a as se } from "/build/_shared/chunk-YE6MABSZ.js";
import { b as ie } from "/build/_shared/chunk-TFY3KWOG.js";
function ge() {
    return (
        (ge = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        ge.apply(this, arguments)
    );
}
var $;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})($ || ($ = {}));
var pt = function (e) {
    return e;
};
var mt = "beforeunload";
var vn = "popstate";
function vt(e) {
    e === void 0 && (e = {});
    var t = e,
        r = t.window,
        n = r === void 0 ? document.defaultView : r,
        a = n.history;
    function o() {
        var v = n.location,
            N = v.pathname,
            _ = v.search,
            A = v.hash,
            B = a.state || {};
        return [
            B.idx,
            pt({
                pathname: N,
                search: _,
                hash: A,
                state: B.usr || null,
                key: B.key || "default",
            }),
        ];
    }
    var i = null;
    function l() {
        if (i) R.call(i), (i = null);
        else {
            var v = $.Pop,
                N = o(),
                _ = N[0],
                A = N[1];
            if (R.length) {
                if (_ != null) {
                    var B = s - _;
                    B &&
                        ((i = {
                            action: v,
                            location: A,
                            retry: function () {
                                K(B * -1);
                            },
                        }),
                        K(B));
                }
            } else M(v);
        }
    }
    n.addEventListener(vn, l);
    var m = $.Pop,
        d = o(),
        s = d[0],
        f = d[1],
        g = gt(),
        R = gt();
    s == null && ((s = 0), a.replaceState(ge({}, a.state, { idx: s }), ""));
    function y(v) {
        return typeof v == "string" ? v : Q(v);
    }
    function w(v, N) {
        return (
            N === void 0 && (N = null),
            pt(
                ge(
                    { pathname: f.pathname, hash: "", search: "" },
                    typeof v == "string" ? V(v) : v,
                    { state: N, key: Rn() }
                )
            )
        );
    }
    function P(v, N) {
        return [{ usr: v.state, key: v.key, idx: N }, y(v)];
    }
    function O(v, N, _) {
        return !R.length || (R.call({ action: v, location: N, retry: _ }), !1);
    }
    function M(v) {
        m = v;
        var N = o();
        (s = N[0]), (f = N[1]), g.call({ action: m, location: f });
    }
    function he(v, N) {
        var _ = $.Push,
            A = w(v, N);
        function B() {
            he(v, N);
        }
        if (O(_, A, B)) {
            var q = P(A, s + 1),
                be = q[0],
                me = q[1];
            try {
                a.pushState(be, "", me);
            } catch {
                n.location.assign(me);
            }
            M(_);
        }
    }
    function pe(v, N) {
        var _ = $.Replace,
            A = w(v, N);
        function B() {
            pe(v, N);
        }
        if (O(_, A, B)) {
            var q = P(A, s),
                be = q[0],
                me = q[1];
            a.replaceState(be, "", me), M(_);
        }
    }
    function K(v) {
        a.go(v);
    }
    var z = {
        get action() {
            return m;
        },
        get location() {
            return f;
        },
        createHref: y,
        push: he,
        replace: pe,
        go: K,
        back: function () {
            K(-1);
        },
        forward: function () {
            K(1);
        },
        listen: function (N) {
            return g.push(N);
        },
        block: function (N) {
            var _ = R.push(N);
            return (
                R.length === 1 && n.addEventListener(mt, yt),
                function () {
                    _(), R.length || n.removeEventListener(mt, yt);
                }
            );
        },
    };
    return z;
}
function yt(e) {
    e.preventDefault(), (e.returnValue = "");
}
function gt() {
    var e = [];
    return {
        get length() {
            return e.length;
        },
        push: function (r) {
            return (
                e.push(r),
                function () {
                    e = e.filter(function (n) {
                        return n !== r;
                    });
                }
            );
        },
        call: function (r) {
            e.forEach(function (n) {
                return n && n(r);
            });
        },
    };
}
function Rn() {
    return Math.random().toString(36).substr(2, 8);
}
function Q(e) {
    var t = e.pathname,
        r = t === void 0 ? "/" : t,
        n = e.search,
        a = n === void 0 ? "" : n,
        o = e.hash,
        i = o === void 0 ? "" : o;
    return (
        a && a !== "?" && (r += a.charAt(0) === "?" ? a : "?" + a),
        i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i),
        r
    );
}
function V(e) {
    var t = {};
    if (e) {
        var r = e.indexOf("#");
        r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
        var n = e.indexOf("?");
        n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
            e && (t.pathname = e);
    }
    return t;
}
var ne = ie(se());
function T() {
    return (
        (T = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (e[n] = r[n]);
                  }
                  return e;
              }),
        T.apply(this, arguments)
    );
}
var h = ie(se());
var U = ie(se());
var x = ie(se());
var De = (0, x.createContext)(null),
    Me = (0, x.createContext)(null),
    ve = (0, x.createContext)({ outlet: null, matches: [] });
function ee(e, t) {
    if (!e) throw new Error(t);
}
function _e(e, t, r) {
    r === void 0 && (r = "/");
    let n = typeof t == "string" ? V(t) : t,
        a = St(n.pathname || "/", r);
    if (a == null) return null;
    let o = wt(e);
    wn(o);
    let i = null;
    for (let l = 0; i == null && l < o.length; ++l) i = kn(o[l], a);
    return i;
}
function wt(e, t, r, n) {
    return (
        t === void 0 && (t = []),
        r === void 0 && (r = []),
        n === void 0 && (n = ""),
        e.forEach((a, o) => {
            let i = {
                relativePath: a.path || "",
                caseSensitive: a.caseSensitive === !0,
                childrenIndex: o,
                route: a,
            };
            i.relativePath.startsWith("/") &&
                (i.relativePath.startsWith(n) || ee(!1),
                (i.relativePath = i.relativePath.slice(n.length)));
            let l = Z([n, i.relativePath]),
                m = r.concat(i);
            a.children &&
                a.children.length > 0 &&
                (a.index === !0 && ee(!1), wt(a.children, t, m, l)),
                !(a.path == null && !a.index) &&
                    t.push({ path: l, score: Ln(l, a.index), routesMeta: m });
        }),
        t
    );
}
function wn(e) {
    e.sort((t, r) =>
        t.score !== r.score
            ? r.score - t.score
            : Cn(
                  t.routesMeta.map((n) => n.childrenIndex),
                  r.routesMeta.map((n) => n.childrenIndex)
              )
    );
}
var En = /^:\w+$/,
    bn = 3,
    xn = 2,
    Sn = 1,
    Nn = 10,
    Pn = -2,
    Rt = (e) => e === "*";
function Ln(e, t) {
    let r = e.split("/"),
        n = r.length;
    return (
        r.some(Rt) && (n += Pn),
        t && (n += xn),
        r
            .filter((a) => !Rt(a))
            .reduce((a, o) => a + (En.test(o) ? bn : o === "" ? Sn : Nn), n)
    );
}
function Cn(e, t) {
    return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function kn(e, t) {
    let { routesMeta: r } = e,
        n = {},
        a = "/",
        o = [];
    for (let i = 0; i < r.length; ++i) {
        let l = r[i],
            m = i === r.length - 1,
            d = a === "/" ? t : t.slice(a.length) || "/",
            s = Et(
                {
                    path: l.relativePath,
                    caseSensitive: l.caseSensitive,
                    end: m,
                },
                d
            );
        if (!s) return null;
        Object.assign(n, s.params);
        let f = l.route;
        o.push({
            params: n,
            pathname: Z([a, s.pathname]),
            pathnameBase: Nt(Z([a, s.pathnameBase])),
            route: f,
        }),
            s.pathnameBase !== "/" && (a = Z([a, s.pathnameBase]));
    }
    return o;
}
function Et(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [r, n] = On(e.path, e.caseSensitive, e.end),
        a = t.match(r);
    if (!a) return null;
    let o = a[0],
        i = o.replace(/(.)\/+$/, "$1"),
        l = a.slice(1);
    return {
        params: n.reduce((d, s, f) => {
            if (s === "*") {
                let g = l[f] || "";
                i = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
            }
            return (d[s] = Dn(l[f] || "", s)), d;
        }, {}),
        pathname: o,
        pathnameBase: i,
        pattern: e,
    };
}
function On(e, t, r) {
    t === void 0 && (t = !1), r === void 0 && (r = !0);
    let n = [],
        a =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                .replace(/:(\w+)/g, (i, l) => (n.push(l), "([^\\/]+)"));
    return (
        e.endsWith("*")
            ? (n.push("*"),
              (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : (a += r ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
        [new RegExp(a, t ? void 0 : "i"), n]
    );
}
function Dn(e, t) {
    try {
        return decodeURIComponent(e);
    } catch {
        return e;
    }
}
function bt(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: r,
        search: n = "",
        hash: a = "",
    } = typeof e == "string" ? V(e) : e;
    return {
        pathname: r ? (r.startsWith("/") ? r : Mn(r, t)) : t,
        search: Tn(n),
        hash: Bn(a),
    };
}
function Mn(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((a) => {
            a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
        }),
        r.length > 1 ? r.join("/") : "/"
    );
}
function xt(e, t, r) {
    let n = typeof e == "string" ? V(e) : e,
        a = e === "" || n.pathname === "" ? "/" : n.pathname,
        o;
    if (a == null) o = r;
    else {
        let l = t.length - 1;
        if (a.startsWith("..")) {
            let m = a.split("/");
            for (; m[0] === ".."; ) m.shift(), (l -= 1);
            n.pathname = m.join("/");
        }
        o = l >= 0 ? t[l] : "/";
    }
    let i = bt(n, o);
    return (
        a &&
            a !== "/" &&
            a.endsWith("/") &&
            !i.pathname.endsWith("/") &&
            (i.pathname += "/"),
        i
    );
}
function _n(e) {
    return e === "" || e.pathname === ""
        ? "/"
        : typeof e == "string"
        ? V(e).pathname
        : e.pathname;
}
function St(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = e.charAt(t.length);
    return r && r !== "/" ? null : e.slice(t.length) || "/";
}
var Z = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Nt = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Tn = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    Bn = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function le(e) {
    Re() || ee(!1);
    let { basename: t, navigator: r } = (0, x.useContext)(De),
        { hash: n, pathname: a, search: o } = te(e),
        i = a;
    if (t !== "/") {
        let l = _n(e),
            m = l != null && l.endsWith("/");
        i = a === "/" ? t + (m ? "/" : "") : Z([t, a]);
    }
    return r.createHref({ pathname: i, search: o, hash: n });
}
function Re() {
    return (0, x.useContext)(Me) != null;
}
function I() {
    return Re() || ee(!1), (0, x.useContext)(Me).location;
}
function we() {
    Re() || ee(!1);
    let { basename: e, navigator: t } = (0, x.useContext)(De),
        { matches: r } = (0, x.useContext)(ve),
        { pathname: n } = I(),
        a = JSON.stringify(r.map((l) => l.pathnameBase)),
        o = (0, x.useRef)(!1);
    return (
        (0, x.useEffect)(() => {
            o.current = !0;
        }),
        (0, x.useCallback)(
            function (l, m) {
                if ((m === void 0 && (m = {}), !o.current)) return;
                if (typeof l == "number") {
                    t.go(l);
                    return;
                }
                let d = xt(l, JSON.parse(a), n);
                e !== "/" && (d.pathname = Z([e, d.pathname])),
                    (m.replace ? t.replace : t.push)(d, m.state);
            },
            [e, t, a, n]
        )
    );
}
var In = (0, x.createContext)(null);
function Ye(e) {
    let t = (0, x.useContext)(ve).outlet;
    return t && (0, x.createElement)(In.Provider, { value: e }, t);
}
function te(e) {
    let { matches: t } = (0, x.useContext)(ve),
        { pathname: r } = I(),
        n = JSON.stringify(t.map((a) => a.pathnameBase));
    return (0, x.useMemo)(() => xt(e, JSON.parse(n), r), [e, n, r]);
}
function Ke(e, t) {
    Re() || ee(!1);
    let { matches: r } = (0, x.useContext)(ve),
        n = r[r.length - 1],
        a = n ? n.params : {},
        o = n ? n.pathname : "/",
        i = n ? n.pathnameBase : "/",
        l = n && n.route,
        m = I(),
        d;
    if (t) {
        var s;
        let y = typeof t == "string" ? V(t) : t;
        i === "/" ||
            ((s = y.pathname) == null ? void 0 : s.startsWith(i)) ||
            ee(!1),
            (d = y);
    } else d = m;
    let f = d.pathname || "/",
        g = i === "/" ? f : f.slice(i.length) || "/",
        R = _e(e, { pathname: g });
    return Fn(
        R &&
            R.map((y) =>
                Object.assign({}, y, {
                    params: Object.assign({}, a, y.params),
                    pathname: Z([i, y.pathname]),
                    pathnameBase:
                        y.pathnameBase === "/" ? i : Z([i, y.pathnameBase]),
                })
            ),
        r
    );
}
function Fn(e, t) {
    return (
        t === void 0 && (t = []),
        e == null
            ? null
            : e.reduceRight(
                  (r, n, a) =>
                      (0, x.createElement)(ve.Provider, {
                          children:
                              n.route.element !== void 0 ? n.route.element : r,
                          value: {
                              outlet: r,
                              matches: t.concat(e.slice(0, a + 1)),
                          },
                      }),
                  null
              )
    );
}
function Pt(e) {
    return Ye(e.context);
}
function Te(e) {
    let {
        basename: t = "/",
        children: r = null,
        location: n,
        navigationType: a = $.Pop,
        navigator: o,
        static: i = !1,
    } = e;
    Re() && ee(!1);
    let l = Nt(t),
        m = (0, x.useMemo)(
            () => ({ basename: l, navigator: o, static: i }),
            [l, o, i]
        );
    typeof n == "string" && (n = V(n));
    let {
            pathname: d = "/",
            search: s = "",
            hash: f = "",
            state: g = null,
            key: R = "default",
        } = n,
        y = (0, x.useMemo)(() => {
            let w = St(d, l);
            return w == null
                ? null
                : { pathname: w, search: s, hash: f, state: g, key: R };
        }, [l, d, s, f, g, R]);
    return y == null
        ? null
        : (0, x.createElement)(
              De.Provider,
              { value: m },
              (0, x.createElement)(Me.Provider, {
                  children: r,
                  value: { location: y, navigationType: a },
              })
          );
}
function Be() {
    return (
        (Be =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n]);
                }
                return e;
            }),
        Be.apply(this, arguments)
    );
}
function Lt(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        a,
        o;
    for (o = 0; o < n.length; o++)
        (a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
    return r;
}
var Vn = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
    Un = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "children",
    ];
function Wn(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Xe = (0, U.forwardRef)(function (t, r) {
        let {
                onClick: n,
                reloadDocument: a,
                replace: o = !1,
                state: i,
                target: l,
                to: m,
            } = t,
            d = Lt(t, Vn),
            s = le(m),
            f = Jn(m, { replace: o, state: i, target: l });
        function g(R) {
            n && n(R), !R.defaultPrevented && !a && f(R);
        }
        return (0,
        U.createElement)("a", Be({}, d, { href: s, onClick: g, ref: r, target: l }));
    }),
    Ct = (0, U.forwardRef)(function (t, r) {
        let {
                "aria-current": n = "page",
                caseSensitive: a = !1,
                className: o = "",
                end: i = !1,
                style: l,
                to: m,
                children: d,
            } = t,
            s = Lt(t, Un),
            f = I(),
            g = te(m),
            R = f.pathname,
            y = g.pathname;
        a || ((R = R.toLowerCase()), (y = y.toLowerCase()));
        let w =
                R === y ||
                (!i && R.startsWith(y) && R.charAt(y.length) === "/"),
            P = w ? n : void 0,
            O;
        typeof o == "function"
            ? (O = o({ isActive: w }))
            : (O = [o, w ? "active" : null].filter(Boolean).join(" "));
        let M = typeof l == "function" ? l({ isActive: w }) : l;
        return (0,
        U.createElement)(Xe, Be({}, s, { "aria-current": P, className: O, ref: r, style: M, to: m }), typeof d == "function" ? d({ isActive: w }) : d);
    });
function Jn(e, t) {
    let { target: r, replace: n, state: a } = t === void 0 ? {} : t,
        o = we(),
        i = I(),
        l = te(e);
    return (0, U.useCallback)(
        (m) => {
            if (m.button === 0 && (!r || r === "_self") && !Wn(m)) {
                m.preventDefault();
                let d = !!n || Q(i) === Q(l);
                o(e, { replace: d, state: a });
            }
        },
        [i, o, l, n, a, r, e]
    );
}
var L = ie(se());
var Se = class extends L.default.Component {
    constructor(t) {
        super(t),
            (this.state = { error: t.error || null, location: t.location });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location
            ? { error: t.error || null, location: t.location }
            : { error: t.error || r.error, location: r.location };
    }
    render() {
        return this.state.error
            ? L.default.createElement(this.props.component, {
                  error: this.state.error,
              })
            : this.props.children;
    }
};
function kt({ error: e }) {
    return (
        console.error(e),
        L.default.createElement(
            "html",
            { lang: "en" },
            L.default.createElement(
                "head",
                null,
                L.default.createElement("meta", { charSet: "utf-8" }),
                L.default.createElement("meta", {
                    name: "viewport",
                    content:
                        "width=device-width,initial-scale=1,viewport-fit=cover",
                }),
                L.default.createElement("title", null, "Application Error!")
            ),
            L.default.createElement(
                "body",
                null,
                L.default.createElement(
                    "main",
                    {
                        style: {
                            fontFamily: "system-ui, sans-serif",
                            padding: "2rem",
                        },
                    },
                    L.default.createElement(
                        "h1",
                        { style: { fontSize: "24px" } },
                        "Application Error"
                    ),
                    L.default.createElement(
                        "pre",
                        {
                            style: {
                                padding: "2rem",
                                background: "hsla(10, 50%, 50%, 0.1)",
                                color: "red",
                                overflow: "auto",
                            },
                        },
                        e.stack
                    )
                ),
                L.default.createElement("script", {
                    dangerouslySetInnerHTML: {
                        __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `,
                    },
                })
            )
        )
    );
}
var Ot = L.default.createContext(void 0);
function jn() {
    return (0, L.useContext)(Ot);
}
function Ge({ catch: e, component: t, children: r }) {
    return e
        ? L.default.createElement(
              Ot.Provider,
              { value: e },
              L.default.createElement(t, null)
          )
        : L.default.createElement(L.default.Fragment, null, r);
}
function Dt() {
    let e = jn();
    return L.default.createElement(
        "html",
        { lang: "en" },
        L.default.createElement(
            "head",
            null,
            L.default.createElement("meta", { charSet: "utf-8" }),
            L.default.createElement("meta", {
                name: "viewport",
                content:
                    "width=device-width,initial-scale=1,viewport-fit=cover",
            }),
            L.default.createElement("title", null, "Unhandled Thrown Response!")
        ),
        L.default.createElement(
            "body",
            null,
            L.default.createElement(
                "h1",
                {
                    style: {
                        fontFamily: "system-ui, sans-serif",
                        padding: "2rem",
                    },
                },
                e.status,
                " ",
                e.statusText
            ),
            L.default.createElement("script", {
                dangerouslySetInnerHTML: {
                    __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `,
                },
            })
        )
    );
}
function D(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function Ie(e, t) {
    if (e.id in t) return t[e.id];
    try {
        let r = await import(e.module);
        return (t[e.id] = r), r;
    } catch {
        return window.location.reload(), new Promise(() => {});
    }
}
function Mt(e, t, r) {
    let n = e
            .map((o) => {
                var i;
                let l = t[o.route.id];
                return (
                    ((i = l.links) === null || i === void 0
                        ? void 0
                        : i.call(l)) || []
                );
            })
            .flat(1),
        a = Kn(e, r);
    return Xn(n, a);
}
async function _t(e) {
    if (!e.links) return;
    let t = e.links();
    if (!t) return;
    let r = [];
    for (let a of t)
        !Fe(a) &&
            a.rel === "stylesheet" &&
            r.push({ ...a, rel: "preload", as: "style" });
    let n = r.filter((a) => !a.media || window.matchMedia(a.media).matches);
    await Promise.all(n.map(zn));
}
async function zn(e) {
    return new Promise((t) => {
        let r = document.createElement("link");
        Object.assign(r, e);
        function n() {
            document.head.contains(r) && document.head.removeChild(r);
        }
        (r.onload = () => {
            n(), t();
        }),
            (r.onerror = () => {
                n(), t();
            }),
            document.head.appendChild(r);
    });
}
function Fe(e) {
    return e != null && typeof e.page == "string";
}
function Yn(e) {
    return e == null
        ? !1
        : e.href == null
        ? e.rel === "preload" &&
          (typeof e.imageSrcSet == "string" ||
              typeof e.imagesrcset == "string") &&
          (typeof e.imageSizes == "string" || typeof e.imagesizes == "string")
        : typeof e.rel == "string" && typeof e.href == "string";
}
async function Tt(e, t) {
    return (
        await Promise.all(
            e.map(async (n) => {
                let a = await Ie(n.route, t);
                return a.links ? a.links() : [];
            })
        )
    )
        .flat(1)
        .filter(Yn)
        .filter((n) => n.rel === "stylesheet" || n.rel === "preload")
        .map((n) =>
            n.rel === "preload"
                ? { ...n, rel: "prefetch" }
                : { ...n, rel: "prefetch", as: "style" }
        );
}
function qe(e, t, r, n, a) {
    let o = Ft(e),
        i = (d, s) => (r[s] ? d.route.id !== r[s].route.id : !0),
        l = (d, s) => {
            var f;
            return (
                r[s].pathname !== d.pathname ||
                (((f = r[s].route.path) === null || f === void 0
                    ? void 0
                    : f.endsWith("*")) &&
                    r[s].params["*"] !== d.params["*"])
            );
        };
    return a === "data" && n.search !== o.search
        ? t.filter((d, s) =>
              d.route.hasLoader
                  ? i(d, s) || l(d, s)
                      ? !0
                      : d.route.shouldReload
                      ? d.route.shouldReload({
                            params: d.params,
                            prevUrl: new URL(
                                n.pathname + n.search + n.hash,
                                window.origin
                            ),
                            url: new URL(e, window.origin),
                        })
                      : !0
                  : !1
          )
        : t.filter(
              (d, s) =>
                  (a === "assets" || d.route.hasLoader) && (i(d, s) || l(d, s))
          );
}
function Bt(e, t, r) {
    let n = Ft(e);
    return Qe(
        t
            .filter((a) => r.routes[a.route.id].hasLoader)
            .map((a) => {
                let { pathname: o, search: i } = n,
                    l = new URLSearchParams(i);
                return l.set("_data", a.route.id), `${o}?${l}`;
            })
    );
}
function It(e, t) {
    return Qe(
        e
            .map((r) => {
                let n = t.routes[r.route.id],
                    a = [n.module];
                return n.imports && (a = a.concat(n.imports)), a;
            })
            .flat(1)
    );
}
function Kn(e, t) {
    return Qe(
        e
            .map((r) => {
                let n = t.routes[r.route.id],
                    a = [n.module];
                return n.imports && (a = a.concat(n.imports)), a;
            })
            .flat(1)
    );
}
function Qe(e) {
    return [...new Set(e)];
}
function Xn(e, t) {
    let r = new Set(),
        n = new Set(t);
    return e.reduce((a, o) => {
        if (!Fe(o) && o.as === "script" && o.href && n.has(o.href)) return a;
        let l = JSON.stringify(o);
        return r.has(l) || (r.add(l), a.push(o)), a;
    }, []);
}
function Ft(e) {
    let t = V(e);
    return t.search === void 0 && (t.search = ""), t;
}
function Ze(e) {
    return { __html: e };
}
var Yt = ie(se());
function et(e) {
    return e instanceof Response && e.headers.get("X-Remix-Catch") != null;
}
function Gn(e) {
    return e instanceof Response && e.headers.get("X-Remix-Error") != null;
}
function At(e) {
    return e instanceof Response && e.headers.get("X-Remix-Redirect") != null;
}
async function tt(e, t, r, n) {
    e.searchParams.set("_data", t);
    let a = n ? qn(n, r) : { credentials: "same-origin", signal: r },
        o = await fetch(e.href, a);
    if (Gn(o)) {
        let i = await o.json(),
            l = new Error(i.message);
        return (l.stack = i.stack), l;
    }
    return o;
}
async function Ne(e) {
    let t = e.headers.get("Content-Type");
    return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
}
function qn(e, t) {
    let { encType: r, method: n, formData: a } = e,
        o,
        i = a;
    if (r === "application/x-www-form-urlencoded") {
        i = new URLSearchParams();
        for (let [l, m] of a)
            D(
                typeof m == "string",
                'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
            ),
                i.append(l, m);
        o = { "Content-Type": r };
    }
    return {
        method: n,
        body: i,
        signal: t,
        credentials: "same-origin",
        headers: o,
    };
}
function ce(e, t) {
    let r = _e(e, t);
    return r
        ? r.map((n) => ({
              params: n.params,
              pathname: n.pathname,
              route: n.route,
          }))
        : null;
}
var Ee = class {
    constructor(t, r, n) {
        (this.status = t), (this.statusText = r), (this.data = n);
    }
};
function Ht(e) {
    return ["POST", "PUT", "PATCH", "DELETE"].includes(e.method);
}
function $t(e) {
    return e.method === "GET";
}
function Ve(e) {
    return Boolean(e.state) && e.state.isRedirect;
}
function Qn(e) {
    return Ve(e) && e.state.type === "loader";
}
function Vt(e) {
    return Ve(e) && e.state.type === "action";
}
function Zn(e) {
    return Ve(e) && e.state.type === "fetchAction";
}
function er(e) {
    return Ve(e) && e.state.type === "loaderSubmission";
}
var Ce = class {
        constructor(t, r) {
            (this.setCookie = r),
                (this.location =
                    typeof t == "string" ? t : t.pathname + t.search);
        }
    },
    ue = { state: "idle", submission: void 0, location: void 0, type: "idle" },
    tr = { state: "idle", type: "init", data: void 0, submission: void 0 };
function zt(e) {
    let { routes: t } = e,
        r,
        n = new Map(),
        a = 0,
        o = -1,
        i = new Map(),
        l = new Set(),
        m = new Set(),
        d = ce(t, e.location);
    d || (d = [{ params: {}, pathname: "", route: t[0] }]);
    let s = {
        location: e.location,
        loaderData: e.loaderData || {},
        actionData: e.actionData,
        catch: e.catch,
        error: e.error,
        catchBoundaryId: e.catchBoundaryId || null,
        errorBoundaryId: e.errorBoundaryId || null,
        matches: d,
        nextMatches: void 0,
        transition: ue,
        fetchers: new Map(),
    };
    function f(c) {
        c.transition && c.transition === ue && (r = void 0),
            (s = Object.assign({}, s, c));
        for (let u of m.values()) u(s);
    }
    function g() {
        return s;
    }
    function R(c) {
        return s.fetchers.get(c) || tr;
    }
    function y(c, u) {
        s.fetchers.set(c, u);
    }
    function w(c) {
        n.has(c) && ze(c), i.delete(c), l.delete(c), s.fetchers.delete(c);
    }
    async function P(c) {
        switch (c.type) {
            case "navigation": {
                let { action: u, location: p, submission: E } = c,
                    b = ce(t, p);
                b
                    ? !E && hn(p)
                        ? await dt(p, b)
                        : u === $.Pop
                        ? await ft(p, b)
                        : E && Ht(E)
                        ? await be(p, E, b)
                        : E && $t(E)
                        ? await me(p, E, b)
                        : Vt(p)
                        ? await fn(p, b)
                        : er(p)
                        ? await un(p, b)
                        : Qn(p)
                        ? await cn(p, b)
                        : Zn(p)
                        ? await dn(p, b)
                        : await ft(p, b)
                    : ((b = [{ params: {}, pathname: "", route: t[0] }]),
                      await q(p, b)),
                    (o = -1);
                break;
            }
            case "fetcher": {
                let { key: u, submission: p, href: E } = c,
                    b = ce(t, E);
                D(b, "No matches found"), n.has(u) && ze(u);
                let C = he(new URL(E, window.location.href), b);
                p && Ht(p)
                    ? await pe(u, p, C)
                    : p && $t(p)
                    ? await N(E, u, p, C)
                    : await _(E, u, C);
                break;
            }
            default:
                throw new Error(`Unknown data event type: ${c.type}`);
        }
    }
    function O() {
        W();
        for (let [, c] of n) c.abort();
    }
    function M(c) {
        for (let u of c.searchParams.getAll("index")) if (u === "") return !0;
        return !1;
    }
    function he(c, u) {
        let p = u.slice(-1)[0];
        return !M(c) && p.route.index ? u.slice(-2)[0] : p;
    }
    async function pe(c, u, p) {
        let E = s.fetchers.get(c),
            b = {
                state: "submitting",
                type: "actionSubmission",
                submission: u,
                data: E?.data || void 0,
            };
        y(c, b), f({ fetchers: new Map(s.fetchers) });
        let C = new AbortController();
        n.set(c, C);
        let S = await Wt(u, p, C.signal);
        if (C.signal.aborted) return;
        if (Pe(S)) {
            let oe = {
                isRedirect: !0,
                type: "fetchAction",
                setCookie: S.value.setCookie,
            };
            l.add(c),
                e.onRedirect(S.value.location, oe),
                y(c, {
                    state: "loading",
                    type: "actionRedirect",
                    submission: u,
                    data: void 0,
                }),
                f({ fetchers: new Map(s.fetchers) });
            return;
        }
        if (B(p, c, S) || (await A(p, c, S))) return;
        let k = {
            state: "loading",
            type: "actionReload",
            data: S.value,
            submission: u,
        };
        y(c, k), f({ fetchers: new Map(s.fetchers) });
        let J = He(S) ? S : void 0,
            j = Le(S) ? S : void 0,
            X = ++a;
        i.set(c, X);
        let H = s.nextMatches || s.matches,
            G = await Ut(
                s,
                s.transition.location || s.location,
                H,
                C.signal,
                J,
                j,
                u,
                p.route.id,
                k
            );
        if (C.signal.aborted) return;
        i.delete(c), n.delete(c);
        let xe = Jt(G);
        if (xe) {
            let oe = {
                isRedirect: !0,
                type: "loader",
                setCookie: xe.setCookie,
            };
            e.onRedirect(xe.location, oe);
            return;
        }
        let [Oe, ye] = jt(G, s.matches, J),
            [ae, yn] = (await nt(G, s.matches, j)) || [],
            gn = {
                state: "idle",
                type: "done",
                data: S.value,
                submission: void 0,
            };
        y(c, gn);
        let ht = v(X);
        if ((ht && z(ht), K(X))) {
            let { transition: oe } = s;
            D(oe.state === "loading", "Expected loading transition"),
                f({
                    location: oe.location,
                    matches: s.nextMatches,
                    error: Oe,
                    errorBoundaryId: ye,
                    catch: ae,
                    catchBoundaryId: yn,
                    loaderData: rt(s, G, H),
                    actionData:
                        oe.type === "actionReload" ? s.actionData : void 0,
                    transition: ue,
                    fetchers: new Map(s.fetchers),
                });
        } else
            f({
                fetchers: new Map(s.fetchers),
                error: Oe,
                errorBoundaryId: ye,
                loaderData: rt(s, G, H),
            });
    }
    function K(c) {
        return s.transition.state === "loading" && o < c ? (W(), !0) : !1;
    }
    function z(c) {
        for (let u of c) {
            let p = R(u),
                E = {
                    state: "idle",
                    type: "done",
                    data: p.data,
                    submission: void 0,
                };
            y(u, E);
        }
    }
    function v(c) {
        let u = [];
        for (let [p, E] of i)
            if (E < c) {
                let b = s.fetchers.get(p);
                D(b, `Expected fetcher: ${p}`),
                    b.state === "loading" && (ze(p), i.delete(p), u.push(p));
            }
        return u.length ? u : !1;
    }
    async function N(c, u, p, E) {
        let b = s.fetchers.get(u),
            C = {
                state: "submitting",
                type: "loaderSubmission",
                submission: p,
                data: b?.data || void 0,
            };
        y(u, C), f({ fetchers: new Map(s.fetchers) });
        let S = new AbortController();
        n.set(u, S);
        let k = await at(E, fe(c), S.signal);
        if ((n.delete(u), S.signal.aborted)) return;
        if (Pe(k)) {
            let j = {
                isRedirect: !0,
                type: "loader",
                setCookie: k.value.setCookie,
            };
            e.onRedirect(k.value.location, j);
            return;
        }
        if (B(E, u, k) || (await A(E, u, k))) return;
        let J = {
            state: "idle",
            type: "done",
            data: k.value,
            submission: void 0,
        };
        y(u, J), f({ fetchers: new Map(s.fetchers) });
    }
    async function _(c, u, p) {
        if (typeof AbortController > "u")
            throw new Error(
                "handleLoaderFetch was called during the server render, but it shouldn't be. You are likely calling useFetcher.load() in the body of your component. Try moving it to a useEffect or a callback."
            );
        let E = s.fetchers.get(u),
            b = {
                state: "loading",
                type: "normalLoad",
                submission: void 0,
                data: E?.data || void 0,
            };
        y(u, b), f({ fetchers: new Map(s.fetchers) });
        let C = new AbortController();
        n.set(u, C);
        let S = await at(p, fe(c), C.signal);
        if (C.signal.aborted) return;
        if ((n.delete(u), Pe(S))) {
            let J = {
                isRedirect: !0,
                type: "loader",
                setCookie: S.value.setCookie,
            };
            e.onRedirect(S.value.location, J);
            return;
        }
        if (B(p, u, S) || (await A(p, u, S))) return;
        let k = {
            state: "idle",
            type: "done",
            data: S.value,
            submission: void 0,
        };
        y(u, k), f({ fetchers: new Map(s.fetchers) });
    }
    async function A(c, u, p) {
        if (Le(p)) {
            let E = $e(c, s.matches);
            return (
                s.fetchers.delete(u),
                f({
                    transition: ue,
                    fetchers: new Map(s.fetchers),
                    catch: {
                        data: p.value.data,
                        status: p.value.status,
                        statusText: p.value.statusText,
                    },
                    catchBoundaryId: E,
                }),
                !0
            );
        }
        return !1;
    }
    function B(c, u, p) {
        if (He(p)) {
            let E = Ae(c, s.matches);
            return (
                s.fetchers.delete(u),
                f({
                    fetchers: new Map(s.fetchers),
                    error: p.value,
                    errorBoundaryId: E,
                }),
                !0
            );
        }
        return !1;
    }
    async function q(c, u) {
        W(),
            f({
                transition: {
                    state: "loading",
                    type: "normalLoad",
                    submission: void 0,
                    location: c,
                },
                nextMatches: u,
            }),
            await Promise.resolve();
        let E = $e(u[0], u);
        f({
            location: c,
            matches: u,
            catch: { data: null, status: 404, statusText: "Not Found" },
            catchBoundaryId: E,
            transition: ue,
        });
    }
    async function be(c, u, p) {
        W(),
            f({
                transition: {
                    state: "submitting",
                    type: "actionSubmission",
                    submission: u,
                    location: c,
                },
                nextMatches: p,
            });
        let b = new AbortController();
        r = b;
        let C = p;
        !M(fe(u.action)) && C[p.length - 1].route.index && (C = C.slice(0, -1));
        let S = C.slice(-1)[0],
            k = await Wt(u, S, b.signal);
        if (b.signal.aborted) return;
        if (Pe(k)) {
            let H = {
                isRedirect: !0,
                type: "action",
                setCookie: k.value.setCookie,
            };
            e.onRedirect(k.value.location, H);
            return;
        }
        let J, j;
        Le(k) && ([J, j] = (await nt([k], C, k)) || []),
            f({
                transition: {
                    state: "loading",
                    type: "actionReload",
                    submission: u,
                    location: c,
                },
                actionData: { [S.route.id]: k.value },
            }),
            await re(c, p, u, S.route.id, k, J, j);
    }
    async function me(c, u, p) {
        W(),
            f({
                transition: {
                    state: "submitting",
                    type: "loaderSubmission",
                    submission: u,
                    location: c,
                },
                nextMatches: p,
            }),
            await re(c, p, u);
    }
    async function dt(c, u) {
        W(),
            f({
                transition: {
                    state: "loading",
                    type: "normalLoad",
                    submission: void 0,
                    location: c,
                },
                nextMatches: u,
            }),
            await Promise.resolve(),
            f({ location: c, matches: u, transition: ue });
    }
    async function ft(c, u) {
        W(),
            f({
                transition: {
                    state: "loading",
                    type: "normalLoad",
                    submission: void 0,
                    location: c,
                },
                nextMatches: u,
            }),
            await re(c, u);
    }
    async function cn(c, u) {
        W(),
            f({
                transition: {
                    state: "loading",
                    type: "normalRedirect",
                    submission: void 0,
                    location: c,
                },
                nextMatches: u,
            }),
            await re(c, u);
    }
    async function un(c, u) {
        W(),
            D(
                s.transition.type === "loaderSubmission",
                `Unexpected transition: ${JSON.stringify(s.transition)}`
            );
        let { submission: p } = s.transition;
        f({
            transition: {
                state: "loading",
                type: "loaderSubmissionRedirect",
                submission: p,
                location: c,
            },
            nextMatches: u,
        }),
            await re(c, u, p);
    }
    async function dn(c, u) {
        W(),
            f({
                transition: {
                    state: "loading",
                    type: "fetchActionRedirect",
                    submission: void 0,
                    location: c,
                },
                nextMatches: u,
            }),
            await re(c, u);
    }
    async function fn(c, u) {
        W(),
            D(
                s.transition.type === "actionSubmission" ||
                    s.transition.type === "actionReload" ||
                    s.transition.type === "actionRedirect",
                `Unexpected transition: ${JSON.stringify(s.transition)}`
            );
        let { submission: p } = s.transition;
        f({
            transition: {
                state: "loading",
                type: "actionRedirect",
                submission: p,
                location: c,
            },
            nextMatches: u,
        }),
            await re(c, u, p);
    }
    function hn(c) {
        return de(s.location) === de(c) && s.location.hash !== c.hash;
    }
    async function re(c, u, p, E, b, C, S) {
        let k = b && He(b) ? b : void 0,
            J = b && Le(b) ? b : void 0,
            j = new AbortController();
        (r = j), (o = ++a);
        let X = await Ut(s, c, u, j.signal, k, J, p, E, void 0, S);
        if (j.signal.aborted) return;
        let H = Jt(X);
        if (H) {
            if (s.transition.type === "actionReload" || Vt(c)) {
                let ae = {
                    isRedirect: !0,
                    type: "action",
                    setCookie: H.setCookie,
                };
                e.onRedirect(H.location, ae);
            } else if (s.transition.type === "loaderSubmission") {
                let ae = {
                    isRedirect: !0,
                    type: "loaderSubmission",
                    setCookie: H.setCookie,
                };
                e.onRedirect(H.location, ae);
            } else {
                var G;
                let ae = {
                    isRedirect: !0,
                    type: "loader",
                    setCookie:
                        H.setCookie ||
                        ((G = c.state) === null || G === void 0
                            ? void 0
                            : G.setCookie) === !0,
                };
                e.onRedirect(H.location, ae);
            }
            return;
        }
        let [xe, Oe] = jt(X, u, k);
        ([C, S] = (await nt(X, u, k)) || [C, S]), pn();
        let ye = v(o);
        ye && z(ye),
            f({
                location: c,
                matches: u,
                error: xe,
                errorBoundaryId: Oe,
                catch: C,
                catchBoundaryId: S,
                loaderData: rt(s, X, u),
                actionData:
                    s.transition.type === "actionReload"
                        ? s.actionData
                        : void 0,
                transition: ue,
                fetchers: ye ? new Map(s.fetchers) : s.fetchers,
            });
    }
    function W() {
        r && r.abort();
    }
    function ze(c) {
        let u = n.get(c);
        D(u, `Expected fetch controller: ${c}`), u.abort(), n.delete(c);
    }
    function pn() {
        let c = [];
        for (let u of l) {
            let p = s.fetchers.get(u);
            D(p, `Expected fetcher: ${u}`),
                p.type === "actionRedirect" && (l.delete(u), c.push(u));
        }
        z(c);
    }
    function mn(c) {
        return (
            m.add(c),
            () => {
                m.delete(c);
            }
        );
    }
    return {
        subscribe: mn,
        send: P,
        getState: g,
        getFetcher: R,
        deleteFetcher: w,
        dispose: O,
        get _internalFetchControllers() {
            return n;
        },
    };
}
async function Ut(e, t, r, n, a, o, i, l, m, d) {
    let s = fe(de(t)),
        f = nr(e, t, r, a, o, i, l, m, d);
    return Promise.all(f.map((g) => at(g, s, n)));
}
async function at(e, t, r) {
    D(e.route.loader, `Expected loader for ${e.route.id}`);
    try {
        let { params: n } = e,
            a = await e.route.loader({ params: n, url: t, signal: r });
        return { match: e, value: a };
    } catch (n) {
        return { match: e, value: n };
    }
}
async function Wt(e, t, r) {
    try {
        let n = await t.route.action({
            url: fe(e.action),
            params: t.params,
            submission: e,
            signal: r,
        });
        return { match: t, value: n };
    } catch (n) {
        return { match: t, value: n };
    }
}
function nr(e, t, r, n, a, o, i, l, m) {
    var d;
    if (m || (i && (a || n))) {
        let w = !1;
        r = r.filter((P) =>
            w ? !1 : P.route.id === i || P.route.id === m ? ((w = !0), !1) : !0
        );
    }
    let s = (w, P) =>
            e.matches[P] ? w.route.id !== e.matches[P].route.id : !0,
        f = (w, P) => {
            var O;
            return (
                e.matches[P].pathname !== w.pathname ||
                (((O = e.matches[P].route.path) === null || O === void 0
                    ? void 0
                    : O.endsWith("*")) &&
                    e.matches[P].params["*"] !== w.params["*"])
            );
        },
        g = fe(de(t)),
        R = (w, P) => {
            if (!w.route.loader) return !1;
            if (s(w, P) || f(w, P)) return !0;
            if (w.route.shouldReload) {
                let O = fe(de(e.location));
                return w.route.shouldReload({
                    prevUrl: O,
                    url: g,
                    submission: o,
                    params: w.params,
                });
            }
            return !0;
        };
    return e.matches.length === 1
        ? r.filter((w) => !!w.route.loader)
        : l?.type === "actionReload" ||
          e.transition.type === "actionReload" ||
          e.transition.type === "actionRedirect" ||
          e.transition.type === "fetchActionRedirect" ||
          de(g) === de(e.location) ||
          g.searchParams.toString() !== e.location.search.substring(1) ||
          ((d = t.state) !== null && d !== void 0 && d.setCookie)
        ? r.filter(R)
        : r.filter((w, P, O) => {
              var M;
              return (n || a) && O.length - 1 === P
                  ? !1
                  : w.route.loader &&
                        (s(w, P) ||
                            f(w, P) ||
                            ((M = t.state) === null || M === void 0
                                ? void 0
                                : M.setCookie));
          });
}
function Pe(e) {
    return e.value instanceof Ce;
}
function de(e) {
    return e.pathname + e.search;
}
function Jt(e) {
    for (let t of e) if (Pe(t)) return t.value;
    return null;
}
async function nt(e, t, r) {
    let n;
    for (let o of e)
        if (Le(o)) {
            n = o;
            break;
        }
    let a = async (o) => ({
        status: o.status,
        statusText: o.statusText,
        data: o.data,
    });
    if (r && n) {
        let o = $e(n.match, t);
        return [await a(r.value), o];
    }
    if (n) {
        let o = $e(n.match, t);
        return [await a(n.value), o];
    }
    return null;
}
function jt(e, t, r) {
    let n;
    for (let a of e)
        if (He(a)) {
            n = a;
            break;
        }
    if (r && n) {
        let a = Ae(n.match, t);
        return [r.value, a];
    }
    if (r) {
        let a = Ae(r.match, t);
        return [r.value, a];
    }
    if (n) {
        let a = Ae(n.match, t);
        return [n.value, a];
    }
    return [void 0, void 0];
}
function $e(e, t) {
    let r = null;
    for (let n of t)
        if ((n.route.CatchBoundary && (r = n.route.id), n === e)) break;
    return r;
}
function Ae(e, t) {
    let r = null;
    for (let n of t)
        if ((n.route.ErrorBoundary && (r = n.route.id), n === e)) break;
    return r;
}
function rt(e, t, r) {
    let n = {};
    for (let { match: o, value: i } of t) n[o.route.id] = i;
    let a = {};
    for (let { route: o } of r) {
        let i = n[o.id] !== void 0 ? n[o.id] : e.loaderData[o.id];
        i !== void 0 && (a[o.id] = i);
    }
    return a;
}
function Le(e) {
    return e.value instanceof Ee;
}
function He(e) {
    return e.value instanceof Error;
}
function fe(e) {
    return new URL(e, window.location.origin);
}
function rr(e, t, r) {
    return {
        caseSensitive: !!e.caseSensitive,
        element: Yt.createElement(r, { id: e.id }),
        id: e.id,
        path: e.path,
        index: e.index,
        module: e.module,
        loader: or(e, t),
        action: ir(e, t),
        shouldReload: ar(e, t),
        ErrorBoundary: e.hasErrorBoundary,
        CatchBoundary: e.hasCatchBoundary,
        hasLoader: e.hasLoader,
    };
}
function it(e, t, r, n) {
    return Object.keys(e)
        .filter((a) => e[a].parentId === n)
        .map((a) => {
            let o = rr(e[a], t, r),
                i = it(e, t, r, o.id);
            return i.length > 0 && (o.children = i), o;
        });
}
function ar(e, t) {
    return (n) => {
        let a = t[e.id];
        return (
            D(a, `Expected route module to be loaded for ${e.id}`),
            a.unstable_shouldReload ? a.unstable_shouldReload(n) : !0
        );
    };
}
async function ot(e, t) {
    let r = await Ie(e, t);
    return await _t(r), r;
}
function or(e, t) {
    return async ({ url: n, signal: a, submission: o }) => {
        if (e.hasLoader) {
            let [i] = await Promise.all([tt(n, e.id, a, o), ot(e, t)]);
            if (i instanceof Error) throw i;
            let l = await Kt(i);
            if (l) return l;
            if (et(i)) throw new Ee(i.status, i.statusText, await Ne(i));
            return Ne(i);
        } else await ot(e, t);
    };
}
function ir(e, t) {
    return async ({ url: n, signal: a, submission: o }) => {
        e.hasAction ||
            console.error(
                `Route "${e.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`
            );
        let i = await tt(n, e.id, a, o);
        if (i instanceof Error) throw i;
        let l = await Kt(i);
        if (l) return l;
        if ((await ot(e, t), et(i)))
            throw new Ee(i.status, i.statusText, await Ne(i));
        return Ne(i);
    };
}
async function Kt(e) {
    if (At(e)) {
        let t = new URL(
            e.headers.get("X-Remix-Redirect"),
            window.location.origin
        );
        if (t.origin !== window.location.origin)
            await new Promise(() => {
                window.location.replace(t.href);
            });
        else
            return new Ce(
                t.pathname + t.search + t.hash,
                e.headers.get("X-Remix-Revalidate") !== null
            );
    }
    return null;
}
var Qt = h.createContext(void 0);
function Y() {
    let e = h.useContext(Qt);
    return D(e, "You must render this element inside a <Remix> element"), e;
}
function Zt({
    context: e,
    action: t,
    location: r,
    navigator: n,
    static: a = !1,
}) {
    let {
            manifest: o,
            routeData: i,
            actionData: l,
            routeModules: m,
            serverHandoffString: d,
            appState: s,
        } = e,
        f = h.useMemo(() => it(o.routes, m, ur), [o, m]),
        [g, R] = h.useState(s),
        [y] = h.useState(() =>
            zt({
                routes: f,
                actionData: l,
                loaderData: i,
                location: r,
                catch: s.catch,
                catchBoundaryId: s.catchBoundaryRouteId,
                onRedirect: n.replace,
            })
        );
    h.useEffect(() => {
        let z = (v) => {
            R({
                catch: v.catch,
                error: v.error,
                catchBoundaryRouteId: v.catchBoundaryId,
                loaderBoundaryRouteId: v.errorBoundaryId,
                renderBoundaryRouteId: null,
                trackBoundaries: !1,
                trackCatchBoundaries: !1,
            });
        };
        return y.subscribe(z);
    }, [y]);
    let w = h.useMemo(
            () => ({
                ...n,
                push: (v, N) =>
                    y.getState().transition.state !== "idle"
                        ? n.replace(v, N)
                        : n.push(v, N),
            }),
            [n, y]
        ),
        {
            location: P,
            matches: O,
            loaderData: M,
            actionData: he,
        } = y.getState();
    h.useEffect(() => {
        let { location: z } = y.getState();
        r !== z &&
            y.send({
                type: "navigation",
                location: r,
                submission: Rr(),
                action: t,
            });
    }, [y, r, t]);
    let pe =
            g.error &&
            g.renderBoundaryRouteId === null &&
            g.loaderBoundaryRouteId === null
                ? en(g.error)
                : void 0,
        K = g.catch && g.catchBoundaryRouteId === null ? g.catch : void 0;
    return h.createElement(
        Qt.Provider,
        {
            value: {
                matches: O,
                manifest: o,
                appState: g,
                routeModules: m,
                serverHandoffString: d,
                clientRoutes: f,
                routeData: M,
                actionData: he,
                transitionManager: y,
            },
        },
        h.createElement(
            Se,
            { location: P, component: kt, error: pe },
            h.createElement(
                Ge,
                { location: P, component: Dt, catch: K },
                h.createElement(
                    Te,
                    { navigationType: t, location: P, navigator: w, static: a },
                    h.createElement(sr, null)
                )
            )
        )
    );
}
function en(e) {
    let t = new Error(e.message);
    return (t.stack = e.stack), t;
}
function sr() {
    let { clientRoutes: e } = Y();
    return Ke(e) || e[0].element;
}
var tn = h.createContext(void 0);
function lr() {
    let e = h.useContext(tn);
    return D(e, "You must render this element in a remix route element"), e;
}
function cr({ id: e }) {
    throw new Error(`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
}
function ur({ id: e }) {
    let t = I(),
        { routeData: r, routeModules: n, appState: a } = Y();
    D(
        r,
        `Cannot initialize 'routeData'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`
    ),
        D(
            n,
            `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`
        );
    let o = r[e],
        { default: i, CatchBoundary: l, ErrorBoundary: m } = n[e],
        d = i ? h.createElement(i, null) : h.createElement(cr, { id: e }),
        s = { data: o, id: e };
    if (l) {
        let f = a.catch && a.catchBoundaryRouteId === e ? a.catch : void 0;
        a.trackCatchBoundaries && (a.catchBoundaryRouteId = e),
            (s = f
                ? {
                      id: e,
                      get data() {
                          console.error(
                              "You cannot `useLoaderData` in a catch boundary."
                          );
                      },
                  }
                : { id: e, data: o }),
            (d = h.createElement(
                Ge,
                { location: t, component: l, catch: f },
                d
            ));
    }
    if (m) {
        let f =
            a.error &&
            (a.renderBoundaryRouteId === e || a.loaderBoundaryRouteId === e)
                ? en(a.error)
                : void 0;
        a.trackBoundaries && (a.renderBoundaryRouteId = e),
            (s = f
                ? {
                      id: e,
                      get data() {
                          console.error(
                              "You cannot `useLoaderData` in an error boundary."
                          );
                      },
                  }
                : { id: e, data: o }),
            (d = h.createElement(
                Se,
                { location: t, component: m, error: f },
                d
            ));
    }
    return h.createElement(tn.Provider, { value: s }, d);
}
function nn(e, t) {
    let [r, n] = h.useState(!1),
        [a, o] = h.useState(!1),
        {
            onFocus: i,
            onBlur: l,
            onMouseEnter: m,
            onMouseLeave: d,
            onTouchStart: s,
        } = t;
    h.useEffect(() => {
        e === "render" && o(!0);
    }, [e]);
    let f = () => {
            e === "intent" && n(!0);
        },
        g = () => {
            e === "intent" && (n(!1), o(!1));
        };
    return (
        h.useEffect(() => {
            if (r) {
                let R = setTimeout(() => {
                    o(!0);
                }, 100);
                return () => {
                    clearTimeout(R);
                };
            }
        }, [r]),
        [
            a,
            {
                onFocus: ke(i, f),
                onBlur: ke(l, g),
                onMouseEnter: ke(m, f),
                onMouseLeave: ke(d, g),
                onTouchStart: ke(s, f),
            },
        ]
    );
}
var rn = h.forwardRef(({ to: e, prefetch: t = "none", ...r }, n) => {
    let a = le(e),
        [o, i] = nn(t, r);
    return h.createElement(
        h.Fragment,
        null,
        h.createElement(Ct, T({ ref: n, to: e }, r, i)),
        o ? h.createElement(Ue, { page: a }) : null
    );
});
rn.displayName = "NavLink";
var an = h.forwardRef(({ to: e, prefetch: t = "none", ...r }, n) => {
    let a = le(e),
        [o, i] = nn(t, r);
    return h.createElement(
        h.Fragment,
        null,
        h.createElement(Xe, T({ ref: n, to: e }, r, i)),
        o ? h.createElement(Ue, { page: a }) : null
    );
});
an.displayName = "Link";
function ke(e, t) {
    return (r) => {
        e && e(r), r.defaultPrevented || t(r);
    };
}
function dr() {
    let { matches: e, routeModules: t, manifest: r } = Y(),
        n = h.useMemo(() => Mt(e, t, r), [e, t, r]);
    return h.createElement(
        h.Fragment,
        null,
        n.map((a) => {
            if (Fe(a)) return h.createElement(Ue, T({ key: a.page }, a));
            let o = null;
            return (
                "useId" in h
                    ? (a.imagesrcset &&
                          ((a.imageSrcSet = o = a.imagesrcset),
                          delete a.imagesrcset),
                      a.imagesizes &&
                          ((a.imageSizes = a.imagesizes), delete a.imagesizes))
                    : (a.imageSrcSet &&
                          ((a.imagesrcset = o = a.imageSrcSet),
                          delete a.imageSrcSet),
                      a.imageSizes &&
                          ((a.imagesizes = a.imageSizes), delete a.imageSizes)),
                h.createElement(
                    "link",
                    T({ key: a.rel + (a.href || "") + (o || "") }, a)
                )
            );
        })
    );
}
function Ue({ page: e, ...t }) {
    let { clientRoutes: r } = Y(),
        n = h.useMemo(() => ce(r, e), [r, e]);
    return n
        ? h.createElement(hr, T({ page: e, matches: n }, t))
        : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function fr(e) {
    let { routeModules: t } = Y(),
        [r, n] = h.useState([]);
    return (
        h.useEffect(() => {
            let a = !1;
            return (
                Tt(e, t).then((o) => {
                    a || n(o);
                }),
                () => {
                    a = !0;
                }
            );
        }, [e, t]),
        r
    );
}
function hr({ page: e, matches: t, ...r }) {
    let n = I(),
        { matches: a, manifest: o } = Y(),
        i = h.useMemo(() => qe(e, t, a, n, "data"), [e, t, a, n]),
        l = h.useMemo(() => qe(e, t, a, n, "assets"), [e, t, a, n]),
        m = h.useMemo(() => Bt(e, i, o), [i, e, o]),
        d = h.useMemo(() => It(l, o), [l, o]),
        s = fr(l);
    return h.createElement(
        h.Fragment,
        null,
        m.map((f) =>
            h.createElement(
                "link",
                T({ key: f, rel: "prefetch", as: "fetch", href: f }, r)
            )
        ),
        d.map((f) =>
            h.createElement(
                "link",
                T({ key: f, rel: "modulepreload", href: f }, r)
            )
        ),
        s.map((f) => h.createElement("link", T({ key: f.href }, f)))
    );
}
function pr() {
    let { matches: e, routeData: t, routeModules: r } = Y(),
        n = I(),
        a = {},
        o = {};
    for (let i of e) {
        let l = i.route.id,
            m = t[l],
            d = i.params,
            s = r[l];
        if (s.meta) {
            let f =
                typeof s.meta == "function"
                    ? s.meta({
                          data: m,
                          parentsData: o,
                          params: d,
                          location: n,
                      })
                    : s.meta;
            Object.assign(a, f);
        }
        o[l] = m;
    }
    return h.createElement(
        h.Fragment,
        null,
        Object.entries(a).map(([i, l]) => {
            if (!l) return null;
            if (["charset", "charSet"].includes(i))
                return h.createElement("meta", { key: "charset", charSet: l });
            if (i === "title")
                return h.createElement("title", { key: "title" }, String(l));
            let m = i.startsWith("og:");
            return [l]
                .flat()
                .map((d) =>
                    m
                        ? h.createElement("meta", {
                              property: i,
                              content: d,
                              key: i + d,
                          })
                        : typeof d == "string"
                        ? h.createElement("meta", {
                              name: i,
                              content: d,
                              key: i + d,
                          })
                        : h.createElement(
                              "meta",
                              T({ key: i + JSON.stringify(d) }, d)
                          )
                );
        })
    );
}
var Xt = !1;
function mr(e) {
    let {
        manifest: t,
        matches: r,
        pendingLocation: n,
        clientRoutes: a,
        serverHandoffString: o,
    } = Y();
    h.useEffect(() => {
        Xt = !0;
    }, []);
    let i = h.useMemo(() => {
            let s = o ? `window.__remixContext = ${o};` : "",
                f = `${r.map(
                    (g, R) => `import ${JSON.stringify(t.url)};
import * as route${R} from ${JSON.stringify(t.routes[g.route.id].module)};`
                ).join(`
`)}
window.__remixRouteModules = {${r
                    .map((g, R) => `${JSON.stringify(g.route.id)}:route${R}`)
                    .join(",")}};

import(${JSON.stringify(t.entry.module)});`;
            return h.createElement(
                h.Fragment,
                null,
                h.createElement(
                    "script",
                    T({}, e, {
                        suppressHydrationWarning: !0,
                        dangerouslySetInnerHTML: Ze(s),
                        type: void 0,
                    })
                ),
                h.createElement(
                    "script",
                    T({}, e, {
                        dangerouslySetInnerHTML: Ze(f),
                        type: "module",
                        async: !0,
                    })
                )
            );
        }, []),
        l = h.useMemo(() => {
            if (n) {
                let s = ce(a, n);
                return D(s, `No routes match path "${n.pathname}"`), s;
            }
            return [];
        }, [n, a]),
        m = r
            .concat(l)
            .map((s) => {
                let f = t.routes[s.route.id];
                return (f.imports || []).concat([f.module]);
            })
            .flat(1),
        d = t.entry.imports.concat(m);
    return h.createElement(
        h.Fragment,
        null,
        h.createElement("link", {
            rel: "modulepreload",
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
        }),
        yr(d).map((s) =>
            h.createElement("link", {
                key: s,
                rel: "modulepreload",
                href: s,
                crossOrigin: e.crossOrigin,
            })
        ),
        Xt ? null : i
    );
}
function yr(e) {
    return [...new Set(e)];
}
var on = h.forwardRef((e, t) => h.createElement(sn, T({}, e, { ref: t })));
on.displayName = "Form";
var sn = h.forwardRef(
    (
        {
            reloadDocument: e = !1,
            replace: t = !1,
            method: r = "get",
            action: n,
            encType: a = "application/x-www-form-urlencoded",
            fetchKey: o,
            onSubmit: i,
            ...l
        },
        m
    ) => {
        let d = gr(o),
            s = r.toLowerCase() === "get" ? "get" : "post",
            f = lt(n);
        return h.createElement(
            "form",
            T(
                {
                    ref: m,
                    method: s,
                    action: f,
                    encType: a,
                    onSubmit: e
                        ? void 0
                        : (g) => {
                              if ((i && i(g), g.defaultPrevented)) return;
                              g.preventDefault();
                              let R = g.nativeEvent.submitter;
                              d(R || g.currentTarget, {
                                  method: r,
                                  replace: t,
                              });
                          },
                },
                l
            )
        );
    }
);
sn.displayName = "FormImpl";
function lt(e, t = "get") {
    let { id: r } = lr(),
        n = te(e ?? "."),
        a = I(),
        { search: o, hash: i } = n,
        l = r.endsWith("/index");
    if (e == null && ((o = a.search), (i = a.hash), l)) {
        let m = new URLSearchParams(o);
        m.delete("index"), (o = m.toString() ? `?${m.toString()}` : "");
    }
    return (
        (e == null || e === ".") &&
            l &&
            (o = o ? o.replace(/^\?/, "?index&") : "?index"),
        Q({ pathname: n.pathname, search: o, hash: i })
    );
}
var Gt = "get",
    qt = "application/x-www-form-urlencoded";
function gr(e) {
    let t = we(),
        r = lt(),
        { transitionManager: n } = Y();
    return h.useCallback(
        (a, o = {}) => {
            let i, l, m, d;
            if (Er(a)) {
                let y = o.submissionTrigger;
                (i = o.method || a.getAttribute("method") || Gt),
                    (l = o.action || a.getAttribute("action") || r),
                    (m = o.encType || a.getAttribute("enctype") || qt),
                    (d = new FormData(a)),
                    y && y.name && d.append(y.name, y.value);
            } else if (
                wr(a) ||
                (br(a) && (a.type === "submit" || a.type === "image"))
            ) {
                let y = a.form;
                if (y == null)
                    throw new Error(
                        "Cannot submit a <button> without a <form>"
                    );
                (i =
                    o.method ||
                    a.getAttribute("formmethod") ||
                    y.getAttribute("method") ||
                    Gt),
                    (l =
                        o.action ||
                        a.getAttribute("formaction") ||
                        y.getAttribute("action") ||
                        r),
                    (m =
                        o.encType ||
                        a.getAttribute("formenctype") ||
                        y.getAttribute("enctype") ||
                        qt),
                    (d = new FormData(y)),
                    a.name && d.append(a.name, a.value);
            } else {
                if (We(a))
                    throw new Error(
                        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
                    );
                if (
                    ((i = o.method || "get"),
                    (l = o.action || r),
                    (m = o.encType || "application/x-www-form-urlencoded"),
                    a instanceof FormData)
                )
                    d = a;
                else if (((d = new FormData()), a instanceof URLSearchParams))
                    for (let [y, w] of a) d.append(y, w);
                else if (a != null)
                    for (let y of Object.keys(a)) d.append(y, a[y]);
            }
            if (typeof document > "u")
                throw new Error(
                    "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
                );
            let { protocol: s, host: f } = window.location,
                g = new URL(l, `${s}//${f}`);
            if (i.toLowerCase() === "get") {
                let y = new URLSearchParams(),
                    w = !1;
                for (let [O, M] of d)
                    if (typeof M == "string") (w = !0), y.append(O, M);
                    else
                        throw new Error(
                            "Cannot submit binary form data using GET"
                        );
                let P = new URLSearchParams(g.search)
                    .getAll("index")
                    .some((O) => O === "");
                e != null && P && ((w = !0), y.append("index", "")),
                    (g.search = w ? `?${y.toString()}` : "");
            }
            let R = {
                formData: d,
                action: g.pathname + g.search,
                method: i.toUpperCase(),
                encType: m,
                key: Math.random().toString(36).substr(2, 8),
            };
            e
                ? n.send({
                      type: "fetcher",
                      href: R.action,
                      submission: R,
                      key: e,
                  })
                : (vr(R), t(g.pathname + g.search, { replace: o.replace }));
        },
        [r, e, t, n]
    );
}
var st;
function vr(e) {
    st = e;
}
function Rr() {
    let e = st;
    return (st = void 0), e;
}
function We(e) {
    return e != null && typeof e.tagName == "string";
}
function wr(e) {
    return We(e) && e.tagName.toLowerCase() === "button";
}
function Er(e) {
    return We(e) && e.tagName.toLowerCase() === "form";
}
function br(e) {
    return We(e) && e.tagName.toLowerCase() === "input";
}
function Je(e) {
    h.useEffect(
        () => (
            window.addEventListener("beforeunload", e),
            () => {
                window.removeEventListener("beforeunload", e);
            }
        ),
        [e]
    );
}
function ct() {
    let { transitionManager: e } = Y();
    return e.getState().transition;
}
var xr = () => null;
function Sr(e) {
    let t = ne.useRef();
    t.current == null && (t.current = vt({ window }));
    let r = t.current,
        [n, a] = ne.useReducer((i, l) => l, {
            action: r.action,
            location: r.location,
        });
    ne.useLayoutEffect(() => r.listen(a), [r]);
    let o = window.__remixContext;
    return (
        (o.manifest = window.__remixManifest),
        (o.routeModules = window.__remixRouteModules),
        (o.appState.trackBoundaries = !1),
        (o.appState.trackCatchBoundaries = !1),
        ne.createElement(Zt, {
            context: o,
            action: n.action,
            location: n.location,
            navigator: r,
        })
    );
}
var F = ie(se());
var ut = "positions",
    je = {};
if (typeof document < "u") {
    let e = sessionStorage.getItem(ut);
    e && (je = JSON.parse(e));
}
function Nr({ nonce: e = void 0 }) {
    Pr(),
        F.useEffect(() => {
            window.history.scrollRestoration = "manual";
        }, []),
        Je(
            F.useCallback(() => {
                window.history.scrollRestoration = "auto";
            }, [])
        );
    let t = ((r) => {
        if (!window.history.state || !window.history.state.key) {
            let n = Math.random().toString(32).slice(2);
            window.history.replaceState({ key: n }, "");
        }
        try {
            let a = JSON.parse(sessionStorage.getItem(r) || "{}")[
                window.history.state.key
            ];
            typeof a == "number" && window.scrollTo(0, a);
        } catch (n) {
            console.error(n), sessionStorage.removeItem(r);
        }
    }).toString();
    return F.createElement("script", {
        nonce: e,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: { __html: `(${t})(${JSON.stringify(ut)})` },
    });
}
var ln = !1;
function Pr() {
    let e = I(),
        t = ct(),
        r = F.useRef(!1);
    F.useEffect(() => {
        t.submission && (r.current = !0);
    }, [t]),
        F.useEffect(() => {
            t.location && (je[e.key] = window.scrollY);
        }, [t, e]),
        Je(
            F.useCallback(() => {
                sessionStorage.setItem(ut, JSON.stringify(je));
            }, [])
        ),
        typeof document < "u" &&
            F.useLayoutEffect(() => {
                if (!ln) {
                    ln = !0;
                    return;
                }
                let n = je[e.key];
                if (n != null) {
                    window.scrollTo(0, n);
                    return;
                }
                if (e.hash) {
                    let a = document.getElementById(e.hash.slice(1));
                    if (a) {
                        a.scrollIntoView();
                        return;
                    }
                }
                if (r.current === !0) {
                    r.current = !1;
                    return;
                }
                window.scrollTo(0, 0);
            }, [e]),
        F.useEffect(() => {
            t.submission && (r.current = !0);
        }, [t]);
}
export { Pt as a, dr as b, pr as c, mr as d, xr as e, Sr as f, Nr as g };
/**
 * @remix-run/react v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
