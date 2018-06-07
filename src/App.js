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
                <Route exact path="/login" component={Login} />
                <RouteNest  path={'/main'} component={Main}>
                    <RouteNest  exact path={'/main/home'} component={Home}/>
                </RouteNest>
            </Switch>
        </Router>
      );
    }
  }


render(<Routes />, document.getElementById("root"));


