var ApiActions = require('../actions/api_actions.js');

ApiUtil = {

  sign_out: function () {
    $.ajax ({
      url: '/session/',
      type: 'POST',
      data: {'_method': 'delete'},
      success: function () {
        window.location = "/session/new"
      }
    })
  },

  fetchBooks: function () {
    $.ajax ({
      url: '/api/books',
      type: 'GET',
      success: function (books){
        ApiActions.receiveAll(books);
      }
    });
  }

}

module.exports = ApiUtil;

window.ApiUtil = ApiUtil;
