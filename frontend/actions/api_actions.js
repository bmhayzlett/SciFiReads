var AppDispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants');

ApiActions = {

  receiveAll: function(books){
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOKS_RECEIVED,
      books: books
    });
  },

  receiveSingleBook: function(book){
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOK_RECEIVED,
      book: book
    });
  }


}

module.exports = ApiActions;
