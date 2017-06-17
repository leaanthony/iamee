exports['default'] = {
  routes: function (api) {
    return {


      post: [{
          path: '/login',
          action: 'login'
        },
        {
          path: '/register',
          action: 'register'
        } // (POST) /api/login/123
      ]

    }
  }
}