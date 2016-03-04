var React = require('react');
var BookStore = require('../stores/bookStore');
var GoogleApiUtil = require('../util/google_api_util');
var UserActions = require('../actions/user_actions');
var ApiActions = require('../actions/api_actions');
var Link = require('react-router').Link;

var bookIndex = React.createClass({

  getInitialState: function () {
    return {books: BookStore.all()};
  },

  componentDidMount: function () {
    this.bookIndexToken = BookStore.addListener(this._onChange);
    // Add action for fetching books, call
    UserActions.fetchGoogleBooks("1984");
  },

  componentWillUnmount: function () {
    this.bookIndexToken.remove();
  },

  _onChange: function () {
    this.setState({books: BookStore.all()});
  },

  render: function () {
    var bookList = this.state.books.map(function (book, index1) {
      var authors = book.volumeInfo.authors.map(function (author, index2) {
        return <li key={index2}>{author}</li>
      });

      var bookUrl = '/books/' + book.id;

        if (book.volumeInfo.imageLinks !== undefined &&
          book.volumeInfo.imageLinks.thumbnail !== undefined) {
          var thumbNail = <img src={book.volumeInfo.imageLinks.thumbnail}/>;
        } else {
          thumbNail = "No book image!"
        };

      return  (
        <Link key={index1} to={bookUrl}>
          <li className="bookIndexItem">
              <div className="indexThumbnail">{thumbNail}</div>
              <p className="bookTitle">{book.volumeInfo.title}</p>
              <ul>Author(s): {authors}</ul>
          </li>
        </Link>
      )
    });

    return (
      <div className="bookList">
        <ul>
          {bookList}
        </ul>
      </div>
    );
  }

});

module.exports = bookIndex;
