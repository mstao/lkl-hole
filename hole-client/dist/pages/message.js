'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_wepy$component) {
  _inherits(Message, _wepy$component);

  function Message() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: [],
      page: 1
    }, _this.methods = {
      /**
       * 跳转到树洞并设置为已读
       * @param {Number} bid blog id
       * @param {Number} nid notification id
       */
      jumpTo: function jumpTo(bid, nid) {
        (0, _request2.default)({
          url: _config.api.notifications.read.url + '/' + nid,
          method: _config.api.notifications.read.method
        });

        _wepy2.default.navigateTo({
          url: '/pages/detail?id=' + bid
        });
      },


      /**
       * 全部标记为已读
       */
      markAllRead: function markAllRead() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  (0, _request2.default)({
                    url: _config.api.notifications.read.url,
                    method: _config.api.notifications.read.method
                  });

                  _this2.page = 1;
                  _context.next = 4;
                  return _this2.reloadList();

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },


      /**
       * 刷新列表
       */
      refresh: function refresh() {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this3.page = 1;
                  _context2.next = 3;
                  return _this3.reloadList();

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },


      /**
       * 加载下一页
       */
      loadNextPage: function loadNextPage() {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var messages, _list;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return (0, _request2.default)({
                    url: _config.api.notifications.messages.url + '?page=' + (_this4.page + 1),
                    method: _config.api.notifications.messages.method
                  });

                case 3:
                  messages = _context3.sent;


                  if (messages.data.data.unreadMessages.length !== 0) {
                    _this4.page++;
                    (_list = _this4.list).push.apply(_list, _toConsumableArray(messages.data.data.unreadMessages));
                    _this4.$apply();
                  }
                  _context3.next = 10;
                  break;

                case 7:
                  _context3.prev = 7;
                  _context3.t0 = _context3['catch'](0);

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '\u83B7\u53D6\u6D88\u606F\u5931\u8D25\uFF0C\u8BF7\u622A\u56FE\u672C\u63D0\u793A\uFF0C\u5E76\u8054\u7CFB\u6DF1\u5927\u6C6A\u5CF0\u3002' + _context3.t0.message
                  });

                case 10:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[0, 7]]);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Message, [{
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.page = 1;
                _context4.next = 3;
                return this.reloadList();

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'reloadList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var messages;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return (0, _request2.default)({
                  url: _config.api.notifications.messages.url + '?page=' + this.page,
                  method: _config.api.notifications.messages.method
                });

              case 3:
                messages = _context5.sent;


                this.list = messages.data.data.unreadMessages;
                this.$apply();
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5['catch'](0);

                _wepy2.default.showModal({
                  title: '提示',
                  content: '\u83B7\u53D6\u6D88\u606F\u5931\u8D25\uFF0C\u8BF7\u622A\u56FE\u672C\u63D0\u793A\uFF0C\u5E76\u8054\u7CFB\u6DF1\u5927\u6C6A\u5CF0\u3002' + _context5.t0.message
                });

              case 11:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function reloadList() {
        return _ref3.apply(this, arguments);
      }

      return reloadList;
    }()
  }]);

  return Message;
}(_wepy2.default.component);

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsImRhdGEiLCJsaXN0IiwicGFnZSIsIm1ldGhvZHMiLCJqdW1wVG8iLCJiaWQiLCJuaWQiLCJ1cmwiLCJhcGkiLCJub3RpZmljYXRpb25zIiwicmVhZCIsIm1ldGhvZCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwibWFya0FsbFJlYWQiLCJyZWxvYWRMaXN0IiwicmVmcmVzaCIsImxvYWROZXh0UGFnZSIsIm1lc3NhZ2VzIiwidW5yZWFkTWVzc2FnZXMiLCJsZW5ndGgiLCJwdXNoIiwiJGFwcGx5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwibWVzc2FnZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsWUFBTTtBQUZELEssUUEyQlBDLE8sR0FBVTtBQUNSOzs7OztBQUtBQyxZQU5RLGtCQU1BQyxHQU5BLEVBTUtDLEdBTkwsRUFNVTtBQUNoQiwrQkFBSztBQUNIQyxlQUFRQyxZQUFJQyxhQUFKLENBQWtCQyxJQUFsQixDQUF1QkgsR0FBL0IsU0FBc0NELEdBRG5DO0FBRUhLLGtCQUFRSCxZQUFJQyxhQUFKLENBQWtCQyxJQUFsQixDQUF1QkM7QUFGNUIsU0FBTDs7QUFLQUMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZE4scUNBQXlCRjtBQURYLFNBQWhCO0FBR0QsT0FmTzs7O0FBaUJSOzs7QUFHTVMsaUJBcEJFLHlCQW9CYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkIseUNBQUs7QUFDSFAseUJBQUtDLFlBQUlDLGFBQUosQ0FBa0JDLElBQWxCLENBQXVCSCxHQUR6QjtBQUVISSw0QkFBUUgsWUFBSUMsYUFBSixDQUFrQkMsSUFBbEIsQ0FBdUJDO0FBRjVCLG1CQUFMOztBQUtBLHlCQUFLVCxJQUFMLEdBQVksQ0FBWjtBQU5tQjtBQUFBLHlCQU9iLE9BQUthLFVBQUwsRUFQYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFwQixPQTVCTzs7O0FBOEJSOzs7QUFHTUMsYUFqQ0UscUJBaUNTO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmLHlCQUFLZCxJQUFMLEdBQVksQ0FBWjtBQURlO0FBQUEseUJBRVQsT0FBS2EsVUFBTCxFQUZTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2hCLE9BcENPOzs7QUFzQ1I7OztBQUdNRSxrQkF6Q0UsMEJBeUNjO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFSyx1QkFBSztBQUMxQlYseUJBQVFDLFlBQUlDLGFBQUosQ0FBa0JTLFFBQWxCLENBQTJCWCxHQUFuQyxlQUErQyxPQUFLTCxJQUFMLEdBQVksQ0FBM0QsQ0FEMEI7QUFFMUJTLDRCQUFRSCxZQUFJQyxhQUFKLENBQWtCUyxRQUFsQixDQUEyQlA7QUFGVCxtQkFBTCxDQUZMOztBQUFBO0FBRVpPLDBCQUZZOzs7QUFPbEIsc0JBQUlBLFNBQVNsQixJQUFULENBQWNBLElBQWQsQ0FBbUJtQixjQUFuQixDQUFrQ0MsTUFBbEMsS0FBNkMsQ0FBakQsRUFBb0Q7QUFDbEQsMkJBQUtsQixJQUFMO0FBQ0Esb0NBQUtELElBQUwsRUFBVW9CLElBQVYsaUNBQWtCSCxTQUFTbEIsSUFBVCxDQUFjQSxJQUFkLENBQW1CbUIsY0FBckM7QUFDQSwyQkFBS0csTUFBTDtBQUNEO0FBWGlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWFsQlYsaUNBQUtXLFNBQUwsQ0FBZTtBQUNiQywyQkFBTyxJQURNO0FBRWJDLHNLQUFrQyxhQUFFQztBQUZ2QixtQkFBZjs7QUFia0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQnJCO0FBM0RPLEs7Ozs7Ozs7Ozs7O0FBckJSLHFCQUFLeEIsSUFBTCxHQUFZLENBQVo7O3VCQUNNLEtBQUthLFVBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUttQix1QkFBSztBQUMxQlIsdUJBQVFDLFlBQUlDLGFBQUosQ0FBa0JTLFFBQWxCLENBQTJCWCxHQUFuQyxjQUErQyxLQUFLTCxJQUQxQjtBQUUxQlMsMEJBQVFILFlBQUlDLGFBQUosQ0FBa0JTLFFBQWxCLENBQTJCUDtBQUZULGlCQUFMLEM7OztBQUFqQk8sd0I7OztBQUtOLHFCQUFLakIsSUFBTCxHQUFZaUIsU0FBU2xCLElBQVQsQ0FBY0EsSUFBZCxDQUFtQm1CLGNBQS9CO0FBQ0EscUJBQUtHLE1BQUw7Ozs7Ozs7O0FBRUFWLCtCQUFLVyxTQUFMLENBQWU7QUFDYkMseUJBQU8sSUFETTtBQUViQyxvS0FBa0MsYUFBRUM7QUFGdkIsaUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyQitCZCxlQUFLZSxTOztrQkFBckI1QixPIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBkYXRhID0ge1xyXG4gICAgbGlzdDogW10sXHJcbiAgICBwYWdlOiAxXHJcbiAgfVxyXG5cclxuICBhc3luYyBvblNob3cgKCkge1xyXG4gICAgdGhpcy5wYWdlID0gMVxyXG4gICAgYXdhaXQgdGhpcy5yZWxvYWRMaXN0KClcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlbG9hZExpc3QgKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBodHRwKHtcclxuICAgICAgICB1cmw6IGAke2FwaS5ub3RpZmljYXRpb25zLm1lc3NhZ2VzLnVybH0/cGFnZT0ke3RoaXMucGFnZX1gLFxyXG4gICAgICAgIG1ldGhvZDogYXBpLm5vdGlmaWNhdGlvbnMubWVzc2FnZXMubWV0aG9kXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLmxpc3QgPSBtZXNzYWdlcy5kYXRhLmRhdGEudW5yZWFkTWVzc2FnZXNcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6IGDojrflj5bmtojmga/lpLHotKXvvIzor7fmiKrlm77mnKzmj5DnpLrvvIzlubbogZTns7vmt7HlpKfmsarls7DjgIIke2UubWVzc2FnZX1gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDot7PovazliLDmoJHmtJ7lubborr7nva7kuLrlt7Lor7tcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBiaWQgYmxvZyBpZFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG5pZCBub3RpZmljYXRpb24gaWRcclxuICAgICAqL1xyXG4gICAganVtcFRvIChiaWQsIG5pZCkge1xyXG4gICAgICBodHRwKHtcclxuICAgICAgICB1cmw6IGAke2FwaS5ub3RpZmljYXRpb25zLnJlYWQudXJsfS8ke25pZH1gLFxyXG4gICAgICAgIG1ldGhvZDogYXBpLm5vdGlmaWNhdGlvbnMucmVhZC5tZXRob2RcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2RldGFpbD9pZD0ke2JpZH1gXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWo6YOo5qCH6K6w5Li65bey6K+7XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIG1hcmtBbGxSZWFkICgpIHtcclxuICAgICAgaHR0cCh7XHJcbiAgICAgICAgdXJsOiBhcGkubm90aWZpY2F0aW9ucy5yZWFkLnVybCxcclxuICAgICAgICBtZXRob2Q6IGFwaS5ub3RpZmljYXRpb25zLnJlYWQubWV0aG9kXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLnBhZ2UgPSAxXHJcbiAgICAgIGF3YWl0IHRoaXMucmVsb2FkTGlzdCgpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi35paw5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlZnJlc2ggKCkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxXHJcbiAgICAgIGF3YWl0IHRoaXMucmVsb2FkTGlzdCgpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295LiL5LiA6aG1XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGxvYWROZXh0UGFnZSAoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBodHRwKHtcclxuICAgICAgICAgIHVybDogYCR7YXBpLm5vdGlmaWNhdGlvbnMubWVzc2FnZXMudXJsfT9wYWdlPSR7dGhpcy5wYWdlICsgMX1gLFxyXG4gICAgICAgICAgbWV0aG9kOiBhcGkubm90aWZpY2F0aW9ucy5tZXNzYWdlcy5tZXRob2RcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAobWVzc2FnZXMuZGF0YS5kYXRhLnVucmVhZE1lc3NhZ2VzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5wYWdlKytcclxuICAgICAgICAgIHRoaXMubGlzdC5wdXNoKC4uLm1lc3NhZ2VzLmRhdGEuZGF0YS51bnJlYWRNZXNzYWdlcylcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiBg6I635Y+W5raI5oGv5aSx6LSl77yM6K+35oiq5Zu+5pys5o+Q56S677yM5bm26IGU57O75rex5aSn5rGq5bOw44CCJHtlLm1lc3NhZ2V9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19