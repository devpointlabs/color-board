import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import icon from './color-board-ico.png'

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '', name: '' };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, name } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;
    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, name }, history);
    else
      alert('Passwords Do Not Match!')
  }
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  render() {
    const { email, password, passwordConfirmation, name } = this.state;
    
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
        top: '-18%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      
      header: {
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'Rubik',
      },
      
      form: {
        width: '24rem',
        fontFamily: 'Rubik',
      },
      
      input: {
        borderRadius: '5px',
        borderBottom: '1px solid lightgrey',
        boxShadow: '2px 3px 8px 1px lightgrey',
        height: '3.5rem',
        fontSize: '23px',
        fontFamily: 'Rubik',
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
      
      ca: {
        fontSize: '12px',
        fontFamily: 'Rubik',
        position: 'absolute',
        top: '108%',
        left: '53%',
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap'
      }
    }
  

    
    return (
      <div>
      <div style={styles.container}>
        <img src={icon} style={styles.img}/>
        <header style={styles.header}>Register to <b>ColorBoard</b></header>
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
              <p style={styles.label}>Name</p>
              <input
                style={styles.input}
                label="Name"
                required
                autoFocus
                name='name'
                value={name}
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
              <p style={styles.label}>Password confirmation</p>
              <input
                style={styles.input}
                label="Password Confirmation"
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                type='password'
                onChange={this.handleChange}
              />
              <div style={{textAlign: 'center'}}>
                <button style={styles.btn} type='submit'>
                  <span style={{color: 'white', fontFamily: 'Rubik',}}>Submit</span>
                </button>
              </div>
            </form>
            <span style={styles.ca}>
              <Link to='/Login' style={{color: '#D80179',}}>Already have an account?</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => 
      <Register { ...props } auth={value} />
    }
  </AuthConsumer>
)
export default ConnectedRegister;