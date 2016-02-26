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
    ApiActions.fetchBooks("");
  },

  componentWillUnmount: function () {
    this.bookIndexToken.remove();
  },

  _onChange: function () {
    this.setState({books: BookStore.all()});
  },



  render: function () {


    var bookList = this.state.books.map(function (book) {

      var authors = book.volumeInfo.authors.map(function (author, index) {
        return <li key={index}>{author}</li>
      });

      var bookUrl = '/books/' + book.id;

      return  (
        <Link to={bookUrl}>
          <li className="bookIndexItem" key={book.id}>
              <p>{book.volumeInfo.title}</p>
              <ul>Author(s): {authors}
            </ul>
          </li>
        </Link>
      )
    });

    return (
      <div>
        HELLO FROM bookIndex!
        <ul>
          {bookList}
        </ul>
      </div>
    );
  }

});

window.bookIndex = bookIndex;

module.exports = bookIndex;
