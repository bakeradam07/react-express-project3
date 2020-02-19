import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Users from './pages/Users';
import Movies from './pages/Movies';
import Profile from './pages/Profile';
import Nav from "./components/Nav";
import Detail from "./pages/Detail";
import MovieDetail from "./pages/MovieDetail";
import Drinks from './pages/Drinks';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route path='/users' component={Users}/> */}
          <Route exact path='/movies' component={Movies}/>
          <Route exact path='/drinks' component={Drinks}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/drinks/:id' component={Detail} />
          <Route path='/movies/:id' component={MovieDetail} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;