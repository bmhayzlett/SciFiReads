var AppDispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants');
var GoogleApiUtil = require('../util/google_api_util');

ApiActions = {
  receiveAll: function(books){
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOKS_RECEIVED,
      books: books
    });
  },

  fetchBooks: function (searchTerms) {
    GoogleApiUtil.fetchBooks(searchTerms);
  }
}

module.exports = ApiActions;
