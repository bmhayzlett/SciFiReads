var React = require('react');
var Link = require('react-router').Link;
var UserActions = require('../actions/user_actions');

var navBar = React.createClass({

  doSearch: function (){
    var query=this.refs.searchInput.getDOMNode().value;
    UserActions.fetchGoogleBooks(query);
  },

  render: function () {
    var home = function() {
      this.props.history.push("/");
    }.bind(this);

    var myBooks = function() {
      this.props.history.push("/bookshelves");
    }.bind(this);

    return (
      <header className="header">
        <div className="navBar">
          <h2 id="SciFiReads" className="SciFiReads" onClick={home}>SciFiReads</h2>
          <input type="text" ref="searchInput" placeholder="Search All Books"
            value={this.props.query} onChange={this.doSearch}
            onFocus={home} className="searchBar"/>
          <ul className="navLinks">
            <li className="homeButton" onClick={home}>Home</li>
              <li className="myBooksButton" onClick={myBooks}>My Books</li>
            <li className="logout" onClick={UserActions.SignOutSession}>Log Out</li>
          </ul>
        </div>
      </header>
    );
  }
});

module.exports = navBar;
