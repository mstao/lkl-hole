'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // a store for wxapp


var _deepclone = require('./../utils/deepclone.js');

var _deepclone2 = _interopRequireDefault(_deepclone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  /**
   * constructor
   * @param {Object} initData 初始化数据
   */
  function Store() {
    var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Store);

    if ((typeof initState === 'undefined' ? 'undefined' : _typeof(initState)) !== 'object' || initState === null) {
      throw new TypeError('[Store] Init state must be a object.');
    }

    var _state = this._state = (0, _deepclone2.default)(initState);
    this.state = this._hookState(_state);
  }

  /**
   * 禁止直接修改
   * @param {Object} _state
   */


  _createClass(Store, [{
    key: '_hookState',
    value: function _hookState(_state) {
      var _this = this;

      var state = {};

      Object.keys(_state).forEach(function (key) {
        if (_typeof(_state[key]) === 'object' && _state[key] !== null) {
          _state[key] = _this._hookState(_state[key]);
        } else if (typeof _state[key] === 'function') {
          throw new TypeError('[Store] state cannot save function.');
        }

        // setter hook
        Object.defineProperty(state, key, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return _state[key];
          },
          set: function set(newVal) {
            throw new TypeError('[Store] mutate state failed. Use .mutate() to mutate state');
          }
        });
      });

      return state;
    }

    /**
     * mutate state
     * @param {Function} fn
     */

  }, {
    key: 'mutate',
    value: function mutate(fn) {
      var newState = this._state = (0, _deepclone2.default)(fn((0, _deepclone2.default)(this._state)));
      this.state = this._hookState(newState);
    }
  }]);

  return Store;
}();

