import React, { Component } from "react";
import { BoardConsumer } from "../../providers/BoardProvider";
import { AutoInit } from "materialize-css";



class BoardForm extends Component {
	state = { title: "", desc: "" }

	componentDidMount() {
		if (this.props.board.id) {
			const { title, desc } = this.props.board
			this.setState({ title, desc })
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if(this.props.board.id) {
			this.props.updateBoard(this.props.board.id, this.state)
			this.props.toggleForm()
		} else {
			this.props.addBoard(this.state)
		}
		this.setState({ title: '', desc: '' })
	}

	render() {
		const { title, desc } = this.state
		return(
			<div style={{ 
				borderRadius: '10px',
        borderBottom: '1px solid lightgrey',
        boxShadow: '2px 3px 8px 1px lightgrey',
				width: '80%',
				height: 'auto',
				marginLeft: 'auto',
				marginRight: 'auto',
				padding: '25px'
			}}>
			<h3 style={{
        fontSize: '28px',
        fontFamily: 'Rubik',
				textAlign: 'center'
			}}>Customize your Board</h3>
			<div style={{
				width: '80%',
				marginLeft: 'auto',
				marginRight: 'auto',
				textAlign: 'center',
				padding: '20px',
				outline: '2px solid #D80179'
			  }}>
			<form
			onSubmit={this.handleSubmit}>
				<label>Title</label>
				<input 
					style={{
						width: '10rem', 
						marginTop: '-0.1rem', 
						marginRight: '1rem'}} 
						required
						name='title'
						value={title}
						onChange={this.handleChange}
						/>
				<label>Description</label>
				<input 
					style={{
						width: '15rem', 
						marginTop: '-0.1rem', 
						marginRight: '1rem'}} 
						required
						name='desc'
						value={desc}
						onChange={this.handleChange}
						/>
				<button 
					type='submit' 
					class="btn-floating large #D80179">
					<i class="material-icons #D80179" >add</i>
				</button>
				<br/>
			</form>
			</div>
			</div>
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
