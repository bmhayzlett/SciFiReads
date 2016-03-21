var React = require('react');
var Link = require('react-router').Link;
var UserActions = require('../actions/user_actions');

var navBar = React.createClass({

  componentWillMount: function () {
    this.selected = "home";
  },

  doSearch: function (){
    var query=this.refs.searchInput.value;
    UserActions.fetchGoogleBooks(query);
  },

  clearSearch: function () {
    this.refs.searchInput.value = ""
  },

  render: function () {
    var home = function() {
      UserActions.fetchGoogleBooks("");
      this.selected = "home"
      this.props.context.router.push("/");
    }.bind(this);


    var myBooks = function() {
      this.selected = "myBooks"
      this.props.context.router.push("/bookshelves");
    }.bind(this);

    var button = function (btnType) {
      if (btnType === "home" && location.hash.startsWith('#/?_k')) {
        return "selectedButton"
      } else if (btnType === "myBooks" && location.hash.startsWith('#/bookshelves')) {
        return "selectedButton"
      };
      return "unselectedButton"
    }.bind(this);

    return (
      <header className="header">
        <div className="navBar">
          <h2 id="SciFiReads" className="SciFiReads" onClick={home}>SciFiReads</h2>
          <input type="text" ref="searchInput" placeholder="Search All Books"
            value={this.props.query} onChange={this.doSearch}
            onFocus={home} onBlur={this.clearSearch} className="searchBar"/>
          <ul className="navLinks">
            <li className={button("home")} onClick={home}>Home</li>
            <li className={button("myBooks")} onClick={myBooks}>My Books</li>
            <li className="logout" onClick={UserActions.SignOutSession}>Log Out</li>
          </ul>
        </div>
      </header>
    );
  }
});

module.exports = navBar;
