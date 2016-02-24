var AppDispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants')

ApiActions = {
  receiveAll: function(books){
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOKS_RECEIVED,
      books: books
    });
  }
}

module.exports = ApiActions;
