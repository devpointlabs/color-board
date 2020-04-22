import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Register from './components/auth/Register'
import Login from './components/auth/Login';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import About from './components/about /About'
import Profile from './components/profile/Profile';
import ConnectedMyBoards from './components/shared/MyBoards';
import Explore from './components/shared/Explore';
import BoardShow from './components/shared/BoardShow';
import BoardForm from './components/board/BoardForm';
import ConnectedColorForm from './components/shared/ColorForm';
import ColorShow from './components/color/ColorShow';

const App = () => (
  <>
    <Navbar/>
    <FetchUser>
    <div style={{
         marginTop: '150px',
        }}>
      <Switch>
        <Route exact path='/' component={Explore} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />
        <Route exact path='/explore' component={Explore}/>
        <Route exact path='/boards/:id' component={BoardShow}/>
        <ProtectedRoute exact path='/profile' component={Profile} />
        <Route exact path='/boards/:board_id/colors/:id' component={ColorShow}/> 
        <Route exact path='/colorForm' component={ConnectedColorForm}/>
        <Route exact path='/boards/:id/color' component={ColorShow}/>
        <ProtectedRoute exact path='/my_boards' component={ConnectedMyBoards}/>
        <ProtectedRoute exact path='/newBoard' component={BoardForm}/> 
        <Route component={NoMatch} />
      </Switch>
      </div>
    </FetchUser>
  </>
)

export default App;
