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

var User = function (_wepy$component) {
  _inherits(User, _wepy$component);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      userinfo: {},
      blogs: [],
      page: 1
    }, _this.methods = {
      loadNext: function loadNext() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _ref2, data, _blogs;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return (0, _request2.default)({
                    method: _config.api.user.blog.method,
                    url: _config.api.user.blog.url + '?page=' + (_this2.page + 1)
                  });

                case 3:
                  _ref2 = _context.sent;
                  data = _ref2.data;


                  if (data.data.length !== 0) {
                    _this2.page++;

                    (_blogs = _this2.blogs).push.apply(_blogs, _toConsumableArray(data.data));
                    _this2.$apply();
                  }
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '\u52A0\u8F7D\u6570\u636E\u51FA\u9519\uFF0C\u8BF7\u622A\u56FE\u672C\u63D0\u793A\uFF0C\u5E76\u8054\u7CFB\u6DF1\u5927\u6C6A\u5CF0\u3002' + _context.t0.message
                  });

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 8]]);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref4, userInfo, _ref5, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _wepy2.default.getUserInfo();

              case 3:
                _ref4 = _context2.sent;
                userInfo = _ref4.userInfo;

                this.userinfo = userInfo;

                _context2.next = 8;
                return (0, _request2.default)({
                  method: _config.api.user.blog.method,
                  url: _config.api.user.blog.url + '?page=1'
                });

              case 8:
                _ref5 = _context2.sent;
                data = _ref5.data;

                this.blogs = data.data;

                this.$apply();
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](0);

                _wepy2.default.showModal({
                  title: '提示',
                  content: '\u52A0\u8F7D\u9875\u9762\u51FA\u9519\uFF0C\u8BF7\u622A\u56FE\u672C\u63D0\u793A\uFF0C\u5E76\u8054\u7CFB\u6DF1\u5927\u6C6A\u5CF0\u3002' + _context2.t0.message
                });

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 14]]);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return User;
}(_wepy2.default.component);

exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImRhdGEiLCJ1c2VyaW5mbyIsImJsb2dzIiwicGFnZSIsIm1ldGhvZHMiLCJsb2FkTmV4dCIsIm1ldGhvZCIsImFwaSIsInVzZXIiLCJibG9nIiwidXJsIiwibGVuZ3RoIiwicHVzaCIsIiRhcHBseSIsIndlcHkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJtZXNzYWdlIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxZQUFNO0FBSEQsSyxRQTBCUEMsTyxHQUFVO0FBQ0ZDLGNBREUsc0JBQ1U7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVTLHVCQUFLO0FBQzFCQyw0QkFBUUMsWUFBSUMsSUFBSixDQUFTQyxJQUFULENBQWNILE1BREk7QUFFMUJJLHlCQUFRSCxZQUFJQyxJQUFKLENBQVNDLElBQVQsQ0FBY0MsR0FBdEIsZUFBa0MsT0FBS1AsSUFBTCxHQUFZLENBQTlDO0FBRjBCLG1CQUFMLENBRlQ7O0FBQUE7QUFBQTtBQUVOSCxzQkFGTSxTQUVOQSxJQUZNOzs7QUFPZCxzQkFBSUEsS0FBS0EsSUFBTCxDQUFVVyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLDJCQUFLUixJQUFMOztBQUVBLHFDQUFLRCxLQUFMLEVBQVdVLElBQVgsa0NBQW1CWixLQUFLQSxJQUF4QjtBQUNBLDJCQUFLYSxNQUFMO0FBQ0Q7QUFaYTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFjZEMsaUNBQUtDLFNBQUwsQ0FBZTtBQUNiQywyQkFBTyxJQURNO0FBRWJDLHNLQUFrQyxZQUFFQztBQUZ2QixtQkFBZjs7QUFkYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CakI7QUFwQk8sSzs7Ozs7Ozs7Ozs7Ozs7O3VCQWxCcUJKLGVBQUtLLFdBQUwsRTs7OztBQUFuQkMsd0IsU0FBQUEsUTs7QUFDUixxQkFBS25CLFFBQUwsR0FBZ0JtQixRQUFoQjs7O3VCQUV1Qix1QkFBSztBQUMxQmQsMEJBQVFDLFlBQUlDLElBQUosQ0FBU0MsSUFBVCxDQUFjSCxNQURJO0FBRTFCSSx1QkFBUUgsWUFBSUMsSUFBSixDQUFTQyxJQUFULENBQWNDLEdBQXRCO0FBRjBCLGlCQUFMLEM7Ozs7QUFBZlYsb0IsU0FBQUEsSTs7QUFJUixxQkFBS0UsS0FBTCxHQUFhRixLQUFLQSxJQUFsQjs7QUFFQSxxQkFBS2EsTUFBTDs7Ozs7Ozs7QUFFQUMsK0JBQUtDLFNBQUwsQ0FBZTtBQUNiQyx5QkFBTyxJQURNO0FBRWJDLG9LQUFrQyxhQUFFQztBQUZ2QixpQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBCNEJKLGVBQUtPLFM7O2tCQUFsQnRCLEkiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7XHJcbiAgICB1c2VyaW5mbzoge30sXHJcbiAgICBibG9nczogW10sXHJcbiAgICBwYWdlOiAxXHJcbiAgfVxyXG5cclxuICBhc3luYyBvblNob3cgKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICAgIHRoaXMudXNlcmluZm8gPSB1c2VySW5mb1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwKHtcclxuICAgICAgICBtZXRob2Q6IGFwaS51c2VyLmJsb2cubWV0aG9kLFxyXG4gICAgICAgIHVybDogYCR7YXBpLnVzZXIuYmxvZy51cmx9P3BhZ2U9MWBcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5ibG9ncyA9IGRhdGEuZGF0YVxyXG5cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6IGDliqDovb3pobXpnaLlh7rplJnvvIzor7fmiKrlm77mnKzmj5DnpLrvvIzlubbogZTns7vmt7HlpKfmsarls7DjgIIke2UubWVzc2FnZX1gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgYXN5bmMgbG9hZE5leHQgKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6IGFwaS51c2VyLmJsb2cubWV0aG9kLFxyXG4gICAgICAgICAgdXJsOiBgJHthcGkudXNlci5ibG9nLnVybH0/cGFnZT0ke3RoaXMucGFnZSArIDF9YFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChkYXRhLmRhdGEubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnBhZ2UrK1xyXG5cclxuICAgICAgICAgIHRoaXMuYmxvZ3MucHVzaCguLi5kYXRhLmRhdGEpXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogYOWKoOi9veaVsOaNruWHuumUme+8jOivt+aIquWbvuacrOaPkOekuu+8jOW5tuiBlOezu+a3seWkp+axquWzsOOAgiR7ZS5tZXNzYWdlfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==