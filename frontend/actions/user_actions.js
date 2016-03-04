var AppDispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants');
var GoogleApiUtil = require('../util/google_api_util');
var ApiUtil = require('../util/api_util');

UserActions = {
  fetchGoogleBooks: function(searchTerms){
    GoogleApiUtil.fetchBooks(searchTerms);
  },

  fetchSingleGoogleBook: function(gid, callback){
    GoogleApiUtil.fetchSingleBook(gid, callback);
  },

  SignOutSession: function () {
    ApiUtil.signOut();
  },

  addToBookshelf: function (newShelf, bookId) {
    ApiUtil.addToShelf(newShelf, bookId);
  },

  changeBookshelf: function (newShelf, bookId) {
    ApiUtil.changeBookshelf(newShelf, bookId);
  },

  fetchBookshelf: function(bookId) {
    ApiUtil.fetchBookshelf(bookId);
  }
}

module.exports = UserActions;
