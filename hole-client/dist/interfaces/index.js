'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var interfaces = {
  getUserInfo: function getUserInfo() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var loginData, userinfo;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _wepy2.default.login();

            case 2:
              loginData = _context.sent;
              _context.next = 5;
              return _wepy2.default.getUserInfo();

            case 5:
              userinfo = _context.sent;

              userinfo.code = loginData.code;
              return _context.abrupt('return', userinfo);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  login: function login() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var userinfoRaw, userinfo;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userinfoRaw = {};
              userinfo = {};
              _context2.prev = 2;
              _context2.next = 5;
              return interfaces.getUserInfo();

            case 5:
              userinfoRaw = _context2.sent;
              _context2.next = 8;
              return _wepy2.default.request({
                url: _config.api.user.login.url,
                method: _config.api.user.login.method,
                header: {
                  'x-wechat-code': userinfoRaw.code,
                  'x-wechat-encrypted': userinfoRaw.encryptedData,
                  'x-wechat-iv': userinfoRaw.iv
                },
                dataType: 'json',
                data: {}
              });

            case 8:
              userinfo = _context2.sent;
              _context2.next = 11;
              return _wepy2.default.setStorage({
                key: '_session',
                data: userinfo.data.data.session
              });

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2['catch'](2);

              _wepy2.default.showModal({
                title: '提示',
                content: '\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u8FDB\u5165\u3002' + _context2.t0.message
              });

            case 16:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[2, 13]]);
    }))();
  }
};

exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsIndlcHkiLCJsb2dpbiIsImxvZ2luRGF0YSIsInVzZXJpbmZvIiwiY29kZSIsInVzZXJpbmZvUmF3IiwicmVxdWVzdCIsInVybCIsImFwaSIsInVzZXIiLCJtZXRob2QiLCJoZWFkZXIiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJkYXRhVHlwZSIsImRhdGEiLCJzZXRTdG9yYWdlIiwia2V5Iiwic2Vzc2lvbiIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWE7QUFDWEMsYUFEVyx5QkFDSTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0tDLGVBQUtDLEtBQUwsRUFETDs7QUFBQTtBQUNiQyx1QkFEYTtBQUFBO0FBQUEscUJBRUlGLGVBQUtELFdBQUwsRUFGSjs7QUFBQTtBQUViSSxzQkFGYTs7QUFHbkJBLHVCQUFTQyxJQUFULEdBQWdCRixVQUFVRSxJQUExQjtBQUhtQiwrQ0FJWkQsUUFKWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtwQixHQU5nQjtBQU9YRixPQVBXLG1CQU9GO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RJLHlCQURTLEdBQ0ssRUFETDtBQUVURixzQkFGUyxHQUVFLEVBRkY7QUFBQTtBQUFBO0FBQUEscUJBS1NMLFdBQVdDLFdBQVgsRUFMVDs7QUFBQTtBQUtYTSx5QkFMVztBQUFBO0FBQUEscUJBTU1MLGVBQUtNLE9BQUwsQ0FBYTtBQUM1QkMscUJBQUtDLFlBQUlDLElBQUosQ0FBU1IsS0FBVCxDQUFlTSxHQURRO0FBRTVCRyx3QkFBUUYsWUFBSUMsSUFBSixDQUFTUixLQUFULENBQWVTLE1BRks7QUFHNUJDLHdCQUFRO0FBQ04sbUNBQWlCTixZQUFZRCxJQUR2QjtBQUVOLHdDQUFzQkMsWUFBWU8sYUFGNUI7QUFHTixpQ0FBZVAsWUFBWVE7QUFIckIsaUJBSG9CO0FBUTVCQywwQkFBVSxNQVJrQjtBQVM1QkMsc0JBQU07QUFUc0IsZUFBYixDQU5OOztBQUFBO0FBTVhaLHNCQU5XO0FBQUE7QUFBQSxxQkFrQkxILGVBQUtnQixVQUFMLENBQWdCO0FBQ3BCQyxxQkFBSyxVQURlO0FBRXBCRixzQkFBTVosU0FBU1ksSUFBVCxDQUFjQSxJQUFkLENBQW1CRztBQUZMLGVBQWhCLENBbEJLOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBdUJYbEIsNkJBQUttQixTQUFMLENBQWU7QUFDYkMsdUJBQU8sSUFETTtBQUViQyxvSUFBNkIsYUFBRUM7QUFGbEIsZUFBZjs7QUF2Qlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0QmQ7QUFuQ2dCLENBQW5COztrQkFzQ2V4QixVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuY29uc3QgaW50ZXJmYWNlcyA9IHtcclxuICBhc3luYyBnZXRVc2VySW5mbyAoKSB7XHJcbiAgICBjb25zdCBsb2dpbkRhdGEgPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgIGNvbnN0IHVzZXJpbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICB1c2VyaW5mby5jb2RlID0gbG9naW5EYXRhLmNvZGVcclxuICAgIHJldHVybiB1c2VyaW5mb1xyXG4gIH0sXHJcbiAgYXN5bmMgbG9naW4gKCkge1xyXG4gICAgbGV0IHVzZXJpbmZvUmF3ID0ge31cclxuICAgIGxldCB1c2VyaW5mbyA9IHt9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdXNlcmluZm9SYXcgPSBhd2FpdCBpbnRlcmZhY2VzLmdldFVzZXJJbmZvKClcclxuICAgICAgdXNlcmluZm8gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYXBpLnVzZXIubG9naW4udXJsLFxyXG4gICAgICAgIG1ldGhvZDogYXBpLnVzZXIubG9naW4ubWV0aG9kLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ3gtd2VjaGF0LWNvZGUnOiB1c2VyaW5mb1Jhdy5jb2RlLFxyXG4gICAgICAgICAgJ3gtd2VjaGF0LWVuY3J5cHRlZCc6IHVzZXJpbmZvUmF3LmVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAneC13ZWNoYXQtaXYnOiB1c2VyaW5mb1Jhdy5pdlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBkYXRhOiB7fVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgYXdhaXQgd2VweS5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICdfc2Vzc2lvbicsXHJcbiAgICAgICAgZGF0YTogdXNlcmluZm8uZGF0YS5kYXRhLnNlc3Npb25cclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICBjb250ZW50OiBg6I635Y+W55So5oi35L+h5oGv5aSx6LSl77yM6K+35YWz6Zet6YeN5paw6L+b5YWl44CCJHtlLm1lc3NhZ2V9YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlc1xyXG4iXX0=