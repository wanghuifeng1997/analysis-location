function _classCallCheck(t, o) {
  if (!(t instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, o) {
  for (var n = 0; n < o.length; n++) {
    var e = o[n];
    (e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      "value" in e && (e.writable = !0),
      Object.defineProperty(t, e.key, e);
  }
}
function _createClass(t, o, n) {
  return (
    o && _defineProperties(t.prototype, o), n && _defineProperties(t, n), t
  );
}
function _defineProperty(t, o, n) {
  return (
    o in t
      ? Object.defineProperty(t, o, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[o] = n),
    t
  );
}
function _toConsumableArray(t) {
  return (
    _arrayWithoutHoles(t) ||
    _iterableToArray(t) ||
    _unsupportedIterableToArray(t) ||
    _nonIterableSpread()
  );
}
function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) return _arrayLikeToArray(t);
}
function _iterableToArray(t) {
  if (
    ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
    null != t["@@iterator"]
  )
    return Array.from(t);
}
function _unsupportedIterableToArray(t, o) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, o);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" ===
      (n = "Object" === n && t.constructor ? t.constructor.name : n) ||
      "Set" === n
      ? Array.from(t)
      : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      ? _arrayLikeToArray(t, o)
      : void 0;
  }
}
function _arrayLikeToArray(t, o) {
  (null == o || o > t.length) && (o = t.length);
  for (var n = 0, e = new Array(o); n < o; n++) e[n] = t[n];
  return e;
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
!(function (t, o) {
  t.getElementById("livereloadscript") ||
    (((o = t.createElement("script")).async = 1),
    (o.src =
      "//" +
      (window.location.host || "localhost").split(":")[0] +
      ":35729/livereload.js?snipver=1"),
    (o.id = "livereloadscript"),
    t.getElementsByTagName("head")[0].appendChild(o));
})(window.document);
var analysisLocation = (function () {
  function o(t) {
    _classCallCheck(this, o),
      _defineProperty(this, "location", {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        port: "",
        protocol: "",
        search: "",
      }),
      this._init(t);
  }
  return (
    _createClass(o, [
      {
        key: "_init",
        value: function (t) {
          var o = t.split("//"),
            n = o.slice(1).join("//").split("/"),
            e = n.slice(1).join("/").split("#"),
            t = e[0].split("?"),
            n = n[0].split(":");
          (this.location.pathname = "/" + this._omit(t[0])),
            (this.location.hostname = n[0] ? n[0] + "" : ""),
            (this.location.port = n[1] ? parseInt(n[1]) + "" : ""),
            (this.location.protocol = o[0] || ""),
            (this.location.hash = e[1] ? "#" + e.slice(1).join("#") : ""),
            (this.location.search = t[1] ? "?" + t.slice(1).join("?") : ""),
            this._host(),
            this._origin(),
            this._host();
        },
      },
      {
        key: "_omit",
        value: function (t) {
          if ("/" != t.substr(-1)) return t;
          t = _toConsumableArray(t);
          return t.pop(), t.join();
        },
      },
      {
        key: "_href",
        value: function () {
          var t = this.location,
            o = t.hash,
            n = t.protocol,
            e = t.pathname,
            t = t.search,
            o = n + "//" + this._host() + e + t + (o ? "/" + o : "");
          return (this.location.href = o);
        },
      },
      {
        key: "_origin",
        value: function () {
          var t = this.location.protocol + "//" + this._host();
          return (this.location.origin = t);
        },
      },
      {
        key: "_host",
        value: function () {
          var t = this.location,
            o = t.hostname,
            t = t.port,
            t = o + (t ? ":" + t : "");
          return (this.location.host = t);
        },
      },
      {
        key: "_abalysisOrigin",
        value: function (t) {
          var o = t.split("//"),
            t = o.slice(1).join("//").split("/")[0].split(":");
          return (
            (this.location.hostname = t[0] ? t[0] + "" : ""),
            (this.location.port = t[1] ? parseInt(t[1]) + "" : ""),
            (this.location.protocol = o[0] || ""),
            this.location.protocol + "//" + this._host()
          );
        },
      },
      {
        key: "protocol",
        get: function () {
          return this.location.protocol;
        },
        set: function (t) {
          return (this.location.protocol = t);
        },
      },
      {
        key: "port",
        get: function () {
          return this.location.port;
        },
        set: function (t) {
          return (this.location.port = t);
        },
      },
      {
        key: "pathname",
        get: function () {
          return this.location.pathname;
        },
        set: function (t) {
          return (this.location.pathname = t);
        },
      },
      {
        key: "hostname",
        get: function () {
          return this.location.hostname;
        },
        set: function (t) {
          return (this.location.hostname = t);
        },
      },
      {
        key: "search",
        get: function () {
          return this.location.search;
        },
        set: function (t) {
          return (this.location.search = t);
        },
      },
      {
        key: "hash",
        get: function () {
          return this.location.hash;
        },
        set: function (t) {
          return (this.location.hash = t);
        },
      },
      {
        key: "host",
        get: function () {
          return this._host();
        },
        set: function (t) {
          var o = t.split(":");
          return (
            (this.location.hostname = o[0]),
            (this.location.port = o[1] || ""),
            (this.location.host = t)
          );
        },
      },
      {
        key: "href",
        get: function () {
          return this._href();
        },
        set: function (t) {
          return this._init(t), this._href();
        },
      },
      {
        key: "origin",
        get: function () {
          return this._origin();
        },
        set: function (t) {
          t = this._abalysisOrigin(t);
          return (this.location.origin = t);
        },
      },
    ]),
    o
  );
})();
(module.exports = require("./src/index.js")),
  (module.exports = analysisLocation);
