'use strict'

var api_key = 'key-45b2b7a36c929e38315d362ff1f3baad';
var domain = 'sandboxb74cf13c305e462ea437bd8fbe124476.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var mailcomposer = require('mailcomposer');

var mail = mailcomposer({
  from: 'iAmee <devwellbeing@gmail.com>',
subject: 'An invitation',
  body: 'Test email text',
  html: '<b> Test email text </b>'
});

function sendEmail(email, name, next) {

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
	name: { required: true },
  },

  run: function (api, data, next) {
    let error = null
    // your logic here
    return sendEmail(data.params.email, data.params.name, next);
  }
}
