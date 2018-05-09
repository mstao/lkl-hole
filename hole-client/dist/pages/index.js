'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _store = require('./../store/index.js');

var _store2 = _interopRequireDefault(_store);

var _interfaces = require('./../interfaces/index.js');

var _interfaces2 = _interopRequireDefault(_interfaces);

var _config = require('./../config.js');

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _list = require('./list.js');

var _list2 = _interopRequireDefault(_list);

var _message = require('./message.js');

var _message2 = _interopRequireDefault(_message);

var _user = require('./user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// tabs


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '深大的树洞'
    }, _this.components = {
      list: _list2.default,
      message: _message2.default,
      user: _user2.default
    }, _this.data = {
      tab: 0,
      unreadMessagesCount: 0,
      userinfo: _store2.default.state.userinfo,
      tabs: ['list', 'message', 'user'],
      showTabs: false
    }, _this.methods = {
      switchTapTo: function switchTapTo(tabIndex) {
        tabIndex = parseInt(tabIndex);

        // 清空消息提醒
        if (tabIndex === 1) {
          this.unreadMessagesCount = 0;
          this.$apply();
        }

        if (this.tab === tabIndex) {
          this.$invoke(this.tabs[tabIndex], 'onReload');
        } else {
          this.tab = tabIndex;
          this.$invoke(this.tabs[tabIndex], 'onShow');
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      var isNeedReloadList = _wepy2.default.getStorageSync('isNeedReloadList');
      if (isNeedReloadList === 'true') {
        // call list onShow in first load
        this.$invoke('list', 'onComponentLoad');
        _wepy2.default.setStorageSync('isNeedReloadList', 'false');
      }

      if (this.tab === 1) {
        this.$invoke('message', 'onShow');
      }
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.$invoke(this.tabs[this.tab], 'onPullDownRefresh');
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.$invoke(this.tabs[this.tab], 'onReachBottom');
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this2 = this;

        var isInTest, _ref3, data;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                isInTest = _wepy2.default.getStorageSync('isInTest-' + _config.version);

                if (!(isInTest === 'false')) {
                  _context3.next = 5;
                  break;
                }

                this.showTabs = true;
                _context3.next = 10;
                break;

              case 5:
                _context3.next = 7;
                return (0, _request2.default)({
                  url: _config.api.configs.url,
                  method: _config.api.configs.method
                });

              case 7:
                _ref3 = _context3.sent;
                data = _ref3.data;


                if (data.data.isTest === false) {
                  this.showTabs = true;
                  _wepy2.default.setStorageSync('isInTest-' + _config.version, 'false');
                }

              case 10:
                _context3.prev = 10;
                _context3.next = 13;
                return _interfaces2.default.login();

              case 13:
                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3['catch'](10);

                _wepy2.default.showModal({
                  title: '提示',
                  content: '\u7528\u6237\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u622A\u56FE\u672C\u63D0\u793A\uFF0C\u5E76\u8054\u7CFB\u6DF1\u5927\u6C6A\u5CF0\u3002' + _context3.t0.message
                });

              case 18:

                // call list onShow in first load
                this.$invoke('list', 'onComponentLoad');

                setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this2.loadNotifications();

                        case 2:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2);
                })), 0);

                setInterval(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this2.loadNotifications();

                        case 2:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this2);
                })), 10 * 1000);

              case 21:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[10, 15]]);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadNotifications',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var notifications;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _request2.default)({
                  url: _config.api.notifications.count.url,
                  method: _config.api.notifications.count.method
                });

              case 2:
                notifications = _context4.sent;


                this.unreadMessagesCount = notifications.data.data.unreadMessagesCount;
                this.$apply();

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadNotifications() {
        return _ref6.apply(this, arguments);
      }

      return loadNotifications;
    }()

    // onShareAppMessage () {
    //   return {
    //     title: '深大树洞',
    //     desc: '深大树洞首页~快来匿名发表树洞啊~',
    //     path: '/pages/index'
    //   }
    // }

  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJsaXN0IiwibWVzc2FnZSIsInVzZXIiLCJkYXRhIiwidGFiIiwidW5yZWFkTWVzc2FnZXNDb3VudCIsInVzZXJpbmZvIiwic3RvcmUiLCJzdGF0ZSIsInRhYnMiLCJzaG93VGFicyIsIm1ldGhvZHMiLCJzd2l0Y2hUYXBUbyIsInRhYkluZGV4IiwicGFyc2VJbnQiLCIkYXBwbHkiLCIkaW52b2tlIiwiaXNOZWVkUmVsb2FkTGlzdCIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwiaXNJblRlc3QiLCJ2ZXJzaW9uIiwidXJsIiwiYXBpIiwiY29uZmlncyIsIm1ldGhvZCIsImlzVGVzdCIsImludGVyZmFjZXMiLCJsb2dpbiIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNldFRpbWVvdXQiLCJsb2FkTm90aWZpY2F0aW9ucyIsInNldEludGVydmFsIiwibm90aWZpY2F0aW9ucyIsImNvdW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFIQTs7O0lBS3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWE7QUFDWEMsMEJBRFc7QUFFWEMsZ0NBRlc7QUFHWEM7QUFIVyxLLFFBTWJDLEksR0FBTztBQUNMQyxXQUFLLENBREE7QUFFTEMsMkJBQXFCLENBRmhCO0FBR0xDLGdCQUFVQyxnQkFBTUMsS0FBTixDQUFZRixRQUhqQjtBQUlMRyxZQUFNLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsTUFBcEIsQ0FKRDtBQUtMQyxnQkFBVTtBQUxMLEssUUFRUEMsTyxHQUFVO0FBQ1JDLGlC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QUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQWhIaUNHLGVBQUtvQixJOztrQkFBbkIxQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSdcclxuaW1wb3J0IGludGVyZmFjZXMgZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgYXBpLCB2ZXJzaW9uIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xyXG5cclxuLy8gdGFic1xyXG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnXHJcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4vbWVzc2FnZSdcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmt7HlpKfnmoTmoJHmtJ4nXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgbGlzdCxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICB1c2VyXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgdGFiOiAwLFxyXG4gICAgdW5yZWFkTWVzc2FnZXNDb3VudDogMCxcclxuICAgIHVzZXJpbmZvOiBzdG9yZS5zdGF0ZS51c2VyaW5mbyxcclxuICAgIHRhYnM6IFsnbGlzdCcsICdtZXNzYWdlJywgJ3VzZXInXSxcclxuICAgIHNob3dUYWJzOiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHN3aXRjaFRhcFRvICh0YWJJbmRleCkge1xyXG4gICAgICB0YWJJbmRleCA9IHBhcnNlSW50KHRhYkluZGV4KVxyXG5cclxuICAgICAgLy8g5riF56m65raI5oGv5o+Q6YaSXHJcbiAgICAgIGlmICh0YWJJbmRleCA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMudW5yZWFkTWVzc2FnZXNDb3VudCA9IDBcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnRhYiA9PT0gdGFiSW5kZXgpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UodGhpcy50YWJzW3RhYkluZGV4XSwgJ29uUmVsb2FkJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhYiA9IHRhYkluZGV4XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKHRoaXMudGFic1t0YWJJbmRleF0sICdvblNob3cnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNob3cgKCkge1xyXG4gICAgY29uc3QgaXNOZWVkUmVsb2FkTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2lzTmVlZFJlbG9hZExpc3QnKVxyXG4gICAgaWYgKGlzTmVlZFJlbG9hZExpc3QgPT09ICd0cnVlJykge1xyXG4gICAgICAvLyBjYWxsIGxpc3Qgb25TaG93IGluIGZpcnN0IGxvYWRcclxuICAgICAgdGhpcy4kaW52b2tlKCdsaXN0JywgJ29uQ29tcG9uZW50TG9hZCcpXHJcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2lzTmVlZFJlbG9hZExpc3QnLCAnZmFsc2UnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRhYiA9PT0gMSkge1xyXG4gICAgICB0aGlzLiRpbnZva2UoJ21lc3NhZ2UnLCAnb25TaG93JylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUHVsbERvd25SZWZyZXNoICgpIHtcclxuICAgIHRoaXMuJGludm9rZSh0aGlzLnRhYnNbdGhpcy50YWJdLCAnb25QdWxsRG93blJlZnJlc2gnKVxyXG4gIH1cclxuXHJcbiAgb25SZWFjaEJvdHRvbSAoKSB7XHJcbiAgICB0aGlzLiRpbnZva2UodGhpcy50YWJzW3RoaXMudGFiXSwgJ29uUmVhY2hCb3R0b20nKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25Mb2FkICgpIHtcclxuICAgIGNvbnN0IGlzSW5UZXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYyhgaXNJblRlc3QtJHt2ZXJzaW9ufWApXHJcbiAgICBpZiAoaXNJblRlc3QgPT09ICdmYWxzZScpIHtcclxuICAgICAgdGhpcy5zaG93VGFicyA9IHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cCh7XHJcbiAgICAgICAgdXJsOiBhcGkuY29uZmlncy51cmwsXHJcbiAgICAgICAgbWV0aG9kOiBhcGkuY29uZmlncy5tZXRob2RcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChkYXRhLmRhdGEuaXNUZXN0ID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1RhYnMgPSB0cnVlXHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhgaXNJblRlc3QtJHt2ZXJzaW9ufWAsICdmYWxzZScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBpbnRlcmZhY2VzLmxvZ2luKClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICBjb250ZW50OiBg55So5oi355m75b2V5aSx6LSl77yM6K+35oiq5Zu+5pys5o+Q56S677yM5bm26IGU57O75rex5aSn5rGq5bOw44CCJHtlLm1lc3NhZ2V9YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGwgbGlzdCBvblNob3cgaW4gZmlyc3QgbG9hZFxyXG4gICAgdGhpcy4kaW52b2tlKCdsaXN0JywgJ29uQ29tcG9uZW50TG9hZCcpXHJcblxyXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHRoaXMubG9hZE5vdGlmaWNhdGlvbnMoKVxyXG4gICAgfSwgMClcclxuXHJcbiAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHRoaXMubG9hZE5vdGlmaWNhdGlvbnMoKVxyXG4gICAgfSwgMTAgKiAxMDAwKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZE5vdGlmaWNhdGlvbnMgKCkge1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IGF3YWl0IGh0dHAoe1xyXG4gICAgICB1cmw6IGFwaS5ub3RpZmljYXRpb25zLmNvdW50LnVybCxcclxuICAgICAgbWV0aG9kOiBhcGkubm90aWZpY2F0aW9ucy5jb3VudC5tZXRob2RcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy51bnJlYWRNZXNzYWdlc0NvdW50ID0gbm90aWZpY2F0aW9ucy5kYXRhLmRhdGEudW5yZWFkTWVzc2FnZXNDb3VudFxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2UgKCkge1xyXG4gIC8vICAgcmV0dXJuIHtcclxuICAvLyAgICAgdGl0bGU6ICfmt7HlpKfmoJHmtJ4nLFxyXG4gIC8vICAgICBkZXNjOiAn5rex5aSn5qCR5rSe6aaW6aG1fuW/q+adpeWMv+WQjeWPkeihqOagkea0nuWVin4nLFxyXG4gIC8vICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4J1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG4iXX0=