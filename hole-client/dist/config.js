'use strict';

// ENV
var env = 'production'; // 'development' or 'production'

// WXAPP VERSION
var version = 2.0;

// development and production host
var hosts = {
  development: 'http://localhost:3020',
  production: 'https://www.mingzhiwen.cn/hole-api'

  // apis
};var api = {
  user: {
    /**
     * login api
     * need header:
     * {
     *   'x-wechat-code': code,
     *   'x-wechat-encrypted': encryptedData,
     *   'x-wechat-iv': iv
     * }
     */
    login: {
      method: 'POST',
      url: '/user/wxlogin'
    },
    info: {
      method: 'GET',
      url: '/user/info'
    },
    blog: {
      method: 'GET',
      url: '/v2/user'
    }
  },
  blog: {
    list: {
      method: 'GET',
      url: '/v2/blogs'
    },
    detail: {
      method: 'GET',
      url: '/v2/blogs'
    },
    like: {
      method: 'POST',
      url: '/blog/like'
    },
    delete: {
      method: 'POST',
      url: '/blog/delete'
    },
    imageUpload: {
      method: 'POST',
      url: '/blog/image'
    },
    new: {
      method: 'POST',
      url: '/v2/blogs'
    },
    comment: {
      method: 'POST',
      url: '/v2/comments'
    },
    deleteComment: {
      method: 'DELETE',
      url: '/v2/comments'
    }
  },
  notifications: {
    count: {
      method: 'GET',
      url: '/v2/notifications'
    },
    messages: {
      method: 'GET',
      url: '/v2/notifications/messages'
    },
    read: {
      method: 'PUT',
      url: '/v2/notifications'
    }
  },
  ads: {
    method: 'GET',
    url: '/v2/ads'
  },
  configs: {
    method: 'GET',
    url: '/v2/configs'
  }
};

module.exports = {
  env: env,
  version: version,
  api: disposeUrl(api, hosts[env])
};

