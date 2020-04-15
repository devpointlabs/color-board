import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import icon from './color-board-ico.png'

class Login extends Component {
  state = { email: '', password: '' }
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  render() {
    const { email, password, } = this.state;
    
    const styles = {
      container: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      
      img: {
        height: 'auto',
        width: '23%',
        position: 'absolute',
        top: '-22%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      
      header: {
        textAlign: 'center',
        fontSize: '20px'
      },
      
      form: {
        width: '24rem',
      },
      
      input: {
        borderRadius: '5px',
        borderBottom: '1px solid lightgrey',
        boxShadow: '2px 3px 8px 1px lightgrey',
        height: '3.5rem',
        fontSize: '23px',
        paddingLeft: '10px'
      },
      
      label: {
        fontSize: '12px',
        margin: '0 0 0.3rem 0'
      },
      
      btn: {
        marginTop: '1.2rem',
        width: '24rem',
        height: '3.5rem',
        borderRadius: '5px',
        background: '#D80179',
        marginLeft: '5px'
      },
      
      fp: {
        fontSize: '12px',
        color: '#D80179',
        position: 'absolute',
        top: '108%',
        left: '16%',
        transform: 'translate(-50%, -50%)',
      },
      
      ca: {
        fontSize: '12px',
        position: 'absolute',
        top: '108%',
        left: '90%',
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap'
      }
    }

    
    return (
      <div>
      <div style={styles.container}>
        <img src={icon} style={styles.img}/>
        <header style={styles.header}>Login to <b>ColorBoard</b></header>
          <div style={{marginTop: '2rem'}}>
            <form 
              onSubmit={this.handleSubmit}
              style={styles.form}
            >
              <p style={styles.label}>Email</p>
              <input
                style={styles.input}
                label="Email"
                required
                autoFocus
                name='email'
                value={email}
                onChange={this.handleChange}
              />
              <p style={styles.label}>Password</p>
              <input
                style={styles.input}
                label="Password"
                required
                name='password'
                value={password}
                type='password'
                onChange={this.handleChange}
              />
              <div style={{textAlign: 'center'}}>
                <button style={styles.btn} type='submit'>
                  <span style={{color: 'white'}}>Login</span>
                </button>
              </div>
            </form>
            <span style={styles.fp}>Forgot password?</span> 
            <span style={styles.ca}>
              <Link to='/Register' style={{color: '#D80179',}}>Create account</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value =>
      <Login {...props} auth={value} />
    }
  </AuthConsumer>
)

export default ConnectedLogin;