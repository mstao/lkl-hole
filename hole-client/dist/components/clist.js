'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clist = function (_wepy$component) {
  _inherits(Clist, _wepy$component);

  function Clist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Clist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Clist.__proto__ || Object.getPrototypeOf(Clist)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: Object,
      ads: Object
    }, _this.data = {
      isTest: true
    }, _this.methods = {
      /**
       * 查看大图
       * @param {String} cur 当前展示图片
       * @param {Array}  imageList 展示的图片列表
       */
      viewPic: function viewPic(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },


      /**
       * 点赞
       * @param {Number} idx 点赞树洞的索引
       * @param {Number} id  点赞树洞的 id
       */
      like: function like(idx, id) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var list;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  list = _this2.list;

                  list[idx].like = !list[idx].like;

                  if (list[idx].like) {
                    list[idx].likeNum++;
                  } else {
                    list[idx].likeNum--;
                  }

                  // apply change
                  _this2.$apply();

                  // commit request
                  _context.prev = 4;
                  _context.next = 7;
                  return (0, _request2.default)({
                    url: _config.api.blog.like.url,
                    method: _config.api.blog.like.method,
                    data: {
                      bid: id
                    }
                  });

                case 7:
                  _context.next = 15;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](4);

                  // roll back when request failed
                  console.log(_context.t0);

                  list[idx].like = !list[idx].like;

                  if (list[idx].like) {
                    list[idx].likeNum++;
                  } else {
                    list[idx].likeNum--;
                  }

                  _this2.$apply();

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[4, 9]]);
        }))();
      },


      /**
       * 显示更多操作
       * @param {Number} idx 点赞树洞的索引
       * @param {Number} id  点赞树洞的 id
      */
      showMore: function showMore(idx, id) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _ref2, tapIndex, status;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _wepy2.default.showActionSheet({
                    itemList: ['删除']
                  });

                case 3:
                  _ref2 = _context2.sent;
                  tapIndex = _ref2.tapIndex;

                  if (!(tapIndex === 0)) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.next = 8;
                  return _wepy2.default.showModal({
                    title: '删除',
                    content: '确定要删除这条树洞？',
                    cancelText: '不删了',
                    cancelColor: '#666666',
                    confirmText: '删除吧',
                    confirmColor: '#3CC51F'
                  });

                case 8:
                  status = _context2.sent;

                  if (!status.confirm) {
                    _context2.next = 14;
                    break;
                  }

                  _this3.list.splice(idx, 1);
                  _this3.$apply();

                  _context2.next = 14;
                  return (0, _request2.default)({
                    url: _config.api.blog.delete.url,
                    method: _config.api.blog.delete.method,
                    data: {
                      bid: id
                    }
                  });

                case 14:
                  _context2.next = 19;
                  break;

                case 16:
                  _context2.prev = 16;
                  _context2.t0 = _context2['catch'](0);

                  console.log('User cancel');

                case 19:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[0, 16]]);
        }))();
      },


      /**
       * 显示地图
       * @param {Float} latitude  纬度
       * @param {Float} longitude 经度
       */
      showLocation: function showLocation(latitude, longitude) {
        _wepy2.default.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Clist, [{
    key: 'onComponentLoad',
    value: function onComponentLoad() {
      this.isTest = !Boolean(_wepy2.default.getStorageSync('isInTest-' + _config.version));
      this.$apply();
    }
  }]);

  return Clist;
}(_wepy2.default.component);

