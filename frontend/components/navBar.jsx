var React = require('react');

var navBar = React.createClass({

  render: function () {
    return <div id="navBar">
      <h2 id="homeButton">SciFiReads</h2>
      <ul>
        <li id="homeButton">Home</li>
        <li id="myBooksButton">My Books</li>
        <li id="friendsButton">Friends</li>
        <li id="logout">Log Out</li>
      </ul>
    </div>
  }

});

module.exports = navBar;
