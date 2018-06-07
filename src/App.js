import React, {Component} from 'react';
//import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {render} from 'react-dom';

import Home from './containers/home/Home';
import history from './history';

function RouteNest(props){ 
  return (
    <Route exact={props.exact} path={props.path} render={ p => <props.component {...p} children={props.children}/> } />
  )
}

export default class Routes extends Component {
    render() {
      return (
        <Router history={history}>
            <Switch>
                <Route exact path="/home" component={Home} />
            </Switch>
        </Router>
      );
    }
  }


//render(<Routes />, document.getElementById("root"));

var app = {
  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
      //this.receivedEvent('deviceready');
      render(<Routes />, document.getElementById("root"));
      history.push("/home");
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
     
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
  }
};

app.initialize();

