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
      return {book: {id: "", volumeInfo: {title: "", subtitle: "", authors: [],
        description: "", imageLinks: undefined, publisher: "", publishedDate: "",
        averageRating: null, ratingsCount: null, industryIdentifiers: []}},
        bookshelf: "none"};
    }
  },

  componentWillMount: function () {
    UserActions.fetchSingleGoogleBook(this.props.params.id,
      UserActions.fetchBookshelf);
    this.bookListener = BookStore.addListener(this._onChange);
  },

// The bug appears to be that on refresh, the bookstore receives books
// not necessarily including the book, so find by book id returns undefined

  _onChange: function () {
    this.setState({book: BookStore.find(this.props.params.id),
      bookshelf: BookStore.shelf()});
  },

  componentWillUnmount: function () {
    this.bookListener.remove();
  },

  subTitle: function () {
    return <div>TEST</div>
  },

  render: function () {
    // get book cover image
    if (this.state.book.volumeInfo.imageLinks !== undefined) {
      if (this.state.book.volumeInfo.imageLinks.thumbnail !== undefined) {
        bookImage = <img src={this.state.book.volumeInfo.imageLinks.thumbnail}/>;
      } else {
        bookImage = <div className="noImage">"No book image!"</div>;
      };
    } else {
      bookImage = <div className="noImage">"No book image!"</div>;
    };

    // get authors
    var authors = this.state.book.volumeInfo.authors.map(function (author, index) {
      return <li className = "bookAuthorLI"key={index}>{author}</li>
    });

    if (typeof this.state.book.volumeInfo.industryIdentifiers[0] !== "undefined") {
      var isbn10 = <div className="bookShowDetail">{this.state.book.volumeInfo.industryIdentifiers[0].identifier}</div>
    };

    if (typeof this.state.book.volumeInfo.industryIdentifiers[1] !== "undefined") {
      var isbn13 = <div className="bookShowDetail">{this.state.book.volumeInfo.industryIdentifiers[1].identifier}</div>
    };

    return (
      <div className="bookDisplay">
        <div className="bookShowLeft">
          <div className="bookImage">{bookImage}</div>
          <div className="bookAverageRatingLabel">Average Google Books Rating</div>
          <div className="bookAverageRating">{this.state.book.volumeInfo.averageRating}</div>
          <div className="bookRatingsCountLabel">Number of Ratings</div>
          <div className="bookRatingsCount">{this.state.book.volumeInfo.ratingsCount}</div>
          <div className="bookshelfButton">
            <BookshelfButton bookshelf={this.state.bookshelf} bookId={this.state.book.id}/>
          </div>
        </div>


        <div className="bookShowRight">
          <div className="showRightTop">
            <div className="bookTitleLabel">Title
              <div className="showBookTitle">{this.state.book.volumeInfo.title}</div>
            </div>
            <div className="bookShowDetailLabel">Subtitle
              <div className="bookShowDetail">{this.state.book.volumeInfo.subtitle}</div>
            </div>
            <div className="bookShowDetailLabel">Author
              <ul className="bookShowDetail">{authors}</ul>
            </div>
            <div className="bookShowDetailLabel">Publisher
              <div className="bookShowDetail">{this.state.book.volumeInfo.publisher}</div>
            </div>
            <div className="bookShowDetailLabel">Published Date
              <div className="bookShowDetail">{this.state.book.volumeInfo.publishedDate}</div>
            </div>
            <div className="bookShowDetailLabel">ISBN-10
              {isbn10}
            </div>
            <div className="bookShowDetailLabel">ISBN-13
              {isbn13}
            </div>
          </div>

          <div className="bookDescription">{this.state.book.volumeInfo.description.replace(/(<([^>]+)>)/ig,"")}</div>
        </div>

      </div>

    )

  }

});

module.exports = Book;
