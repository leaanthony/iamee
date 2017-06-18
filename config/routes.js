exports['default'] = {
  routes: function (api) {
    return {

      get: [{
          path: '/invite',
          action: 'invite'
        }],
      post: [{
          path: '/login',
          action: 'login'
        },
        {
          path: '/register',
          action: 'register'
        },
        {
          path: '/invite',
          action: 'invite'
        }
      ]
    }
  }
}