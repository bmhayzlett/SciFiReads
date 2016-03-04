var React = require('react');
var BookIndex = require('./bookIndex');
var NavBar = require('./navBar');

var Core = React.createClass ({

  contextTypes: {
      router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    
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
