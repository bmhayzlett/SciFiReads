var React = require('react');
var SplitButton = require('react-bootstrap').SplitButton;
var MenuItem = require('react-bootstrap').MenuItem;
var UserActions = require('../actions/user_actions');

var ShelfButton = React.createClass({

  getInitialState: function () {
    return {bookshelf: this.props.bookshelf, drops: []}
  },

  componentWillMount: function () {
    this.determineDropdowns();
  },

  determineDropdowns: function () {
    if (this.state.bookshelf === "none") {
      this.state.button_default = "Want to Read";
      this.state.style = "notPressed";
      this.state.drops.push("Currently Reading");
      this.state.drops.push("Read");
    } else {
      this.state.style = "Pressed"
      if (this.state.bookshelf === "Want to Read") {
        this.state.button_default = "Want to Read";
        this.state.drops.push("Currently Reading");
        this.state.drops.push("Read");
      } else if (this.state.bookshelf === "Currently Reading") {
        this.state.button_default = "Currently Reading"
        this.state.drops.push("Want to Read");
        this.state.drops.push("Read");
      } else if (this.state.bookshelf === "Read") {
        this.state.button_default = "Read";
        this.state.drops.push("Want to Read");
        this.state.drops.push("Currently Reading");
      }
      this.state.drops.push("Remove from Shelves");
    };
  },

  handleClick: function (eventType) {
    debugger;
    UserActions.addToBookshelf(eventType.target.textContent);
  },

  render: function () {

    var menuItems = this.state.drops.map(function (drop, index) {
      return <MenuItem key = {index} onClick={this.handleClick} eventKey="{index+2}">{drop}</MenuItem>
    }.bind(this))

    return (
      <SplitButton bsStyle={"default"} onClick={this.handleClick} title={this.state.button_default} eventKey="1" id="whatever">
        {menuItems}
      </SplitButton>
    )
  }
});

module.exports = ShelfButton;
