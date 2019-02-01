"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function r(n) {
    if (e[n]) return e[n].exports;
    var s = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(s.exports, s, s.exports, r), s.l = !0, s.exports;
  }

  r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var s in t) {
      r.d(n, s, function (e) {
        return t[e];
      }.bind(null, s));
    }
    return n;
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return r.d(e, "a", e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = "", r(r.s = 5);
}([function (t, e) {
  t.exports = {
    Node:
    /*#__PURE__*/
    function () {
      function Node(t) {
        _classCallCheck(this, Node);

        this.data = t;
      }

      _createClass(Node, [{
        key: "equals",
        value: function equals(t) {
          var e = t.data;
          return null === e && null === this.data || ("object" == _typeof(e) && "object" == _typeof(this.data) ? JSON.stringify(e) === JSON.stringify(this.data) : "function" == typeof e && "function" == typeof this.data ? e.toString() === this.data.toString() : e === this.data);
        }
      }]);

      return Node;
    }()
  };
}, function (t, e) {
  t.exports = {
    NodedCollection:
    /*#__PURE__*/
    function () {
      function NodedCollection() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, NodedCollection);

        this.root = t, this[Symbol.iterator] =
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var t, _e;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  t = [];

                  this.__traverse(function (e) {
                    t.push(e.data);
                  });

                  _e = 0;

                case 3:
                  if (!(_e < t.length)) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 6;
                  return t[_e];

                case 6:
                  _e++;
                  _context.next = 3;
                  break;

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        });
      }

      _createClass(NodedCollection, [{
        key: "__traverse",
        value: function __traverse(t, e) {
          throw new Error("Collection needs to implement __traverse. Please raise an issue at https://github.com/Varun2604/JSCollection/issues");
        }
      }]);

      return NodedCollection;
    }()
  };
}, function (t, e, r) {
  var _r = r(3),
      n = _r.TreeNode,
      _r2 = r(1),
      s = _r2.NodedCollection;

  var o =
  /*#__PURE__*/
  function (_s) {
    _inherits(o, _s);

    function o() {
      var _this;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : o.comparator;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, o);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this, e)), _this.comparator = t, _this.size = e ? 1 : 0;
      return _this;
    }

    _createClass(o, [{
      key: "push",
      value: function push(t) {
        t instanceof n || (t = new n(t));
        var e = !1;
        return this.root ? e = this.__insert(t, this.root) : (this.root = t, e = !0), e && this.size++, e;
      }
    }, {
      key: "remove",
      value: function remove(t) {
        return t instanceof n || (t = new n(t)), this.root ? (this.size--, this.__delete(t, this.root), t.data) : null;
      }
    }, {
      key: "pop",
      value: function pop() {
        var t = o.leftMost(this.root);
        return this.__delete(new n(t), this.root), this.size--, t;
      }
    }, {
      key: "shift",
      value: function shift() {
        var t = this.root.data;
        return this.root = this.__delete(this.root, this.root), this.size--, t;
      }
    }, {
      key: "get",
      value: function get(t) {
        var e = void 0;

        if (t < this.size) {
          var _r3 = 0;

          this.__traverseAndBreak(function (n) {
            return _r3++ !== t || (e = n.data, !1);
          });
        }

        return e;
      }
    }, {
      key: "contains",
      value: function contains(t) {
        return t instanceof n || (t = new n(t)), this.indexOf(t) > -1;
      }
    }, {
      key: "indexOf",
      value: function indexOf(t) {
        t instanceof n || (t = new n(t));
        var e = -1,
            r = !1;
        return this.__traverseAndBreak(function (n) {
          return ++e, o.comparator(t, n) < 0 || 0 === o.comparator(t, n) && (r = !0, !1);
        }), r ? e : -1;
      }
    }, {
      key: "lastIndexOf",
      value: function lastIndexOf(t) {
        var _this2 = this;

        t instanceof n || (t = new n(t));
        var e = -1;
        return this.__traverse(function (r) {
          _this2.comparator(r, t) <= 0 || e++;
        }), ++e;
      }
    }, {
      key: "forEach",
      value: function forEach(t) {
        this.__traverse(t);
      }
    }, {
      key: "join",
      value: function join() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ",";
        var e = "";
        return this.__traverse(function (r) {
          e += r.data + t;
        }), e.substr(0, e.length - t.length);
      }
    }, {
      key: "filter",
      value: function filter(t) {
        var e = [];
        return this.__traverse(function (r) {
          t(r.data) && e.push(r.data);
        }), e;
      }
    }, {
      key: "map",
      value: function map(t) {
        var e = [];
        return this.__traverse(function (r) {
          e.push(t(r.data));
        }), e;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = [];
        return this.__traverse(function (e) {
          t.push(e.data);
        }), t;
      }
    }, {
      key: "reduce",
      value: function reduce(t, e) {
        var _this3 = this;

        e || (e = 0);
        var r = e,
            n = 0;
        return this.__traverse(function (e) {
          r = t(r, e.data, ++n, _this3);
        }), r;
      }
    }, {
      key: "every",
      value: function every(t) {
        var e = !0;
        return this.__traverseAndBreak(function (r) {
          return e = t(r.data);
        }), e;
      }
    }, {
      key: "some",
      value: function some(t) {
        var e = !1;
        return this.__traverseAndBreak(function (r) {
          return !(e = t(r.data));
        }), e;
      }
    }, {
      key: "find",
      value: function find(t) {
        var e = void 0;
        return this.__traverseAndBreak(function (r) {
          return !t(r.data) || (e = r.data, !1);
        }), e;
      }
    }, {
      key: "concat",
      value: function concat(t) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _e2 = _step.value;
            this.push(_e2);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: "__traverse",
      value: function __traverse(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
        null !== e && (e.left && this.__traverse(t, e.left), t(e), e.right && this.__traverse(t, e.right));
      }
    }, {
      key: "__traverseAndBreak",
      value: function __traverseAndBreak(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
        if (null !== e && (!e.left || !1 !== this.__traverseAndBreak(t, e.left))) return !!t(e) && void (!e.right || this.__traverseAndBreak(t, e.right));
      }
    }, {
      key: "__delete",
      value: function __delete(t, e) {
        if (0 === this.comparator(t, e)) {
          if (null === e) return null;
          if (null === e.right) return e.left;
          if (null === e.left) return e.right;
          e.data = o.leftMost(e.right), e.right = this.__delete(e, e.right);
        } else this.comparator(e, t) < 0 ? e.left = this.__delete(t, e.left) : e.right = this.__delete(t, e.right);

        return e;
      }
    }, {
      key: "__insert",
      value: function __insert(t, e) {
        return this.comparator(e, t) <= 0 ? null === e.left ? (e.left = t, !0) : this.__insert(t, e.left) : null === e.right ? (e.right = t, !0) : this.__insert(t, e.right);
      }
    }], [{
      key: "comparator",
      value: function comparator(t, e) {
        return t instanceof n && (t = t.data), e instanceof n && (e = e.data), t > e ? -1 : +(t < e);
      }
    }, {
      key: "leftMost",
      value: function leftMost(t) {
        var e = t.data;

        for (; t.left;) {
          e = t.left.data, t = t.left;
        }

        return e;
      }
    }]);

    return o;
  }(s);

  t.exports = {
    TreeList: o
  };
}, function (t, e, r) {
  var _r4 = r(0),
      n = _r4.Node;

  t.exports = {
    TreeNode:
    /*#__PURE__*/
    function (_n) {
      _inherits(TreeNode, _n);

      function TreeNode(t) {
        var _this4;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, TreeNode);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(TreeNode).call(this, t)), _this4.left = e, _this4.right = r;
        return _this4;
      }

      return TreeNode;
    }(n)
  };
}, function (t, e) {
  var r = {
    utf8: {
      stringToBytes: function stringToBytes(t) {
        return r.bin.stringToBytes(unescape(encodeURIComponent(t)));
      },
      bytesToString: function bytesToString(t) {
        return decodeURIComponent(escape(r.bin.bytesToString(t)));
      }
    },
    bin: {
      stringToBytes: function stringToBytes(t) {
        for (var e = [], r = 0; r < t.length; r++) {
          e.push(255 & t.charCodeAt(r));
        }

        return e;
      },
      bytesToString: function bytesToString(t) {
        for (var e = [], r = 0; r < t.length; r++) {
          e.push(String.fromCharCode(t[r]));
        }

        return e.join("");
      }
    }
  };
  t.exports = r;
}, function (t, e, r) {
  var _r5 = r(6),
      n = _r5.LinkedList,
      _r6 = r(2),
      s = _r6.TreeList,
      _r7 = r(8),
      o = _r7.TreeSet,
      _r8 = r(9),
      i = _r8.Graph;

  t.exports = {
    LinkedList: n,
    TreeList: s,
    TreeSet: o,
    Graph: i
  };
}, function (t, e, r) {
  var _r9 = r(7),
      n = _r9.LinkedNode,
      _r10 = r(1),
      s = _r10.NodedCollection;

  t.exports = {
    LinkedList:
    /*#__PURE__*/
    function (_s2) {
      _inherits(LinkedList, _s2);

      function LinkedList() {
        var _this5;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, LinkedList);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(LinkedList).call(this, t)), _this5.size = t ? 1 : 0;
        return _this5;
      }

      _createClass(LinkedList, [{
        key: "push",
        value: function push(t) {
          t instanceof n || (t = new n(t));
          var e = !1;
          return this.root ? e = this.__insert(t) : (this.root = t, e = !0), e && this.size++, e;
        }
      }, {
        key: "insertAt",
        value: function insertAt(t, e) {
          e instanceof n || (e = new n(e));
          var r = !1;
          if (this.root) 0 === t ? (e.next = this.root, this.root = e, r = !0) : r = this.__insert(e, t);else {
            if (0 !== t) return !1;
            this.root = e, r = !0;
          }
          return r && this.size++, r;
        }
      }, {
        key: "get",
        value: function get(t) {
          if (null == t) return;
          var e = 0,
              r = null;
          return this.__traverseAndBreak(function (n) {
            return r = n, e++ !== t;
          }), e - 1 === t && r ? r.data : void 0;
        }
      }, {
        key: "contains",
        value: function contains(t) {
          return t instanceof n || (t = new n(t)), -1 !== this.indexOf(t);
        }
      }, {
        key: "indexOf",
        value: function indexOf(t) {
          var e = -1;
          return t instanceof n || (t = new n(t)), this.__traverseAndBreak(function (r, n) {
            return t.equals(r) && (e = n), -1 === e;
          }), e;
        }
      }, {
        key: "lastIndexOf",
        value: function lastIndexOf(t) {
          var e = -1;
          return t instanceof n || (t = new n(t)), this.__traverse(function (r, n) {
            return t.equals(r) && (e = n), -1 === e;
          }), e;
        }
      }, {
        key: "remove",
        value: function remove(t) {
          if (t instanceof n || (t = new n(t)), this.root.equals(t)) {
            var _t = this.root.data;
            return this.root = this.root.next, this.size--, _t;
          }

          var e = null,
              r = null;

          if (this.__traverseAndBreak(function (n, s) {
            return r = e, !(e = n).equals(t);
          }), null !== r && null !== e && e.equals(t)) {
            var _t2 = e.data;
            return r.next = e.next, this.size--, _t2;
          }

          return null;
        }
      }, {
        key: "removeAt",
        value: function removeAt() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          return this.__deleteAt(t);
        }
      }, {
        key: "pop",
        value: function pop() {
          return this.__deleteAt(this.size - 1);
        }
      }, {
        key: "shift",
        value: function shift() {
          return this.__deleteAt(0);
        }
      }, {
        key: "peekFirst",
        value: function peekFirst() {
          return this.root.data;
        }
      }, {
        key: "peekLast",
        value: function peekLast() {
          var t = null;
          return this.__traverse(function (e) {
            return t = e;
          }), t.data;
        }
      }, {
        key: "concat",
        value: function concat() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = t[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _e3 = _step2.value;
              _e3 instanceof n || (_e3 = new n(_e3)), this.push(_e3);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: "toArray",
        value: function toArray() {
          var t = [];
          return this.__traverse(function (e) {
            t.push(e.data);
          }), t;
        }
      }, {
        key: "__traverse",
        value: function __traverse(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
          if (!e) return;
          var r = 0;

          for (; e;) {
            t(e, r++), e = e.next;
          }
        }
      }, {
        key: "__traverseAndBreak",
        value: function __traverseAndBreak(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
          if (!e) return;
          var r = 0;

          for (; e && t(e, r++);) {
            e = e.next;
          }
        }
      }, {
        key: "__insert",
        value: function __insert(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.size;
          var r = 0,
              n = this.root;

          for (; n && ++r < e;) {
            n = n.next;
          }

          return r === e && (t.next = n.next, n.next = t, !0);
        }
      }, {
        key: "__deleteAt",
        value: function __deleteAt(t) {
          if (0 === t) {
            var _t3 = this.root.data;
            return this.root = this.root.next, this.size--, _t3;
          }

          var e = null,
              r = null,
              n = !0;

          if (this.__traverseAndBreak(function (s, o) {
            return e = r, r = s, n = !(t === o);
          }), e && r && !n) {
            var _t4 = r.data;
            return e.next = r.next, this.size--, _t4;
          }

          return null;
        }
      }]);

      return LinkedList;
    }(s)
  };
}, function (t, e, r) {
  var _r11 = r(0),
      n = _r11.Node;

  t.exports = {
    LinkedNode:
    /*#__PURE__*/
    function (_n2) {
      _inherits(LinkedNode, _n2);

      function LinkedNode(t) {
        var _this6;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, LinkedNode);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(LinkedNode).call(this, t)), _this6.next = e;
        return _this6;
      }

      return LinkedNode;
    }(n)
  };
}, function (t, e, r) {
  var _r12 = r(3),
      n = _r12.TreeNode,
      _r13 = r(2),
      s = _r13.TreeList;

  t.exports = {
    TreeSet:
    /*#__PURE__*/
    function (_s3) {
      _inherits(TreeSet, _s3);

      function TreeSet() {
        _classCallCheck(this, TreeSet);

        return _possibleConstructorReturn(this, _getPrototypeOf(TreeSet).apply(this, arguments));
      }

      _createClass(TreeSet, [{
        key: "push",
        value: function push(t) {
          t instanceof n || (t = new n(t));
          var e = !1;
          return this.root ? e = this.__insert(t, this.root) : (this.root = t, e = !0), e && this.size++, e;
        }
      }, {
        key: "lastIndexOf",
        value: function lastIndexOf(t) {
          return this.indexOf(t);
        }
      }, {
        key: "__insert",
        value: function __insert(t, e) {
          return this.comparator(e, t) < 0 ? null === e.left ? (e.left = t, !0) : this.__insert(t, e.left) : this.comparator(e, t) > 0 && (null === e.right ? (e.right = t, !0) : this.__insert(t, e.right));
        }
      }]);

      return TreeSet;
    }(s)
  };
}, function (t, e, r) {
  var _r14 = r(10),
      n = _r14.GraphNode,
      _r15 = r(1),
      s = _r15.NodedCollection;

  t.exports = {
    Graph:
    /*#__PURE__*/
    function (_s4) {
      _inherits(Graph, _s4);

      function Graph() {
        var _this7;

        _classCallCheck(this, Graph);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Graph).call(this)), _this7.graph_map = {};
        return _this7;
      }

      _createClass(Graph, [{
        key: "createEdge",
        value: function createEdge(t, e) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          t instanceof n || (t = new n(t)), this.__createEdge__(t, e), r || (e instanceof n || (e = new n(e)), this.__createEdge__(e, t));
        }
      }, {
        key: "__createEdge__",
        value: function __createEdge__(t, e) {
          this.graph_map.hasOwnProperty(t.hash()) || (this.graph_map[t.hash()] = t), this.graph_map[t.hash()].addAdjacent(e);
        }
      }]);

      return Graph;
    }(s)
  };
}, function (t, e, r) {
  var _r16 = r(0),
      n = _r16.Node,
      s = r(11);

  var o =
  /*#__PURE__*/
  function (_n3) {
    _inherits(o, _n3);

    function o(t) {
      var _this8;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, o);

      if (_this8 = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this, t)), _this8.adjacents = [], e) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = e[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _t5 = _step3.value;

            _this8.addAdjacent(_t5);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      return _possibleConstructorReturn(_this8);
    }

    _createClass(o, [{
      key: "addAdjacent",
      value: function addAdjacent(t) {
        t instanceof o || (t = new o(t)), this.adjacents.push(t);
      }
    }, {
      key: "hash",
      value: function hash() {
        return s(JSON.stringify(this.data));
      }
    }]);

    return o;
  }(n);

  t.exports = {
    GraphNode: o
  };
}, function (t, e, r) {
  var n, s, o, i, _a;

  n = r(12), s = r(4).utf8, o = r(13), i = r(4).bin, (_a = function a(t, e) {
    t.constructor == String ? t = e && "binary" === e.encoding ? i.stringToBytes(t) : s.stringToBytes(t) : o(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());

    for (var r = n.bytesToWords(t), u = 8 * t.length, l = 1732584193, h = -271733879, f = -1732584194, c = 271733878, d = 0; d < r.length; d++) {
      r[d] = 16711935 & (r[d] << 8 | r[d] >>> 24) | 4278255360 & (r[d] << 24 | r[d] >>> 8);
    }

    r[u >>> 5] |= 128 << u % 32, r[14 + (u + 64 >>> 9 << 4)] = u;
    var _ = _a._ff,
        p = _a._gg,
        g = _a._hh,
        v = _a._ii;

    for (d = 0; d < r.length; d += 16) {
      var x = l,
          y = h,
          m = f,
          b = c;
      l = _(l, h, f, c, r[d + 0], 7, -680876936), c = _(c, l, h, f, r[d + 1], 12, -389564586), f = _(f, c, l, h, r[d + 2], 17, 606105819), h = _(h, f, c, l, r[d + 3], 22, -1044525330), l = _(l, h, f, c, r[d + 4], 7, -176418897), c = _(c, l, h, f, r[d + 5], 12, 1200080426), f = _(f, c, l, h, r[d + 6], 17, -1473231341), h = _(h, f, c, l, r[d + 7], 22, -45705983), l = _(l, h, f, c, r[d + 8], 7, 1770035416), c = _(c, l, h, f, r[d + 9], 12, -1958414417), f = _(f, c, l, h, r[d + 10], 17, -42063), h = _(h, f, c, l, r[d + 11], 22, -1990404162), l = _(l, h, f, c, r[d + 12], 7, 1804603682), c = _(c, l, h, f, r[d + 13], 12, -40341101), f = _(f, c, l, h, r[d + 14], 17, -1502002290), l = p(l, h = _(h, f, c, l, r[d + 15], 22, 1236535329), f, c, r[d + 1], 5, -165796510), c = p(c, l, h, f, r[d + 6], 9, -1069501632), f = p(f, c, l, h, r[d + 11], 14, 643717713), h = p(h, f, c, l, r[d + 0], 20, -373897302), l = p(l, h, f, c, r[d + 5], 5, -701558691), c = p(c, l, h, f, r[d + 10], 9, 38016083), f = p(f, c, l, h, r[d + 15], 14, -660478335), h = p(h, f, c, l, r[d + 4], 20, -405537848), l = p(l, h, f, c, r[d + 9], 5, 568446438), c = p(c, l, h, f, r[d + 14], 9, -1019803690), f = p(f, c, l, h, r[d + 3], 14, -187363961), h = p(h, f, c, l, r[d + 8], 20, 1163531501), l = p(l, h, f, c, r[d + 13], 5, -1444681467), c = p(c, l, h, f, r[d + 2], 9, -51403784), f = p(f, c, l, h, r[d + 7], 14, 1735328473), l = g(l, h = p(h, f, c, l, r[d + 12], 20, -1926607734), f, c, r[d + 5], 4, -378558), c = g(c, l, h, f, r[d + 8], 11, -2022574463), f = g(f, c, l, h, r[d + 11], 16, 1839030562), h = g(h, f, c, l, r[d + 14], 23, -35309556), l = g(l, h, f, c, r[d + 1], 4, -1530992060), c = g(c, l, h, f, r[d + 4], 11, 1272893353), f = g(f, c, l, h, r[d + 7], 16, -155497632), h = g(h, f, c, l, r[d + 10], 23, -1094730640), l = g(l, h, f, c, r[d + 13], 4, 681279174), c = g(c, l, h, f, r[d + 0], 11, -358537222), f = g(f, c, l, h, r[d + 3], 16, -722521979), h = g(h, f, c, l, r[d + 6], 23, 76029189), l = g(l, h, f, c, r[d + 9], 4, -640364487), c = g(c, l, h, f, r[d + 12], 11, -421815835), f = g(f, c, l, h, r[d + 15], 16, 530742520), l = v(l, h = g(h, f, c, l, r[d + 2], 23, -995338651), f, c, r[d + 0], 6, -198630844), c = v(c, l, h, f, r[d + 7], 10, 1126891415), f = v(f, c, l, h, r[d + 14], 15, -1416354905), h = v(h, f, c, l, r[d + 5], 21, -57434055), l = v(l, h, f, c, r[d + 12], 6, 1700485571), c = v(c, l, h, f, r[d + 3], 10, -1894986606), f = v(f, c, l, h, r[d + 10], 15, -1051523), h = v(h, f, c, l, r[d + 1], 21, -2054922799), l = v(l, h, f, c, r[d + 8], 6, 1873313359), c = v(c, l, h, f, r[d + 15], 10, -30611744), f = v(f, c, l, h, r[d + 6], 15, -1560198380), h = v(h, f, c, l, r[d + 13], 21, 1309151649), l = v(l, h, f, c, r[d + 4], 6, -145523070), c = v(c, l, h, f, r[d + 11], 10, -1120210379), f = v(f, c, l, h, r[d + 2], 15, 718787259), h = v(h, f, c, l, r[d + 9], 21, -343485551), l = l + x >>> 0, h = h + y >>> 0, f = f + m >>> 0, c = c + b >>> 0;
    }

    return n.endian([l, h, f, c]);
  })._ff = function (t, e, r, n, s, o, i) {
    var a = t + (e & r | ~e & n) + (s >>> 0) + i;
    return (a << o | a >>> 32 - o) + e;
  }, _a._gg = function (t, e, r, n, s, o, i) {
    var a = t + (e & n | r & ~n) + (s >>> 0) + i;
    return (a << o | a >>> 32 - o) + e;
  }, _a._hh = function (t, e, r, n, s, o, i) {
    var a = t + (e ^ r ^ n) + (s >>> 0) + i;
    return (a << o | a >>> 32 - o) + e;
  }, _a._ii = function (t, e, r, n, s, o, i) {
    var a = t + (r ^ (e | ~n)) + (s >>> 0) + i;
    return (a << o | a >>> 32 - o) + e;
  }, _a._blocksize = 16, _a._digestsize = 16, t.exports = function (t, e) {
    if (null == t) throw new Error("Illegal argument " + t);
    var r = n.wordsToBytes(_a(t, e));
    return e && e.asBytes ? r : e && e.asString ? i.bytesToString(r) : n.bytesToHex(r);
  };
}, function (t, e) {
  var r, n;
  r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
    rotl: function rotl(t, e) {
      return t << e | t >>> 32 - e;
    },
    rotr: function rotr(t, e) {
      return t << 32 - e | t >>> e;
    },
    endian: function endian(t) {
      if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);

      for (var e = 0; e < t.length; e++) {
        t[e] = n.endian(t[e]);
      }

      return t;
    },
    randomBytes: function randomBytes(t) {
      for (var e = []; t > 0; t--) {
        e.push(Math.floor(256 * Math.random()));
      }

      return e;
    },
    bytesToWords: function bytesToWords(t) {
      for (var e = [], r = 0, n = 0; r < t.length; r++, n += 8) {
        e[n >>> 5] |= t[r] << 24 - n % 32;
      }

      return e;
    },
    wordsToBytes: function wordsToBytes(t) {
      for (var e = [], r = 0; r < 32 * t.length; r += 8) {
        e.push(t[r >>> 5] >>> 24 - r % 32 & 255);
      }

      return e;
    },
    bytesToHex: function bytesToHex(t) {
      for (var e = [], r = 0; r < t.length; r++) {
        e.push((t[r] >>> 4).toString(16)), e.push((15 & t[r]).toString(16));
      }

      return e.join("");
    },
    hexToBytes: function hexToBytes(t) {
      for (var e = [], r = 0; r < t.length; r += 2) {
        e.push(parseInt(t.substr(r, 2), 16));
      }

      return e;
    },
    bytesToBase64: function bytesToBase64(t) {
      for (var e = [], n = 0; n < t.length; n += 3) {
        for (var s = t[n] << 16 | t[n + 1] << 8 | t[n + 2], o = 0; o < 4; o++) {
          8 * n + 6 * o <= 8 * t.length ? e.push(r.charAt(s >>> 6 * (3 - o) & 63)) : e.push("=");
        }
      }

      return e.join("");
    },
    base64ToBytes: function base64ToBytes(t) {
      t = t.replace(/[^A-Z0-9+\/]/gi, "");

      for (var e = [], n = 0, s = 0; n < t.length; s = ++n % 4) {
        0 != s && e.push((r.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * s + 8) - 1) << 2 * s | r.indexOf(t.charAt(n)) >>> 6 - 2 * s);
      }

      return e;
    }
  }, t.exports = n;
}, function (t, e) {
  function r(t) {
    return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
  }
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */


  t.exports = function (t) {
    return null != t && (r(t) || function (t) {
      return "function" == typeof t.readFloatLE && "function" == typeof t.slice && r(t.slice(0, 0));
    }(t) || !!t._isBuffer);
  };
}]);