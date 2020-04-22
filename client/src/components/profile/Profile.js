import React, { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Form, Grid, Container, Divider, Header,  } from 'semantic-ui-react';
import { Row, Col, Button }  from 'react-materialize';
import Dropzone from 'react-dropzone';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends Component {
  state = { editing: false, formValues: { name: '', email: '', file: '' }, };
  
  componentDidMount() {
    const { auth: { user: { name, email, }, } } = this.props;
    this.setState({ formValues: { name, email, } });
  }

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0] }})
  }
  
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      }
    })
  }
  
  profileView = () => {
    const { auth: { user }, } = this.props;
    return (
      <Row>
        <Col l={4}>
          <img style={{width: '200px', borderRadius:'50%'}} src={user.image || defaultImage} />
        </Col>
        <Col l={8}>
          <Header as="h1">{user.name}</Header>
          <Header as="h1">{user.email}</Header>
        </Col>
      </Row>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, email, file }} = this.state;
    const { user, updateUser } = this.props.auth
    updateUser(user.id, { name, email, file })
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
        file: ''
      }
    })
  }
  
  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { name, email, file } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Col width={4}>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
            { ({ getRootProps, getInputProps, isDragActive }) => {
              return(
                <div  
                  { ...getRootProps() }
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop image here...</p>
                    :
                      <p>Try dropping it here or click to select</p>
                  }
                </div>
              )
            }}
          </Dropzone>
        </Col>
        <Col width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
        </Col>
      </Form>
    )
  }
  
  render() {
    const { editing, } = this.state;
    return (
      <Container>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView()}
            <Col>
              <Button onClick={this.toggleEdit} node="button" waves="light">{editing ? 'Cancel' : 'Edit'}</Button>
            </Col>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

export default ConnectedProfile;
