'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import Store from './store'
// To support wepy


var _deepclone = require('./../utils/deepclone.js');

var _deepclone2 = _interopRequireDefault(_deepclone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Store);

    this.state = (0, _deepclone2.default)(state);
  }

  _createClass(Store, [{
    key: 'mutate',
    value: function mutate(fn) {
      this.state = (0, _deepclone2.default)(fn((0, _deepclone2.default)(this.state)));
    }
  }]);

  return Store;
}();

module.exports = new Store({
  tab: 1
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwic3RhdGUiLCJmbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0YWIiXSwibWFwcGluZ3MiOiI7O3FqQkFBQTtBQUNBOzs7QUFDQTs7Ozs7Ozs7SUFFTUEsSztBQUNKLG1CQUF5QjtBQUFBLFFBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDdkIsU0FBS0EsS0FBTCxHQUFhLHlCQUFVQSxLQUFWLENBQWI7QUFDRDs7OzsyQkFFT0MsRSxFQUFJO0FBQ1YsV0FBS0QsS0FBTCxHQUFhLHlCQUNYQyxHQUNFLHlCQUFVLEtBQUtELEtBQWYsQ0FERixDQURXLENBQWI7QUFLRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUIsSUFBSUosS0FBSixDQUFVO0FBQ3pCSyxPQUFLO0FBRG9CLENBQVYsQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuLy8gVG8gc3VwcG9ydCB3ZXB5XHJcbmltcG9ydCBkZWVwY2xvbmUgZnJvbSAnLi4vdXRpbHMvZGVlcGNsb25lJ1xyXG5cclxuY2xhc3MgU3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yIChzdGF0ZSA9IHt9KSB7XHJcbiAgICB0aGlzLnN0YXRlID0gZGVlcGNsb25lKHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgbXV0YXRlIChmbikge1xyXG4gICAgdGhpcy5zdGF0ZSA9IGRlZXBjbG9uZShcclxuICAgICAgZm4oXHJcbiAgICAgICAgZGVlcGNsb25lKHRoaXMuc3RhdGUpXHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IFN0b3JlKHtcclxuICB0YWI6IDFcclxufSlcclxuIl19