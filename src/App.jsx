import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import Register from './containers/register/Register'
import Login from './containers/login/Login'
import Home from './containers/home/Home'
import store from './redux/store'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
            <Switch>
              <Route path='/register' component={Register}></Route>
              <Route path='/login' component={Login}></Route>
              <Route component={Home}></Route>
            </Switch>
        </HashRouter>
      </Provider>
    )
  }
}
export default App