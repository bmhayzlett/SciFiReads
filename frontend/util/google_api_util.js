var ApiActions = require('../actions/api_actions.js');

GoogleApiUtil = {

  fetchBooks: function (searchItems) {
    $.ajax ({
      url: 'https://www.googleapis.com/books/v1/volumes?' +
        'q=subject:"Fiction+Science+Fiction"' + searchItems +
        '&fields=items(id,volumeInfo(title,subtitle,authors,description,imageLinks,' +
        'publisher,publishedDate,averageRating,ratingsCount,industryIdentifiers))' +

        // '&fields=id,volumeInfo(title,subtitle,authors,description,imageLinks,' +
        // 'publisher,publishedDate,averageRating,ratingsCount,industryIdentifiers)'


        '&key=' + window.keys + '&maxResults=40',
      type: 'GET',
      success: function (books){
        if (typeof books.items !== "undefined") {
          ApiActions.receiveAll(books);
        }
      }
    });
  },

  fetchSingleBook: function (gBookId, callback) {
    $.ajax ({
      url: 'https://www.googleapis.com/books/v1/volumes/' + gBookId +
        '?key=' + window.keys +
        '&fields=id,volumeInfo(title,subtitle,authors,description,imageLinks,' +
        'publisher,publishedDate,averageRating,ratingsCount,industryIdentifiers)',
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
        }
      });
    })
  }

}

module.exports = GoogleApiUtil;

window.GoogleApiUtil = GoogleApiUtil;
