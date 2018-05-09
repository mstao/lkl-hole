'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _clist = require('./../components/clist.js');

var _clist2 = _interopRequireDefault(_clist);

var _store = require('./../store/index.js');

var _store2 = _interopRequireDefault(_store);

var _config = require('./../config.js');

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_wepy$component) {
  _inherits(List, _wepy$component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: [],
      ads: [],
      ad: {},
      showAd: true,
      userinfo: _store2.default.state.userinfo,
      page: 1
    }, _this.$repeat = {}, _this.$props = { "clist": { "xmlns:v-bind": "", "v-bind:list.sync": "list" } }, _this.$events = {}, _this.components = {
      clist: _clist2.default
    }, _this.methods = {
      closeAd: function closeAd() {
        this.showAd = false;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'onComponentLoad',


    /**
     * lifecycles hook
     */
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.loadData();

              case 2:
                this.$apply();

                // call component's lifecycle
                this.$invoke('clist', 'onComponentLoad');

                // load ads asynchronous
                setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var idx, adTimer;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this2.loadAds();

                        case 2:

                          if (_this2.ads.length > 0 && _this2.showAd) {
                            idx = 0;

                            _this2.ad = _this2.ads[idx];
                            _this2.$apply();

                            // shuffling when ad count more than 1
                            if (_this2.ads.length > 1) {
                              adTimer = setInterval(function () {
                                if (!_this2.showAd) {
                                  clearInterval(adTimer);
                                }

                                if (idx < _this2.ads.length - 1) {
                                  idx++;
                                } else {
                                  idx = 0;
                                }

                                _this2.ad = _this2.ads[idx];
                                _this2.$apply();
                              }, 5000);
                            }
                          }

                        case 3:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2);
                })), 0);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onComponentLoad() {
        return _ref2.apply(this, arguments);
      }

      return onComponentLoad;
    }()
  }, {
    key: 'onReload',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.page = 1;
                _context3.next = 3;
                return this.loadData();

              case 3:
                this.$apply();

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onReload() {
        return _ref4.apply(this, arguments);
      }

      return onReload;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.page = 1;
                _context4.next = 3;
                return this.loadData();

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onPullDownRefresh() {
        return _ref5.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }, {
    key: 'onReachBottom',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.page++;
                _context5.next = 3;
                return this.loadData();

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onReachBottom() {
        return _ref6.apply(this, arguments);
      }

      return onReachBottom;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      console.log('show index');
    }

    /**
     * common functions
     */

  }, {
    key: 'loadData',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var listResponse, _list;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return (0, _request2.default)({
                  url: _config.api.blog.list.url,
                  method: _config.api.blog.list.method,
                  data: {
                    page: this.page,
                    version: _config.version
                  }
                });

              case 3:
                listResponse = _context6.sent;


                if (this.page === 1) {
                  this.list = listResponse.data.data;
                } else {
                  (_list = this.list).push.apply(_list, _toConsumableArray(listResponse.data.data));
                }

                _wepy2.default.stopPullDownRefresh();
                this.$apply();
                _context6.next = 12;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6['catch'](0);

                _wepy2.default.showModal({
                  title: '提示',
                  content: '\u52A0\u8F7D\u5217\u8868\u5931\u8D25\uFF0C\u8BF7\u622A\u56FE\u672C\u63D0\u793A\uFF0C\u5E76\u8054\u7CFB\u6DF1\u5927\u6C6A\u5CF0\u3002' + _context6.t0.message
                });

              case 12:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 9]]);
      }));

      function loadData() {
        return _ref7.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'loadAds',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var raw;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return (0, _request2.default)({
                  url: _config.api.ads.url + '/1',
                  method: _config.api.ads.method
                });

              case 3:
                raw = _context7.sent;


                this.ads = raw.data.data;
                this.$apply();
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7['catch'](0);

                console.log(_context7.t0);

              case 11:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 8]]);
      }));

      function loadAds() {
        return _ref8.apply(this, arguments);
      }

      return loadAds;
    }()
  }]);

  return List;
}(_wepy2.default.component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsImRhdGEiLCJsaXN0IiwiYWRzIiwiYWQiLCJzaG93QWQiLCJ1c2VyaW5mbyIsInN0b3JlIiwic3RhdGUiLCJwYWdlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY2xpc3QiLCJtZXRob2RzIiwiY2xvc2VBZCIsIiRhcHBseSIsImxvYWREYXRhIiwiJGludm9rZSIsInNldFRpbWVvdXQiLCJsb2FkQWRzIiwibGVuZ3RoIiwiaWR4IiwiYWRUaW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJhcGkiLCJibG9nIiwibWV0aG9kIiwidmVyc2lvbiIsImxpc3RSZXNwb25zZSIsInB1c2giLCJ3ZXB5Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJyYXciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxXQUFLLEVBRkE7QUFHTEMsVUFBSSxFQUhDO0FBSUxDLGNBQVEsSUFKSDtBQUtMQyxnQkFBVUMsZ0JBQU1DLEtBQU4sQ0FBWUYsUUFMakI7QUFNTEcsWUFBTTtBQU5ELEssUUFTUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixNQUF0QyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRztBQUNULGFBQUtYLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS1ksTUFBTDtBQUNEO0FBSk8sSzs7Ozs7OztB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ZUFBS08sUzs7a0JBQWxCM0MsSSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBjbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2NsaXN0J1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnXHJcbmltcG9ydCB7IGFwaSwgdmVyc2lvbiB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IGh0dHAgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgZGF0YSA9IHtcclxuICAgIGxpc3Q6IFtdLFxyXG4gICAgYWRzOiBbXSxcclxuICAgIGFkOiB7fSxcclxuICAgIHNob3dBZDogdHJ1ZSxcclxuICAgIHVzZXJpbmZvOiBzdG9yZS5zdGF0ZS51c2VyaW5mbyxcclxuICAgIHBhZ2U6IDFcclxuICB9XHJcblxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjbGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIGNsaXN0XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2xvc2VBZCAoKSB7XHJcbiAgICAgIHRoaXMuc2hvd0FkID0gZmFsc2VcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbGlmZWN5Y2xlcyBob29rXHJcbiAgICovXHJcbiAgYXN5bmMgb25Db21wb25lbnRMb2FkICgpIHtcclxuICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG5cclxuICAgIC8vIGNhbGwgY29tcG9uZW50J3MgbGlmZWN5Y2xlXHJcbiAgICB0aGlzLiRpbnZva2UoJ2NsaXN0JywgJ29uQ29tcG9uZW50TG9hZCcpXHJcblxyXG4gICAgLy8gbG9hZCBhZHMgYXN5bmNocm9ub3VzXHJcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5sb2FkQWRzKClcclxuXHJcbiAgICAgIGlmICh0aGlzLmFkcy5sZW5ndGggPiAwICYmIHRoaXMuc2hvd0FkKSB7XHJcbiAgICAgICAgbGV0IGlkeCA9IDBcclxuICAgICAgICB0aGlzLmFkID0gdGhpcy5hZHNbaWR4XVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuXHJcbiAgICAgICAgLy8gc2h1ZmZsaW5nIHdoZW4gYWQgY291bnQgbW9yZSB0aGFuIDFcclxuICAgICAgICBpZiAodGhpcy5hZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgbGV0IGFkVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG93QWQpIHtcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGFkVGltZXIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpZHggPCB0aGlzLmFkcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgaWR4KytcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZHggPSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWQgPSB0aGlzLmFkc1tpZHhdXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIH0sIDUwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAwKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25SZWxvYWQgKCkge1xyXG4gICAgdGhpcy5wYWdlID0gMVxyXG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG5cclxuICBhc3luYyBvblB1bGxEb3duUmVmcmVzaCAoKSB7XHJcbiAgICB0aGlzLnBhZ2UgPSAxXHJcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uUmVhY2hCb3R0b20gKCkge1xyXG4gICAgdGhpcy5wYWdlKytcclxuICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxyXG4gIH1cclxuXHJcbiAgb25TaG93ICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzaG93IGluZGV4JylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbW1vbiBmdW5jdGlvbnNcclxuICAgKi9cclxuICBhc3luYyBsb2FkRGF0YSAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBsaXN0UmVzcG9uc2UgPSBhd2FpdCBodHRwKHtcclxuICAgICAgICB1cmw6IGFwaS5ibG9nLmxpc3QudXJsLFxyXG4gICAgICAgIG1ldGhvZDogYXBpLmJsb2cubGlzdC5tZXRob2QsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxyXG4gICAgICAgICAgdmVyc2lvblxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhZ2UgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0UmVzcG9uc2UuZGF0YS5kYXRhXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5saXN0LnB1c2goLi4ubGlzdFJlc3BvbnNlLmRhdGEuZGF0YSlcclxuICAgICAgfVxyXG5cclxuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6IGDliqDovb3liJfooajlpLHotKXvvIzor7fmiKrlm77mnKzmj5DnpLrvvIzlubbogZTns7vmt7HlpKfmsarls7DjgIIke2UubWVzc2FnZX1gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQWRzICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IGh0dHAoe1xyXG4gICAgICAgIHVybDogYCR7YXBpLmFkcy51cmx9LzFgLFxyXG4gICAgICAgIG1ldGhvZDogYXBpLmFkcy5tZXRob2RcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuYWRzID0gcmF3LmRhdGEuZGF0YVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==