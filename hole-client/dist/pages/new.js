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
                    formData: {
                      _session: _wepy2.default.getStorageSync('_session')
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy5qcyJdLCJuYW1lcyI6WyJOZXdCbG9nIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb250ZW50IiwiaW1hZ2VzIiwiaXNBbm9ueW1vdXMiLCJkZXZpY2UiLCJsb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZGlzYWJsZWQiLCJtZXRob2RzIiwiaW5wdXRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjaG9vc2VJbWFnZSIsIndlcHkiLCJjb3VudCIsImxlbmd0aCIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsInB1c2giLCIkYXBwbHkiLCJwcmV2aWV3SW1hZ2UiLCJjdXIiLCJpbWFnZUxpc3QiLCJjdXJyZW50IiwidXJscyIsImRlbGV0ZUltYWdlIiwiaWR4Iiwic3BsaWNlIiwiY2hvb3NlTG9jYXRpb24iLCJuYW1lIiwicmVtb3ZlTG9jYXRpb24iLCJhbm9ueW1vdXNDaGFuZ2UiLCJzZW5kIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiaGlkZVRvYXN0Iiwic2hvd01vZGFsIiwic2hvd0NhbmNlbCIsInRlc3QiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInN0YXR1cyIsImNvbmZpcm0iLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJwYWNrIiwidiIsInVwbG9hZEZpbGUiLCJ1cmwiLCJhcGkiLCJibG9nIiwiaW1hZ2VVcGxvYWQiLCJmaWxlUGF0aCIsImZvcm1EYXRhIiwiX3Nlc3Npb24iLCJnZXRTdG9yYWdlU3luYyIsInIiLCJKU09OIiwicGFyc2UiLCJlcnJjb2RlIiwiZXJybXNnIiwibWVzc2FnZSIsIm5ldyIsIm1ldGhvZCIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJnZXRTeXN0ZW1JbmZvIiwibW9kZWwiLCJyZXBsYWNlIiwicGFnZSJdLCJt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LENBQWMsTUFBZCxFQUFzQixFQUF0QixDQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL05pQzdELGVBQUs4RCxJOztrQkFBckJoRixPIiwiZmlsZSI6Im5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXHJcbmltcG9ydCBzZW5zaXRpdmVXb3JkQ2hlY2tlciBmcm9tICcuLi91dGlscy9zZW5zaXRpdmVXb3JkQ2hlY2tlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0Jsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HluIPmlrDmoJHmtJ4nXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgY29udGVudDogJycsXHJcbiAgICBpbWFnZXM6IFtdLFxyXG4gICAgaXNBbm9ueW1vdXM6IGZhbHNlLFxyXG4gICAgZGV2aWNlOiAnJyxcclxuICAgIGxvY2F0aW9uOiAnJyxcclxuICAgIGxhdGl0dWRlOiAnJyxcclxuICAgIGxvbmdpdHVkZTogJycsXHJcbiAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICog6L6T5YWl55uR5ZCs5ZmoXHJcbiAgICAgKiDoh6rliqjmmKDlsITliLAgY29udGVudFxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZSDovpPlhaXkuovku7ZcclxuICAgICAqL1xyXG4gICAgaW5wdXRDaGFuZ2UgKGUpIHtcclxuICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGUuZGV0YWlsLnZhbHVlID09PSAnJ1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAieaLqeWbvueJh1xyXG4gICAgICovXHJcbiAgICBhc3luYyBjaG9vc2VJbWFnZSAoKSB7XHJcbiAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRocyB9ID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgY291bnQ6IDkgLSB0aGlzLmltYWdlcy5sZW5ndGgsXHJcbiAgICAgICAgc2l6ZVR5cGU6ICdjb21wcmVzc2VkJ1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmltYWdlcy5wdXNoKC4uLnRlbXBGaWxlUGF0aHMpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmn6XnnIvlpKflm75cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjdXIg5b2T5YmN5bGV56S65Zu+54mHXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgaW1hZ2VMaXN0IOWxleekuueahOWbvueJh+WIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1hZ2VMaXN0KSB7XHJcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcclxuICAgICAgICBjdXJyZW50OiBjdXIsXHJcbiAgICAgICAgdXJsczogaW1hZ2VMaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk6YCJ5Lit5Zu+54mHXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWR4IOimgeWIoOmZpOeahOWbvueJh+e0ouW8lVxyXG4gICAgICovXHJcbiAgICBkZWxldGVJbWFnZSAoaWR4KSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzLnNwbGljZShpZHgsIDEpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDkvY3nva5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgY2hvb3NlTG9jYXRpb24gKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gYXdhaXQgd2VweS5jaG9vc2VMb2NhdGlvbigpXHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5hbWVcclxuICAgICAgICB0aGlzLmxhdGl0dWRlID0gbGF0aXR1ZGVcclxuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGxvbmdpdHVkZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTlnLDnkIbkvY3nva5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlTG9jYXRpb24gKCkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uID0gJydcclxuICAgICAgdGhpcy5sYXRpdHVkZSA9ICcnXHJcbiAgICAgIHRoaXMubG9uZ2l0dWRlID0gJydcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIh+aNouWunuWQjeOAgeWMv+WQjVxyXG4gICAgICovXHJcbiAgICBhbm9ueW1vdXNDaGFuZ2UgKCkge1xyXG4gICAgICB0aGlzLmlzQW5vbnltb3VzID0gIXRoaXMuaXNBbm9ueW1vdXNcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeagkea0nlxyXG4gICAgICovXHJcbiAgICBhc3luYyBzZW5kICgpIHtcclxuICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5Y+R6YCB5LitLi4uJyxcclxuICAgICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAwLFxyXG4gICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChzZW5zaXRpdmVXb3JkQ2hlY2tlcih0aGlzLmNvbnRlbnQpKSB7XHJcbiAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxyXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfljIXlkKvmlY/mhJ/or43msYfvvIzlj5HpgIHlpLHotKXvvJrvvIknLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoL+iHquadgHzkuI3mg7PmtLvkuoYvLnRlc3QodGhpcy5jb250ZW50KSkge1xyXG4gICAgICAgIHdlcHkuaGlkZVRvYXN0KClcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiAn6ZyA6KaB5biu5Yqp77yf5rex5ZyzIDI0IOWwj+aXtuWFjei0ueW/g+eQhuWSqOivoueDree6v++8mjA3NTUtMjg3OTMxMjMnLFxyXG4gICAgICAgICAgY2FuY2VsVGV4dDogJ+aLqOaJk+eDree6vycsXHJcbiAgICAgICAgICBjYW5jZWxDb2xvcjogJyMzQ0M1MUYnLFxyXG4gICAgICAgICAgY29uZmlybVRleHQ6ICfnu6fnu63lj5HpgIEnLFxyXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzY2NjY2NidcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIXN0YXR1cy5jb25maXJtKSB7XHJcbiAgICAgICAgICBhd2FpdCB3ZXB5Lm1ha2VQaG9uZUNhbGwoe1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogJzA3NTUtMjg3OTMxMjMnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHkuK0uLi4nLFxyXG4gICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMCxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBhY2sgPSB7XHJcbiAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxyXG4gICAgICAgIGlzQW5vbnltb3VzOiB0aGlzLmlzQW5vbnltb3VzLFxyXG4gICAgICAgIGltYWdlczogW10sXHJcbiAgICAgICAgZGV2aWNlOiB0aGlzLmRldmljZSxcclxuICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcclxuICAgICAgICBsYXRpdHVkZTogdGhpcy5sYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGU6IHRoaXMubG9uZ2l0dWRlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHVwbG9hZCBpbWFnZXNcclxuICAgICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgZm9yIChsZXQgdiBvZiB0aGlzLmltYWdlcykge1xyXG4gICAgICAgICAgICBjb25zdCByID0gYXdhaXQgd2VweS51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgICB1cmw6IGFwaS5ibG9nLmltYWdlVXBsb2FkLnVybCxcclxuICAgICAgICAgICAgICBmaWxlUGF0aDogdixcclxuICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsXHJcbiAgICAgICAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICAgICAgIF9zZXNzaW9uOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdfc2Vzc2lvbicpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgci5kYXRhID0gSlNPTi5wYXJzZShyLmRhdGEpXHJcblxyXG4gICAgICAgICAgICBpZiAoci5kYXRhLmVycmNvZGUgPT09IDAgJiYgci5kYXRhLmRhdGEudXJsKSB7XHJcbiAgICAgICAgICAgICAgcGFjay5pbWFnZXMucHVzaChyLmRhdGEuZGF0YS51cmwpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmnI3liqHlmajplJnor6/vvIzkuIrkvKDlm77niYflpLHotKXjgILor7fph43or5V+77ya77yJJyArIHIuZGF0YS5lcnJtc2csXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDogJ+acjeWKoeWZqOmUmeivr++8jOS4iuS8oOWbvueJh+Wksei0peOAguivt+mHjeivleaIluaIquWbvuacrOaPkOekuuiBlOezu+a3seWkp+axquWzsOOAgicgKyBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB1cGxvYWQgYmxvZ1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGh0dHAoe1xyXG4gICAgICAgICAgdXJsOiBhcGkuYmxvZy5uZXcudXJsLFxyXG4gICAgICAgICAgbWV0aG9kOiBhcGkuYmxvZy5uZXcubWV0aG9kLFxyXG4gICAgICAgICAgZGF0YTogcGFja1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+WPkemAgeagkea0nuWksei0peOAguivt+aIquWbvuacrOaPkOekuu+8jOiBlOezu+a3seWkp+axquWzsOOAgicgKyBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdlcHkuaGlkZVRvYXN0KClcclxuICAgICAgYXdhaXQgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5Y+R6YCB5oiQ5Yqf77yBJyxcclxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gc2F2ZSBzdGF0dXNcclxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnaXNOZWVkUmVsb2FkTGlzdCcsICd0cnVlJylcclxuXHJcbiAgICAgIGF3YWl0IHdlcHkubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICBkZWx0YTogMVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gbG9hZCBkZXZpY2UgaW5mb1xyXG4gIGFzeW5jIG9uU2hvdyAoKSB7XHJcbiAgICBjb25zdCB7IG1vZGVsIH0gPSBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKVxyXG4gICAgdGhpcy5kZXZpY2UgPSBtb2RlbC5yZXBsYWNlKC88Lio+LywgJycpXHJcbiAgfVxyXG59XHJcbiJdfQ==