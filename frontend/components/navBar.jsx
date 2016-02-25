var React = require('react');

var navBar = React.createClass({

  render: function () {
    return <div className="navBar">
      <h2 className="homeButton">SciFiReads</h2>
      <ul>
        <li className="homeButton">Home</li>
        <li className="myBooksButton">My Books</li>
        <li className="friendsButton">Friends</li>
        <li className="logout">Log Out</li>
      </ul>
    </div>
  }

});

module.exports = navBar;
