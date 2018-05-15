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

var _sensitiveWordChecker = require('./../utils/sensitiveWordChecker.js');

var _sensitiveWordChecker2 = _interopRequireDefault(_sensitiveWordChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewBlog = function (_wepy$page) {
  _inherits(NewBlog, _wepy$page);

  function NewBlog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewBlog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewBlog.__proto__ || Object.getPrototypeOf(NewBlog)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发布新树洞'
    }, _this.data = {
      content: '',
      images: [],
      isAnonymous: false,
      device: '',
      location: '',
      latitude: '',
      longitude: '',
      disabled: true
    }, _this.methods = {
      /**
       * 输入监听器
       * 自动映射到 content
       * @param {Event} e 输入事件
       */
      inputChange: function inputChange(e) {
        this.content = e.detail.value;
        this.disabled = e.detail.value === '';
      },


      /**
       * 选择图片
       */
      chooseImage: function chooseImage() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _images;

          var _ref2, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 9 - _this2.images.length,
                    sizeType: 'compressed'
                  });

                case 2:
                  _ref2 = _context.sent;
                  tempFilePaths = _ref2.tempFilePaths;

                  (_images = _this2.images).push.apply(_images, _toConsumableArray(tempFilePaths));
                  _this2.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },


      /**
       * 查看大图
       * @param {String} cur 当前展示图片
       * @param {Array}  imageList 展示的图片列表
       */
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },


      /**
       * 删除选中图片
       * @param {Number} idx 要删除的图片索引
       */
      deleteImage: function deleteImage(idx) {
        this.images.splice(idx, 1);
        this.$apply();
      },


      /**
       * 添加位置
       */
      chooseLocation: function chooseLocation() {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _ref3, name, latitude, longitude;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _wepy2.default.chooseLocation();

                case 3:
                  _ref3 = _context2.sent;
                  name = _ref3.name;
                  latitude = _ref3.latitude;
                  longitude = _ref3.longitude;

                  _this3.location = name;
                  _this3.latitude = latitude;
                  _this3.longitude = longitude;
                  _this3.$apply();
                  _context2.next = 15;
                  break;

                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2['catch'](0);

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[0, 13]]);
        }))();
      },


      /**
       * 删除地理位置
       */
      removeLocation: function removeLocation() {
        this.location = '';
        this.latitude = '';
        this.longitude = '';
        this.$apply();
      },


      /**
       * 切换实名、匿名
       */
      anonymousChange: function anonymousChange() {
        this.isAnonymous = !this.isAnonymous;
        this.$apply();
      },


      /**
       * 发送树洞
       */
      send: function send() {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var status, pack, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, r;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _wepy2.default.showToast({
                    title: '发送中...',
                    icon: 'loading',
                    duration: 10000,
                    mask: true
                  });

                  if (!(0, _sensitiveWordChecker2.default)(_this4.content)) {
                    _context3.next = 5;
                    break;
                  }

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '包含敏感词汇，发送失败：）',
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 5:
                  if (!/自杀|不想活了/.test(_this4.content)) {
                    _context3.next = 17;
                    break;
                  }

                  _wepy2.default.hideToast();
                  _context3.next = 9;
                  return _wepy2.default.showModal({
                    title: '温馨提示',
                    content: '需要帮助？深圳 24 小时免费心理咨询热线：0755-28793123',
                    cancelText: '拨打热线',
                    cancelColor: '#3CC51F',
                    confirmText: '继续发送',
                    confirmColor: '#666666'
                  });

                case 9:
                  status = _context3.sent;

                  if (status.confirm) {
                    _context3.next = 16;
                    break;
                  }

                  _context3.next = 13;
                  return _wepy2.default.makePhoneCall({
                    phoneNumber: '0755-28793123'
                  });

                case 13:
                  return _context3.abrupt('return');

                case 16:
                  _wepy2.default.showToast({
                    title: '发送中...',
                    icon: 'loading',
                    duration: 10000,
                    mask: true
                  });

                case 17:
                  pack = {
                    content: _this4.content,
                    isAnonymous: _this4.isAnonymous,
                    images: [],
                    device: _this4.device,
                    location: _this4.location,
                    latitude: _this4.latitude,
                    longitude: _this4.longitude

                    // upload images
                  };

                  if (!(_this4.images.length > 0)) {
                    _context3.next = 62;
                    break;
                  }

                  _context3.prev = 19;
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context3.prev = 23;
                  _iterator = _this4.images[Symbol.iterator]();

                case 25:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context3.next = 41;
                    break;
                  }

                  v = _step.value;
                  _context3.next = 29;
                  return _wepy2.default.uploadFile({
                    url: _config.api.blog.imageUpload.url,
                    filePath: v,
                    name: 'file',
                    header: {
                      'x-wechat-session': _wepy2.default.getStorageSync('_session')
                    }
                  });

                case 29:
                  r = _context3.sent;


                  r.data = JSON.parse(r.data);

                  if (!(r.data.errcode === 0 && r.data.data.url)) {
                    _context3.next = 35;
                    break;
                  }

                  pack.images.push(r.data.data.url);
                  _context3.next = 38;
                  break;

                case 35:
                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '服务器错误，上传图片失败。请重试~：）' + r.data.errmsg,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 38:
                  _iteratorNormalCompletion = true;
                  _context3.next = 25;
                  break;

                case 41:
                  _context3.next = 47;
                  break;

                case 43:
                  _context3.prev = 43;
                  _context3.t0 = _context3['catch'](23);
                  _didIteratorError = true;
                  _iteratorError = _context3.t0;

                case 47:
                  _context3.prev = 47;
                  _context3.prev = 48;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 50:
                  _context3.prev = 50;

                  if (!_didIteratorError) {
                    _context3.next = 53;
                    break;
                  }

                  throw _iteratorError;

                case 53:
                  return _context3.finish(50);

                case 54:
                  return _context3.finish(47);

                case 55:
                  _context3.next = 62;
                  break;

                case 57:
                  _context3.prev = 57;
                  _context3.t1 = _context3['catch'](19);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '服务器错误，上传图片失败。请重试或截图本提示联系深大汪峰。' + _context3.t1.message,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 62:
                  _context3.prev = 62;
                  _context3.next = 65;
                  return (0, _request2.default)({
                    url: _config.api.blog.new.url,
                    method: _config.api.blog.new.method,
                    data: pack
                  });

                case 65:
                  _context3.next = 72;
                  break;

                case 67:
                  _context3.prev = 67;
                  _context3.t2 = _context3['catch'](62);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '发送树洞失败。请截图本提示，联系深大汪峰。' + _context3.t2.message,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 72:

                  _wepy2.default.hideToast();
                  _context3.next = 75;
                  return _wepy2.default.showToast({
                    title: '发送成功！',
                    icon: 'success',
                    duration: 1500,
                    mask: true
                  });

                case 75:

                  // save status
                  _wepy2.default.setStorageSync('isNeedReloadList', 'true');

                  _context3.next = 78;
                  return _wepy2.default.navigateBack({
                    delta: 1
                  });

                case 78:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[19, 57], [23, 43, 47, 55], [48,, 50, 54], [62, 67]]);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewBlog, [{
    key: 'onShow',


    // load device info
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _ref5, model;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wepy2.default.getSystemInfo();

              case 2:
                _ref5 = _context4.sent;
                model = _ref5.model;

                this.device = model.replace(/<.*>/, '');

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return NewBlog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewBlog , 'pages/new'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy5qcyJdLCJuYW1lcyI6WyJOZXdCbG9nIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb250ZW50IiwiaW1hZ2VzIiwiaXNBbm9ueW1vdXMiLCJkZXZpY2UiLCJsb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZGlzYWJsZWQiLCJtZXRob2RzIiwiaW5wdXRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjaG9vc2VJbWFnZSIsIndlcHkiLCJjb3VudCIsImxlbmd0aCIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsInB1c2giLCIkYXBwbHkiLCJwcmV2aWV3SW1hZ2UiLCJjdXIiLCJpbWFnZUxpc3QiLCJjdXJyZW50IiwidXJscyIsImRlbGV0ZUltYWdlIiwiaWR4Iiwic3BsaWNlIiwiY2hvb3NlTG9jYXRpb24iLCJuYW1lIiwicmVtb3ZlTG9jYXRpb24iLCJhbm9ueW1vdXNDaGFuZ2UiLCJzZW5kIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiaGlkZVRvYXN0Iiwic2hvd01vZGFsIiwic2hvd0NhbmNlbCIsInRlc3QiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInN0YXR1cyIsImNvbmZpcm0iLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJwYWNrIiwidiIsInVwbG9hZEZpbGUiLCJ1cmwiLCJhcGkiLCJibG9nIiwiaW1hZ2VVcGxvYWQiLCJmaWxlUGF0aCIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwiciIsIkpTT04iLCJwYXJzZSIsImVycmNvZGUiLCJlcnJtc2ciLCJtZXNzYWdlIiwibmV3IiwibWV0aG9kIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFN5c3RlbUluZm8iLCJtb2RlbCIsInJlcGxhY2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7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QXNCLEVBQXRCLENBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvTmlDNUQsZUFBSzZELEk7O2tCQUFyQi9FLE8iLCJmaWxlIjoibmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IGh0dHAgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCdcclxuaW1wb3J0IHNlbnNpdGl2ZVdvcmRDaGVja2VyIGZyb20gJy4uL3V0aWxzL3NlbnNpdGl2ZVdvcmRDaGVja2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3QmxvZyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeW4g+aWsOagkea0nidcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGltYWdlczogW10sXHJcbiAgICBpc0Fub255bW91czogZmFsc2UsXHJcbiAgICBkZXZpY2U6ICcnLFxyXG4gICAgbG9jYXRpb246ICcnLFxyXG4gICAgbGF0aXR1ZGU6ICcnLFxyXG4gICAgbG9uZ2l0dWRlOiAnJyxcclxuICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDovpPlhaXnm5HlkKzlmahcclxuICAgICAqIOiHquWKqOaYoOWwhOWIsCBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIOi+k+WFpeS6i+S7tlxyXG4gICAgICovXHJcbiAgICBpbnB1dENoYW5nZSAoZSkge1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLmRpc2FibGVkID0gZS5kZXRhaWwudmFsdWUgPT09ICcnXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCJ5oup5Zu+54mHXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNob29zZUltYWdlICgpIHtcclxuICAgICAgY29uc3QgeyB0ZW1wRmlsZVBhdGhzIH0gPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcclxuICAgICAgICBjb3VudDogOSAtIHRoaXMuaW1hZ2VzLmxlbmd0aCxcclxuICAgICAgICBzaXplVHlwZTogJ2NvbXByZXNzZWQnXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuaW1hZ2VzLnB1c2goLi4udGVtcEZpbGVQYXRocylcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOafpeeci+Wkp+WbvlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGN1ciDlvZPliY3lsZXnpLrlm77niYdcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBpbWFnZUxpc3Qg5bGV56S655qE5Zu+54mH5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgIGN1cnJlbnQ6IGN1cixcclxuICAgICAgICB1cmxzOiBpbWFnZUxpc3RcclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTpgInkuK3lm77niYdcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZHgg6KaB5Yig6Zmk55qE5Zu+54mH57Si5byVXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUltYWdlIChpZHgpIHtcclxuICAgICAgdGhpcy5pbWFnZXMuc3BsaWNlKGlkeCwgMSlcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS9jee9rlxyXG4gICAgICovXHJcbiAgICBhc3luYyBjaG9vc2VMb2NhdGlvbiAoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBhd2FpdCB3ZXB5LmNob29zZUxvY2F0aW9uKClcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbmFtZVxyXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSBsYXRpdHVkZVxyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9uZ2l0dWRlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOWcsOeQhuS9jee9rlxyXG4gICAgICovXHJcbiAgICByZW1vdmVMb2NhdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24gPSAnJ1xyXG4gICAgICB0aGlzLmxhdGl0dWRlID0gJydcclxuICAgICAgdGhpcy5sb25naXR1ZGUgPSAnJ1xyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YiH5o2i5a6e5ZCN44CB5Yy/5ZCNXHJcbiAgICAgKi9cclxuICAgIGFub255bW91c0NoYW5nZSAoKSB7XHJcbiAgICAgIHRoaXMuaXNBbm9ueW1vdXMgPSAhdGhpcy5pc0Fub255bW91c1xyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB5qCR5rSeXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNlbmQgKCkge1xyXG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflj5HpgIHkuK0uLi4nLFxyXG4gICAgICAgIGljb246ICdsb2FkaW5nJyxcclxuICAgICAgICBkdXJhdGlvbjogMTAwMDAsXHJcbiAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHNlbnNpdGl2ZVdvcmRDaGVja2VyKHRoaXMuY29udGVudCkpIHtcclxuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+WMheWQq+aVj+aEn+ivjeaxh++8jOWPkemAgeWksei0pe+8mu+8iScsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgv6Ieq5p2AfOS4jeaDs+a0u+S6hi8udGVzdCh0aGlzLmNvbnRlbnQpKSB7XHJcbiAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfpnIDopoHluK7liqnvvJ/mt7HlnLMgMjQg5bCP5pe25YWN6LS55b+D55CG5ZKo6K+i54Ot57q/77yaMDc1NS0yODc5MzEyMycsXHJcbiAgICAgICAgICBjYW5jZWxUZXh0OiAn5ouo5omT54Ot57q/JyxcclxuICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzNDQzUxRicsXHJcbiAgICAgICAgICBjb25maXJtVGV4dDogJ+e7p+e7reWPkemAgScsXHJcbiAgICAgICAgICBjb25maXJtQ29sb3I6ICcjNjY2NjY2J1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghc3RhdHVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgIGF3YWl0IHdlcHkubWFrZVBob25lQ2FsbCh7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiAnMDc1NS0yODc5MzEyMydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WPkemAgeS4rS4uLicsXHJcbiAgICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAwLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGFjayA9IHtcclxuICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgaXNBbm9ueW1vdXM6IHRoaXMuaXNBbm9ueW1vdXMsXHJcbiAgICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgICBkZXZpY2U6IHRoaXMuZGV2aWNlLFxyXG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxyXG4gICAgICAgIGxhdGl0dWRlOiB0aGlzLmxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZTogdGhpcy5sb25naXR1ZGVcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdXBsb2FkIGltYWdlc1xyXG4gICAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBmb3IgKGxldCB2IG9mIHRoaXMuaW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBhd2FpdCB3ZXB5LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgIHVybDogYXBpLmJsb2cuaW1hZ2VVcGxvYWQudXJsLFxyXG4gICAgICAgICAgICAgIGZpbGVQYXRoOiB2LFxyXG4gICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICd4LXdlY2hhdC1zZXNzaW9uJzogd2VweS5nZXRTdG9yYWdlU3luYygnX3Nlc3Npb24nKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHIuZGF0YSA9IEpTT04ucGFyc2Uoci5kYXRhKVxyXG5cclxuICAgICAgICAgICAgaWYgKHIuZGF0YS5lcnJjb2RlID09PSAwICYmIHIuZGF0YS5kYXRhLnVybCkge1xyXG4gICAgICAgICAgICAgIHBhY2suaW1hZ2VzLnB1c2goci5kYXRhLmRhdGEudXJsKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CC6K+36YeN6K+Vfu+8mu+8iScgKyByLmRhdGEuZXJybXNnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmnI3liqHlmajplJnor6/vvIzkuIrkvKDlm77niYflpLHotKXjgILor7fph43or5XmiJbmiKrlm77mnKzmj5DnpLrogZTns7vmt7HlpKfmsarls7DjgIInICsgZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdXBsb2FkIGJsb2dcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBodHRwKHtcclxuICAgICAgICAgIHVybDogYXBpLmJsb2cubmV3LnVybCxcclxuICAgICAgICAgIG1ldGhvZDogYXBpLmJsb2cubmV3Lm1ldGhvZCxcclxuICAgICAgICAgIGRhdGE6IHBhY2tcclxuICAgICAgICB9KVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxyXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICflj5HpgIHmoJHmtJ7lpLHotKXjgILor7fmiKrlm77mnKzmj5DnpLrvvIzogZTns7vmt7HlpKfmsarls7DjgIInICsgZS5tZXNzYWdlLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB3ZXB5LmhpZGVUb2FzdCgpXHJcbiAgICAgIGF3YWl0IHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKn++8gScsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIHNhdmUgc3RhdHVzXHJcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2lzTmVlZFJlbG9hZExpc3QnLCAndHJ1ZScpXHJcblxyXG4gICAgICBhd2FpdCB3ZXB5Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgZGVsdGE6IDFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGxvYWQgZGV2aWNlIGluZm9cclxuICBhc3luYyBvblNob3cgKCkge1xyXG4gICAgY29uc3QgeyBtb2RlbCB9ID0gYXdhaXQgd2VweS5nZXRTeXN0ZW1JbmZvKClcclxuICAgIHRoaXMuZGV2aWNlID0gbW9kZWwucmVwbGFjZSgvPC4qPi8sICcnKVxyXG4gIH1cclxufVxyXG4iXX0=