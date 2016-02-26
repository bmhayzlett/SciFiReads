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
  }

}

module.exports = GoogleApiUtil;
