var React = require('react');
var BookIndex = require('./bookIndex');
var NavBar = require('./navBar');
var ShelfStore = require('../stores/shelfStore');

var Core = React.createClass ({

  contextTypes: {
      router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.shelfIndexToken = ShelfStore.addListener(this._onChange);
    UserActions.fetchBookshelfBooks();
    UserActions.fetchGoogleBooks("1984");
  },

  _onChange: function () {
  },

  componentWillUnmount: function () {
    this.shelfIndexToken.remove();
  },

  render: function () {
    return (
      <div>
        <NavBar context={this.context}/>
        {this.props.children}
      </div>
    )
  }

});

module.exports = Core;
