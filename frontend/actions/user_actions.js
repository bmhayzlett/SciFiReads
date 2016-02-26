var AppDispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants')

UserActions = {
  selectBook: function(book){
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOK_RECEIVED,
      book: book
    });
  }
}

module.exports = ApiActions;
