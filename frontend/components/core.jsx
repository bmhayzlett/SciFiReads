var React = require('react');
var BookIndex = require('./bookIndex');
var NavBar = require('./navBar');

var Core = React.createClass ({

  render: function () {
    return (
      <div>
        <NavBar history={this.props.history}/>
        {this.props.children}
      </div>
    )
  }

});

module.exports = Core;
