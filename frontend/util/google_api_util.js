var ApiActions = require('../actions/api_actions.js');

GoogleApiUtil = {

  fetchBooks: function (searchItems) {
    $.ajax ({
      url: 'https://www.googleapis.com/books/v1/volumes?' +
        'q=subject:"Fiction+Science+Fiction"' + searchItems +
        '&fields=items(id,volumeInfo(title,authors,description,imageLinks))' +
        '&key=' + window.keys + '&maxResults=40',
      type: 'GET',
      success: function (books){
        ApiActions.receiveAll(books);
      }
    });
  },

  fetchSingleBook: function (gBookId, callback) {
    $.ajax ({
      url: 'https://www.googleapis.com/books/v1/volumes/' + gBookId +
        '?key=' + window.keys +
        '&fields=id,volumeInfo(title,authors,description,imageLinks)',
      type: 'GET',
      success: function (book){
        callback(gBookId);
        ApiActions.receiveSingleBook(book);
      }
    });
  },

  fetchMultipleBooks: function (bookArray) {
    requestedBooks = [];
    bookArray.forEach(function(book) {
      $.ajax ({
        url: 'https://www.googleapis.com/books/v1/volumes/' +
          book +
          '?key=' + window.keys +
          '&fields=id,volumeInfo(title,authors,description,imageLinks)' +
          '&maxResults=40',
        type: 'GET',
        success: function (book){
          requestedBooks.push(book)
          if (requestedBooks.length === bookArray.length) {
            ApiActions.receiveAll({items: requestedBooks});
          }
        },
        error: function () {
          console.log("error fetching")
        }
      });
    })
  }

}

module.exports = GoogleApiUtil;

window.GoogleApiUtil = GoogleApiUtil;
