var AppDispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants');
var GoogleApiUtil = require('../util/google_api_util');

UserActions = {
  fetchGoogleBooks: function(searchTerms){
    GoogleApiUtil.fetchBooks(searchTerms);
  }
}

module.exports = UserActions;