module.exports = Store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwiaW5pdFN0YXRlIiwiVHlwZUVycm9yIiwiX3N0YXRlIiwic3RhdGUiLCJfaG9va1N0YXRlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJuZXdWYWwiLCJmbiIsIm5ld1N0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztxakJBQUE7OztBQUNBOzs7Ozs7OztJQUVNQSxLO0FBQ0o7Ozs7QUFJQSxtQkFBNkI7QUFBQSxRQUFoQkMsU0FBZ0IsdUVBQUosRUFBSTs7QUFBQTs7QUFDM0IsUUFBSSxRQUFPQSxTQUFQLHlDQUFPQSxTQUFQLE9BQXFCLFFBQXJCLElBQWlDQSxjQUFjLElBQW5ELEVBQXlEO0FBQ3ZELFlBQU0sSUFBSUMsU0FBSixDQUFjLHNDQUFkLENBQU47QUFDRDs7QUFFRCxRQUFNQyxTQUFTLEtBQUtBLE1BQUwsR0FBYyx5QkFBVUYsU0FBVixDQUE3QjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxLQUFLQyxVQUFMLENBQWdCRixNQUFoQixDQUFiO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OytCQUlZQSxNLEVBQVE7QUFBQTs7QUFDbEIsVUFBTUMsUUFBUSxFQUFkOztBQUVBRSxhQUFPQyxJQUFQLENBQVlKLE1BQVosRUFBb0JLLE9BQXBCLENBQTRCLGVBQU87QUFDakMsWUFBSSxRQUFPTCxPQUFPTSxHQUFQLENBQVAsTUFBdUIsUUFBdkIsSUFBbUNOLE9BQU9NLEdBQVAsTUFBZ0IsSUFBdkQsRUFBNkQ7QUFDM0ROLGlCQUFPTSxHQUFQLElBQWMsTUFBS0osVUFBTCxDQUFnQkYsT0FBT00sR0FBUCxDQUFoQixDQUFkO0FBQ0QsU0FGRCxNQUVPLElBQUksT0FBT04sT0FBT00sR0FBUCxDQUFQLEtBQXVCLFVBQTNCLEVBQXVDO0FBQzVDLGdCQUFNLElBQUlQLFNBQUosQ0FBYyxxQ0FBZCxDQUFOO0FBQ0Q7O0FBRUQ7QUFDQUksZUFBT0ksY0FBUCxDQUFzQk4sS0FBdEIsRUFBNkJLLEdBQTdCLEVBQWtDO0FBQ2hDRSxzQkFBWSxJQURvQjtBQUVoQ0Msd0JBQWMsSUFGa0I7QUFHaENDLGFBSGdDLGlCQUd6QjtBQUNMLG1CQUFPVixPQUFPTSxHQUFQLENBQVA7QUFDRCxXQUwrQjtBQU1oQ0ssYUFOZ0MsZUFNM0JDLE1BTjJCLEVBTW5CO0FBQ1gsa0JBQU0sSUFBSWIsU0FBSixDQUFjLDREQUFkLENBQU47QUFDRDtBQVIrQixTQUFsQztBQVVELE9BbEJEOztBQW9CQSxhQUFPRSxLQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MkJBSVFZLEUsRUFBSTtBQUNWLFVBQU1DLFdBQVcsS0FBS2QsTUFBTCxHQUFjLHlCQUM3QmEsR0FDRSx5QkFBVSxLQUFLYixNQUFmLENBREYsQ0FENkIsQ0FBL0I7QUFLQSxXQUFLQyxLQUFMLEdBQWEsS0FBS0MsVUFBTCxDQUFnQlksUUFBaEIsQ0FBYjtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQm5CLEtBQWpCIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYSBzdG9yZSBmb3Igd3hhcHBcclxuaW1wb3J0IGRlZXBjbG9uZSBmcm9tICcuLi91dGlscy9kZWVwY2xvbmUnXHJcblxyXG5jbGFzcyBTdG9yZSB7XHJcbiAgLyoqXHJcbiAgICogY29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5pdERhdGEg5Yid5aeL5YyW5pWw5o2uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IgKGluaXRTdGF0ZSA9IHt9KSB7XHJcbiAgICBpZiAodHlwZW9mIGluaXRTdGF0ZSAhPT0gJ29iamVjdCcgfHwgaW5pdFN0YXRlID09PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1tTdG9yZV0gSW5pdCBzdGF0ZSBtdXN0IGJlIGEgb2JqZWN0LicpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3N0YXRlID0gdGhpcy5fc3RhdGUgPSBkZWVwY2xvbmUoaW5pdFN0YXRlKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2hvb2tTdGF0ZShfc3RhdGUpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnpoHmraLnm7TmjqXkv67mlLlcclxuICAgKiBAcGFyYW0ge09iamVjdH0gX3N0YXRlXHJcbiAgICovXHJcbiAgX2hvb2tTdGF0ZSAoX3N0YXRlKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHt9XHJcblxyXG4gICAgT2JqZWN0LmtleXMoX3N0YXRlKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgX3N0YXRlW2tleV0gPT09ICdvYmplY3QnICYmIF9zdGF0ZVtrZXldICE9PSBudWxsKSB7XHJcbiAgICAgICAgX3N0YXRlW2tleV0gPSB0aGlzLl9ob29rU3RhdGUoX3N0YXRlW2tleV0pXHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIF9zdGF0ZVtrZXldID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignW1N0b3JlXSBzdGF0ZSBjYW5ub3Qgc2F2ZSBmdW5jdGlvbi4nKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXR0ZXIgaG9va1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3RhdGUsIGtleSwge1xyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGdldCAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gX3N0YXRlW2tleV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCAobmV3VmFsKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdbU3RvcmVdIG11dGF0ZSBzdGF0ZSBmYWlsZWQuIFVzZSAubXV0YXRlKCkgdG8gbXV0YXRlIHN0YXRlJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbXV0YXRlIHN0YXRlXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgKi9cclxuICBtdXRhdGUgKGZuKSB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuX3N0YXRlID0gZGVlcGNsb25lKFxyXG4gICAgICBmbihcclxuICAgICAgICBkZWVwY2xvbmUodGhpcy5fc3RhdGUpXHJcbiAgICAgIClcclxuICAgIClcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9ob29rU3RhdGUobmV3U3RhdGUpXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0b3JlXHJcbiJdfQ==