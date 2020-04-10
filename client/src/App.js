import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/MyBoards';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Register from './components/auth/Register'
import Login from './components/auth/Login';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import MyBoards from './components/shared/MyBoards';
import Explore from './components/shared/Explore';
import BoardShow from './components/shared/BoardShow';
import BoardForm from './components/board/BoardForm';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path='/' component={Explore} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/explore' component={Explore}/>
        <Route exact path='/boards/:id' component={BoardShow}/>
        <ProtectedRoute exact path='/my_boards' component={MyBoards}/>
        <ProtectedRoute exact path='/newBoard' component={BoardForm}/> 
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)

export default App;
