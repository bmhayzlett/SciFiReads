var React = require('react');
var BookStore = require('../stores/bookStore');
var ApiUtil = require('../util/google_api_util');

var bookIndex = React.createClass({

  getInitialState: function () {
    return {books: BookStore.all()};
  },

  componentDidMount: function () {
    this.bookIndexToken = BookStore.addListener(this._onChange);
    ApiUtil.fetchBooks("");
  },

  _onChange: function () {
    this.setState({books: BookStore.all()});
  },

  render: function () {

    var bookList = this.state.books.map(function (book) {
      return <li><p>{book.volumeInfo.title}</p><p>{book.volumeInfo.authors[0]}</p></li>;
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
