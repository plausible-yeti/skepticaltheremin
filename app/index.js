'use strict';

var React = require('react');
var render = require('react-dom').render;
var Provider = require('react-redux').Provider;
// var Main = require('./components').Main;
var App = require('./containers/App');
var configureStore = require('./store/configureStore');

var store = configureStore();
store.subscribe(() => {
  console.dir(store.getState());
});

window.store = store;
store.getState();

render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById('app')
);
