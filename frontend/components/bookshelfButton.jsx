var React = require('react');
var SplitButton = require('react-bootstrap').SplitButton;
var MenuItem = require('react-bootstrap').MenuItem;

var ShelfButton = React.createClass({

  render: function () {
    return (
      <SplitButton bsStyle={"default"} title="Test" id="whatever">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
      </SplitButton>
    )
  }
});

module.exports = ShelfButton;
