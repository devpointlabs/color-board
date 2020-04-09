import React, { Component } from "react";
import { BoardConsumer } from "../../providers/BoardProvider";

class BoardForm extends Component {
    state = { title: "", desc: "" }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addBoard(this.state)
        this.setState({ title: '', desc: '' })
    }


    render() {
        const { title, desc } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input 
                    required
                    name='title'
                    value={title}
                    onChange={this.handleChange}
                />
                <label>Description</label>
                <input 
                    required
                    name='desc'
                    value={desc}
                    onChange={this.handleChange}
                />
                <button>
                    Submit
                </button>
            </form>
        )
    }
}

const ConnectedBoardForm = (props) => (
    <BoardConsumer>
        { 
            value => 
            <BoardForm {...props} {...value} />
        }
    </BoardConsumer>
    
)

export default ConnectedBoardForm; 
