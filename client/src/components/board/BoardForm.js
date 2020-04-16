import React, { Component } from "react";
import { BoardConsumer } from "../../providers/BoardProvider";
import ColorForm from '../shared/ColorForm';

class BoardForm extends Component {
	state = { title: "", desc: "", colorForms: [] }

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

	addColorForm = () => {
		const { colorForms } = this.state
		this.setState({ colorForms: [ ...colorForms, <ColorForm /> ]})
	}

	render() {
		const { title, desc } = this.state
		return(
			<>
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
					class="btn-floating large #43A69A">
					<i class="material-icons">add</i>
				</button>
				<br/>
			</form>
			{ this.state.colorForms.map( form => form) }
			{ this.state.colorForms.length === 5 ? 
			 <h1>Color max!</h1> 
			:
			<button onClick={() => this.addColorForm()}>Add Color</button>
		}
				</>
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
