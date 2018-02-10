import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import Main from './components/main';
import Signup from './components/signup';
import Login from './components/login';
import User from './components/user';
import history from '../src/history'
import firebase from 'firebase'
import Notfound from './components/notFound';




function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  function PrivateRoute2 ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  
  function PublicRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to='/main' />}
      />
    )
  }

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false
        }

    }
    componentDidMount() {
        let that = this
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                that.setState({
                    authed: true
                })
            } else {
                that.setState({
                    authed: false
                })
            }
        });
    }



    render() {
        return (
            <Router  history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute authed={this.state.authed} path="/main" component={Main} />
                        <PrivateRoute2 authed={this.state.authed} path='/user' component={User} />
                        <PublicRoute authed={this.state.authed} path="/login" component={Login} />
                        <PublicRoute authed={this.state.authed} path="/Signup" component={Signup} />
                        <Route path="*" component={Notfound}/>

                    </Switch>
            </Router>
        )
    }


}



export default Routers;

