(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) o(h);
  new MutationObserver((h) => {
    for (const p of h)
      if (p.type === "childList")
        for (const y of p.addedNodes)
          y.tagName === "LINK" && y.rel === "modulepreload" && o(y);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(h) {
    const p = {};
    return (
      h.integrity && (p.integrity = h.integrity),
      h.referrerPolicy && (p.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : h.crossOrigin === "anonymous"
        ? (p.credentials = "omit")
        : (p.credentials = "same-origin"),
      p
    );
  }
  function o(h) {
    if (h.ep) return;
    h.ep = !0;
    const p = f(h);
    fetch(h.href, p);
  }
})();
function lv(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var ch = { exports: {} },
  Wu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jm;
function iv() {
  if (Jm) return Wu;
  Jm = 1;
  var r = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.fragment");
  function f(o, h, p) {
    var y = null;
    if (
      (p !== void 0 && (y = "" + p),
      h.key !== void 0 && (y = "" + h.key),
      "key" in h)
    ) {
      p = {};
      for (var T in h) T !== "key" && (p[T] = h[T]);
    } else p = h;
    return (
      (h = p.ref),
      { $$typeof: r, type: o, key: y, ref: h !== void 0 ? h : null, props: p }
    );
  }
  return (Wu.Fragment = u), (Wu.jsx = f), (Wu.jsxs = f), Wu;
}
var Fm;
function rv() {
  return Fm || ((Fm = 1), (ch.exports = iv())), ch.exports;
}
var J = rv(),
  fh = { exports: {} },
  St = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wm;
function sv() {
  if (Wm) return St;
  Wm = 1;
  var r = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    p = Symbol.for("react.consumer"),
    y = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    E = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    U = Symbol.iterator;
  function V(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (U && O[U]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var P = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    G = Object.assign,
    Q = {};
  function k(O, X, et) {
    (this.props = O),
      (this.context = X),
      (this.refs = Q),
      (this.updater = et || P);
  }
  (k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (O, X) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, O, X, "setState");
    }),
    (k.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    });
  function Z() {}
  Z.prototype = k.prototype;
  function st(O, X, et) {
    (this.props = O),
      (this.context = X),
      (this.refs = Q),
      (this.updater = et || P);
  }
  var at = (st.prototype = new Z());
  (at.constructor = st), G(at, k.prototype), (at.isPureReactComponent = !0);
  var Rt = Array.isArray,
    rt = { H: null, A: null, T: null, S: null, V: null },
    Tt = Object.prototype.hasOwnProperty;
  function At(O, X, et, I, ot, wt) {
    return (
      (et = wt.ref),
      {
        $$typeof: r,
        type: O,
        key: X,
        ref: et !== void 0 ? et : null,
        props: wt,
      }
    );
  }
  function Nt(O, X) {
    return At(O.type, X, void 0, void 0, void 0, O.props);
  }
  function Kt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === r;
  }
  function De(O) {
    var X = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (et) {
        return X[et];
      })
    );
  }
  var Ie = /\/+/g;
  function Se(O, X) {
    return typeof O == "object" && O !== null && O.key != null
      ? De("" + O.key)
      : X.toString(36);
  }
  function Ha() {}
  function qn(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then(Ha, Ha)
            : ((O.status = "pending"),
              O.then(
                function (X) {
                  O.status === "pending" &&
                    ((O.status = "fulfilled"), (O.value = X));
                },
                function (X) {
                  O.status === "pending" &&
                    ((O.status = "rejected"), (O.reason = X));
                }
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function _e(O, X, et, I, ot) {
    var wt = typeof O;
    (wt === "undefined" || wt === "boolean") && (O = null);
    var gt = !1;
    if (O === null) gt = !0;
    else
      switch (wt) {
        case "bigint":
        case "string":
        case "number":
          gt = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case r:
            case u:
              gt = !0;
              break;
            case A:
              return (gt = O._init), _e(gt(O._payload), X, et, I, ot);
          }
      }
    if (gt)
      return (
        (ot = ot(O)),
        (gt = I === "" ? "." + Se(O, 0) : I),
        Rt(ot)
          ? ((et = ""),
            gt != null && (et = gt.replace(Ie, "$&/") + "/"),
            _e(ot, X, et, "", function (On) {
              return On;
            }))
          : ot != null &&
            (Kt(ot) &&
              (ot = Nt(
                ot,
                et +
                  (ot.key == null || (O && O.key === ot.key)
                    ? ""
                    : ("" + ot.key).replace(Ie, "$&/") + "/") +
                  gt
              )),
            X.push(ot)),
        1
      );
    gt = 0;
    var He = I === "" ? "." : I + ":";
    if (Rt(O))
      for (var B = 0; B < O.length; B++)
        (I = O[B]), (wt = He + Se(I, B)), (gt += _e(I, X, et, wt, ot));
    else if (((B = V(O)), typeof B == "function"))
      for (O = B.call(O), B = 0; !(I = O.next()).done; )
        (I = I.value), (wt = He + Se(I, B++)), (gt += _e(I, X, et, wt, ot));
    else if (wt === "object") {
      if (typeof O.then == "function") return _e(qn(O), X, et, I, ot);
      throw (
        ((X = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (X === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : X) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return gt;
  }
  function j(O, X, et) {
    if (O == null) return O;
    var I = [],
      ot = 0;
    return (
      _e(O, I, "", "", function (wt) {
        return X.call(et, wt, ot++);
      }),
      I
    );
  }
  function tt(O) {
    if (O._status === -1) {
      var X = O._result;
      (X = X()),
        X.then(
          function (et) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = et));
          },
          function (et) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = et));
          }
        ),
        O._status === -1 && ((O._status = 0), (O._result = X));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ct =
    typeof reportError == "function"
      ? reportError
      : function (O) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var X = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof O == "object" &&
                O !== null &&
                typeof O.message == "string"
                  ? String(O.message)
                  : String(O),
              error: O,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", O);
            return;
          }
          console.error(O);
        };
  function qt() {}
  return (
    (St.Children = {
      map: j,
      forEach: function (O, X, et) {
        j(
          O,
          function () {
            X.apply(this, arguments);
          },
          et
        );
      },
      count: function (O) {
        var X = 0;
        return (
          j(O, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (O) {
        return (
          j(O, function (X) {
            return X;
          }) || []
        );
      },
      only: function (O) {
        if (!Kt(O))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return O;
      },
    }),
    (St.Component = k),
    (St.Fragment = f),
    (St.Profiler = h),
    (St.PureComponent = st),
    (St.StrictMode = o),
    (St.Suspense = E),
    (St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = rt),
    (St.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return rt.H.useMemoCache(O);
      },
    }),
    (St.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (St.cloneElement = function (O, X, et) {
      if (O == null)
        throw Error(
          "The argument must be a React element, but you passed " + O + "."
        );
      var I = G({}, O.props),
        ot = O.key,
        wt = void 0;
      if (X != null)
        for (gt in (X.ref !== void 0 && (wt = void 0),
        X.key !== void 0 && (ot = "" + X.key),
        X))
          !Tt.call(X, gt) ||
            gt === "key" ||
            gt === "__self" ||
            gt === "__source" ||
            (gt === "ref" && X.ref === void 0) ||
            (I[gt] = X[gt]);
      var gt = arguments.length - 2;
      if (gt === 1) I.children = et;
      else if (1 < gt) {
        for (var He = Array(gt), B = 0; B < gt; B++) He[B] = arguments[B + 2];
        I.children = He;
      }
      return At(O.type, ot, void 0, void 0, wt, I);
    }),
    (St.createContext = function (O) {
      return (
        (O = {
          $$typeof: y,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: p, _context: O }),
        O
      );
    }),
    (St.createElement = function (O, X, et) {
      var I,
        ot = {},
        wt = null;
      if (X != null)
        for (I in (X.key !== void 0 && (wt = "" + X.key), X))
          Tt.call(X, I) &&
            I !== "key" &&
            I !== "__self" &&
            I !== "__source" &&
            (ot[I] = X[I]);
      var gt = arguments.length - 2;
      if (gt === 1) ot.children = et;
      else if (1 < gt) {
        for (var He = Array(gt), B = 0; B < gt; B++) He[B] = arguments[B + 2];
        ot.children = He;
      }
      if (O && O.defaultProps)
        for (I in ((gt = O.defaultProps), gt))
          ot[I] === void 0 && (ot[I] = gt[I]);
      return At(O, wt, void 0, void 0, null, ot);
    }),
    (St.createRef = function () {
      return { current: null };
    }),
    (St.forwardRef = function (O) {
      return { $$typeof: T, render: O };
    }),
    (St.isValidElement = Kt),
    (St.lazy = function (O) {
      return { $$typeof: A, _payload: { _status: -1, _result: O }, _init: tt };
    }),
    (St.memo = function (O, X) {
      return { $$typeof: _, type: O, compare: X === void 0 ? null : X };
    }),
    (St.startTransition = function (O) {
      var X = rt.T,
        et = {};
      rt.T = et;
      try {
        var I = O(),
          ot = rt.S;
        ot !== null && ot(et, I),
          typeof I == "object" &&
            I !== null &&
            typeof I.then == "function" &&
            I.then(qt, ct);
      } catch (wt) {
        ct(wt);
      } finally {
        rt.T = X;
      }
    }),
    (St.unstable_useCacheRefresh = function () {
      return rt.H.useCacheRefresh();
    }),
    (St.use = function (O) {
      return rt.H.use(O);
    }),
    (St.useActionState = function (O, X, et) {
      return rt.H.useActionState(O, X, et);
    }),
    (St.useCallback = function (O, X) {
      return rt.H.useCallback(O, X);
    }),
    (St.useContext = function (O) {
      return rt.H.useContext(O);
    }),
    (St.useDebugValue = function () {}),
    (St.useDeferredValue = function (O, X) {
      return rt.H.useDeferredValue(O, X);
    }),
    (St.useEffect = function (O, X, et) {
      var I = rt.H;
      if (typeof et == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return I.useEffect(O, X);
    }),
    (St.useId = function () {
      return rt.H.useId();
    }),
    (St.useImperativeHandle = function (O, X, et) {
      return rt.H.useImperativeHandle(O, X, et);
    }),
    (St.useInsertionEffect = function (O, X) {
      return rt.H.useInsertionEffect(O, X);
    }),
    (St.useLayoutEffect = function (O, X) {
      return rt.H.useLayoutEffect(O, X);
    }),
    (St.useMemo = function (O, X) {
      return rt.H.useMemo(O, X);
    }),
    (St.useOptimistic = function (O, X) {
      return rt.H.useOptimistic(O, X);
    }),
    (St.useReducer = function (O, X, et) {
      return rt.H.useReducer(O, X, et);
    }),
    (St.useRef = function (O) {
      return rt.H.useRef(O);
    }),
    (St.useState = function (O) {
      return rt.H.useState(O);
    }),
    (St.useSyncExternalStore = function (O, X, et) {
      return rt.H.useSyncExternalStore(O, X, et);
    }),
    (St.useTransition = function () {
      return rt.H.useTransition();
    }),
    (St.version = "19.1.1"),
    St
  );
}
var Pm;
function xh() {
  return Pm || ((Pm = 1), (fh.exports = sv())), fh.exports;
}
var H = xh();
const uv = lv(H);
var dh = { exports: {} },
  Pu = {},
  hh = { exports: {} },
  mh = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im;
function ov() {
  return (
    Im ||
      ((Im = 1),
      (function (r) {
        function u(j, tt) {
          var ct = j.length;
          j.push(tt);
          t: for (; 0 < ct; ) {
            var qt = (ct - 1) >>> 1,
              O = j[qt];
            if (0 < h(O, tt)) (j[qt] = tt), (j[ct] = O), (ct = qt);
            else break t;
          }
        }
        function f(j) {
          return j.length === 0 ? null : j[0];
        }
        function o(j) {
          if (j.length === 0) return null;
          var tt = j[0],
            ct = j.pop();
          if (ct !== tt) {
            j[0] = ct;
            t: for (var qt = 0, O = j.length, X = O >>> 1; qt < X; ) {
              var et = 2 * (qt + 1) - 1,
                I = j[et],
                ot = et + 1,
                wt = j[ot];
              if (0 > h(I, ct))
                ot < O && 0 > h(wt, I)
                  ? ((j[qt] = wt), (j[ot] = ct), (qt = ot))
                  : ((j[qt] = I), (j[et] = ct), (qt = et));
              else if (ot < O && 0 > h(wt, ct))
                (j[qt] = wt), (j[ot] = ct), (qt = ot);
              else break t;
            }
          }
          return tt;
        }
        function h(j, tt) {
          var ct = j.sortIndex - tt.sortIndex;
          return ct !== 0 ? ct : j.id - tt.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var p = performance;
          r.unstable_now = function () {
            return p.now();
          };
        } else {
          var y = Date,
            T = y.now();
          r.unstable_now = function () {
            return y.now() - T;
          };
        }
        var E = [],
          _ = [],
          A = 1,
          U = null,
          V = 3,
          P = !1,
          G = !1,
          Q = !1,
          k = !1,
          Z = typeof setTimeout == "function" ? setTimeout : null,
          st = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        function Rt(j) {
          for (var tt = f(_); tt !== null; ) {
            if (tt.callback === null) o(_);
            else if (tt.startTime <= j)
              o(_), (tt.sortIndex = tt.expirationTime), u(E, tt);
            else break;
            tt = f(_);
          }
        }
        function rt(j) {
          if (((Q = !1), Rt(j), !G))
            if (f(E) !== null) (G = !0), Tt || ((Tt = !0), Se());
            else {
              var tt = f(_);
              tt !== null && _e(rt, tt.startTime - j);
            }
        }
        var Tt = !1,
          At = -1,
          Nt = 5,
          Kt = -1;
        function De() {
          return k ? !0 : !(r.unstable_now() - Kt < Nt);
        }
        function Ie() {
          if (((k = !1), Tt)) {
            var j = r.unstable_now();
            Kt = j;
            var tt = !0;
            try {
              t: {
                (G = !1), Q && ((Q = !1), st(At), (At = -1)), (P = !0);
                var ct = V;
                try {
                  e: {
                    for (
                      Rt(j), U = f(E);
                      U !== null && !(U.expirationTime > j && De());

                    ) {
                      var qt = U.callback;
                      if (typeof qt == "function") {
                        (U.callback = null), (V = U.priorityLevel);
                        var O = qt(U.expirationTime <= j);
                        if (((j = r.unstable_now()), typeof O == "function")) {
                          (U.callback = O), Rt(j), (tt = !0);
                          break e;
                        }
                        U === f(E) && o(E), Rt(j);
                      } else o(E);
                      U = f(E);
                    }
                    if (U !== null) tt = !0;
                    else {
                      var X = f(_);
                      X !== null && _e(rt, X.startTime - j), (tt = !1);
                    }
                  }
                  break t;
                } finally {
                  (U = null), (V = ct), (P = !1);
                }
                tt = void 0;
              }
            } finally {
              tt ? Se() : (Tt = !1);
            }
          }
        }
        var Se;
        if (typeof at == "function")
          Se = function () {
            at(Ie);
          };
        else if (typeof MessageChannel < "u") {
          var Ha = new MessageChannel(),
            qn = Ha.port2;
          (Ha.port1.onmessage = Ie),
            (Se = function () {
              qn.postMessage(null);
            });
        } else
          Se = function () {
            Z(Ie, 0);
          };
        function _e(j, tt) {
          At = Z(function () {
            j(r.unstable_now());
          }, tt);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (r.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Nt = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return V;
          }),
          (r.unstable_next = function (j) {
            switch (V) {
              case 1:
              case 2:
              case 3:
                var tt = 3;
                break;
              default:
                tt = V;
            }
            var ct = V;
            V = tt;
            try {
              return j();
            } finally {
              V = ct;
            }
          }),
          (r.unstable_requestPaint = function () {
            k = !0;
          }),
          (r.unstable_runWithPriority = function (j, tt) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var ct = V;
            V = j;
            try {
              return tt();
            } finally {
              V = ct;
            }
          }),
          (r.unstable_scheduleCallback = function (j, tt, ct) {
            var qt = r.unstable_now();
            switch (
              (typeof ct == "object" && ct !== null
                ? ((ct = ct.delay),
                  (ct = typeof ct == "number" && 0 < ct ? qt + ct : qt))
                : (ct = qt),
              j)
            ) {
              case 1:
                var O = -1;
                break;
              case 2:
                O = 250;
                break;
              case 5:
                O = 1073741823;
                break;
              case 4:
                O = 1e4;
                break;
              default:
                O = 5e3;
            }
            return (
              (O = ct + O),
              (j = {
                id: A++,
                callback: tt,
                priorityLevel: j,
                startTime: ct,
                expirationTime: O,
                sortIndex: -1,
              }),
              ct > qt
                ? ((j.sortIndex = ct),
                  u(_, j),
                  f(E) === null &&
                    j === f(_) &&
                    (Q ? (st(At), (At = -1)) : (Q = !0), _e(rt, ct - qt)))
                : ((j.sortIndex = O),
                  u(E, j),
                  G || P || ((G = !0), Tt || ((Tt = !0), Se()))),
              j
            );
          }),
          (r.unstable_shouldYield = De),
          (r.unstable_wrapCallback = function (j) {
            var tt = V;
            return function () {
              var ct = V;
              V = tt;
              try {
                return j.apply(this, arguments);
              } finally {
                V = ct;
              }
            };
          });
      })(mh)),
    mh
  );
}
var tp;
function cv() {
  return tp || ((tp = 1), (hh.exports = ov())), hh.exports;
}
var ph = { exports: {} },
  ke = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ep;
function fv() {
  if (ep) return ke;
  ep = 1;
  var r = xh();
  function u(E) {
    var _ = "https://react.dev/errors/" + E;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++)
        _ += "&args[]=" + encodeURIComponent(arguments[A]);
    }
    return (
      "Minified React error #" +
      E +
      "; visit " +
      _ +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f() {}
  var o = {
      d: {
        f,
        r: function () {
          throw Error(u(522));
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for("react.portal");
  function p(E, _, A) {
    var U =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: U == null ? null : "" + U,
      children: E,
      containerInfo: _,
      implementation: A,
    };
  }
  var y = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function T(E, _) {
    if (E === "font") return "";
    if (typeof _ == "string") return _ === "use-credentials" ? _ : "";
  }
  return (
    (ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (ke.createPortal = function (E, _) {
      var A =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
        throw Error(u(299));
      return p(E, _, null, A);
    }),
    (ke.flushSync = function (E) {
      var _ = y.T,
        A = o.p;
      try {
        if (((y.T = null), (o.p = 2), E)) return E();
      } finally {
        (y.T = _), (o.p = A), o.d.f();
      }
    }),
    (ke.preconnect = function (E, _) {
      typeof E == "string" &&
        (_
          ? ((_ = _.crossOrigin),
            (_ =
              typeof _ == "string"
                ? _ === "use-credentials"
                  ? _
                  : ""
                : void 0))
          : (_ = null),
        o.d.C(E, _));
    }),
    (ke.prefetchDNS = function (E) {
      typeof E == "string" && o.d.D(E);
    }),
    (ke.preinit = function (E, _) {
      if (typeof E == "string" && _ && typeof _.as == "string") {
        var A = _.as,
          U = T(A, _.crossOrigin),
          V = typeof _.integrity == "string" ? _.integrity : void 0,
          P = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
        A === "style"
          ? o.d.S(E, typeof _.precedence == "string" ? _.precedence : void 0, {
              crossOrigin: U,
              integrity: V,
              fetchPriority: P,
            })
          : A === "script" &&
            o.d.X(E, {
              crossOrigin: U,
              integrity: V,
              fetchPriority: P,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
      }
    }),
    (ke.preinitModule = function (E, _) {
      if (typeof E == "string")
        if (typeof _ == "object" && _ !== null) {
          if (_.as == null || _.as === "script") {
            var A = T(_.as, _.crossOrigin);
            o.d.M(E, {
              crossOrigin: A,
              integrity: typeof _.integrity == "string" ? _.integrity : void 0,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
          }
        } else _ == null && o.d.M(E);
    }),
    (ke.preload = function (E, _) {
      if (
        typeof E == "string" &&
        typeof _ == "object" &&
        _ !== null &&
        typeof _.as == "string"
      ) {
        var A = _.as,
          U = T(A, _.crossOrigin);
        o.d.L(E, A, {
          crossOrigin: U,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          nonce: typeof _.nonce == "string" ? _.nonce : void 0,
          type: typeof _.type == "string" ? _.type : void 0,
          fetchPriority:
            typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
          referrerPolicy:
            typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
          imageSrcSet:
            typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
          imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
          media: typeof _.media == "string" ? _.media : void 0,
        });
      }
    }),
    (ke.preloadModule = function (E, _) {
      if (typeof E == "string")
        if (_) {
          var A = T(_.as, _.crossOrigin);
          o.d.m(E, {
            as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
            crossOrigin: A,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          });
        } else o.d.m(E);
    }),
    (ke.requestFormReset = function (E) {
      o.d.r(E);
    }),
    (ke.unstable_batchedUpdates = function (E, _) {
      return E(_);
    }),
    (ke.useFormState = function (E, _, A) {
      return y.H.useFormState(E, _, A);
    }),
    (ke.useFormStatus = function () {
      return y.H.useHostTransitionStatus();
    }),
    (ke.version = "19.1.1"),
    ke
  );
}
var np;
function dv() {
  if (np) return ph.exports;
  np = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (u) {
        console.error(u);
      }
  }
  return r(), (ph.exports = fv()), ph.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function hv() {
  if (ap) return Pu;
  ap = 1;
  var r = cv(),
    u = xh(),
    f = dv();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function p(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function y(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function T(t) {
    if (p(t) !== t) throw Error(o(188));
  }
  function E(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = p(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var l = n.return;
      if (l === null) break;
      var s = l.alternate;
      if (s === null) {
        if (((a = l.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === s.child) {
        for (s = l.child; s; ) {
          if (s === n) return T(l), t;
          if (s === a) return T(l), e;
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) (n = l), (a = s);
      else {
        for (var m = !1, g = l.child; g; ) {
          if (g === n) {
            (m = !0), (n = l), (a = s);
            break;
          }
          if (g === a) {
            (m = !0), (a = l), (n = s);
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = s.child; g; ) {
            if (g === n) {
              (m = !0), (n = s), (a = l);
              break;
            }
            if (g === a) {
              (m = !0), (a = s), (n = l);
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function _(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = _(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var A = Object.assign,
    U = Symbol.for("react.element"),
    V = Symbol.for("react.transitional.element"),
    P = Symbol.for("react.portal"),
    G = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    k = Symbol.for("react.profiler"),
    Z = Symbol.for("react.provider"),
    st = Symbol.for("react.consumer"),
    at = Symbol.for("react.context"),
    Rt = Symbol.for("react.forward_ref"),
    rt = Symbol.for("react.suspense"),
    Tt = Symbol.for("react.suspense_list"),
    At = Symbol.for("react.memo"),
    Nt = Symbol.for("react.lazy"),
    Kt = Symbol.for("react.activity"),
    De = Symbol.for("react.memo_cache_sentinel"),
    Ie = Symbol.iterator;
  function Se(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Ie && t[Ie]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Ha = Symbol.for("react.client.reference");
  function qn(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ha ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case G:
        return "Fragment";
      case k:
        return "Profiler";
      case Q:
        return "StrictMode";
      case rt:
        return "Suspense";
      case Tt:
        return "SuspenseList";
      case Kt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case P:
          return "Portal";
        case at:
          return (t.displayName || "Context") + ".Provider";
        case st:
          return (t._context.displayName || "Context") + ".Consumer";
        case Rt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case At:
          return (
            (e = t.displayName || null), e !== null ? e : qn(t.type) || "Memo"
          );
        case Nt:
          (e = t._payload), (t = t._init);
          try {
            return qn(t(e));
          } catch {}
      }
    return null;
  }
  var _e = Array.isArray,
    j = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    tt = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ct = { pending: !1, data: null, method: null, action: null },
    qt = [],
    O = -1;
  function X(t) {
    return { current: t };
  }
  function et(t) {
    0 > O || ((t.current = qt[O]), (qt[O] = null), O--);
  }
  function I(t, e) {
    O++, (qt[O] = t.current), (t.current = e);
  }
  var ot = X(null),
    wt = X(null),
    gt = X(null),
    He = X(null);
  function B(t, e) {
    switch ((I(gt, e), I(wt, t), I(ot, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Tm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Tm(e)), (t = Am(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    et(ot), I(ot, t);
  }
  function On() {
    et(ot), et(wt), et(gt);
  }
  function ar(t) {
    t.memoizedState !== null && I(He, t);
    var e = ot.current,
      n = Am(e, t.type);
    e !== n && (I(wt, t), I(ot, n));
  }
  function hl(t) {
    wt.current === t && (et(ot), et(wt)),
      He.current === t && (et(He), (Xu._currentValue = ct));
  }
  var pn = Object.prototype.hasOwnProperty,
    Ba = r.unstable_scheduleCallback,
    Ss = r.unstable_cancelCallback,
    gn = r.unstable_shouldYield,
    Ts = r.unstable_requestPaint,
    lt = r.unstable_now,
    lr = r.unstable_getCurrentPriorityLevel,
    fo = r.unstable_ImmediatePriority,
    zf = r.unstable_UserBlockingPriority,
    si = r.unstable_NormalPriority,
    Hf = r.unstable_LowPriority,
    ho = r.unstable_IdlePriority,
    Bf = r.log,
    jf = r.unstable_setDisableYieldValue,
    $n = null,
    Xe = null;
  function ja(t) {
    if (
      (typeof Bf == "function" && jf(t),
      Xe && typeof Xe.setStrictMode == "function")
    )
      try {
        Xe.setStrictMode($n, t);
      } catch {}
  }
  var Qe = Math.clz32 ? Math.clz32 : mo,
    qf = Math.log,
    $f = Math.LN2;
  function mo(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((qf(t) / $f) | 0)) | 0;
  }
  var ir = 256,
    ca = 4194304;
  function qa(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Yn(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      s = t.suspendedLanes,
      m = t.pingedLanes;
    t = t.warmLanes;
    var g = a & 134217727;
    return (
      g !== 0
        ? ((a = g & ~s),
          a !== 0
            ? (l = qa(a))
            : ((m &= g),
              m !== 0
                ? (l = qa(m))
                : n || ((n = g & ~t), n !== 0 && (l = qa(n)))))
        : ((g = a & ~s),
          g !== 0
            ? (l = qa(g))
            : m !== 0
            ? (l = qa(m))
            : n || ((n = a & ~t), n !== 0 && (l = qa(n)))),
      l === 0
        ? 0
        : e !== 0 &&
          e !== l &&
          (e & s) === 0 &&
          ((s = l & -l),
          (n = e & -e),
          s >= n || (s === 32 && (n & 4194048) !== 0))
        ? e
        : l
    );
  }
  function ui(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Yf(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function po() {
    var t = ir;
    return (ir <<= 1), (ir & 4194048) === 0 && (ir = 256), t;
  }
  function go() {
    var t = ca;
    return (ca <<= 1), (ca & 62914560) === 0 && (ca = 4194304), t;
  }
  function As(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function oi(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Vf(t, e, n, a, l, s) {
    var m = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var g = t.entanglements,
      S = t.expirationTimes,
      x = t.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var $ = 31 - Qe(n),
        K = 1 << $;
      (g[$] = 0), (S[$] = -1);
      var M = x[$];
      if (M !== null)
        for (x[$] = null, $ = 0; $ < M.length; $++) {
          var L = M[$];
          L !== null && (L.lane &= -536870913);
        }
      n &= ~K;
    }
    a !== 0 && vo(t, a, 0),
      s !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(m & ~e));
  }
  function vo(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - Qe(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 4194090));
  }
  function yo(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - Qe(n),
        l = 1 << a;
      (l & e) | (t[a] & e) && (t[a] |= e), (n &= ~l);
    }
  }
  function Os(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ns(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ci() {
    var t = tt.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Gm(t.type));
  }
  function Gf(t, e) {
    var n = tt.p;
    try {
      return (tt.p = t), e();
    } finally {
      tt.p = n;
    }
  }
  var $a = Math.random().toString(36).slice(2),
    te = "__reactFiber$" + $a,
    Re = "__reactProps$" + $a,
    ml = "__reactContainer$" + $a,
    Ds = "__reactEvents$" + $a,
    kf = "__reactListeners$" + $a,
    fi = "__reactHandles$" + $a,
    Ya = "__reactResources$" + $a,
    Nn = "__reactMarker$" + $a;
  function pl(t) {
    delete t[te], delete t[Re], delete t[Ds], delete t[kf], delete t[fi];
  }
  function gl(t) {
    var e = t[te];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[ml] || n[te])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Rm(t); t !== null; ) {
            if ((n = t[te])) return n;
            t = Rm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function fa(t) {
    if ((t = t[te] || t[ml])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function di(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function vl(t) {
    var e = t[Ya];
    return (
      e ||
        (e = t[Ya] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function ge(t) {
    t[Nn] = !0;
  }
  var _o = new Set(),
    Eo = {};
  function Va(t, e) {
    Ga(t, e), Ga(t + "Capture", e);
  }
  function Ga(t, e) {
    for (Eo[t] = e, t = 0; t < e.length; t++) _o.add(e[t]);
  }
  var rr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    bo = {},
    So = {};
  function Kf(t) {
    return pn.call(So, t)
      ? !0
      : pn.call(bo, t)
      ? !1
      : rr.test(t)
      ? (So[t] = !0)
      : ((bo[t] = !0), !1);
  }
  function sr(t, e, n) {
    if (Kf(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function ur(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Dn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  var or, To;
  function yl(t) {
    if (or === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (or = (e && e[1]) || ""),
          (To =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      or +
      t +
      To
    );
  }
  var Rs = !1;
  function Cs(t, e) {
    if (!t || Rs) return "";
    Rs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (L) {
                  var M = L;
                }
                Reflect.construct(t, [], K);
              } else {
                try {
                  K.call();
                } catch (L) {
                  M = L;
                }
                t.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                M = L;
              }
              (K = t()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (L) {
            if (L && M && typeof L.stack == "string") return [L.stack, M.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      l &&
        l.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var s = a.DetermineComponentFrameRoot(),
        m = s[0],
        g = s[1];
      if (m && g) {
        var S = m.split(`
`),
          x = g.split(`
`);
        for (
          l = a = 0;
          a < S.length && !S[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; l < x.length && !x[l].includes("DetermineComponentFrameRoot"); )
          l++;
        if (a === S.length || l === x.length)
          for (
            a = S.length - 1, l = x.length - 1;
            1 <= a && 0 <= l && S[a] !== x[l];

          )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (S[a] !== x[l]) {
            if (a !== 1 || l !== 1)
              do
                if ((a--, l--, 0 > l || S[a] !== x[l])) {
                  var $ =
                    `
` + S[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      $.includes("<anonymous>") &&
                      ($ = $.replace("<anonymous>", t.displayName)),
                    $
                  );
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      (Rs = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? yl(n) : "";
  }
  function Xf(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return yl(t.type);
      case 16:
        return yl("Lazy");
      case 13:
        return yl("Suspense");
      case 19:
        return yl("SuspenseList");
      case 0:
      case 15:
        return Cs(t.type, !1);
      case 11:
        return Cs(t.type.render, !1);
      case 1:
        return Cs(t.type, !0);
      case 31:
        return yl("Activity");
      default:
        return "";
    }
  }
  function Ao(t) {
    try {
      var e = "";
      do (e += Xf(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function tn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Oo(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function _l(t) {
    var e = Oo(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        s = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (m) {
            (a = "" + m), s.call(this, m);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (m) {
            a = "" + m;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function cr(t) {
    t._valueTracker || (t._valueTracker = _l(t));
  }
  function Qf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = Oo(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function da(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Zf = /[\n"\\]/g;
  function en(t) {
    return t.replace(Zf, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function xs(t, e, n, a, l, s, m, g) {
    (t.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.type = m)
        : t.removeAttribute("type"),
      e != null
        ? m === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + tn(e))
          : t.value !== "" + tn(e) && (t.value = "" + tn(e))
        : (m !== "submit" && m !== "reset") || t.removeAttribute("value"),
      e != null
        ? ws(t, m, tn(e))
        : n != null
        ? ws(t, m, tn(n))
        : a != null && t.removeAttribute("value"),
      l == null && s != null && (t.defaultChecked = !!s),
      l != null &&
        (t.checked = l && typeof l != "function" && typeof l != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.name = "" + tn(g))
        : t.removeAttribute("name");
  }
  function No(t, e, n, a, l, s, m, g) {
    if (
      (s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (t.type = s),
      e != null || n != null)
    ) {
      if (!((s !== "submit" && s !== "reset") || e != null)) return;
      (n = n != null ? "" + tn(n) : ""),
        (e = e != null ? "" + tn(e) : n),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? l),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = g ? t.checked : !!a),
      (t.defaultChecked = !!a),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (t.name = m);
  }
  function ws(t, e, n) {
    (e === "number" && da(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function El(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var l = 0; l < n.length; l++) e["$" + n[l]] = !0;
      for (n = 0; n < t.length; n++)
        (l = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== l && (t[n].selected = l),
          l && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + tn(n), e = null, l = 0; l < t.length; l++) {
        if (t[l].value === n) {
          (t[l].selected = !0), a && (t[l].defaultSelected = !0);
          return;
        }
        e !== null || t[l].disabled || (e = t[l]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function fr(t, e, n) {
    if (
      e != null &&
      ((e = "" + tn(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + tn(n) : "";
  }
  function ka(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (_e(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), (e = n);
    }
    (n = tn(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a);
  }
  function Vn(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Jf = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Do(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || Jf.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Ro(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var l in e)
        (a = e[l]), e.hasOwnProperty(l) && n[l] !== a && Do(t, l, a);
    } else for (var s in e) e.hasOwnProperty(s) && Do(t, s, e[s]);
  }
  function Ms(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ff = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Wf =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function bl(t) {
    return Wf.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Ls = null;
  function Us(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var vn = null,
    re = null;
  function Be(t) {
    var e = fa(t);
    if (e && (t = e.stateNode)) {
      var n = t[Re] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (xs(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + en("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var l = a[Re] || null;
                if (!l) throw Error(o(90));
                xs(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (a = n[e]), a.form === t.form && Qf(a);
          }
          break t;
        case "textarea":
          fr(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && El(t, !!n.multiple, e, !1);
      }
    }
  }
  var Ce = !1;
  function Te(t, e, n) {
    if (Ce) return t(e, n);
    Ce = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ce = !1),
        (vn !== null || re !== null) &&
          (Zc(), vn && ((e = vn), (t = re), (re = vn = null), Be(e), t)))
      )
        for (e = 0; e < t.length; e++) Be(t[e]);
    }
  }
  function ha(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[Re] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var je = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Gn = !1;
  if (je)
    try {
      var Rn = {};
      Object.defineProperty(Rn, "passive", {
        get: function () {
          Gn = !0;
        },
      }),
        window.addEventListener("test", Rn, Rn),
        window.removeEventListener("test", Rn, Rn);
    } catch {
      Gn = !1;
    }
  var kn = null,
    hi = null,
    Kn = null;
  function zs() {
    if (Kn) return Kn;
    var t,
      e = hi,
      n = e.length,
      a,
      l = "value" in kn ? kn.value : kn.textContent,
      s = l.length;
    for (t = 0; t < n && e[t] === l[t]; t++);
    var m = n - t;
    for (a = 1; a <= m && e[n - a] === l[s - a]; a++);
    return (Kn = l.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Sl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Tl() {
    return !0;
  }
  function Hs() {
    return !1;
  }
  function xe(t) {
    function e(n, a, l, s, m) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = s),
        (this.target = m),
        (this.currentTarget = null);
      for (var g in t)
        t.hasOwnProperty(g) && ((n = t[g]), (this[g] = n ? n(s) : s[g]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Tl
          : Hs),
        (this.isPropagationStopped = Hs),
        this
      );
    }
    return (
      A(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Tl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Tl));
        },
        persist: function () {},
        isPersistent: Tl,
      }),
      e
    );
  }
  var ma = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    mi = xe(ma),
    Al = A({}, ma, { view: 0, detail: 0 }),
    Co = xe(Al),
    dr,
    hr,
    Ol,
    pi = A({}, Al, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: yi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ol &&
              (Ol && t.type === "mousemove"
                ? ((dr = t.screenX - Ol.screenX), (hr = t.screenY - Ol.screenY))
                : (hr = dr = 0),
              (Ol = t)),
            dr);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : hr;
      },
    }),
    yn = xe(pi),
    Ze = A({}, pi, { dataTransfer: 0 }),
    Ka = xe(Ze),
    nn = A({}, Al, { relatedTarget: 0 }),
    gi = xe(nn),
    Pf = A({}, ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    If = xe(Pf),
    Bs = A({}, ma, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Cn = xe(Bs),
    Xa = A({}, ma, { data: 0 }),
    vi = xe(Xa),
    Nl = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    js = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    xo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Dl(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = xo[t])
      ? !!e[t]
      : !1;
  }
  function yi() {
    return Dl;
  }
  var wo = A({}, Al, {
      key: function (t) {
        if (t.key) {
          var e = Nl[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Sl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? js[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yi,
      charCode: function (t) {
        return t.type === "keypress" ? Sl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Sl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    Xn = xe(wo),
    td = A({}, pi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Qn = xe(td),
    mr = A({}, Al, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yi,
    }),
    Mo = xe(mr),
    ed = A({}, ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _i = xe(ed),
    qs = A({}, pi, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ei = xe(qs),
    nd = A({}, ma, { newState: 0, oldState: 0 }),
    Lo = xe(nd),
    Uo = [9, 13, 27, 32],
    pr = je && "CompositionEvent" in window,
    bi = null;
  je && "documentMode" in document && (bi = document.documentMode);
  var ad = je && "TextEvent" in window && !bi,
    zo = je && (!pr || (bi && 8 < bi && 11 >= bi)),
    $s = " ",
    Qa = !1;
  function Ho(t, e) {
    switch (t) {
      case "keyup":
        return Uo.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bo(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Za = !1;
  function ld(t, e) {
    switch (t) {
      case "compositionend":
        return Bo(e);
      case "keypress":
        return e.which !== 32 ? null : ((Qa = !0), $s);
      case "textInput":
        return (t = e.data), t === $s && Qa ? null : t;
      default:
        return null;
    }
  }
  function Ys(t, e) {
    if (Za)
      return t === "compositionend" || (!pr && Ho(t, e))
        ? ((t = zs()), (Kn = hi = kn = null), (Za = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return zo && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var gr = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function jo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!gr[t.type] : e === "textarea";
  }
  function vr(t, e, n, a) {
    vn ? (re ? re.push(a) : (re = [a])) : (vn = a),
      (e = tf(e, "onChange")),
      0 < e.length &&
        ((n = new mi("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e }));
  }
  var Si = null,
    pa = null;
  function id(t) {
    ym(t, 0);
  }
  function Ti(t) {
    var e = di(t);
    if (Qf(e)) return t;
  }
  function yr(t, e) {
    if (t === "change") return e;
  }
  var _r = !1;
  if (je) {
    var Vs;
    if (je) {
      var Gs = "oninput" in document;
      if (!Gs) {
        var Er = document.createElement("div");
        Er.setAttribute("oninput", "return;"),
          (Gs = typeof Er.oninput == "function");
      }
      Vs = Gs;
    } else Vs = !1;
    _r = Vs && (!document.documentMode || 9 < document.documentMode);
  }
  function ks() {
    Si && (Si.detachEvent("onpropertychange", Rl), (pa = Si = null));
  }
  function Rl(t) {
    if (t.propertyName === "value" && Ti(pa)) {
      var e = [];
      vr(e, pa, t, Us(t)), Te(id, e);
    }
  }
  function Ks(t, e, n) {
    t === "focusin"
      ? (ks(), (Si = e), (pa = n), Si.attachEvent("onpropertychange", Rl))
      : t === "focusout" && ks();
  }
  function rd(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ti(pa);
  }
  function qo(t, e) {
    if (t === "click") return Ti(e);
  }
  function sd(t, e) {
    if (t === "input" || t === "change") return Ti(e);
  }
  function ud(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var qe = typeof Object.is == "function" ? Object.is : ud;
  function xn(t, e) {
    if (qe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!pn.call(e, l) || !qe(t[l], e[l])) return !1;
    }
    return !0;
  }
  function $o(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Yo(t, e) {
    var n = $o(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = $o(n);
    }
  }
  function Vo(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Vo(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Xs(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = da(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = da(t.document);
    }
    return e;
  }
  function br(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Go = je && "documentMode" in document && 11 >= document.documentMode,
    Cl = null,
    Sr = null,
    Ai = null,
    Qs = !1;
  function Zs(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qs ||
      Cl == null ||
      Cl !== da(a) ||
      ((a = Cl),
      "selectionStart" in a && br(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ai && xn(Ai, a)) ||
        ((Ai = a),
        (a = tf(Sr, "onSelect")),
        0 < a.length &&
          ((e = new mi("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = Cl))));
  }
  function Ja(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var ga = {
      animationend: Ja("Animation", "AnimationEnd"),
      animationiteration: Ja("Animation", "AnimationIteration"),
      animationstart: Ja("Animation", "AnimationStart"),
      transitionrun: Ja("Transition", "TransitionRun"),
      transitionstart: Ja("Transition", "TransitionStart"),
      transitioncancel: Ja("Transition", "TransitionCancel"),
      transitionend: Ja("Transition", "TransitionEnd"),
    },
    Js = {},
    ko = {};
  je &&
    ((ko = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ga.animationend.animation,
      delete ga.animationiteration.animation,
      delete ga.animationstart.animation),
    "TransitionEvent" in window || delete ga.transitionend.transition);
  function va(t) {
    if (Js[t]) return Js[t];
    if (!ga[t]) return t;
    var e = ga[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in ko) return (Js[t] = e[n]);
    return t;
  }
  var Ko = va("animationend"),
    Xo = va("animationiteration"),
    Qo = va("animationstart"),
    od = va("transitionrun"),
    cd = va("transitionstart"),
    fd = va("transitioncancel"),
    Zo = va("transitionend"),
    Jo = new Map(),
    Tr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Tr.push("scrollEnd");
  function an(t, e) {
    Jo.set(t, e), Va(e, [t]);
  }
  var Oi = new WeakMap();
  function ln(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Oi.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Ao(e) }), Oi.set(t, e), e);
    }
    return { value: t, source: e, stack: Ao(e) };
  }
  var rn = [],
    xl = 0,
    Fs = 0;
  function wl() {
    for (var t = xl, e = (Fs = xl = 0); e < t; ) {
      var n = rn[e];
      rn[e++] = null;
      var a = rn[e];
      rn[e++] = null;
      var l = rn[e];
      rn[e++] = null;
      var s = rn[e];
      if (((rn[e++] = null), a !== null && l !== null)) {
        var m = a.pending;
        m === null ? (l.next = l) : ((l.next = m.next), (m.next = l)),
          (a.pending = l);
      }
      s !== 0 && ya(n, l, s);
    }
  }
  function Ni(t, e, n, a) {
    (rn[xl++] = t),
      (rn[xl++] = e),
      (rn[xl++] = n),
      (rn[xl++] = a),
      (Fs |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Ar(t, e, n, a) {
    return Ni(t, e, n, a), Ml(t);
  }
  function Di(t, e) {
    return Ni(t, null, null, e), Ml(t);
  }
  function ya(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, s = t.return; s !== null; )
      (s.childLanes |= n),
        (a = s.alternate),
        a !== null && (a.childLanes |= n),
        s.tag === 22 &&
          ((t = s.stateNode), t === null || t._visibility & 1 || (l = !0)),
        (t = s),
        (s = s.return);
    return t.tag === 3
      ? ((s = t.stateNode),
        l &&
          e !== null &&
          ((l = 31 - Qe(n)),
          (t = s.hiddenUpdates),
          (a = t[l]),
          a === null ? (t[l] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        s)
      : null;
  }
  function Ml(t) {
    if (50 < ju) throw ((ju = 0), (Ud = null), Error(o(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ll = {};
  function Fo(t, e, n, a) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Je(t, e, n, a) {
    return new Fo(t, e, n, a);
  }
  function Or(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Zn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Je(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Wo(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Nr(t, e, n, a, l, s) {
    var m = 0;
    if (((a = t), typeof t == "function")) Or(t) && (m = 1);
    else if (typeof t == "string")
      m = Kg(t, n, ot.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Kt:
          return (t = Je(31, n, e, l)), (t.elementType = Kt), (t.lanes = s), t;
        case G:
          return Fa(n.children, l, s, e);
        case Q:
          (m = 8), (l |= 24);
          break;
        case k:
          return (
            (t = Je(12, n, e, l | 2)), (t.elementType = k), (t.lanes = s), t
          );
        case rt:
          return (t = Je(13, n, e, l)), (t.elementType = rt), (t.lanes = s), t;
        case Tt:
          return (t = Je(19, n, e, l)), (t.elementType = Tt), (t.lanes = s), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Z:
              case at:
                m = 10;
                break t;
              case st:
                m = 9;
                break t;
              case Rt:
                m = 11;
                break t;
              case At:
                m = 14;
                break t;
              case Nt:
                (m = 16), (a = null);
                break t;
            }
          (m = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = Je(m, n, e, l)), (e.elementType = t), (e.type = a), (e.lanes = s), e
    );
  }
  function Fa(t, e, n, a) {
    return (t = Je(7, t, a, e)), (t.lanes = n), t;
  }
  function Ws(t, e, n) {
    return (t = Je(6, t, null, e)), (t.lanes = n), t;
  }
  function Dr(t, e, n) {
    return (
      (e = Je(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Wa = [],
    Ul = 0,
    Jn = null,
    Rr = 0,
    sn = [],
    un = 0,
    Pa = null,
    Fn = 1,
    we = "";
  function Ia(t, e) {
    (Wa[Ul++] = Rr), (Wa[Ul++] = Jn), (Jn = t), (Rr = e);
  }
  function Ri(t, e, n) {
    (sn[un++] = Fn), (sn[un++] = we), (sn[un++] = Pa), (Pa = t);
    var a = Fn;
    t = we;
    var l = 32 - Qe(a) - 1;
    (a &= ~(1 << l)), (n += 1);
    var s = 32 - Qe(e) + l;
    if (30 < s) {
      var m = l - (l % 5);
      (s = (a & ((1 << m) - 1)).toString(32)),
        (a >>= m),
        (l -= m),
        (Fn = (1 << (32 - Qe(e) + l)) | (n << l) | a),
        (we = s + t);
    } else (Fn = (1 << s) | (n << l) | a), (we = t);
  }
  function Ps(t) {
    t.return !== null && (Ia(t, 1), Ri(t, 1, 0));
  }
  function Is(t) {
    for (; t === Jn; )
      (Jn = Wa[--Ul]), (Wa[Ul] = null), (Rr = Wa[--Ul]), (Wa[Ul] = null);
    for (; t === Pa; )
      (Pa = sn[--un]),
        (sn[un] = null),
        (we = sn[--un]),
        (sn[un] = null),
        (Fn = sn[--un]),
        (sn[un] = null);
  }
  var Me = null,
    ee = null,
    zt = !1,
    tl = null,
    wn = !1,
    tu = Error(o(519));
  function el(t) {
    var e = Error(o(418, ""));
    throw (zl(ln(e, t)), tu);
  }
  function Po(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[te] = t), (e[Re] = a), n)) {
      case "dialog":
        xt("cancel", e), xt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        xt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < $u.length; n++) xt($u[n], e);
        break;
      case "source":
        xt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        xt("error", e), xt("load", e);
        break;
      case "details":
        xt("toggle", e);
        break;
      case "input":
        xt("invalid", e),
          No(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          cr(e);
        break;
      case "select":
        xt("invalid", e);
        break;
      case "textarea":
        xt("invalid", e), ka(e, a.value, a.defaultValue, a.children), cr(e);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Sm(e.textContent, n)
        ? (a.popover != null && (xt("beforetoggle", e), xt("toggle", e)),
          a.onScroll != null && xt("scroll", e),
          a.onScrollEnd != null && xt("scrollend", e),
          a.onClick != null && (e.onclick = ef),
          (e = !0))
        : (e = !1),
      e || el(t);
  }
  function Io(t) {
    for (Me = t.return; Me; )
      switch (Me.tag) {
        case 5:
        case 13:
          wn = !1;
          return;
        case 27:
        case 3:
          wn = !0;
          return;
        default:
          Me = Me.return;
      }
  }
  function Ci(t) {
    if (t !== Me) return !1;
    if (!zt) return Io(t), (zt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Fd(t.type, t.memoizedProps))),
        (n = !n)),
      n && ee && el(t),
      Io(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                ee = ia(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        ee = null;
      }
    } else
      e === 27
        ? ((e = ee), Il(t.type) ? ((t = th), (th = null), (ee = t)) : (ee = e))
        : (ee = Me ? ia(t.stateNode.nextSibling) : null);
    return !0;
  }
  function xi() {
    (ee = Me = null), (zt = !1);
  }
  function on() {
    var t = tl;
    return (
      t !== null &&
        (dn === null ? (dn = t) : dn.push.apply(dn, t), (tl = null)),
      t
    );
  }
  function zl(t) {
    tl === null ? (tl = [t]) : tl.push(t);
  }
  var eu = X(null),
    _a = null,
    Mn = null;
  function Ea(t, e, n) {
    I(eu, e._currentValue), (e._currentValue = n);
  }
  function Wn(t) {
    (t._currentValue = eu.current), et(eu);
  }
  function Cr(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function nu(t, e, n, a) {
    var l = t.child;
    for (l !== null && (l.return = t); l !== null; ) {
      var s = l.dependencies;
      if (s !== null) {
        var m = l.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var g = s;
          s = l;
          for (var S = 0; S < e.length; S++)
            if (g.context === e[S]) {
              (s.lanes |= n),
                (g = s.alternate),
                g !== null && (g.lanes |= n),
                Cr(s.return, n, t),
                a || (m = null);
              break t;
            }
          s = g.next;
        }
      } else if (l.tag === 18) {
        if (((m = l.return), m === null)) throw Error(o(341));
        (m.lanes |= n),
          (s = m.alternate),
          s !== null && (s.lanes |= n),
          Cr(m, n, t),
          (m = null);
      } else m = l.child;
      if (m !== null) m.return = l;
      else
        for (m = l; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (((l = m.sibling), l !== null)) {
            (l.return = m.return), (m = l);
            break;
          }
          m = m.return;
        }
      l = m;
    }
  }
  function xr(t, e, n, a) {
    t = null;
    for (var l = e, s = !1; l !== null; ) {
      if (!s) {
        if ((l.flags & 524288) !== 0) s = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var m = l.alternate;
        if (m === null) throw Error(o(387));
        if (((m = m.memoizedProps), m !== null)) {
          var g = l.type;
          qe(l.pendingProps.value, m.value) ||
            (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (l === He.current) {
        if (((m = l.alternate), m === null)) throw Error(o(387));
        m.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (t !== null ? t.push(Xu) : (t = [Xu]));
      }
      l = l.return;
    }
    t !== null && nu(e, t, n, a), (e.flags |= 262144);
  }
  function nl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!qe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function al(t) {
    (_a = t),
      (Mn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Ae(t) {
    return tc(_a, t);
  }
  function wr(t, e) {
    return _a === null && al(t), tc(t, e);
  }
  function tc(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), Mn === null)) {
      if (t === null) throw Error(o(308));
      (Mn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Mn = Mn.next = e;
    return n;
  }
  var ec =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    dd = r.unstable_scheduleCallback,
    hd = r.unstable_NormalPriority,
    se = {
      $$typeof: at,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Mr() {
    return { controller: new ec(), data: new Map(), refCount: 0 };
  }
  function Hl(t) {
    t.refCount--,
      t.refCount === 0 &&
        dd(hd, function () {
          t.controller.abort();
        });
  }
  var ba = null,
    Lr = 0,
    Sa = 0,
    Bl = null;
  function Vh(t, e) {
    if (ba === null) {
      var n = (ba = []);
      (Lr = 0),
        (Sa = Yd()),
        (Bl = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return Lr++, e.then(Fe, Fe), e;
  }
  function Fe() {
    if (--Lr === 0 && ba !== null) {
      Bl !== null && (Bl.status = "fulfilled");
      var t = ba;
      (ba = null), (Sa = 0), (Bl = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function md(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var l = 0; l < n.length; l++) (0, n[l])(e);
        },
        function (l) {
          for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        }
      ),
      a
    );
  }
  var nc = j.S;
  j.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Vh(t, e),
      nc !== null && nc(t, e);
  };
  var ll = X(null);
  function au() {
    var t = ll.current;
    return t !== null ? t : Pt.pooledCache;
  }
  function wi(t, e) {
    e === null ? I(ll, ll.current) : I(ll, e.pool);
  }
  function lu() {
    var t = au();
    return t === null ? null : { parent: se._currentValue, pool: t };
  }
  var Mi = Error(o(460)),
    ac = Error(o(474)),
    Ur = Error(o(542)),
    iu = { then: function () {} };
  function lc(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function zr() {}
  function ru(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(zr, zr), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Hr(t), t);
      default:
        if (typeof e.status == "string") e.then(zr, zr);
        else {
          if (((t = Pt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  (l.status = "fulfilled"), (l.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  (l.status = "rejected"), (l.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Hr(t), t);
        }
        throw ((Li = e), Mi);
    }
  }
  var Li = null;
  function su() {
    if (Li === null) throw Error(o(459));
    var t = Li;
    return (Li = null), t;
  }
  function Hr(t) {
    if (t === Mi || t === Ur) throw Error(o(483));
  }
  var Ta = !1;
  function uu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ou(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Aa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Oa(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Gt & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
        (a.pending = e),
        (e = Ml(t)),
        ya(t, null, n),
        e
      );
    }
    return Ni(t, a, e, n), Ml(t);
  }
  function Ui(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), yo(t, n);
    }
  }
  function Pn(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var l = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          s === null ? (l = s = m) : (s = s.next = m), (n = n.next);
        } while (n !== null);
        s === null ? (l = s = e) : (s = s.next = e);
      } else l = s = e;
      (n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: s,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var cu = !1;
  function Br() {
    if (cu) {
      var t = Bl;
      if (t !== null) throw t;
    }
  }
  function We(t, e, n, a) {
    cu = !1;
    var l = t.updateQueue;
    Ta = !1;
    var s = l.firstBaseUpdate,
      m = l.lastBaseUpdate,
      g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var S = g,
        x = S.next;
      (S.next = null), m === null ? (s = x) : (m.next = x), (m = S);
      var $ = t.alternate;
      $ !== null &&
        (($ = $.updateQueue),
        (g = $.lastBaseUpdate),
        g !== m &&
          (g === null ? ($.firstBaseUpdate = x) : (g.next = x),
          ($.lastBaseUpdate = S)));
    }
    if (s !== null) {
      var K = l.baseState;
      (m = 0), ($ = x = S = null), (g = s);
      do {
        var M = g.lane & -536870913,
          L = M !== g.lane;
        if (L ? (Ut & M) === M : (a & M) === M) {
          M !== 0 && M === Sa && (cu = !0),
            $ !== null &&
              ($ = $.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var pt = t,
              ft = g;
            M = e;
            var Qt = n;
            switch (ft.tag) {
              case 1:
                if (((pt = ft.payload), typeof pt == "function")) {
                  K = pt.call(Qt, K, M);
                  break t;
                }
                K = pt;
                break t;
              case 3:
                pt.flags = (pt.flags & -65537) | 128;
              case 0:
                if (
                  ((pt = ft.payload),
                  (M = typeof pt == "function" ? pt.call(Qt, K, M) : pt),
                  M == null)
                )
                  break t;
                K = A({}, K, M);
                break t;
              case 2:
                Ta = !0;
            }
          }
          (M = g.callback),
            M !== null &&
              ((t.flags |= 64),
              L && (t.flags |= 8192),
              (L = l.callbacks),
              L === null ? (l.callbacks = [M]) : L.push(M));
        } else
          (L = {
            lane: M,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            $ === null ? ((x = $ = L), (S = K)) : ($ = $.next = L),
            (m |= M);
        if (((g = g.next), g === null)) {
          if (((g = l.shared.pending), g === null)) break;
          (L = g),
            (g = L.next),
            (L.next = null),
            (l.lastBaseUpdate = L),
            (l.shared.pending = null);
        }
      } while (!0);
      $ === null && (S = K),
        (l.baseState = S),
        (l.firstBaseUpdate = x),
        (l.lastBaseUpdate = $),
        s === null && (l.shared.lanes = 0),
        (Jl |= m),
        (t.lanes = m),
        (t.memoizedState = K);
    }
  }
  function fu(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function ic(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) fu(n[t], e);
  }
  var jl = X(null),
    zi = X(0);
  function du(t, e) {
    (t = ol), I(zi, t), I(jl, e), (ol = t | e.baseLanes);
  }
  function jr() {
    I(zi, ol), I(jl, jl.current);
  }
  function hu() {
    (ol = zi.current), et(jl), et(zi);
  }
  var In = 0,
    Et = null,
    $t = null,
    ue = null,
    Hi = !1,
    il = !1,
    rl = !1,
    qr = 0,
    Bi = 0,
    ql = null,
    pd = 0;
  function ie() {
    throw Error(o(321));
  }
  function _n(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!qe(t[n], e[n])) return !1;
    return !0;
  }
  function rc(t, e, n, a, l, s) {
    return (
      (In = s),
      (Et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (j.H = t === null || t.memoizedState === null ? xc : wc),
      (rl = !1),
      (s = n(a, l)),
      (rl = !1),
      il && (s = sc(e, n, a, l)),
      mu(t),
      s
    );
  }
  function mu(t) {
    j.H = Fr;
    var e = $t !== null && $t.next !== null;
    if (((In = 0), (ue = $t = Et = null), (Hi = !1), (Bi = 0), (ql = null), e))
      throw Error(o(300));
    t === null ||
      pe ||
      ((t = t.dependencies), t !== null && nl(t) && (pe = !0));
  }
  function sc(t, e, n, a) {
    Et = t;
    var l = 0;
    do {
      if ((il && (ql = null), (Bi = 0), (il = !1), 25 <= l))
        throw Error(o(301));
      if (((l += 1), (ue = $t = null), t.updateQueue != null)) {
        var s = t.updateQueue;
        (s.lastEffect = null),
          (s.events = null),
          (s.stores = null),
          s.memoCache != null && (s.memoCache.index = 0);
      }
      (j.H = Od), (s = e(n, a));
    } while (il);
    return s;
  }
  function gd() {
    var t = j.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? ji(e) : e),
      (t = t.useState()[0]),
      ($t !== null ? $t.memoizedState : null) !== t && (Et.flags |= 1024),
      e
    );
  }
  function pu() {
    var t = qr !== 0;
    return (qr = 0), t;
  }
  function gu(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function vu(t) {
    if (Hi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Hi = !1;
    }
    (In = 0), (ue = $t = Et = null), (il = !1), (Bi = qr = 0), (ql = null);
  }
  function $e() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ue === null ? (Et.memoizedState = ue = t) : (ue = ue.next = t), ue;
  }
  function oe() {
    if ($t === null) {
      var t = Et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = $t.next;
    var e = ue === null ? Et.memoizedState : ue.next;
    if (e !== null) (ue = e), ($t = t);
    else {
      if (t === null)
        throw Et.alternate === null ? Error(o(467)) : Error(o(310));
      ($t = t),
        (t = {
          memoizedState: $t.memoizedState,
          baseState: $t.baseState,
          baseQueue: $t.baseQueue,
          queue: $t.queue,
          next: null,
        }),
        ue === null ? (Et.memoizedState = ue = t) : (ue = ue.next = t);
    }
    return ue;
  }
  function yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ji(t) {
    var e = Bi;
    return (
      (Bi += 1),
      ql === null && (ql = []),
      (t = ru(ql, t, e)),
      (e = Et),
      (ue === null ? e.memoizedState : ue.next) === null &&
        ((e = e.alternate),
        (j.H = e === null || e.memoizedState === null ? xc : wc)),
      t
    );
  }
  function $r(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ji(t);
      if (t.$$typeof === at) return Ae(t);
    }
    throw Error(o(438, String(t)));
  }
  function _u(t) {
    var e = null,
      n = Et.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = Et.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = yu()), (Et.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = De;
    return e.index++, n;
  }
  function En(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Yr(t) {
    var e = oe();
    return $l(e, $t, t);
  }
  function $l(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var l = t.baseQueue,
      s = a.pending;
    if (s !== null) {
      if (l !== null) {
        var m = l.next;
        (l.next = s.next), (s.next = m);
      }
      (e.baseQueue = l = s), (a.pending = null);
    }
    if (((s = t.baseState), l === null)) t.memoizedState = s;
    else {
      e = l.next;
      var g = (m = null),
        S = null,
        x = e,
        $ = !1;
      do {
        var K = x.lane & -536870913;
        if (K !== x.lane ? (Ut & K) === K : (In & K) === K) {
          var M = x.revertLane;
          if (M === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: x.action,
                  hasEagerState: x.hasEagerState,
                  eagerState: x.eagerState,
                  next: null,
                }),
              K === Sa && ($ = !0);
          else if ((In & M) === M) {
            (x = x.next), M === Sa && ($ = !0);
            continue;
          } else
            (K = {
              lane: 0,
              revertLane: x.revertLane,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null,
            }),
              S === null ? ((g = S = K), (m = s)) : (S = S.next = K),
              (Et.lanes |= M),
              (Jl |= M);
          (K = x.action),
            rl && n(s, K),
            (s = x.hasEagerState ? x.eagerState : n(s, K));
        } else
          (M = {
            lane: K,
            revertLane: x.revertLane,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          }),
            S === null ? ((g = S = M), (m = s)) : (S = S.next = M),
            (Et.lanes |= K),
            (Jl |= K);
        x = x.next;
      } while (x !== null && x !== e);
      if (
        (S === null ? (m = s) : (S.next = g),
        !qe(s, t.memoizedState) && ((pe = !0), $ && ((n = Bl), n !== null)))
      )
        throw n;
      (t.memoizedState = s),
        (t.baseState = m),
        (t.baseQueue = S),
        (a.lastRenderedState = s);
    }
    return l === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Eu(t) {
    var e = oe(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      l = n.pending,
      s = e.memoizedState;
    if (l !== null) {
      n.pending = null;
      var m = (l = l.next);
      do (s = t(s, m.action)), (m = m.next);
      while (m !== l);
      qe(s, e.memoizedState) || (pe = !0),
        (e.memoizedState = s),
        e.baseQueue === null && (e.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, a];
  }
  function bu(t, e, n) {
    var a = Et,
      l = oe(),
      s = zt;
    if (s) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var m = !qe(($t || l).memoizedState, n);
    m && ((l.memoizedState = n), (pe = !0)), (l = l.queue);
    var g = Vr.bind(null, a, l, t);
    if (
      (qi(2048, 8, g, [t]),
      l.getSnapshot !== e || m || (ue !== null && ue.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Vl(9, kr(), Yl.bind(null, a, l, n, e), null),
        Pt === null)
      )
        throw Error(o(349));
      s || (In & 124) !== 0 || Su(a, e, n);
    }
    return n;
  }
  function Su(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = Et.updateQueue),
      e === null
        ? ((e = yu()), (Et.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Yl(t, e, n, a) {
    (e.value = n), (e.getSnapshot = a), Gr(e) && uc(t);
  }
  function Vr(t, e, n) {
    return n(function () {
      Gr(e) && uc(t);
    });
  }
  function Gr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !qe(t, n);
    } catch {
      return !0;
    }
  }
  function uc(t) {
    var e = Di(t, 2);
    e !== null && An(e, t, 2);
  }
  function Tu(t) {
    var e = $e();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), rl)) {
        ja(!0);
        try {
          n();
        } finally {
          ja(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: En,
        lastRenderedState: t,
      }),
      e
    );
  }
  function oc(t, e, n, a) {
    return (t.baseState = n), $l(t, $t, typeof a == "function" ? a : En);
  }
  function vd(t, e, n, a, l) {
    if (Ln(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var s = {
        payload: l,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          s.listeners.push(m);
        },
      };
      j.T !== null ? n(!0) : (s.isTransition = !1),
        a(s),
        (n = e.pending),
        n === null
          ? ((s.next = e.pending = s), cc(e, s))
          : ((s.next = n.next), (e.pending = n.next = s));
    }
  }
  function cc(t, e) {
    var n = e.action,
      a = e.payload,
      l = t.state;
    if (e.isTransition) {
      var s = j.T,
        m = {};
      j.T = m;
      try {
        var g = n(l, a),
          S = j.S;
        S !== null && S(m, g), fc(t, e, g);
      } catch (x) {
        Au(t, e, x);
      } finally {
        j.T = s;
      }
    } else
      try {
        (s = n(l, a)), fc(t, e, s);
      } catch (x) {
        Au(t, e, x);
      }
  }
  function fc(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            dc(t, e, a);
          },
          function (a) {
            return Au(t, e, a);
          }
        )
      : dc(t, e, n);
  }
  function dc(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      hc(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), cc(t, n)));
  }
  function Au(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = n), hc(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function hc(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function mc(t, e) {
    return e;
  }
  function pc(t, e) {
    if (zt) {
      var n = Pt.formState;
      if (n !== null) {
        t: {
          var a = Et;
          if (zt) {
            if (ee) {
              e: {
                for (var l = ee, s = wn; l.nodeType !== 8; ) {
                  if (!s) {
                    l = null;
                    break e;
                  }
                  if (((l = ia(l.nextSibling)), l === null)) {
                    l = null;
                    break e;
                  }
                }
                (s = l.data), (l = s === "F!" || s === "F" ? l : null);
              }
              if (l) {
                (ee = ia(l.nextSibling)), (a = l.data === "F!");
                break t;
              }
            }
            el(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = $e()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mc,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = Gl.bind(null, Et, a)),
      (a.dispatch = n),
      (a = Tu(!1)),
      (s = Dc.bind(null, Et, !1, a.queue)),
      (a = $e()),
      (l = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = l),
      (n = vd.bind(null, Et, l, s, n)),
      (l.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function gc(t) {
    var e = oe();
    return vc(e, $t, t);
  }
  function vc(t, e, n) {
    if (
      ((e = $l(t, e, mc)[0]),
      (t = Yr(En)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = ji(e);
      } catch (m) {
        throw m === Mi ? Ur : m;
      }
    else a = e;
    e = oe();
    var l = e.queue,
      s = l.dispatch;
    return (
      n !== e.memoizedState &&
        ((Et.flags |= 2048), Vl(9, kr(), yd.bind(null, l, n), null)),
      [a, s, t]
    );
  }
  function yd(t, e) {
    t.action = e;
  }
  function Na(t) {
    var e = oe(),
      n = $t;
    if (n !== null) return vc(e, n, t);
    oe(), (e = e.memoizedState), (n = oe());
    var a = n.queue.dispatch;
    return (n.memoizedState = t), [e, a, !1];
  }
  function Vl(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = Et.updateQueue),
      e === null && ((e = yu()), (Et.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function kr() {
    return { destroy: void 0, resource: void 0 };
  }
  function yc() {
    return oe().memoizedState;
  }
  function Kr(t, e, n, a) {
    var l = $e();
    (a = a === void 0 ? null : a),
      (Et.flags |= t),
      (l.memoizedState = Vl(1 | e, kr(), n, a));
  }
  function qi(t, e, n, a) {
    var l = oe();
    a = a === void 0 ? null : a;
    var s = l.memoizedState.inst;
    $t !== null && a !== null && _n(a, $t.memoizedState.deps)
      ? (l.memoizedState = Vl(e, s, n, a))
      : ((Et.flags |= t), (l.memoizedState = Vl(1 | e, s, n, a)));
  }
  function $i(t, e) {
    Kr(8390656, 8, t, e);
  }
  function _c(t, e) {
    qi(2048, 8, t, e);
  }
  function _d(t, e) {
    return qi(4, 2, t, e);
  }
  function Xr(t, e) {
    return qi(4, 4, t, e);
  }
  function Ec(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function bc(t, e, n) {
    (n = n != null ? n.concat([t]) : null), qi(4, 4, Ec.bind(null, e, t), n);
  }
  function Qr() {}
  function Sc(t, e) {
    var n = oe();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && _n(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function Tc(t, e) {
    var n = oe();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && _n(e, a[1])) return a[0];
    if (((a = t()), rl)) {
      ja(!0);
      try {
        t();
      } finally {
        ja(!1);
      }
    }
    return (n.memoizedState = [a, e]), a;
  }
  function Da(t, e, n) {
    return n === void 0 || (In & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Jh()), (Et.lanes |= t), (Jl |= t), n);
  }
  function Ac(t, e, n, a) {
    return qe(n, e)
      ? n
      : jl.current !== null
      ? ((t = Da(t, n, a)), qe(t, e) || (pe = !0), t)
      : (In & 42) === 0
      ? ((pe = !0), (t.memoizedState = n))
      : ((t = Jh()), (Et.lanes |= t), (Jl |= t), e);
  }
  function Zr(t, e, n, a, l) {
    var s = tt.p;
    tt.p = s !== 0 && 8 > s ? s : 8;
    var m = j.T,
      g = {};
    (j.T = g), Dc(t, !1, e, n);
    try {
      var S = l(),
        x = j.S;
      if (
        (x !== null && x(g, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var $ = md(S, a);
        Yi(t, e, $, Tn(t));
      } else Yi(t, e, a, Tn(t));
    } catch (K) {
      Yi(t, e, { then: function () {}, status: "rejected", reason: K }, Tn());
    } finally {
      (tt.p = s), (j.T = m);
    }
  }
  function Ed() {}
  function Jr(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var l = bd(t).queue;
    Zr(
      t,
      l,
      e,
      ct,
      n === null
        ? Ed
        : function () {
            return Sd(t), n(a);
          }
    );
  }
  function bd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ct,
      baseState: ct,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: En,
        lastRenderedState: ct,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: En,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Sd(t) {
    var e = bd(t).next.queue;
    Yi(t, e, {}, Tn());
  }
  function Ou() {
    return Ae(Xu);
  }
  function Oc() {
    return oe().memoizedState;
  }
  function Nc() {
    return oe().memoizedState;
  }
  function Td(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Tn();
          t = Aa(n);
          var a = Oa(e, t, n);
          a !== null && (An(a, e, n), Ui(a, e, n)),
            (e = { cache: Mr() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Ad(t, e, n) {
    var a = Tn();
    (n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ln(t)
        ? Rc(e, n)
        : ((n = Ar(t, e, n, a)), n !== null && (An(n, t, a), Cc(n, e, a)));
  }
  function Gl(t, e, n) {
    var a = Tn();
    Yi(t, e, n, a);
  }
  function Yi(t, e, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ln(t)) Rc(e, l);
    else {
      var s = t.alternate;
      if (
        t.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = e.lastRenderedReducer), s !== null)
      )
        try {
          var m = e.lastRenderedState,
            g = s(m, n);
          if (((l.hasEagerState = !0), (l.eagerState = g), qe(g, m)))
            return Ni(t, e, l, 0), Pt === null && wl(), !1;
        } catch {
        } finally {
        }
      if (((n = Ar(t, e, l, a)), n !== null))
        return An(n, t, a), Cc(n, e, a), !0;
    }
    return !1;
  }
  function Dc(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Yd(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ln(t))
    ) {
      if (e) throw Error(o(479));
    } else (e = Ar(t, n, a, 2)), e !== null && An(e, t, 2);
  }
  function Ln(t) {
    var e = t.alternate;
    return t === Et || (e !== null && e === Et);
  }
  function Rc(t, e) {
    il = Hi = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function Cc(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), yo(t, n);
    }
  }
  var Fr = {
      readContext: Ae,
      use: $r,
      useCallback: ie,
      useContext: ie,
      useEffect: ie,
      useImperativeHandle: ie,
      useLayoutEffect: ie,
      useInsertionEffect: ie,
      useMemo: ie,
      useReducer: ie,
      useRef: ie,
      useState: ie,
      useDebugValue: ie,
      useDeferredValue: ie,
      useTransition: ie,
      useSyncExternalStore: ie,
      useId: ie,
      useHostTransitionStatus: ie,
      useFormState: ie,
      useActionState: ie,
      useOptimistic: ie,
      useMemoCache: ie,
      useCacheRefresh: ie,
    },
    xc = {
      readContext: Ae,
      use: $r,
      useCallback: function (t, e) {
        return ($e().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Ae,
      useEffect: $i,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          Kr(4194308, 4, Ec.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return Kr(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Kr(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = $e();
        e = e === void 0 ? null : e;
        var a = t();
        if (rl) {
          ja(!0);
          try {
            t();
          } finally {
            ja(!1);
          }
        }
        return (n.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, n) {
        var a = $e();
        if (n !== void 0) {
          var l = n(e);
          if (rl) {
            ja(!0);
            try {
              n(e);
            } finally {
              ja(!1);
            }
          }
        } else l = e;
        return (
          (a.memoizedState = a.baseState = l),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: l,
          }),
          (a.queue = t),
          (t = t.dispatch = Ad.bind(null, Et, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = $e();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Tu(t);
        var e = t.queue,
          n = Gl.bind(null, Et, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Qr,
      useDeferredValue: function (t, e) {
        var n = $e();
        return Da(n, t, e);
      },
      useTransition: function () {
        var t = Tu(!1);
        return (
          (t = Zr.bind(null, Et, t.queue, !0, !1)),
          ($e().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = Et,
          l = $e();
        if (zt) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Pt === null)) throw Error(o(349));
          (Ut & 124) !== 0 || Su(a, e, n);
        }
        l.memoizedState = n;
        var s = { value: n, getSnapshot: e };
        return (
          (l.queue = s),
          $i(Vr.bind(null, a, s, t), [t]),
          (a.flags |= 2048),
          Vl(9, kr(), Yl.bind(null, a, s, n, e), null),
          n
        );
      },
      useId: function () {
        var t = $e(),
          e = Pt.identifierPrefix;
        if (zt) {
          var n = we,
            a = Fn;
          (n = (a & ~(1 << (32 - Qe(a) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = qr++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = pd++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ou,
      useFormState: pc,
      useActionState: pc,
      useOptimistic: function (t) {
        var e = $e();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Dc.bind(null, Et, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: _u,
      useCacheRefresh: function () {
        return ($e().memoizedState = Td.bind(null, Et));
      },
    },
    wc = {
      readContext: Ae,
      use: $r,
      useCallback: Sc,
      useContext: Ae,
      useEffect: _c,
      useImperativeHandle: bc,
      useInsertionEffect: _d,
      useLayoutEffect: Xr,
      useMemo: Tc,
      useReducer: Yr,
      useRef: yc,
      useState: function () {
        return Yr(En);
      },
      useDebugValue: Qr,
      useDeferredValue: function (t, e) {
        var n = oe();
        return Ac(n, $t.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Yr(En)[0],
          e = oe().memoizedState;
        return [typeof t == "boolean" ? t : ji(t), e];
      },
      useSyncExternalStore: bu,
      useId: Oc,
      useHostTransitionStatus: Ou,
      useFormState: gc,
      useActionState: gc,
      useOptimistic: function (t, e) {
        var n = oe();
        return oc(n, $t, t, e);
      },
      useMemoCache: _u,
      useCacheRefresh: Nc,
    },
    Od = {
      readContext: Ae,
      use: $r,
      useCallback: Sc,
      useContext: Ae,
      useEffect: _c,
      useImperativeHandle: bc,
      useInsertionEffect: _d,
      useLayoutEffect: Xr,
      useMemo: Tc,
      useReducer: Eu,
      useRef: yc,
      useState: function () {
        return Eu(En);
      },
      useDebugValue: Qr,
      useDeferredValue: function (t, e) {
        var n = oe();
        return $t === null ? Da(n, t, e) : Ac(n, $t.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Eu(En)[0],
          e = oe().memoizedState;
        return [typeof t == "boolean" ? t : ji(t), e];
      },
      useSyncExternalStore: bu,
      useId: Oc,
      useHostTransitionStatus: Ou,
      useFormState: Na,
      useActionState: Na,
      useOptimistic: function (t, e) {
        var n = oe();
        return $t !== null
          ? oc(n, $t, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: _u,
      useCacheRefresh: Nc,
    },
    kl = null,
    Vi = 0;
  function Gi(t) {
    var e = Vi;
    return (Vi += 1), kl === null && (kl = []), ru(kl, t, e);
  }
  function ki(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Ki(t, e) {
    throw e.$$typeof === U
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Wr(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Nu(t) {
    function e(D, N) {
      if (t) {
        var C = D.deletions;
        C === null ? ((D.deletions = [N]), (D.flags |= 16)) : C.push(N);
      }
    }
    function n(D, N) {
      if (!t) return null;
      for (; N !== null; ) e(D, N), (N = N.sibling);
      return null;
    }
    function a(D) {
      for (var N = new Map(); D !== null; )
        D.key !== null ? N.set(D.key, D) : N.set(D.index, D), (D = D.sibling);
      return N;
    }
    function l(D, N) {
      return (D = Zn(D, N)), (D.index = 0), (D.sibling = null), D;
    }
    function s(D, N, C) {
      return (
        (D.index = C),
        t
          ? ((C = D.alternate),
            C !== null
              ? ((C = C.index), C < N ? ((D.flags |= 67108866), N) : C)
              : ((D.flags |= 67108866), N))
          : ((D.flags |= 1048576), N)
      );
    }
    function m(D) {
      return t && D.alternate === null && (D.flags |= 67108866), D;
    }
    function g(D, N, C, Y) {
      return N === null || N.tag !== 6
        ? ((N = Ws(C, D.mode, Y)), (N.return = D), N)
        : ((N = l(N, C)), (N.return = D), N);
    }
    function S(D, N, C, Y) {
      var it = C.type;
      return it === G
        ? $(D, N, C.props.children, Y, C.key)
        : N !== null &&
          (N.elementType === it ||
            (typeof it == "object" &&
              it !== null &&
              it.$$typeof === Nt &&
              Wr(it) === N.type))
        ? ((N = l(N, C.props)), ki(N, C), (N.return = D), N)
        : ((N = Nr(C.type, C.key, C.props, null, D.mode, Y)),
          ki(N, C),
          (N.return = D),
          N);
    }
    function x(D, N, C, Y) {
      return N === null ||
        N.tag !== 4 ||
        N.stateNode.containerInfo !== C.containerInfo ||
        N.stateNode.implementation !== C.implementation
        ? ((N = Dr(C, D.mode, Y)), (N.return = D), N)
        : ((N = l(N, C.children || [])), (N.return = D), N);
    }
    function $(D, N, C, Y, it) {
      return N === null || N.tag !== 7
        ? ((N = Fa(C, D.mode, Y, it)), (N.return = D), N)
        : ((N = l(N, C)), (N.return = D), N);
    }
    function K(D, N, C) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return (N = Ws("" + N, D.mode, C)), (N.return = D), N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case V:
            return (
              (C = Nr(N.type, N.key, N.props, null, D.mode, C)),
              ki(C, N),
              (C.return = D),
              C
            );
          case P:
            return (N = Dr(N, D.mode, C)), (N.return = D), N;
          case Nt:
            var Y = N._init;
            return (N = Y(N._payload)), K(D, N, C);
        }
        if (_e(N) || Se(N))
          return (N = Fa(N, D.mode, C, null)), (N.return = D), N;
        if (typeof N.then == "function") return K(D, Gi(N), C);
        if (N.$$typeof === at) return K(D, wr(D, N), C);
        Ki(D, N);
      }
      return null;
    }
    function M(D, N, C, Y) {
      var it = N !== null ? N.key : null;
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return it !== null ? null : g(D, N, "" + C, Y);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case V:
            return C.key === it ? S(D, N, C, Y) : null;
          case P:
            return C.key === it ? x(D, N, C, Y) : null;
          case Nt:
            return (it = C._init), (C = it(C._payload)), M(D, N, C, Y);
        }
        if (_e(C) || Se(C)) return it !== null ? null : $(D, N, C, Y, null);
        if (typeof C.then == "function") return M(D, N, Gi(C), Y);
        if (C.$$typeof === at) return M(D, N, wr(D, C), Y);
        Ki(D, C);
      }
      return null;
    }
    function L(D, N, C, Y, it) {
      if (
        (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
      )
        return (D = D.get(C) || null), g(N, D, "" + Y, it);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case V:
            return (
              (D = D.get(Y.key === null ? C : Y.key) || null), S(N, D, Y, it)
            );
          case P:
            return (
              (D = D.get(Y.key === null ? C : Y.key) || null), x(N, D, Y, it)
            );
          case Nt:
            var Dt = Y._init;
            return (Y = Dt(Y._payload)), L(D, N, C, Y, it);
        }
        if (_e(Y) || Se(Y)) return (D = D.get(C) || null), $(N, D, Y, it, null);
        if (typeof Y.then == "function") return L(D, N, C, Gi(Y), it);
        if (Y.$$typeof === at) return L(D, N, C, wr(N, Y), it);
        Ki(N, Y);
      }
      return null;
    }
    function pt(D, N, C, Y) {
      for (
        var it = null, Dt = null, ut = N, dt = (N = 0), Ne = null;
        ut !== null && dt < C.length;
        dt++
      ) {
        ut.index > dt ? ((Ne = ut), (ut = null)) : (Ne = ut.sibling);
        var Bt = M(D, ut, C[dt], Y);
        if (Bt === null) {
          ut === null && (ut = Ne);
          break;
        }
        t && ut && Bt.alternate === null && e(D, ut),
          (N = s(Bt, N, dt)),
          Dt === null ? (it = Bt) : (Dt.sibling = Bt),
          (Dt = Bt),
          (ut = Ne);
      }
      if (dt === C.length) return n(D, ut), zt && Ia(D, dt), it;
      if (ut === null) {
        for (; dt < C.length; dt++)
          (ut = K(D, C[dt], Y)),
            ut !== null &&
              ((N = s(ut, N, dt)),
              Dt === null ? (it = ut) : (Dt.sibling = ut),
              (Dt = ut));
        return zt && Ia(D, dt), it;
      }
      for (ut = a(ut); dt < C.length; dt++)
        (Ne = L(ut, D, dt, C[dt], Y)),
          Ne !== null &&
            (t &&
              Ne.alternate !== null &&
              ut.delete(Ne.key === null ? dt : Ne.key),
            (N = s(Ne, N, dt)),
            Dt === null ? (it = Ne) : (Dt.sibling = Ne),
            (Dt = Ne));
      return (
        t &&
          ut.forEach(function (li) {
            return e(D, li);
          }),
        zt && Ia(D, dt),
        it
      );
    }
    function ft(D, N, C, Y) {
      if (C == null) throw Error(o(151));
      for (
        var it = null,
          Dt = null,
          ut = N,
          dt = (N = 0),
          Ne = null,
          Bt = C.next();
        ut !== null && !Bt.done;
        dt++, Bt = C.next()
      ) {
        ut.index > dt ? ((Ne = ut), (ut = null)) : (Ne = ut.sibling);
        var li = M(D, ut, Bt.value, Y);
        if (li === null) {
          ut === null && (ut = Ne);
          break;
        }
        t && ut && li.alternate === null && e(D, ut),
          (N = s(li, N, dt)),
          Dt === null ? (it = li) : (Dt.sibling = li),
          (Dt = li),
          (ut = Ne);
      }
      if (Bt.done) return n(D, ut), zt && Ia(D, dt), it;
      if (ut === null) {
        for (; !Bt.done; dt++, Bt = C.next())
          (Bt = K(D, Bt.value, Y)),
            Bt !== null &&
              ((N = s(Bt, N, dt)),
              Dt === null ? (it = Bt) : (Dt.sibling = Bt),
              (Dt = Bt));
        return zt && Ia(D, dt), it;
      }
      for (ut = a(ut); !Bt.done; dt++, Bt = C.next())
        (Bt = L(ut, D, dt, Bt.value, Y)),
          Bt !== null &&
            (t &&
              Bt.alternate !== null &&
              ut.delete(Bt.key === null ? dt : Bt.key),
            (N = s(Bt, N, dt)),
            Dt === null ? (it = Bt) : (Dt.sibling = Bt),
            (Dt = Bt));
      return (
        t &&
          ut.forEach(function (av) {
            return e(D, av);
          }),
        zt && Ia(D, dt),
        it
      );
    }
    function Qt(D, N, C, Y) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === G &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case V:
            t: {
              for (var it = C.key; N !== null; ) {
                if (N.key === it) {
                  if (((it = C.type), it === G)) {
                    if (N.tag === 7) {
                      n(D, N.sibling),
                        (Y = l(N, C.props.children)),
                        (Y.return = D),
                        (D = Y);
                      break t;
                    }
                  } else if (
                    N.elementType === it ||
                    (typeof it == "object" &&
                      it !== null &&
                      it.$$typeof === Nt &&
                      Wr(it) === N.type)
                  ) {
                    n(D, N.sibling),
                      (Y = l(N, C.props)),
                      ki(Y, C),
                      (Y.return = D),
                      (D = Y);
                    break t;
                  }
                  n(D, N);
                  break;
                } else e(D, N);
                N = N.sibling;
              }
              C.type === G
                ? ((Y = Fa(C.props.children, D.mode, Y, C.key)),
                  (Y.return = D),
                  (D = Y))
                : ((Y = Nr(C.type, C.key, C.props, null, D.mode, Y)),
                  ki(Y, C),
                  (Y.return = D),
                  (D = Y));
            }
            return m(D);
          case P:
            t: {
              for (it = C.key; N !== null; ) {
                if (N.key === it)
                  if (
                    N.tag === 4 &&
                    N.stateNode.containerInfo === C.containerInfo &&
                    N.stateNode.implementation === C.implementation
                  ) {
                    n(D, N.sibling),
                      (Y = l(N, C.children || [])),
                      (Y.return = D),
                      (D = Y);
                    break t;
                  } else {
                    n(D, N);
                    break;
                  }
                else e(D, N);
                N = N.sibling;
              }
              (Y = Dr(C, D.mode, Y)), (Y.return = D), (D = Y);
            }
            return m(D);
          case Nt:
            return (it = C._init), (C = it(C._payload)), Qt(D, N, C, Y);
        }
        if (_e(C)) return pt(D, N, C, Y);
        if (Se(C)) {
          if (((it = Se(C)), typeof it != "function")) throw Error(o(150));
          return (C = it.call(C)), ft(D, N, C, Y);
        }
        if (typeof C.then == "function") return Qt(D, N, Gi(C), Y);
        if (C.$$typeof === at) return Qt(D, N, wr(D, C), Y);
        Ki(D, C);
      }
      return (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
        ? ((C = "" + C),
          N !== null && N.tag === 6
            ? (n(D, N.sibling), (Y = l(N, C)), (Y.return = D), (D = Y))
            : (n(D, N), (Y = Ws(C, D.mode, Y)), (Y.return = D), (D = Y)),
          m(D))
        : n(D, N);
    }
    return function (D, N, C, Y) {
      try {
        Vi = 0;
        var it = Qt(D, N, C, Y);
        return (kl = null), it;
      } catch (ut) {
        if (ut === Mi || ut === Ur) throw ut;
        var Dt = Je(29, ut, null, D.mode);
        return (Dt.lanes = Y), (Dt.return = D), Dt;
      } finally {
      }
    };
  }
  var cn = Nu(!0),
    Du = Nu(!1),
    Ye = X(null),
    Un = null;
  function ta(t) {
    var e = t.alternate;
    I(me, me.current & 1),
      I(Ye, t),
      Un === null &&
        (e === null || jl.current !== null || e.memoizedState !== null) &&
        (Un = t);
  }
  function Mc(t) {
    if (t.tag === 22) {
      if ((I(me, me.current), I(Ye, t), Un === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Un = t);
      }
    } else zn();
  }
  function zn() {
    I(me, me.current), I(Ye, Ye.current);
  }
  function ea(t) {
    et(Ye), Un === t && (Un = null), et(me);
  }
  var me = X(0);
  function Pr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || Id(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Ir(t, e, n, a) {
    (e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : A({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Xi = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = Tn(),
        l = Aa(a);
      (l.payload = e),
        n != null && (l.callback = n),
        (e = Oa(t, l, a)),
        e !== null && (An(e, t, a), Ui(e, t, a));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = Tn(),
        l = Aa(a);
      (l.tag = 1),
        (l.payload = e),
        n != null && (l.callback = n),
        (e = Oa(t, l, a)),
        e !== null && (An(e, t, a), Ui(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Tn(),
        a = Aa(n);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = Oa(t, a, n)),
        e !== null && (An(e, t, n), Ui(e, t, n));
    },
  };
  function Lc(t, e, n, a, l, s, m) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, s, m)
        : e.prototype && e.prototype.isPureReactComponent
        ? !xn(n, a) || !xn(l, s)
        : !0
    );
  }
  function Ra(t, e, n, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Xi.enqueueReplaceState(e, e.state, null);
  }
  function sl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = A({}, n));
      for (var l in t) n[l] === void 0 && (n[l] = t[l]);
    }
    return n;
  }
  var Ru =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function na(t) {
    Ru(t);
  }
  function Uc(t) {
    console.error(t);
  }
  function zc(t) {
    Ru(t);
  }
  function ts(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Hc(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Cu(t, e, n) {
    return (
      (n = Aa(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ts(t, e);
      }),
      n
    );
  }
  function Bc(t) {
    return (t = Aa(t)), (t.tag = 3), t;
  }
  function jc(t, e, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var s = a.value;
      (t.payload = function () {
        return l(s);
      }),
        (t.callback = function () {
          Hc(e, n, a);
        });
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (t.callback = function () {
        Hc(e, n, a),
          typeof l != "function" &&
            (Fl === null ? (Fl = new Set([this])) : Fl.add(this));
        var g = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Nd(t, e, n, a, l) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && xr(e, n, l, !0),
        (n = Ye.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Un === null ? Hd() : n.alternate === null && he === 0 && (he = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === iu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  jd(t, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === iu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  jd(t, a, l)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return jd(t, a, l), Hd(), !1;
    }
    if (zt)
      return (
        (e = Ye.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = l),
            a !== tu && ((t = Error(o(422), { cause: a })), zl(ln(t, n))))
          : (a !== tu && ((e = Error(o(423), { cause: a })), zl(ln(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (l &= -l),
            (t.lanes |= l),
            (a = ln(a, n)),
            (l = Cu(t.stateNode, a, l)),
            Pn(t, l),
            he !== 4 && (he = 2)),
        !1
      );
    var s = Error(o(520), { cause: a });
    if (
      ((s = ln(s, n)),
      Bu === null ? (Bu = [s]) : Bu.push(s),
      he !== 4 && (he = 2),
      e === null)
    )
      return !0;
    (a = ln(a, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = l & -l),
            (n.lanes |= t),
            (t = Cu(n.stateNode, a, t)),
            Pn(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (s = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (s !== null &&
                  typeof s.componentDidCatch == "function" &&
                  (Fl === null || !Fl.has(s)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = Bc(l)),
              jc(l, t, n, a),
              Pn(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var qc = Error(o(461)),
    pe = !1;
  function ce(t, e, n, a) {
    e.child = t === null ? Du(e, null, n, a) : cn(e, t.child, n, a);
  }
  function Qi(t, e, n, a, l) {
    n = n.render;
    var s = e.ref;
    if ("ref" in a) {
      var m = {};
      for (var g in a) g !== "ref" && (m[g] = a[g]);
    } else m = a;
    return (
      al(e),
      (a = rc(t, e, n, m, s, l)),
      (g = pu()),
      t !== null && !pe
        ? (gu(t, e, l), mt(t, e, l))
        : (zt && g && Ps(e), (e.flags |= 1), ce(t, e, a, l), e.child)
    );
  }
  function $c(t, e, n, a, l) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" &&
        !Or(s) &&
        s.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = s), Yc(t, e, s, a, l))
        : ((t = Nr(n.type, null, a, e, e.mode, l)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((s = t.child), !Mt(t, l))) {
      var m = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : xn), n(m, a) && t.ref === e.ref)
      )
        return mt(t, e, l);
    }
    return (
      (e.flags |= 1),
      (t = Zn(s, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Yc(t, e, n, a, l) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (xn(s, a) && t.ref === e.ref)
        if (((pe = !1), (e.pendingProps = a = s), Mt(t, l)))
          (t.flags & 131072) !== 0 && (pe = !0);
        else return (e.lanes = t.lanes), mt(t, e, l);
    }
    return i(t, e, n, a, l);
  }
  function Kl(t, e, n) {
    var a = e.pendingProps,
      l = a.children,
      s = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = s !== null ? s.baseLanes | n : n), t !== null)) {
          for (l = e.child = t.child, s = 0; l !== null; )
            (s = s | l.lanes | l.childLanes), (l = l.sibling);
          e.childLanes = s & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return Dd(t, e, a, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && wi(e, s !== null ? s.cachePool : null),
          s !== null ? du(e, s) : jr(),
          Mc(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Dd(t, e, s !== null ? s.baseLanes | n : n, n)
        );
    } else
      s !== null
        ? (wi(e, s.cachePool), du(e, s), zn(), (e.memoizedState = null))
        : (t !== null && wi(e, null), jr(), zn());
    return ce(t, e, l, n), e.child;
  }
  function Dd(t, e, n, a) {
    var l = au();
    return (
      (l = l === null ? null : { parent: se._currentValue, pool: l }),
      (e.memoizedState = { baseLanes: n, cachePool: l }),
      t !== null && wi(e, null),
      jr(),
      Mc(e),
      t !== null && xr(t, e, a, !0),
      null
    );
  }
  function d(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function i(t, e, n, a, l) {
    return (
      al(e),
      (n = rc(t, e, n, a, void 0, l)),
      (a = pu()),
      t !== null && !pe
        ? (gu(t, e, l), mt(t, e, l))
        : (zt && a && Ps(e), (e.flags |= 1), ce(t, e, n, l), e.child)
    );
  }
  function c(t, e, n, a, l, s) {
    return (
      al(e),
      (e.updateQueue = null),
      (n = sc(e, a, n, l)),
      mu(t),
      (a = pu()),
      t !== null && !pe
        ? (gu(t, e, s), mt(t, e, s))
        : (zt && a && Ps(e), (e.flags |= 1), ce(t, e, n, s), e.child)
    );
  }
  function v(t, e, n, a, l) {
    if ((al(e), e.stateNode === null)) {
      var s = Ll,
        m = n.contextType;
      typeof m == "object" && m !== null && (s = Ae(m)),
        (s = new n(a, s)),
        (e.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = Xi),
        (e.stateNode = s),
        (s._reactInternals = e),
        (s = e.stateNode),
        (s.props = a),
        (s.state = e.memoizedState),
        (s.refs = {}),
        uu(e),
        (m = n.contextType),
        (s.context = typeof m == "object" && m !== null ? Ae(m) : Ll),
        (s.state = e.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == "function" && (Ir(e, n, m, a), (s.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" &&
            typeof s.componentWillMount != "function") ||
          ((m = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" &&
            s.UNSAFE_componentWillMount(),
          m !== s.state && Xi.enqueueReplaceState(s, s.state, null),
          We(e, a, s, l),
          Br(),
          (s.state = e.memoizedState)),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      s = e.stateNode;
      var g = e.memoizedProps,
        S = sl(n, g);
      s.props = S;
      var x = s.context,
        $ = n.contextType;
      (m = Ll), typeof $ == "object" && $ !== null && (m = Ae($));
      var K = n.getDerivedStateFromProps;
      ($ =
        typeof K == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        $ ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((g || x !== m) && Ra(e, s, a, m)),
        (Ta = !1);
      var M = e.memoizedState;
      (s.state = M),
        We(e, a, s, l),
        Br(),
        (x = e.memoizedState),
        g || M !== x || Ta
          ? (typeof K == "function" && (Ir(e, n, K, a), (x = e.memoizedState)),
            (S = Ta || Lc(e, n, S, a, M, x, m))
              ? ($ ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = x)),
            (s.props = a),
            (s.state = x),
            (s.context = m),
            (a = S))
          : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (s = e.stateNode),
        ou(t, e),
        (m = e.memoizedProps),
        ($ = sl(n, m)),
        (s.props = $),
        (K = e.pendingProps),
        (M = s.context),
        (x = n.contextType),
        (S = Ll),
        typeof x == "object" && x !== null && (S = Ae(x)),
        (g = n.getDerivedStateFromProps),
        (x =
          typeof g == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function") ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((m !== K || M !== S) && Ra(e, s, a, S)),
        (Ta = !1),
        (M = e.memoizedState),
        (s.state = M),
        We(e, a, s, l),
        Br();
      var L = e.memoizedState;
      m !== K ||
      M !== L ||
      Ta ||
      (t !== null && t.dependencies !== null && nl(t.dependencies))
        ? (typeof g == "function" && (Ir(e, n, g, a), (L = e.memoizedState)),
          ($ =
            Ta ||
            Lc(e, n, $, a, M, L, S) ||
            (t !== null && t.dependencies !== null && nl(t.dependencies)))
            ? (x ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(a, L, S),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(a, L, S)),
              typeof s.componentDidUpdate == "function" && (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (m === t.memoizedProps && M === t.memoizedState) ||
                (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (m === t.memoizedProps && M === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = L)),
          (s.props = a),
          (s.state = L),
          (s.context = S),
          (a = $))
        : (typeof s.componentDidUpdate != "function" ||
            (m === t.memoizedProps && M === t.memoizedState) ||
            (e.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (m === t.memoizedProps && M === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (s = a),
      d(t, e),
      (a = (e.flags & 128) !== 0),
      s || a
        ? ((s = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : s.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = cn(e, t.child, null, l)),
              (e.child = cn(e, null, n, l)))
            : ce(t, e, n, l),
          (e.memoizedState = s.state),
          (t = e.child))
        : (t = mt(t, e, l)),
      t
    );
  }
  function b(t, e, n, a) {
    return xi(), (e.flags |= 256), ce(t, e, n, a), e.child;
  }
  var R = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function w(t) {
    return { baseLanes: t, cachePool: lu() };
  }
  function q(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Bn), t;
  }
  function F(t, e, n) {
    var a = e.pendingProps,
      l = !1,
      s = (e.flags & 128) !== 0,
      m;
    if (
      ((m = s) ||
        (m =
          t !== null && t.memoizedState === null ? !1 : (me.current & 2) !== 0),
      m && ((l = !0), (e.flags &= -129)),
      (m = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (zt) {
        if ((l ? ta(e) : zn(), zt)) {
          var g = ee,
            S;
          if ((S = g)) {
            t: {
              for (S = g, g = wn; S.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break t;
                }
                if (((S = ia(S.nextSibling)), S === null)) {
                  g = null;
                  break t;
                }
              }
              g = S;
            }
            g !== null
              ? ((e.memoizedState = {
                  dehydrated: g,
                  treeContext: Pa !== null ? { id: Fn, overflow: we } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = Je(18, null, null, 0)),
                (S.stateNode = g),
                (S.return = e),
                (e.child = S),
                (Me = e),
                (ee = null),
                (S = !0))
              : (S = !1);
          }
          S || el(e);
        }
        if (
          ((g = e.memoizedState),
          g !== null && ((g = g.dehydrated), g !== null))
        )
          return Id(g) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        ea(e);
      }
      return (
        (g = a.children),
        (a = a.fallback),
        l
          ? (zn(),
            (l = e.mode),
            (g = W({ mode: "hidden", children: g }, l)),
            (a = Fa(a, l, n, null)),
            (g.return = e),
            (a.return = e),
            (g.sibling = a),
            (e.child = g),
            (l = e.child),
            (l.memoizedState = w(n)),
            (l.childLanes = q(t, m, n)),
            (e.memoizedState = R),
            a)
          : (ta(e), nt(e, g))
      );
    }
    if (
      ((S = t.memoizedState), S !== null && ((g = S.dehydrated), g !== null))
    ) {
      if (s)
        e.flags & 256
          ? (ta(e), (e.flags &= -257), (e = yt(t, e, n)))
          : e.memoizedState !== null
          ? (zn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (zn(),
            (l = a.fallback),
            (g = e.mode),
            (a = W({ mode: "visible", children: a.children }, g)),
            (l = Fa(l, g, n, null)),
            (l.flags |= 2),
            (a.return = e),
            (l.return = e),
            (a.sibling = l),
            (e.child = a),
            cn(e, t.child, null, n),
            (a = e.child),
            (a.memoizedState = w(n)),
            (a.childLanes = q(t, m, n)),
            (e.memoizedState = R),
            (e = l));
      else if ((ta(e), Id(g))) {
        if (((m = g.nextSibling && g.nextSibling.dataset), m)) var x = m.dgst;
        (m = x),
          (a = Error(o(419))),
          (a.stack = ""),
          (a.digest = m),
          zl({ value: a, source: null, stack: null }),
          (e = yt(t, e, n));
      } else if (
        (pe || xr(t, e, n, !1), (m = (n & t.childLanes) !== 0), pe || m)
      ) {
        if (
          ((m = Pt),
          m !== null &&
            ((a = n & -n),
            (a = (a & 42) !== 0 ? 1 : Os(a)),
            (a = (a & (m.suspendedLanes | n)) !== 0 ? 0 : a),
            a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), Di(t, a), An(m, t, a), qc);
        g.data === "$?" || Hd(), (e = yt(t, e, n));
      } else
        g.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (ee = ia(g.nextSibling)),
            (Me = e),
            (zt = !0),
            (tl = null),
            (wn = !1),
            t !== null &&
              ((sn[un++] = Fn),
              (sn[un++] = we),
              (sn[un++] = Pa),
              (Fn = t.id),
              (we = t.overflow),
              (Pa = e)),
            (e = nt(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return l
      ? (zn(),
        (l = a.fallback),
        (g = e.mode),
        (S = t.child),
        (x = S.sibling),
        (a = Zn(S, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        x !== null ? (l = Zn(x, l)) : ((l = Fa(l, g, n, null)), (l.flags |= 2)),
        (l.return = e),
        (a.return = e),
        (a.sibling = l),
        (e.child = a),
        (a = l),
        (l = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = w(n))
          : ((S = g.cachePool),
            S !== null
              ? ((x = se._currentValue),
                (S = S.parent !== x ? { parent: x, pool: x } : S))
              : (S = lu()),
            (g = { baseLanes: g.baseLanes | n, cachePool: S })),
        (l.memoizedState = g),
        (l.childLanes = q(t, m, n)),
        (e.memoizedState = R),
        a)
      : (ta(e),
        (n = t.child),
        (t = n.sibling),
        (n = Zn(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((m = e.deletions),
          m === null ? ((e.deletions = [t]), (e.flags |= 16)) : m.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function nt(t, e) {
    return (
      (e = W({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function W(t, e) {
    return (
      (t = Je(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function yt(t, e, n) {
    return (
      cn(e, t.child, null, n),
      (t = nt(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function bt(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Cr(t.return, e, n);
  }
  function ht(t, e, n, a, l) {
    var s = t.memoizedState;
    s === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: l,
        })
      : ((s.isBackwards = e),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = a),
        (s.tail = n),
        (s.tailMode = l));
  }
  function Vt(t, e, n) {
    var a = e.pendingProps,
      l = a.revealOrder,
      s = a.tail;
    if ((ce(t, e, a.children, n), (a = me.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && bt(t, n, e);
          else if (t.tag === 19) bt(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((I(me, a), l)) {
      case "forwards":
        for (n = e.child, l = null; n !== null; )
          (t = n.alternate),
            t !== null && Pr(t) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = e.child), (e.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ht(e, !1, l, n, s);
        break;
      case "backwards":
        for (n = null, l = e.child, e.child = null; l !== null; ) {
          if (((t = l.alternate), t !== null && Pr(t) === null)) {
            e.child = l;
            break;
          }
          (t = l.sibling), (l.sibling = n), (n = l), (l = t);
        }
        ht(e, !0, n, null, s);
        break;
      case "together":
        ht(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function mt(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Jl |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((xr(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = Zn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = Zn(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Mt(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && nl(t)));
  }
  function Zt(t, e, n) {
    switch (e.tag) {
      case 3:
        B(e, e.stateNode.containerInfo), Ea(e, se, t.memoizedState.cache), xi();
        break;
      case 27:
      case 5:
        ar(e);
        break;
      case 4:
        B(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ea(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ta(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? F(t, e, n)
            : (ta(e), (t = mt(t, e, n)), t !== null ? t.sibling : null);
        ta(e);
        break;
      case 19:
        var l = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (xr(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          l)
        ) {
          if (a) return Vt(t, e, n);
          e.flags |= 128;
        }
        if (
          ((l = e.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          I(me, me.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Kl(t, e, n);
      case 24:
        Ea(e, se, t.memoizedState.cache);
    }
    return mt(t, e, n);
  }
  function ne(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) pe = !0;
      else {
        if (!Mt(t, n) && (e.flags & 128) === 0) return (pe = !1), Zt(t, e, n);
        pe = (t.flags & 131072) !== 0;
      }
    else (pe = !1), zt && (e.flags & 1048576) !== 0 && Ri(e, Rr, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            l = a._init;
          if (((a = l(a._payload)), (e.type = a), typeof a == "function"))
            Or(a)
              ? ((t = sl(a, t)), (e.tag = 1), (e = v(null, e, a, t, n)))
              : ((e.tag = 0), (e = i(null, e, a, t, n)));
          else {
            if (a != null) {
              if (((l = a.$$typeof), l === Rt)) {
                (e.tag = 11), (e = Qi(null, e, a, t, n));
                break t;
              } else if (l === At) {
                (e.tag = 14), (e = $c(null, e, a, t, n));
                break t;
              }
            }
            throw ((e = qn(a) || a), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return i(t, e, e.type, e.pendingProps, n);
      case 1:
        return (a = e.type), (l = sl(a, e.pendingProps)), v(t, e, a, l, n);
      case 3:
        t: {
          if ((B(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          a = e.pendingProps;
          var s = e.memoizedState;
          (l = s.element), ou(t, e), We(e, a, null, n);
          var m = e.memoizedState;
          if (
            ((a = m.cache),
            Ea(e, se, a),
            a !== s.cache && nu(e, [se], n, !0),
            Br(),
            (a = m.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: a, isDehydrated: !1, cache: m.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = b(t, e, a, n);
              break t;
            } else if (a !== l) {
              (l = ln(Error(o(424)), e)), zl(l), (e = b(t, e, a, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                ee = ia(t.firstChild),
                  Me = e,
                  zt = !0,
                  tl = null,
                  wn = !0,
                  n = Du(e, null, a, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((xi(), a === l)) {
              e = mt(t, e, n);
              break t;
            }
            ce(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          d(t, e),
          t === null
            ? (n = Mm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : zt ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = nf(gt.current).createElement(n)),
                (a[te] = e),
                (a[Re] = t),
                ze(a, n, t),
                ge(a),
                (e.stateNode = a))
            : (e.memoizedState = Mm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ar(e),
          t === null &&
            zt &&
            ((a = e.stateNode = Cm(e.type, e.pendingProps, gt.current)),
            (Me = e),
            (wn = !0),
            (l = ee),
            Il(e.type) ? ((th = l), (ee = ia(a.firstChild))) : (ee = l)),
          ce(t, e, e.pendingProps.children, n),
          d(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            zt &&
            ((l = a = ee) &&
              ((a = Mg(a, e.type, e.pendingProps, wn)),
              a !== null
                ? ((e.stateNode = a),
                  (Me = e),
                  (ee = ia(a.firstChild)),
                  (wn = !1),
                  (l = !0))
                : (l = !1)),
            l || el(e)),
          ar(e),
          (l = e.type),
          (s = e.pendingProps),
          (m = t !== null ? t.memoizedProps : null),
          (a = s.children),
          Fd(l, s) ? (a = null) : m !== null && Fd(l, m) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((l = rc(t, e, gd, null, null, n)), (Xu._currentValue = l)),
          d(t, e),
          ce(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            zt &&
            ((t = n = ee) &&
              ((n = Lg(n, e.pendingProps, wn)),
              n !== null
                ? ((e.stateNode = n), (Me = e), (ee = null), (t = !0))
                : (t = !1)),
            t || el(e)),
          null
        );
      case 13:
        return F(t, e, n);
      case 4:
        return (
          B(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = cn(e, null, a, n)) : ce(t, e, a, n),
          e.child
        );
      case 11:
        return Qi(t, e, e.type, e.pendingProps, n);
      case 7:
        return ce(t, e, e.pendingProps, n), e.child;
      case 8:
        return ce(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return ce(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          Ea(e, e.type, a.value),
          ce(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (l = e.type._context),
          (a = e.pendingProps.children),
          al(e),
          (l = Ae(l)),
          (a = a(l)),
          (e.flags |= 1),
          ce(t, e, a, n),
          e.child
        );
      case 14:
        return $c(t, e, e.type, e.pendingProps, n);
      case 15:
        return Yc(t, e, e.type, e.pendingProps, n);
      case 19:
        return Vt(t, e, n);
      case 31:
        return (
          (a = e.pendingProps),
          (n = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((n = W(a, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = Zn(t.child, a)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return Kl(t, e, n);
      case 24:
        return (
          al(e),
          (a = Ae(se)),
          t === null
            ? ((l = au()),
              l === null &&
                ((l = Pt),
                (s = Mr()),
                (l.pooledCache = s),
                s.refCount++,
                s !== null && (l.pooledCacheLanes |= n),
                (l = s)),
              (e.memoizedState = { parent: a, cache: l }),
              uu(e),
              Ea(e, se, l))
            : ((t.lanes & n) !== 0 && (ou(t, e), We(e, null, null, n), Br()),
              (l = t.memoizedState),
              (s = e.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (e.memoizedState = l),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = l),
                  Ea(e, se, a))
                : ((a = s.cache),
                  Ea(e, se, a),
                  a !== l.cache && nu(e, [se], n, !0))),
          ce(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function jt(t) {
    t.flags |= 4;
  }
  function Ot(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Bm(e))) {
      if (
        ((e = Ye.current),
        e !== null &&
          ((Ut & 4194048) === Ut
            ? Un !== null
            : ((Ut & 62914560) !== Ut && (Ut & 536870912) === 0) || e !== Un))
      )
        throw ((Li = iu), ac);
      t.flags |= 8192;
    }
  }
  function Ht(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? go() : 536870912), (t.lanes |= e), (ss |= e));
  }
  function Lt(t, e) {
    if (!zt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function vt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var l = t.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags & 65011712),
          (a |= l.flags & 65011712),
          (l.return = t),
          (l = l.sibling);
    else
      for (l = t.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags),
          (a |= l.flags),
          (l.return = t),
          (l = l.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = n), e;
  }
  function Ee(t, e, n) {
    var a = e.pendingProps;
    switch ((Is(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vt(e), null;
      case 1:
        return vt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Wn(se),
          On(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ci(e)
              ? jt(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), on())),
          vt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (jt(e),
              n !== null ? (vt(e), Ot(e, n)) : (vt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (jt(e), vt(e), Ot(e, n))
              : (vt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && jt(e), vt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        hl(e), (n = gt.current);
        var l = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && jt(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return vt(e), null;
          }
          (t = ot.current),
            Ci(e) ? Po(e) : ((t = Cm(l, a, n)), (e.stateNode = t), jt(e));
        }
        return vt(e), null;
      case 5:
        if ((hl(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && jt(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return vt(e), null;
          }
          if (((t = ot.current), Ci(e))) Po(e);
          else {
            switch (((l = nf(gt.current)), t)) {
              case 1:
                t = l.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = l.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = l.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = l.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? l.createElement("select", { is: a.is })
                        : l.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? l.createElement(n, { is: a.is })
                        : l.createElement(n);
                }
            }
            (t[te] = e), (t[Re] = a);
            t: for (l = e.child; l !== null; ) {
              if (l.tag === 5 || l.tag === 6) t.appendChild(l.stateNode);
              else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                (l.child.return = l), (l = l.child);
                continue;
              }
              if (l === e) break t;
              for (; l.sibling === null; ) {
                if (l.return === null || l.return === e) break t;
                l = l.return;
              }
              (l.sibling.return = l.return), (l = l.sibling);
            }
            e.stateNode = t;
            t: switch ((ze(t, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && jt(e);
          }
        }
        return vt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && jt(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = gt.current), Ci(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (l = Me),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            (t[te] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Sm(t.nodeValue, n)
              )),
              t || el(e);
          } else (t = nf(t).createTextNode(a)), (t[te] = e), (e.stateNode = t);
        }
        return vt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((l = Ci(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!l) throw Error(o(318));
              if (
                ((l = e.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(o(317));
              l[te] = e;
            } else
              xi(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            vt(e), (l = !1);
          } else
            (l = on()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (l = !0);
          if (!l) return e.flags & 256 ? (ea(e), e) : (ea(e), null);
        }
        if ((ea(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = a !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (a = e.child),
            (l = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (l = a.alternate.memoizedState.cachePool.pool);
          var s = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (s = a.memoizedState.cachePool.pool),
            s !== l && (a.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          Ht(e, e.updateQueue),
          vt(e),
          null
        );
      case 4:
        return On(), t === null && Kd(e.stateNode.containerInfo), vt(e), null;
      case 10:
        return Wn(e.type), vt(e), null;
      case 19:
        if ((et(me), (l = e.memoizedState), l === null)) return vt(e), null;
        if (((a = (e.flags & 128) !== 0), (s = l.rendering), s === null))
          if (a) Lt(l, !1);
          else {
            if (he !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((s = Pr(t)), s !== null)) {
                  for (
                    e.flags |= 128,
                      Lt(l, !1),
                      t = s.updateQueue,
                      e.updateQueue = t,
                      Ht(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    Wo(n, t), (n = n.sibling);
                  return I(me, (me.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null &&
              lt() > Xc &&
              ((e.flags |= 128), (a = !0), Lt(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = Pr(s)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ht(e, t),
                Lt(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !s.alternate &&
                  !zt)
              )
                return vt(e), null;
            } else
              2 * lt() - l.renderingStartTime > Xc &&
                n !== 536870912 &&
                ((e.flags |= 128), (a = !0), Lt(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((s.sibling = e.child), (e.child = s))
            : ((t = l.last),
              t !== null ? (t.sibling = s) : (e.child = s),
              (l.last = s));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = lt()),
            (e.sibling = null),
            (t = me.current),
            I(me, a ? (t & 1) | 2 : t & 1),
            e)
          : (vt(e), null);
      case 22:
      case 23:
        return (
          ea(e),
          hu(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (vt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : vt(e),
          (n = e.updateQueue),
          n !== null && Ht(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && et(ll),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          Wn(se),
          vt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function ve(t, e) {
    switch ((Is(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Wn(se),
          On(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return hl(e), null;
      case 13:
        if (
          (ea(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          xi();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return et(me), null;
      case 4:
        return On(), null;
      case 10:
        return Wn(e.type), null;
      case 22:
      case 23:
        return (
          ea(e),
          hu(),
          t !== null && et(ll),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Wn(se), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fe(t, e) {
    switch ((Is(e), e.tag)) {
      case 3:
        Wn(se), On();
        break;
      case 26:
      case 27:
      case 5:
        hl(e);
        break;
      case 4:
        On();
        break;
      case 13:
        ea(e);
        break;
      case 19:
        et(me);
        break;
      case 10:
        Wn(e.type);
        break;
      case 22:
      case 23:
        ea(e), hu(), t !== null && et(ll);
        break;
      case 24:
        Wn(se);
    }
  }
  function de(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var s = n.create,
              m = n.inst;
            (a = s()), (m.destroy = a);
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (g) {
      Jt(e, e.return, g);
    }
  }
  function ye(t, e, n) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        a = s;
        do {
          if ((a.tag & t) === t) {
            var m = a.inst,
              g = m.destroy;
            if (g !== void 0) {
              (m.destroy = void 0), (l = e);
              var S = n,
                x = g;
              try {
                x();
              } catch ($) {
                Jt(l, S, $);
              }
            }
          }
          a = a.next;
        } while (a !== s);
      }
    } catch ($) {
      Jt(e, e.return, $);
    }
  }
  function Oe(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        ic(e, n);
      } catch (a) {
        Jt(t, t.return, a);
      }
    }
  }
  function Ca(t, e, n) {
    (n.props = sl(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      Jt(t, e, a);
    }
  }
  function bn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (l) {
      Jt(t, e, l);
    }
  }
  function ae(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          Jt(t, e, l);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Jt(t, e, l);
        }
      else n.current = null;
  }
  function fn(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (l) {
      Jt(t, t.return, l);
    }
  }
  function Xl(t, e, n) {
    try {
      var a = t.stateNode;
      Dg(a, t.type, n, e), (a[Re] = e);
    } catch (l) {
      Jt(t, t.return, l);
    }
  }
  function xa(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Il(t.type)) ||
      t.tag === 4
    );
  }
  function Ql(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || xa(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Il(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Zi(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = ef));
    else if (
      a !== 4 &&
      (a === 27 && Il(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Zi(t, e, n), t = t.sibling; t !== null; )
        Zi(t, e, n), (t = t.sibling);
  }
  function wa(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && Il(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (wa(t, e, n), t = t.sibling; t !== null; )
        wa(t, e, n), (t = t.sibling);
  }
  function Ji(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, l = e.attributes; l.length; )
        e.removeAttributeNode(l[0]);
      ze(e, a, n), (e[te] = t), (e[Re] = n);
    } catch (s) {
      Jt(t, t.return, s);
    }
  }
  var Ve = !1,
    Yt = !1,
    ul = !1,
    Fi = typeof WeakSet == "function" ? WeakSet : Set,
    Ft = null;
  function xu(t, e) {
    if (((t = t.containerInfo), (Zd = of), (t = Xs(t)), br(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var l = a.anchorOffset,
              s = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break t;
            }
            var m = 0,
              g = -1,
              S = -1,
              x = 0,
              $ = 0,
              K = t,
              M = null;
            e: for (;;) {
              for (
                var L;
                K !== n || (l !== 0 && K.nodeType !== 3) || (g = m + l),
                  K !== s || (a !== 0 && K.nodeType !== 3) || (S = m + a),
                  K.nodeType === 3 && (m += K.nodeValue.length),
                  (L = K.firstChild) !== null;

              )
                (M = K), (K = L);
              for (;;) {
                if (K === t) break e;
                if (
                  (M === n && ++x === l && (g = m),
                  M === s && ++$ === a && (S = m),
                  (L = K.nextSibling) !== null)
                )
                  break;
                (K = M), (M = K.parentNode);
              }
              K = L;
            }
            n = g === -1 || S === -1 ? null : { start: g, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Jd = { focusedElem: t, selectionRange: n }, of = !1, Ft = e;
      Ft !== null;

    )
      if (
        ((e = Ft), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Ft = t);
      else
        for (; Ft !== null; ) {
          switch (((e = Ft), (s = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && s !== null) {
                (t = void 0),
                  (n = e),
                  (l = s.memoizedProps),
                  (s = s.memoizedState),
                  (a = n.stateNode);
                try {
                  var pt = sl(n.type, l, n.elementType === n.type);
                  (t = a.getSnapshotBeforeUpdate(pt, s)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (ft) {
                  Jt(n, n.return, ft);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Pd(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Pd(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Ft = t);
            break;
          }
          Ft = e.return;
        }
  }
  function Vc(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Hn(t, n), a & 4 && de(5, n);
        break;
      case 1:
        if ((Hn(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (m) {
              Jt(n, n.return, m);
            }
          else {
            var l = sl(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Jt(n, n.return, m);
            }
          }
        a & 64 && Oe(n), a & 512 && bn(n, n.return);
        break;
      case 3:
        if ((Hn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            ic(t, e);
          } catch (m) {
            Jt(n, n.return, m);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Ji(n);
      case 26:
      case 5:
        Hn(t, n), e === null && a & 4 && fn(n), a & 512 && bn(n, n.return);
        break;
      case 12:
        Hn(t, n);
        break;
      case 13:
        Hn(t, n),
          a & 4 && wu(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = gg.bind(null, n)), Ug(t, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Ve), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Yt), (l = Ve);
          var s = Yt;
          (Ve = a),
            (Yt = e) && !s ? la(t, n, (n.subtreeFlags & 8772) !== 0) : Hn(t, n),
            (Ve = l),
            (Yt = s);
        }
        break;
      case 30:
        break;
      default:
        Hn(t, n);
    }
  }
  function es(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), es(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && pl(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Wt = null,
    Le = !1;
  function aa(t, e, n) {
    for (n = n.child; n !== null; ) Gc(t, e, n), (n = n.sibling);
  }
  function Gc(t, e, n) {
    if (Xe && typeof Xe.onCommitFiberUnmount == "function")
      try {
        Xe.onCommitFiberUnmount($n, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Yt || ae(n, e),
          aa(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Yt || ae(n, e);
        var a = Wt,
          l = Le;
        Il(n.type) && ((Wt = n.stateNode), (Le = !1)),
          aa(t, e, n),
          Vu(n.stateNode),
          (Wt = a),
          (Le = l);
        break;
      case 5:
        Yt || ae(n, e);
      case 6:
        if (
          ((a = Wt),
          (l = Le),
          (Wt = null),
          aa(t, e, n),
          (Wt = a),
          (Le = l),
          Wt !== null)
        )
          if (Le)
            try {
              (Wt.nodeType === 9
                ? Wt.body
                : Wt.nodeName === "HTML"
                ? Wt.ownerDocument.body
                : Wt
              ).removeChild(n.stateNode);
            } catch (s) {
              Jt(n, e, s);
            }
          else
            try {
              Wt.removeChild(n.stateNode);
            } catch (s) {
              Jt(n, e, s);
            }
        break;
      case 18:
        Wt !== null &&
          (Le
            ? ((t = Wt),
              Dm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              Fu(t))
            : Dm(Wt, n.stateNode));
        break;
      case 4:
        (a = Wt),
          (l = Le),
          (Wt = n.stateNode.containerInfo),
          (Le = !0),
          aa(t, e, n),
          (Wt = a),
          (Le = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yt || ye(2, n, e), Yt || ye(4, n, e), aa(t, e, n);
        break;
      case 1:
        Yt ||
          (ae(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Ca(n, e, a)),
          aa(t, e, n);
        break;
      case 21:
        aa(t, e, n);
        break;
      case 22:
        (Yt = (a = Yt) || n.memoizedState !== null), aa(t, e, n), (Yt = a);
        break;
      default:
        aa(t, e, n);
    }
  }
  function wu(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Fu(t);
      } catch (n) {
        Jt(e, e.return, n);
      }
  }
  function kc(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Fi()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Fi()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Mu(t, e) {
    var n = kc(t);
    e.forEach(function (a) {
      var l = vg.bind(null, t, a);
      n.has(a) || (n.add(a), a.then(l, l));
    });
  }
  function Pe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          s = t,
          m = e,
          g = m;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Il(g.type)) {
                (Wt = g.stateNode), (Le = !1);
                break t;
              }
              break;
            case 5:
              (Wt = g.stateNode), (Le = !1);
              break t;
            case 3:
            case 4:
              (Wt = g.stateNode.containerInfo), (Le = !0);
              break t;
          }
          g = g.return;
        }
        if (Wt === null) throw Error(o(160));
        Gc(s, m, l),
          (Wt = null),
          (Le = !1),
          (s = l.alternate),
          s !== null && (s.return = null),
          (l.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Wi(e, t), (e = e.sibling);
  }
  var be = null;
  function Wi(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pe(e, t),
          Ge(t),
          a & 4 && (ye(3, t, t.return), de(3, t), ye(5, t, t.return));
        break;
      case 1:
        Pe(e, t),
          Ge(t),
          a & 512 && (Yt || n === null || ae(n, n.return)),
          a & 64 &&
            Ve &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
        break;
      case 26:
        var l = be;
        if (
          (Pe(e, t),
          Ge(t),
          a & 512 && (Yt || n === null || ae(n, n.return)),
          a & 4)
        ) {
          var s = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (n = t.memoizedProps),
                    (l = l.ownerDocument || l);
                  e: switch (a) {
                    case "title":
                      (s = l.getElementsByTagName("title")[0]),
                        (!s ||
                          s[Nn] ||
                          s[te] ||
                          s.namespaceURI === "http://www.w3.org/2000/svg" ||
                          s.hasAttribute("itemprop")) &&
                          ((s = l.createElement(a)),
                          l.head.insertBefore(
                            s,
                            l.querySelector("head > title")
                          )),
                        ze(s, a, n),
                        (s[te] = t),
                        ge(s),
                        (a = s);
                      break t;
                    case "link":
                      var m = zm("link", "href", l).get(a + (n.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (
                            ((s = m[g]),
                            s.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              s.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              s.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              s.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            m.splice(g, 1);
                            break e;
                          }
                      }
                      (s = l.createElement(a)),
                        ze(s, a, n),
                        l.head.appendChild(s);
                      break;
                    case "meta":
                      if (
                        (m = zm("meta", "content", l).get(
                          a + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < m.length; g++)
                          if (
                            ((s = m[g]),
                            s.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              s.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              s.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              s.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              s.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            m.splice(g, 1);
                            break e;
                          }
                      }
                      (s = l.createElement(a)),
                        ze(s, a, n),
                        l.head.appendChild(s);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  (s[te] = t), ge(s), (a = s);
                }
                t.stateNode = a;
              } else Hm(l, t.type, t.stateNode);
            else t.stateNode = Um(l, a, t.memoizedProps);
          else
            s !== a
              ? (s === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : s.count--,
                a === null
                  ? Hm(l, t.type, t.stateNode)
                  : Um(l, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Xl(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Pe(e, t),
          Ge(t),
          a & 512 && (Yt || n === null || ae(n, n.return)),
          n !== null && a & 4 && Xl(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (Pe(e, t),
          Ge(t),
          a & 512 && (Yt || n === null || ae(n, n.return)),
          t.flags & 32)
        ) {
          l = t.stateNode;
          try {
            Vn(l, "");
          } catch (L) {
            Jt(t, t.return, L);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((l = t.memoizedProps), Xl(t, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (ul = !0);
        break;
      case 6:
        if ((Pe(e, t), Ge(t), a & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (a = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = a;
          } catch (L) {
            Jt(t, t.return, L);
          }
        }
        break;
      case 3:
        if (
          ((rf = null),
          (l = be),
          (be = af(e.containerInfo)),
          Pe(e, t),
          (be = l),
          Ge(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Fu(e.containerInfo);
          } catch (L) {
            Jt(t, t.return, L);
          }
        ul && ((ul = !1), Lu(t));
        break;
      case 4:
        (a = be),
          (be = af(t.stateNode.containerInfo)),
          Pe(e, t),
          Ge(t),
          (be = a);
        break;
      case 12:
        Pe(e, t), Ge(t);
        break;
      case 13:
        Pe(e, t),
          Ge(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (wd = lt()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Mu(t, a)));
        break;
      case 22:
        l = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          x = Ve,
          $ = Yt;
        if (
          ((Ve = x || l),
          (Yt = $ || S),
          Pe(e, t),
          (Yt = $),
          (Ve = x),
          Ge(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = l ? e._visibility & -2 : e._visibility | 1,
              l && (n === null || S || Ve || Yt || Ma(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (((s = S.stateNode), l))
                    (m = s.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none");
                  else {
                    g = S.stateNode;
                    var K = S.memoizedProps.style,
                      M =
                        K != null && K.hasOwnProperty("display")
                          ? K.display
                          : null;
                    g.style.display =
                      M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (L) {
                  Jt(S, S.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = l ? "" : S.memoizedProps;
                } catch (L) {
                  Jt(S, S.return, L);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), Mu(t, n))));
        break;
      case 19:
        Pe(e, t),
          Ge(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Mu(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pe(e, t), Ge(t);
    }
  }
  function Ge(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (xa(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              s = Ql(t);
            wa(t, s, l);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (Vn(m, ""), (n.flags &= -33));
            var g = Ql(t);
            wa(t, g, m);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              x = Ql(t);
            Zi(t, x, S);
            break;
          default:
            throw Error(o(161));
        }
      } catch ($) {
        Jt(t, t.return, $);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Lu(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Lu(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Hn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Vc(t, e.alternate, e), (e = e.sibling);
  }
  function Ma(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ye(4, e, e.return), Ma(e);
          break;
        case 1:
          ae(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Ca(e, e.return, n),
            Ma(e);
          break;
        case 27:
          Vu(e.stateNode);
        case 26:
        case 5:
          ae(e, e.return), Ma(e);
          break;
        case 22:
          e.memoizedState === null && Ma(e);
          break;
        case 30:
          Ma(e);
          break;
        default:
          Ma(e);
      }
      t = t.sibling;
    }
  }
  function la(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        l = t,
        s = e,
        m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          la(l, s, n), de(4, s);
          break;
        case 1:
          if (
            (la(l, s, n),
            (a = s),
            (l = a.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (x) {
              Jt(a, a.return, x);
            }
          if (((a = s), (l = a.updateQueue), l !== null)) {
            var g = a.stateNode;
            try {
              var S = l.shared.hiddenCallbacks;
              if (S !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < S.length; l++)
                  fu(S[l], g);
            } catch (x) {
              Jt(a, a.return, x);
            }
          }
          n && m & 64 && Oe(s), bn(s, s.return);
          break;
        case 27:
          Ji(s);
        case 26:
        case 5:
          la(l, s, n), n && a === null && m & 4 && fn(s), bn(s, s.return);
          break;
        case 12:
          la(l, s, n);
          break;
        case 13:
          la(l, s, n), n && m & 4 && wu(l, s);
          break;
        case 22:
          s.memoizedState === null && la(l, s, n), bn(s, s.return);
          break;
        case 30:
          break;
        default:
          la(l, s, n);
      }
      e = e.sibling;
    }
  }
  function ns(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Hl(n));
  }
  function as(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Hl(t));
  }
  function La(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Gh(t, e, n, a), (e = e.sibling);
  }
  function Gh(t, e, n, a) {
    var l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        La(t, e, n, a), l & 2048 && de(9, e);
        break;
      case 1:
        La(t, e, n, a);
        break;
      case 3:
        La(t, e, n, a),
          l & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Hl(t)));
        break;
      case 12:
        if (l & 2048) {
          La(t, e, n, a), (t = e.stateNode);
          try {
            var s = e.memoizedProps,
              m = s.id,
              g = s.onPostCommit;
            typeof g == "function" &&
              g(
                m,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            Jt(e, e.return, S);
          }
        } else La(t, e, n, a);
        break;
      case 13:
        La(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        (s = e.stateNode),
          (m = e.alternate),
          e.memoizedState !== null
            ? s._visibility & 2
              ? La(t, e, n, a)
              : Uu(t, e)
            : s._visibility & 2
            ? La(t, e, n, a)
            : ((s._visibility |= 2),
              ls(t, e, n, a, (e.subtreeFlags & 10256) !== 0)),
          l & 2048 && ns(m, e);
        break;
      case 24:
        La(t, e, n, a), l & 2048 && as(e.alternate, e);
        break;
      default:
        La(t, e, n, a);
    }
  }
  function ls(t, e, n, a, l) {
    for (l = l && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var s = t,
        m = e,
        g = n,
        S = a,
        x = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          ls(s, m, g, S, l), de(8, m);
          break;
        case 23:
          break;
        case 22:
          var $ = m.stateNode;
          m.memoizedState !== null
            ? $._visibility & 2
              ? ls(s, m, g, S, l)
              : Uu(s, m)
            : (($._visibility |= 2), ls(s, m, g, S, l)),
            l && x & 2048 && ns(m.alternate, m);
          break;
        case 24:
          ls(s, m, g, S, l), l && x & 2048 && as(m.alternate, m);
          break;
        default:
          ls(s, m, g, S, l);
      }
      e = e.sibling;
    }
  }
  function Uu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          l = a.flags;
        switch (a.tag) {
          case 22:
            Uu(n, a), l & 2048 && ns(a.alternate, a);
            break;
          case 24:
            Uu(n, a), l & 2048 && as(a.alternate, a);
            break;
          default:
            Uu(n, a);
        }
        e = e.sibling;
      }
  }
  var zu = 8192;
  function is(t) {
    if (t.subtreeFlags & zu)
      for (t = t.child; t !== null; ) kh(t), (t = t.sibling);
  }
  function kh(t) {
    switch (t.tag) {
      case 26:
        is(t),
          t.flags & zu &&
            t.memoizedState !== null &&
            Qg(be, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        is(t);
        break;
      case 3:
      case 4:
        var e = be;
        (be = af(t.stateNode.containerInfo)), is(t), (be = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = zu), (zu = 16777216), is(t), (zu = e))
            : is(t));
        break;
      default:
        is(t);
    }
  }
  function Kh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Hu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Ft = a), Qh(a, t);
        }
      Kh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Xh(t), (t = t.sibling);
  }
  function Xh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Hu(t), t.flags & 2048 && ye(9, t, t.return);
        break;
      case 3:
        Hu(t);
        break;
      case 12:
        Hu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Kc(t))
          : Hu(t);
        break;
      default:
        Hu(t);
    }
  }
  function Kc(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Ft = a), Qh(a, t);
        }
      Kh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ye(8, e, e.return), Kc(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Kc(e));
          break;
        default:
          Kc(e);
      }
      t = t.sibling;
    }
  }
  function Qh(t, e) {
    for (; Ft !== null; ) {
      var n = Ft;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ye(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Hl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), (Ft = a);
      else
        t: for (n = t; Ft !== null; ) {
          a = Ft;
          var l = a.sibling,
            s = a.return;
          if ((es(a), a === n)) {
            Ft = null;
            break t;
          }
          if (l !== null) {
            (l.return = s), (Ft = l);
            break t;
          }
          Ft = s;
        }
    }
  }
  var og = {
      getCacheForType: function (t) {
        var e = Ae(se),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    cg = typeof WeakMap == "function" ? WeakMap : Map,
    Gt = 0,
    Pt = null,
    Ct = null,
    Ut = 0,
    kt = 0,
    Sn = null,
    Zl = !1,
    rs = !1,
    Rd = !1,
    ol = 0,
    he = 0,
    Jl = 0,
    Pi = 0,
    Cd = 0,
    Bn = 0,
    ss = 0,
    Bu = null,
    dn = null,
    xd = !1,
    wd = 0,
    Xc = 1 / 0,
    Qc = null,
    Fl = null,
    Ue = 0,
    Wl = null,
    us = null,
    os = 0,
    Md = 0,
    Ld = null,
    Zh = null,
    ju = 0,
    Ud = null;
  function Tn() {
    if ((Gt & 2) !== 0 && Ut !== 0) return Ut & -Ut;
    if (j.T !== null) {
      var t = Sa;
      return t !== 0 ? t : Yd();
    }
    return ci();
  }
  function Jh() {
    Bn === 0 && (Bn = (Ut & 536870912) === 0 || zt ? po() : 536870912);
    var t = Ye.current;
    return t !== null && (t.flags |= 32), Bn;
  }
  function An(t, e, n) {
    ((t === Pt && (kt === 2 || kt === 9)) || t.cancelPendingCommit !== null) &&
      (cs(t, 0), Pl(t, Ut, Bn, !1)),
      oi(t, n),
      ((Gt & 2) === 0 || t !== Pt) &&
        (t === Pt &&
          ((Gt & 2) === 0 && (Pi |= n), he === 4 && Pl(t, Ut, Bn, !1)),
        Ua(t));
  }
  function Fh(t, e, n) {
    if ((Gt & 6) !== 0) throw Error(o(327));
    var a = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || ui(t, e),
      l = a ? hg(t, e) : Bd(t, e, !0),
      s = a;
    do {
      if (l === 0) {
        rs && !a && Pl(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), s && !fg(n))) {
          (l = Bd(t, e, !1)), (s = !1);
          continue;
        }
        if (l === 2) {
          if (((s = e), t.errorRecoveryDisabledLanes & s)) var m = 0;
          else
            (m = t.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0);
          if (m !== 0) {
            e = m;
            t: {
              var g = t;
              l = Bu;
              var S = g.current.memoizedState.isDehydrated;
              if ((S && (cs(g, m).flags |= 256), (m = Bd(g, m, !1)), m !== 2)) {
                if (Rd && !S) {
                  (g.errorRecoveryDisabledLanes |= s), (Pi |= s), (l = 4);
                  break t;
                }
                (s = dn),
                  (dn = l),
                  s !== null && (dn === null ? (dn = s) : dn.push.apply(dn, s));
              }
              l = m;
            }
            if (((s = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          cs(t, 0), Pl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (s = l), s)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Pl(a, e, Bn, !Zl);
              break t;
            case 2:
              dn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((l = wd + 300 - lt()), 10 < l)) {
            if ((Pl(a, e, Bn, !Zl), Yn(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = Om(
              Wh.bind(null, a, n, dn, Qc, xd, e, Bn, Pi, ss, Zl, s, 2, -0, 0),
              l
            );
            break t;
          }
          Wh(a, n, dn, Qc, xd, e, Bn, Pi, ss, Zl, s, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ua(t);
  }
  function Wh(t, e, n, a, l, s, m, g, S, x, $, K, M, L) {
    if (
      ((t.timeoutHandle = -1),
      (K = e.subtreeFlags),
      (K & 8192 || (K & 16785408) === 16785408) &&
        ((Ku = { stylesheets: null, count: 0, unsuspend: Xg }),
        kh(e),
        (K = Zg()),
        K !== null))
    ) {
      (t.cancelPendingCommit = K(
        lm.bind(null, t, e, s, n, a, l, m, g, S, $, 1, M, L)
      )),
        Pl(t, s, m, !x);
      return;
    }
    lm(t, e, s, n, a, l, m, g, S);
  }
  function fg(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var l = n[a],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!qe(s(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Pl(t, e, n, a) {
    (e &= ~Cd),
      (e &= ~Pi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var l = e; 0 < l; ) {
      var s = 31 - Qe(l),
        m = 1 << s;
      (a[s] = -1), (l &= ~m);
    }
    n !== 0 && vo(t, n, e);
  }
  function Zc() {
    return (Gt & 6) === 0 ? (qu(0), !1) : !0;
  }
  function zd() {
    if (Ct !== null) {
      if (kt === 0) var t = Ct.return;
      else (t = Ct), (Mn = _a = null), vu(t), (kl = null), (Vi = 0), (t = Ct);
      for (; t !== null; ) fe(t.alternate, t), (t = t.return);
      Ct = null;
    }
  }
  function cs(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), Cg(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      zd(),
      (Pt = t),
      (Ct = n = Zn(t.current, null)),
      (Ut = e),
      (kt = 0),
      (Sn = null),
      (Zl = !1),
      (rs = ui(t, e)),
      (Rd = !1),
      (ss = Bn = Cd = Pi = Jl = he = 0),
      (dn = Bu = null),
      (xd = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var l = 31 - Qe(a),
          s = 1 << l;
        (e |= t[l]), (a &= ~s);
      }
    return (ol = e), wl(), n;
  }
  function Ph(t, e) {
    (Et = null),
      (j.H = Fr),
      e === Mi || e === Ur
        ? ((e = su()), (kt = 3))
        : e === ac
        ? ((e = su()), (kt = 4))
        : (kt =
            e === qc
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Sn = e),
      Ct === null && ((he = 1), ts(t, ln(e, t.current)));
  }
  function Ih() {
    var t = j.H;
    return (j.H = Fr), t === null ? Fr : t;
  }
  function tm() {
    var t = j.A;
    return (j.A = og), t;
  }
  function Hd() {
    (he = 4),
      Zl || ((Ut & 4194048) !== Ut && Ye.current !== null) || (rs = !0),
      ((Jl & 134217727) === 0 && (Pi & 134217727) === 0) ||
        Pt === null ||
        Pl(Pt, Ut, Bn, !1);
  }
  function Bd(t, e, n) {
    var a = Gt;
    Gt |= 2;
    var l = Ih(),
      s = tm();
    (Pt !== t || Ut !== e) && ((Qc = null), cs(t, e)), (e = !1);
    var m = he;
    t: do
      try {
        if (kt !== 0 && Ct !== null) {
          var g = Ct,
            S = Sn;
          switch (kt) {
            case 8:
              zd(), (m = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ye.current === null && (e = !0);
              var x = kt;
              if (((kt = 0), (Sn = null), fs(t, g, S, x), n && rs)) {
                m = 0;
                break t;
              }
              break;
            default:
              (x = kt), (kt = 0), (Sn = null), fs(t, g, S, x);
          }
        }
        dg(), (m = he);
        break;
      } catch ($) {
        Ph(t, $);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Mn = _a = null),
      (Gt = a),
      (j.H = l),
      (j.A = s),
      Ct === null && ((Pt = null), (Ut = 0), wl()),
      m
    );
  }
  function dg() {
    for (; Ct !== null; ) em(Ct);
  }
  function hg(t, e) {
    var n = Gt;
    Gt |= 2;
    var a = Ih(),
      l = tm();
    Pt !== t || Ut !== e
      ? ((Qc = null), (Xc = lt() + 500), cs(t, e))
      : (rs = ui(t, e));
    t: do
      try {
        if (kt !== 0 && Ct !== null) {
          e = Ct;
          var s = Sn;
          e: switch (kt) {
            case 1:
              (kt = 0), (Sn = null), fs(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (lc(s)) {
                (kt = 0), (Sn = null), nm(e);
                break;
              }
              (e = function () {
                (kt !== 2 && kt !== 9) || Pt !== t || (kt = 7), Ua(t);
              }),
                s.then(e, e);
              break t;
            case 3:
              kt = 7;
              break t;
            case 4:
              kt = 5;
              break t;
            case 7:
              lc(s)
                ? ((kt = 0), (Sn = null), nm(e))
                : ((kt = 0), (Sn = null), fs(t, e, s, 7));
              break;
            case 5:
              var m = null;
              switch (Ct.tag) {
                case 26:
                  m = Ct.memoizedState;
                case 5:
                case 27:
                  var g = Ct;
                  if (!m || Bm(m)) {
                    (kt = 0), (Sn = null);
                    var S = g.sibling;
                    if (S !== null) Ct = S;
                    else {
                      var x = g.return;
                      x !== null ? ((Ct = x), Jc(x)) : (Ct = null);
                    }
                    break e;
                  }
              }
              (kt = 0), (Sn = null), fs(t, e, s, 5);
              break;
            case 6:
              (kt = 0), (Sn = null), fs(t, e, s, 6);
              break;
            case 8:
              zd(), (he = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        mg();
        break;
      } catch ($) {
        Ph(t, $);
      }
    while (!0);
    return (
      (Mn = _a = null),
      (j.H = a),
      (j.A = l),
      (Gt = n),
      Ct !== null ? 0 : ((Pt = null), (Ut = 0), wl(), he)
    );
  }
  function mg() {
    for (; Ct !== null && !gn(); ) em(Ct);
  }
  function em(t) {
    var e = ne(t.alternate, t, ol);
    (t.memoizedProps = t.pendingProps), e === null ? Jc(t) : (Ct = e);
  }
  function nm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = c(n, e, e.pendingProps, e.type, void 0, Ut);
        break;
      case 11:
        e = c(n, e, e.pendingProps, e.type.render, e.ref, Ut);
        break;
      case 5:
        vu(e);
      default:
        fe(n, e), (e = Ct = Wo(e, ol)), (e = ne(n, e, ol));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Jc(t) : (Ct = e);
  }
  function fs(t, e, n, a) {
    (Mn = _a = null), vu(e), (kl = null), (Vi = 0);
    var l = e.return;
    try {
      if (Nd(t, l, e, n, Ut)) {
        (he = 1), ts(t, ln(n, t.current)), (Ct = null);
        return;
      }
    } catch (s) {
      if (l !== null) throw ((Ct = l), s);
      (he = 1), ts(t, ln(n, t.current)), (Ct = null);
      return;
    }
    e.flags & 32768
      ? (zt || a === 1
          ? (t = !0)
          : rs || (Ut & 536870912) !== 0
          ? (t = !1)
          : ((Zl = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Ye.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        am(e, t))
      : Jc(e);
  }
  function Jc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        am(e, Zl);
        return;
      }
      t = e.return;
      var n = Ee(e.alternate, e, ol);
      if (n !== null) {
        Ct = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Ct = e;
        return;
      }
      Ct = e = t;
    } while (e !== null);
    he === 0 && (he = 5);
  }
  function am(t, e) {
    do {
      var n = ve(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (Ct = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Ct = t;
        return;
      }
      Ct = t = n;
    } while (t !== null);
    (he = 6), (Ct = null);
  }
  function lm(t, e, n, a, l, s, m, g, S) {
    t.cancelPendingCommit = null;
    do Fc();
    while (Ue !== 0);
    if ((Gt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((s = e.lanes | e.childLanes),
        (s |= Fs),
        Vf(t, n, s, m, g, S),
        t === Pt && ((Ct = Pt = null), (Ut = 0)),
        (us = e),
        (Wl = t),
        (os = n),
        (Md = s),
        (Ld = l),
        (Zh = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            yg(si, function () {
              return om(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = j.T), (j.T = null), (l = tt.p), (tt.p = 2), (m = Gt), (Gt |= 4);
        try {
          xu(t, e, n);
        } finally {
          (Gt = m), (tt.p = l), (j.T = a);
        }
      }
      (Ue = 1), im(), rm(), sm();
    }
  }
  function im() {
    if (Ue === 1) {
      Ue = 0;
      var t = Wl,
        e = us,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = j.T), (j.T = null);
        var a = tt.p;
        tt.p = 2;
        var l = Gt;
        Gt |= 4;
        try {
          Wi(e, t);
          var s = Jd,
            m = Xs(t.containerInfo),
            g = s.focusedElem,
            S = s.selectionRange;
          if (
            m !== g &&
            g &&
            g.ownerDocument &&
            Vo(g.ownerDocument.documentElement, g)
          ) {
            if (S !== null && br(g)) {
              var x = S.start,
                $ = S.end;
              if (($ === void 0 && ($ = x), "selectionStart" in g))
                (g.selectionStart = x),
                  (g.selectionEnd = Math.min($, g.value.length));
              else {
                var K = g.ownerDocument || document,
                  M = (K && K.defaultView) || window;
                if (M.getSelection) {
                  var L = M.getSelection(),
                    pt = g.textContent.length,
                    ft = Math.min(S.start, pt),
                    Qt = S.end === void 0 ? ft : Math.min(S.end, pt);
                  !L.extend && ft > Qt && ((m = Qt), (Qt = ft), (ft = m));
                  var D = Yo(g, ft),
                    N = Yo(g, Qt);
                  if (
                    D &&
                    N &&
                    (L.rangeCount !== 1 ||
                      L.anchorNode !== D.node ||
                      L.anchorOffset !== D.offset ||
                      L.focusNode !== N.node ||
                      L.focusOffset !== N.offset)
                  ) {
                    var C = K.createRange();
                    C.setStart(D.node, D.offset),
                      L.removeAllRanges(),
                      ft > Qt
                        ? (L.addRange(C), L.extend(N.node, N.offset))
                        : (C.setEnd(N.node, N.offset), L.addRange(C));
                  }
                }
              }
            }
            for (K = [], L = g; (L = L.parentNode); )
              L.nodeType === 1 &&
                K.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < K.length;
              g++
            ) {
              var Y = K[g];
              (Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top);
            }
          }
          (of = !!Zd), (Jd = Zd = null);
        } finally {
          (Gt = l), (tt.p = a), (j.T = n);
        }
      }
      (t.current = e), (Ue = 2);
    }
  }
  function rm() {
    if (Ue === 2) {
      Ue = 0;
      var t = Wl,
        e = us,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = j.T), (j.T = null);
        var a = tt.p;
        tt.p = 2;
        var l = Gt;
        Gt |= 4;
        try {
          Vc(t, e.alternate, e);
        } finally {
          (Gt = l), (tt.p = a), (j.T = n);
        }
      }
      Ue = 3;
    }
  }
  function sm() {
    if (Ue === 4 || Ue === 3) {
      (Ue = 0), Ts();
      var t = Wl,
        e = us,
        n = os,
        a = Zh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ue = 5)
        : ((Ue = 0), (us = Wl = null), um(t, t.pendingLanes));
      var l = t.pendingLanes;
      if (
        (l === 0 && (Fl = null),
        Ns(n),
        (e = e.stateNode),
        Xe && typeof Xe.onCommitFiberRoot == "function")
      )
        try {
          Xe.onCommitFiberRoot($n, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = j.T), (l = tt.p), (tt.p = 2), (j.T = null);
        try {
          for (var s = t.onRecoverableError, m = 0; m < a.length; m++) {
            var g = a[m];
            s(g.value, { componentStack: g.stack });
          }
        } finally {
          (j.T = e), (tt.p = l);
        }
      }
      (os & 3) !== 0 && Fc(),
        Ua(t),
        (l = t.pendingLanes),
        (n & 4194090) !== 0 && (l & 42) !== 0
          ? t === Ud
            ? ju++
            : ((ju = 0), (Ud = t))
          : (ju = 0),
        qu(0);
    }
  }
  function um(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Hl(e)));
  }
  function Fc(t) {
    return im(), rm(), sm(), om();
  }
  function om() {
    if (Ue !== 5) return !1;
    var t = Wl,
      e = Md;
    Md = 0;
    var n = Ns(os),
      a = j.T,
      l = tt.p;
    try {
      (tt.p = 32 > n ? 32 : n), (j.T = null), (n = Ld), (Ld = null);
      var s = Wl,
        m = os;
      if (((Ue = 0), (us = Wl = null), (os = 0), (Gt & 6) !== 0))
        throw Error(o(331));
      var g = Gt;
      if (
        ((Gt |= 4),
        Xh(s.current),
        Gh(s, s.current, m, n),
        (Gt = g),
        qu(0, !1),
        Xe && typeof Xe.onPostCommitFiberRoot == "function")
      )
        try {
          Xe.onPostCommitFiberRoot($n, s);
        } catch {}
      return !0;
    } finally {
      (tt.p = l), (j.T = a), um(t, e);
    }
  }
  function cm(t, e, n) {
    (e = ln(n, e)),
      (e = Cu(t.stateNode, e, 2)),
      (t = Oa(t, e, 2)),
      t !== null && (oi(t, 2), Ua(t));
  }
  function Jt(t, e, n) {
    if (t.tag === 3) cm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          cm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Fl === null || !Fl.has(a)))
          ) {
            (t = ln(n, t)),
              (n = Bc(2)),
              (a = Oa(e, n, 2)),
              a !== null && (jc(n, a, e, t), oi(a, 2), Ua(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function jd(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new cg();
      var l = new Set();
      a.set(e, l);
    } else (l = a.get(e)), l === void 0 && ((l = new Set()), a.set(e, l));
    l.has(n) ||
      ((Rd = !0), l.add(n), (t = pg.bind(null, t, e, n)), e.then(t, t));
  }
  function pg(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Pt === t &&
        (Ut & n) === n &&
        (he === 4 || (he === 3 && (Ut & 62914560) === Ut && 300 > lt() - wd)
          ? (Gt & 2) === 0 && cs(t, 0)
          : (Cd |= n),
        ss === Ut && (ss = 0)),
      Ua(t);
  }
  function fm(t, e) {
    e === 0 && (e = go()), (t = Di(t, e)), t !== null && (oi(t, e), Ua(t));
  }
  function gg(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), fm(t, n);
  }
  function vg(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          l = t.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(e), fm(t, n);
  }
  function yg(t, e) {
    return Ba(t, e);
  }
  var Wc = null,
    ds = null,
    qd = !1,
    Pc = !1,
    $d = !1,
    Ii = 0;
  function Ua(t) {
    t !== ds &&
      t.next === null &&
      (ds === null ? (Wc = ds = t) : (ds = ds.next = t)),
      (Pc = !0),
      qd || ((qd = !0), Eg());
  }
  function qu(t, e) {
    if (!$d && Pc) {
      $d = !0;
      do
        for (var n = !1, a = Wc; a !== null; ) {
          if (t !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var s = 0;
            else {
              var m = a.suspendedLanes,
                g = a.pingedLanes;
              (s = (1 << (31 - Qe(42 | t) + 1)) - 1),
                (s &= l & ~(m & ~g)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0);
            }
            s !== 0 && ((n = !0), pm(a, s));
          } else
            (s = Ut),
              (s = Yn(
                a,
                a === Pt ? s : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (s & 3) === 0 || ui(a, s) || ((n = !0), pm(a, s));
          a = a.next;
        }
      while (n);
      $d = !1;
    }
  }
  function _g() {
    dm();
  }
  function dm() {
    Pc = qd = !1;
    var t = 0;
    Ii !== 0 && (Rg() && (t = Ii), (Ii = 0));
    for (var e = lt(), n = null, a = Wc; a !== null; ) {
      var l = a.next,
        s = hm(a, e);
      s === 0
        ? ((a.next = null),
          n === null ? (Wc = l) : (n.next = l),
          l === null && (ds = n))
        : ((n = a), (t !== 0 || (s & 3) !== 0) && (Pc = !0)),
        (a = l);
    }
    qu(t);
  }
  function hm(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        l = t.expirationTimes,
        s = t.pendingLanes & -62914561;
      0 < s;

    ) {
      var m = 31 - Qe(s),
        g = 1 << m,
        S = l[m];
      S === -1
        ? ((g & n) === 0 || (g & a) !== 0) && (l[m] = Yf(g, e))
        : S <= e && (t.expiredLanes |= g),
        (s &= ~g);
    }
    if (
      ((e = Pt),
      (n = Ut),
      (n = Yn(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (kt === 2 || kt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ss(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || ui(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && Ss(a), Ns(n))) {
        case 2:
        case 8:
          n = zf;
          break;
        case 32:
          n = si;
          break;
        case 268435456:
          n = ho;
          break;
        default:
          n = si;
      }
      return (
        (a = mm.bind(null, t)),
        (n = Ba(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && Ss(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function mm(t, e) {
    if (Ue !== 0 && Ue !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (Fc() && t.callbackNode !== n) return null;
    var a = Ut;
    return (
      (a = Yn(
        t,
        t === Pt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Fh(t, a, e),
          hm(t, lt()),
          t.callbackNode != null && t.callbackNode === n
            ? mm.bind(null, t)
            : null)
    );
  }
  function pm(t, e) {
    if (Fc()) return null;
    Fh(t, e, !0);
  }
  function Eg() {
    xg(function () {
      (Gt & 6) !== 0 ? Ba(fo, _g) : dm();
    });
  }
  function Yd() {
    return Ii === 0 && (Ii = po()), Ii;
  }
  function gm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : bl("" + t);
  }
  function vm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function bg(t, e, n, a, l) {
    if (e === "submit" && n && n.stateNode === l) {
      var s = gm((l[Re] || null).action),
        m = a.submitter;
      m &&
        ((e = (e = m[Re] || null)
          ? gm(e.formAction)
          : m.getAttribute("formAction")),
        e !== null && ((s = e), (m = null)));
      var g = new mi("action", "action", null, a, l);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ii !== 0) {
                  var S = m ? vm(l, m) : new FormData(l);
                  Jr(
                    n,
                    { pending: !0, data: S, method: l.method, action: s },
                    null,
                    S
                  );
                }
              } else
                typeof s == "function" &&
                  (g.preventDefault(),
                  (S = m ? vm(l, m) : new FormData(l)),
                  Jr(
                    n,
                    { pending: !0, data: S, method: l.method, action: s },
                    s,
                    S
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Vd = 0; Vd < Tr.length; Vd++) {
    var Gd = Tr[Vd],
      Sg = Gd.toLowerCase(),
      Tg = Gd[0].toUpperCase() + Gd.slice(1);
    an(Sg, "on" + Tg);
  }
  an(Ko, "onAnimationEnd"),
    an(Xo, "onAnimationIteration"),
    an(Qo, "onAnimationStart"),
    an("dblclick", "onDoubleClick"),
    an("focusin", "onFocus"),
    an("focusout", "onBlur"),
    an(od, "onTransitionRun"),
    an(cd, "onTransitionStart"),
    an(fd, "onTransitionCancel"),
    an(Zo, "onTransitionEnd"),
    Ga("onMouseEnter", ["mouseout", "mouseover"]),
    Ga("onMouseLeave", ["mouseout", "mouseover"]),
    Ga("onPointerEnter", ["pointerout", "pointerover"]),
    Ga("onPointerLeave", ["pointerout", "pointerover"]),
    Va(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Va(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Va("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Va(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Va(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Va(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var $u =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ag = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat($u)
    );
  function ym(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        l = a.event;
      a = a.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var m = a.length - 1; 0 <= m; m--) {
            var g = a[m],
              S = g.instance,
              x = g.currentTarget;
            if (((g = g.listener), S !== s && l.isPropagationStopped()))
              break t;
            (s = g), (l.currentTarget = x);
            try {
              s(l);
            } catch ($) {
              Ru($);
            }
            (l.currentTarget = null), (s = S);
          }
        else
          for (m = 0; m < a.length; m++) {
            if (
              ((g = a[m]),
              (S = g.instance),
              (x = g.currentTarget),
              (g = g.listener),
              S !== s && l.isPropagationStopped())
            )
              break t;
            (s = g), (l.currentTarget = x);
            try {
              s(l);
            } catch ($) {
              Ru($);
            }
            (l.currentTarget = null), (s = S);
          }
      }
    }
  }
  function xt(t, e) {
    var n = e[Ds];
    n === void 0 && (n = e[Ds] = new Set());
    var a = t + "__bubble";
    n.has(a) || (_m(e, t, 2, !1), n.add(a));
  }
  function kd(t, e, n) {
    var a = 0;
    e && (a |= 4), _m(n, t, a, e);
  }
  var Ic = "_reactListening" + Math.random().toString(36).slice(2);
  function Kd(t) {
    if (!t[Ic]) {
      (t[Ic] = !0),
        _o.forEach(function (n) {
          n !== "selectionchange" && (Ag.has(n) || kd(n, !1, t), kd(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ic] || ((e[Ic] = !0), kd("selectionchange", !1, e));
    }
  }
  function _m(t, e, n, a) {
    switch (Gm(e)) {
      case 2:
        var l = Wg;
        break;
      case 8:
        l = Pg;
        break;
      default:
        l = ih;
    }
    (n = l.bind(null, e, n, t)),
      (l = void 0),
      !Gn ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (l = !0),
      a
        ? l !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: l })
          : t.addEventListener(e, n, !0)
        : l !== void 0
        ? t.addEventListener(e, n, { passive: l })
        : t.addEventListener(e, n, !1);
  }
  function Xd(t, e, n, a, l) {
    var s = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var m = a.tag;
        if (m === 3 || m === 4) {
          var g = a.stateNode.containerInfo;
          if (g === l) break;
          if (m === 4)
            for (m = a.return; m !== null; ) {
              var S = m.tag;
              if ((S === 3 || S === 4) && m.stateNode.containerInfo === l)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (((m = gl(g)), m === null)) return;
            if (((S = m.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = s = m;
              continue t;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    Te(function () {
      var x = s,
        $ = Us(n),
        K = [];
      t: {
        var M = Jo.get(t);
        if (M !== void 0) {
          var L = mi,
            pt = t;
          switch (t) {
            case "keypress":
              if (Sl(n) === 0) break t;
            case "keydown":
            case "keyup":
              L = Xn;
              break;
            case "focusin":
              (pt = "focus"), (L = gi);
              break;
            case "focusout":
              (pt = "blur"), (L = gi);
              break;
            case "beforeblur":
            case "afterblur":
              L = gi;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = yn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = Ka;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = Mo;
              break;
            case Ko:
            case Xo:
            case Qo:
              L = If;
              break;
            case Zo:
              L = _i;
              break;
            case "scroll":
            case "scrollend":
              L = Co;
              break;
            case "wheel":
              L = Ei;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = Cn;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = Qn;
              break;
            case "toggle":
            case "beforetoggle":
              L = Lo;
          }
          var ft = (e & 4) !== 0,
            Qt = !ft && (t === "scroll" || t === "scrollend"),
            D = ft ? (M !== null ? M + "Capture" : null) : M;
          ft = [];
          for (var N = x, C; N !== null; ) {
            var Y = N;
            if (
              ((C = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                C === null ||
                D === null ||
                ((Y = ha(N, D)), Y != null && ft.push(Yu(N, Y, C))),
              Qt)
            )
              break;
            N = N.return;
          }
          0 < ft.length &&
            ((M = new L(M, pt, null, n, $)),
            K.push({ event: M, listeners: ft }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((M = t === "mouseover" || t === "pointerover"),
            (L = t === "mouseout" || t === "pointerout"),
            M &&
              n !== Ls &&
              (pt = n.relatedTarget || n.fromElement) &&
              (gl(pt) || pt[ml]))
          )
            break t;
          if (
            (L || M) &&
            ((M =
              $.window === $
                ? $
                : (M = $.ownerDocument)
                ? M.defaultView || M.parentWindow
                : window),
            L
              ? ((pt = n.relatedTarget || n.toElement),
                (L = x),
                (pt = pt ? gl(pt) : null),
                pt !== null &&
                  ((Qt = p(pt)),
                  (ft = pt.tag),
                  pt !== Qt || (ft !== 5 && ft !== 27 && ft !== 6)) &&
                  (pt = null))
              : ((L = null), (pt = x)),
            L !== pt)
          ) {
            if (
              ((ft = yn),
              (Y = "onMouseLeave"),
              (D = "onMouseEnter"),
              (N = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ft = Qn),
                (Y = "onPointerLeave"),
                (D = "onPointerEnter"),
                (N = "pointer")),
              (Qt = L == null ? M : di(L)),
              (C = pt == null ? M : di(pt)),
              (M = new ft(Y, N + "leave", L, n, $)),
              (M.target = Qt),
              (M.relatedTarget = C),
              (Y = null),
              gl($) === x &&
                ((ft = new ft(D, N + "enter", pt, n, $)),
                (ft.target = C),
                (ft.relatedTarget = Qt),
                (Y = ft)),
              (Qt = Y),
              L && pt)
            )
              e: {
                for (ft = L, D = pt, N = 0, C = ft; C; C = hs(C)) N++;
                for (C = 0, Y = D; Y; Y = hs(Y)) C++;
                for (; 0 < N - C; ) (ft = hs(ft)), N--;
                for (; 0 < C - N; ) (D = hs(D)), C--;
                for (; N--; ) {
                  if (ft === D || (D !== null && ft === D.alternate)) break e;
                  (ft = hs(ft)), (D = hs(D));
                }
                ft = null;
              }
            else ft = null;
            L !== null && Em(K, M, L, ft, !1),
              pt !== null && Qt !== null && Em(K, Qt, pt, ft, !0);
          }
        }
        t: {
          if (
            ((M = x ? di(x) : window),
            (L = M.nodeName && M.nodeName.toLowerCase()),
            L === "select" || (L === "input" && M.type === "file"))
          )
            var it = yr;
          else if (jo(M))
            if (_r) it = sd;
            else {
              it = rd;
              var Dt = Ks;
            }
          else
            (L = M.nodeName),
              !L ||
              L.toLowerCase() !== "input" ||
              (M.type !== "checkbox" && M.type !== "radio")
                ? x && Ms(x.elementType) && (it = yr)
                : (it = qo);
          if (it && (it = it(t, x))) {
            vr(K, it, n, $);
            break t;
          }
          Dt && Dt(t, M, x),
            t === "focusout" &&
              x &&
              M.type === "number" &&
              x.memoizedProps.value != null &&
              ws(M, "number", M.value);
        }
        switch (((Dt = x ? di(x) : window), t)) {
          case "focusin":
            (jo(Dt) || Dt.contentEditable === "true") &&
              ((Cl = Dt), (Sr = x), (Ai = null));
            break;
          case "focusout":
            Ai = Sr = Cl = null;
            break;
          case "mousedown":
            Qs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Qs = !1), Zs(K, n, $);
            break;
          case "selectionchange":
            if (Go) break;
          case "keydown":
          case "keyup":
            Zs(K, n, $);
        }
        var ut;
        if (pr)
          t: {
            switch (t) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          Za
            ? Ho(t, n) && (dt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (dt = "onCompositionStart");
        dt &&
          (zo &&
            n.locale !== "ko" &&
            (Za || dt !== "onCompositionStart"
              ? dt === "onCompositionEnd" && Za && (ut = zs())
              : ((kn = $),
                (hi = "value" in kn ? kn.value : kn.textContent),
                (Za = !0))),
          (Dt = tf(x, dt)),
          0 < Dt.length &&
            ((dt = new vi(dt, t, null, n, $)),
            K.push({ event: dt, listeners: Dt }),
            ut
              ? (dt.data = ut)
              : ((ut = Bo(n)), ut !== null && (dt.data = ut)))),
          (ut = ad ? ld(t, n) : Ys(t, n)) &&
            ((dt = tf(x, "onBeforeInput")),
            0 < dt.length &&
              ((Dt = new vi("onBeforeInput", "beforeinput", null, n, $)),
              K.push({ event: Dt, listeners: dt }),
              (Dt.data = ut))),
          bg(K, t, x, n, $);
      }
      ym(K, e);
    });
  }
  function Yu(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function tf(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var l = t,
        s = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          s === null ||
          ((l = ha(t, n)),
          l != null && a.unshift(Yu(t, l, s)),
          (l = ha(t, e)),
          l != null && a.push(Yu(t, l, s))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function hs(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Em(t, e, n, a, l) {
    for (var s = e._reactName, m = []; n !== null && n !== a; ) {
      var g = n,
        S = g.alternate,
        x = g.stateNode;
      if (((g = g.tag), S !== null && S === a)) break;
      (g !== 5 && g !== 26 && g !== 27) ||
        x === null ||
        ((S = x),
        l
          ? ((x = ha(n, s)), x != null && m.unshift(Yu(n, x, S)))
          : l || ((x = ha(n, s)), x != null && m.push(Yu(n, x, S)))),
        (n = n.return);
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var Og = /\r\n?/g,
    Ng = /\u0000|\uFFFD/g;
  function bm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Og,
        `
`
      )
      .replace(Ng, "");
  }
  function Sm(t, e) {
    return (e = bm(e)), bm(t) === e;
  }
  function ef() {}
  function Xt(t, e, n, a, l, s) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Vn(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Vn(t, "" + a);
        break;
      case "className":
        ur(t, "class", a);
        break;
      case "tabIndex":
        ur(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ur(t, n, a);
        break;
      case "style":
        Ro(t, a, s);
        break;
      case "data":
        if (e !== "object") {
          ur(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (a = bl("" + a)), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" &&
            (n === "formAction"
              ? (e !== "input" && Xt(t, e, "name", l.name, l, null),
                Xt(t, e, "formEncType", l.formEncType, l, null),
                Xt(t, e, "formMethod", l.formMethod, l, null),
                Xt(t, e, "formTarget", l.formTarget, l, null))
              : (Xt(t, e, "encType", l.encType, l, null),
                Xt(t, e, "method", l.method, l, null),
                Xt(t, e, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (a = bl("" + a)), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = ef);
        break;
      case "onScroll":
        a != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && xt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = bl("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        xt("beforetoggle", t), xt("toggle", t), sr(t, "popover", a);
        break;
      case "xlinkActuate":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        sr(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Ff.get(n) || n), sr(t, n, a));
    }
  }
  function Qd(t, e, n, a, l, s) {
    switch (n) {
      case "style":
        Ro(t, a, s);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Vn(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Vn(t, "" + a);
        break;
      case "onScroll":
        a != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && xt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = ef);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Eo.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((l = n.endsWith("Capture")),
              (e = n.slice(2, l ? n.length - 7 : void 0)),
              (s = t[Re] || null),
              (s = s != null ? s[n] : null),
              typeof s == "function" && t.removeEventListener(e, s, l),
              typeof a == "function")
            ) {
              typeof s != "function" &&
                s !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, l);
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
              ? t.setAttribute(n, "")
              : sr(t, n, a);
          }
    }
  }
  function ze(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        xt("error", t), xt("load", t);
        var a = !1,
          l = !1,
          s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var m = n[s];
            if (m != null)
              switch (s) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Xt(t, e, s, m, n, null);
              }
          }
        l && Xt(t, e, "srcSet", n.srcSet, n, null),
          a && Xt(t, e, "src", n.src, n, null);
        return;
      case "input":
        xt("invalid", t);
        var g = (s = m = l = null),
          S = null,
          x = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var $ = n[a];
            if ($ != null)
              switch (a) {
                case "name":
                  l = $;
                  break;
                case "type":
                  m = $;
                  break;
                case "checked":
                  S = $;
                  break;
                case "defaultChecked":
                  x = $;
                  break;
                case "value":
                  s = $;
                  break;
                case "defaultValue":
                  g = $;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if ($ != null) throw Error(o(137, e));
                  break;
                default:
                  Xt(t, e, a, $, n, null);
              }
          }
        No(t, s, g, S, x, m, l, !1), cr(t);
        return;
      case "select":
        xt("invalid", t), (a = m = s = null);
        for (l in n)
          if (n.hasOwnProperty(l) && ((g = n[l]), g != null))
            switch (l) {
              case "value":
                s = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                a = g;
              default:
                Xt(t, e, l, g, n, null);
            }
        (e = s),
          (n = m),
          (t.multiple = !!a),
          e != null ? El(t, !!a, e, !1) : n != null && El(t, !!a, n, !0);
        return;
      case "textarea":
        xt("invalid", t), (s = l = a = null);
        for (m in n)
          if (n.hasOwnProperty(m) && ((g = n[m]), g != null))
            switch (m) {
              case "value":
                a = g;
                break;
              case "defaultValue":
                l = g;
                break;
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(91));
                break;
              default:
                Xt(t, e, m, g, n, null);
            }
        ka(t, a, l, s), cr(t);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((a = n[S]), a != null))
            switch (S) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Xt(t, e, S, a, n, null);
            }
        return;
      case "dialog":
        xt("beforetoggle", t), xt("toggle", t), xt("cancel", t), xt("close", t);
        break;
      case "iframe":
      case "object":
        xt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < $u.length; a++) xt($u[a], t);
        break;
      case "image":
        xt("error", t), xt("load", t);
        break;
      case "details":
        xt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        xt("error", t), xt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in n)
          if (n.hasOwnProperty(x) && ((a = n[x]), a != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Xt(t, e, x, a, n, null);
            }
        return;
      default:
        if (Ms(e)) {
          for ($ in n)
            n.hasOwnProperty($) &&
              ((a = n[$]), a !== void 0 && Qd(t, e, $, a, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((a = n[g]), a != null && Xt(t, e, g, a, n, null));
  }
  function Dg(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null,
          s = null,
          m = null,
          g = null,
          S = null,
          x = null,
          $ = null;
        for (L in n) {
          var K = n[L];
          if (n.hasOwnProperty(L) && K != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = K;
              default:
                a.hasOwnProperty(L) || Xt(t, e, L, null, a, K);
            }
        }
        for (var M in a) {
          var L = a[M];
          if (((K = n[M]), a.hasOwnProperty(M) && (L != null || K != null)))
            switch (M) {
              case "type":
                s = L;
                break;
              case "name":
                l = L;
                break;
              case "checked":
                x = L;
                break;
              case "defaultChecked":
                $ = L;
                break;
              case "value":
                m = L;
                break;
              case "defaultValue":
                g = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(o(137, e));
                break;
              default:
                L !== K && Xt(t, e, M, L, a, K);
            }
        }
        xs(t, m, g, S, x, $, s, l);
        return;
      case "select":
        L = m = g = M = null;
        for (s in n)
          if (((S = n[s]), n.hasOwnProperty(s) && S != null))
            switch (s) {
              case "value":
                break;
              case "multiple":
                L = S;
              default:
                a.hasOwnProperty(s) || Xt(t, e, s, null, a, S);
            }
        for (l in a)
          if (
            ((s = a[l]),
            (S = n[l]),
            a.hasOwnProperty(l) && (s != null || S != null))
          )
            switch (l) {
              case "value":
                M = s;
                break;
              case "defaultValue":
                g = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== S && Xt(t, e, l, s, a, S);
            }
        (e = g),
          (n = m),
          (a = L),
          M != null
            ? El(t, !!n, M, !1)
            : !!a != !!n &&
              (e != null ? El(t, !!n, e, !0) : El(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        L = M = null;
        for (g in n)
          if (
            ((l = n[g]),
            n.hasOwnProperty(g) && l != null && !a.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(t, e, g, null, a, l);
            }
        for (m in a)
          if (
            ((l = a[m]),
            (s = n[m]),
            a.hasOwnProperty(m) && (l != null || s != null))
          )
            switch (m) {
              case "value":
                M = l;
                break;
              case "defaultValue":
                L = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(o(91));
                break;
              default:
                l !== s && Xt(t, e, m, l, a, s);
            }
        fr(t, M, L);
        return;
      case "option":
        for (var pt in n)
          if (
            ((M = n[pt]),
            n.hasOwnProperty(pt) && M != null && !a.hasOwnProperty(pt))
          )
            switch (pt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Xt(t, e, pt, null, a, M);
            }
        for (S in a)
          if (
            ((M = a[S]),
            (L = n[S]),
            a.hasOwnProperty(S) && M !== L && (M != null || L != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  M && typeof M != "function" && typeof M != "symbol";
                break;
              default:
                Xt(t, e, S, M, a, L);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ft in n)
          (M = n[ft]),
            n.hasOwnProperty(ft) &&
              M != null &&
              !a.hasOwnProperty(ft) &&
              Xt(t, e, ft, null, a, M);
        for (x in a)
          if (
            ((M = a[x]),
            (L = n[x]),
            a.hasOwnProperty(x) && M !== L && (M != null || L != null))
          )
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null) throw Error(o(137, e));
                break;
              default:
                Xt(t, e, x, M, a, L);
            }
        return;
      default:
        if (Ms(e)) {
          for (var Qt in n)
            (M = n[Qt]),
              n.hasOwnProperty(Qt) &&
                M !== void 0 &&
                !a.hasOwnProperty(Qt) &&
                Qd(t, e, Qt, void 0, a, M);
          for ($ in a)
            (M = a[$]),
              (L = n[$]),
              !a.hasOwnProperty($) ||
                M === L ||
                (M === void 0 && L === void 0) ||
                Qd(t, e, $, M, a, L);
          return;
        }
    }
    for (var D in n)
      (M = n[D]),
        n.hasOwnProperty(D) &&
          M != null &&
          !a.hasOwnProperty(D) &&
          Xt(t, e, D, null, a, M);
    for (K in a)
      (M = a[K]),
        (L = n[K]),
        !a.hasOwnProperty(K) ||
          M === L ||
          (M == null && L == null) ||
          Xt(t, e, K, M, a, L);
  }
  var Zd = null,
    Jd = null;
  function nf(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Tm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Am(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Fd(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Wd = null;
  function Rg() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Wd
        ? !1
        : ((Wd = t), !0)
      : ((Wd = null), !1);
  }
  var Om = typeof setTimeout == "function" ? setTimeout : void 0,
    Cg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Nm = typeof Promise == "function" ? Promise : void 0,
    xg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Nm < "u"
        ? function (t) {
            return Nm.resolve(null).then(t).catch(wg);
          }
        : Om;
  function wg(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Il(t) {
    return t === "head";
  }
  function Dm(t, e) {
    var n = e,
      a = 0,
      l = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (0 < a && 8 > a) {
            n = a;
            var m = t.ownerDocument;
            if ((n & 1 && Vu(m.documentElement), n & 2 && Vu(m.body), n & 4))
              for (n = m.head, Vu(n), m = n.firstChild; m; ) {
                var g = m.nextSibling,
                  S = m.nodeName;
                m[Nn] ||
                  S === "SCRIPT" ||
                  S === "STYLE" ||
                  (S === "LINK" && m.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(m),
                  (m = g);
              }
          }
          if (l === 0) {
            t.removeChild(s), Fu(e);
            return;
          }
          l--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? l++
            : (a = n.charCodeAt(0) - 48);
      else a = 0;
      n = s;
    } while (n);
    Fu(e);
  }
  function Pd(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pd(n), pl(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Mg(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var l = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Nn])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((s = t.getAttribute("rel")),
                s === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                s !== l.rel ||
                t.getAttribute("href") !==
                  (l.href == null || l.href === "" ? null : l.href) ||
                t.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                t.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((s = t.getAttribute("src")),
                (s !== (l.src == null ? null : l.src) ||
                  t.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  t.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  s &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var s = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && t.getAttribute("name") === s) return t;
      } else return t;
      if (((t = ia(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Lg(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = ia(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Id(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function Ug(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function ia(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var th = null;
  function Rm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Cm(t, e, n) {
    switch (((e = nf(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Vu(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    pl(t);
  }
  var jn = new Map(),
    xm = new Set();
  function af(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var cl = tt.d;
  tt.d = { f: zg, r: Hg, D: Bg, C: jg, L: qg, m: $g, X: Vg, S: Yg, M: Gg };
  function zg() {
    var t = cl.f(),
      e = Zc();
    return t || e;
  }
  function Hg(t) {
    var e = fa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Sd(e) : cl.r(t);
  }
  var ms = typeof document > "u" ? null : document;
  function wm(t, e, n) {
    var a = ms;
    if (a && typeof e == "string" && e) {
      var l = en(e);
      (l = 'link[rel="' + t + '"][href="' + l + '"]'),
        typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
        xm.has(l) ||
          (xm.add(l),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(l) === null &&
            ((e = a.createElement("link")),
            ze(e, "link", t),
            ge(e),
            a.head.appendChild(e)));
    }
  }
  function Bg(t) {
    cl.D(t), wm("dns-prefetch", t, null);
  }
  function jg(t, e) {
    cl.C(t, e), wm("preconnect", t, e);
  }
  function qg(t, e, n) {
    cl.L(t, e, n);
    var a = ms;
    if (a && t && e) {
      var l = 'link[rel="preload"][as="' + en(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + en(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (l += '[imagesizes="' + en(n.imageSizes) + '"]'))
        : (l += '[href="' + en(t) + '"]');
      var s = l;
      switch (e) {
        case "style":
          s = ps(t);
          break;
        case "script":
          s = gs(t);
      }
      jn.has(s) ||
        ((t = A(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        jn.set(s, t),
        a.querySelector(l) !== null ||
          (e === "style" && a.querySelector(Gu(s))) ||
          (e === "script" && a.querySelector(ku(s))) ||
          ((e = a.createElement("link")),
          ze(e, "link", t),
          ge(e),
          a.head.appendChild(e)));
    }
  }
  function $g(t, e) {
    cl.m(t, e);
    var n = ms;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        l =
          'link[rel="modulepreload"][as="' + en(a) + '"][href="' + en(t) + '"]',
        s = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = gs(t);
      }
      if (
        !jn.has(s) &&
        ((t = A({ rel: "modulepreload", href: t }, e)),
        jn.set(s, t),
        n.querySelector(l) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ku(s))) return;
        }
        (a = n.createElement("link")),
          ze(a, "link", t),
          ge(a),
          n.head.appendChild(a);
      }
    }
  }
  function Yg(t, e, n) {
    cl.S(t, e, n);
    var a = ms;
    if (a && t) {
      var l = vl(a).hoistableStyles,
        s = ps(t);
      e = e || "default";
      var m = l.get(s);
      if (!m) {
        var g = { loading: 0, preload: null };
        if ((m = a.querySelector(Gu(s)))) g.loading = 5;
        else {
          (t = A({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = jn.get(s)) && eh(t, n);
          var S = (m = a.createElement("link"));
          ge(S),
            ze(S, "link", t),
            (S._p = new Promise(function (x, $) {
              (S.onload = x), (S.onerror = $);
            })),
            S.addEventListener("load", function () {
              g.loading |= 1;
            }),
            S.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            lf(m, e, a);
        }
        (m = { type: "stylesheet", instance: m, count: 1, state: g }),
          l.set(s, m);
      }
    }
  }
  function Vg(t, e) {
    cl.X(t, e);
    var n = ms;
    if (n && t) {
      var a = vl(n).hoistableScripts,
        l = gs(t),
        s = a.get(l);
      s ||
        ((s = n.querySelector(ku(l))),
        s ||
          ((t = A({ src: t, async: !0 }, e)),
          (e = jn.get(l)) && nh(t, e),
          (s = n.createElement("script")),
          ge(s),
          ze(s, "link", t),
          n.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        a.set(l, s));
    }
  }
  function Gg(t, e) {
    cl.M(t, e);
    var n = ms;
    if (n && t) {
      var a = vl(n).hoistableScripts,
        l = gs(t),
        s = a.get(l);
      s ||
        ((s = n.querySelector(ku(l))),
        s ||
          ((t = A({ src: t, async: !0, type: "module" }, e)),
          (e = jn.get(l)) && nh(t, e),
          (s = n.createElement("script")),
          ge(s),
          ze(s, "link", t),
          n.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        a.set(l, s));
    }
  }
  function Mm(t, e, n, a) {
    var l = (l = gt.current) ? af(l) : null;
    if (!l) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ps(n.href)),
            (n = vl(l).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ps(n.href);
          var s = vl(l).hoistableStyles,
            m = s.get(t);
          if (
            (m ||
              ((l = l.ownerDocument || l),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              s.set(t, m),
              (s = l.querySelector(Gu(t))) &&
                !s._p &&
                ((m.instance = s), (m.state.loading = 5)),
              jn.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                jn.set(t, n),
                s || kg(l, t, n, m.state))),
            e && a === null)
          )
            throw Error(o(528, ""));
          return m;
        }
        if (e && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = gs(n)),
              (n = vl(l).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function ps(t) {
    return 'href="' + en(t) + '"';
  }
  function Gu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Lm(t) {
    return A({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function kg(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ze(e, "link", n),
        ge(e),
        t.head.appendChild(e));
  }
  function gs(t) {
    return '[src="' + en(t) + '"]';
  }
  function ku(t) {
    return "script[async]" + t;
  }
  function Um(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + en(n.href) + '"]');
          if (a) return (e.instance = a), ge(a), a;
          var l = A({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            ge(a),
            ze(a, "style", l),
            lf(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          l = ps(n.href);
          var s = t.querySelector(Gu(l));
          if (s) return (e.state.loading |= 4), (e.instance = s), ge(s), s;
          (a = Lm(n)),
            (l = jn.get(l)) && eh(a, l),
            (s = (t.ownerDocument || t).createElement("link")),
            ge(s);
          var m = s;
          return (
            (m._p = new Promise(function (g, S) {
              (m.onload = g), (m.onerror = S);
            })),
            ze(s, "link", a),
            (e.state.loading |= 4),
            lf(s, n.precedence, t),
            (e.instance = s)
          );
        case "script":
          return (
            (s = gs(n.src)),
            (l = t.querySelector(ku(s)))
              ? ((e.instance = l), ge(l), l)
              : ((a = n),
                (l = jn.get(s)) && ((a = A({}, n)), nh(a, l)),
                (t = t.ownerDocument || t),
                (l = t.createElement("script")),
                ge(l),
                ze(l, "link", a),
                t.head.appendChild(l),
                (e.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), lf(a, n.precedence, t));
    return e.instance;
  }
  function lf(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        l = a.length ? a[a.length - 1] : null,
        s = l,
        m = 0;
      m < a.length;
      m++
    ) {
      var g = a[m];
      if (g.dataset.precedence === e) s = g;
      else if (s !== l) break;
    }
    s
      ? s.parentNode.insertBefore(t, s.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function eh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function nh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var rf = null;
  function zm(t, e, n) {
    if (rf === null) {
      var a = new Map(),
        l = (rf = new Map());
      l.set(n, a);
    } else (l = rf), (a = l.get(n)), a || ((a = new Map()), l.set(n, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), l = 0;
      l < n.length;
      l++
    ) {
      var s = n[l];
      if (
        !(
          s[Nn] ||
          s[te] ||
          (t === "link" && s.getAttribute("rel") === "stylesheet")
        ) &&
        s.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = s.getAttribute(e) || "";
        m = t + m;
        var g = a.get(m);
        g ? g.push(s) : a.set(m, [s]);
      }
    }
    return a;
  }
  function Hm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Kg(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Bm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Ku = null;
  function Xg() {}
  function Qg(t, e, n) {
    if (Ku === null) throw Error(o(475));
    var a = Ku;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var l = ps(n.href),
          s = t.querySelector(Gu(l));
        if (s) {
          (t = s._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = sf.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = s),
            ge(s);
          return;
        }
        (s = t.ownerDocument || t),
          (n = Lm(n)),
          (l = jn.get(l)) && eh(n, l),
          (s = s.createElement("link")),
          ge(s);
        var m = s;
        (m._p = new Promise(function (g, S) {
          (m.onload = g), (m.onerror = S);
        })),
          ze(s, "link", n),
          (e.instance = s);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = sf.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Zg() {
    if (Ku === null) throw Error(o(475));
    var t = Ku;
    return (
      t.stylesheets && t.count === 0 && ah(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && ah(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function sf() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ah(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var uf = null;
  function ah(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (uf = new Map()),
        e.forEach(Jg, t),
        (uf = null),
        sf.call(t));
  }
  function Jg(t, e) {
    if (!(e.state.loading & 4)) {
      var n = uf.get(t);
      if (n) var a = n.get(null);
      else {
        (n = new Map()), uf.set(t, n);
        for (
          var l = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            s = 0;
          s < l.length;
          s++
        ) {
          var m = l[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (n.set(m.dataset.precedence, m), (a = m));
        }
        a && n.set(null, a);
      }
      (l = e.instance),
        (m = l.getAttribute("data-precedence")),
        (s = n.get(m) || a),
        s === a && n.set(null, l),
        n.set(m, l),
        this.count++,
        (a = sf.bind(this)),
        l.addEventListener("load", a),
        l.addEventListener("error", a),
        s
          ? s.parentNode.insertBefore(l, s.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(l, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Xu = {
    $$typeof: at,
    Provider: null,
    Consumer: null,
    _currentValue: ct,
    _currentValue2: ct,
    _threadCount: 0,
  };
  function Fg(t, e, n, a, l, s, m, g) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = As(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = As(0)),
      (this.hiddenUpdates = As(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = s),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = g),
      (this.incompleteTransitions = new Map());
  }
  function jm(t, e, n, a, l, s, m, g, S, x, $, K) {
    return (
      (t = new Fg(t, e, n, m, g, S, x, K)),
      (e = 1),
      s === !0 && (e |= 24),
      (s = Je(3, null, null, e)),
      (t.current = s),
      (s.stateNode = t),
      (e = Mr()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (s.memoizedState = { element: a, isDehydrated: n, cache: e }),
      uu(s),
      t
    );
  }
  function qm(t) {
    return t ? ((t = Ll), t) : Ll;
  }
  function $m(t, e, n, a, l, s) {
    (l = qm(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = Aa(e)),
      (a.payload = { element: n }),
      (s = s === void 0 ? null : s),
      s !== null && (a.callback = s),
      (n = Oa(t, a, e)),
      n !== null && (An(n, t, e), Ui(n, t, e));
  }
  function Ym(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function lh(t, e) {
    Ym(t, e), (t = t.alternate) && Ym(t, e);
  }
  function Vm(t) {
    if (t.tag === 13) {
      var e = Di(t, 67108864);
      e !== null && An(e, t, 67108864), lh(t, 67108864);
    }
  }
  var of = !0;
  function Wg(t, e, n, a) {
    var l = j.T;
    j.T = null;
    var s = tt.p;
    try {
      (tt.p = 2), ih(t, e, n, a);
    } finally {
      (tt.p = s), (j.T = l);
    }
  }
  function Pg(t, e, n, a) {
    var l = j.T;
    j.T = null;
    var s = tt.p;
    try {
      (tt.p = 8), ih(t, e, n, a);
    } finally {
      (tt.p = s), (j.T = l);
    }
  }
  function ih(t, e, n, a) {
    if (of) {
      var l = rh(a);
      if (l === null) Xd(t, e, a, cf, n), km(t, a);
      else if (tv(l, t, e, n, a)) a.stopPropagation();
      else if ((km(t, a), e & 4 && -1 < Ig.indexOf(t))) {
        for (; l !== null; ) {
          var s = fa(l);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var m = qa(s.pendingLanes);
                  if (m !== 0) {
                    var g = s;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var S = 1 << (31 - Qe(m));
                      (g.entanglements[1] |= S), (m &= ~S);
                    }
                    Ua(s), (Gt & 6) === 0 && ((Xc = lt() + 500), qu(0));
                  }
                }
                break;
              case 13:
                (g = Di(s, 2)), g !== null && An(g, s, 2), Zc(), lh(s, 2);
            }
          if (((s = rh(a)), s === null && Xd(t, e, a, cf, n), s === l)) break;
          l = s;
        }
        l !== null && a.stopPropagation();
      } else Xd(t, e, a, null, n);
    }
  }
  function rh(t) {
    return (t = Us(t)), sh(t);
  }
  var cf = null;
  function sh(t) {
    if (((cf = null), (t = gl(t)), t !== null)) {
      var e = p(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = y(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (cf = t), null;
  }
  function Gm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (lr()) {
          case fo:
            return 2;
          case zf:
            return 8;
          case si:
          case Hf:
            return 32;
          case ho:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uh = !1,
    ti = null,
    ei = null,
    ni = null,
    Qu = new Map(),
    Zu = new Map(),
    ai = [],
    Ig =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function km(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ti = null;
        break;
      case "dragenter":
      case "dragleave":
        ei = null;
        break;
      case "mouseover":
      case "mouseout":
        ni = null;
        break;
      case "pointerover":
      case "pointerout":
        Qu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zu.delete(e.pointerId);
    }
  }
  function Ju(t, e, n, a, l, s) {
    return t === null || t.nativeEvent !== s
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: s,
          targetContainers: [l],
        }),
        e !== null && ((e = fa(e)), e !== null && Vm(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        l !== null && e.indexOf(l) === -1 && e.push(l),
        t);
  }
  function tv(t, e, n, a, l) {
    switch (e) {
      case "focusin":
        return (ti = Ju(ti, t, e, n, a, l)), !0;
      case "dragenter":
        return (ei = Ju(ei, t, e, n, a, l)), !0;
      case "mouseover":
        return (ni = Ju(ni, t, e, n, a, l)), !0;
      case "pointerover":
        var s = l.pointerId;
        return Qu.set(s, Ju(Qu.get(s) || null, t, e, n, a, l)), !0;
      case "gotpointercapture":
        return (
          (s = l.pointerId), Zu.set(s, Ju(Zu.get(s) || null, t, e, n, a, l)), !0
        );
    }
    return !1;
  }
  function Km(t) {
    var e = gl(t.target);
    if (e !== null) {
      var n = p(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = y(n)), e !== null)) {
            (t.blockedOn = e),
              Gf(t.priority, function () {
                if (n.tag === 13) {
                  var a = Tn();
                  a = Os(a);
                  var l = Di(n, a);
                  l !== null && An(l, n, a), lh(n, a);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ff(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = rh(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        (Ls = a), n.target.dispatchEvent(a), (Ls = null);
      } else return (e = fa(n)), e !== null && Vm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function Xm(t, e, n) {
    ff(t) && n.delete(e);
  }
  function ev() {
    (uh = !1),
      ti !== null && ff(ti) && (ti = null),
      ei !== null && ff(ei) && (ei = null),
      ni !== null && ff(ni) && (ni = null),
      Qu.forEach(Xm),
      Zu.forEach(Xm);
  }
  function df(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      uh ||
        ((uh = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, ev)));
  }
  var hf = null;
  function Qm(t) {
    hf !== t &&
      ((hf = t),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        hf === t && (hf = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            l = t[e + 2];
          if (typeof a != "function") {
            if (sh(a || n) === null) continue;
            break;
          }
          var s = fa(n);
          s !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Jr(s, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function Fu(t) {
    function e(S) {
      return df(S, t);
    }
    ti !== null && df(ti, t),
      ei !== null && df(ei, t),
      ni !== null && df(ni, t),
      Qu.forEach(e),
      Zu.forEach(e);
    for (var n = 0; n < ai.length; n++) {
      var a = ai[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ai.length && ((n = ai[0]), n.blockedOn === null); )
      Km(n), n.blockedOn === null && ai.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          s = n[a + 1],
          m = l[Re] || null;
        if (typeof s == "function") m || Qm(n);
        else if (m) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (((l = s), (m = s[Re] || null))) g = m.formAction;
            else if (sh(l) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? (n[a + 1] = g) : (n.splice(a, 3), (a -= 3)),
            Qm(n);
        }
      }
  }
  function oh(t) {
    this._internalRoot = t;
  }
  (mf.prototype.render = oh.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        a = Tn();
      $m(n, a, t, e, null, null);
    }),
    (mf.prototype.unmount = oh.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          $m(t.current, 2, null, t, null, null), Zc(), (e[ml] = null);
        }
      });
  function mf(t) {
    this._internalRoot = t;
  }
  mf.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ci();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < ai.length && e !== 0 && e < ai[n].priority; n++);
      ai.splice(n, 0, t), n === 0 && Km(t);
    }
  };
  var Zm = u.version;
  if (Zm !== "19.1.1") throw Error(o(527, Zm, "19.1.1"));
  tt.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = E(e)),
      (t = t !== null ? _(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var nv = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pf.isDisabled && pf.supportsFiber)
      try {
        ($n = pf.inject(nv)), (Xe = pf);
      } catch {}
  }
  return (
    (Pu.createRoot = function (t, e) {
      if (!h(t)) throw Error(o(299));
      var n = !1,
        a = "",
        l = na,
        s = Uc,
        m = zc,
        g = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
          e.onCaughtError !== void 0 && (s = e.onCaughtError),
          e.onRecoverableError !== void 0 && (m = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (g = e.unstable_transitionCallbacks)),
        (e = jm(t, 1, !1, null, null, n, a, l, s, m, g, null)),
        (t[ml] = e.current),
        Kd(t),
        new oh(e)
      );
    }),
    (Pu.hydrateRoot = function (t, e, n) {
      if (!h(t)) throw Error(o(299));
      var a = !1,
        l = "",
        s = na,
        m = Uc,
        g = zc,
        S = null,
        x = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (x = n.formState)),
        (e = jm(t, 1, !0, e, n ?? null, a, l, s, m, g, S, x)),
        (e.context = qm(null)),
        (n = e.current),
        (a = Tn()),
        (a = Os(a)),
        (l = Aa(a)),
        (l.callback = null),
        Oa(n, l, a),
        (n = a),
        (e.current.lanes = n),
        oi(e, n),
        Ua(e),
        (t[ml] = e.current),
        Kd(t),
        new mf(e)
      );
    }),
    (Pu.version = "19.1.1"),
    Pu
  );
}
var lp;
function mv() {
  if (lp) return dh.exports;
  lp = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (u) {
        console.error(u);
      }
  }
  return r(), (dh.exports = hv()), dh.exports;
}
var pv = mv(),
  vf = { exports: {} };
/*!
 * Bootstrap v5.3.7 (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ var gv = vf.exports,
  ip;
function vv() {
  return (
    ip ||
      ((ip = 1),
      (function (r, u) {
        (function (f, o) {
          r.exports = o();
        })(gv, function () {
          const f = new Map(),
            o = {
              set(d, i, c) {
                f.has(d) || f.set(d, new Map());
                const v = f.get(d);
                if (!v.has(i) && v.size !== 0) {
                  console.error(
                    `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                      Array.from(v.keys())[0]
                    }.`
                  );
                  return;
                }
                v.set(i, c);
              },
              get(d, i) {
                return (f.has(d) && f.get(d).get(i)) || null;
              },
              remove(d, i) {
                if (!f.has(d)) return;
                const c = f.get(d);
                c.delete(i), c.size === 0 && f.delete(d);
              },
            },
            h = 1e6,
            p = 1e3,
            y = "transitionend",
            T = (d) => (
              d &&
                window.CSS &&
                window.CSS.escape &&
                (d = d.replace(/#([^\s"#']+)/g, (i, c) => `#${CSS.escape(c)}`)),
              d
            ),
            E = (d) =>
              d == null
                ? `${d}`
                : Object.prototype.toString
                    .call(d)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase(),
            _ = (d) => {
              do d += Math.floor(Math.random() * h);
              while (document.getElementById(d));
              return d;
            },
            A = (d) => {
              if (!d) return 0;
              let { transitionDuration: i, transitionDelay: c } =
                window.getComputedStyle(d);
              const v = Number.parseFloat(i),
                b = Number.parseFloat(c);
              return !v && !b
                ? 0
                : ((i = i.split(",")[0]),
                  (c = c.split(",")[0]),
                  (Number.parseFloat(i) + Number.parseFloat(c)) * p);
            },
            U = (d) => {
              d.dispatchEvent(new Event(y));
            },
            V = (d) =>
              !d || typeof d != "object"
                ? !1
                : (typeof d.jquery < "u" && (d = d[0]),
                  typeof d.nodeType < "u"),
            P = (d) =>
              V(d)
                ? d.jquery
                  ? d[0]
                  : d
                : typeof d == "string" && d.length > 0
                ? document.querySelector(T(d))
                : null,
            G = (d) => {
              if (!V(d) || d.getClientRects().length === 0) return !1;
              const i =
                  getComputedStyle(d).getPropertyValue("visibility") ===
                  "visible",
                c = d.closest("details:not([open])");
              if (!c) return i;
              if (c !== d) {
                const v = d.closest("summary");
                if ((v && v.parentNode !== c) || v === null) return !1;
              }
              return i;
            },
            Q = (d) =>
              !d ||
              d.nodeType !== Node.ELEMENT_NODE ||
              d.classList.contains("disabled")
                ? !0
                : typeof d.disabled < "u"
                ? d.disabled
                : d.hasAttribute("disabled") &&
                  d.getAttribute("disabled") !== "false",
            k = (d) => {
              if (!document.documentElement.attachShadow) return null;
              if (typeof d.getRootNode == "function") {
                const i = d.getRootNode();
                return i instanceof ShadowRoot ? i : null;
              }
              return d instanceof ShadowRoot
                ? d
                : d.parentNode
                ? k(d.parentNode)
                : null;
            },
            Z = () => {},
            st = (d) => {
              d.offsetHeight;
            },
            at = () =>
              window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
            Rt = [],
            rt = (d) => {
              document.readyState === "loading"
                ? (Rt.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                      for (const i of Rt) i();
                    }),
                  Rt.push(d))
                : d();
            },
            Tt = () => document.documentElement.dir === "rtl",
            At = (d) => {
              rt(() => {
                const i = at();
                if (i) {
                  const c = d.NAME,
                    v = i.fn[c];
                  (i.fn[c] = d.jQueryInterface),
                    (i.fn[c].Constructor = d),
                    (i.fn[c].noConflict = () => (
                      (i.fn[c] = v), d.jQueryInterface
                    ));
                }
              });
            },
            Nt = (d, i = [], c = d) =>
              typeof d == "function" ? d.call(...i) : c,
            Kt = (d, i, c = !0) => {
              if (!c) {
                Nt(d);
                return;
              }
              const b = A(i) + 5;
              let R = !1;
              const w = ({ target: q }) => {
                q === i && ((R = !0), i.removeEventListener(y, w), Nt(d));
              };
              i.addEventListener(y, w),
                setTimeout(() => {
                  R || U(i);
                }, b);
            },
            De = (d, i, c, v) => {
              const b = d.length;
              let R = d.indexOf(i);
              return R === -1
                ? !c && v
                  ? d[b - 1]
                  : d[0]
                : ((R += c ? 1 : -1),
                  v && (R = (R + b) % b),
                  d[Math.max(0, Math.min(R, b - 1))]);
            },
            Ie = /[^.]*(?=\..*)\.|.*/,
            Se = /\..*/,
            Ha = /::\d+$/,
            qn = {};
          let _e = 1;
          const j = { mouseenter: "mouseover", mouseleave: "mouseout" },
            tt = new Set([
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
            ]);
          function ct(d, i) {
            return (i && `${i}::${_e++}`) || d.uidEvent || _e++;
          }
          function qt(d) {
            const i = ct(d);
            return (d.uidEvent = i), (qn[i] = qn[i] || {}), qn[i];
          }
          function O(d, i) {
            return function c(v) {
              return (
                On(v, { delegateTarget: d }),
                c.oneOff && B.off(d, v.type, i),
                i.apply(d, [v])
              );
            };
          }
          function X(d, i, c) {
            return function v(b) {
              const R = d.querySelectorAll(i);
              for (let { target: w } = b; w && w !== this; w = w.parentNode)
                for (const q of R)
                  if (q === w)
                    return (
                      On(b, { delegateTarget: w }),
                      v.oneOff && B.off(d, b.type, i, c),
                      c.apply(w, [b])
                    );
            };
          }
          function et(d, i, c = null) {
            return Object.values(d).find(
              (v) => v.callable === i && v.delegationSelector === c
            );
          }
          function I(d, i, c) {
            const v = typeof i == "string",
              b = v ? c : i || c;
            let R = He(d);
            return tt.has(R) || (R = d), [v, b, R];
          }
          function ot(d, i, c, v, b) {
            if (typeof i != "string" || !d) return;
            let [R, w, q] = I(i, c, v);
            i in j &&
              (w = ((Vt) =>
                function (mt) {
                  if (
                    !mt.relatedTarget ||
                    (mt.relatedTarget !== mt.delegateTarget &&
                      !mt.delegateTarget.contains(mt.relatedTarget))
                  )
                    return Vt.call(this, mt);
                })(w));
            const F = qt(d),
              nt = F[q] || (F[q] = {}),
              W = et(nt, w, R ? c : null);
            if (W) {
              W.oneOff = W.oneOff && b;
              return;
            }
            const yt = ct(w, i.replace(Ie, "")),
              bt = R ? X(d, c, w) : O(d, w);
            (bt.delegationSelector = R ? c : null),
              (bt.callable = w),
              (bt.oneOff = b),
              (bt.uidEvent = yt),
              (nt[yt] = bt),
              d.addEventListener(q, bt, R);
          }
          function wt(d, i, c, v, b) {
            const R = et(i[c], v, b);
            R && (d.removeEventListener(c, R, !!b), delete i[c][R.uidEvent]);
          }
          function gt(d, i, c, v) {
            const b = i[c] || {};
            for (const [R, w] of Object.entries(b))
              R.includes(v) && wt(d, i, c, w.callable, w.delegationSelector);
          }
          function He(d) {
            return (d = d.replace(Se, "")), j[d] || d;
          }
          const B = {
            on(d, i, c, v) {
              ot(d, i, c, v, !1);
            },
            one(d, i, c, v) {
              ot(d, i, c, v, !0);
            },
            off(d, i, c, v) {
              if (typeof i != "string" || !d) return;
              const [b, R, w] = I(i, c, v),
                q = w !== i,
                F = qt(d),
                nt = F[w] || {},
                W = i.startsWith(".");
              if (typeof R < "u") {
                if (!Object.keys(nt).length) return;
                wt(d, F, w, R, b ? c : null);
                return;
              }
              if (W) for (const yt of Object.keys(F)) gt(d, F, yt, i.slice(1));
              for (const [yt, bt] of Object.entries(nt)) {
                const ht = yt.replace(Ha, "");
                (!q || i.includes(ht)) &&
                  wt(d, F, w, bt.callable, bt.delegationSelector);
              }
            },
            trigger(d, i, c) {
              if (typeof i != "string" || !d) return null;
              const v = at(),
                b = He(i),
                R = i !== b;
              let w = null,
                q = !0,
                F = !0,
                nt = !1;
              R &&
                v &&
                ((w = v.Event(i, c)),
                v(d).trigger(w),
                (q = !w.isPropagationStopped()),
                (F = !w.isImmediatePropagationStopped()),
                (nt = w.isDefaultPrevented()));
              const W = On(new Event(i, { bubbles: q, cancelable: !0 }), c);
              return (
                nt && W.preventDefault(),
                F && d.dispatchEvent(W),
                W.defaultPrevented && w && w.preventDefault(),
                W
              );
            },
          };
          function On(d, i = {}) {
            for (const [c, v] of Object.entries(i))
              try {
                d[c] = v;
              } catch {
                Object.defineProperty(d, c, {
                  configurable: !0,
                  get() {
                    return v;
                  },
                });
              }
            return d;
          }
          function ar(d) {
            if (d === "true") return !0;
            if (d === "false") return !1;
            if (d === Number(d).toString()) return Number(d);
            if (d === "" || d === "null") return null;
            if (typeof d != "string") return d;
            try {
              return JSON.parse(decodeURIComponent(d));
            } catch {
              return d;
            }
          }
          function hl(d) {
            return d.replace(/[A-Z]/g, (i) => `-${i.toLowerCase()}`);
          }
          const pn = {
            setDataAttribute(d, i, c) {
              d.setAttribute(`data-bs-${hl(i)}`, c);
            },
            removeDataAttribute(d, i) {
              d.removeAttribute(`data-bs-${hl(i)}`);
            },
            getDataAttributes(d) {
              if (!d) return {};
              const i = {},
                c = Object.keys(d.dataset).filter(
                  (v) => v.startsWith("bs") && !v.startsWith("bsConfig")
                );
              for (const v of c) {
                let b = v.replace(/^bs/, "");
                (b = b.charAt(0).toLowerCase() + b.slice(1)),
                  (i[b] = ar(d.dataset[v]));
              }
              return i;
            },
            getDataAttribute(d, i) {
              return ar(d.getAttribute(`data-bs-${hl(i)}`));
            },
          };
          class Ba {
            static get Default() {
              return {};
            }
            static get DefaultType() {
              return {};
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!'
              );
            }
            _getConfig(i) {
              return (
                (i = this._mergeConfigObj(i)),
                (i = this._configAfterMerge(i)),
                this._typeCheckConfig(i),
                i
              );
            }
            _configAfterMerge(i) {
              return i;
            }
            _mergeConfigObj(i, c) {
              const v = V(c) ? pn.getDataAttribute(c, "config") : {};
              return {
                ...this.constructor.Default,
                ...(typeof v == "object" ? v : {}),
                ...(V(c) ? pn.getDataAttributes(c) : {}),
                ...(typeof i == "object" ? i : {}),
              };
            }
            _typeCheckConfig(i, c = this.constructor.DefaultType) {
              for (const [v, b] of Object.entries(c)) {
                const R = i[v],
                  w = V(R) ? "element" : E(R);
                if (!new RegExp(b).test(w))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${v}" provided type "${w}" but expected type "${b}".`
                  );
              }
            }
          }
          const Ss = "5.3.7";
          class gn extends Ba {
            constructor(i, c) {
              super(),
                (i = P(i)),
                i &&
                  ((this._element = i),
                  (this._config = this._getConfig(c)),
                  o.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
              o.remove(this._element, this.constructor.DATA_KEY),
                B.off(this._element, this.constructor.EVENT_KEY);
              for (const i of Object.getOwnPropertyNames(this)) this[i] = null;
            }
            _queueCallback(i, c, v = !0) {
              Kt(i, c, v);
            }
            _getConfig(i) {
              return (
                (i = this._mergeConfigObj(i, this._element)),
                (i = this._configAfterMerge(i)),
                this._typeCheckConfig(i),
                i
              );
            }
            static getInstance(i) {
              return o.get(P(i), this.DATA_KEY);
            }
            static getOrCreateInstance(i, c = {}) {
              return (
                this.getInstance(i) ||
                new this(i, typeof c == "object" ? c : null)
              );
            }
            static get VERSION() {
              return Ss;
            }
            static get DATA_KEY() {
              return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
              return `.${this.DATA_KEY}`;
            }
            static eventName(i) {
              return `${i}${this.EVENT_KEY}`;
            }
          }
          const Ts = (d) => {
              let i = d.getAttribute("data-bs-target");
              if (!i || i === "#") {
                let c = d.getAttribute("href");
                if (!c || (!c.includes("#") && !c.startsWith("."))) return null;
                c.includes("#") &&
                  !c.startsWith("#") &&
                  (c = `#${c.split("#")[1]}`),
                  (i = c && c !== "#" ? c.trim() : null);
              }
              return i
                ? i
                    .split(",")
                    .map((c) => T(c))
                    .join(",")
                : null;
            },
            lt = {
              find(d, i = document.documentElement) {
                return [].concat(
                  ...Element.prototype.querySelectorAll.call(i, d)
                );
              },
              findOne(d, i = document.documentElement) {
                return Element.prototype.querySelector.call(i, d);
              },
              children(d, i) {
                return [].concat(...d.children).filter((c) => c.matches(i));
              },
              parents(d, i) {
                const c = [];
                let v = d.parentNode.closest(i);
                for (; v; ) c.push(v), (v = v.parentNode.closest(i));
                return c;
              },
              prev(d, i) {
                let c = d.previousElementSibling;
                for (; c; ) {
                  if (c.matches(i)) return [c];
                  c = c.previousElementSibling;
                }
                return [];
              },
              next(d, i) {
                let c = d.nextElementSibling;
                for (; c; ) {
                  if (c.matches(i)) return [c];
                  c = c.nextElementSibling;
                }
                return [];
              },
              focusableChildren(d) {
                const i = [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]',
                ]
                  .map((c) => `${c}:not([tabindex^="-"])`)
                  .join(",");
                return this.find(i, d).filter((c) => !Q(c) && G(c));
              },
              getSelectorFromElement(d) {
                const i = Ts(d);
                return i && lt.findOne(i) ? i : null;
              },
              getElementFromSelector(d) {
                const i = Ts(d);
                return i ? lt.findOne(i) : null;
              },
              getMultipleElementsFromSelector(d) {
                const i = Ts(d);
                return i ? lt.find(i) : [];
              },
            },
            lr = (d, i = "hide") => {
              const c = `click.dismiss${d.EVENT_KEY}`,
                v = d.NAME;
              B.on(document, c, `[data-bs-dismiss="${v}"]`, function (b) {
                if (
                  (["A", "AREA"].includes(this.tagName) && b.preventDefault(),
                  Q(this))
                )
                  return;
                const R =
                  lt.getElementFromSelector(this) || this.closest(`.${v}`);
                d.getOrCreateInstance(R)[i]();
              });
            },
            fo = "alert",
            si = ".bs.alert",
            Hf = `close${si}`,
            ho = `closed${si}`,
            Bf = "fade",
            jf = "show";
          class $n extends gn {
            static get NAME() {
              return fo;
            }
            close() {
              if (B.trigger(this._element, Hf).defaultPrevented) return;
              this._element.classList.remove(jf);
              const c = this._element.classList.contains(Bf);
              this._queueCallback(
                () => this._destroyElement(),
                this._element,
                c
              );
            }
            _destroyElement() {
              this._element.remove(),
                B.trigger(this._element, ho),
                this.dispose();
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = $n.getOrCreateInstance(this);
                if (typeof i == "string") {
                  if (
                    c[i] === void 0 ||
                    i.startsWith("_") ||
                    i === "constructor"
                  )
                    throw new TypeError(`No method named "${i}"`);
                  c[i](this);
                }
              });
            }
          }
          lr($n, "close"), At($n);
          const Xe = "button",
            Qe = ".bs.button",
            qf = ".data-api",
            $f = "active",
            mo = '[data-bs-toggle="button"]',
            ir = `click${Qe}${qf}`;
          class ca extends gn {
            static get NAME() {
              return Xe;
            }
            toggle() {
              this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle($f)
              );
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = ca.getOrCreateInstance(this);
                i === "toggle" && c[i]();
              });
            }
          }
          B.on(document, ir, mo, (d) => {
            d.preventDefault();
            const i = d.target.closest(mo);
            ca.getOrCreateInstance(i).toggle();
          }),
            At(ca);
          const qa = "swipe",
            Yn = ".bs.swipe",
            ui = `touchstart${Yn}`,
            Yf = `touchmove${Yn}`,
            po = `touchend${Yn}`,
            go = `pointerdown${Yn}`,
            As = `pointerup${Yn}`,
            oi = "touch",
            Vf = "pen",
            vo = "pointer-event",
            yo = 40,
            Os = { endCallback: null, leftCallback: null, rightCallback: null },
            Ns = {
              endCallback: "(function|null)",
              leftCallback: "(function|null)",
              rightCallback: "(function|null)",
            };
          class ci extends Ba {
            constructor(i, c) {
              super(),
                (this._element = i),
                !(!i || !ci.isSupported()) &&
                  ((this._config = this._getConfig(c)),
                  (this._deltaX = 0),
                  (this._supportPointerEvents = !!window.PointerEvent),
                  this._initEvents());
            }
            static get Default() {
              return Os;
            }
            static get DefaultType() {
              return Ns;
            }
            static get NAME() {
              return qa;
            }
            dispose() {
              B.off(this._element, Yn);
            }
            _start(i) {
              if (!this._supportPointerEvents) {
                this._deltaX = i.touches[0].clientX;
                return;
              }
              this._eventIsPointerPenTouch(i) && (this._deltaX = i.clientX);
            }
            _end(i) {
              this._eventIsPointerPenTouch(i) &&
                (this._deltaX = i.clientX - this._deltaX),
                this._handleSwipe(),
                Nt(this._config.endCallback);
            }
            _move(i) {
              this._deltaX =
                i.touches && i.touches.length > 1
                  ? 0
                  : i.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
              const i = Math.abs(this._deltaX);
              if (i <= yo) return;
              const c = i / this._deltaX;
              (this._deltaX = 0),
                c &&
                  Nt(
                    c > 0
                      ? this._config.rightCallback
                      : this._config.leftCallback
                  );
            }
            _initEvents() {
              this._supportPointerEvents
                ? (B.on(this._element, go, (i) => this._start(i)),
                  B.on(this._element, As, (i) => this._end(i)),
                  this._element.classList.add(vo))
                : (B.on(this._element, ui, (i) => this._start(i)),
                  B.on(this._element, Yf, (i) => this._move(i)),
                  B.on(this._element, po, (i) => this._end(i)));
            }
            _eventIsPointerPenTouch(i) {
              return (
                this._supportPointerEvents &&
                (i.pointerType === Vf || i.pointerType === oi)
              );
            }
            static isSupported() {
              return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
              );
            }
          }
          const Gf = "carousel",
            te = ".bs.carousel",
            Re = ".data-api",
            ml = "ArrowLeft",
            Ds = "ArrowRight",
            kf = 500,
            fi = "next",
            Ya = "prev",
            Nn = "left",
            pl = "right",
            gl = `slide${te}`,
            fa = `slid${te}`,
            di = `keydown${te}`,
            vl = `mouseenter${te}`,
            ge = `mouseleave${te}`,
            _o = `dragstart${te}`,
            Eo = `load${te}${Re}`,
            Va = `click${te}${Re}`,
            Ga = "carousel",
            rr = "active",
            bo = "slide",
            So = "carousel-item-end",
            Kf = "carousel-item-start",
            sr = "carousel-item-next",
            ur = "carousel-item-prev",
            Dn = ".active",
            or = ".carousel-item",
            To = Dn + or,
            yl = ".carousel-item img",
            Rs = ".carousel-indicators",
            Cs = "[data-bs-slide], [data-bs-slide-to]",
            Xf = '[data-bs-ride="carousel"]',
            Ao = { [ml]: pl, [Ds]: Nn },
            tn = {
              interval: 5e3,
              keyboard: !0,
              pause: "hover",
              ride: !1,
              touch: !0,
              wrap: !0,
            },
            Oo = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              pause: "(string|boolean)",
              ride: "(boolean|string)",
              touch: "boolean",
              wrap: "boolean",
            };
          class _l extends gn {
            constructor(i, c) {
              super(i, c),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = lt.findOne(Rs, this._element)),
                this._addEventListeners(),
                this._config.ride === Ga && this.cycle();
            }
            static get Default() {
              return tn;
            }
            static get DefaultType() {
              return Oo;
            }
            static get NAME() {
              return Gf;
            }
            next() {
              this._slide(fi);
            }
            nextWhenVisible() {
              !document.hidden && G(this._element) && this.next();
            }
            prev() {
              this._slide(Ya);
            }
            pause() {
              this._isSliding && U(this._element), this._clearInterval();
            }
            cycle() {
              this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                  () => this.nextWhenVisible(),
                  this._config.interval
                ));
            }
            _maybeEnableCycle() {
              if (this._config.ride) {
                if (this._isSliding) {
                  B.one(this._element, fa, () => this.cycle());
                  return;
                }
                this.cycle();
              }
            }
            to(i) {
              const c = this._getItems();
              if (i > c.length - 1 || i < 0) return;
              if (this._isSliding) {
                B.one(this._element, fa, () => this.to(i));
                return;
              }
              const v = this._getItemIndex(this._getActive());
              if (v === i) return;
              const b = i > v ? fi : Ya;
              this._slide(b, c[i]);
            }
            dispose() {
              this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(i) {
              return (i.defaultInterval = i.interval), i;
            }
            _addEventListeners() {
              this._config.keyboard &&
                B.on(this._element, di, (i) => this._keydown(i)),
                this._config.pause === "hover" &&
                  (B.on(this._element, vl, () => this.pause()),
                  B.on(this._element, ge, () => this._maybeEnableCycle())),
                this._config.touch &&
                  ci.isSupported() &&
                  this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
              for (const v of lt.find(yl, this._element))
                B.on(v, _o, (b) => b.preventDefault());
              const c = {
                leftCallback: () => this._slide(this._directionToOrder(Nn)),
                rightCallback: () => this._slide(this._directionToOrder(pl)),
                endCallback: () => {
                  this._config.pause === "hover" &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    (this.touchTimeout = setTimeout(
                      () => this._maybeEnableCycle(),
                      kf + this._config.interval
                    )));
                },
              };
              this._swipeHelper = new ci(this._element, c);
            }
            _keydown(i) {
              if (/input|textarea/i.test(i.target.tagName)) return;
              const c = Ao[i.key];
              c && (i.preventDefault(), this._slide(this._directionToOrder(c)));
            }
            _getItemIndex(i) {
              return this._getItems().indexOf(i);
            }
            _setActiveIndicatorElement(i) {
              if (!this._indicatorsElement) return;
              const c = lt.findOne(Dn, this._indicatorsElement);
              c.classList.remove(rr), c.removeAttribute("aria-current");
              const v = lt.findOne(
                `[data-bs-slide-to="${i}"]`,
                this._indicatorsElement
              );
              v &&
                (v.classList.add(rr), v.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
              const i = this._activeElement || this._getActive();
              if (!i) return;
              const c = Number.parseInt(i.getAttribute("data-bs-interval"), 10);
              this._config.interval = c || this._config.defaultInterval;
            }
            _slide(i, c = null) {
              if (this._isSliding) return;
              const v = this._getActive(),
                b = i === fi,
                R = c || De(this._getItems(), v, b, this._config.wrap);
              if (R === v) return;
              const w = this._getItemIndex(R),
                q = (ht) =>
                  B.trigger(this._element, ht, {
                    relatedTarget: R,
                    direction: this._orderToDirection(i),
                    from: this._getItemIndex(v),
                    to: w,
                  });
              if (q(gl).defaultPrevented || !v || !R) return;
              const nt = !!this._interval;
              this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(w),
                (this._activeElement = R);
              const W = b ? Kf : So,
                yt = b ? sr : ur;
              R.classList.add(yt),
                st(R),
                v.classList.add(W),
                R.classList.add(W);
              const bt = () => {
                R.classList.remove(W, yt),
                  R.classList.add(rr),
                  v.classList.remove(rr, yt, W),
                  (this._isSliding = !1),
                  q(fa);
              };
              this._queueCallback(bt, v, this._isAnimated()),
                nt && this.cycle();
            }
            _isAnimated() {
              return this._element.classList.contains(bo);
            }
            _getActive() {
              return lt.findOne(To, this._element);
            }
            _getItems() {
              return lt.find(or, this._element);
            }
            _clearInterval() {
              this._interval &&
                (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(i) {
              return Tt() ? (i === Nn ? Ya : fi) : i === Nn ? fi : Ya;
            }
            _orderToDirection(i) {
              return Tt() ? (i === Ya ? Nn : pl) : i === Ya ? pl : Nn;
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = _l.getOrCreateInstance(this, i);
                if (typeof i == "number") {
                  c.to(i);
                  return;
                }
                if (typeof i == "string") {
                  if (
                    c[i] === void 0 ||
                    i.startsWith("_") ||
                    i === "constructor"
                  )
                    throw new TypeError(`No method named "${i}"`);
                  c[i]();
                }
              });
            }
          }
          B.on(document, Va, Cs, function (d) {
            const i = lt.getElementFromSelector(this);
            if (!i || !i.classList.contains(Ga)) return;
            d.preventDefault();
            const c = _l.getOrCreateInstance(i),
              v = this.getAttribute("data-bs-slide-to");
            if (v) {
              c.to(v), c._maybeEnableCycle();
              return;
            }
            if (pn.getDataAttribute(this, "slide") === "next") {
              c.next(), c._maybeEnableCycle();
              return;
            }
            c.prev(), c._maybeEnableCycle();
          }),
            B.on(window, Eo, () => {
              const d = lt.find(Xf);
              for (const i of d) _l.getOrCreateInstance(i);
            }),
            At(_l);
          const cr = "collapse",
            da = ".bs.collapse",
            Zf = ".data-api",
            en = `show${da}`,
            xs = `shown${da}`,
            No = `hide${da}`,
            ws = `hidden${da}`,
            El = `click${da}${Zf}`,
            fr = "show",
            ka = "collapse",
            Vn = "collapsing",
            Jf = "collapsed",
            Do = `:scope .${ka} .${ka}`,
            Ro = "collapse-horizontal",
            Ms = "width",
            Ff = "height",
            Wf = ".collapse.show, .collapse.collapsing",
            bl = '[data-bs-toggle="collapse"]',
            Ls = { parent: null, toggle: !0 },
            Us = { parent: "(null|element)", toggle: "boolean" };
          class vn extends gn {
            constructor(i, c) {
              super(i, c),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
              const v = lt.find(bl);
              for (const b of v) {
                const R = lt.getSelectorFromElement(b),
                  w = lt.find(R).filter((q) => q === this._element);
                R !== null && w.length && this._triggerArray.push(b);
              }
              this._initializeChildren(),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                  ),
                this._config.toggle && this.toggle();
            }
            static get Default() {
              return Ls;
            }
            static get DefaultType() {
              return Us;
            }
            static get NAME() {
              return cr;
            }
            toggle() {
              this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (this._isTransitioning || this._isShown()) return;
              let i = [];
              if (
                (this._config.parent &&
                  (i = this._getFirstLevelChildren(Wf)
                    .filter((q) => q !== this._element)
                    .map((q) => vn.getOrCreateInstance(q, { toggle: !1 }))),
                (i.length && i[0]._isTransitioning) ||
                  B.trigger(this._element, en).defaultPrevented)
              )
                return;
              for (const q of i) q.hide();
              const v = this._getDimension();
              this._element.classList.remove(ka),
                this._element.classList.add(Vn),
                (this._element.style[v] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
              const b = () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(Vn),
                    this._element.classList.add(ka, fr),
                    (this._element.style[v] = ""),
                    B.trigger(this._element, xs);
                },
                w = `scroll${v[0].toUpperCase() + v.slice(1)}`;
              this._queueCallback(b, this._element, !0),
                (this._element.style[v] = `${this._element[w]}px`);
            }
            hide() {
              if (
                this._isTransitioning ||
                !this._isShown() ||
                B.trigger(this._element, No).defaultPrevented
              )
                return;
              const c = this._getDimension();
              (this._element.style[c] = `${
                this._element.getBoundingClientRect()[c]
              }px`),
                st(this._element),
                this._element.classList.add(Vn),
                this._element.classList.remove(ka, fr);
              for (const b of this._triggerArray) {
                const R = lt.getElementFromSelector(b);
                R &&
                  !this._isShown(R) &&
                  this._addAriaAndCollapsedClass([b], !1);
              }
              this._isTransitioning = !0;
              const v = () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(Vn),
                  this._element.classList.add(ka),
                  B.trigger(this._element, ws);
              };
              (this._element.style[c] = ""),
                this._queueCallback(v, this._element, !0);
            }
            _isShown(i = this._element) {
              return i.classList.contains(fr);
            }
            _configAfterMerge(i) {
              return (i.toggle = !!i.toggle), (i.parent = P(i.parent)), i;
            }
            _getDimension() {
              return this._element.classList.contains(Ro) ? Ms : Ff;
            }
            _initializeChildren() {
              if (!this._config.parent) return;
              const i = this._getFirstLevelChildren(bl);
              for (const c of i) {
                const v = lt.getElementFromSelector(c);
                v && this._addAriaAndCollapsedClass([c], this._isShown(v));
              }
            }
            _getFirstLevelChildren(i) {
              const c = lt.find(Do, this._config.parent);
              return lt
                .find(i, this._config.parent)
                .filter((v) => !c.includes(v));
            }
            _addAriaAndCollapsedClass(i, c) {
              if (i.length)
                for (const v of i)
                  v.classList.toggle(Jf, !c),
                    v.setAttribute("aria-expanded", c);
            }
            static jQueryInterface(i) {
              const c = {};
              return (
                typeof i == "string" && /show|hide/.test(i) && (c.toggle = !1),
                this.each(function () {
                  const v = vn.getOrCreateInstance(this, c);
                  if (typeof i == "string") {
                    if (typeof v[i] > "u")
                      throw new TypeError(`No method named "${i}"`);
                    v[i]();
                  }
                })
              );
            }
          }
          B.on(document, El, bl, function (d) {
            (d.target.tagName === "A" ||
              (d.delegateTarget && d.delegateTarget.tagName === "A")) &&
              d.preventDefault();
            for (const i of lt.getMultipleElementsFromSelector(this))
              vn.getOrCreateInstance(i, { toggle: !1 }).toggle();
          }),
            At(vn);
          var re = "top",
            Be = "bottom",
            Ce = "right",
            Te = "left",
            ha = "auto",
            je = [re, Be, Ce, Te],
            Gn = "start",
            Rn = "end",
            kn = "clippingParents",
            hi = "viewport",
            Kn = "popper",
            zs = "reference",
            Sl = je.reduce(function (d, i) {
              return d.concat([i + "-" + Gn, i + "-" + Rn]);
            }, []),
            Tl = [].concat(je, [ha]).reduce(function (d, i) {
              return d.concat([i, i + "-" + Gn, i + "-" + Rn]);
            }, []),
            Hs = "beforeRead",
            xe = "read",
            ma = "afterRead",
            mi = "beforeMain",
            Al = "main",
            Co = "afterMain",
            dr = "beforeWrite",
            hr = "write",
            Ol = "afterWrite",
            pi = [Hs, xe, ma, mi, Al, Co, dr, hr, Ol];
          function yn(d) {
            return d ? (d.nodeName || "").toLowerCase() : null;
          }
          function Ze(d) {
            if (d == null) return window;
            if (d.toString() !== "[object Window]") {
              var i = d.ownerDocument;
              return (i && i.defaultView) || window;
            }
            return d;
          }
          function Ka(d) {
            var i = Ze(d).Element;
            return d instanceof i || d instanceof Element;
          }
          function nn(d) {
            var i = Ze(d).HTMLElement;
            return d instanceof i || d instanceof HTMLElement;
          }
          function gi(d) {
            if (typeof ShadowRoot > "u") return !1;
            var i = Ze(d).ShadowRoot;
            return d instanceof i || d instanceof ShadowRoot;
          }
          function Pf(d) {
            var i = d.state;
            Object.keys(i.elements).forEach(function (c) {
              var v = i.styles[c] || {},
                b = i.attributes[c] || {},
                R = i.elements[c];
              !nn(R) ||
                !yn(R) ||
                (Object.assign(R.style, v),
                Object.keys(b).forEach(function (w) {
                  var q = b[w];
                  q === !1
                    ? R.removeAttribute(w)
                    : R.setAttribute(w, q === !0 ? "" : q);
                }));
            });
          }
          function If(d) {
            var i = d.state,
              c = {
                popper: {
                  position: i.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            return (
              Object.assign(i.elements.popper.style, c.popper),
              (i.styles = c),
              i.elements.arrow &&
                Object.assign(i.elements.arrow.style, c.arrow),
              function () {
                Object.keys(i.elements).forEach(function (v) {
                  var b = i.elements[v],
                    R = i.attributes[v] || {},
                    w = Object.keys(
                      i.styles.hasOwnProperty(v) ? i.styles[v] : c[v]
                    ),
                    q = w.reduce(function (F, nt) {
                      return (F[nt] = ""), F;
                    }, {});
                  !nn(b) ||
                    !yn(b) ||
                    (Object.assign(b.style, q),
                    Object.keys(R).forEach(function (F) {
                      b.removeAttribute(F);
                    }));
                });
              }
            );
          }
          const Bs = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: Pf,
            effect: If,
            requires: ["computeStyles"],
          };
          function Cn(d) {
            return d.split("-")[0];
          }
          var Xa = Math.max,
            vi = Math.min,
            Nl = Math.round;
          function js() {
            var d = navigator.userAgentData;
            return d != null && d.brands && Array.isArray(d.brands)
              ? d.brands
                  .map(function (i) {
                    return i.brand + "/" + i.version;
                  })
                  .join(" ")
              : navigator.userAgent;
          }
          function xo() {
            return !/^((?!chrome|android).)*safari/i.test(js());
          }
          function Dl(d, i, c) {
            i === void 0 && (i = !1), c === void 0 && (c = !1);
            var v = d.getBoundingClientRect(),
              b = 1,
              R = 1;
            i &&
              nn(d) &&
              ((b = (d.offsetWidth > 0 && Nl(v.width) / d.offsetWidth) || 1),
              (R = (d.offsetHeight > 0 && Nl(v.height) / d.offsetHeight) || 1));
            var w = Ka(d) ? Ze(d) : window,
              q = w.visualViewport,
              F = !xo() && c,
              nt = (v.left + (F && q ? q.offsetLeft : 0)) / b,
              W = (v.top + (F && q ? q.offsetTop : 0)) / R,
              yt = v.width / b,
              bt = v.height / R;
            return {
              width: yt,
              height: bt,
              top: W,
              right: nt + yt,
              bottom: W + bt,
              left: nt,
              x: nt,
              y: W,
            };
          }
          function yi(d) {
            var i = Dl(d),
              c = d.offsetWidth,
              v = d.offsetHeight;
            return (
              Math.abs(i.width - c) <= 1 && (c = i.width),
              Math.abs(i.height - v) <= 1 && (v = i.height),
              { x: d.offsetLeft, y: d.offsetTop, width: c, height: v }
            );
          }
          function wo(d, i) {
            var c = i.getRootNode && i.getRootNode();
            if (d.contains(i)) return !0;
            if (c && gi(c)) {
              var v = i;
              do {
                if (v && d.isSameNode(v)) return !0;
                v = v.parentNode || v.host;
              } while (v);
            }
            return !1;
          }
          function Xn(d) {
            return Ze(d).getComputedStyle(d);
          }
          function td(d) {
            return ["table", "td", "th"].indexOf(yn(d)) >= 0;
          }
          function Qn(d) {
            return (
              (Ka(d) ? d.ownerDocument : d.document) || window.document
            ).documentElement;
          }
          function mr(d) {
            return yn(d) === "html"
              ? d
              : d.assignedSlot ||
                  d.parentNode ||
                  (gi(d) ? d.host : null) ||
                  Qn(d);
          }
          function Mo(d) {
            return !nn(d) || Xn(d).position === "fixed" ? null : d.offsetParent;
          }
          function ed(d) {
            var i = /firefox/i.test(js()),
              c = /Trident/i.test(js());
            if (c && nn(d)) {
              var v = Xn(d);
              if (v.position === "fixed") return null;
            }
            var b = mr(d);
            for (
              gi(b) && (b = b.host);
              nn(b) && ["html", "body"].indexOf(yn(b)) < 0;

            ) {
              var R = Xn(b);
              if (
                R.transform !== "none" ||
                R.perspective !== "none" ||
                R.contain === "paint" ||
                ["transform", "perspective"].indexOf(R.willChange) !== -1 ||
                (i && R.willChange === "filter") ||
                (i && R.filter && R.filter !== "none")
              )
                return b;
              b = b.parentNode;
            }
            return null;
          }
          function _i(d) {
            for (
              var i = Ze(d), c = Mo(d);
              c && td(c) && Xn(c).position === "static";

            )
              c = Mo(c);
            return c &&
              (yn(c) === "html" ||
                (yn(c) === "body" && Xn(c).position === "static"))
              ? i
              : c || ed(d) || i;
          }
          function qs(d) {
            return ["top", "bottom"].indexOf(d) >= 0 ? "x" : "y";
          }
          function Ei(d, i, c) {
            return Xa(d, vi(i, c));
          }
          function nd(d, i, c) {
            var v = Ei(d, i, c);
            return v > c ? c : v;
          }
          function Lo() {
            return { top: 0, right: 0, bottom: 0, left: 0 };
          }
          function Uo(d) {
            return Object.assign({}, Lo(), d);
          }
          function pr(d, i) {
            return i.reduce(function (c, v) {
              return (c[v] = d), c;
            }, {});
          }
          var bi = function (i, c) {
            return (
              (i =
                typeof i == "function"
                  ? i(Object.assign({}, c.rects, { placement: c.placement }))
                  : i),
              Uo(typeof i != "number" ? i : pr(i, je))
            );
          };
          function ad(d) {
            var i,
              c = d.state,
              v = d.name,
              b = d.options,
              R = c.elements.arrow,
              w = c.modifiersData.popperOffsets,
              q = Cn(c.placement),
              F = qs(q),
              nt = [Te, Ce].indexOf(q) >= 0,
              W = nt ? "height" : "width";
            if (!(!R || !w)) {
              var yt = bi(b.padding, c),
                bt = yi(R),
                ht = F === "y" ? re : Te,
                Vt = F === "y" ? Be : Ce,
                mt =
                  c.rects.reference[W] +
                  c.rects.reference[F] -
                  w[F] -
                  c.rects.popper[W],
                Mt = w[F] - c.rects.reference[F],
                Zt = _i(R),
                ne = Zt
                  ? F === "y"
                    ? Zt.clientHeight || 0
                    : Zt.clientWidth || 0
                  : 0,
                jt = mt / 2 - Mt / 2,
                Ot = yt[ht],
                Ht = ne - bt[W] - yt[Vt],
                Lt = ne / 2 - bt[W] / 2 + jt,
                vt = Ei(Ot, Lt, Ht),
                Ee = F;
              c.modifiersData[v] =
                ((i = {}), (i[Ee] = vt), (i.centerOffset = vt - Lt), i);
            }
          }
          function zo(d) {
            var i = d.state,
              c = d.options,
              v = c.element,
              b = v === void 0 ? "[data-popper-arrow]" : v;
            b != null &&
              ((typeof b == "string" &&
                ((b = i.elements.popper.querySelector(b)), !b)) ||
                (wo(i.elements.popper, b) && (i.elements.arrow = b)));
          }
          const $s = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: ad,
            effect: zo,
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
          };
          function Qa(d) {
            return d.split("-")[1];
          }
          var Ho = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
          function Bo(d, i) {
            var c = d.x,
              v = d.y,
              b = i.devicePixelRatio || 1;
            return { x: Nl(c * b) / b || 0, y: Nl(v * b) / b || 0 };
          }
          function Za(d) {
            var i,
              c = d.popper,
              v = d.popperRect,
              b = d.placement,
              R = d.variation,
              w = d.offsets,
              q = d.position,
              F = d.gpuAcceleration,
              nt = d.adaptive,
              W = d.roundOffsets,
              yt = d.isFixed,
              bt = w.x,
              ht = bt === void 0 ? 0 : bt,
              Vt = w.y,
              mt = Vt === void 0 ? 0 : Vt,
              Mt =
                typeof W == "function" ? W({ x: ht, y: mt }) : { x: ht, y: mt };
            (ht = Mt.x), (mt = Mt.y);
            var Zt = w.hasOwnProperty("x"),
              ne = w.hasOwnProperty("y"),
              jt = Te,
              Ot = re,
              Ht = window;
            if (nt) {
              var Lt = _i(c),
                vt = "clientHeight",
                Ee = "clientWidth";
              if (
                (Lt === Ze(c) &&
                  ((Lt = Qn(c)),
                  Xn(Lt).position !== "static" &&
                    q === "absolute" &&
                    ((vt = "scrollHeight"), (Ee = "scrollWidth"))),
                (Lt = Lt),
                b === re || ((b === Te || b === Ce) && R === Rn))
              ) {
                Ot = Be;
                var ve =
                  yt && Lt === Ht && Ht.visualViewport
                    ? Ht.visualViewport.height
                    : Lt[vt];
                (mt -= ve - v.height), (mt *= F ? 1 : -1);
              }
              if (b === Te || ((b === re || b === Be) && R === Rn)) {
                jt = Ce;
                var fe =
                  yt && Lt === Ht && Ht.visualViewport
                    ? Ht.visualViewport.width
                    : Lt[Ee];
                (ht -= fe - v.width), (ht *= F ? 1 : -1);
              }
            }
            var de = Object.assign({ position: q }, nt && Ho),
              ye = W === !0 ? Bo({ x: ht, y: mt }, Ze(c)) : { x: ht, y: mt };
            if (((ht = ye.x), (mt = ye.y), F)) {
              var Oe;
              return Object.assign(
                {},
                de,
                ((Oe = {}),
                (Oe[Ot] = ne ? "0" : ""),
                (Oe[jt] = Zt ? "0" : ""),
                (Oe.transform =
                  (Ht.devicePixelRatio || 1) <= 1
                    ? "translate(" + ht + "px, " + mt + "px)"
                    : "translate3d(" + ht + "px, " + mt + "px, 0)"),
                Oe)
              );
            }
            return Object.assign(
              {},
              de,
              ((i = {}),
              (i[Ot] = ne ? mt + "px" : ""),
              (i[jt] = Zt ? ht + "px" : ""),
              (i.transform = ""),
              i)
            );
          }
          function ld(d) {
            var i = d.state,
              c = d.options,
              v = c.gpuAcceleration,
              b = v === void 0 ? !0 : v,
              R = c.adaptive,
              w = R === void 0 ? !0 : R,
              q = c.roundOffsets,
              F = q === void 0 ? !0 : q,
              nt = {
                placement: Cn(i.placement),
                variation: Qa(i.placement),
                popper: i.elements.popper,
                popperRect: i.rects.popper,
                gpuAcceleration: b,
                isFixed: i.options.strategy === "fixed",
              };
            i.modifiersData.popperOffsets != null &&
              (i.styles.popper = Object.assign(
                {},
                i.styles.popper,
                Za(
                  Object.assign({}, nt, {
                    offsets: i.modifiersData.popperOffsets,
                    position: i.options.strategy,
                    adaptive: w,
                    roundOffsets: F,
                  })
                )
              )),
              i.modifiersData.arrow != null &&
                (i.styles.arrow = Object.assign(
                  {},
                  i.styles.arrow,
                  Za(
                    Object.assign({}, nt, {
                      offsets: i.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: F,
                    })
                  )
                )),
              (i.attributes.popper = Object.assign({}, i.attributes.popper, {
                "data-popper-placement": i.placement,
              }));
          }
          const Ys = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: ld,
            data: {},
          };
          var gr = { passive: !0 };
          function jo(d) {
            var i = d.state,
              c = d.instance,
              v = d.options,
              b = v.scroll,
              R = b === void 0 ? !0 : b,
              w = v.resize,
              q = w === void 0 ? !0 : w,
              F = Ze(i.elements.popper),
              nt = [].concat(i.scrollParents.reference, i.scrollParents.popper);
            return (
              R &&
                nt.forEach(function (W) {
                  W.addEventListener("scroll", c.update, gr);
                }),
              q && F.addEventListener("resize", c.update, gr),
              function () {
                R &&
                  nt.forEach(function (W) {
                    W.removeEventListener("scroll", c.update, gr);
                  }),
                  q && F.removeEventListener("resize", c.update, gr);
              }
            );
          }
          const vr = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: jo,
            data: {},
          };
          var Si = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          function pa(d) {
            return d.replace(/left|right|bottom|top/g, function (i) {
              return Si[i];
            });
          }
          var id = { start: "end", end: "start" };
          function Ti(d) {
            return d.replace(/start|end/g, function (i) {
              return id[i];
            });
          }
          function yr(d) {
            var i = Ze(d),
              c = i.pageXOffset,
              v = i.pageYOffset;
            return { scrollLeft: c, scrollTop: v };
          }
          function _r(d) {
            return Dl(Qn(d)).left + yr(d).scrollLeft;
          }
          function Vs(d, i) {
            var c = Ze(d),
              v = Qn(d),
              b = c.visualViewport,
              R = v.clientWidth,
              w = v.clientHeight,
              q = 0,
              F = 0;
            if (b) {
              (R = b.width), (w = b.height);
              var nt = xo();
              (nt || (!nt && i === "fixed")) &&
                ((q = b.offsetLeft), (F = b.offsetTop));
            }
            return { width: R, height: w, x: q + _r(d), y: F };
          }
          function Gs(d) {
            var i,
              c = Qn(d),
              v = yr(d),
              b = (i = d.ownerDocument) == null ? void 0 : i.body,
              R = Xa(
                c.scrollWidth,
                c.clientWidth,
                b ? b.scrollWidth : 0,
                b ? b.clientWidth : 0
              ),
              w = Xa(
                c.scrollHeight,
                c.clientHeight,
                b ? b.scrollHeight : 0,
                b ? b.clientHeight : 0
              ),
              q = -v.scrollLeft + _r(d),
              F = -v.scrollTop;
            return (
              Xn(b || c).direction === "rtl" &&
                (q += Xa(c.clientWidth, b ? b.clientWidth : 0) - R),
              { width: R, height: w, x: q, y: F }
            );
          }
          function Er(d) {
            var i = Xn(d),
              c = i.overflow,
              v = i.overflowX,
              b = i.overflowY;
            return /auto|scroll|overlay|hidden/.test(c + b + v);
          }
          function ks(d) {
            return ["html", "body", "#document"].indexOf(yn(d)) >= 0
              ? d.ownerDocument.body
              : nn(d) && Er(d)
              ? d
              : ks(mr(d));
          }
          function Rl(d, i) {
            var c;
            i === void 0 && (i = []);
            var v = ks(d),
              b = v === ((c = d.ownerDocument) == null ? void 0 : c.body),
              R = Ze(v),
              w = b ? [R].concat(R.visualViewport || [], Er(v) ? v : []) : v,
              q = i.concat(w);
            return b ? q : q.concat(Rl(mr(w)));
          }
          function Ks(d) {
            return Object.assign({}, d, {
              left: d.x,
              top: d.y,
              right: d.x + d.width,
              bottom: d.y + d.height,
            });
          }
          function rd(d, i) {
            var c = Dl(d, !1, i === "fixed");
            return (
              (c.top = c.top + d.clientTop),
              (c.left = c.left + d.clientLeft),
              (c.bottom = c.top + d.clientHeight),
              (c.right = c.left + d.clientWidth),
              (c.width = d.clientWidth),
              (c.height = d.clientHeight),
              (c.x = c.left),
              (c.y = c.top),
              c
            );
          }
          function qo(d, i, c) {
            return i === hi ? Ks(Vs(d, c)) : Ka(i) ? rd(i, c) : Ks(Gs(Qn(d)));
          }
          function sd(d) {
            var i = Rl(mr(d)),
              c = ["absolute", "fixed"].indexOf(Xn(d).position) >= 0,
              v = c && nn(d) ? _i(d) : d;
            return Ka(v)
              ? i.filter(function (b) {
                  return Ka(b) && wo(b, v) && yn(b) !== "body";
                })
              : [];
          }
          function ud(d, i, c, v) {
            var b = i === "clippingParents" ? sd(d) : [].concat(i),
              R = [].concat(b, [c]),
              w = R[0],
              q = R.reduce(function (F, nt) {
                var W = qo(d, nt, v);
                return (
                  (F.top = Xa(W.top, F.top)),
                  (F.right = vi(W.right, F.right)),
                  (F.bottom = vi(W.bottom, F.bottom)),
                  (F.left = Xa(W.left, F.left)),
                  F
                );
              }, qo(d, w, v));
            return (
              (q.width = q.right - q.left),
              (q.height = q.bottom - q.top),
              (q.x = q.left),
              (q.y = q.top),
              q
            );
          }
          function qe(d) {
            var i = d.reference,
              c = d.element,
              v = d.placement,
              b = v ? Cn(v) : null,
              R = v ? Qa(v) : null,
              w = i.x + i.width / 2 - c.width / 2,
              q = i.y + i.height / 2 - c.height / 2,
              F;
            switch (b) {
              case re:
                F = { x: w, y: i.y - c.height };
                break;
              case Be:
                F = { x: w, y: i.y + i.height };
                break;
              case Ce:
                F = { x: i.x + i.width, y: q };
                break;
              case Te:
                F = { x: i.x - c.width, y: q };
                break;
              default:
                F = { x: i.x, y: i.y };
            }
            var nt = b ? qs(b) : null;
            if (nt != null) {
              var W = nt === "y" ? "height" : "width";
              switch (R) {
                case Gn:
                  F[nt] = F[nt] - (i[W] / 2 - c[W] / 2);
                  break;
                case Rn:
                  F[nt] = F[nt] + (i[W] / 2 - c[W] / 2);
                  break;
              }
            }
            return F;
          }
          function xn(d, i) {
            i === void 0 && (i = {});
            var c = i,
              v = c.placement,
              b = v === void 0 ? d.placement : v,
              R = c.strategy,
              w = R === void 0 ? d.strategy : R,
              q = c.boundary,
              F = q === void 0 ? kn : q,
              nt = c.rootBoundary,
              W = nt === void 0 ? hi : nt,
              yt = c.elementContext,
              bt = yt === void 0 ? Kn : yt,
              ht = c.altBoundary,
              Vt = ht === void 0 ? !1 : ht,
              mt = c.padding,
              Mt = mt === void 0 ? 0 : mt,
              Zt = Uo(typeof Mt != "number" ? Mt : pr(Mt, je)),
              ne = bt === Kn ? zs : Kn,
              jt = d.rects.popper,
              Ot = d.elements[Vt ? ne : bt],
              Ht = ud(
                Ka(Ot) ? Ot : Ot.contextElement || Qn(d.elements.popper),
                F,
                W,
                w
              ),
              Lt = Dl(d.elements.reference),
              vt = qe({ reference: Lt, element: jt, placement: b }),
              Ee = Ks(Object.assign({}, jt, vt)),
              ve = bt === Kn ? Ee : Lt,
              fe = {
                top: Ht.top - ve.top + Zt.top,
                bottom: ve.bottom - Ht.bottom + Zt.bottom,
                left: Ht.left - ve.left + Zt.left,
                right: ve.right - Ht.right + Zt.right,
              },
              de = d.modifiersData.offset;
            if (bt === Kn && de) {
              var ye = de[b];
              Object.keys(fe).forEach(function (Oe) {
                var Ca = [Ce, Be].indexOf(Oe) >= 0 ? 1 : -1,
                  bn = [re, Be].indexOf(Oe) >= 0 ? "y" : "x";
                fe[Oe] += ye[bn] * Ca;
              });
            }
            return fe;
          }
          function $o(d, i) {
            i === void 0 && (i = {});
            var c = i,
              v = c.placement,
              b = c.boundary,
              R = c.rootBoundary,
              w = c.padding,
              q = c.flipVariations,
              F = c.allowedAutoPlacements,
              nt = F === void 0 ? Tl : F,
              W = Qa(v),
              yt = W
                ? q
                  ? Sl
                  : Sl.filter(function (Vt) {
                      return Qa(Vt) === W;
                    })
                : je,
              bt = yt.filter(function (Vt) {
                return nt.indexOf(Vt) >= 0;
              });
            bt.length === 0 && (bt = yt);
            var ht = bt.reduce(function (Vt, mt) {
              return (
                (Vt[mt] = xn(d, {
                  placement: mt,
                  boundary: b,
                  rootBoundary: R,
                  padding: w,
                })[Cn(mt)]),
                Vt
              );
            }, {});
            return Object.keys(ht).sort(function (Vt, mt) {
              return ht[Vt] - ht[mt];
            });
          }
          function Yo(d) {
            if (Cn(d) === ha) return [];
            var i = pa(d);
            return [Ti(d), i, Ti(i)];
          }
          function Vo(d) {
            var i = d.state,
              c = d.options,
              v = d.name;
            if (!i.modifiersData[v]._skip) {
              for (
                var b = c.mainAxis,
                  R = b === void 0 ? !0 : b,
                  w = c.altAxis,
                  q = w === void 0 ? !0 : w,
                  F = c.fallbackPlacements,
                  nt = c.padding,
                  W = c.boundary,
                  yt = c.rootBoundary,
                  bt = c.altBoundary,
                  ht = c.flipVariations,
                  Vt = ht === void 0 ? !0 : ht,
                  mt = c.allowedAutoPlacements,
                  Mt = i.options.placement,
                  Zt = Cn(Mt),
                  ne = Zt === Mt,
                  jt = F || (ne || !Vt ? [pa(Mt)] : Yo(Mt)),
                  Ot = [Mt].concat(jt).reduce(function (Ve, Yt) {
                    return Ve.concat(
                      Cn(Yt) === ha
                        ? $o(i, {
                            placement: Yt,
                            boundary: W,
                            rootBoundary: yt,
                            padding: nt,
                            flipVariations: Vt,
                            allowedAutoPlacements: mt,
                          })
                        : Yt
                    );
                  }, []),
                  Ht = i.rects.reference,
                  Lt = i.rects.popper,
                  vt = new Map(),
                  Ee = !0,
                  ve = Ot[0],
                  fe = 0;
                fe < Ot.length;
                fe++
              ) {
                var de = Ot[fe],
                  ye = Cn(de),
                  Oe = Qa(de) === Gn,
                  Ca = [re, Be].indexOf(ye) >= 0,
                  bn = Ca ? "width" : "height",
                  ae = xn(i, {
                    placement: de,
                    boundary: W,
                    rootBoundary: yt,
                    altBoundary: bt,
                    padding: nt,
                  }),
                  fn = Ca ? (Oe ? Ce : Te) : Oe ? Be : re;
                Ht[bn] > Lt[bn] && (fn = pa(fn));
                var Xl = pa(fn),
                  xa = [];
                if (
                  (R && xa.push(ae[ye] <= 0),
                  q && xa.push(ae[fn] <= 0, ae[Xl] <= 0),
                  xa.every(function (Ve) {
                    return Ve;
                  }))
                ) {
                  (ve = de), (Ee = !1);
                  break;
                }
                vt.set(de, xa);
              }
              if (Ee)
                for (
                  var Ql = Vt ? 3 : 1,
                    Zi = function (Yt) {
                      var ul = Ot.find(function (Fi) {
                        var Ft = vt.get(Fi);
                        if (Ft)
                          return Ft.slice(0, Yt).every(function (xu) {
                            return xu;
                          });
                      });
                      if (ul) return (ve = ul), "break";
                    },
                    wa = Ql;
                  wa > 0;
                  wa--
                ) {
                  var Ji = Zi(wa);
                  if (Ji === "break") break;
                }
              i.placement !== ve &&
                ((i.modifiersData[v]._skip = !0),
                (i.placement = ve),
                (i.reset = !0));
            }
          }
          const Xs = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: Vo,
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          };
          function br(d, i, c) {
            return (
              c === void 0 && (c = { x: 0, y: 0 }),
              {
                top: d.top - i.height - c.y,
                right: d.right - i.width + c.x,
                bottom: d.bottom - i.height + c.y,
                left: d.left - i.width - c.x,
              }
            );
          }
          function Go(d) {
            return [re, Ce, Be, Te].some(function (i) {
              return d[i] >= 0;
            });
          }
          function Cl(d) {
            var i = d.state,
              c = d.name,
              v = i.rects.reference,
              b = i.rects.popper,
              R = i.modifiersData.preventOverflow,
              w = xn(i, { elementContext: "reference" }),
              q = xn(i, { altBoundary: !0 }),
              F = br(w, v),
              nt = br(q, b, R),
              W = Go(F),
              yt = Go(nt);
            (i.modifiersData[c] = {
              referenceClippingOffsets: F,
              popperEscapeOffsets: nt,
              isReferenceHidden: W,
              hasPopperEscaped: yt,
            }),
              (i.attributes.popper = Object.assign({}, i.attributes.popper, {
                "data-popper-reference-hidden": W,
                "data-popper-escaped": yt,
              }));
          }
          const Sr = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: Cl,
          };
          function Ai(d, i, c) {
            var v = Cn(d),
              b = [Te, re].indexOf(v) >= 0 ? -1 : 1,
              R =
                typeof c == "function"
                  ? c(Object.assign({}, i, { placement: d }))
                  : c,
              w = R[0],
              q = R[1];
            return (
              (w = w || 0),
              (q = (q || 0) * b),
              [Te, Ce].indexOf(v) >= 0 ? { x: q, y: w } : { x: w, y: q }
            );
          }
          function Qs(d) {
            var i = d.state,
              c = d.options,
              v = d.name,
              b = c.offset,
              R = b === void 0 ? [0, 0] : b,
              w = Tl.reduce(function (W, yt) {
                return (W[yt] = Ai(yt, i.rects, R)), W;
              }, {}),
              q = w[i.placement],
              F = q.x,
              nt = q.y;
            i.modifiersData.popperOffsets != null &&
              ((i.modifiersData.popperOffsets.x += F),
              (i.modifiersData.popperOffsets.y += nt)),
              (i.modifiersData[v] = w);
          }
          const Zs = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: Qs,
          };
          function Ja(d) {
            var i = d.state,
              c = d.name;
            i.modifiersData[c] = qe({
              reference: i.rects.reference,
              element: i.rects.popper,
              placement: i.placement,
            });
          }
          const ga = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: Ja,
            data: {},
          };
          function Js(d) {
            return d === "x" ? "y" : "x";
          }
          function ko(d) {
            var i = d.state,
              c = d.options,
              v = d.name,
              b = c.mainAxis,
              R = b === void 0 ? !0 : b,
              w = c.altAxis,
              q = w === void 0 ? !1 : w,
              F = c.boundary,
              nt = c.rootBoundary,
              W = c.altBoundary,
              yt = c.padding,
              bt = c.tether,
              ht = bt === void 0 ? !0 : bt,
              Vt = c.tetherOffset,
              mt = Vt === void 0 ? 0 : Vt,
              Mt = xn(i, {
                boundary: F,
                rootBoundary: nt,
                padding: yt,
                altBoundary: W,
              }),
              Zt = Cn(i.placement),
              ne = Qa(i.placement),
              jt = !ne,
              Ot = qs(Zt),
              Ht = Js(Ot),
              Lt = i.modifiersData.popperOffsets,
              vt = i.rects.reference,
              Ee = i.rects.popper,
              ve =
                typeof mt == "function"
                  ? mt(Object.assign({}, i.rects, { placement: i.placement }))
                  : mt,
              fe =
                typeof ve == "number"
                  ? { mainAxis: ve, altAxis: ve }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, ve),
              de = i.modifiersData.offset
                ? i.modifiersData.offset[i.placement]
                : null,
              ye = { x: 0, y: 0 };
            if (Lt) {
              if (R) {
                var Oe,
                  Ca = Ot === "y" ? re : Te,
                  bn = Ot === "y" ? Be : Ce,
                  ae = Ot === "y" ? "height" : "width",
                  fn = Lt[Ot],
                  Xl = fn + Mt[Ca],
                  xa = fn - Mt[bn],
                  Ql = ht ? -Ee[ae] / 2 : 0,
                  Zi = ne === Gn ? vt[ae] : Ee[ae],
                  wa = ne === Gn ? -Ee[ae] : -vt[ae],
                  Ji = i.elements.arrow,
                  Ve = ht && Ji ? yi(Ji) : { width: 0, height: 0 },
                  Yt = i.modifiersData["arrow#persistent"]
                    ? i.modifiersData["arrow#persistent"].padding
                    : Lo(),
                  ul = Yt[Ca],
                  Fi = Yt[bn],
                  Ft = Ei(0, vt[ae], Ve[ae]),
                  xu = jt
                    ? vt[ae] / 2 - Ql - Ft - ul - fe.mainAxis
                    : Zi - Ft - ul - fe.mainAxis,
                  Vc = jt
                    ? -vt[ae] / 2 + Ql + Ft + Fi + fe.mainAxis
                    : wa + Ft + Fi + fe.mainAxis,
                  es = i.elements.arrow && _i(i.elements.arrow),
                  Wt = es
                    ? Ot === "y"
                      ? es.clientTop || 0
                      : es.clientLeft || 0
                    : 0,
                  Le = (Oe = de?.[Ot]) != null ? Oe : 0,
                  aa = fn + xu - Le - Wt,
                  Gc = fn + Vc - Le,
                  wu = Ei(ht ? vi(Xl, aa) : Xl, fn, ht ? Xa(xa, Gc) : xa);
                (Lt[Ot] = wu), (ye[Ot] = wu - fn);
              }
              if (q) {
                var kc,
                  Mu = Ot === "x" ? re : Te,
                  Pe = Ot === "x" ? Be : Ce,
                  be = Lt[Ht],
                  Wi = Ht === "y" ? "height" : "width",
                  Ge = be + Mt[Mu],
                  Lu = be - Mt[Pe],
                  Hn = [re, Te].indexOf(Zt) !== -1,
                  Ma = (kc = de?.[Ht]) != null ? kc : 0,
                  la = Hn ? Ge : be - vt[Wi] - Ee[Wi] - Ma + fe.altAxis,
                  ns = Hn ? be + vt[Wi] + Ee[Wi] - Ma - fe.altAxis : Lu,
                  as =
                    ht && Hn
                      ? nd(la, be, ns)
                      : Ei(ht ? la : Ge, be, ht ? ns : Lu);
                (Lt[Ht] = as), (ye[Ht] = as - be);
              }
              i.modifiersData[v] = ye;
            }
          }
          const va = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: ko,
            requiresIfExists: ["offset"],
          };
          function Ko(d) {
            return { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop };
          }
          function Xo(d) {
            return d === Ze(d) || !nn(d) ? yr(d) : Ko(d);
          }
          function Qo(d) {
            var i = d.getBoundingClientRect(),
              c = Nl(i.width) / d.offsetWidth || 1,
              v = Nl(i.height) / d.offsetHeight || 1;
            return c !== 1 || v !== 1;
          }
          function od(d, i, c) {
            c === void 0 && (c = !1);
            var v = nn(i),
              b = nn(i) && Qo(i),
              R = Qn(i),
              w = Dl(d, b, c),
              q = { scrollLeft: 0, scrollTop: 0 },
              F = { x: 0, y: 0 };
            return (
              (v || (!v && !c)) &&
                ((yn(i) !== "body" || Er(R)) && (q = Xo(i)),
                nn(i)
                  ? ((F = Dl(i, !0)),
                    (F.x += i.clientLeft),
                    (F.y += i.clientTop))
                  : R && (F.x = _r(R))),
              {
                x: w.left + q.scrollLeft - F.x,
                y: w.top + q.scrollTop - F.y,
                width: w.width,
                height: w.height,
              }
            );
          }
          function cd(d) {
            var i = new Map(),
              c = new Set(),
              v = [];
            d.forEach(function (R) {
              i.set(R.name, R);
            });
            function b(R) {
              c.add(R.name);
              var w = [].concat(R.requires || [], R.requiresIfExists || []);
              w.forEach(function (q) {
                if (!c.has(q)) {
                  var F = i.get(q);
                  F && b(F);
                }
              }),
                v.push(R);
            }
            return (
              d.forEach(function (R) {
                c.has(R.name) || b(R);
              }),
              v
            );
          }
          function fd(d) {
            var i = cd(d);
            return pi.reduce(function (c, v) {
              return c.concat(
                i.filter(function (b) {
                  return b.phase === v;
                })
              );
            }, []);
          }
          function Zo(d) {
            var i;
            return function () {
              return (
                i ||
                  (i = new Promise(function (c) {
                    Promise.resolve().then(function () {
                      (i = void 0), c(d());
                    });
                  })),
                i
              );
            };
          }
          function Jo(d) {
            var i = d.reduce(function (c, v) {
              var b = c[v.name];
              return (
                (c[v.name] = b
                  ? Object.assign({}, b, v, {
                      options: Object.assign({}, b.options, v.options),
                      data: Object.assign({}, b.data, v.data),
                    })
                  : v),
                c
              );
            }, {});
            return Object.keys(i).map(function (c) {
              return i[c];
            });
          }
          var Tr = { placement: "bottom", modifiers: [], strategy: "absolute" };
          function an() {
            for (var d = arguments.length, i = new Array(d), c = 0; c < d; c++)
              i[c] = arguments[c];
            return !i.some(function (v) {
              return !(v && typeof v.getBoundingClientRect == "function");
            });
          }
          function Oi(d) {
            d === void 0 && (d = {});
            var i = d,
              c = i.defaultModifiers,
              v = c === void 0 ? [] : c,
              b = i.defaultOptions,
              R = b === void 0 ? Tr : b;
            return function (q, F, nt) {
              nt === void 0 && (nt = R);
              var W = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, Tr, R),
                  modifiersData: {},
                  elements: { reference: q, popper: F },
                  attributes: {},
                  styles: {},
                },
                yt = [],
                bt = !1,
                ht = {
                  state: W,
                  setOptions: function (Zt) {
                    var ne = typeof Zt == "function" ? Zt(W.options) : Zt;
                    mt(),
                      (W.options = Object.assign({}, R, W.options, ne)),
                      (W.scrollParents = {
                        reference: Ka(q)
                          ? Rl(q)
                          : q.contextElement
                          ? Rl(q.contextElement)
                          : [],
                        popper: Rl(F),
                      });
                    var jt = fd(Jo([].concat(v, W.options.modifiers)));
                    return (
                      (W.orderedModifiers = jt.filter(function (Ot) {
                        return Ot.enabled;
                      })),
                      Vt(),
                      ht.update()
                    );
                  },
                  forceUpdate: function () {
                    if (!bt) {
                      var Zt = W.elements,
                        ne = Zt.reference,
                        jt = Zt.popper;
                      if (an(ne, jt)) {
                        (W.rects = {
                          reference: od(
                            ne,
                            _i(jt),
                            W.options.strategy === "fixed"
                          ),
                          popper: yi(jt),
                        }),
                          (W.reset = !1),
                          (W.placement = W.options.placement),
                          W.orderedModifiers.forEach(function (fe) {
                            return (W.modifiersData[fe.name] = Object.assign(
                              {},
                              fe.data
                            ));
                          });
                        for (var Ot = 0; Ot < W.orderedModifiers.length; Ot++) {
                          if (W.reset === !0) {
                            (W.reset = !1), (Ot = -1);
                            continue;
                          }
                          var Ht = W.orderedModifiers[Ot],
                            Lt = Ht.fn,
                            vt = Ht.options,
                            Ee = vt === void 0 ? {} : vt,
                            ve = Ht.name;
                          typeof Lt == "function" &&
                            (W =
                              Lt({
                                state: W,
                                options: Ee,
                                name: ve,
                                instance: ht,
                              }) || W);
                        }
                      }
                    }
                  },
                  update: Zo(function () {
                    return new Promise(function (Mt) {
                      ht.forceUpdate(), Mt(W);
                    });
                  }),
                  destroy: function () {
                    mt(), (bt = !0);
                  },
                };
              if (!an(q, F)) return ht;
              ht.setOptions(nt).then(function (Mt) {
                !bt && nt.onFirstUpdate && nt.onFirstUpdate(Mt);
              });
              function Vt() {
                W.orderedModifiers.forEach(function (Mt) {
                  var Zt = Mt.name,
                    ne = Mt.options,
                    jt = ne === void 0 ? {} : ne,
                    Ot = Mt.effect;
                  if (typeof Ot == "function") {
                    var Ht = Ot({
                        state: W,
                        name: Zt,
                        instance: ht,
                        options: jt,
                      }),
                      Lt = function () {};
                    yt.push(Ht || Lt);
                  }
                });
              }
              function mt() {
                yt.forEach(function (Mt) {
                  return Mt();
                }),
                  (yt = []);
              }
              return ht;
            };
          }
          var ln = Oi(),
            rn = [vr, ga, Ys, Bs],
            xl = Oi({ defaultModifiers: rn }),
            Fs = [vr, ga, Ys, Bs, Zs, Xs, va, $s, Sr],
            wl = Oi({ defaultModifiers: Fs });
          const Ni = Object.freeze(
              Object.defineProperty(
                {
                  __proto__: null,
                  afterMain: Co,
                  afterRead: ma,
                  afterWrite: Ol,
                  applyStyles: Bs,
                  arrow: $s,
                  auto: ha,
                  basePlacements: je,
                  beforeMain: mi,
                  beforeRead: Hs,
                  beforeWrite: dr,
                  bottom: Be,
                  clippingParents: kn,
                  computeStyles: Ys,
                  createPopper: wl,
                  createPopperBase: ln,
                  createPopperLite: xl,
                  detectOverflow: xn,
                  end: Rn,
                  eventListeners: vr,
                  flip: Xs,
                  hide: Sr,
                  left: Te,
                  main: Al,
                  modifierPhases: pi,
                  offset: Zs,
                  placements: Tl,
                  popper: Kn,
                  popperGenerator: Oi,
                  popperOffsets: ga,
                  preventOverflow: va,
                  read: xe,
                  reference: zs,
                  right: Ce,
                  start: Gn,
                  top: re,
                  variationPlacements: Sl,
                  viewport: hi,
                  write: hr,
                },
                Symbol.toStringTag,
                { value: "Module" }
              )
            ),
            Ar = "dropdown",
            ya = ".bs.dropdown",
            Ml = ".data-api",
            Ll = "Escape",
            Fo = "Tab",
            Je = "ArrowUp",
            Or = "ArrowDown",
            Zn = 2,
            Wo = `hide${ya}`,
            Nr = `hidden${ya}`,
            Fa = `show${ya}`,
            Ws = `shown${ya}`,
            Dr = `click${ya}${Ml}`,
            Wa = `keydown${ya}${Ml}`,
            Ul = `keyup${ya}${Ml}`,
            Jn = "show",
            Rr = "dropup",
            sn = "dropend",
            un = "dropstart",
            Pa = "dropup-center",
            Fn = "dropdown-center",
            we = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            Ia = `${we}.${Jn}`,
            Ri = ".dropdown-menu",
            Ps = ".navbar",
            Is = ".navbar-nav",
            Me = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            ee = Tt() ? "top-end" : "top-start",
            zt = Tt() ? "top-start" : "top-end",
            tl = Tt() ? "bottom-end" : "bottom-start",
            wn = Tt() ? "bottom-start" : "bottom-end",
            tu = Tt() ? "left-start" : "right-start",
            el = Tt() ? "right-start" : "left-start",
            Po = "top",
            Io = "bottom",
            Ci = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle",
            },
            xi = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)",
            };
          class on extends gn {
            constructor(i, c) {
              super(i, c),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                  lt.next(this._element, Ri)[0] ||
                  lt.prev(this._element, Ri)[0] ||
                  lt.findOne(Ri, this._parent)),
                (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
              return Ci;
            }
            static get DefaultType() {
              return xi;
            }
            static get NAME() {
              return Ar;
            }
            toggle() {
              return this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (Q(this._element) || this._isShown()) return;
              const i = { relatedTarget: this._element };
              if (!B.trigger(this._element, Fa, i).defaultPrevented) {
                if (
                  (this._createPopper(),
                  "ontouchstart" in document.documentElement &&
                    !this._parent.closest(Is))
                )
                  for (const v of [].concat(...document.body.children))
                    B.on(v, "mouseover", Z);
                this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.add(Jn),
                  this._element.classList.add(Jn),
                  B.trigger(this._element, Ws, i);
              }
            }
            hide() {
              if (Q(this._element) || !this._isShown()) return;
              const i = { relatedTarget: this._element };
              this._completeHide(i);
            }
            dispose() {
              this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
              (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
            }
            _completeHide(i) {
              if (!B.trigger(this._element, Wo, i).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                  for (const v of [].concat(...document.body.children))
                    B.off(v, "mouseover", Z);
                this._popper && this._popper.destroy(),
                  this._menu.classList.remove(Jn),
                  this._element.classList.remove(Jn),
                  this._element.setAttribute("aria-expanded", "false"),
                  pn.removeDataAttribute(this._menu, "popper"),
                  B.trigger(this._element, Nr, i),
                  this._element.focus();
              }
            }
            _getConfig(i) {
              if (
                ((i = super._getConfig(i)),
                typeof i.reference == "object" &&
                  !V(i.reference) &&
                  typeof i.reference.getBoundingClientRect != "function")
              )
                throw new TypeError(
                  `${Ar.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
              return i;
            }
            _createPopper() {
              if (typeof Ni > "u")
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)"
                );
              let i = this._element;
              this._config.reference === "parent"
                ? (i = this._parent)
                : V(this._config.reference)
                ? (i = P(this._config.reference))
                : typeof this._config.reference == "object" &&
                  (i = this._config.reference);
              const c = this._getPopperConfig();
              this._popper = wl(i, this._menu, c);
            }
            _isShown() {
              return this._menu.classList.contains(Jn);
            }
            _getPlacement() {
              const i = this._parent;
              if (i.classList.contains(sn)) return tu;
              if (i.classList.contains(un)) return el;
              if (i.classList.contains(Pa)) return Po;
              if (i.classList.contains(Fn)) return Io;
              const c =
                getComputedStyle(this._menu)
                  .getPropertyValue("--bs-position")
                  .trim() === "end";
              return i.classList.contains(Rr) ? (c ? zt : ee) : c ? wn : tl;
            }
            _detectNavbar() {
              return this._element.closest(Ps) !== null;
            }
            _getOffset() {
              const { offset: i } = this._config;
              return typeof i == "string"
                ? i.split(",").map((c) => Number.parseInt(c, 10))
                : typeof i == "function"
                ? (c) => i(c, this._element)
                : i;
            }
            _getPopperConfig() {
              const i = {
                placement: this._getPlacement(),
                modifiers: [
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                ],
              };
              return (
                (this._inNavbar || this._config.display === "static") &&
                  (pn.setDataAttribute(this._menu, "popper", "static"),
                  (i.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                { ...i, ...Nt(this._config.popperConfig, [void 0, i]) }
              );
            }
            _selectMenuItem({ key: i, target: c }) {
              const v = lt.find(Me, this._menu).filter((b) => G(b));
              v.length && De(v, c, i === Or, !v.includes(c)).focus();
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = on.getOrCreateInstance(this, i);
                if (typeof i == "string") {
                  if (typeof c[i] > "u")
                    throw new TypeError(`No method named "${i}"`);
                  c[i]();
                }
              });
            }
            static clearMenus(i) {
              if (i.button === Zn || (i.type === "keyup" && i.key !== Fo))
                return;
              const c = lt.find(Ia);
              for (const v of c) {
                const b = on.getInstance(v);
                if (!b || b._config.autoClose === !1) continue;
                const R = i.composedPath(),
                  w = R.includes(b._menu);
                if (
                  R.includes(b._element) ||
                  (b._config.autoClose === "inside" && !w) ||
                  (b._config.autoClose === "outside" && w) ||
                  (b._menu.contains(i.target) &&
                    ((i.type === "keyup" && i.key === Fo) ||
                      /input|select|option|textarea|form/i.test(
                        i.target.tagName
                      )))
                )
                  continue;
                const q = { relatedTarget: b._element };
                i.type === "click" && (q.clickEvent = i), b._completeHide(q);
              }
            }
            static dataApiKeydownHandler(i) {
              const c = /input|textarea/i.test(i.target.tagName),
                v = i.key === Ll,
                b = [Je, Or].includes(i.key);
              if ((!b && !v) || (c && !v)) return;
              i.preventDefault();
              const R = this.matches(we)
                  ? this
                  : lt.prev(this, we)[0] ||
                    lt.next(this, we)[0] ||
                    lt.findOne(we, i.delegateTarget.parentNode),
                w = on.getOrCreateInstance(R);
              if (b) {
                i.stopPropagation(), w.show(), w._selectMenuItem(i);
                return;
              }
              w._isShown() && (i.stopPropagation(), w.hide(), R.focus());
            }
          }
          B.on(document, Wa, we, on.dataApiKeydownHandler),
            B.on(document, Wa, Ri, on.dataApiKeydownHandler),
            B.on(document, Dr, on.clearMenus),
            B.on(document, Ul, on.clearMenus),
            B.on(document, Dr, we, function (d) {
              d.preventDefault(), on.getOrCreateInstance(this).toggle();
            }),
            At(on);
          const zl = "backdrop",
            eu = "fade",
            _a = "show",
            Mn = `mousedown.bs.${zl}`,
            Ea = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            Wn = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            };
          class Cr extends Ba {
            constructor(i) {
              super(),
                (this._config = this._getConfig(i)),
                (this._isAppended = !1),
                (this._element = null);
            }
            static get Default() {
              return Ea;
            }
            static get DefaultType() {
              return Wn;
            }
            static get NAME() {
              return zl;
            }
            show(i) {
              if (!this._config.isVisible) {
                Nt(i);
                return;
              }
              this._append();
              const c = this._getElement();
              this._config.isAnimated && st(c),
                c.classList.add(_a),
                this._emulateAnimation(() => {
                  Nt(i);
                });
            }
            hide(i) {
              if (!this._config.isVisible) {
                Nt(i);
                return;
              }
              this._getElement().classList.remove(_a),
                this._emulateAnimation(() => {
                  this.dispose(), Nt(i);
                });
            }
            dispose() {
              this._isAppended &&
                (B.off(this._element, Mn),
                this._element.remove(),
                (this._isAppended = !1));
            }
            _getElement() {
              if (!this._element) {
                const i = document.createElement("div");
                (i.className = this._config.className),
                  this._config.isAnimated && i.classList.add(eu),
                  (this._element = i);
              }
              return this._element;
            }
            _configAfterMerge(i) {
              return (i.rootElement = P(i.rootElement)), i;
            }
            _append() {
              if (this._isAppended) return;
              const i = this._getElement();
              this._config.rootElement.append(i),
                B.on(i, Mn, () => {
                  Nt(this._config.clickCallback);
                }),
                (this._isAppended = !0);
            }
            _emulateAnimation(i) {
              Kt(i, this._getElement(), this._config.isAnimated);
            }
          }
          const nu = "focustrap",
            nl = ".bs.focustrap",
            al = `focusin${nl}`,
            Ae = `keydown.tab${nl}`,
            wr = "Tab",
            tc = "forward",
            ec = "backward",
            dd = { autofocus: !0, trapElement: null },
            hd = { autofocus: "boolean", trapElement: "element" };
          class se extends Ba {
            constructor(i) {
              super(),
                (this._config = this._getConfig(i)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
            }
            static get Default() {
              return dd;
            }
            static get DefaultType() {
              return hd;
            }
            static get NAME() {
              return nu;
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                B.off(document, nl),
                B.on(document, al, (i) => this._handleFocusin(i)),
                B.on(document, Ae, (i) => this._handleKeydown(i)),
                (this._isActive = !0));
            }
            deactivate() {
              this._isActive && ((this._isActive = !1), B.off(document, nl));
            }
            _handleFocusin(i) {
              const { trapElement: c } = this._config;
              if (
                i.target === document ||
                i.target === c ||
                c.contains(i.target)
              )
                return;
              const v = lt.focusableChildren(c);
              v.length === 0
                ? c.focus()
                : this._lastTabNavDirection === ec
                ? v[v.length - 1].focus()
                : v[0].focus();
            }
            _handleKeydown(i) {
              i.key === wr &&
                (this._lastTabNavDirection = i.shiftKey ? ec : tc);
            }
          }
          const Mr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Hl = ".sticky-top",
            ba = "padding-right",
            Lr = "margin-right";
          class Sa {
            constructor() {
              this._element = document.body;
            }
            getWidth() {
              const i = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - i);
            }
            hide() {
              const i = this.getWidth();
              this._disableOverFlow(),
                this._setElementAttributes(this._element, ba, (c) => c + i),
                this._setElementAttributes(Mr, ba, (c) => c + i),
                this._setElementAttributes(Hl, Lr, (c) => c - i);
            }
            reset() {
              this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, ba),
                this._resetElementAttributes(Mr, ba),
                this._resetElementAttributes(Hl, Lr);
            }
            isOverflowing() {
              return this.getWidth() > 0;
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(i, c, v) {
              const b = this.getWidth(),
                R = (w) => {
                  if (
                    w !== this._element &&
                    window.innerWidth > w.clientWidth + b
                  )
                    return;
                  this._saveInitialAttribute(w, c);
                  const q = window.getComputedStyle(w).getPropertyValue(c);
                  w.style.setProperty(c, `${v(Number.parseFloat(q))}px`);
                };
              this._applyManipulationCallback(i, R);
            }
            _saveInitialAttribute(i, c) {
              const v = i.style.getPropertyValue(c);
              v && pn.setDataAttribute(i, c, v);
            }
            _resetElementAttributes(i, c) {
              const v = (b) => {
                const R = pn.getDataAttribute(b, c);
                if (R === null) {
                  b.style.removeProperty(c);
                  return;
                }
                pn.removeDataAttribute(b, c), b.style.setProperty(c, R);
              };
              this._applyManipulationCallback(i, v);
            }
            _applyManipulationCallback(i, c) {
              if (V(i)) {
                c(i);
                return;
              }
              for (const v of lt.find(i, this._element)) c(v);
            }
          }
          const Bl = "modal",
            Fe = ".bs.modal",
            md = ".data-api",
            nc = "Escape",
            ll = `hide${Fe}`,
            au = `hidePrevented${Fe}`,
            wi = `hidden${Fe}`,
            lu = `show${Fe}`,
            Mi = `shown${Fe}`,
            ac = `resize${Fe}`,
            Ur = `click.dismiss${Fe}`,
            iu = `mousedown.dismiss${Fe}`,
            lc = `keydown.dismiss${Fe}`,
            zr = `click${Fe}${md}`,
            ru = "modal-open",
            Li = "fade",
            su = "show",
            Hr = "modal-static",
            Ta = ".modal.show",
            uu = ".modal-dialog",
            ou = ".modal-body",
            Aa = '[data-bs-toggle="modal"]',
            Oa = { backdrop: !0, focus: !0, keyboard: !0 },
            Ui = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            };
          class Pn extends gn {
            constructor(i, c) {
              super(i, c),
                (this._dialog = lt.findOne(uu, this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new Sa()),
                this._addEventListeners();
            }
            static get Default() {
              return Oa;
            }
            static get DefaultType() {
              return Ui;
            }
            static get NAME() {
              return Bl;
            }
            toggle(i) {
              return this._isShown ? this.hide() : this.show(i);
            }
            show(i) {
              this._isShown ||
                this._isTransitioning ||
                B.trigger(this._element, lu, { relatedTarget: i })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(ru),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(i)));
            }
            hide() {
              !this._isShown ||
                this._isTransitioning ||
                B.trigger(this._element, ll).defaultPrevented ||
                ((this._isShown = !1),
                (this._isTransitioning = !0),
                this._focustrap.deactivate(),
                this._element.classList.remove(su),
                this._queueCallback(
                  () => this._hideModal(),
                  this._element,
                  this._isAnimated()
                ));
            }
            dispose() {
              B.off(window, Fe),
                B.off(this._dialog, Fe),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new Cr({
                isVisible: !!this._config.backdrop,
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new se({ trapElement: this._element });
            }
            _showElement(i) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
              const c = lt.findOne(ou, this._dialog);
              c && (c.scrollTop = 0),
                st(this._element),
                this._element.classList.add(su);
              const v = () => {
                this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  B.trigger(this._element, Mi, { relatedTarget: i });
              };
              this._queueCallback(v, this._dialog, this._isAnimated());
            }
            _addEventListeners() {
              B.on(this._element, lc, (i) => {
                if (i.key === nc) {
                  if (this._config.keyboard) {
                    this.hide();
                    return;
                  }
                  this._triggerBackdropTransition();
                }
              }),
                B.on(window, ac, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog();
                }),
                B.on(this._element, iu, (i) => {
                  B.one(this._element, Ur, (c) => {
                    if (
                      !(
                        this._element !== i.target || this._element !== c.target
                      )
                    ) {
                      if (this._config.backdrop === "static") {
                        this._triggerBackdropTransition();
                        return;
                      }
                      this._config.backdrop && this.hide();
                    }
                  });
                });
            }
            _hideModal() {
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                  document.body.classList.remove(ru),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    B.trigger(this._element, wi);
                });
            }
            _isAnimated() {
              return this._element.classList.contains(Li);
            }
            _triggerBackdropTransition() {
              if (B.trigger(this._element, au).defaultPrevented) return;
              const c =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                v = this._element.style.overflowY;
              v === "hidden" ||
                this._element.classList.contains(Hr) ||
                (c || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(Hr),
                this._queueCallback(() => {
                  this._element.classList.remove(Hr),
                    this._queueCallback(() => {
                      this._element.style.overflowY = v;
                    }, this._dialog);
                }, this._dialog),
                this._element.focus());
            }
            _adjustDialog() {
              const i =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                c = this._scrollBar.getWidth(),
                v = c > 0;
              if (v && !i) {
                const b = Tt() ? "paddingLeft" : "paddingRight";
                this._element.style[b] = `${c}px`;
              }
              if (!v && i) {
                const b = Tt() ? "paddingRight" : "paddingLeft";
                this._element.style[b] = `${c}px`;
              }
            }
            _resetAdjustments() {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }
            static jQueryInterface(i, c) {
              return this.each(function () {
                const v = Pn.getOrCreateInstance(this, i);
                if (typeof i == "string") {
                  if (typeof v[i] > "u")
                    throw new TypeError(`No method named "${i}"`);
                  v[i](c);
                }
              });
            }
          }
          B.on(document, zr, Aa, function (d) {
            const i = lt.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && d.preventDefault(),
              B.one(i, lu, (b) => {
                b.defaultPrevented ||
                  B.one(i, wi, () => {
                    G(this) && this.focus();
                  });
              });
            const c = lt.findOne(Ta);
            c && Pn.getInstance(c).hide(),
              Pn.getOrCreateInstance(i).toggle(this);
          }),
            lr(Pn),
            At(Pn);
          const cu = "offcanvas",
            We = ".bs.offcanvas",
            fu = ".data-api",
            ic = `load${We}${fu}`,
            jl = "Escape",
            zi = "show",
            du = "showing",
            jr = "hiding",
            hu = "offcanvas-backdrop",
            In = ".offcanvas.show",
            Et = `show${We}`,
            $t = `shown${We}`,
            ue = `hide${We}`,
            Hi = `hidePrevented${We}`,
            il = `hidden${We}`,
            rl = `resize${We}`,
            qr = `click${We}${fu}`,
            Bi = `keydown.dismiss${We}`,
            ql = '[data-bs-toggle="offcanvas"]',
            pd = { backdrop: !0, keyboard: !0, scroll: !1 },
            ie = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              scroll: "boolean",
            };
          class _n extends gn {
            constructor(i, c) {
              super(i, c),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
            }
            static get Default() {
              return pd;
            }
            static get DefaultType() {
              return ie;
            }
            static get NAME() {
              return cu;
            }
            toggle(i) {
              return this._isShown ? this.hide() : this.show(i);
            }
            show(i) {
              if (
                this._isShown ||
                B.trigger(this._element, Et, { relatedTarget: i })
                  .defaultPrevented
              )
                return;
              (this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new Sa().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(du);
              const v = () => {
                (!this._config.scroll || this._config.backdrop) &&
                  this._focustrap.activate(),
                  this._element.classList.add(zi),
                  this._element.classList.remove(du),
                  B.trigger(this._element, $t, { relatedTarget: i });
              };
              this._queueCallback(v, this._element, !0);
            }
            hide() {
              if (
                !this._isShown ||
                B.trigger(this._element, ue).defaultPrevented
              )
                return;
              this._focustrap.deactivate(),
                this._element.blur(),
                (this._isShown = !1),
                this._element.classList.add(jr),
                this._backdrop.hide();
              const c = () => {
                this._element.classList.remove(zi, jr),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new Sa().reset(),
                  B.trigger(this._element, il);
              };
              this._queueCallback(c, this._element, !0);
            }
            dispose() {
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            _initializeBackDrop() {
              const i = () => {
                  if (this._config.backdrop === "static") {
                    B.trigger(this._element, Hi);
                    return;
                  }
                  this.hide();
                },
                c = !!this._config.backdrop;
              return new Cr({
                className: hu,
                isVisible: c,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: c ? i : null,
              });
            }
            _initializeFocusTrap() {
              return new se({ trapElement: this._element });
            }
            _addEventListeners() {
              B.on(this._element, Bi, (i) => {
                if (i.key === jl) {
                  if (this._config.keyboard) {
                    this.hide();
                    return;
                  }
                  B.trigger(this._element, Hi);
                }
              });
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = _n.getOrCreateInstance(this, i);
                if (typeof i == "string") {
                  if (
                    c[i] === void 0 ||
                    i.startsWith("_") ||
                    i === "constructor"
                  )
                    throw new TypeError(`No method named "${i}"`);
                  c[i](this);
                }
              });
            }
          }
          B.on(document, qr, ql, function (d) {
            const i = lt.getElementFromSelector(this);
            if (
              (["A", "AREA"].includes(this.tagName) && d.preventDefault(),
              Q(this))
            )
              return;
            B.one(i, il, () => {
              G(this) && this.focus();
            });
            const c = lt.findOne(In);
            c && c !== i && _n.getInstance(c).hide(),
              _n.getOrCreateInstance(i).toggle(this);
          }),
            B.on(window, ic, () => {
              for (const d of lt.find(In)) _n.getOrCreateInstance(d).show();
            }),
            B.on(window, rl, () => {
              for (const d of lt.find(
                "[aria-modal][class*=show][class*=offcanvas-]"
              ))
                getComputedStyle(d).position !== "fixed" &&
                  _n.getOrCreateInstance(d).hide();
            }),
            lr(_n),
            At(_n);
          const mu = {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              dd: [],
              div: [],
              dl: [],
              dt: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
            },
            sc = new Set([
              "background",
              "cite",
              "href",
              "itemtype",
              "longdesc",
              "poster",
              "src",
              "xlink:href",
            ]),
            gd = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            pu = (d, i) => {
              const c = d.nodeName.toLowerCase();
              return i.includes(c)
                ? sc.has(c)
                  ? !!gd.test(d.nodeValue)
                  : !0
                : i.filter((v) => v instanceof RegExp).some((v) => v.test(c));
            };
          function gu(d, i, c) {
            if (!d.length) return d;
            if (c && typeof c == "function") return c(d);
            const b = new window.DOMParser().parseFromString(d, "text/html"),
              R = [].concat(...b.body.querySelectorAll("*"));
            for (const w of R) {
              const q = w.nodeName.toLowerCase();
              if (!Object.keys(i).includes(q)) {
                w.remove();
                continue;
              }
              const F = [].concat(...w.attributes),
                nt = [].concat(i["*"] || [], i[q] || []);
              for (const W of F) pu(W, nt) || w.removeAttribute(W.nodeName);
            }
            return b.body.innerHTML;
          }
          const vu = "TemplateFactory",
            $e = {
              allowList: mu,
              content: {},
              extraClass: "",
              html: !1,
              sanitize: !0,
              sanitizeFn: null,
              template: "<div></div>",
            },
            oe = {
              allowList: "object",
              content: "object",
              extraClass: "(string|function)",
              html: "boolean",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              template: "string",
            },
            yu = {
              entry: "(string|element|function|null)",
              selector: "(string|element)",
            };
          class ji extends Ba {
            constructor(i) {
              super(), (this._config = this._getConfig(i));
            }
            static get Default() {
              return $e;
            }
            static get DefaultType() {
              return oe;
            }
            static get NAME() {
              return vu;
            }
            getContent() {
              return Object.values(this._config.content)
                .map((i) => this._resolvePossibleFunction(i))
                .filter(Boolean);
            }
            hasContent() {
              return this.getContent().length > 0;
            }
            changeContent(i) {
              return (
                this._checkContent(i),
                (this._config.content = { ...this._config.content, ...i }),
                this
              );
            }
            toHtml() {
              const i = document.createElement("div");
              i.innerHTML = this._maybeSanitize(this._config.template);
              for (const [b, R] of Object.entries(this._config.content))
                this._setContent(i, R, b);
              const c = i.children[0],
                v = this._resolvePossibleFunction(this._config.extraClass);
              return v && c.classList.add(...v.split(" ")), c;
            }
            _typeCheckConfig(i) {
              super._typeCheckConfig(i), this._checkContent(i.content);
            }
            _checkContent(i) {
              for (const [c, v] of Object.entries(i))
                super._typeCheckConfig({ selector: c, entry: v }, yu);
            }
            _setContent(i, c, v) {
              const b = lt.findOne(v, i);
              if (b) {
                if (((c = this._resolvePossibleFunction(c)), !c)) {
                  b.remove();
                  return;
                }
                if (V(c)) {
                  this._putElementInTemplate(P(c), b);
                  return;
                }
                if (this._config.html) {
                  b.innerHTML = this._maybeSanitize(c);
                  return;
                }
                b.textContent = c;
              }
            }
            _maybeSanitize(i) {
              return this._config.sanitize
                ? gu(i, this._config.allowList, this._config.sanitizeFn)
                : i;
            }
            _resolvePossibleFunction(i) {
              return Nt(i, [void 0, this]);
            }
            _putElementInTemplate(i, c) {
              if (this._config.html) {
                (c.innerHTML = ""), c.append(i);
                return;
              }
              c.textContent = i.textContent;
            }
          }
          const $r = "tooltip",
            _u = new Set(["sanitize", "allowList", "sanitizeFn"]),
            En = "fade",
            Yr = "modal",
            $l = "show",
            Eu = ".tooltip-inner",
            bu = `.${Yr}`,
            Su = "hide.bs.modal",
            Yl = "hover",
            Vr = "focus",
            Gr = "click",
            uc = "manual",
            Tu = "hide",
            oc = "hidden",
            vd = "show",
            cc = "shown",
            fc = "inserted",
            dc = "click",
            Au = "focusin",
            hc = "focusout",
            mc = "mouseenter",
            pc = "mouseleave",
            gc = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: Tt() ? "left" : "right",
              BOTTOM: "bottom",
              LEFT: Tt() ? "right" : "left",
            },
            vc = {
              allowList: mu,
              animation: !0,
              boundary: "clippingParents",
              container: !1,
              customClass: "",
              delay: 0,
              fallbackPlacements: ["top", "right", "bottom", "left"],
              html: !1,
              offset: [0, 6],
              placement: "top",
              popperConfig: null,
              sanitize: !0,
              sanitizeFn: null,
              selector: !1,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              title: "",
              trigger: "hover focus",
            },
            yd = {
              allowList: "object",
              animation: "boolean",
              boundary: "(string|element)",
              container: "(string|element|boolean)",
              customClass: "(string|function)",
              delay: "(number|object)",
              fallbackPlacements: "array",
              html: "boolean",
              offset: "(array|string|function)",
              placement: "(string|function)",
              popperConfig: "(null|object|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              selector: "(string|boolean)",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
            };
          class Na extends gn {
            constructor(i, c) {
              if (typeof Ni > "u")
                throw new TypeError(
                  "Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)"
                );
              super(i, c),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
            }
            static get Default() {
              return vc;
            }
            static get DefaultType() {
              return yd;
            }
            static get NAME() {
              return $r;
            }
            enable() {
              this._isEnabled = !0;
            }
            disable() {
              this._isEnabled = !1;
            }
            toggleEnabled() {
              this._isEnabled = !this._isEnabled;
            }
            toggle() {
              if (this._isEnabled) {
                if (this._isShown()) {
                  this._leave();
                  return;
                }
                this._enter();
              }
            }
            dispose() {
              clearTimeout(this._timeout),
                B.off(this._element.closest(bu), Su, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") &&
                  this._element.setAttribute(
                    "title",
                    this._element.getAttribute("data-bs-original-title")
                  ),
                this._disposePopper(),
                super.dispose();
            }
            show() {
              if (this._element.style.display === "none")
                throw new Error("Please use show on visible elements");
              if (!(this._isWithContent() && this._isEnabled)) return;
              const i = B.trigger(
                  this._element,
                  this.constructor.eventName(vd)
                ),
                v = (
                  k(this._element) ||
                  this._element.ownerDocument.documentElement
                ).contains(this._element);
              if (i.defaultPrevented || !v) return;
              this._disposePopper();
              const b = this._getTipElement();
              this._element.setAttribute(
                "aria-describedby",
                b.getAttribute("id")
              );
              const { container: R } = this._config;
              if (
                (this._element.ownerDocument.documentElement.contains(
                  this.tip
                ) ||
                  (R.append(b),
                  B.trigger(this._element, this.constructor.eventName(fc))),
                (this._popper = this._createPopper(b)),
                b.classList.add($l),
                "ontouchstart" in document.documentElement)
              )
                for (const q of [].concat(...document.body.children))
                  B.on(q, "mouseover", Z);
              const w = () => {
                B.trigger(this._element, this.constructor.eventName(cc)),
                  this._isHovered === !1 && this._leave(),
                  (this._isHovered = !1);
              };
              this._queueCallback(w, this.tip, this._isAnimated());
            }
            hide() {
              if (
                !this._isShown() ||
                B.trigger(this._element, this.constructor.eventName(Tu))
                  .defaultPrevented
              )
                return;
              if (
                (this._getTipElement().classList.remove($l),
                "ontouchstart" in document.documentElement)
              )
                for (const b of [].concat(...document.body.children))
                  B.off(b, "mouseover", Z);
              (this._activeTrigger[Gr] = !1),
                (this._activeTrigger[Vr] = !1),
                (this._activeTrigger[Yl] = !1),
                (this._isHovered = null);
              const v = () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  B.trigger(this._element, this.constructor.eventName(oc)));
              };
              this._queueCallback(v, this.tip, this._isAnimated());
            }
            update() {
              this._popper && this._popper.update();
            }
            _isWithContent() {
              return !!this._getTitle();
            }
            _getTipElement() {
              return (
                this.tip ||
                  (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate()
                  )),
                this.tip
              );
            }
            _createTipElement(i) {
              const c = this._getTemplateFactory(i).toHtml();
              if (!c) return null;
              c.classList.remove(En, $l),
                c.classList.add(`bs-${this.constructor.NAME}-auto`);
              const v = _(this.constructor.NAME).toString();
              return (
                c.setAttribute("id", v),
                this._isAnimated() && c.classList.add(En),
                c
              );
            }
            setContent(i) {
              (this._newContent = i),
                this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(i) {
              return (
                this._templateFactory
                  ? this._templateFactory.changeContent(i)
                  : (this._templateFactory = new ji({
                      ...this._config,
                      content: i,
                      extraClass: this._resolvePossibleFunction(
                        this._config.customClass
                      ),
                    })),
                this._templateFactory
              );
            }
            _getContentForTemplate() {
              return { [Eu]: this._getTitle() };
            }
            _getTitle() {
              return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute("data-bs-original-title")
              );
            }
            _initializeOnDelegatedTarget(i) {
              return this.constructor.getOrCreateInstance(
                i.delegateTarget,
                this._getDelegateConfig()
              );
            }
            _isAnimated() {
              return (
                this._config.animation ||
                (this.tip && this.tip.classList.contains(En))
              );
            }
            _isShown() {
              return this.tip && this.tip.classList.contains($l);
            }
            _createPopper(i) {
              const c = Nt(this._config.placement, [this, i, this._element]),
                v = gc[c.toUpperCase()];
              return wl(this._element, i, this._getPopperConfig(v));
            }
            _getOffset() {
              const { offset: i } = this._config;
              return typeof i == "string"
                ? i.split(",").map((c) => Number.parseInt(c, 10))
                : typeof i == "function"
                ? (c) => i(c, this._element)
                : i;
            }
            _resolvePossibleFunction(i) {
              return Nt(i, [this._element, this._element]);
            }
            _getPopperConfig(i) {
              const c = {
                placement: i,
                modifiers: [
                  {
                    name: "flip",
                    options: {
                      fallbackPlacements: this._config.fallbackPlacements,
                    },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  {
                    name: "arrow",
                    options: { element: `.${this.constructor.NAME}-arrow` },
                  },
                  {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: (v) => {
                      this._getTipElement().setAttribute(
                        "data-popper-placement",
                        v.state.placement
                      );
                    },
                  },
                ],
              };
              return { ...c, ...Nt(this._config.popperConfig, [void 0, c]) };
            }
            _setListeners() {
              const i = this._config.trigger.split(" ");
              for (const c of i)
                if (c === "click")
                  B.on(
                    this._element,
                    this.constructor.eventName(dc),
                    this._config.selector,
                    (v) => {
                      const b = this._initializeOnDelegatedTarget(v);
                      (b._activeTrigger[Gr] = !(
                        b._isShown() && b._activeTrigger[Gr]
                      )),
                        b.toggle();
                    }
                  );
                else if (c !== uc) {
                  const v =
                      c === Yl
                        ? this.constructor.eventName(mc)
                        : this.constructor.eventName(Au),
                    b =
                      c === Yl
                        ? this.constructor.eventName(pc)
                        : this.constructor.eventName(hc);
                  B.on(this._element, v, this._config.selector, (R) => {
                    const w = this._initializeOnDelegatedTarget(R);
                    (w._activeTrigger[R.type === "focusin" ? Vr : Yl] = !0),
                      w._enter();
                  }),
                    B.on(this._element, b, this._config.selector, (R) => {
                      const w = this._initializeOnDelegatedTarget(R);
                      (w._activeTrigger[R.type === "focusout" ? Vr : Yl] =
                        w._element.contains(R.relatedTarget)),
                        w._leave();
                    });
                }
              (this._hideModalHandler = () => {
                this._element && this.hide();
              }),
                B.on(this._element.closest(bu), Su, this._hideModalHandler);
            }
            _fixTitle() {
              const i = this._element.getAttribute("title");
              i &&
                (!this._element.getAttribute("aria-label") &&
                  !this._element.textContent.trim() &&
                  this._element.setAttribute("aria-label", i),
                this._element.setAttribute("data-bs-original-title", i),
                this._element.removeAttribute("title"));
            }
            _enter() {
              if (this._isShown() || this._isHovered) {
                this._isHovered = !0;
                return;
              }
              (this._isHovered = !0),
                this._setTimeout(() => {
                  this._isHovered && this.show();
                }, this._config.delay.show);
            }
            _leave() {
              this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                  this._isHovered || this.hide();
                }, this._config.delay.hide));
            }
            _setTimeout(i, c) {
              clearTimeout(this._timeout), (this._timeout = setTimeout(i, c));
            }
            _isWithActiveTrigger() {
              return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(i) {
              const c = pn.getDataAttributes(this._element);
              for (const v of Object.keys(c)) _u.has(v) && delete c[v];
              return (
                (i = { ...c, ...(typeof i == "object" && i ? i : {}) }),
                (i = this._mergeConfigObj(i)),
                (i = this._configAfterMerge(i)),
                this._typeCheckConfig(i),
                i
              );
            }
            _configAfterMerge(i) {
              return (
                (i.container =
                  i.container === !1 ? document.body : P(i.container)),
                typeof i.delay == "number" &&
                  (i.delay = { show: i.delay, hide: i.delay }),
                typeof i.title == "number" && (i.title = i.title.toString()),
                typeof i.content == "number" &&
                  (i.content = i.content.toString()),
                i
              );
            }
            _getDelegateConfig() {
              const i = {};
              for (const [c, v] of Object.entries(this._config))
                this.constructor.Default[c] !== v && (i[c] = v);
              return (i.selector = !1), (i.trigger = "manual"), i;
            }
            _disposePopper() {
              this._popper && (this._popper.destroy(), (this._popper = null)),
                this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = Na.getOrCreateInstance(this, i);
                if (typeof i == "string") {
                  if (typeof c[i] > "u")
                    throw new TypeError(`No method named "${i}"`);
                  c[i]();
                }
              });
            }
          }
          At(Na);
          const Vl = "popover",
            kr = ".popover-header",
            yc = ".popover-body",
            Kr = {
              ...Na.Default,
              content: "",
              offset: [0, 8],
              placement: "right",
              template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              trigger: "click",
            },
            qi = {
              ...Na.DefaultType,
              content: "(null|string|element|function)",
            };
          class $i extends Na {
            static get Default() {
              return Kr;
            }
            static get DefaultType() {
              return qi;
            }
            static get NAME() {
              return Vl;
            }
            _isWithContent() {
              return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
              return { [kr]: this._getTitle(), [yc]: this._getContent() };
            }
            _getContent() {
              return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = $i.getOrCreateInstance(this, i);
                if (typeof i == "string") {
                  if (typeof c[i] > "u")
                    throw new TypeError(`No method named "${i}"`);
                  c[i]();
                }
              });
            }
          }
          At($i);
          const _c = "scrollspy",
            Xr = ".bs.scrollspy",
            Ec = ".data-api",
            bc = `activate${Xr}`,
            Qr = `click${Xr}`,
            Sc = `load${Xr}${Ec}`,
            Tc = "dropdown-item",
            Da = "active",
            Ac = '[data-bs-spy="scroll"]',
            Zr = "[href]",
            Ed = ".nav, .list-group",
            Jr = ".nav-link",
            Ou = `${Jr}, .nav-item > ${Jr}, .list-group-item`,
            Oc = ".dropdown",
            Nc = ".dropdown-toggle",
            Td = {
              offset: null,
              rootMargin: "0px 0px -25%",
              smoothScroll: !1,
              target: null,
              threshold: [0.1, 0.5, 1],
            },
            Ad = {
              offset: "(number|null)",
              rootMargin: "string",
              smoothScroll: "boolean",
              target: "element",
              threshold: "array",
            };
          class Gl extends gn {
            constructor(i, c) {
              super(i, c),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                  getComputedStyle(this._element).overflowY === "visible"
                    ? null
                    : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                  visibleEntryTop: 0,
                  parentScrollTop: 0,
                }),
                this.refresh();
            }
            static get Default() {
              return Td;
            }
            static get DefaultType() {
              return Ad;
            }
            static get NAME() {
              return _c;
            }
            refresh() {
              this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                  ? this._observer.disconnect()
                  : (this._observer = this._getNewObserver());
              for (const i of this._observableSections.values())
                this._observer.observe(i);
            }
            dispose() {
              this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(i) {
              return (
                (i.target = P(i.target) || document.body),
                (i.rootMargin = i.offset
                  ? `${i.offset}px 0px -30%`
                  : i.rootMargin),
                typeof i.threshold == "string" &&
                  (i.threshold = i.threshold
                    .split(",")
                    .map((c) => Number.parseFloat(c))),
                i
              );
            }
            _maybeEnableSmoothScroll() {
              this._config.smoothScroll &&
                (B.off(this._config.target, Qr),
                B.on(this._config.target, Qr, Zr, (i) => {
                  const c = this._observableSections.get(i.target.hash);
                  if (c) {
                    i.preventDefault();
                    const v = this._rootElement || window,
                      b = c.offsetTop - this._element.offsetTop;
                    if (v.scrollTo) {
                      v.scrollTo({ top: b, behavior: "smooth" });
                      return;
                    }
                    v.scrollTop = b;
                  }
                }));
            }
            _getNewObserver() {
              const i = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
              };
              return new IntersectionObserver(
                (c) => this._observerCallback(c),
                i
              );
            }
            _observerCallback(i) {
              const c = (w) => this._targetLinks.get(`#${w.target.id}`),
                v = (w) => {
                  (this._previousScrollData.visibleEntryTop =
                    w.target.offsetTop),
                    this._process(c(w));
                },
                b = (this._rootElement || document.documentElement).scrollTop,
                R = b >= this._previousScrollData.parentScrollTop;
              this._previousScrollData.parentScrollTop = b;
              for (const w of i) {
                if (!w.isIntersecting) {
                  (this._activeTarget = null), this._clearActiveClass(c(w));
                  continue;
                }
                const q =
                  w.target.offsetTop >=
                  this._previousScrollData.visibleEntryTop;
                if (R && q) {
                  if ((v(w), !b)) return;
                  continue;
                }
                !R && !q && v(w);
              }
            }
            _initializeTargetsAndObservables() {
              (this._targetLinks = new Map()),
                (this._observableSections = new Map());
              const i = lt.find(Zr, this._config.target);
              for (const c of i) {
                if (!c.hash || Q(c)) continue;
                const v = lt.findOne(decodeURI(c.hash), this._element);
                G(v) &&
                  (this._targetLinks.set(decodeURI(c.hash), c),
                  this._observableSections.set(c.hash, v));
              }
            }
            _process(i) {
              this._activeTarget !== i &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = i),
                i.classList.add(Da),
                this._activateParents(i),
                B.trigger(this._element, bc, { relatedTarget: i }));
            }
            _activateParents(i) {
              if (i.classList.contains(Tc)) {
                lt.findOne(Nc, i.closest(Oc)).classList.add(Da);
                return;
              }
              for (const c of lt.parents(i, Ed))
                for (const v of lt.prev(c, Ou)) v.classList.add(Da);
            }
            _clearActiveClass(i) {
              i.classList.remove(Da);
              const c = lt.find(`${Zr}.${Da}`, i);
              for (const v of c) v.classList.remove(Da);
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = Gl.getOrCreateInstance(this, i);
                if (typeof i == "string") {
                  if (
                    c[i] === void 0 ||
                    i.startsWith("_") ||
                    i === "constructor"
                  )
                    throw new TypeError(`No method named "${i}"`);
                  c[i]();
                }
              });
            }
          }
          B.on(window, Sc, () => {
            for (const d of lt.find(Ac)) Gl.getOrCreateInstance(d);
          }),
            At(Gl);
          const Yi = "tab",
            Ln = ".bs.tab",
            Rc = `hide${Ln}`,
            Cc = `hidden${Ln}`,
            Fr = `show${Ln}`,
            xc = `shown${Ln}`,
            wc = `click${Ln}`,
            Od = `keydown${Ln}`,
            kl = `load${Ln}`,
            Vi = "ArrowLeft",
            Gi = "ArrowRight",
            ki = "ArrowUp",
            Ki = "ArrowDown",
            Wr = "Home",
            Nu = "End",
            cn = "active",
            Du = "fade",
            Ye = "show",
            Un = "dropdown",
            ta = ".dropdown-toggle",
            Mc = ".dropdown-menu",
            zn = `:not(${ta})`,
            ea = '.list-group, .nav, [role="tablist"]',
            me = ".nav-item, .list-group-item",
            Pr = `.nav-link${zn}, .list-group-item${zn}, [role="tab"]${zn}`,
            Ir =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            Xi = `${Pr}, ${Ir}`,
            Lc = `.${cn}[data-bs-toggle="tab"], .${cn}[data-bs-toggle="pill"], .${cn}[data-bs-toggle="list"]`;
          class Ra extends gn {
            constructor(i) {
              super(i),
                (this._parent = this._element.closest(ea)),
                this._parent &&
                  (this._setInitialAttributes(
                    this._parent,
                    this._getChildren()
                  ),
                  B.on(this._element, Od, (c) => this._keydown(c)));
            }
            static get NAME() {
              return Yi;
            }
            show() {
              const i = this._element;
              if (this._elemIsActive(i)) return;
              const c = this._getActiveElem(),
                v = c ? B.trigger(c, Rc, { relatedTarget: i }) : null;
              B.trigger(i, Fr, { relatedTarget: c }).defaultPrevented ||
                (v && v.defaultPrevented) ||
                (this._deactivate(c, i), this._activate(i, c));
            }
            _activate(i, c) {
              if (!i) return;
              i.classList.add(cn), this._activate(lt.getElementFromSelector(i));
              const v = () => {
                if (i.getAttribute("role") !== "tab") {
                  i.classList.add(Ye);
                  return;
                }
                i.removeAttribute("tabindex"),
                  i.setAttribute("aria-selected", !0),
                  this._toggleDropDown(i, !0),
                  B.trigger(i, xc, { relatedTarget: c });
              };
              this._queueCallback(v, i, i.classList.contains(Du));
            }
            _deactivate(i, c) {
              if (!i) return;
              i.classList.remove(cn),
                i.blur(),
                this._deactivate(lt.getElementFromSelector(i));
              const v = () => {
                if (i.getAttribute("role") !== "tab") {
                  i.classList.remove(Ye);
                  return;
                }
                i.setAttribute("aria-selected", !1),
                  i.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(i, !1),
                  B.trigger(i, Cc, { relatedTarget: c });
              };
              this._queueCallback(v, i, i.classList.contains(Du));
            }
            _keydown(i) {
              if (![Vi, Gi, ki, Ki, Wr, Nu].includes(i.key)) return;
              i.stopPropagation(), i.preventDefault();
              const c = this._getChildren().filter((b) => !Q(b));
              let v;
              if ([Wr, Nu].includes(i.key))
                v = c[i.key === Wr ? 0 : c.length - 1];
              else {
                const b = [Gi, Ki].includes(i.key);
                v = De(c, i.target, b, !0);
              }
              v &&
                (v.focus({ preventScroll: !0 }),
                Ra.getOrCreateInstance(v).show());
            }
            _getChildren() {
              return lt.find(Xi, this._parent);
            }
            _getActiveElem() {
              return (
                this._getChildren().find((i) => this._elemIsActive(i)) || null
              );
            }
            _setInitialAttributes(i, c) {
              this._setAttributeIfNotExists(i, "role", "tablist");
              for (const v of c) this._setInitialAttributesOnChild(v);
            }
            _setInitialAttributesOnChild(i) {
              i = this._getInnerElement(i);
              const c = this._elemIsActive(i),
                v = this._getOuterElement(i);
              i.setAttribute("aria-selected", c),
                v !== i &&
                  this._setAttributeIfNotExists(v, "role", "presentation"),
                c || i.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(i, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(i);
            }
            _setInitialAttributesOnTargetPanel(i) {
              const c = lt.getElementFromSelector(i);
              c &&
                (this._setAttributeIfNotExists(c, "role", "tabpanel"),
                i.id &&
                  this._setAttributeIfNotExists(
                    c,
                    "aria-labelledby",
                    `${i.id}`
                  ));
            }
            _toggleDropDown(i, c) {
              const v = this._getOuterElement(i);
              if (!v.classList.contains(Un)) return;
              const b = (R, w) => {
                const q = lt.findOne(R, v);
                q && q.classList.toggle(w, c);
              };
              b(ta, cn), b(Mc, Ye), v.setAttribute("aria-expanded", c);
            }
            _setAttributeIfNotExists(i, c, v) {
              i.hasAttribute(c) || i.setAttribute(c, v);
            }
            _elemIsActive(i) {
              return i.classList.contains(cn);
            }
            _getInnerElement(i) {
              return i.matches(Xi) ? i : lt.findOne(Xi, i);
            }
            _getOuterElement(i) {
              return i.closest(me) || i;
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = Ra.getOrCreateInstance(this);
                if (typeof i == "string") {
                  if (
                    c[i] === void 0 ||
                    i.startsWith("_") ||
                    i === "constructor"
                  )
                    throw new TypeError(`No method named "${i}"`);
                  c[i]();
                }
              });
            }
          }
          B.on(document, wc, Ir, function (d) {
            ["A", "AREA"].includes(this.tagName) && d.preventDefault(),
              !Q(this) && Ra.getOrCreateInstance(this).show();
          }),
            B.on(window, kl, () => {
              for (const d of lt.find(Lc)) Ra.getOrCreateInstance(d);
            }),
            At(Ra);
          const sl = "toast",
            na = ".bs.toast",
            Uc = `mouseover${na}`,
            zc = `mouseout${na}`,
            ts = `focusin${na}`,
            Hc = `focusout${na}`,
            Cu = `hide${na}`,
            Bc = `hidden${na}`,
            jc = `show${na}`,
            Nd = `shown${na}`,
            qc = "fade",
            pe = "hide",
            ce = "show",
            Qi = "showing",
            $c = { animation: "boolean", autohide: "boolean", delay: "number" },
            Yc = { animation: !0, autohide: !0, delay: 5e3 };
          class Kl extends gn {
            constructor(i, c) {
              super(i, c),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
            }
            static get Default() {
              return Yc;
            }
            static get DefaultType() {
              return $c;
            }
            static get NAME() {
              return sl;
            }
            show() {
              if (B.trigger(this._element, jc).defaultPrevented) return;
              this._clearTimeout(),
                this._config.animation && this._element.classList.add(qc);
              const c = () => {
                this._element.classList.remove(Qi),
                  B.trigger(this._element, Nd),
                  this._maybeScheduleHide();
              };
              this._element.classList.remove(pe),
                st(this._element),
                this._element.classList.add(ce, Qi),
                this._queueCallback(c, this._element, this._config.animation);
            }
            hide() {
              if (
                !this.isShown() ||
                B.trigger(this._element, Cu).defaultPrevented
              )
                return;
              const c = () => {
                this._element.classList.add(pe),
                  this._element.classList.remove(Qi, ce),
                  B.trigger(this._element, Bc);
              };
              this._element.classList.add(Qi),
                this._queueCallback(c, this._element, this._config.animation);
            }
            dispose() {
              this._clearTimeout(),
                this.isShown() && this._element.classList.remove(ce),
                super.dispose();
            }
            isShown() {
              return this._element.classList.contains(ce);
            }
            _maybeScheduleHide() {
              this._config.autohide &&
                (this._hasMouseInteraction ||
                  this._hasKeyboardInteraction ||
                  (this._timeout = setTimeout(() => {
                    this.hide();
                  }, this._config.delay)));
            }
            _onInteraction(i, c) {
              switch (i.type) {
                case "mouseover":
                case "mouseout": {
                  this._hasMouseInteraction = c;
                  break;
                }
                case "focusin":
                case "focusout": {
                  this._hasKeyboardInteraction = c;
                  break;
                }
              }
              if (c) {
                this._clearTimeout();
                return;
              }
              const v = i.relatedTarget;
              this._element === v ||
                this._element.contains(v) ||
                this._maybeScheduleHide();
            }
            _setListeners() {
              B.on(this._element, Uc, (i) => this._onInteraction(i, !0)),
                B.on(this._element, zc, (i) => this._onInteraction(i, !1)),
                B.on(this._element, ts, (i) => this._onInteraction(i, !0)),
                B.on(this._element, Hc, (i) => this._onInteraction(i, !1));
            }
            _clearTimeout() {
              clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(i) {
              return this.each(function () {
                const c = Kl.getOrCreateInstance(this, i);
                if (typeof i == "string") {
                  if (typeof c[i] > "u")
                    throw new TypeError(`No method named "${i}"`);
                  c[i](this);
                }
              });
            }
          }
          return (
            lr(Kl),
            At(Kl),
            {
              Alert: $n,
              Button: ca,
              Carousel: _l,
              Collapse: vn,
              Dropdown: on,
              Modal: Pn,
              Offcanvas: _n,
              Popover: $i,
              ScrollSpy: Gl,
              Tab: Ra,
              Toast: Kl,
              Tooltip: Na,
            }
          );
        });
      })(vf)),
    vf.exports
  );
}
vv();
/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var rp = "popstate";
function yv(r = {}) {
  function u(o, h) {
    let { pathname: p, search: y, hash: T } = o.location;
    return bh(
      "",
      { pathname: p, search: y, hash: T },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || "default"
    );
  }
  function f(o, h) {
    return typeof h == "string" ? h : no(h);
  }
  return Ev(u, f, null, r);
}
function le(r, u) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(u);
}
function ra(r, u) {
  if (!r) {
    typeof console < "u" && console.warn(u);
    try {
      throw new Error(u);
    } catch {}
  }
}
function _v() {
  return Math.random().toString(36).substring(2, 10);
}
function sp(r, u) {
  return { usr: r.state, key: r.key, idx: u };
}
function bh(r, u, f = null, o) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...(typeof u == "string" ? vs(u) : u),
    state: f,
    key: (u && u.key) || o || _v(),
  };
}
function no({ pathname: r = "/", search: u = "", hash: f = "" }) {
  return (
    u && u !== "?" && (r += u.charAt(0) === "?" ? u : "?" + u),
    f && f !== "#" && (r += f.charAt(0) === "#" ? f : "#" + f),
    r
  );
}
function vs(r) {
  let u = {};
  if (r) {
    let f = r.indexOf("#");
    f >= 0 && ((u.hash = r.substring(f)), (r = r.substring(0, f)));
    let o = r.indexOf("?");
    o >= 0 && ((u.search = r.substring(o)), (r = r.substring(0, o))),
      r && (u.pathname = r);
  }
  return u;
}
function Ev(r, u, f, o = {}) {
  let { window: h = document.defaultView, v5Compat: p = !1 } = o,
    y = h.history,
    T = "POP",
    E = null,
    _ = A();
  _ == null && ((_ = 0), y.replaceState({ ...y.state, idx: _ }, ""));
  function A() {
    return (y.state || { idx: null }).idx;
  }
  function U() {
    T = "POP";
    let k = A(),
      Z = k == null ? null : k - _;
    (_ = k), E && E({ action: T, location: Q.location, delta: Z });
  }
  function V(k, Z) {
    T = "PUSH";
    let st = bh(Q.location, k, Z);
    _ = A() + 1;
    let at = sp(st, _),
      Rt = Q.createHref(st);
    try {
      y.pushState(at, "", Rt);
    } catch (rt) {
      if (rt instanceof DOMException && rt.name === "DataCloneError") throw rt;
      h.location.assign(Rt);
    }
    p && E && E({ action: T, location: Q.location, delta: 1 });
  }
  function P(k, Z) {
    T = "REPLACE";
    let st = bh(Q.location, k, Z);
    _ = A();
    let at = sp(st, _),
      Rt = Q.createHref(st);
    y.replaceState(at, "", Rt),
      p && E && E({ action: T, location: Q.location, delta: 0 });
  }
  function G(k) {
    return bv(k);
  }
  let Q = {
    get action() {
      return T;
    },
    get location() {
      return r(h, y);
    },
    listen(k) {
      if (E) throw new Error("A history only accepts one active listener");
      return (
        h.addEventListener(rp, U),
        (E = k),
        () => {
          h.removeEventListener(rp, U), (E = null);
        }
      );
    },
    createHref(k) {
      return u(h, k);
    },
    createURL: G,
    encodeLocation(k) {
      let Z = G(k);
      return { pathname: Z.pathname, search: Z.search, hash: Z.hash };
    },
    push: V,
    replace: P,
    go(k) {
      return y.go(k);
    },
  };
  return Q;
}
function bv(r, u = !1) {
  let f = "http://localhost";
  typeof window < "u" &&
    (f =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    le(f, "No window.location.(origin|href) available to create URL");
  let o = typeof r == "string" ? r : no(r);
  return (
    (o = o.replace(/ $/, "%20")),
    !u && o.startsWith("//") && (o = f + o),
    new URL(o, f)
  );
}
function Ap(r, u, f = "/") {
  return Sv(r, u, f, !1);
}
function Sv(r, u, f, o) {
  let h = typeof u == "string" ? vs(u) : u,
    p = dl(h.pathname || "/", f);
  if (p == null) return null;
  let y = Op(r);
  Tv(y);
  let T = null;
  for (let E = 0; T == null && E < y.length; ++E) {
    let _ = Uv(p);
    T = Mv(y[E], _, o);
  }
  return T;
}
function Op(r, u = [], f = [], o = "", h = !1) {
  let p = (y, T, E = h, _) => {
    let A = {
      relativePath: _ === void 0 ? y.path || "" : _,
      caseSensitive: y.caseSensitive === !0,
      childrenIndex: T,
      route: y,
    };
    if (A.relativePath.startsWith("/")) {
      if (!A.relativePath.startsWith(o) && E) return;
      le(
        A.relativePath.startsWith(o),
        `Absolute route path "${A.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (A.relativePath = A.relativePath.slice(o.length));
    }
    let U = fl([o, A.relativePath]),
      V = f.concat(A);
    y.children &&
      y.children.length > 0 &&
      (le(
        y.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${U}".`
      ),
      Op(y.children, u, V, U, E)),
      !(y.path == null && !y.index) &&
        u.push({ path: U, score: xv(U, y.index), routesMeta: V });
  };
  return (
    r.forEach((y, T) => {
      if (y.path === "" || !y.path?.includes("?")) p(y, T);
      else for (let E of Np(y.path)) p(y, T, !0, E);
    }),
    u
  );
}
function Np(r) {
  let u = r.split("/");
  if (u.length === 0) return [];
  let [f, ...o] = u,
    h = f.endsWith("?"),
    p = f.replace(/\?$/, "");
  if (o.length === 0) return h ? [p, ""] : [p];
  let y = Np(o.join("/")),
    T = [];
  return (
    T.push(...y.map((E) => (E === "" ? p : [p, E].join("/")))),
    h && T.push(...y),
    T.map((E) => (r.startsWith("/") && E === "" ? "/" : E))
  );
}
function Tv(r) {
  r.sort((u, f) =>
    u.score !== f.score
      ? f.score - u.score
      : wv(
          u.routesMeta.map((o) => o.childrenIndex),
          f.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
var Av = /^:[\w-]+$/,
  Ov = 3,
  Nv = 2,
  Dv = 1,
  Rv = 10,
  Cv = -2,
  up = (r) => r === "*";
function xv(r, u) {
  let f = r.split("/"),
    o = f.length;
  return (
    f.some(up) && (o += Cv),
    u && (o += Nv),
    f
      .filter((h) => !up(h))
      .reduce((h, p) => h + (Av.test(p) ? Ov : p === "" ? Dv : Rv), o)
  );
}
function wv(r, u) {
  return r.length === u.length && r.slice(0, -1).every((o, h) => o === u[h])
    ? r[r.length - 1] - u[u.length - 1]
    : 0;
}
function Mv(r, u, f = !1) {
  let { routesMeta: o } = r,
    h = {},
    p = "/",
    y = [];
  for (let T = 0; T < o.length; ++T) {
    let E = o[T],
      _ = T === o.length - 1,
      A = p === "/" ? u : u.slice(p.length) || "/",
      U = Tf(
        { path: E.relativePath, caseSensitive: E.caseSensitive, end: _ },
        A
      ),
      V = E.route;
    if (
      (!U &&
        _ &&
        f &&
        !o[o.length - 1].route.index &&
        (U = Tf(
          { path: E.relativePath, caseSensitive: E.caseSensitive, end: !1 },
          A
        )),
      !U)
    )
      return null;
    Object.assign(h, U.params),
      y.push({
        params: h,
        pathname: fl([p, U.pathname]),
        pathnameBase: jv(fl([p, U.pathnameBase])),
        route: V,
      }),
      U.pathnameBase !== "/" && (p = fl([p, U.pathnameBase]));
  }
  return y;
}
function Tf(r, u) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [f, o] = Lv(r.path, r.caseSensitive, r.end),
    h = u.match(f);
  if (!h) return null;
  let p = h[0],
    y = p.replace(/(.)\/+$/, "$1"),
    T = h.slice(1);
  return {
    params: o.reduce((_, { paramName: A, isOptional: U }, V) => {
      if (A === "*") {
        let G = T[V] || "";
        y = p.slice(0, p.length - G.length).replace(/(.)\/+$/, "$1");
      }
      const P = T[V];
      return (
        U && !P ? (_[A] = void 0) : (_[A] = (P || "").replace(/%2F/g, "/")), _
      );
    }, {}),
    pathname: p,
    pathnameBase: y,
    pattern: r,
  };
}
function Lv(r, u = !1, f = !0) {
  ra(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let o = [],
    h =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (y, T, E) => (
            o.push({ paramName: T, isOptional: E != null }),
            E ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    r.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (h += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : f
      ? (h += "\\/*$")
      : r !== "" && r !== "/" && (h += "(?:(?=\\/|$))"),
    [new RegExp(h, u ? void 0 : "i"), o]
  );
}
function Uv(r) {
  try {
    return r
      .split("/")
      .map((u) => decodeURIComponent(u).replace(/\//g, "%2F"))
      .join("/");
  } catch (u) {
    return (
      ra(
        !1,
        `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`
      ),
      r
    );
  }
}
function dl(r, u) {
  if (u === "/") return r;
  if (!r.toLowerCase().startsWith(u.toLowerCase())) return null;
  let f = u.endsWith("/") ? u.length - 1 : u.length,
    o = r.charAt(f);
  return o && o !== "/" ? null : r.slice(f) || "/";
}
function zv(r, u = "/") {
  let {
    pathname: f,
    search: o = "",
    hash: h = "",
  } = typeof r == "string" ? vs(r) : r;
  return {
    pathname: f ? (f.startsWith("/") ? f : Hv(f, u)) : u,
    search: qv(o),
    hash: $v(h),
  };
}
function Hv(r, u) {
  let f = u.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach((h) => {
      h === ".." ? f.length > 1 && f.pop() : h !== "." && f.push(h);
    }),
    f.length > 1 ? f.join("/") : "/"
  );
}
function gh(r, u, f, o) {
  return `Cannot include a '${r}' character in a manually specified \`to.${u}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Bv(r) {
  return r.filter(
    (u, f) => f === 0 || (u.route.path && u.route.path.length > 0)
  );
}
function wh(r) {
  let u = Bv(r);
  return u.map((f, o) => (o === u.length - 1 ? f.pathname : f.pathnameBase));
}
function Mh(r, u, f, o = !1) {
  let h;
  typeof r == "string"
    ? (h = vs(r))
    : ((h = { ...r }),
      le(
        !h.pathname || !h.pathname.includes("?"),
        gh("?", "pathname", "search", h)
      ),
      le(
        !h.pathname || !h.pathname.includes("#"),
        gh("#", "pathname", "hash", h)
      ),
      le(!h.search || !h.search.includes("#"), gh("#", "search", "hash", h)));
  let p = r === "" || h.pathname === "",
    y = p ? "/" : h.pathname,
    T;
  if (y == null) T = f;
  else {
    let U = u.length - 1;
    if (!o && y.startsWith("..")) {
      let V = y.split("/");
      for (; V[0] === ".."; ) V.shift(), (U -= 1);
      h.pathname = V.join("/");
    }
    T = U >= 0 ? u[U] : "/";
  }
  let E = zv(h, T),
    _ = y && y !== "/" && y.endsWith("/"),
    A = (p || y === ".") && f.endsWith("/");
  return !E.pathname.endsWith("/") && (_ || A) && (E.pathname += "/"), E;
}
var fl = (r) => r.join("/").replace(/\/\/+/g, "/"),
  jv = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  qv = (r) => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  $v = (r) => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r);
function Yv(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
var Dp = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Dp);
var Vv = ["GET", ...Dp];
new Set(Vv);
var ys = H.createContext(null);
ys.displayName = "DataRouter";
var Nf = H.createContext(null);
Nf.displayName = "DataRouterState";
H.createContext(!1);
var Rp = H.createContext({ isTransitioning: !1 });
Rp.displayName = "ViewTransition";
var Gv = H.createContext(new Map());
Gv.displayName = "Fetchers";
var kv = H.createContext(null);
kv.displayName = "Await";
var sa = H.createContext(null);
sa.displayName = "Navigation";
var lo = H.createContext(null);
lo.displayName = "Location";
var ua = H.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ua.displayName = "Route";
var Lh = H.createContext(null);
Lh.displayName = "RouteError";
function Kv(r, { relative: u } = {}) {
  le(
    _s(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: f, navigator: o } = H.useContext(sa),
    { hash: h, pathname: p, search: y } = ro(r, { relative: u }),
    T = p;
  return (
    f !== "/" && (T = p === "/" ? f : fl([f, p])),
    o.createHref({ pathname: T, search: y, hash: h })
  );
}
function _s() {
  return H.useContext(lo) != null;
}
function ri() {
  return (
    le(
      _s(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    H.useContext(lo).location
  );
}
var Cp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function xp(r) {
  H.useContext(sa).static || H.useLayoutEffect(r);
}
function io() {
  let { isDataRoute: r } = H.useContext(ua);
  return r ? iy() : Xv();
}
function Xv() {
  le(
    _s(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = H.useContext(ys),
    { basename: u, navigator: f } = H.useContext(sa),
    { matches: o } = H.useContext(ua),
    { pathname: h } = ri(),
    p = JSON.stringify(wh(o)),
    y = H.useRef(!1);
  return (
    xp(() => {
      y.current = !0;
    }),
    H.useCallback(
      (E, _ = {}) => {
        if ((ra(y.current, Cp), !y.current)) return;
        if (typeof E == "number") {
          f.go(E);
          return;
        }
        let A = Mh(E, JSON.parse(p), h, _.relative === "path");
        r == null &&
          u !== "/" &&
          (A.pathname = A.pathname === "/" ? u : fl([u, A.pathname])),
          (_.replace ? f.replace : f.push)(A, _.state, _);
      },
      [u, f, p, h, r]
    )
  );
}
H.createContext(null);
function Qv() {
  let { matches: r } = H.useContext(ua),
    u = r[r.length - 1];
  return u ? u.params : {};
}
function ro(r, { relative: u } = {}) {
  let { matches: f } = H.useContext(ua),
    { pathname: o } = ri(),
    h = JSON.stringify(wh(f));
  return H.useMemo(() => Mh(r, JSON.parse(h), o, u === "path"), [r, h, o, u]);
}
function Zv(r, u) {
  return wp(r, u);
}
function wp(r, u, f, o) {
  le(
    _s(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: h } = H.useContext(sa),
    { matches: p } = H.useContext(ua),
    y = p[p.length - 1],
    T = y ? y.params : {},
    E = y ? y.pathname : "/",
    _ = y ? y.pathnameBase : "/",
    A = y && y.route;
  {
    let Z = (A && A.path) || "";
    Mp(
      E,
      !A || Z.endsWith("*") || Z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${E}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${
        Z === "/" ? "*" : `${Z}/*`
      }">.`
    );
  }
  let U = ri(),
    V;
  if (u) {
    let Z = typeof u == "string" ? vs(u) : u;
    le(
      _ === "/" || Z.pathname?.startsWith(_),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${Z.pathname}" was given in the \`location\` prop.`
    ),
      (V = Z);
  } else V = U;
  let P = V.pathname || "/",
    G = P;
  if (_ !== "/") {
    let Z = _.replace(/^\//, "").split("/");
    G = "/" + P.replace(/^\//, "").split("/").slice(Z.length).join("/");
  }
  let Q = Ap(r, { pathname: G });
  ra(
    A || Q != null,
    `No routes matched location "${V.pathname}${V.search}${V.hash}" `
  ),
    ra(
      Q == null ||
        Q[Q.length - 1].route.element !== void 0 ||
        Q[Q.length - 1].route.Component !== void 0 ||
        Q[Q.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let k = Iv(
    Q &&
      Q.map((Z) =>
        Object.assign({}, Z, {
          params: Object.assign({}, T, Z.params),
          pathname: fl([
            _,
            h.encodeLocation
              ? h.encodeLocation(Z.pathname).pathname
              : Z.pathname,
          ]),
          pathnameBase:
            Z.pathnameBase === "/"
              ? _
              : fl([
                  _,
                  h.encodeLocation
                    ? h.encodeLocation(Z.pathnameBase).pathname
                    : Z.pathnameBase,
                ]),
        })
      ),
    p,
    f,
    o
  );
  return u && k
    ? H.createElement(
        lo.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...V,
            },
            navigationType: "POP",
          },
        },
        k
      )
    : k;
}
function Jv() {
  let r = ly(),
    u = Yv(r)
      ? `${r.status} ${r.statusText}`
      : r instanceof Error
      ? r.message
      : JSON.stringify(r),
    f = r instanceof Error ? r.stack : null,
    o = "rgba(200,200,200, 0.5)",
    h = { padding: "0.5rem", backgroundColor: o },
    p = { padding: "2px 4px", backgroundColor: o },
    y = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", r),
    (y = H.createElement(
      H.Fragment,
      null,
      H.createElement("p", null, "💿 Hey developer 👋"),
      H.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        H.createElement("code", { style: p }, "ErrorBoundary"),
        " or",
        " ",
        H.createElement("code", { style: p }, "errorElement"),
        " prop on your route."
      )
    )),
    H.createElement(
      H.Fragment,
      null,
      H.createElement("h2", null, "Unexpected Application Error!"),
      H.createElement("h3", { style: { fontStyle: "italic" } }, u),
      f ? H.createElement("pre", { style: h }, f) : null,
      y
    )
  );
}
var Fv = H.createElement(Jv, null),
  Wv = class extends H.Component {
    constructor(r) {
      super(r),
        (this.state = {
          location: r.location,
          revalidation: r.revalidation,
          error: r.error,
        });
    }
    static getDerivedStateFromError(r) {
      return { error: r };
    }
    static getDerivedStateFromProps(r, u) {
      return u.location !== r.location ||
        (u.revalidation !== "idle" && r.revalidation === "idle")
        ? { error: r.error, location: r.location, revalidation: r.revalidation }
        : {
            error: r.error !== void 0 ? r.error : u.error,
            location: u.location,
            revalidation: r.revalidation || u.revalidation,
          };
    }
    componentDidCatch(r, u) {
      console.error(
        "React Router caught the following error during render",
        r,
        u
      );
    }
    render() {
      return this.state.error !== void 0
        ? H.createElement(
            ua.Provider,
            { value: this.props.routeContext },
            H.createElement(Lh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Pv({ routeContext: r, match: u, children: f }) {
  let o = H.useContext(ys);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (u.route.errorElement || u.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = u.route.id),
    H.createElement(ua.Provider, { value: r }, f)
  );
}
function Iv(r, u = [], f = null, o = null) {
  if (r == null) {
    if (!f) return null;
    if (f.errors) r = f.matches;
    else if (u.length === 0 && !f.initialized && f.matches.length > 0)
      r = f.matches;
    else return null;
  }
  let h = r,
    p = f?.errors;
  if (p != null) {
    let E = h.findIndex((_) => _.route.id && p?.[_.route.id] !== void 0);
    le(
      E >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        p
      ).join(",")}`
    ),
      (h = h.slice(0, Math.min(h.length, E + 1)));
  }
  let y = !1,
    T = -1;
  if (f)
    for (let E = 0; E < h.length; E++) {
      let _ = h[E];
      if (
        ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (T = E),
        _.route.id)
      ) {
        let { loaderData: A, errors: U } = f,
          V =
            _.route.loader &&
            !A.hasOwnProperty(_.route.id) &&
            (!U || U[_.route.id] === void 0);
        if (_.route.lazy || V) {
          (y = !0), T >= 0 ? (h = h.slice(0, T + 1)) : (h = [h[0]]);
          break;
        }
      }
    }
  return h.reduceRight((E, _, A) => {
    let U,
      V = !1,
      P = null,
      G = null;
    f &&
      ((U = p && _.route.id ? p[_.route.id] : void 0),
      (P = _.route.errorElement || Fv),
      y &&
        (T < 0 && A === 0
          ? (Mp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (V = !0),
            (G = null))
          : T === A &&
            ((V = !0), (G = _.route.hydrateFallbackElement || null))));
    let Q = u.concat(h.slice(0, A + 1)),
      k = () => {
        let Z;
        return (
          U
            ? (Z = P)
            : V
            ? (Z = G)
            : _.route.Component
            ? (Z = H.createElement(_.route.Component, null))
            : _.route.element
            ? (Z = _.route.element)
            : (Z = E),
          H.createElement(Pv, {
            match: _,
            routeContext: { outlet: E, matches: Q, isDataRoute: f != null },
            children: Z,
          })
        );
      };
    return f && (_.route.ErrorBoundary || _.route.errorElement || A === 0)
      ? H.createElement(Wv, {
          location: f.location,
          revalidation: f.revalidation,
          component: P,
          error: U,
          children: k(),
          routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
        })
      : k();
  }, null);
}
function Uh(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ty(r) {
  let u = H.useContext(ys);
  return le(u, Uh(r)), u;
}
function ey(r) {
  let u = H.useContext(Nf);
  return le(u, Uh(r)), u;
}
function ny(r) {
  let u = H.useContext(ua);
  return le(u, Uh(r)), u;
}
function zh(r) {
  let u = ny(r),
    f = u.matches[u.matches.length - 1];
  return (
    le(
      f.route.id,
      `${r} can only be used on routes that contain a unique "id"`
    ),
    f.route.id
  );
}
function ay() {
  return zh("useRouteId");
}
function ly() {
  let r = H.useContext(Lh),
    u = ey("useRouteError"),
    f = zh("useRouteError");
  return r !== void 0 ? r : u.errors?.[f];
}
function iy() {
  let { router: r } = ty("useNavigate"),
    u = zh("useNavigate"),
    f = H.useRef(!1);
  return (
    xp(() => {
      f.current = !0;
    }),
    H.useCallback(
      async (h, p = {}) => {
        ra(f.current, Cp),
          f.current &&
            (typeof h == "number"
              ? r.navigate(h)
              : await r.navigate(h, { fromRouteId: u, ...p }));
      },
      [r, u]
    )
  );
}
var op = {};
function Mp(r, u, f) {
  !u && !op[r] && ((op[r] = !0), ra(!1, f));
}
H.memo(ry);
function ry({ routes: r, future: u, state: f }) {
  return wp(r, void 0, f, u);
}
function sy({ to: r, replace: u, state: f, relative: o }) {
  le(
    _s(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: h } = H.useContext(sa);
  ra(
    !h,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: p } = H.useContext(ua),
    { pathname: y } = ri(),
    T = io(),
    E = Mh(r, wh(p), y, o === "path"),
    _ = JSON.stringify(E);
  return (
    H.useEffect(() => {
      T(JSON.parse(_), { replace: u, state: f, relative: o });
    }, [T, _, o, u, f]),
    null
  );
}
function eo(r) {
  le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function uy({
  basename: r = "/",
  children: u = null,
  location: f,
  navigationType: o = "POP",
  navigator: h,
  static: p = !1,
}) {
  le(
    !_s(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let y = r.replace(/^\/*/, "/"),
    T = H.useMemo(
      () => ({ basename: y, navigator: h, static: p, future: {} }),
      [y, h, p]
    );
  typeof f == "string" && (f = vs(f));
  let {
      pathname: E = "/",
      search: _ = "",
      hash: A = "",
      state: U = null,
      key: V = "default",
    } = f,
    P = H.useMemo(() => {
      let G = dl(E, y);
      return G == null
        ? null
        : {
            location: { pathname: G, search: _, hash: A, state: U, key: V },
            navigationType: o,
          };
    }, [y, E, _, A, U, V, o]);
  return (
    ra(
      P != null,
      `<Router basename="${y}"> is not able to match the URL "${E}${_}${A}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    P == null
      ? null
      : H.createElement(
          sa.Provider,
          { value: T },
          H.createElement(lo.Provider, { children: u, value: P })
        )
  );
}
function oy({ children: r, location: u }) {
  return Zv(Sh(r), u);
}
function Sh(r, u = []) {
  let f = [];
  return (
    H.Children.forEach(r, (o, h) => {
      if (!H.isValidElement(o)) return;
      let p = [...u, h];
      if (o.type === H.Fragment) {
        f.push.apply(f, Sh(o.props.children, p));
        return;
      }
      le(
        o.type === eo,
        `[${
          typeof o.type == "string" ? o.type : o.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        le(
          !o.props.index || !o.props.children,
          "An index route cannot have child routes."
        );
      let y = {
        id: o.props.id || p.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.hasErrorBoundary === !0 ||
          o.props.ErrorBoundary != null ||
          o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children && (y.children = Sh(o.props.children, p)), f.push(y);
    }),
    f
  );
}
var yf = "get",
  _f = "application/x-www-form-urlencoded";
function Df(r) {
  return r != null && typeof r.tagName == "string";
}
function cy(r) {
  return Df(r) && r.tagName.toLowerCase() === "button";
}
function fy(r) {
  return Df(r) && r.tagName.toLowerCase() === "form";
}
function dy(r) {
  return Df(r) && r.tagName.toLowerCase() === "input";
}
function hy(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function my(r, u) {
  return r.button === 0 && (!u || u === "_self") && !hy(r);
}
var gf = null;
function py() {
  if (gf === null)
    try {
      new FormData(document.createElement("form"), 0), (gf = !1);
    } catch {
      gf = !0;
    }
  return gf;
}
var gy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function vh(r) {
  return r != null && !gy.has(r)
    ? (ra(
        !1,
        `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_f}"`
      ),
      null)
    : r;
}
function vy(r, u) {
  let f, o, h, p, y;
  if (fy(r)) {
    let T = r.getAttribute("action");
    (o = T ? dl(T, u) : null),
      (f = r.getAttribute("method") || yf),
      (h = vh(r.getAttribute("enctype")) || _f),
      (p = new FormData(r));
  } else if (cy(r) || (dy(r) && (r.type === "submit" || r.type === "image"))) {
    let T = r.form;
    if (T == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let E = r.getAttribute("formaction") || T.getAttribute("action");
    if (
      ((o = E ? dl(E, u) : null),
      (f = r.getAttribute("formmethod") || T.getAttribute("method") || yf),
      (h =
        vh(r.getAttribute("formenctype")) ||
        vh(T.getAttribute("enctype")) ||
        _f),
      (p = new FormData(T, r)),
      !py())
    ) {
      let { name: _, type: A, value: U } = r;
      if (A === "image") {
        let V = _ ? `${_}.` : "";
        p.append(`${V}x`, "0"), p.append(`${V}y`, "0");
      } else _ && p.append(_, U);
    }
  } else {
    if (Df(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (f = yf), (o = null), (h = _f), (y = r);
  }
  return (
    p && h === "text/plain" && ((y = p), (p = void 0)),
    { action: o, method: f.toLowerCase(), encType: h, formData: p, body: y }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Hh(r, u) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(u);
}
function yy(r, u, f) {
  let o =
    typeof r == "string"
      ? new URL(
          r,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : r;
  return (
    o.pathname === "/"
      ? (o.pathname = `_root.${f}`)
      : u && dl(o.pathname, u) === "/"
      ? (o.pathname = `${u.replace(/\/$/, "")}/_root.${f}`)
      : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${f}`),
    o
  );
}
async function _y(r, u) {
  if (r.id in u) return u[r.id];
  try {
    let f = await import(r.module);
    return (u[r.id] = f), f;
  } catch (f) {
    return (
      console.error(
        `Error loading route module \`${r.module}\`, reloading page...`
      ),
      console.error(f),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Ey(r) {
  return r == null
    ? !1
    : r.href == null
    ? r.rel === "preload" &&
      typeof r.imageSrcSet == "string" &&
      typeof r.imageSizes == "string"
    : typeof r.rel == "string" && typeof r.href == "string";
}
async function by(r, u, f) {
  let o = await Promise.all(
    r.map(async (h) => {
      let p = u.routes[h.route.id];
      if (p) {
        let y = await _y(p, f);
        return y.links ? y.links() : [];
      }
      return [];
    })
  );
  return Oy(
    o
      .flat(1)
      .filter(Ey)
      .filter((h) => h.rel === "stylesheet" || h.rel === "preload")
      .map((h) =>
        h.rel === "stylesheet"
          ? { ...h, rel: "prefetch", as: "style" }
          : { ...h, rel: "prefetch" }
      )
  );
}
function cp(r, u, f, o, h, p) {
  let y = (E, _) => (f[_] ? E.route.id !== f[_].route.id : !0),
    T = (E, _) =>
      f[_].pathname !== E.pathname ||
      (f[_].route.path?.endsWith("*") && f[_].params["*"] !== E.params["*"]);
  return p === "assets"
    ? u.filter((E, _) => y(E, _) || T(E, _))
    : p === "data"
    ? u.filter((E, _) => {
        let A = o.routes[E.route.id];
        if (!A || !A.hasLoader) return !1;
        if (y(E, _) || T(E, _)) return !0;
        if (E.route.shouldRevalidate) {
          let U = E.route.shouldRevalidate({
            currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
            currentParams: f[0]?.params || {},
            nextUrl: new URL(r, window.origin),
            nextParams: E.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof U == "boolean") return U;
        }
        return !0;
      })
    : [];
}
function Sy(r, u, { includeHydrateFallback: f } = {}) {
  return Ty(
    r
      .map((o) => {
        let h = u.routes[o.route.id];
        if (!h) return [];
        let p = [h.module];
        return (
          h.clientActionModule && (p = p.concat(h.clientActionModule)),
          h.clientLoaderModule && (p = p.concat(h.clientLoaderModule)),
          f &&
            h.hydrateFallbackModule &&
            (p = p.concat(h.hydrateFallbackModule)),
          h.imports && (p = p.concat(h.imports)),
          p
        );
      })
      .flat(1)
  );
}
function Ty(r) {
  return [...new Set(r)];
}
function Ay(r) {
  let u = {},
    f = Object.keys(r).sort();
  for (let o of f) u[o] = r[o];
  return u;
}
function Oy(r, u) {
  let f = new Set();
  return (
    new Set(u),
    r.reduce((o, h) => {
      let p = JSON.stringify(Ay(h));
      return f.has(p) || (f.add(p), o.push({ key: p, link: h })), o;
    }, [])
  );
}
function Lp() {
  let r = H.useContext(ys);
  return (
    Hh(
      r,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    r
  );
}
function Ny() {
  let r = H.useContext(Nf);
  return (
    Hh(
      r,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    r
  );
}
var Bh = H.createContext(void 0);
Bh.displayName = "FrameworkContext";
function Up() {
  let r = H.useContext(Bh);
  return (
    Hh(r, "You must render this element inside a <HydratedRouter> element"), r
  );
}
function Dy(r, u) {
  let f = H.useContext(Bh),
    [o, h] = H.useState(!1),
    [p, y] = H.useState(!1),
    {
      onFocus: T,
      onBlur: E,
      onMouseEnter: _,
      onMouseLeave: A,
      onTouchStart: U,
    } = u,
    V = H.useRef(null);
  H.useEffect(() => {
    if ((r === "render" && y(!0), r === "viewport")) {
      let Q = (Z) => {
          Z.forEach((st) => {
            y(st.isIntersecting);
          });
        },
        k = new IntersectionObserver(Q, { threshold: 0.5 });
      return (
        V.current && k.observe(V.current),
        () => {
          k.disconnect();
        }
      );
    }
  }, [r]),
    H.useEffect(() => {
      if (o) {
        let Q = setTimeout(() => {
          y(!0);
        }, 100);
        return () => {
          clearTimeout(Q);
        };
      }
    }, [o]);
  let P = () => {
      h(!0);
    },
    G = () => {
      h(!1), y(!1);
    };
  return f
    ? r !== "intent"
      ? [p, V, {}]
      : [
          p,
          V,
          {
            onFocus: Iu(T, P),
            onBlur: Iu(E, G),
            onMouseEnter: Iu(_, P),
            onMouseLeave: Iu(A, G),
            onTouchStart: Iu(U, P),
          },
        ]
    : [!1, V, {}];
}
function Iu(r, u) {
  return (f) => {
    r && r(f), f.defaultPrevented || u(f);
  };
}
function Ry({ page: r, ...u }) {
  let { router: f } = Lp(),
    o = H.useMemo(() => Ap(f.routes, r, f.basename), [f.routes, r, f.basename]);
  return o ? H.createElement(xy, { page: r, matches: o, ...u }) : null;
}
function Cy(r) {
  let { manifest: u, routeModules: f } = Up(),
    [o, h] = H.useState([]);
  return (
    H.useEffect(() => {
      let p = !1;
      return (
        by(r, u, f).then((y) => {
          p || h(y);
        }),
        () => {
          p = !0;
        }
      );
    }, [r, u, f]),
    o
  );
}
function xy({ page: r, matches: u, ...f }) {
  let o = ri(),
    { manifest: h, routeModules: p } = Up(),
    { basename: y } = Lp(),
    { loaderData: T, matches: E } = Ny(),
    _ = H.useMemo(() => cp(r, u, E, h, o, "data"), [r, u, E, h, o]),
    A = H.useMemo(() => cp(r, u, E, h, o, "assets"), [r, u, E, h, o]),
    U = H.useMemo(() => {
      if (r === o.pathname + o.search + o.hash) return [];
      let G = new Set(),
        Q = !1;
      if (
        (u.forEach((Z) => {
          let st = h.routes[Z.route.id];
          !st ||
            !st.hasLoader ||
            ((!_.some((at) => at.route.id === Z.route.id) &&
              Z.route.id in T &&
              p[Z.route.id]?.shouldRevalidate) ||
            st.hasClientLoader
              ? (Q = !0)
              : G.add(Z.route.id));
        }),
        G.size === 0)
      )
        return [];
      let k = yy(r, y, "data");
      return (
        Q &&
          G.size > 0 &&
          k.searchParams.set(
            "_routes",
            u
              .filter((Z) => G.has(Z.route.id))
              .map((Z) => Z.route.id)
              .join(",")
          ),
        [k.pathname + k.search]
      );
    }, [y, T, o, h, _, u, r, p]),
    V = H.useMemo(() => Sy(A, h), [A, h]),
    P = Cy(A);
  return H.createElement(
    H.Fragment,
    null,
    U.map((G) =>
      H.createElement("link", {
        key: G,
        rel: "prefetch",
        as: "fetch",
        href: G,
        ...f,
      })
    ),
    V.map((G) =>
      H.createElement("link", { key: G, rel: "modulepreload", href: G, ...f })
    ),
    P.map(({ key: G, link: Q }) =>
      H.createElement("link", { key: G, nonce: f.nonce, ...Q })
    )
  );
}
function wy(...r) {
  return (u) => {
    r.forEach((f) => {
      typeof f == "function" ? f(u) : f != null && (f.current = u);
    });
  };
}
var zp =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  zp && (window.__reactRouterVersion = "7.8.1");
} catch {}
function My({ basename: r, children: u, window: f }) {
  let o = H.useRef();
  o.current == null && (o.current = yv({ window: f, v5Compat: !0 }));
  let h = o.current,
    [p, y] = H.useState({ action: h.action, location: h.location }),
    T = H.useCallback(
      (E) => {
        H.startTransition(() => y(E));
      },
      [y]
    );
  return (
    H.useLayoutEffect(() => h.listen(T), [h, T]),
    H.createElement(uy, {
      basename: r,
      children: u,
      location: p.location,
      navigationType: p.action,
      navigator: h,
    })
  );
}
var Hp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Rf = H.forwardRef(function (
    {
      onClick: u,
      discover: f = "render",
      prefetch: o = "none",
      relative: h,
      reloadDocument: p,
      replace: y,
      state: T,
      target: E,
      to: _,
      preventScrollReset: A,
      viewTransition: U,
      ...V
    },
    P
  ) {
    let { basename: G } = H.useContext(sa),
      Q = typeof _ == "string" && Hp.test(_),
      k,
      Z = !1;
    if (typeof _ == "string" && Q && ((k = _), zp))
      try {
        let Kt = new URL(window.location.href),
          De = _.startsWith("//") ? new URL(Kt.protocol + _) : new URL(_),
          Ie = dl(De.pathname, G);
        De.origin === Kt.origin && Ie != null
          ? (_ = Ie + De.search + De.hash)
          : (Z = !0);
      } catch {
        ra(
          !1,
          `<Link to="${_}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let st = Kv(_, { relative: h }),
      [at, Rt, rt] = Dy(o, V),
      Tt = zy(_, {
        replace: y,
        state: T,
        target: E,
        preventScrollReset: A,
        relative: h,
        viewTransition: U,
      });
    function At(Kt) {
      u && u(Kt), Kt.defaultPrevented || Tt(Kt);
    }
    let Nt = H.createElement("a", {
      ...V,
      ...rt,
      href: k || st,
      onClick: Z || p ? u : At,
      ref: wy(P, Rt),
      target: E,
      "data-discover": !Q && f === "render" ? "true" : void 0,
    });
    return at && !Q
      ? H.createElement(H.Fragment, null, Nt, H.createElement(Ry, { page: st }))
      : Nt;
  });
Rf.displayName = "Link";
var Th = H.forwardRef(function (
  {
    "aria-current": u = "page",
    caseSensitive: f = !1,
    className: o = "",
    end: h = !1,
    style: p,
    to: y,
    viewTransition: T,
    children: E,
    ..._
  },
  A
) {
  let U = ro(y, { relative: _.relative }),
    V = ri(),
    P = H.useContext(Nf),
    { navigator: G, basename: Q } = H.useContext(sa),
    k = P != null && $y(U) && T === !0,
    Z = G.encodeLocation ? G.encodeLocation(U).pathname : U.pathname,
    st = V.pathname,
    at =
      P && P.navigation && P.navigation.location
        ? P.navigation.location.pathname
        : null;
  f ||
    ((st = st.toLowerCase()),
    (at = at ? at.toLowerCase() : null),
    (Z = Z.toLowerCase())),
    at && Q && (at = dl(at, Q) || at);
  const Rt = Z !== "/" && Z.endsWith("/") ? Z.length - 1 : Z.length;
  let rt = st === Z || (!h && st.startsWith(Z) && st.charAt(Rt) === "/"),
    Tt =
      at != null &&
      (at === Z || (!h && at.startsWith(Z) && at.charAt(Z.length) === "/")),
    At = { isActive: rt, isPending: Tt, isTransitioning: k },
    Nt = rt ? u : void 0,
    Kt;
  typeof o == "function"
    ? (Kt = o(At))
    : (Kt = [
        o,
        rt ? "active" : null,
        Tt ? "pending" : null,
        k ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let De = typeof p == "function" ? p(At) : p;
  return H.createElement(
    Rf,
    {
      ..._,
      "aria-current": Nt,
      className: Kt,
      ref: A,
      style: De,
      to: y,
      viewTransition: T,
    },
    typeof E == "function" ? E(At) : E
  );
});
Th.displayName = "NavLink";
var Ly = H.forwardRef(
  (
    {
      discover: r = "render",
      fetcherKey: u,
      navigate: f,
      reloadDocument: o,
      replace: h,
      state: p,
      method: y = yf,
      action: T,
      onSubmit: E,
      relative: _,
      preventScrollReset: A,
      viewTransition: U,
      ...V
    },
    P
  ) => {
    let G = jy(),
      Q = qy(T, { relative: _ }),
      k = y.toLowerCase() === "get" ? "get" : "post",
      Z = typeof T == "string" && Hp.test(T),
      st = (at) => {
        if ((E && E(at), at.defaultPrevented)) return;
        at.preventDefault();
        let Rt = at.nativeEvent.submitter,
          rt = Rt?.getAttribute("formmethod") || y;
        G(Rt || at.currentTarget, {
          fetcherKey: u,
          method: rt,
          navigate: f,
          replace: h,
          state: p,
          relative: _,
          preventScrollReset: A,
          viewTransition: U,
        });
      };
    return H.createElement("form", {
      ref: P,
      method: k,
      action: Q,
      onSubmit: o ? E : st,
      ...V,
      "data-discover": !Z && r === "render" ? "true" : void 0,
    });
  }
);
Ly.displayName = "Form";
function Uy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bp(r) {
  let u = H.useContext(ys);
  return le(u, Uy(r)), u;
}
function zy(
  r,
  {
    target: u,
    replace: f,
    state: o,
    preventScrollReset: h,
    relative: p,
    viewTransition: y,
  } = {}
) {
  let T = io(),
    E = ri(),
    _ = ro(r, { relative: p });
  return H.useCallback(
    (A) => {
      if (my(A, u)) {
        A.preventDefault();
        let U = f !== void 0 ? f : no(E) === no(_);
        T(r, {
          replace: U,
          state: o,
          preventScrollReset: h,
          relative: p,
          viewTransition: y,
        });
      }
    },
    [E, T, _, f, o, u, r, h, p, y]
  );
}
var Hy = 0,
  By = () => `__${String(++Hy)}__`;
function jy() {
  let { router: r } = Bp("useSubmit"),
    { basename: u } = H.useContext(sa),
    f = ay();
  return H.useCallback(
    async (o, h = {}) => {
      let { action: p, method: y, encType: T, formData: E, body: _ } = vy(o, u);
      if (h.navigate === !1) {
        let A = h.fetcherKey || By();
        await r.fetch(A, f, h.action || p, {
          preventScrollReset: h.preventScrollReset,
          formData: E,
          body: _,
          formMethod: h.method || y,
          formEncType: h.encType || T,
          flushSync: h.flushSync,
        });
      } else
        await r.navigate(h.action || p, {
          preventScrollReset: h.preventScrollReset,
          formData: E,
          body: _,
          formMethod: h.method || y,
          formEncType: h.encType || T,
          replace: h.replace,
          state: h.state,
          fromRouteId: f,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [r, u, f]
  );
}
function qy(r, { relative: u } = {}) {
  let { basename: f } = H.useContext(sa),
    o = H.useContext(ua);
  le(o, "useFormAction must be used inside a RouteContext");
  let [h] = o.matches.slice(-1),
    p = { ...ro(r || ".", { relative: u }) },
    y = ri();
  if (r == null) {
    p.search = y.search;
    let T = new URLSearchParams(p.search),
      E = T.getAll("index");
    if (E.some((A) => A === "")) {
      T.delete("index"),
        E.filter((U) => U).forEach((U) => T.append("index", U));
      let A = T.toString();
      p.search = A ? `?${A}` : "";
    }
  }
  return (
    (!r || r === ".") &&
      h.route.index &&
      (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"),
    f !== "/" && (p.pathname = p.pathname === "/" ? f : fl([f, p.pathname])),
    no(p)
  );
}
function $y(r, { relative: u } = {}) {
  let f = H.useContext(Rp);
  le(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Bp("useViewTransitionState"),
    h = ro(r, { relative: u });
  if (!f.isTransitioning) return !1;
  let p = dl(f.currentLocation.pathname, o) || f.currentLocation.pathname,
    y = dl(f.nextLocation.pathname, o) || f.nextLocation.pathname;
  return Tf(h.pathname, y) != null || Tf(h.pathname, p) != null;
}
const Yy = "_Header_c2irv_1",
  Vy = "_Navbar_c2irv_15",
  Gy = "_Navbar_Items_Active_c2irv_27",
  ky = "_Navbar_Items_NotActive_c2irv_47",
  Ky = "_User_c2irv_65",
  Xy = "_UserText_c2irv_73",
  ii = {
    Header: Yy,
    Navbar: Vy,
    Navbar_Items_Active: Gy,
    Navbar_Items_NotActive: ky,
    User: Ky,
    UserText: Xy,
  },
  Qy = () => {
    const { user: r, setUser: u } = H.useContext(Yh);
    return J.jsx(J.Fragment, {
      children: J.jsxs("div", {
        className: ii.Header,
        children: [
          J.jsxs("div", {
            className: ii.Navbar,
            children: [
              J.jsx(Th, {
                to: "/",
                className: (f) =>
                  f.isActive
                    ? ii.Navbar_Items_Active
                    : ii.Navbar_Items_NotActive,
                children: "Task List",
              }),
              J.jsx(Th, {
                to: "/TaskForm",
                className: (f) =>
                  f.isActive
                    ? ii.Navbar_Items_Active
                    : ii.Navbar_Items_NotActive,
                children: "Task Form",
              }),
            ],
          }),
          J.jsx("div", {
            className: ii.User,
            children: J.jsx(Rf, {
              className: ii.UserText,
              onClick: () => {
                u("Login");
              },
              to: "/login",
              children: r || "Login",
            }),
          }),
        ],
      }),
    });
  };
function jp(r, u) {
  return function () {
    return r.apply(u, arguments);
  };
}
const { toString: Zy } = Object.prototype,
  { getPrototypeOf: jh } = Object,
  { iterator: Cf, toStringTag: qp } = Symbol,
  xf = ((r) => (u) => {
    const f = Zy.call(u);
    return r[f] || (r[f] = f.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  oa = (r) => ((r = r.toLowerCase()), (u) => xf(u) === r),
  wf = (r) => (u) => typeof u === r,
  { isArray: Es } = Array,
  ao = wf("undefined");
function so(r) {
  return (
    r !== null &&
    !ao(r) &&
    r.constructor !== null &&
    !ao(r.constructor) &&
    hn(r.constructor.isBuffer) &&
    r.constructor.isBuffer(r)
  );
}
const $p = oa("ArrayBuffer");
function Jy(r) {
  let u;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (u = ArrayBuffer.isView(r))
      : (u = r && r.buffer && $p(r.buffer)),
    u
  );
}
const Fy = wf("string"),
  hn = wf("function"),
  Yp = wf("number"),
  uo = (r) => r !== null && typeof r == "object",
  Wy = (r) => r === !0 || r === !1,
  Ef = (r) => {
    if (xf(r) !== "object") return !1;
    const u = jh(r);
    return (
      (u === null ||
        u === Object.prototype ||
        Object.getPrototypeOf(u) === null) &&
      !(qp in r) &&
      !(Cf in r)
    );
  },
  Py = (r) => {
    if (!uo(r) || so(r)) return !1;
    try {
      return (
        Object.keys(r).length === 0 &&
        Object.getPrototypeOf(r) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Iy = oa("Date"),
  t_ = oa("File"),
  e_ = oa("Blob"),
  n_ = oa("FileList"),
  a_ = (r) => uo(r) && hn(r.pipe),
  l_ = (r) => {
    let u;
    return (
      r &&
      ((typeof FormData == "function" && r instanceof FormData) ||
        (hn(r.append) &&
          ((u = xf(r)) === "formdata" ||
            (u === "object" &&
              hn(r.toString) &&
              r.toString() === "[object FormData]"))))
    );
  },
  i_ = oa("URLSearchParams"),
  [r_, s_, u_, o_] = ["ReadableStream", "Request", "Response", "Headers"].map(
    oa
  ),
  c_ = (r) =>
    r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oo(r, u, { allOwnKeys: f = !1 } = {}) {
  if (r === null || typeof r > "u") return;
  let o, h;
  if ((typeof r != "object" && (r = [r]), Es(r)))
    for (o = 0, h = r.length; o < h; o++) u.call(null, r[o], o, r);
  else {
    if (so(r)) return;
    const p = f ? Object.getOwnPropertyNames(r) : Object.keys(r),
      y = p.length;
    let T;
    for (o = 0; o < y; o++) (T = p[o]), u.call(null, r[T], T, r);
  }
}
function Vp(r, u) {
  if (so(r)) return null;
  u = u.toLowerCase();
  const f = Object.keys(r);
  let o = f.length,
    h;
  for (; o-- > 0; ) if (((h = f[o]), u === h.toLowerCase())) return h;
  return null;
}
const tr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Gp = (r) => !ao(r) && r !== tr;
function Ah() {
  const { caseless: r } = (Gp(this) && this) || {},
    u = {},
    f = (o, h) => {
      const p = (r && Vp(u, h)) || h;
      Ef(u[p]) && Ef(o)
        ? (u[p] = Ah(u[p], o))
        : Ef(o)
        ? (u[p] = Ah({}, o))
        : Es(o)
        ? (u[p] = o.slice())
        : (u[p] = o);
    };
  for (let o = 0, h = arguments.length; o < h; o++)
    arguments[o] && oo(arguments[o], f);
  return u;
}
const f_ = (r, u, f, { allOwnKeys: o } = {}) => (
    oo(
      u,
      (h, p) => {
        f && hn(h) ? (r[p] = jp(h, f)) : (r[p] = h);
      },
      { allOwnKeys: o }
    ),
    r
  ),
  d_ = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r),
  h_ = (r, u, f, o) => {
    (r.prototype = Object.create(u.prototype, o)),
      (r.prototype.constructor = r),
      Object.defineProperty(r, "super", { value: u.prototype }),
      f && Object.assign(r.prototype, f);
  },
  m_ = (r, u, f, o) => {
    let h, p, y;
    const T = {};
    if (((u = u || {}), r == null)) return u;
    do {
      for (h = Object.getOwnPropertyNames(r), p = h.length; p-- > 0; )
        (y = h[p]), (!o || o(y, r, u)) && !T[y] && ((u[y] = r[y]), (T[y] = !0));
      r = f !== !1 && jh(r);
    } while (r && (!f || f(r, u)) && r !== Object.prototype);
    return u;
  },
  p_ = (r, u, f) => {
    (r = String(r)),
      (f === void 0 || f > r.length) && (f = r.length),
      (f -= u.length);
    const o = r.indexOf(u, f);
    return o !== -1 && o === f;
  },
  g_ = (r) => {
    if (!r) return null;
    if (Es(r)) return r;
    let u = r.length;
    if (!Yp(u)) return null;
    const f = new Array(u);
    for (; u-- > 0; ) f[u] = r[u];
    return f;
  },
  v_ = (
    (r) => (u) =>
      r && u instanceof r
  )(typeof Uint8Array < "u" && jh(Uint8Array)),
  y_ = (r, u) => {
    const o = (r && r[Cf]).call(r);
    let h;
    for (; (h = o.next()) && !h.done; ) {
      const p = h.value;
      u.call(r, p[0], p[1]);
    }
  },
  __ = (r, u) => {
    let f;
    const o = [];
    for (; (f = r.exec(u)) !== null; ) o.push(f);
    return o;
  },
  E_ = oa("HTMLFormElement"),
  b_ = (r) =>
    r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (f, o, h) {
      return o.toUpperCase() + h;
    }),
  fp = (
    ({ hasOwnProperty: r }) =>
    (u, f) =>
      r.call(u, f)
  )(Object.prototype),
  S_ = oa("RegExp"),
  kp = (r, u) => {
    const f = Object.getOwnPropertyDescriptors(r),
      o = {};
    oo(f, (h, p) => {
      let y;
      (y = u(h, p, r)) !== !1 && (o[p] = y || h);
    }),
      Object.defineProperties(r, o);
  },
  T_ = (r) => {
    kp(r, (u, f) => {
      if (hn(r) && ["arguments", "caller", "callee"].indexOf(f) !== -1)
        return !1;
      const o = r[f];
      if (hn(o)) {
        if (((u.enumerable = !1), "writable" in u)) {
          u.writable = !1;
          return;
        }
        u.set ||
          (u.set = () => {
            throw Error("Can not rewrite read-only method '" + f + "'");
          });
      }
    });
  },
  A_ = (r, u) => {
    const f = {},
      o = (h) => {
        h.forEach((p) => {
          f[p] = !0;
        });
      };
    return Es(r) ? o(r) : o(String(r).split(u)), f;
  },
  O_ = () => {},
  N_ = (r, u) => (r != null && Number.isFinite((r = +r)) ? r : u);
function D_(r) {
  return !!(r && hn(r.append) && r[qp] === "FormData" && r[Cf]);
}
const R_ = (r) => {
    const u = new Array(10),
      f = (o, h) => {
        if (uo(o)) {
          if (u.indexOf(o) >= 0) return;
          if (so(o)) return o;
          if (!("toJSON" in o)) {
            u[h] = o;
            const p = Es(o) ? [] : {};
            return (
              oo(o, (y, T) => {
                const E = f(y, h + 1);
                !ao(E) && (p[T] = E);
              }),
              (u[h] = void 0),
              p
            );
          }
        }
        return o;
      };
    return f(r, 0);
  },
  C_ = oa("AsyncFunction"),
  x_ = (r) => r && (uo(r) || hn(r)) && hn(r.then) && hn(r.catch),
  Kp = ((r, u) =>
    r
      ? setImmediate
      : u
      ? ((f, o) => (
          tr.addEventListener(
            "message",
            ({ source: h, data: p }) => {
              h === tr && p === f && o.length && o.shift()();
            },
            !1
          ),
          (h) => {
            o.push(h), tr.postMessage(f, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (f) => setTimeout(f))(
    typeof setImmediate == "function",
    hn(tr.postMessage)
  ),
  w_ =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(tr)
      : (typeof process < "u" && process.nextTick) || Kp,
  M_ = (r) => r != null && hn(r[Cf]),
  z = {
    isArray: Es,
    isArrayBuffer: $p,
    isBuffer: so,
    isFormData: l_,
    isArrayBufferView: Jy,
    isString: Fy,
    isNumber: Yp,
    isBoolean: Wy,
    isObject: uo,
    isPlainObject: Ef,
    isEmptyObject: Py,
    isReadableStream: r_,
    isRequest: s_,
    isResponse: u_,
    isHeaders: o_,
    isUndefined: ao,
    isDate: Iy,
    isFile: t_,
    isBlob: e_,
    isRegExp: S_,
    isFunction: hn,
    isStream: a_,
    isURLSearchParams: i_,
    isTypedArray: v_,
    isFileList: n_,
    forEach: oo,
    merge: Ah,
    extend: f_,
    trim: c_,
    stripBOM: d_,
    inherits: h_,
    toFlatObject: m_,
    kindOf: xf,
    kindOfTest: oa,
    endsWith: p_,
    toArray: g_,
    forEachEntry: y_,
    matchAll: __,
    isHTMLForm: E_,
    hasOwnProperty: fp,
    hasOwnProp: fp,
    reduceDescriptors: kp,
    freezeMethods: T_,
    toObjectSet: A_,
    toCamelCase: b_,
    noop: O_,
    toFiniteNumber: N_,
    findKey: Vp,
    global: tr,
    isContextDefined: Gp,
    isSpecCompliantForm: D_,
    toJSONObject: R_,
    isAsyncFn: C_,
    isThenable: x_,
    setImmediate: Kp,
    asap: w_,
    isIterable: M_,
  };
function _t(r, u, f, o, h) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = r),
    (this.name = "AxiosError"),
    u && (this.code = u),
    f && (this.config = f),
    o && (this.request = o),
    h && ((this.response = h), (this.status = h.status ? h.status : null));
}
z.inherits(_t, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Xp = _t.prototype,
  Qp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((r) => {
  Qp[r] = { value: r };
});
Object.defineProperties(_t, Qp);
Object.defineProperty(Xp, "isAxiosError", { value: !0 });
_t.from = (r, u, f, o, h, p) => {
  const y = Object.create(Xp);
  return (
    z.toFlatObject(
      r,
      y,
      function (E) {
        return E !== Error.prototype;
      },
      (T) => T !== "isAxiosError"
    ),
    _t.call(y, r.message, u, f, o, h),
    (y.cause = r),
    (y.name = r.name),
    p && Object.assign(y, p),
    y
  );
};
const L_ = null;
function Oh(r) {
  return z.isPlainObject(r) || z.isArray(r);
}
function Zp(r) {
  return z.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function dp(r, u, f) {
  return r
    ? r
        .concat(u)
        .map(function (h, p) {
          return (h = Zp(h)), !f && p ? "[" + h + "]" : h;
        })
        .join(f ? "." : "")
    : u;
}
function U_(r) {
  return z.isArray(r) && !r.some(Oh);
}
const z_ = z.toFlatObject(z, {}, null, function (u) {
  return /^is[A-Z]/.test(u);
});
function Mf(r, u, f) {
  if (!z.isObject(r)) throw new TypeError("target must be an object");
  (u = u || new FormData()),
    (f = z.toFlatObject(
      f,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (Q, k) {
        return !z.isUndefined(k[Q]);
      }
    ));
  const o = f.metaTokens,
    h = f.visitor || A,
    p = f.dots,
    y = f.indexes,
    E = (f.Blob || (typeof Blob < "u" && Blob)) && z.isSpecCompliantForm(u);
  if (!z.isFunction(h)) throw new TypeError("visitor must be a function");
  function _(G) {
    if (G === null) return "";
    if (z.isDate(G)) return G.toISOString();
    if (z.isBoolean(G)) return G.toString();
    if (!E && z.isBlob(G))
      throw new _t("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(G) || z.isTypedArray(G)
      ? E && typeof Blob == "function"
        ? new Blob([G])
        : Buffer.from(G)
      : G;
  }
  function A(G, Q, k) {
    let Z = G;
    if (G && !k && typeof G == "object") {
      if (z.endsWith(Q, "{}"))
        (Q = o ? Q : Q.slice(0, -2)), (G = JSON.stringify(G));
      else if (
        (z.isArray(G) && U_(G)) ||
        ((z.isFileList(G) || z.endsWith(Q, "[]")) && (Z = z.toArray(G)))
      )
        return (
          (Q = Zp(Q)),
          Z.forEach(function (at, Rt) {
            !(z.isUndefined(at) || at === null) &&
              u.append(
                y === !0 ? dp([Q], Rt, p) : y === null ? Q : Q + "[]",
                _(at)
              );
          }),
          !1
        );
    }
    return Oh(G) ? !0 : (u.append(dp(k, Q, p), _(G)), !1);
  }
  const U = [],
    V = Object.assign(z_, {
      defaultVisitor: A,
      convertValue: _,
      isVisitable: Oh,
    });
  function P(G, Q) {
    if (!z.isUndefined(G)) {
      if (U.indexOf(G) !== -1)
        throw Error("Circular reference detected in " + Q.join("."));
      U.push(G),
        z.forEach(G, function (Z, st) {
          (!(z.isUndefined(Z) || Z === null) &&
            h.call(u, Z, z.isString(st) ? st.trim() : st, Q, V)) === !0 &&
            P(Z, Q ? Q.concat(st) : [st]);
        }),
        U.pop();
    }
  }
  if (!z.isObject(r)) throw new TypeError("data must be an object");
  return P(r), u;
}
function hp(r) {
  const u = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function (o) {
    return u[o];
  });
}
function qh(r, u) {
  (this._pairs = []), r && Mf(r, this, u);
}
const Jp = qh.prototype;
Jp.append = function (u, f) {
  this._pairs.push([u, f]);
};
Jp.toString = function (u) {
  const f = u
    ? function (o) {
        return u.call(this, o, hp);
      }
    : hp;
  return this._pairs
    .map(function (h) {
      return f(h[0]) + "=" + f(h[1]);
    }, "")
    .join("&");
};
function H_(r) {
  return encodeURIComponent(r)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Fp(r, u, f) {
  if (!u) return r;
  const o = (f && f.encode) || H_;
  z.isFunction(f) && (f = { serialize: f });
  const h = f && f.serialize;
  let p;
  if (
    (h
      ? (p = h(u, f))
      : (p = z.isURLSearchParams(u) ? u.toString() : new qh(u, f).toString(o)),
    p)
  ) {
    const y = r.indexOf("#");
    y !== -1 && (r = r.slice(0, y)),
      (r += (r.indexOf("?") === -1 ? "?" : "&") + p);
  }
  return r;
}
class mp {
  constructor() {
    this.handlers = [];
  }
  use(u, f, o) {
    return (
      this.handlers.push({
        fulfilled: u,
        rejected: f,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(u) {
    this.handlers[u] && (this.handlers[u] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(u) {
    z.forEach(this.handlers, function (o) {
      o !== null && u(o);
    });
  }
}
const Wp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  B_ = typeof URLSearchParams < "u" ? URLSearchParams : qh,
  j_ = typeof FormData < "u" ? FormData : null,
  q_ = typeof Blob < "u" ? Blob : null,
  $_ = {
    isBrowser: !0,
    classes: { URLSearchParams: B_, FormData: j_, Blob: q_ },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  $h = typeof window < "u" && typeof document < "u",
  Nh = (typeof navigator == "object" && navigator) || void 0,
  Y_ =
    $h &&
    (!Nh || ["ReactNative", "NativeScript", "NS"].indexOf(Nh.product) < 0),
  V_ =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  G_ = ($h && window.location.href) || "http://localhost",
  k_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: $h,
        hasStandardBrowserEnv: Y_,
        hasStandardBrowserWebWorkerEnv: V_,
        navigator: Nh,
        origin: G_,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ke = { ...k_, ...$_ };
function K_(r, u) {
  return Mf(r, new Ke.classes.URLSearchParams(), {
    visitor: function (f, o, h, p) {
      return Ke.isNode && z.isBuffer(f)
        ? (this.append(o, f.toString("base64")), !1)
        : p.defaultVisitor.apply(this, arguments);
    },
    ...u,
  });
}
function X_(r) {
  return z
    .matchAll(/\w+|\[(\w*)]/g, r)
    .map((u) => (u[0] === "[]" ? "" : u[1] || u[0]));
}
function Q_(r) {
  const u = {},
    f = Object.keys(r);
  let o;
  const h = f.length;
  let p;
  for (o = 0; o < h; o++) (p = f[o]), (u[p] = r[p]);
  return u;
}
function Pp(r) {
  function u(f, o, h, p) {
    let y = f[p++];
    if (y === "__proto__") return !0;
    const T = Number.isFinite(+y),
      E = p >= f.length;
    return (
      (y = !y && z.isArray(h) ? h.length : y),
      E
        ? (z.hasOwnProp(h, y) ? (h[y] = [h[y], o]) : (h[y] = o), !T)
        : ((!h[y] || !z.isObject(h[y])) && (h[y] = []),
          u(f, o, h[y], p) && z.isArray(h[y]) && (h[y] = Q_(h[y])),
          !T)
    );
  }
  if (z.isFormData(r) && z.isFunction(r.entries)) {
    const f = {};
    return (
      z.forEachEntry(r, (o, h) => {
        u(X_(o), h, f, 0);
      }),
      f
    );
  }
  return null;
}
function Z_(r, u, f) {
  if (z.isString(r))
    try {
      return (u || JSON.parse)(r), z.trim(r);
    } catch (o) {
      if (o.name !== "SyntaxError") throw o;
    }
  return (f || JSON.stringify)(r);
}
const co = {
  transitional: Wp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (u, f) {
      const o = f.getContentType() || "",
        h = o.indexOf("application/json") > -1,
        p = z.isObject(u);
      if ((p && z.isHTMLForm(u) && (u = new FormData(u)), z.isFormData(u)))
        return h ? JSON.stringify(Pp(u)) : u;
      if (
        z.isArrayBuffer(u) ||
        z.isBuffer(u) ||
        z.isStream(u) ||
        z.isFile(u) ||
        z.isBlob(u) ||
        z.isReadableStream(u)
      )
        return u;
      if (z.isArrayBufferView(u)) return u.buffer;
      if (z.isURLSearchParams(u))
        return (
          f.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          u.toString()
        );
      let T;
      if (p) {
        if (o.indexOf("application/x-www-form-urlencoded") > -1)
          return K_(u, this.formSerializer).toString();
        if ((T = z.isFileList(u)) || o.indexOf("multipart/form-data") > -1) {
          const E = this.env && this.env.FormData;
          return Mf(
            T ? { "files[]": u } : u,
            E && new E(),
            this.formSerializer
          );
        }
      }
      return p || h ? (f.setContentType("application/json", !1), Z_(u)) : u;
    },
  ],
  transformResponse: [
    function (u) {
      const f = this.transitional || co.transitional,
        o = f && f.forcedJSONParsing,
        h = this.responseType === "json";
      if (z.isResponse(u) || z.isReadableStream(u)) return u;
      if (u && z.isString(u) && ((o && !this.responseType) || h)) {
        const y = !(f && f.silentJSONParsing) && h;
        try {
          return JSON.parse(u);
        } catch (T) {
          if (y)
            throw T.name === "SyntaxError"
              ? _t.from(T, _t.ERR_BAD_RESPONSE, this, null, this.response)
              : T;
        }
      }
      return u;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ke.classes.FormData, Blob: Ke.classes.Blob },
  validateStatus: function (u) {
    return u >= 200 && u < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  co.headers[r] = {};
});
const J_ = z.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  F_ = (r) => {
    const u = {};
    let f, o, h;
    return (
      r &&
        r
          .split(
            `
`
          )
          .forEach(function (y) {
            (h = y.indexOf(":")),
              (f = y.substring(0, h).trim().toLowerCase()),
              (o = y.substring(h + 1).trim()),
              !(!f || (u[f] && J_[f])) &&
                (f === "set-cookie"
                  ? u[f]
                    ? u[f].push(o)
                    : (u[f] = [o])
                  : (u[f] = u[f] ? u[f] + ", " + o : o));
          }),
      u
    );
  },
  pp = Symbol("internals");
function to(r) {
  return r && String(r).trim().toLowerCase();
}
function bf(r) {
  return r === !1 || r == null ? r : z.isArray(r) ? r.map(bf) : String(r);
}
function W_(r) {
  const u = Object.create(null),
    f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; (o = f.exec(r)); ) u[o[1]] = o[2];
  return u;
}
const P_ = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function yh(r, u, f, o, h) {
  if (z.isFunction(o)) return o.call(this, u, f);
  if ((h && (u = f), !!z.isString(u))) {
    if (z.isString(o)) return u.indexOf(o) !== -1;
    if (z.isRegExp(o)) return o.test(u);
  }
}
function I_(r) {
  return r
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (u, f, o) => f.toUpperCase() + o);
}
function tE(r, u) {
  const f = z.toCamelCase(" " + u);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(r, o + f, {
      value: function (h, p, y) {
        return this[o].call(this, u, h, p, y);
      },
      configurable: !0,
    });
  });
}
let mn = class {
  constructor(u) {
    u && this.set(u);
  }
  set(u, f, o) {
    const h = this;
    function p(T, E, _) {
      const A = to(E);
      if (!A) throw new Error("header name must be a non-empty string");
      const U = z.findKey(h, A);
      (!U || h[U] === void 0 || _ === !0 || (_ === void 0 && h[U] !== !1)) &&
        (h[U || E] = bf(T));
    }
    const y = (T, E) => z.forEach(T, (_, A) => p(_, A, E));
    if (z.isPlainObject(u) || u instanceof this.constructor) y(u, f);
    else if (z.isString(u) && (u = u.trim()) && !P_(u)) y(F_(u), f);
    else if (z.isObject(u) && z.isIterable(u)) {
      let T = {},
        E,
        _;
      for (const A of u) {
        if (!z.isArray(A))
          throw TypeError("Object iterator must return a key-value pair");
        T[(_ = A[0])] = (E = T[_])
          ? z.isArray(E)
            ? [...E, A[1]]
            : [E, A[1]]
          : A[1];
      }
      y(T, f);
    } else u != null && p(f, u, o);
    return this;
  }
  get(u, f) {
    if (((u = to(u)), u)) {
      const o = z.findKey(this, u);
      if (o) {
        const h = this[o];
        if (!f) return h;
        if (f === !0) return W_(h);
        if (z.isFunction(f)) return f.call(this, h, o);
        if (z.isRegExp(f)) return f.exec(h);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(u, f) {
    if (((u = to(u)), u)) {
      const o = z.findKey(this, u);
      return !!(o && this[o] !== void 0 && (!f || yh(this, this[o], o, f)));
    }
    return !1;
  }
  delete(u, f) {
    const o = this;
    let h = !1;
    function p(y) {
      if (((y = to(y)), y)) {
        const T = z.findKey(o, y);
        T && (!f || yh(o, o[T], T, f)) && (delete o[T], (h = !0));
      }
    }
    return z.isArray(u) ? u.forEach(p) : p(u), h;
  }
  clear(u) {
    const f = Object.keys(this);
    let o = f.length,
      h = !1;
    for (; o--; ) {
      const p = f[o];
      (!u || yh(this, this[p], p, u, !0)) && (delete this[p], (h = !0));
    }
    return h;
  }
  normalize(u) {
    const f = this,
      o = {};
    return (
      z.forEach(this, (h, p) => {
        const y = z.findKey(o, p);
        if (y) {
          (f[y] = bf(h)), delete f[p];
          return;
        }
        const T = u ? I_(p) : String(p).trim();
        T !== p && delete f[p], (f[T] = bf(h)), (o[T] = !0);
      }),
      this
    );
  }
  concat(...u) {
    return this.constructor.concat(this, ...u);
  }
  toJSON(u) {
    const f = Object.create(null);
    return (
      z.forEach(this, (o, h) => {
        o != null && o !== !1 && (f[h] = u && z.isArray(o) ? o.join(", ") : o);
      }),
      f
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([u, f]) => u + ": " + f).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(u) {
    return u instanceof this ? u : new this(u);
  }
  static concat(u, ...f) {
    const o = new this(u);
    return f.forEach((h) => o.set(h)), o;
  }
  static accessor(u) {
    const o = (this[pp] = this[pp] = { accessors: {} }).accessors,
      h = this.prototype;
    function p(y) {
      const T = to(y);
      o[T] || (tE(h, y), (o[T] = !0));
    }
    return z.isArray(u) ? u.forEach(p) : p(u), this;
  }
};
mn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
z.reduceDescriptors(mn.prototype, ({ value: r }, u) => {
  let f = u[0].toUpperCase() + u.slice(1);
  return {
    get: () => r,
    set(o) {
      this[f] = o;
    },
  };
});
z.freezeMethods(mn);
function _h(r, u) {
  const f = this || co,
    o = u || f,
    h = mn.from(o.headers);
  let p = o.data;
  return (
    z.forEach(r, function (T) {
      p = T.call(f, p, h.normalize(), u ? u.status : void 0);
    }),
    h.normalize(),
    p
  );
}
function Ip(r) {
  return !!(r && r.__CANCEL__);
}
function bs(r, u, f) {
  _t.call(this, r ?? "canceled", _t.ERR_CANCELED, u, f),
    (this.name = "CanceledError");
}
z.inherits(bs, _t, { __CANCEL__: !0 });
function tg(r, u, f) {
  const o = f.config.validateStatus;
  !f.status || !o || o(f.status)
    ? r(f)
    : u(
        new _t(
          "Request failed with status code " + f.status,
          [_t.ERR_BAD_REQUEST, _t.ERR_BAD_RESPONSE][
            Math.floor(f.status / 100) - 4
          ],
          f.config,
          f.request,
          f
        )
      );
}
function eE(r) {
  const u = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return (u && u[1]) || "";
}
function nE(r, u) {
  r = r || 10;
  const f = new Array(r),
    o = new Array(r);
  let h = 0,
    p = 0,
    y;
  return (
    (u = u !== void 0 ? u : 1e3),
    function (E) {
      const _ = Date.now(),
        A = o[p];
      y || (y = _), (f[h] = E), (o[h] = _);
      let U = p,
        V = 0;
      for (; U !== h; ) (V += f[U++]), (U = U % r);
      if (((h = (h + 1) % r), h === p && (p = (p + 1) % r), _ - y < u)) return;
      const P = A && _ - A;
      return P ? Math.round((V * 1e3) / P) : void 0;
    }
  );
}
function aE(r, u) {
  let f = 0,
    o = 1e3 / u,
    h,
    p;
  const y = (_, A = Date.now()) => {
    (f = A), (h = null), p && (clearTimeout(p), (p = null)), r(..._);
  };
  return [
    (..._) => {
      const A = Date.now(),
        U = A - f;
      U >= o
        ? y(_, A)
        : ((h = _),
          p ||
            (p = setTimeout(() => {
              (p = null), y(h);
            }, o - U)));
    },
    () => h && y(h),
  ];
}
const Af = (r, u, f = 3) => {
    let o = 0;
    const h = nE(50, 250);
    return aE((p) => {
      const y = p.loaded,
        T = p.lengthComputable ? p.total : void 0,
        E = y - o,
        _ = h(E),
        A = y <= T;
      o = y;
      const U = {
        loaded: y,
        total: T,
        progress: T ? y / T : void 0,
        bytes: E,
        rate: _ || void 0,
        estimated: _ && T && A ? (T - y) / _ : void 0,
        event: p,
        lengthComputable: T != null,
        [u ? "download" : "upload"]: !0,
      };
      r(U);
    }, f);
  },
  gp = (r, u) => {
    const f = r != null;
    return [(o) => u[0]({ lengthComputable: f, total: r, loaded: o }), u[1]];
  },
  vp =
    (r) =>
    (...u) =>
      z.asap(() => r(...u)),
  lE = Ke.hasStandardBrowserEnv
    ? ((r, u) => (f) => (
        (f = new URL(f, Ke.origin)),
        r.protocol === f.protocol &&
          r.host === f.host &&
          (u || r.port === f.port)
      ))(
        new URL(Ke.origin),
        Ke.navigator && /(msie|trident)/i.test(Ke.navigator.userAgent)
      )
    : () => !0,
  iE = Ke.hasStandardBrowserEnv
    ? {
        write(r, u, f, o, h, p) {
          const y = [r + "=" + encodeURIComponent(u)];
          z.isNumber(f) && y.push("expires=" + new Date(f).toGMTString()),
            z.isString(o) && y.push("path=" + o),
            z.isString(h) && y.push("domain=" + h),
            p === !0 && y.push("secure"),
            (document.cookie = y.join("; "));
        },
        read(r) {
          const u = document.cookie.match(
            new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
          );
          return u ? decodeURIComponent(u[3]) : null;
        },
        remove(r) {
          this.write(r, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function rE(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function sE(r, u) {
  return u ? r.replace(/\/?\/$/, "") + "/" + u.replace(/^\/+/, "") : r;
}
function eg(r, u, f) {
  let o = !rE(u);
  return r && (o || f == !1) ? sE(r, u) : u;
}
const yp = (r) => (r instanceof mn ? { ...r } : r);
function nr(r, u) {
  u = u || {};
  const f = {};
  function o(_, A, U, V) {
    return z.isPlainObject(_) && z.isPlainObject(A)
      ? z.merge.call({ caseless: V }, _, A)
      : z.isPlainObject(A)
      ? z.merge({}, A)
      : z.isArray(A)
      ? A.slice()
      : A;
  }
  function h(_, A, U, V) {
    if (z.isUndefined(A)) {
      if (!z.isUndefined(_)) return o(void 0, _, U, V);
    } else return o(_, A, U, V);
  }
  function p(_, A) {
    if (!z.isUndefined(A)) return o(void 0, A);
  }
  function y(_, A) {
    if (z.isUndefined(A)) {
      if (!z.isUndefined(_)) return o(void 0, _);
    } else return o(void 0, A);
  }
  function T(_, A, U) {
    if (U in u) return o(_, A);
    if (U in r) return o(void 0, _);
  }
  const E = {
    url: p,
    method: p,
    data: p,
    baseURL: y,
    transformRequest: y,
    transformResponse: y,
    paramsSerializer: y,
    timeout: y,
    timeoutMessage: y,
    withCredentials: y,
    withXSRFToken: y,
    adapter: y,
    responseType: y,
    xsrfCookieName: y,
    xsrfHeaderName: y,
    onUploadProgress: y,
    onDownloadProgress: y,
    decompress: y,
    maxContentLength: y,
    maxBodyLength: y,
    beforeRedirect: y,
    transport: y,
    httpAgent: y,
    httpsAgent: y,
    cancelToken: y,
    socketPath: y,
    responseEncoding: y,
    validateStatus: T,
    headers: (_, A, U) => h(yp(_), yp(A), U, !0),
  };
  return (
    z.forEach(Object.keys({ ...r, ...u }), function (A) {
      const U = E[A] || h,
        V = U(r[A], u[A], A);
      (z.isUndefined(V) && U !== T) || (f[A] = V);
    }),
    f
  );
}
const ng = (r) => {
    const u = nr({}, r);
    let {
      data: f,
      withXSRFToken: o,
      xsrfHeaderName: h,
      xsrfCookieName: p,
      headers: y,
      auth: T,
    } = u;
    (u.headers = y = mn.from(y)),
      (u.url = Fp(
        eg(u.baseURL, u.url, u.allowAbsoluteUrls),
        r.params,
        r.paramsSerializer
      )),
      T &&
        y.set(
          "Authorization",
          "Basic " +
            btoa(
              (T.username || "") +
                ":" +
                (T.password ? unescape(encodeURIComponent(T.password)) : "")
            )
        );
    let E;
    if (z.isFormData(f)) {
      if (Ke.hasStandardBrowserEnv || Ke.hasStandardBrowserWebWorkerEnv)
        y.setContentType(void 0);
      else if ((E = y.getContentType()) !== !1) {
        const [_, ...A] = E
          ? E.split(";")
              .map((U) => U.trim())
              .filter(Boolean)
          : [];
        y.setContentType([_ || "multipart/form-data", ...A].join("; "));
      }
    }
    if (
      Ke.hasStandardBrowserEnv &&
      (o && z.isFunction(o) && (o = o(u)), o || (o !== !1 && lE(u.url)))
    ) {
      const _ = h && p && iE.read(p);
      _ && y.set(h, _);
    }
    return u;
  },
  uE = typeof XMLHttpRequest < "u",
  oE =
    uE &&
    function (r) {
      return new Promise(function (f, o) {
        const h = ng(r);
        let p = h.data;
        const y = mn.from(h.headers).normalize();
        let { responseType: T, onUploadProgress: E, onDownloadProgress: _ } = h,
          A,
          U,
          V,
          P,
          G;
        function Q() {
          P && P(),
            G && G(),
            h.cancelToken && h.cancelToken.unsubscribe(A),
            h.signal && h.signal.removeEventListener("abort", A);
        }
        let k = new XMLHttpRequest();
        k.open(h.method.toUpperCase(), h.url, !0), (k.timeout = h.timeout);
        function Z() {
          if (!k) return;
          const at = mn.from(
              "getAllResponseHeaders" in k && k.getAllResponseHeaders()
            ),
            rt = {
              data:
                !T || T === "text" || T === "json"
                  ? k.responseText
                  : k.response,
              status: k.status,
              statusText: k.statusText,
              headers: at,
              config: r,
              request: k,
            };
          tg(
            function (At) {
              f(At), Q();
            },
            function (At) {
              o(At), Q();
            },
            rt
          ),
            (k = null);
        }
        "onloadend" in k
          ? (k.onloadend = Z)
          : (k.onreadystatechange = function () {
              !k ||
                k.readyState !== 4 ||
                (k.status === 0 &&
                  !(k.responseURL && k.responseURL.indexOf("file:") === 0)) ||
                setTimeout(Z);
            }),
          (k.onabort = function () {
            k &&
              (o(new _t("Request aborted", _t.ECONNABORTED, r, k)), (k = null));
          }),
          (k.onerror = function () {
            o(new _t("Network Error", _t.ERR_NETWORK, r, k)), (k = null);
          }),
          (k.ontimeout = function () {
            let Rt = h.timeout
              ? "timeout of " + h.timeout + "ms exceeded"
              : "timeout exceeded";
            const rt = h.transitional || Wp;
            h.timeoutErrorMessage && (Rt = h.timeoutErrorMessage),
              o(
                new _t(
                  Rt,
                  rt.clarifyTimeoutError ? _t.ETIMEDOUT : _t.ECONNABORTED,
                  r,
                  k
                )
              ),
              (k = null);
          }),
          p === void 0 && y.setContentType(null),
          "setRequestHeader" in k &&
            z.forEach(y.toJSON(), function (Rt, rt) {
              k.setRequestHeader(rt, Rt);
            }),
          z.isUndefined(h.withCredentials) ||
            (k.withCredentials = !!h.withCredentials),
          T && T !== "json" && (k.responseType = h.responseType),
          _ && (([V, G] = Af(_, !0)), k.addEventListener("progress", V)),
          E &&
            k.upload &&
            (([U, P] = Af(E)),
            k.upload.addEventListener("progress", U),
            k.upload.addEventListener("loadend", P)),
          (h.cancelToken || h.signal) &&
            ((A = (at) => {
              k &&
                (o(!at || at.type ? new bs(null, r, k) : at),
                k.abort(),
                (k = null));
            }),
            h.cancelToken && h.cancelToken.subscribe(A),
            h.signal &&
              (h.signal.aborted ? A() : h.signal.addEventListener("abort", A)));
        const st = eE(h.url);
        if (st && Ke.protocols.indexOf(st) === -1) {
          o(new _t("Unsupported protocol " + st + ":", _t.ERR_BAD_REQUEST, r));
          return;
        }
        k.send(p || null);
      });
    },
  cE = (r, u) => {
    const { length: f } = (r = r ? r.filter(Boolean) : []);
    if (u || f) {
      let o = new AbortController(),
        h;
      const p = function (_) {
        if (!h) {
          (h = !0), T();
          const A = _ instanceof Error ? _ : this.reason;
          o.abort(
            A instanceof _t ? A : new bs(A instanceof Error ? A.message : A)
          );
        }
      };
      let y =
        u &&
        setTimeout(() => {
          (y = null), p(new _t(`timeout ${u} of ms exceeded`, _t.ETIMEDOUT));
        }, u);
      const T = () => {
        r &&
          (y && clearTimeout(y),
          (y = null),
          r.forEach((_) => {
            _.unsubscribe
              ? _.unsubscribe(p)
              : _.removeEventListener("abort", p);
          }),
          (r = null));
      };
      r.forEach((_) => _.addEventListener("abort", p));
      const { signal: E } = o;
      return (E.unsubscribe = () => z.asap(T)), E;
    }
  },
  fE = function* (r, u) {
    let f = r.byteLength;
    if (f < u) {
      yield r;
      return;
    }
    let o = 0,
      h;
    for (; o < f; ) (h = o + u), yield r.slice(o, h), (o = h);
  },
  dE = async function* (r, u) {
    for await (const f of hE(r)) yield* fE(f, u);
  },
  hE = async function* (r) {
    if (r[Symbol.asyncIterator]) {
      yield* r;
      return;
    }
    const u = r.getReader();
    try {
      for (;;) {
        const { done: f, value: o } = await u.read();
        if (f) break;
        yield o;
      }
    } finally {
      await u.cancel();
    }
  },
  _p = (r, u, f, o) => {
    const h = dE(r, u);
    let p = 0,
      y,
      T = (E) => {
        y || ((y = !0), o && o(E));
      };
    return new ReadableStream(
      {
        async pull(E) {
          try {
            const { done: _, value: A } = await h.next();
            if (_) {
              T(), E.close();
              return;
            }
            let U = A.byteLength;
            if (f) {
              let V = (p += U);
              f(V);
            }
            E.enqueue(new Uint8Array(A));
          } catch (_) {
            throw (T(_), _);
          }
        },
        cancel(E) {
          return T(E), h.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Lf =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  ag = Lf && typeof ReadableStream == "function",
  mE =
    Lf &&
    (typeof TextEncoder == "function"
      ? (
          (r) => (u) =>
            r.encode(u)
        )(new TextEncoder())
      : async (r) => new Uint8Array(await new Response(r).arrayBuffer())),
  lg = (r, ...u) => {
    try {
      return !!r(...u);
    } catch {
      return !1;
    }
  },
  pE =
    ag &&
    lg(() => {
      let r = !1;
      const u = new Request(Ke.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (r = !0), "half";
        },
      }).headers.has("Content-Type");
      return r && !u;
    }),
  Ep = 64 * 1024,
  Dh = ag && lg(() => z.isReadableStream(new Response("").body)),
  Of = { stream: Dh && ((r) => r.body) };
Lf &&
  ((r) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((u) => {
      !Of[u] &&
        (Of[u] = z.isFunction(r[u])
          ? (f) => f[u]()
          : (f, o) => {
              throw new _t(
                `Response type '${u}' is not supported`,
                _t.ERR_NOT_SUPPORT,
                o
              );
            });
    });
  })(new Response());
const gE = async (r) => {
    if (r == null) return 0;
    if (z.isBlob(r)) return r.size;
    if (z.isSpecCompliantForm(r))
      return (
        await new Request(Ke.origin, { method: "POST", body: r }).arrayBuffer()
      ).byteLength;
    if (z.isArrayBufferView(r) || z.isArrayBuffer(r)) return r.byteLength;
    if ((z.isURLSearchParams(r) && (r = r + ""), z.isString(r)))
      return (await mE(r)).byteLength;
  },
  vE = async (r, u) => {
    const f = z.toFiniteNumber(r.getContentLength());
    return f ?? gE(u);
  },
  yE =
    Lf &&
    (async (r) => {
      let {
        url: u,
        method: f,
        data: o,
        signal: h,
        cancelToken: p,
        timeout: y,
        onDownloadProgress: T,
        onUploadProgress: E,
        responseType: _,
        headers: A,
        withCredentials: U = "same-origin",
        fetchOptions: V,
      } = ng(r);
      _ = _ ? (_ + "").toLowerCase() : "text";
      let P = cE([h, p && p.toAbortSignal()], y),
        G;
      const Q =
        P &&
        P.unsubscribe &&
        (() => {
          P.unsubscribe();
        });
      let k;
      try {
        if (
          E &&
          pE &&
          f !== "get" &&
          f !== "head" &&
          (k = await vE(A, o)) !== 0
        ) {
          let rt = new Request(u, { method: "POST", body: o, duplex: "half" }),
            Tt;
          if (
            (z.isFormData(o) &&
              (Tt = rt.headers.get("content-type")) &&
              A.setContentType(Tt),
            rt.body)
          ) {
            const [At, Nt] = gp(k, Af(vp(E)));
            o = _p(rt.body, Ep, At, Nt);
          }
        }
        z.isString(U) || (U = U ? "include" : "omit");
        const Z = "credentials" in Request.prototype;
        G = new Request(u, {
          ...V,
          signal: P,
          method: f.toUpperCase(),
          headers: A.normalize().toJSON(),
          body: o,
          duplex: "half",
          credentials: Z ? U : void 0,
        });
        let st = await fetch(G, V);
        const at = Dh && (_ === "stream" || _ === "response");
        if (Dh && (T || (at && Q))) {
          const rt = {};
          ["status", "statusText", "headers"].forEach((Kt) => {
            rt[Kt] = st[Kt];
          });
          const Tt = z.toFiniteNumber(st.headers.get("content-length")),
            [At, Nt] = (T && gp(Tt, Af(vp(T), !0))) || [];
          st = new Response(
            _p(st.body, Ep, At, () => {
              Nt && Nt(), Q && Q();
            }),
            rt
          );
        }
        _ = _ || "text";
        let Rt = await Of[z.findKey(Of, _) || "text"](st, r);
        return (
          !at && Q && Q(),
          await new Promise((rt, Tt) => {
            tg(rt, Tt, {
              data: Rt,
              headers: mn.from(st.headers),
              status: st.status,
              statusText: st.statusText,
              config: r,
              request: G,
            });
          })
        );
      } catch (Z) {
        throw (
          (Q && Q(),
          Z && Z.name === "TypeError" && /Load failed|fetch/i.test(Z.message)
            ? Object.assign(new _t("Network Error", _t.ERR_NETWORK, r, G), {
                cause: Z.cause || Z,
              })
            : _t.from(Z, Z && Z.code, r, G))
        );
      }
    }),
  Rh = { http: L_, xhr: oE, fetch: yE };
z.forEach(Rh, (r, u) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: u });
    } catch {}
    Object.defineProperty(r, "adapterName", { value: u });
  }
});
const bp = (r) => `- ${r}`,
  _E = (r) => z.isFunction(r) || r === null || r === !1,
  ig = {
    getAdapter: (r) => {
      r = z.isArray(r) ? r : [r];
      const { length: u } = r;
      let f, o;
      const h = {};
      for (let p = 0; p < u; p++) {
        f = r[p];
        let y;
        if (
          ((o = f),
          !_E(f) && ((o = Rh[(y = String(f)).toLowerCase()]), o === void 0))
        )
          throw new _t(`Unknown adapter '${y}'`);
        if (o) break;
        h[y || "#" + p] = o;
      }
      if (!o) {
        const p = Object.entries(h).map(
          ([T, E]) =>
            `adapter ${T} ` +
            (E === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let y = u
          ? p.length > 1
            ? `since :
` +
              p.map(bp).join(`
`)
            : " " + bp(p[0])
          : "as no adapter specified";
        throw new _t(
          "There is no suitable adapter to dispatch the request " + y,
          "ERR_NOT_SUPPORT"
        );
      }
      return o;
    },
    adapters: Rh,
  };
function Eh(r) {
  if (
    (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
  )
    throw new bs(null, r);
}
function Sp(r) {
  return (
    Eh(r),
    (r.headers = mn.from(r.headers)),
    (r.data = _h.call(r, r.transformRequest)),
    ["post", "put", "patch"].indexOf(r.method) !== -1 &&
      r.headers.setContentType("application/x-www-form-urlencoded", !1),
    ig
      .getAdapter(r.adapter || co.adapter)(r)
      .then(
        function (o) {
          return (
            Eh(r),
            (o.data = _h.call(r, r.transformResponse, o)),
            (o.headers = mn.from(o.headers)),
            o
          );
        },
        function (o) {
          return (
            Ip(o) ||
              (Eh(r),
              o &&
                o.response &&
                ((o.response.data = _h.call(
                  r,
                  r.transformResponse,
                  o.response
                )),
                (o.response.headers = mn.from(o.response.headers)))),
            Promise.reject(o)
          );
        }
      )
  );
}
const rg = "1.11.0",
  Uf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (r, u) => {
    Uf[r] = function (o) {
      return typeof o === r || "a" + (u < 1 ? "n " : " ") + r;
    };
  }
);
const Tp = {};
Uf.transitional = function (u, f, o) {
  function h(p, y) {
    return (
      "[Axios v" +
      rg +
      "] Transitional option '" +
      p +
      "'" +
      y +
      (o ? ". " + o : "")
    );
  }
  return (p, y, T) => {
    if (u === !1)
      throw new _t(
        h(y, " has been removed" + (f ? " in " + f : "")),
        _t.ERR_DEPRECATED
      );
    return (
      f &&
        !Tp[y] &&
        ((Tp[y] = !0),
        console.warn(
          h(
            y,
            " has been deprecated since v" +
              f +
              " and will be removed in the near future"
          )
        )),
      u ? u(p, y, T) : !0
    );
  };
};
Uf.spelling = function (u) {
  return (f, o) => (console.warn(`${o} is likely a misspelling of ${u}`), !0);
};
function EE(r, u, f) {
  if (typeof r != "object")
    throw new _t("options must be an object", _t.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(r);
  let h = o.length;
  for (; h-- > 0; ) {
    const p = o[h],
      y = u[p];
    if (y) {
      const T = r[p],
        E = T === void 0 || y(T, p, r);
      if (E !== !0)
        throw new _t("option " + p + " must be " + E, _t.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0) throw new _t("Unknown option " + p, _t.ERR_BAD_OPTION);
  }
}
const Sf = { assertOptions: EE, validators: Uf },
  za = Sf.validators;
let er = class {
  constructor(u) {
    (this.defaults = u || {}),
      (this.interceptors = { request: new mp(), response: new mp() });
  }
  async request(u, f) {
    try {
      return await this._request(u, f);
    } catch (o) {
      if (o instanceof Error) {
        let h = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(h)
          : (h = new Error());
        const p = h.stack ? h.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack
            ? p &&
              !String(o.stack).endsWith(p.replace(/^.+\n.+\n/, "")) &&
              (o.stack +=
                `
` + p)
            : (o.stack = p);
        } catch {}
      }
      throw o;
    }
  }
  _request(u, f) {
    typeof u == "string" ? ((f = f || {}), (f.url = u)) : (f = u || {}),
      (f = nr(this.defaults, f));
    const { transitional: o, paramsSerializer: h, headers: p } = f;
    o !== void 0 &&
      Sf.assertOptions(
        o,
        {
          silentJSONParsing: za.transitional(za.boolean),
          forcedJSONParsing: za.transitional(za.boolean),
          clarifyTimeoutError: za.transitional(za.boolean),
        },
        !1
      ),
      h != null &&
        (z.isFunction(h)
          ? (f.paramsSerializer = { serialize: h })
          : Sf.assertOptions(
              h,
              { encode: za.function, serialize: za.function },
              !0
            )),
      f.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (f.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (f.allowAbsoluteUrls = !0)),
      Sf.assertOptions(
        f,
        {
          baseUrl: za.spelling("baseURL"),
          withXsrfToken: za.spelling("withXSRFToken"),
        },
        !0
      ),
      (f.method = (f.method || this.defaults.method || "get").toLowerCase());
    let y = p && z.merge(p.common, p[f.method]);
    p &&
      z.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (G) => {
          delete p[G];
        }
      ),
      (f.headers = mn.concat(y, p));
    const T = [];
    let E = !0;
    this.interceptors.request.forEach(function (Q) {
      (typeof Q.runWhen == "function" && Q.runWhen(f) === !1) ||
        ((E = E && Q.synchronous), T.unshift(Q.fulfilled, Q.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function (Q) {
      _.push(Q.fulfilled, Q.rejected);
    });
    let A,
      U = 0,
      V;
    if (!E) {
      const G = [Sp.bind(this), void 0];
      for (
        G.unshift(...T), G.push(..._), V = G.length, A = Promise.resolve(f);
        U < V;

      )
        A = A.then(G[U++], G[U++]);
      return A;
    }
    V = T.length;
    let P = f;
    for (U = 0; U < V; ) {
      const G = T[U++],
        Q = T[U++];
      try {
        P = G(P);
      } catch (k) {
        Q.call(this, k);
        break;
      }
    }
    try {
      A = Sp.call(this, P);
    } catch (G) {
      return Promise.reject(G);
    }
    for (U = 0, V = _.length; U < V; ) A = A.then(_[U++], _[U++]);
    return A;
  }
  getUri(u) {
    u = nr(this.defaults, u);
    const f = eg(u.baseURL, u.url, u.allowAbsoluteUrls);
    return Fp(f, u.params, u.paramsSerializer);
  }
};
z.forEach(["delete", "get", "head", "options"], function (u) {
  er.prototype[u] = function (f, o) {
    return this.request(
      nr(o || {}, { method: u, url: f, data: (o || {}).data })
    );
  };
});
z.forEach(["post", "put", "patch"], function (u) {
  function f(o) {
    return function (p, y, T) {
      return this.request(
        nr(T || {}, {
          method: u,
          headers: o ? { "Content-Type": "multipart/form-data" } : {},
          url: p,
          data: y,
        })
      );
    };
  }
  (er.prototype[u] = f()), (er.prototype[u + "Form"] = f(!0));
});
let bE = class sg {
  constructor(u) {
    if (typeof u != "function")
      throw new TypeError("executor must be a function.");
    let f;
    this.promise = new Promise(function (p) {
      f = p;
    });
    const o = this;
    this.promise.then((h) => {
      if (!o._listeners) return;
      let p = o._listeners.length;
      for (; p-- > 0; ) o._listeners[p](h);
      o._listeners = null;
    }),
      (this.promise.then = (h) => {
        let p;
        const y = new Promise((T) => {
          o.subscribe(T), (p = T);
        }).then(h);
        return (
          (y.cancel = function () {
            o.unsubscribe(p);
          }),
          y
        );
      }),
      u(function (p, y, T) {
        o.reason || ((o.reason = new bs(p, y, T)), f(o.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(u) {
    if (this.reason) {
      u(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(u) : (this._listeners = [u]);
  }
  unsubscribe(u) {
    if (!this._listeners) return;
    const f = this._listeners.indexOf(u);
    f !== -1 && this._listeners.splice(f, 1);
  }
  toAbortSignal() {
    const u = new AbortController(),
      f = (o) => {
        u.abort(o);
      };
    return (
      this.subscribe(f),
      (u.signal.unsubscribe = () => this.unsubscribe(f)),
      u.signal
    );
  }
  static source() {
    let u;
    return {
      token: new sg(function (h) {
        u = h;
      }),
      cancel: u,
    };
  }
};
function SE(r) {
  return function (f) {
    return r.apply(null, f);
  };
}
function TE(r) {
  return z.isObject(r) && r.isAxiosError === !0;
}
const Ch = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ch).forEach(([r, u]) => {
  Ch[u] = r;
});
function ug(r) {
  const u = new er(r),
    f = jp(er.prototype.request, u);
  return (
    z.extend(f, er.prototype, u, { allOwnKeys: !0 }),
    z.extend(f, u, null, { allOwnKeys: !0 }),
    (f.create = function (h) {
      return ug(nr(r, h));
    }),
    f
  );
}
const It = ug(co);
It.Axios = er;
It.CanceledError = bs;
It.CancelToken = bE;
It.isCancel = Ip;
It.VERSION = rg;
It.toFormData = Mf;
It.AxiosError = _t;
It.Cancel = It.CanceledError;
It.all = function (u) {
  return Promise.all(u);
};
It.spread = SE;
It.isAxiosError = TE;
It.mergeConfig = nr;
It.AxiosHeaders = mn;
It.formToJSON = (r) => Pp(z.isHTMLForm(r) ? new FormData(r) : r);
It.getAdapter = ig.getAdapter;
It.HttpStatusCode = Ch;
It.default = It;
const {
    Axios: HE,
    AxiosError: BE,
    CanceledError: jE,
    isCancel: qE,
    CancelToken: $E,
    VERSION: YE,
    all: VE,
    Cancel: GE,
    isAxiosError: kE,
    spread: KE,
    toFormData: XE,
    AxiosHeaders: QE,
    HttpStatusCode: ZE,
    formToJSON: JE,
    getAdapter: FE,
    mergeConfig: WE,
  } = It,
  AE = ({ id: r }) => {
    const u = () => {
      It.delete(`https://685c4d07769de2bf085c58e4.mockapi.io/Task/${r}`).then(
        () => {
          It.get("https://685c4d07769de2bf085c58e4.mockapi.io/Task");
        }
      );
    };
    return J.jsx(J.Fragment, {
      children: J.jsx("button", {
        className: "btn btn-danger",
        onClick: () => {
          u();
        },
        children: "Delete",
      }),
    });
  },
  OE = ({ item: r }) => {
    const [u, f] = H.useState(r.isDone || !1);
    return J.jsx(J.Fragment, {
      children: J.jsxs("div", {
        className: "bg-gray-600 p-4 rounded-[10px] m-3",
        children: [
          J.jsxs("div", {
            children: [
              J.jsx("label", {
                htmlFor: `object${r.id}`,
                className: u
                  ? "cursor-pointer text-2xl text-white inline-block line-through mr-2"
                  : "cursor-pointer text-2xl text-white inline-block mr-2",
                children: r.object,
              }),
              J.jsx("input", {
                type: "checkbox",
                id: `object${r.id}`,
                checked: u,
                onChange: () => f(!u),
              }),
            ],
          }),
          J.jsx("div", {
            className: "p-3 rounded-2xl bg-gray-400 m-3",
            children: r.descrption,
          }),
          J.jsx(AE, { id: r.id }),
          J.jsx(Rf, {
            className: "btn btn-info text-white mx-2",
            to: `/Edit/${r.id}`,
            children: "Edit",
          }),
        ],
      }),
    });
  },
  NE = (r) => {
    const [u, f] = H.useState(null),
      [o, h] = H.useState(!0),
      [p, y] = H.useState(""),
      T = async () => {
        try {
          let E = await It.get(r);
          f(E.data), h(!1);
        } catch (E) {
          y(E.message), h(!0);
        }
      };
    return (
      H.useEffect(() => {
        T();
      }, []),
      [u, o, p]
    );
  },
  DE = () => {
    const [r, u] = H.useState("all"),
      [f, o, h] = NE("https://685c4d07769de2bf085c58e4.mockapi.io/Task"),
      p = f?.length,
      y = f?.filter((E) => E.isDone === !0).length,
      T = f?.filter((E) =>
        r === "completed"
          ? E.isDone === !0
          : r === "pending"
          ? E.isDone === !1
          : E
      );
    return J.jsx(J.Fragment, {
      children: J.jsxs("div", {
        className: "w-1/2 m-3 p-3 rounded-2xl bg-black/[0.7] mx-auto",
        children: [
          J.jsx("p", {
            className: "text-center text-white tracking-[2px] text-4xl",
            children: "Task Items",
          }),
          J.jsxs("div", {
            className: "flex justify-center gap-3 mb-4",
            children: [
              J.jsxs("button", {
                onClick: () => u("all"),
                className: `px-4 py-2 rounded-lg ${
                  r === "all"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-500 text-white hover:bg-gray-600"
                }`,
                children: ["All Tasks / ", p],
              }),
              J.jsxs("button", {
                onClick: () => u("completed"),
                className: `px-4 py-2 rounded-lg ${
                  r === "completed"
                    ? "bg-green-500 text-white"
                    : "bg-gray-500 text-white hover:bg-gray-600"
                }`,
                children: ["Completed / ", y],
              }),
              J.jsxs("button", {
                onClick: () => u("pending"),
                className: `px-4 py-2 rounded-lg ${
                  r === "pending"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-500 text-white hover:bg-gray-600"
                }`,
                children: ["Pending / ", p - y],
              }),
            ],
          }),
          h
            ? J.jsx("h1", { className: "text-center text-danger", children: h })
            : o
            ? J.jsx("div", { className: "spinner-border" })
            : T?.map((E) => J.jsx(OE, { item: E }, E.id)),
        ],
      }),
    });
  },
  RE = () => {
    const [r, u] = H.useState(""),
      [f, o] = H.useState(""),
      [h, p] = H.useState(!1),
      y = io(),
      T = (E) => {
        E.preventDefault(),
          (async () => {
            It.post("https://685c4d07769de2bf085c58e4.mockapi.io/Task", {
              object: r,
              descrption: f,
              isDone: h,
            });
          })(),
          y("/");
      };
    return J.jsx(J.Fragment, {
      children: J.jsx("div", {
        className: "w-1/3 bg-black/[0.7] m-3 p-3 rounded-2xl mx-auto",
        children: J.jsxs("form", {
          action: "#",
          method: "post",
          onSubmit: (E) => {
            T(E);
          },
          children: [
            J.jsxs("div", {
              children: [
                J.jsx("label", {
                  htmlFor: "object",
                  className: "text-white text-2xl m-3 font-bold tracking-[2px]",
                  children: "Object Name :",
                }),
                J.jsx("input", {
                  type: "text",
                  className: "form-control mb-3",
                  id: "object",
                  onChange: (E) => {
                    u(E.target.value);
                  },
                }),
              ],
            }),
            J.jsxs("div", {
              children: [
                J.jsx("label", {
                  htmlFor: "descrption",
                  className: "text-white text-2xl m-3 font-bold tracking-[2px]",
                  children: "Descrption :",
                }),
                J.jsx("input", {
                  type: "text",
                  className: "form-control mb-3",
                  id: "descrption",
                  onChange: (E) => {
                    o(E.target.value);
                  },
                }),
              ],
            }),
            J.jsxs("div", {
              className: "flex p-3 gap-30",
              children: [
                J.jsx("label", {
                  htmlFor: "Done",
                  className: "text-white text-2xl font-bold tracking-[2px]",
                  children: "Done :",
                }),
                J.jsxs("div", {
                  className: "",
                  children: [
                    J.jsx("label", {
                      htmlFor: "true",
                      className:
                        "bg-white p-1 px-2 rounded-2xl font-bold cursor-pointer",
                      children: "True",
                    }),
                    J.jsx("input", {
                      type: "radio",
                      className: "form-check-input mx-2 mt-2 mr-5",
                      id: "true",
                      name: "Done",
                      value: "true",
                      checked: h === !0,
                      onChange: () => p(!0),
                    }),
                    J.jsx("label", {
                      htmlFor: "false",
                      className:
                        "bg-white p-1 px-2 rounded-2xl font-bold cursor-pointer ml-7",
                      children: "False",
                    }),
                    J.jsx("input", {
                      type: "radio",
                      className: "form-check-input mx-2 mt-2",
                      id: "false",
                      name: "Done",
                      value: "false",
                      checked: h === !1,
                      onChange: () => p(!1),
                    }),
                  ],
                }),
              ],
            }),
            J.jsx("div", {
              className: "mx-auto mt-2 w-max",
              children: J.jsx("button", {
                className: "btn btn-success",
                children: "Submite",
              }),
            }),
          ],
        }),
      }),
    });
  },
  CE = ({ list: r }) => {
    const [u, f] = H.useState(""),
      [o, h] = H.useState(""),
      [p, y] = H.useState(r.isDone || !1),
      T = io();
    H.useEffect(() => {
      h(r.descrption), f(r.object), y(r.isDone);
    }, []);
    const E = (_) => {
      _.preventDefault(),
        (async () => {
          try {
            let U = It.put(
              `https://685c4d07769de2bf085c58e4.mockapi.io/Task/${r.id}`,
              { object: u, descrption: o, isDone: p }
            );
          } catch (U) {
            console.log(U.message);
          }
        })(),
        T("/");
    };
    return J.jsx(J.Fragment, {
      children: J.jsx("div", {
        className: "w-1/3 bg-black/[0.7] m-3 p-3 rounded-2xl mx-auto",
        children: J.jsxs("form", {
          action: "#",
          method: "post",
          onSubmit: (_) => {
            E(_);
          },
          children: [
            J.jsxs("div", {
              children: [
                J.jsx("label", {
                  htmlFor: "object",
                  className: "text-white text-2xl m-3 font-bold tracking-[2px]",
                  children: "Object Name :",
                }),
                J.jsx("input", {
                  type: "text",
                  className: "form-control mb-3",
                  id: "object",
                  value: u,
                  onChange: (_) => {
                    f(_.target.value);
                  },
                }),
              ],
            }),
            J.jsxs("div", {
              children: [
                J.jsx("label", {
                  htmlFor: "descrption",
                  className: "text-white text-2xl m-3 font-bold tracking-[2px]",
                  children: "Descrption :",
                }),
                J.jsx("input", {
                  type: "text",
                  className: "form-control mb-3",
                  id: "descrption",
                  value: o,
                  onChange: (_) => {
                    h(_.target.value);
                  },
                }),
              ],
            }),
            J.jsxs("div", {
              className: "flex p-3 gap-30",
              children: [
                J.jsx("label", {
                  htmlFor: "Done",
                  className: "text-white text-2xl font-bold tracking-[2px]",
                  children: "Done :",
                }),
                J.jsxs("div", {
                  className: "",
                  children: [
                    J.jsx("label", {
                      htmlFor: "true",
                      className:
                        "bg-white p-1 px-2 rounded-2xl font-bold cursor-pointer",
                      children: "True",
                    }),
                    J.jsx("input", {
                      type: "radio",
                      className: "form-check-input mx-2 mt-2 mr-5",
                      id: "true",
                      name: "Done",
                      value: "true",
                      checked: p === !0,
                      onChange: () => y(!0),
                    }),
                    J.jsx("label", {
                      htmlFor: "false",
                      className:
                        "bg-white p-1 px-2 rounded-2xl font-bold cursor-pointer ml-7",
                      children: "False",
                    }),
                    J.jsx("input", {
                      type: "radio",
                      className: "form-check-input mx-2 mt-2",
                      id: "false",
                      name: "Done",
                      value: "false",
                      checked: p === !1,
                      onChange: () => y(!1),
                    }),
                  ],
                }),
              ],
            }),
            J.jsx("div", {
              className: "mx-auto mt-2 w-max",
              children: J.jsx("button", {
                className: "btn btn-success",
                children: "Submite",
              }),
            }),
          ],
        }),
      }),
    });
  },
  xE = () => {
    const { id: r } = Qv(),
      [u, f] = H.useState(null),
      o = async () => {
        try {
          let h = await It.get(
            `https://685c4d07769de2bf085c58e4.mockapi.io/Task/${r}`
          );
          f(h.data);
        } catch (h) {
          console.log(h.message);
        }
      };
    return (
      H.useEffect(() => {
        o();
      }, []),
      J.jsx(J.Fragment, { children: u && J.jsx(CE, { list: u }) })
    );
  },
  wE = () => {
    const r = io(),
      { setUser: u, setEmail: f } = H.useContext(Yh),
      o = H.useRef(""),
      h = H.useRef(""),
      p = (y) => {
        y.preventDefault(), u(o.current.value), f(h.current.value), r("/");
      };
    return J.jsx(J.Fragment, {
      children: J.jsx("div", {
        className: "w-1/3 bg-gray-500 rounded-2xl mx-auto my-3 p-3",
        children: J.jsxs("form", {
          action: "#",
          onSubmit: (y) => {
            p(y);
          },
          children: [
            J.jsx("label", {
              htmlFor: "user-name",
              className: "text-2xl text-white m-2",
              children: "User Name :",
            }),
            J.jsx("input", {
              type: "text",
              id: "user-name",
              className: "form-control m-2",
              ref: o,
            }),
            J.jsx("label", {
              htmlFor: "email",
              className: "text-2xl text-white m-2",
              children: "Email :",
            }),
            J.jsx("input", {
              type: "email",
              id: "email",
              className: "form-control m-2 ",
              ref: h,
            }),
            J.jsx("button", {
              type: "submit",
              className: "btn btn-success m-2 text-center",
              children: "Submit",
            }),
          ],
        }),
      }),
    });
  },
  ME = (r, u) => (f) =>
    u() ? J.jsx(r, { ...f }) : J.jsx(sy, { to: "/", replace: !0 }),
  Yh = uv.createContext(),
  LE = () => {
    const [r, u] = H.useState(null),
      [f, o] = H.useState(""),
      h = ME(wE, () => !!r);
    return J.jsx(J.Fragment, {
      children: J.jsx(Yh.Provider, {
        value: { user: r, setUser: u, email: f, setEmail: o },
        children: J.jsxs(My, {
          children: [
            J.jsx(Qy, {}),
            J.jsxs(oy, {
              children: [
                J.jsx(eo, { path: "/", element: J.jsx(DE, {}) }),
                J.jsx(eo, { path: "/TaskForm", element: J.jsx(RE, {}) }),
                J.jsx(eo, { path: "/Edit/:id", element: J.jsx(xE, {}) }),
                J.jsx(eo, { path: "/login", element: J.jsx(h, {}) }),
              ],
            }),
          ],
        }),
      }),
    });
  };
pv.createRoot(document.getElementById("root")).render(
  J.jsx(H.StrictMode, { children: J.jsx(LE, {}) })
);
