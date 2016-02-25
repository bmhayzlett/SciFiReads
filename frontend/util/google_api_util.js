var ApiActions = require('../actions/api_actions.js');

ApiUtil = {

  fetchBooks: function (searchItems) {
    $.ajax ({
      url: 'https://www.googleapis.com/books/v1/volumes?' +
        'q=subject:"Fiction+Science+Fiction"' + searchItems +
        '&fields=items(id,volumeInfo(title,authors,description,imageLinks))' +
        '&key=' + window.keys,
      type: 'GET',
      success: function (books){
        console.log(books);
        ApiActions.receiveAll(books);
      }
    });
  }

}

module.exports = ApiUtil;

window.ApiUtil = ApiUtil;
