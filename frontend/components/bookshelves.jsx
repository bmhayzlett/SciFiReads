var React = require('react');
var BookshelfIndex = require('./bookshelfIndex.jsx');
var BookshelfSidebar = require('./bookshelfSidebar.jsx');

var GoogleApiUtil = require('../util/google_api_util');
var UserActions = require('../actions/user_actions');

var Bookshelves = React.createClass({

  render: function () {

    return (
      <div>
        TESTTESTTESTTEST
        <BookshelfIndex/>
        <BookshelfSidebar/>
      </div>
    )
  }

});

module.exports = Bookshelves;
