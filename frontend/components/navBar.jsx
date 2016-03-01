var React = require('react');

var navBar = React.createClass({

  doSearch: function (){
    var query=this.refs.searchInput.getDOMNode().value;
    UserActions.fetchGoogleBooks(query);
  },

  render: function () {
    var home = function(e) {
      window.location = "/#/"
    }.bind(this);

    return (
      <header className="header">
        <div className="navBar">
          <h2 id="SciFiReads" className="SciFiReads" onClick={home}>SciFiReads</h2>
          <input type="text" ref="searchInput" placeholder="Search Books"
            value={this.props.query} onChange={this.doSearch}
            className="searchBar"/>
          <ul className="navLinks">
            <li className="homeButton" onClick={home}>Home</li>
            <li className="myBooksButton">My Books</li>
            <li className="friendsButton">Friends</li>
            <li className="logout">Log Out</li>
          </ul>
        </div>
      </header>
    );
  }

});

module.exports = navBar;
