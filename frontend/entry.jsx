var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var History = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Core = require('./components/core');
var BookIndex = require('./components/bookIndex');
var Book = require('./components/book');
var Bookshelves = require('./components/bookshelves');

var EntryRouter = (
    <Route path="/" component={Core}>
      <IndexRoute component={BookIndex} />
      <Route path="/books/:id" component={Book}/>
      <Route path="/bookshelves" component={Bookshelves}/>

    </Route>
);

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('content')) {
      ReactDOM.render(<Router history={History}>{EntryRouter}</Router>,
        document.getElementById('content'));}
});
