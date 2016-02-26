var React = require('react');

var navBar = React.createClass({

  render: function () {
    var home = function(e) {
      window.location = "/#/"
    }.bind(this);

    return <div className="navBar">
      <h2 className="SciFiReads" onClick={home}>SciFiReads</h2>
      <ul className="navLinks">
        <li className="homeButton" onClick={home}>Home</li>
        <li className="myBooksButton">My Books</li>
        <li className="friendsButton">Friends</li>
        <li className="logout">Log Out</li>
      </ul>
    </div>
  }

});

module.exports = navBar;
