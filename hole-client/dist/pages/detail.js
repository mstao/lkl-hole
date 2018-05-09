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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$page) {
  _inherits(Detail, _wepy$page);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Detail);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '树洞正文'
    }, _this.data = {
      blog: {},
      loading: true,
      placeholder: '写点评论...',
      focusComment: false,
      disable: true,
      comment: '',
      isAnonymous: false,
      replyTo: '',
      inputContent: '',
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
      like: function like() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2.blog.like = !_this2.blog.like;

                  if (_this2.blog.like) {
                    _this2.blog.likeNum++;
                  } else {
                    _this2.blog.likeNum--;
                  }

                  // apply change
                  _this2.$apply();

                  // commit request
                  _context.prev = 3;
                  _context.next = 6;
                  return (0, _request2.default)({
                    url: _config.api.blog.like.url,
                    method: _config.api.blog.like.method,
                    data: {
                      bid: _this2.blog.id
                    }
                  });

                case 6:
                  res = _context.sent;


                  if (res.statusCode === 400) {
                    _this2.blog.like = !_this2.blog.like;

                    if (_this2.blog.like) {
                      _this2.blog.likeNum++;
                    } else {
                      _this2.blog.likeNum--;
                    }

                    _this2.$apply();
                  }
                  _context.next = 16;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](3);

                  // roll back when request failed
                  console.log(_context.t0);

                  _this2.blog.like = !_this2.blog.like;

                  if (_this2.blog.like) {
                    _this2.blog.likeNum++;
                  } else {
                    _this2.blog.likeNum--;
                  }

                  _this2.$apply();

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[3, 10]]);
        }))();
      },


      /**
       * 显示更多操作
       * @param {Number} idx 点赞树洞的索引
       * @param {Number} id  点赞树洞的 id
      */
      showMore: function showMore() {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _ref2, tapIndex;

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
                    _context2.next = 10;
                    break;
                  }

                  _context2.next = 8;
                  return (0, _request2.default)({
                    url: _config.api.blog.delete.url,
                    method: _config.api.blog.delete.method,
                    data: {
                      bid: _this3.blog.id
                    }
                  });

                case 8:
                  _context2.next = 10;
                  return _wepy2.default.navigateBack({
                    delta: 1
                  });

                case 10:
                  _context2.next = 14;
                  break;

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](0);

                case 14:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[0, 12]]);
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
      },


      /**
       * 显示操作列表
       * @param {String}  nickname 操作对象的昵称
       * @param {String}  openid   操作对象的 openid
       * @param {Boolean} isAdmin  是否具有高级权限
       * @param {Number}  id       操作对象的评论的 id
       * @param {Number}  idx      操作对象的索引
       */
      showAction: function showAction(nickname, openid, isAdmin, isAuthor, id, idx) {
        var _arguments = arguments,
            _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var itemList, _ref3, tapIndex;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  console.log(_arguments);
                  itemList = ['\u56DE\u590D ' + nickname + ':'];


                  if (isAdmin || isAuthor) {
                    itemList.push('删除评论');
                  }

                  _context3.prev = 3;
                  _context3.next = 6;
                  return _wepy2.default.showActionSheet({
                    itemList: itemList
                  });

                case 6:
                  _ref3 = _context3.sent;
                  tapIndex = _ref3.tapIndex;

                  if (!(tapIndex === 0)) {
                    _context3.next = 12;
                    break;
                  }

                  _this4.methods.reply.call(_this4, nickname, openid);
                  _context3.next = 15;
                  break;

                case 12:
                  if (!(tapIndex === 1)) {
                    _context3.next = 15;
                    break;
                  }

                  _context3.next = 15;
                  return _this4.methods.deleteComment.call(_this4, id, idx);

                case 15:
                  _context3.next = 19;
                  break;

                case 17:
                  _context3.prev = 17;
                  _context3.t0 = _context3['catch'](3);

                case 19:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[3, 17]]);
        }))();
      },


      /**
       * 回复指定人
       * @param {String} nickname 回复对象的昵称
       * @param {String} openid   回复对象的 openid
       */
      reply: function reply(nickname, openid) {
        this.inputContent = '回复 ' + nickname + '：';
        this.focusComment = true;
        this.replyTo = openid;
        this.$apply();
      },


      /**
       * 删除评论
       * @param {Number} id  要删除对象的评论的 id
       * @param {Number} idx 要删除对象的索引
       */
      deleteComment: function deleteComment(id, idx) {
        var _this5 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var status;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _wepy2.default.showModal({
                    title: '删除',
                    content: '确定要删除这条评论？',
                    cancelText: '不删了',
                    cancelColor: '#666666',
                    confirmText: '删除吧',
                    confirmColor: '#3CC51F'
                  });

                case 2:
                  status = _context4.sent;

                  if (!status.confirm) {
                    _context4.next = 14;
                    break;
                  }

                  _context4.prev = 4;
                  _context4.next = 7;
                  return (0, _request2.default)({
                    url: _config.api.blog.deleteComment.url + '/' + id,
                    method: _config.api.blog.deleteComment.method
                  });

                case 7:
                  _context4.next = 9;
                  return _this5.fetchDetail(_this5.blog.id);

                case 9:
                  _context4.next = 14;
                  break;

                case 11:
                  _context4.prev = 11;
                  _context4.t0 = _context4['catch'](4);

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '删除评论失败。请重试或截图本提示，联系深大汪峰。' + _context4.t0.message
                  });

                case 14:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this5, [[4, 11]]);
        }))();
      },


      /**
       * 直接回复评论
       */
      comment: function comment() {
        this.inputContent = '';
        this.placeholder = '写点评论...';
        this.focusComment = true;
        this.$apply();
      },


      /**
       * 输入监听器
       * 自动映射到 content
       * @param {Event} e 输入事件
       */
      inputChange: function inputChange(e) {
        this.comment = e.detail.value;
        this.disable = e.detail.value === '';
      },


      /**
       * 输入框聚焦
       */
      inputFocus: function inputFocus() {
        this.focusComment = true;
        this.$apply();
      },


      /**
       * 输入框失去焦点
       */
      inputBlur: function inputBlur() {
        this.focusComment = false;
        this.$apply();
      },
      inputConfirm: function inputConfirm() {
        var _this6 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return _this6.methods.send.call(_this6);

                case 2:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this6);
        }))();
      },


      /**
       * 切换实名、匿名
       */
      anonymousChange: function anonymousChange() {
        this.isAnonymous = !this.isAnonymous;
        this.$apply();
      },


      /**
       * 发送评论
       */
      send: function send() {
        var _this7 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var pack;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _wepy2.default.showToast({
                    title: '发送中...',
                    icon: 'loading',
                    duration: 10000,
                    mask: true
                  });

                  if (!(0, _sensitiveWordChecker2.default)(_this7.comment)) {
                    _context6.next = 5;
                    break;
                  }

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '包含敏感词汇，发送失败：）'
                  });
                  return _context6.abrupt('return');

                case 5:
                  pack = {
                    bid: _this7.blog.id,
                    content: _this7.comment,
                    replyTo: _this7.replyTo,
                    isAnonymous: _this7.isAnonymous
                  };
                  _context6.prev = 6;
                  _context6.next = 9;
                  return (0, _request2.default)({
                    url: _config.api.blog.comment.url,
                    method: _config.api.blog.comment.method,
                    data: pack
                  });

                case 9:

                  // init input
                  _this7.inputContent = _this7.comment;
                  _this7.$apply();
                  _this7.comment = '';
                  _this7.replyTo = '';
                  _this7.inputContent = '';
                  _this7.disable = true;
                  _this7.focusComment = false;
                  _this7.isAnonymous = false;

                  // refetch data
                  _context6.next = 19;
                  return _this7.fetchDetail(_this7.blog.id);

                case 19:
                  _this7.$apply();

                  _wepy2.default.hideToast();
                  _context6.next = 27;
                  break;

                case 23:
                  _context6.prev = 23;
                  _context6.t0 = _context6['catch'](6);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '发送评论失败。请重试或截图本提示，联系深大汪峰。' + _context6.t0.message
                  });

                case 27:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this7, [[6, 23]]);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(options) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.loading = true;
                this.$apply();

                _context7.next = 4;
                return this.fetchDetail(options.id);

              case 4:
                this.focusComment = !!options.focusComment;
                this.isTest = !Boolean(_wepy2.default.getStorageSync('isInTest-' + _config.version));
                this.$apply();

              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onLoad(_x) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.fetchDetail(this.blog.id);

              case 2:
                _wepy2.default.stopPullDownRefresh();
                this.$apply();

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function onPullDownRefresh() {
        return _ref5.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }, {
    key: 'fetchDetail',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(id) {
        var _this8 = this;

        var raw;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _request2.default)({
                  url: _config.api.blog.detail.url + '/' + id,
                  method: _config.api.blog.detail.method
                });

              case 2:
                raw = _context10.sent;

                if (!(raw.statusCode === 404)) {
                  _context10.next = 9;
                  break;
                }

                _context10.next = 6;
                return _wepy2.default.showToast({
                  title: '树洞不存在',
                  icon: 'loading',
                  image: '../assets/svgs/warn.svg',
                  duration: 1500,
                  mask: true
                });

              case 6:

                setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return _wepy2.default.navigateBack({
                            delta: 1
                          });

                        case 2:
                        case 'end':
                          return _context9.stop();
                      }
                    }
                  }, _callee9, _this8);
                })), 1500);
                _context10.next = 12;
                break;

              case 9:
                this.loading = false;
                this.blog = raw.data.data;
                this.$apply();

              case 12:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function fetchDetail(_x2) {
        return _ref6.apply(this, arguments);
      }

      return fetchDetail;
    }()
  }]);

  return Detail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Detail , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImJsb2ciLCJsb2FkaW5nIiwicGxhY2Vob2xkZXIiLCJmb2N1c0NvbW1lbnQiLCJkaXNhYmxlIiwiY29tbWVudCIsImlzQW5vbnltb3VzIiwicmVwbHlUbyIsImlucHV0Q29udGVudCIsImlzVGVzdCIsIm1ldGhvZHMiLCJ2aWV3UGljIiwiY3VyIiwiaW1hZ2VMaXN0Iiwid2VweSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwibGlrZSIsImxpa2VOdW0iLCIkYXBwbHkiLCJ1cmwiLCJhcGkiLCJtZXRob2QiLCJiaWQiLCJpZCIsInJlcyIsInN0YXR1c0NvZGUiLCJjb25zb2xlIiwibG9nIiwic2hvd01vcmUiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInRhcEluZGV4IiwiZGVsZXRlIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzaG93TG9jYXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm9wZW5Mb2NhdGlvbiIsInNjYWxlIiwic2hvd0FjdGlvbiIsIm5pY2tuYW1lIiwib3BlbmlkIiwiaXNBZG1pbiIsImlzQXV0aG9yIiwiaWR4IiwiYXJndW1lbnRzIiwicHVzaCIsInJlcGx5IiwiY2FsbCIsImRlbGV0ZUNvbW1lbnQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInN0YXR1cyIsImNvbmZpcm0iLCJmZXRjaERldGFpbCIsIm1lc3NhZ2UiLCJpbnB1dENoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImlucHV0Rm9jdXMiLCJpbnB1dEJsdXIiLCJpbnB1dENvbmZpcm0iLCJzZW5kIiwiYW5vbnltb3VzQ2hhbmdlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsImhpZGVUb2FzdCIsInBhY2siLCJvcHRpb25zIiwiQm9vbGVhbiIsImdldFN0b3JhZ2VTeW5jIiwidmVyc2lvbiIsInN0b3BQdWxsRG93blJlZnJlc2giLCJyYXciLCJpbWFnZSIsInNldFRpbWVvdXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsZUFBUyxJQUZKO0FBR0xDLG1CQUFhLFNBSFI7QUFJTEMsb0JBQWMsS0FKVDtBQUtMQyxlQUFTLElBTEo7QUFNTEMsZUFBUyxFQU5KO0FBT0xDLG1CQUFhLEtBUFI7QUFRTEMsZUFBUyxFQVJKO0FBU0xDLG9CQUFjLEVBVFQ7QUFVTEMsY0FBUTtBQVZILEssUUFhUEMsTyxHQUFVO0FBQ1I7Ozs7O0FBS0FDLGFBTlEsbUJBTUNDLEdBTkQsRUFNTUMsU0FOTixFQU1pQjtBQUN2QkMsdUJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLG1CQUFTSixHQURPO0FBRWhCSyxnQkFBTUo7QUFGVSxTQUFsQjtBQUlELE9BWE87OztBQWFSOzs7OztBQUtNSyxVQWxCRSxrQkFrQk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWix5QkFBS2xCLElBQUwsQ0FBVWtCLElBQVYsR0FBaUIsQ0FBQyxPQUFLbEIsSUFBTCxDQUFVa0IsSUFBNUI7O0FBRUEsc0JBQUksT0FBS2xCLElBQUwsQ0FBVWtCLElBQWQsRUFBb0I7QUFDbEIsMkJBQUtsQixJQUFMLENBQVVtQixPQUFWO0FBQ0QsbUJBRkQsTUFFTztBQUNMLDJCQUFLbkIsSUFBTCxDQUFVbUIsT0FBVjtBQUNEOztBQUVEO0FBQ0EseUJBQUtDLE1BQUw7O0FBRUE7QUFaWTtBQUFBO0FBQUEseUJBY1EsdUJBQUs7QUFDckJDLHlCQUFLQyxZQUFJdEIsSUFBSixD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RTs7Ozs7Ozs7O3VCQUNDLHVCQUFLO0FBQ3JCSix1QkFBUUMsWUFBSXRCLElBQUosQ0FBU2tFLE1BQVQsQ0FBZ0I3QyxHQUF4QixTQUErQkksRUFEVjtBQUVyQkYsMEJBQVFELFlBQUl0QixJQUFKLENBQVNrRSxNQUFULENBQWdCM0M7QUFGSCxpQkFBTCxDOzs7QUFBWjZELG1COztzQkFLRkEsSUFBSXpELFVBQUosS0FBbUIsRzs7Ozs7O3VCQUNmYixlQUFLMkQsU0FBTCxDQUFlO0FBQ25CbkIseUJBQU8sT0FEWTtBQUVuQm9CLHdCQUFNLFNBRmE7QUFHbkJXLHlCQUFPLHlCQUhZO0FBSW5CViw0QkFBVSxJQUpTO0FBS25CQyx3QkFBTTtBQUxhLGlCQUFmLEM7Ozs7QUFRTlUsbUZBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQ0h4RSxlQUFLcUIsWUFBTCxDQUFrQjtBQUN0QkMsbUNBQU87QUFEZSwyQkFBbEIsQ0FERzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBWCxJQUlHLElBSkg7Ozs7O0FBTUEscUJBQUtuQyxPQUFMLEdBQWUsS0FBZjtBQUNBLHFCQUFLRCxJQUFMLEdBQVlvRixJQUFJckYsSUFBSixDQUFTQSxJQUFyQjtBQUNBLHFCQUFLcUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFWOEJOLGVBQUt5RSxJOztrQkFBcEIzRixNIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBhcGksIHZlcnNpb24gfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXHJcbmltcG9ydCBzZW5zaXRpdmVXb3JkQ2hlY2tlciBmcm9tICcuLi91dGlscy9zZW5zaXRpdmVXb3JkQ2hlY2tlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+agkea0nuato+aWhydcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBibG9nOiB7fSxcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBwbGFjZWhvbGRlcjogJ+WGmeeCueivhOiuui4uLicsXHJcbiAgICBmb2N1c0NvbW1lbnQ6IGZhbHNlLFxyXG4gICAgZGlzYWJsZTogdHJ1ZSxcclxuICAgIGNvbW1lbnQ6ICcnLFxyXG4gICAgaXNBbm9ueW1vdXM6IGZhbHNlLFxyXG4gICAgcmVwbHlUbzogJycsXHJcbiAgICBpbnB1dENvbnRlbnQ6ICcnLFxyXG4gICAgaXNUZXN0OiB0cnVlXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmn6XnnIvlpKflm75cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjdXIg5b2T5YmN5bGV56S65Zu+54mHXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgaW1hZ2VMaXN0IOWxleekuueahOWbvueJh+WIl+ihqFxyXG4gICAgICovXHJcbiAgICB2aWV3UGljIChjdXIsIGltYWdlTGlzdCkge1xyXG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgICAgY3VycmVudDogY3VyLFxyXG4gICAgICAgIHVybHM6IGltYWdlTGlzdFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeCuei1nlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkeCDngrnotZ7moJHmtJ7nmoTntKLlvJVcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZCAg54K56LWe5qCR5rSe55qEIGlkXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGxpa2UgKCkge1xyXG4gICAgICB0aGlzLmJsb2cubGlrZSA9ICF0aGlzLmJsb2cubGlrZVxyXG5cclxuICAgICAgaWYgKHRoaXMuYmxvZy5saWtlKSB7XHJcbiAgICAgICAgdGhpcy5ibG9nLmxpa2VOdW0rK1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYmxvZy5saWtlTnVtLS1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXBwbHkgY2hhbmdlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuXHJcbiAgICAgIC8vIGNvbW1pdCByZXF1ZXN0XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgaHR0cCh7XHJcbiAgICAgICAgICB1cmw6IGFwaS5ibG9nLmxpa2UudXJsLFxyXG4gICAgICAgICAgbWV0aG9kOiBhcGkuYmxvZy5saWtlLm1ldGhvZCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYmlkOiB0aGlzLmJsb2cuaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDQwMCkge1xyXG4gICAgICAgICAgdGhpcy5ibG9nLmxpa2UgPSAhdGhpcy5ibG9nLmxpa2VcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5ibG9nLmxpa2UpIHtcclxuICAgICAgICAgICAgdGhpcy5ibG9nLmxpa2VOdW0rK1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ibG9nLmxpa2VOdW0tLVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyByb2xsIGJhY2sgd2hlbiByZXF1ZXN0IGZhaWxlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcblxyXG4gICAgICAgIHRoaXMuYmxvZy5saWtlID0gIXRoaXMuYmxvZy5saWtlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJsb2cubGlrZSkge1xyXG4gICAgICAgICAgdGhpcy5ibG9nLmxpa2VOdW0rK1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmJsb2cubGlrZU51bS0tXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmm7TlpJrmk43kvZxcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZHgg54K56LWe5qCR5rSe55qE57Si5byVXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWQgIOeCuei1nuagkea0nueahCBpZFxyXG4gICAgKi9cclxuICAgIGFzeW5jIHNob3dNb3JlICgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHRhcEluZGV4IH0gPSBhd2FpdCB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XHJcbiAgICAgICAgICBpdGVtTGlzdDogW1xyXG4gICAgICAgICAgICAn5Yig6ZmkJ1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0YXBJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgYXdhaXQgaHR0cCh7XHJcbiAgICAgICAgICAgIHVybDogYXBpLmJsb2cuZGVsZXRlLnVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBhcGkuYmxvZy5kZWxldGUubWV0aG9kLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgYmlkOiB0aGlzLmJsb2cuaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICBhd2FpdCB3ZXB5Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrlnLDlm75cclxuICAgICAqIEBwYXJhbSB7RmxvYXR9IGxhdGl0dWRlICDnuqzluqZcclxuICAgICAqIEBwYXJhbSB7RmxvYXR9IGxvbmdpdHVkZSDnu4/luqZcclxuICAgICAqL1xyXG4gICAgc2hvd0xvY2F0aW9uIChsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XHJcbiAgICAgIHdlcHkub3BlbkxvY2F0aW9uKHtcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgc2NhbGU6IDI4XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65pON5L2c5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gIG5pY2tuYW1lIOaTjeS9nOWvueixoeeahOaYteensFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICBvcGVuaWQgICDmk43kvZzlr7nosaHnmoQgb3BlbmlkXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzQWRtaW4gIOaYr+WQpuWFt+aciemrmOe6p+adg+mZkFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9ICBpZCAgICAgICDmk43kvZzlr7nosaHnmoTor4TorrrnmoQgaWRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSAgaWR4ICAgICAg5pON5L2c5a+56LGh55qE57Si5byVXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNob3dBY3Rpb24gKG5pY2tuYW1lLCBvcGVuaWQsIGlzQWRtaW4sIGlzQXV0aG9yLCBpZCwgaWR4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cylcclxuICAgICAgY29uc3QgaXRlbUxpc3QgPSBbYOWbnuWkjSAke25pY2tuYW1lfTpgXVxyXG5cclxuICAgICAgaWYgKGlzQWRtaW4gfHwgaXNBdXRob3IpIHtcclxuICAgICAgICBpdGVtTGlzdC5wdXNoKCfliKDpmaTor4TorronKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgdGFwSW5kZXggfSA9IGF3YWl0IHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcclxuICAgICAgICAgIGl0ZW1MaXN0XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRhcEluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLm1ldGhvZHMucmVwbHkuY2FsbCh0aGlzLCBuaWNrbmFtZSwgb3BlbmlkKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGFwSW5kZXggPT09IDEpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMubWV0aG9kcy5kZWxldGVDb21tZW50LmNhbGwodGhpcywgaWQsIGlkeClcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5aSN5oyH5a6a5Lq6XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmlja25hbWUg5Zue5aSN5a+56LGh55qE5pi156ewXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3BlbmlkICAg5Zue5aSN5a+56LGh55qEIG9wZW5pZFxyXG4gICAgICovXHJcbiAgICByZXBseSAobmlja25hbWUsIG9wZW5pZCkge1xyXG4gICAgICB0aGlzLmlucHV0Q29udGVudCA9ICflm57lpI0gJyArIG5pY2tuYW1lICsgJ++8midcclxuICAgICAgdGhpcy5mb2N1c0NvbW1lbnQgPSB0cnVlXHJcbiAgICAgIHRoaXMucmVwbHlUbyA9IG9wZW5pZFxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk6K+E6K66XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWQgIOimgeWIoOmZpOWvueixoeeahOivhOiuuueahCBpZFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkeCDopoHliKDpmaTlr7nosaHnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZGVsZXRlQ29tbWVudCAoaWQsIGlkeCkge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfliKDpmaQnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfnoa7lrpropoHliKDpmaTov5nmnaHor4TorrrvvJ8nLFxyXG4gICAgICAgIGNhbmNlbFRleHQ6ICfkuI3liKDkuoYnLFxyXG4gICAgICAgIGNhbmNlbENvbG9yOiAnIzY2NjY2NicsXHJcbiAgICAgICAgY29uZmlybVRleHQ6ICfliKDpmaTlkKcnLFxyXG4gICAgICAgIGNvbmZpcm1Db2xvcjogJyMzQ0M1MUYnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoc3RhdHVzLmNvbmZpcm0pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgaHR0cCh7XHJcbiAgICAgICAgICAgIHVybDogYCR7YXBpLmJsb2cuZGVsZXRlQ29tbWVudC51cmx9LyR7aWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBhcGkuYmxvZy5kZWxldGVDb21tZW50Lm1ldGhvZFxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoRGV0YWlsKHRoaXMuYmxvZy5pZClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpOivhOiuuuWksei0peOAguivt+mHjeivleaIluaIquWbvuacrOaPkOekuu+8jOiBlOezu+a3seWkp+axquWzsOOAgicgKyBlLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55u05o6l5Zue5aSN6K+E6K66XHJcbiAgICAgKi9cclxuICAgIGNvbW1lbnQgKCkge1xyXG4gICAgICB0aGlzLmlucHV0Q29udGVudCA9ICcnXHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAn5YaZ54K56K+E6K66Li4uJ1xyXG4gICAgICB0aGlzLmZvY3VzQ29tbWVudCA9IHRydWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi+k+WFpeebkeWQrOWZqFxyXG4gICAgICog6Ieq5Yqo5pig5bCE5YiwIGNvbnRlbnRcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUg6L6T5YWl5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIGlucHV0Q2hhbmdlIChlKSB7XHJcbiAgICAgIHRoaXMuY29tbWVudCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuZGlzYWJsZSA9IGUuZGV0YWlsLnZhbHVlID09PSAnJ1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi+k+WFpeahhuiBmueEplxyXG4gICAgICovXHJcbiAgICBpbnB1dEZvY3VzICgpIHtcclxuICAgICAgdGhpcy5mb2N1c0NvbW1lbnQgPSB0cnVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovpPlhaXmoYblpLHljrvnhKbngrlcclxuICAgICAqL1xyXG4gICAgaW5wdXRCbHVyICgpIHtcclxuICAgICAgdGhpcy5mb2N1c0NvbW1lbnQgPSBmYWxzZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGlucHV0Q29uZmlybSAoKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMubWV0aG9kcy5zZW5kLmNhbGwodGhpcylcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliIfmjaLlrp7lkI3jgIHljL/lkI1cclxuICAgICAqL1xyXG4gICAgYW5vbnltb3VzQ2hhbmdlICgpIHtcclxuICAgICAgdGhpcy5pc0Fub255bW91cyA9ICF0aGlzLmlzQW5vbnltb3VzXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHor4TorrpcclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2VuZCAoKSB7XHJcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+WPkemAgeS4rS4uLicsXHJcbiAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwMCxcclxuICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoc2Vuc2l0aXZlV29yZENoZWNrZXIodGhpcy5jb21tZW50KSkge1xyXG4gICAgICAgIHdlcHkuaGlkZVRvYXN0KClcclxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiAn5YyF5ZCr5pWP5oSf6K+N5rGH77yM5Y+R6YCB5aSx6LSl77ya77yJJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBhY2sgPSB7XHJcbiAgICAgICAgYmlkOiB0aGlzLmJsb2cuaWQsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5jb21tZW50LFxyXG4gICAgICAgIHJlcGx5VG86IHRoaXMucmVwbHlUbyxcclxuICAgICAgICBpc0Fub255bW91czogdGhpcy5pc0Fub255bW91c1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGh0dHAoe1xyXG4gICAgICAgICAgdXJsOiBhcGkuYmxvZy5jb21tZW50LnVybCxcclxuICAgICAgICAgIG1ldGhvZDogYXBpLmJsb2cuY29tbWVudC5tZXRob2QsXHJcbiAgICAgICAgICBkYXRhOiBwYWNrXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gaW5pdCBpbnB1dFxyXG4gICAgICAgIHRoaXMuaW5wdXRDb250ZW50ID0gdGhpcy5jb21tZW50XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIHRoaXMuY29tbWVudCA9ICcnXHJcbiAgICAgICAgdGhpcy5yZXBseVRvID0gJydcclxuICAgICAgICB0aGlzLmlucHV0Q29udGVudCA9ICcnXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuZm9jdXNDb21tZW50ID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzQW5vbnltb3VzID0gZmFsc2VcclxuXHJcbiAgICAgICAgLy8gcmVmZXRjaCBkYXRhXHJcbiAgICAgICAgYXdhaXQgdGhpcy5mZXRjaERldGFpbCh0aGlzLmJsb2cuaWQpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG5cclxuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+WPkemAgeivhOiuuuWksei0peOAguivt+mHjeivleaIluaIquWbvuacrOaPkOekuu+8jOiBlOezu+a3seWkp+axquWzsOOAgicgKyBlLm1lc3NhZ2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxvYWQgKG9wdGlvbnMpIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgIHRoaXMuJGFwcGx5KClcclxuXHJcbiAgICBhd2FpdCB0aGlzLmZldGNoRGV0YWlsKG9wdGlvbnMuaWQpXHJcbiAgICB0aGlzLmZvY3VzQ29tbWVudCA9ICEhb3B0aW9ucy5mb2N1c0NvbW1lbnRcclxuICAgIHRoaXMuaXNUZXN0ID0gIUJvb2xlYW4od2VweS5nZXRTdG9yYWdlU3luYyhgaXNJblRlc3QtJHt2ZXJzaW9ufWApKVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25QdWxsRG93blJlZnJlc2ggKCkge1xyXG4gICAgYXdhaXQgdGhpcy5mZXRjaERldGFpbCh0aGlzLmJsb2cuaWQpXHJcbiAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hEZXRhaWwgKGlkKSB7XHJcbiAgICBjb25zdCByYXcgPSBhd2FpdCBodHRwKHtcclxuICAgICAgdXJsOiBgJHthcGkuYmxvZy5kZXRhaWwudXJsfS8ke2lkfWAsXHJcbiAgICAgIG1ldGhvZDogYXBpLmJsb2cuZGV0YWlsLm1ldGhvZFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAocmF3LnN0YXR1c0NvZGUgPT09IDQwNCkge1xyXG4gICAgICBhd2FpdCB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICfmoJHmtJ7kuI3lrZjlnKgnLFxyXG4gICAgICAgIGljb246ICdsb2FkaW5nJyxcclxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9zdmdzL3dhcm4uc3ZnJyxcclxuICAgICAgICBkdXJhdGlvbjogMTUwMCxcclxuICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCB3ZXB5Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIDE1MDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB0aGlzLmJsb2cgPSByYXcuZGF0YS5kYXRhXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19