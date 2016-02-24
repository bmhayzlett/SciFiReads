var ApiActions = require('../actions/api_actions.js');

ApiUtil = {

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
