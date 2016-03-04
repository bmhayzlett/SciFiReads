var ApiActions = require('../actions/api_actions.js');

ApiUtil = {

  signOut: function () {
    $.ajax ({
      url: '/session/',
      type: 'POST',
      data: {'_method': 'delete'},
      success: function () {
        window.location = "/session/new"
      }
    })
  },

  addToShelf: function (shelf, bookId) {
    $.ajax ({
      url: '/api/bookonshelves',
      type: 'POST',
      data: {shelf: shelf, google_book_id: bookId},
      success: function (shelf){
        ApiActions.updateShelf(shelf);
      }
    })
  },

  fetchBookshelf: function (bookId) {
    $.ajax ({
      url: '/api/bookonshelf',
      type: 'GET',
      data: {book_id: bookId},
      success: function (shelf){
        ApiActions.updateShelf(shelf);
      }
    })
  },

  changeBookshelf: function (shelf, bookId) {
    $.ajax({
      url: '/api/bookonshelf',
      type: 'POST',
      data: {'_method': 'patch', shelf: shelf, google_book_id: bookId},
      success: function (shelf) {
        ApiActions.updateShelf(shelf);
      }
    })
  }

}

module.exports = ApiUtil;

window.ApiUtil = ApiUtil;
