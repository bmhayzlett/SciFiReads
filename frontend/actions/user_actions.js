var AppDispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants');
var GoogleApiUtil = require('../util/google_api_util');
var ApiUtil = require('../util/api_util');

UserActions = {
  fetchGoogleBooks: function(searchTerms){
    GoogleApiUtil.fetchBooks(searchTerms);
  },

  fetchSingleGoogleBook: function(gid){
    GoogleApiUtil.fetchSingleBook(gid);
  },

  sign_out_session: function () {
    ApiUtil.sign_out();
  }
}

module.exports = UserActions;
