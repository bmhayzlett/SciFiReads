var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants');

var _books = {};
var BookStore = new Store(Dispatcher);

BookStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BookConstants.BOOKS_RECEIVED:
      resetBooks(payload.books);
      BookStore.__emitChange();
      break;
  }
};

BookStore.all = function() {
  var bookArray = [];
  for (var key in _books) {
    if (_books.hasOwnProperty(key)) {
      bookArray.push(_books[key]);
    }
  }
  return bookArray;
};

function resetBooks(books) {
  _books = {}
  books.forEach(function(book, index){
    _books[index] = book;
  });
};

module.exports = BookStore;

window.BookStore = BookStore;
