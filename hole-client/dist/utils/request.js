'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _interfaces = require('./../interfaces/index.js');

var _interfaces2 = _interopRequireDefault(_interfaces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (options.header) {
              options.header['x-wechat-session'] = _wepy2.default.getStorageSync('_session');
            } else {
              options.header = {
                'x-wechat-session': _wepy2.default.getStorageSync('_session')
              };
            }

            _context.next = 3;
            return _wepy2.default.request(options);

          case 3:
            response = _context.sent;

            if (!(response.statusCode === 401)) {
              _context.next = 12;
              break;
            }

            _context.next = 7;
            return _interfaces2.default.login();

          case 7:
            _context.next = 9;
            return request(options);

          case 9:
            return _context.abrupt('return', _context.sent);

          case 12:
            if (!(response.statusCode === 500)) {
              _context.next = 16;
              break;
            }

            _wepy2.default.showModal({
              title: '提示',
              content: '\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u622A\u56FE\u672C\u63D0\u793A\uFF0C\u5E76\u8054\u7CFB\u6DF1\u5927\u6C6A\u5CF0\u3002' + response.data.errmsg
            });
            _context.next = 17;
            break;

          case 16:
            return _context.abrupt('return', response);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function request(_x) {
    return _ref.apply(this, arguments);
  }

  return request;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsib3B0aW9ucyIsImhlYWRlciIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsInJlcXVlc3QiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJpbnRlcmZhY2VzIiwibG9naW4iLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRhIiwiZXJybXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7cUVBRWUsaUJBQXdCQSxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixnQkFBSUEsUUFBUUMsTUFBWixFQUFvQjtBQUNsQkQsc0JBQVFDLE1BQVIsQ0FBZSxrQkFBZixJQUFxQ0MsZUFBS0MsY0FBTCxDQUFvQixVQUFwQixDQUFyQztBQUNELGFBRkQsTUFFTztBQUNMSCxzQkFBUUMsTUFBUixHQUFpQjtBQUNmLG9DQUFvQkMsZUFBS0MsY0FBTCxDQUFvQixVQUFwQjtBQURMLGVBQWpCO0FBR0Q7O0FBUFk7QUFBQSxtQkFTUUQsZUFBS0UsT0FBTCxDQUFhSixPQUFiLENBVFI7O0FBQUE7QUFTVEssb0JBVFM7O0FBQUEsa0JBV1RBLFNBQVNDLFVBQVQsS0FBd0IsR0FYZjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQVlMQyxxQkFBV0MsS0FBWCxFQVpLOztBQUFBO0FBQUE7QUFBQSxtQkFhRUosUUFBUUosT0FBUixDQWJGOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxrQkFjRkssU0FBU0MsVUFBVCxLQUF3QixHQWR0QjtBQUFBO0FBQUE7QUFBQTs7QUFlWEosMkJBQUtPLFNBQUwsQ0FBZTtBQUNiQyxxQkFBTyxJQURNO0FBRWJDLDBKQUFpQ04sU0FBU08sSUFBVCxDQUFjQztBQUZsQyxhQUFmO0FBZlc7QUFBQTs7QUFBQTtBQUFBLDZDQW9CSlIsUUFwQkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7V0FBZUQsTzs7OztTQUFBQSxPIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgaW50ZXJmYWNlcyBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCAob3B0aW9ucykge1xyXG4gIGlmIChvcHRpb25zLmhlYWRlcikge1xyXG4gICAgb3B0aW9ucy5oZWFkZXJbJ3gtd2VjaGF0LXNlc3Npb24nXSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ19zZXNzaW9uJylcclxuICB9IGVsc2Uge1xyXG4gICAgb3B0aW9ucy5oZWFkZXIgPSB7XHJcbiAgICAgICd4LXdlY2hhdC1zZXNzaW9uJzogd2VweS5nZXRTdG9yYWdlU3luYygnX3Nlc3Npb24nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgd2VweS5yZXF1ZXN0KG9wdGlvbnMpXHJcblxyXG4gIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSA0MDEpIHtcclxuICAgIGF3YWl0IGludGVyZmFjZXMubG9naW4oKVxyXG4gICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Qob3B0aW9ucylcclxuICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDUwMCkge1xyXG4gICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgIGNvbnRlbnQ6IGDmnI3liqHlmajplJnor6/vvIzor7fmiKrlm77mnKzmj5DnpLrvvIzlubbogZTns7vmt7HlpKfmsarls7DjgIIke3Jlc3BvbnNlLmRhdGEuZXJybXNnfWBcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByZXNwb25zZVxyXG4gIH1cclxufVxyXG4iXX0=