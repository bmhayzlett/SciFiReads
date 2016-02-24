var React = require('react');
var ReactDOM = require('react-dom');
var Core = require('./components/core');
var ApiUtil = require('./util/api_util')
var BookStore = require('./stores/bookStore')

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Core/>, document.getElementById('content'));
})