exports.default = Clist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaXN0LmpzIl0sIm5hbWVzIjpbIkNsaXN0IiwicHJvcHMiLCJsaXN0IiwiT2JqZWN0IiwiYWRzIiwiZGF0YSIsImlzVGVzdCIsIm1ldGhvZHMiLCJ2aWV3UGljIiwiY3VyIiwiaW1hZ2VMaXN0Iiwid2VweSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwibGlrZSIsImlkeCIsImlkIiwibGlrZU51bSIsIiRhcHBseSIsInVybCIsImFwaSIsImJsb2ciLCJtZXRob2QiLCJiaWQiLCJjb25zb2xlIiwibG9nIiwic2hvd01vcmUiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInRhcEluZGV4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzdGF0dXMiLCJjb25maXJtIiwic3BsaWNlIiwiZGVsZXRlIiwic2hvd0xvY2F0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJvcGVuTG9jYXRpb24iLCJzY2FsZSIsIkJvb2xlYW4iLCJnZXRTdG9yYWdlU3luYyIsInZlcnNpb24iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU1DLE1BREE7QUFFTkMsV0FBS0Q7QUFGQyxLLFFBS1JFLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSyxRQUlQQyxPLEdBQVU7QUFDUjs7Ozs7QUFLQUMsYUFOUSxtQkFNQ0MsR0FORCxFQU1NQyxTQU5OLEVBTWlCO0FBQ3ZCQyx1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMsbUJBQVNKLEdBRE87QUFFaEJLLGdCQUFNSjtBQUZVLFNBQWxCO0FBSUQsT0FYTzs7O0FBYVI7Ozs7O0FBS01LLFVBbEJFLGdCQWtCSUMsR0FsQkosRUFrQlNDLEVBbEJULEVBa0Jh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QUFLcUMsY0FBTCxlQUFnQ0MsZUFBaEMsQ0FBUixDQUFmO0FBQ0EsV0FBSzlCLE1BQUw7QUFDRDs7OztFQTVIZ0NSLGVBQUt1QyxTOztrQkFBbkJsRCxLIiwiZmlsZSI6ImNsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXHJcbmltcG9ydCB7IGFwaSwgdmVyc2lvbiB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgbGlzdDogT2JqZWN0LFxyXG4gICAgYWRzOiBPYmplY3RcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBpc1Rlc3Q6IHRydWVcclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIOafpeeci+Wkp+WbvlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGN1ciDlvZPliY3lsZXnpLrlm77niYdcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBpbWFnZUxpc3Qg5bGV56S655qE5Zu+54mH5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHZpZXdQaWMgKGN1ciwgaW1hZ2VMaXN0KSB7XHJcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcclxuICAgICAgICBjdXJyZW50OiBjdXIsXHJcbiAgICAgICAgdXJsczogaW1hZ2VMaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54K56LWeXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWR4IOeCuei1nuagkea0nueahOe0ouW8lVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkICDngrnotZ7moJHmtJ7nmoQgaWRcclxuICAgICAqL1xyXG4gICAgYXN5bmMgbGlrZSAoaWR4LCBpZCkge1xyXG4gICAgICBjb25zdCBsaXN0ID0gdGhpcy5saXN0XHJcbiAgICAgIGxpc3RbaWR4XS5saWtlID0gIWxpc3RbaWR4XS5saWtlXHJcblxyXG4gICAgICBpZiAobGlzdFtpZHhdLmxpa2UpIHtcclxuICAgICAgICBsaXN0W2lkeF0ubGlrZU51bSsrXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdFtpZHhdLmxpa2VOdW0tLVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBseSBjaGFuZ2VcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG5cclxuICAgICAgLy8gY29tbWl0IHJlcXVlc3RcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBodHRwKHtcclxuICAgICAgICAgIHVybDogYXBpLmJsb2cubGlrZS51cmwsXHJcbiAgICAgICAgICBtZXRob2Q6IGFwaS5ibG9nLmxpa2UubWV0aG9kLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBiaWQ6IGlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIHJvbGwgYmFjayB3aGVuIHJlcXVlc3QgZmFpbGVkXHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuXHJcbiAgICAgICAgbGlzdFtpZHhdLmxpa2UgPSAhbGlzdFtpZHhdLmxpa2VcclxuXHJcbiAgICAgICAgaWYgKGxpc3RbaWR4XS5saWtlKSB7XHJcbiAgICAgICAgICBsaXN0W2lkeF0ubGlrZU51bSsrXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxpc3RbaWR4XS5saWtlTnVtLS1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuabtOWkmuaTjeS9nFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkeCDngrnotZ7moJHmtJ7nmoTntKLlvJVcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZCAg54K56LWe5qCR5rSe55qEIGlkXHJcbiAgICAqL1xyXG4gICAgYXN5bmMgc2hvd01vcmUgKGlkeCwgaWQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHRhcEluZGV4IH0gPSBhd2FpdCB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XHJcbiAgICAgICAgICBpdGVtTGlzdDogW1xyXG4gICAgICAgICAgICAn5Yig6ZmkJ1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0YXBJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WIoOmZpCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfnoa7lrpropoHliKDpmaTov5nmnaHmoJHmtJ7vvJ8nLFxyXG4gICAgICAgICAgICBjYW5jZWxUZXh0OiAn5LiN5Yig5LqGJyxcclxuICAgICAgICAgICAgY2FuY2VsQ29sb3I6ICcjNjY2NjY2JyxcclxuICAgICAgICAgICAgY29uZmlybVRleHQ6ICfliKDpmaTlkKcnLFxyXG4gICAgICAgICAgICBjb25maXJtQ29sb3I6ICcjM0NDNTFGJ1xyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICBpZiAoc3RhdHVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnNwbGljZShpZHgsIDEpXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGh0dHAoe1xyXG4gICAgICAgICAgICAgIHVybDogYXBpLmJsb2cuZGVsZXRlLnVybCxcclxuICAgICAgICAgICAgICBtZXRob2Q6IGFwaS5ibG9nLmRlbGV0ZS5tZXRob2QsXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYmlkOiBpZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBjYW5jZWwnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65Zyw5Zu+XHJcbiAgICAgKiBAcGFyYW0ge0Zsb2F0fSBsYXRpdHVkZSAg57qs5bqmXHJcbiAgICAgKiBAcGFyYW0ge0Zsb2F0fSBsb25naXR1ZGUg57uP5bqmXHJcbiAgICAgKi9cclxuICAgIHNob3dMb2NhdGlvbiAobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xyXG4gICAgICB3ZXB5Lm9wZW5Mb2NhdGlvbih7XHJcbiAgICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlLFxyXG4gICAgICAgIHNjYWxlOiAyOFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Db21wb25lbnRMb2FkICgpIHtcclxuICAgIHRoaXMuaXNUZXN0ID0gIUJvb2xlYW4od2VweS5nZXRTdG9yYWdlU3luYyhgaXNJblRlc3QtJHt2ZXJzaW9ufWApKVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxufVxyXG4iXX0=