function disposeUrl(obj, prefix) {
  Object.keys(obj).forEach(function (v) {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url;
    } else {
      obj[v] = disposeUrl(obj[v], prefix);
    }
  });

  return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJ2ZXJzaW9uIiwiaG9zdHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJhcGkiLCJ1c2VyIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJpbmZvIiwiYmxvZyIsImxpc3QiLCJkZXRhaWwiLCJsaWtlIiwiZGVsZXRlIiwiaW1hZ2VVcGxvYWQiLCJuZXciLCJjb21tZW50IiwiZGVsZXRlQ29tbWVudCIsIm5vdGlmaWNhdGlvbnMiLCJjb3VudCIsIm1lc3NhZ2VzIiwicmVhZCIsImFkcyIsImNvbmZpZ3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGlzcG9zZVVybCIsIm9iaiIsInByZWZpeCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwidiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU1BLE1BQU0sWUFBWixDLENBQXlCOztBQUV6QjtBQUNBLElBQU1DLFVBQVUsR0FBaEI7O0FBRUE7QUFDQSxJQUFNQyxRQUFRO0FBQ1pDLGVBQWEsdUJBREQ7QUFFWkMsY0FBWTs7QUFHZDtBQUxjLENBQWQsQ0FNQSxJQUFNQyxNQUFNO0FBQ1ZDLFFBQU07QUFDSjs7Ozs7Ozs7O0FBU0FDLFdBQU87QUFDTEMsY0FBUSxNQURIO0FBRUxDLFdBQUs7QUFGQSxLQVZIO0FBY0pDLFVBQU07QUFDSkYsY0FBUSxLQURKO0FBRUpDLFdBQUs7QUFGRCxLQWRGO0FBa0JKRSxVQUFNO0FBQ0pILGNBQVEsS0FESjtBQUVKQyxXQUFLO0FBRkQ7QUFsQkYsR0FESTtBQXdCVkUsUUFBTTtBQUNKQyxVQUFNO0FBQ0pKLGNBQVEsS0FESjtBQUVKQyxXQUFLO0FBRkQsS0FERjtBQUtKSSxZQUFRO0FBQ05MLGNBQVEsS0FERjtBQUVOQyxXQUFLO0FBRkMsS0FMSjtBQVNKSyxVQUFNO0FBQ0pOLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FURjtBQWFKTSxZQUFRO0FBQ05QLGNBQVEsTUFERjtBQUVOQyxXQUFLO0FBRkMsS0FiSjtBQWlCSk8saUJBQWE7QUFDWFIsY0FBUSxNQURHO0FBRVhDLFdBQUs7QUFGTSxLQWpCVDtBQXFCSlEsU0FBSztBQUNIVCxjQUFRLE1BREw7QUFFSEMsV0FBSztBQUZGLEtBckJEO0FBeUJKUyxhQUFTO0FBQ1BWLGNBQVEsTUFERDtBQUVQQyxXQUFLO0FBRkUsS0F6Qkw7QUE2QkpVLG1CQUFlO0FBQ2JYLGNBQVEsUUFESztBQUViQyxXQUFLO0FBRlE7QUE3QlgsR0F4Qkk7QUEwRFZXLGlCQUFlO0FBQ2JDLFdBQU87QUFDTGIsY0FBUSxLQURIO0FBRUxDLFdBQUs7QUFGQSxLQURNO0FBS2JhLGNBQVU7QUFDUmQsY0FBUSxLQURBO0FBRVJDLFdBQUs7QUFGRyxLQUxHO0FBU2JjLFVBQU07QUFDSmYsY0FBUSxLQURKO0FBRUpDLFdBQUs7QUFGRDtBQVRPLEdBMURMO0FBd0VWZSxPQUFLO0FBQ0hoQixZQUFRLEtBREw7QUFFSEMsU0FBSztBQUZGLEdBeEVLO0FBNEVWZ0IsV0FBUztBQUNQakIsWUFBUSxLQUREO0FBRVBDLFNBQUs7QUFGRTtBQTVFQyxDQUFaOztBQWtGQWlCLE9BQU9DLE9BQVAsR0FBaUI7QUFDZjNCLFVBRGU7QUFFZkMsa0JBRmU7QUFHZkksT0FBS3VCLFdBQVd2QixHQUFYLEVBQWdCSCxNQUFNRixHQUFOLENBQWhCO0FBSFUsQ0FBakI7O0FBTUEsU0FBUzRCLFVBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCQyxNQUExQixFQUFrQztBQUNoQ0MsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixhQUFLO0FBQzVCLFFBQUlKLElBQUlLLENBQUosRUFBT3pCLEdBQVgsRUFBZ0I7QUFDZG9CLFVBQUlLLENBQUosRUFBT3pCLEdBQVAsR0FBYXFCLFNBQVNELElBQUlLLENBQUosRUFBT3pCLEdBQTdCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xvQixVQUFJSyxDQUFKLElBQVNOLFdBQVdDLElBQUlLLENBQUosQ0FBWCxFQUFtQkosTUFBbkIsQ0FBVDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxTQUFPRCxHQUFQO0FBQ0QiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRU5WXHJcbmNvbnN0IGVudiA9ICdwcm9kdWN0aW9uJyAvLyAnZGV2ZWxvcG1lbnQnIG9yICdwcm9kdWN0aW9uJ1xyXG5cclxuLy8gV1hBUFAgVkVSU0lPTlxyXG5jb25zdCB2ZXJzaW9uID0gMi4wXHJcblxyXG4vLyBkZXZlbG9wbWVudCBhbmQgcHJvZHVjdGlvbiBob3N0XHJcbmNvbnN0IGhvc3RzID0ge1xyXG4gIGRldmVsb3BtZW50OiAnaHR0cDovL2xvY2FsaG9zdDozMDIwJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly93d3cubWluZ3poaXdlbi5jbi9ob2xlLWFwaSdcclxufVxyXG5cclxuLy8gYXBpc1xyXG5jb25zdCBhcGkgPSB7XHJcbiAgdXNlcjoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBsb2dpbiBhcGlcclxuICAgICAqIG5lZWQgaGVhZGVyOlxyXG4gICAgICoge1xyXG4gICAgICogICAneC13ZWNoYXQtY29kZSc6IGNvZGUsXHJcbiAgICAgKiAgICd4LXdlY2hhdC1lbmNyeXB0ZWQnOiBlbmNyeXB0ZWREYXRhLFxyXG4gICAgICogICAneC13ZWNoYXQtaXYnOiBpdlxyXG4gICAgICogfVxyXG4gICAgICovXHJcbiAgICBsb2dpbjoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL3VzZXIvd3hsb2dpbidcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy91c2VyL2luZm8nXHJcbiAgICB9LFxyXG4gICAgYmxvZzoge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvdjIvdXNlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGJsb2c6IHtcclxuICAgIGxpc3Q6IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL3YyL2Jsb2dzJ1xyXG4gICAgfSxcclxuICAgIGRldGFpbDoge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvdjIvYmxvZ3MnXHJcbiAgICB9LFxyXG4gICAgbGlrZToge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2Jsb2cvbGlrZSdcclxuICAgIH0sXHJcbiAgICBkZWxldGU6IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9ibG9nL2RlbGV0ZSdcclxuICAgIH0sXHJcbiAgICBpbWFnZVVwbG9hZDoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2Jsb2cvaW1hZ2UnXHJcbiAgICB9LFxyXG4gICAgbmV3OiB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvdjIvYmxvZ3MnXHJcbiAgICB9LFxyXG4gICAgY29tbWVudDoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL3YyL2NvbW1lbnRzJ1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZUNvbW1lbnQ6IHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgdXJsOiAnL3YyL2NvbW1lbnRzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbm90aWZpY2F0aW9uczoge1xyXG4gICAgY291bnQ6IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL3YyL25vdGlmaWNhdGlvbnMnXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZXM6IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL3YyL25vdGlmaWNhdGlvbnMvbWVzc2FnZXMnXHJcbiAgICB9LFxyXG4gICAgcmVhZDoge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICB1cmw6ICcvdjIvbm90aWZpY2F0aW9ucydcclxuICAgIH1cclxuICB9LFxyXG4gIGFkczoge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogJy92Mi9hZHMnXHJcbiAgfSxcclxuICBjb25maWdzOiB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiAnL3YyL2NvbmZpZ3MnXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBlbnYsXHJcbiAgdmVyc2lvbixcclxuICBhcGk6IGRpc3Bvc2VVcmwoYXBpLCBob3N0c1tlbnZdKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwb3NlVXJsIChvYmosIHByZWZpeCkge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCh2ID0+IHtcclxuICAgIGlmIChvYmpbdl0udXJsKSB7XHJcbiAgICAgIG9ialt2XS51cmwgPSBwcmVmaXggKyBvYmpbdl0udXJsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmpbdl0gPSBkaXNwb3NlVXJsKG9ialt2XSwgcHJlZml4KVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBvYmpcclxufVxyXG4iXX0=