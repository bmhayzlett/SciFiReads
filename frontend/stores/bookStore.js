var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants');

var _books = {};
// TODO: check database for shelf
var _shelf = "none"
var BookStore = new Store(Dispatcher);

BookStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BookConstants.BOOKS_RECEIVED:
      resetBooks(payload.books.items);
      BookStore.__emitChange();
      break;
    case BookConstants.BOOK_RECEIVED:
      resetBooks([payload.book])
      BookStore.__emitChange();
      break;
    case BookConstants.SHELF_UPDATED:
      resetShelf([payload.shelf.shelf_name])
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


BookStore.find = function (gid) {
  return _books[gid];
};

BookStore.shelf = function () {
  return _shelf;
}

function resetShelf(shelf) {
  _shelf = shelf[0]
}

function resetBooks(books) {
  _books = {}
  books.forEach(function(book){
    _books[book.id] = book;
  });
};

module.exports = BookStore;

window.BookStore = BookStore;
