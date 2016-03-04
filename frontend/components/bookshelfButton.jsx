var React = require('react');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var UserActions = require('../actions/user_actions');

var ShelfButton = React.createClass({

  getInitialState: function () {
    return {drops: [], button_default: "",
      style: "default", bookshelf: "none"}
  },

  componentWillReceiveProps: function (nextProps) {
    this.determineDropdowns(nextProps.bookshelf);
  },

  determineDropdowns: function (bookshelf) {
    this.state.drops = [];
    if (bookshelf === "none") {
      this.setState({button_default: "Add to Bookshelf!",
        style: "default",
        drops: ["Want to Read", "Currently Reading", "Read"],
        bookshelf: bookshelf})
    } else {
      if (bookshelf === "Want to Read") {
        this.setState({button_default: "Want to Read",
          style: "success",
          drops: ["Currently Reading", "Read",
            "Remove from Shelves"],
            bookshelf: bookshelf});
      } else if (bookshelf === "Currently Reading") {
        this.setState({button_default: "Currently Reading",
          style: "success",
          drops: ["Want to Read", "Read",
            "Remove from Shelves"],
            bookshelf: bookshelf});
      } else if (bookshelf === "Read") {
        this.setState({button_default: "Read",
          style: "success",
          drops: ["Want to Read", "Currently Reading",
            "Remove from Shelves"],
            bookshelf: bookshelf});
      }
    };
  },

  handleClick: function (eventType) {
    if (this.state.style === "default") {
      UserActions.addToBookshelf(eventType.target.textContent, this.props.bookId);
    } else {
      UserActions.changeBookshelf(eventType.target.textContent, this.props.bookId);
    }
  },

  render: function () {

    var menuItems = this.state.drops.map(function (drop, index) {
      return <MenuItem key = {index} onClick={this.handleClick} eventKey="{index+2}">{drop}</MenuItem>
    }.bind(this))

    return (
      <DropdownButton bsStyle={this.state.style}
        title={this.state.button_default} eventKey="1" id="whatever">
        {menuItems}
      </DropdownButton>
    )
  }
});

module.exports = ShelfButton;
