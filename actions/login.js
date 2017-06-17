'use strict'

exports.action = {
  name: 'login',
  description: 'give me your email and password, I\'ll log you in',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: [],

  inputs: {
    email: {
      required: true
    },
    password: {
      required: true
    },
  },

  run: function (api, data, next) {
    let error = null
    let error_info = "wrong user name or password"
    let user = data.params
    api.cache.load(user.email, function (error, value, expireTimestamp, createdAt, readAt) {
      if (value == null) {
        error = error_info
        return next(error)
      } else {
        if (user.password == value.password) {
          data.response = {
            user: value
          }
          return next(error)
        } else {
          error = error_info
          return next(error)
        }
      }
    })
    // return next(error)
  }
}
