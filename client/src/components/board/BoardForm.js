import React, { Component } from "react";
import { BoardConsumer } from "../../providers/BoardProvider";

class BoardForm extends Component {
	state = { title: "", desc: "" }

	componentDidMount() {
		if (this.props.board) {
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
			<form onSubmit={this.handleSubmit}>
				<label>Title</label>
				<input 
					style={{
							width: '4rem', 
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
							width: '4rem', 
							marginTop: '-0.1rem', 
							marginRight: '1rem'}} 
					required
					name='desc'
					value={desc}
					onChange={this.handleChange}
				/>
				<button 
					type='submit' 
					class="btn-floating large blue">
					<i class="material-icons">add</i>
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