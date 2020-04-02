import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';

class Navbar extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout }, location } = this.props
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  render() {
    return(
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
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