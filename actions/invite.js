'use strict'

var api_key = 'key-45b2b7a36c929e38315d362ff1f3baad';
var domain = 'iamee.leaanthony.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var mailcomposer = require('mailcomposer');

var mail = mailcomposer({
  from: 'iAmee <iamee@leaanthony.com>',
  subject: 'An invitation',
  body: '',
  html: '<div style="text-align: center"><h3>You are invited to participate in an activity! Please click the logo to accept.</h2><a href="https://iamee.leaanthony.com"><img src="https://iamee.leaanthony.com/static/media/logo.466138d5.png" style="width:75%"></img></a></div>'
});

function sendEmail(email, next) {

  mail.build(function(mailBuildError, message) {

    var dataToSend = {
        to: email,
        message: message.toString('ascii')
    };

    mailgun.messages().sendMime(dataToSend, function (sendError, body) {
	return next(sendError);
    });
  });
};


exports.action = {
  name: 'invite',
  description: 'an actionhero action',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: [],

  inputs: {
	email: { required: true },
  },

  run: function (api, data, next) {
    let error = null
    // your logic here
    return sendEmail(data.params.email, next);
  }
}
