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

  fetchBooks: function () {
    $.ajax ({
      url: '/api/books',
      type: 'GET',
      success: function (books){
        ApiActions.receiveAll(books);
      }
    });
  },

  addToShelf: function (shelf) {
    debugger;
    $.ajax ({
      url: '/api/bookonshelves/',
      type: 'POST',
      data: {shelf: shelf},
      success: function (shelf){
        ApiActions.updateShelf(shelf);
      }
    })
  }

}

module.exports = ApiUtil;

window.ApiUtil = ApiUtil;
