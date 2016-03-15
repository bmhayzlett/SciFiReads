var React = require('react');
var ShelfStore = require('../stores/shelfStore');
var BookIndex = require('./bookIndex');

var GoogleApiUtil = require('../util/google_api_util');
var UserActions = require('../actions/user_actions');

var Bookshelves = React.createClass({

  getInitialState: function () {
    return {shelf: "All"}
  },

  componentWillMount: function (eventType) {
    UserActions.fetchMultiGoogleBooks(ShelfStore.index(this.state.shelf));
  },

  handleClick: function (eventType) {
    switch (eventType.target.textContent) {
      case "All Books":
        UserActions.fetchMultiGoogleBooks(ShelfStore.index("All"));
        this.setState({shelf: "All"});
        break;
      case "Want to Read":
        UserActions.fetchMultiGoogleBooks(ShelfStore.index("Want to Read"));
        this.setState({shelf: "Want to Read"});
        break;
      case "Currently Reading":
        UserActions.fetchMultiGoogleBooks(ShelfStore.index("Currently Reading"));
        this.setState({shelf: "Currently Reading"});
        break;
      case "Read":
        UserActions.fetchMultiGoogleBooks(ShelfStore.index("Read"));
        this.setState({shelf: "Read"});
        break;
    }
  },

  render: function () {

    var button = function (test) {
      if (test === this.state.shelf) {
        return "selectedShelf";
      }
      return "unselectedShelf";
    }.bind(this);

    return (
      <div>
        <ul className="bookshelfList">
          <li key="All Books" className={button("All")}
            onClick={this.handleClick}>All Books</li>
          <li key="Want to Read" className={button("Want to Read")}
            onClick={this.handleClick}>Want to Read</li>
          <li key="Currently Reading" className={button("Currently Reading")}
            onClick={this.handleClick}>Currently Reading</li>
          <li key="Read" className={button("Read")}
            onClick={this.handleClick}>Read</li>
        </ul>
        <BookIndex/>
      </div>
    )
  }

});

module.exports = Bookshelves;
