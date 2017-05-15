var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// load foundation-sites
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// load app css
require('style!css!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      
    </Route>
  </Router>,
  document.getElementById('app')
);
