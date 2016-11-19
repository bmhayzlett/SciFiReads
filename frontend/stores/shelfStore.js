var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');
var BookConstants = require('../constants/book_constants');

var ShelfStore = new Store(Dispatcher);
var _shelvedBooks = [];

ShelfStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BookConstants.BOOKSHELF_BOOKS_RECEIVED:
      resetShelves(payload.shelvedBooks.bookshelf_books);
      BookStore.__emitChange();
      break;
  }
};

ShelfStore.index = function (shelf) {
  var returned_books = []
  switch (shelf) {
    case "All":
      return allBooks();
    case "Want to Read":
      return filterShelves("Want to Read");
    case "Currently Reading":
      return filterShelves("Currently Reading");
    case "Read":
      return filterShelves("Read");
  }
};

function allBooks() {
  return _shelvedBooks.map(function(book) {return book.google_books_id});
};

function filterShelves(shelfName) {
  var filteredBooks = [];
  _shelvedBooks.forEach(function(book) {
    if (book.shelf_name === shelfName) {
      filteredBooks.push(book.google_books_id)
    }
  });
  return filteredBooks;
};

function resetShelves(shelvedBooks) {
  return _shelvedBooks = shelvedBooks;
};

module.exports = ShelfStore;

window.ShelfStore = ShelfStore;
