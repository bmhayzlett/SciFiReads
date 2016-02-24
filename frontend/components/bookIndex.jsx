var React = require('react');
var BookStore = require('../stores/bookStore');
var ApiUtil = require('../util/api_util');

var bookIndex = React.createClass({

  getInitialState: function () {
    return {books: BookStore.all()};
  },

  componentDidMount: function () {
    this.bookIndexToken = BookStore.addListener(this._onChange);
    ApiUtil.fetchBooks();
  },

  _onChange: function () {
    this.setState({books: BookStore.all()});
  },

  render: function () {

    var bookList = this.state.books.map(function (book) {
      return <li><p>{book.title}</p><p>{book.author}</p></li>;
    });

    return (
      <div>
        <ul>
          {bookList}
        </ul>
      </div>
    );
  }

});

window.bookIndex = bookIndex;

module.exports = bookIndex;
