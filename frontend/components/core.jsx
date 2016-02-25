var React = require('react');
var BookIndex = require('./bookIndex');
var NavBar = require('./navBar');

var Core = React.createClass ({

  render: function () {
    return <div> HELLO FROM CORE
      <NavBar/>
      {this.props.children}
    </div>
  }

});

module.exports = Core;
