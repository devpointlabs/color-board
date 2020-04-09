import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

class Navbar extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout }, location } = this.props
    if (user) {
      return (
        <>
        <div>
          <button>
            <Link to="/newBoard"> 
            New Board
            </Link>
          </button>
          <span>
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          </span>
          </div>
        </>
      )
    } else {
      return(
        <div style={{
          marginTop: '-33px', 
          marginLeft: '20rem',
          textAlign: 'center'
        }}>
          <Link to='/login'>
            <button
              id='login'
              name='login'
              className='btn-small'
              style={{marginRight: '0.8rem'}}
              active={location.pathname === '/login'}>
              Login
            </button>
          </Link>
          <Link to='/register'>
            <button
              id='register'
              name='register'
              className='btn-small'
              active={location.pathname === '/register'}>
              Register
            </button>
          </Link>
        </div>
      )
    }
  }
  
  render() {
    
    return(
      <div style={{
        marginTop: '1.5rem',
        marginLeft: '-14rem',
        marginBottom: '1rem', 
        textAlign: 'center'
      }}>
        <Link to='/'>
          <button
            name='home'
            id='home'
            className='btn-small'
            active={this.props.location.pathname === '/'}>
            Home
            </button>
        </Link>
        { this.rightNavItems() }
      </div>
    )
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value =>
      <Navbar {...props } auth={value} />
    }
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar);