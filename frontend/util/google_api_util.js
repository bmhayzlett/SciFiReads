var ApiActions = require('../actions/api_actions.js');

GoogleApiUtil = {

  fetchBooks: function (searchItems) {
    $.ajax ({
      url: 'https://www.googleapis.com/books/v1/volumes?' +
        'q=subject:"Fiction+Science+Fiction"' + searchItems +
        '&fields=items(id,volumeInfo(title,authors,description,imageLinks))' +
        '&key=' + window.keys,
      type: 'GET',
      success: function (books){
        ApiActions.receiveAll(books);
      }
    });
  },

  fetchSingleBook: function (gBookId) {
    $.ajax ({
      url: 'https://www.googleapis.com/books/v1/volumes/' + gBookId +
        '?key=' + window.keys +
        '&fields=id,volumeInfo(title,authors,description,imageLinks)',
      type: 'GET',
      success: function (book){
        ApiActions.receiveSingleBook(book);
      }
    });
  }

}

module.exports = GoogleApiUtil;
