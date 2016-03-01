var AppDispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants');
var GoogleApiUtil = require('../util/google_api_util');

UserActions = {
  fetchGoogleBooks: function(searchTerms){
    GoogleApiUtil.fetchBooks(searchTerms);
  },

  fetchSingleGoogleBook: function(gid){
    GoogleApiUtil.fetchSingleBook(gid);
  }
}

module.exports = UserActions;
