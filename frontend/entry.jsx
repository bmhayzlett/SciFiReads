var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var History = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Core = require('./components/core');
var ApiUtil = require('./util/api_util')
var BookStore = require('./stores/bookStore');
var BookIndex = require('./components/bookIndex');
var Book = require('./components/book');
var BookshelfButton = require('./components/bookshelfButton');

var EntryRouter = (
    <Route path="/" component={Core}>
      <IndexRoute component={BookIndex} />
      <Route path="/books/:id" component={Book}/>
    </Route>
);

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('content')) {
      ReactDOM.render(<Router history={History}>{EntryRouter}</Router>,
        document.getElementById('content'));}
});
