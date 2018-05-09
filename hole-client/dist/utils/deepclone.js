'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Object deepclone
 * @param {Object} obj the object need clone
 */
module.exports = function deepclone(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(function (v) {
      if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null) return deepclone(v);else return v;
    });
  } else {
    var newObj = {};

    Object.keys(obj).forEach(function (v) {
      if (_typeof(obj[v]) === 'object' && obj[v] !== null) {
        newObj[v] = deepclone(obj[v]);
      } else {
        newObj[v] = obj[v];
      }
    });

    return newObj;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZXBjbG9uZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZGVlcGNsb25lIiwib2JqIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwidiIsIm5ld09iaiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFJQUEsT0FBT0MsT0FBUCxHQUFpQixTQUFTQyxTQUFULENBQW9CQyxHQUFwQixFQUF5QjtBQUN4QyxNQUFJLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUFmLElBQTJCQSxRQUFRLElBQXZDLEVBQTZDO0FBQzNDLFdBQU9BLEdBQVA7QUFDRDs7QUFFRCxNQUFJQyxNQUFNQyxPQUFOLENBQWNGLEdBQWQsQ0FBSixFQUF3QjtBQUN0QixXQUFPQSxJQUFJRyxHQUFKLENBQVEsYUFBSztBQUNsQixVQUFJLFFBQU9DLENBQVAseUNBQU9BLENBQVAsT0FBYSxRQUFiLElBQXlCQSxNQUFNLElBQW5DLEVBQXlDLE9BQU9MLFVBQVVLLENBQVYsQ0FBUCxDQUF6QyxLQUNLLE9BQU9BLENBQVA7QUFDTixLQUhNLENBQVA7QUFJRCxHQUxELE1BS087QUFDTCxRQUFNQyxTQUFTLEVBQWY7O0FBRUFDLFdBQU9DLElBQVAsQ0FBWVAsR0FBWixFQUFpQlEsT0FBakIsQ0FBeUIsYUFBSztBQUM1QixVQUFJLFFBQU9SLElBQUlJLENBQUosQ0FBUCxNQUFrQixRQUFsQixJQUE4QkosSUFBSUksQ0FBSixNQUFXLElBQTdDLEVBQW1EO0FBQ2pEQyxlQUFPRCxDQUFQLElBQVlMLFVBQVVDLElBQUlJLENBQUosQ0FBVixDQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0xDLGVBQU9ELENBQVAsSUFBWUosSUFBSUksQ0FBSixDQUFaO0FBQ0Q7QUFDRixLQU5EOztBQVFBLFdBQU9DLE1BQVA7QUFDRDtBQUNGLENBdkJEIiwiZmlsZSI6ImRlZXBjbG9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBPYmplY3QgZGVlcGNsb25lXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogdGhlIG9iamVjdCBuZWVkIGNsb25lXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZXBjbG9uZSAob2JqKSB7XHJcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIG9ialxyXG4gIH1cclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xyXG4gICAgcmV0dXJuIG9iai5tYXAodiA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCkgcmV0dXJuIGRlZXBjbG9uZSh2KVxyXG4gICAgICBlbHNlIHJldHVybiB2XHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7fVxyXG5cclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBvYmpbdl0gPT09ICdvYmplY3QnICYmIG9ialt2XSAhPT0gbnVsbCkge1xyXG4gICAgICAgIG5ld09ialt2XSA9IGRlZXBjbG9uZShvYmpbdl0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3T2JqW3ZdID0gb2JqW3ZdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG5ld09ialxyXG4gIH1cclxufVxyXG4iXX0=