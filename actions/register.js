'use strict'
let uuid = require('uuid')
exports.action = {
  name: 'register',
  description: 'an actionhero action',
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
    name: {
      required: true
    },
    password: {
      required: true
    }
  },
  // password: {required: true}

  run: function (api, data, next) {
    let error = null
    let user = data.params
    api.cache.load(user.email, function (error, value, expireTimestamp, createdAt, readAt) {
      if (value == null) {
        var key = user.email
        user.uuid = uuid.v4()
        api.cache.save(key, user, null, function (error, newObj) {
          data.response = {
            token: user.uuid
          }
          return next(error)
        })
      } else {
        error = "user existed"
        return next(error)
      }
    })
  }
}