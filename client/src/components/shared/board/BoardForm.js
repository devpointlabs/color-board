import React, { Component } from "react";
import {form, Form} from 'materialize-css';

class  BoardForm extends Component {
    state = {}

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState ({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addList(this.state)
        this.setState({items: '', price: ''})
    }


render () {
    return(
        <Form onSubmit={this.handleSubmit}>
            <Form.Input
            label= 'board'
            required

            name='board'
            value={this.state.items}
            onChange={this.handleChange}
            />
            
        </Form>
    )

}

} 


export default BoardForm; 
