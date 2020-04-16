import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

class Navbar extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout }, location } = this.props
    if (user) {
      return (
        <>
        <div>
          <span style={styles.logoName}>ColorBoard</span>
          <img style={styles.logo} src={require('./color-board-ico1.png')} />
            <NavLink 
              to='/my_boards'
              activeStyle={{
                borderBottom: '2px solid #D80179',
              }}
              style={styles.myBoards}
              name='my_boards'
              id='my_boards'
              active={this.props.location.pathname === '/my_boards'}>
              My Boards
              </NavLink>
              <form style={styles.form}>
                <input 
                  style={styles.search} 
                  type="text"
                  placeholder="Search for Boards" />
                  <img style={styles.searchIcon} src={require('./search.png')} />
              </form>
          <button style={styles.newBoard}>
            <Link to="/newBoard" style={{color: 'white'}}> 
              New Board
            </Link>
          </button>
          <img src={require('./user.png')} style={styles.userIcon}/>
            <Link onClick={() => handleLogout(this.props.history)}>
              <img src={require('./logout.png')} style={styles.logout} />
            </Link>
          </div>
        </>
      )
    } else {
      return(
        <div>
          <Link to='/login'>
            <button
              id='login'
              name='login'
              style={{display: 'none'}}
              active={location.pathname === '/login'}>
              Login
            </button>
          </Link>
          <Link to='/register'>
            <button
              id='register'
              name='register'
              style={{display: 'none'}}
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
      <div>
        <NavLink 
          to='/explore' 
          activeStyle={{
            borderBottom: '2px solid #D80179',
          }}
          style={styles.explore}
          name='explore'
          id='explore'
          active={this.props.location.pathname === '/explore'}>
          Explore
        </NavLink>
        { this.rightNavItems() }
      </div>
    )
  }
}

const styles = {
  logoName: {
    position: 'absolute',
    left: '7rem',
    top: '3.2rem',
    fontWeight: 'bold',
    fontSize: '25px',
    fontFamily: 'Rubik',
  },
  logo: {
    height: 'auto',
    width: '4.8rem',
    position: 'absolute',
    top: '3.3rem',
    left: '4rem',
    transform: 'translate(-50%, -50%)'
  },
  newBoard: {
    position: 'absolute',
    right: '10rem',
    top: '2.7rem',
    border: 'none',
    borderRadius: '3px',
    background: '#D80179',
    padding: '8px 13px 8px 13px',
    fontWeight: 'bold',
    fontSize: '16px',
    fontFamily: 'Rubik',
  },
  myBoards: {
    position: 'absolute',
    right: '24rem',
    top: '3rem',
    border: 'none',
    fontSize: '16px',
    fontFamily: 'Rubik',
    color: 'black',
    background: 'none',
  },
  form: {
    width: '11rem',
    fontFamily: 'Rubik',
    position: 'absolute',
    left: '20rem',
    top: '2.9rem',
  },
  search: {
    borderRadius: '25px',
    borderBottom: 'none',
    border: '0.5px solid lightgrey',
    height: '2rem',
    fontSize: '16px',
    fontFamily: 'Rubik',
    padding: '0.3rem 5rem 0.3rem 3rem'
  },
  searchIcon: {
    position: 'absolute',
    left: '0.7rem',
    top: '0.5rem',
    width: '1.8rem'
  },
  userIcon: {
    height: 'auto',
    width: '2.8rem',
    position: 'absolute',
    right: '4.2rem',
    top: '3.6rem',
    transform: 'translate(-50%, -50%)'
  },
  explore: {
    position: 'absolute',
    right: '19rem',
    top: '3rem',
    border: 'none',
    fontSize: '17px',
    fontFamily: 'Rubik',
    background: 'none',
    color: 'black'
  },
  logout: {
    height: 'auto',
    width: '1.9rem',
    position: 'absolute',
    right: '1rem',
    top: '3.6rem',
    transform: 'translate(-50%, -50%)'
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
