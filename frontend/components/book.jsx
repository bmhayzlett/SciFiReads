var React = require('react');

var GoogleApiUtil = require('../util/google_api_util');
var UserActions = require('../actions/user_actions');
var BookshelfButton = require('./bookshelfButton');

var Book = React.createClass({

  getInitialState: function () {
    if (BookStore.find(this.props.params.id) !== undefined) {
      return { book: BookStore.find(this.props.params.id),
        bookshelf: "none"
      };
    } else {
      return {book: {id: "", volumeInfo: {title: "", authors: [],
        description: "", imageLinks: undefined}}, bookshelf: "none"};
    }
  },

  componentWillMount: function () {
    UserActions.fetchSingleGoogleBook(this.props.params.id,
      UserActions.fetchBookshelf);
    this.bookListener = BookStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({book: BookStore.find(this.props.params.id),
      bookshelf: BookStore.shelf()});
  },

  componentWillUnmount: function () {
    this.bookListener.remove();
  },

  render: function () {

    // get book cover image
    if (this.state.book.volumeInfo.imageLinks !== undefined) {
      if (this.state.book.volumeInfo.imageLinks.thumbnail !== undefined) {
        bookImage = <img src={this.state.book.volumeInfo.imageLinks.thumbnail}/>;
      } else {
        bookImage = "No book image!";
      };
    } else {
      bookImage = "No book image!";
    };

    // get authors
    var authors = this.state.book.volumeInfo.authors.map(function (author, index) {
      return <li key={index}>{author}</li>
    });

    return (
      <div className="bookDisplay">
        <div className="bookImage">{bookImage}</div>
        <div className="bookTitle">{this.state.book.volumeInfo.title}</div>
        <ul className="bookAuthors">Author(s): {authors}</ul>
        <div className="bookDescription">{this.state.book.volumeInfo.description.replace(/(<([^>]+)>)/ig,"")}</div>
        <BookshelfButton bookshelf={this.state.bookshelf} bookId={this.state.book.id}/>
      </div>

    )

  }

});

module.exports = Book;
