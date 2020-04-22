import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

const ColorContext = React.createContext();
export const ColorConsumer = ColorContext.Consumer;

class ColorProvider extends Component {
    state = { colors: [] }

    fetchColors = (boardId) => {
        axios.get(`/api/boards/${boardId}/colors`)
        .then( res => {
            this.setState({ colors: res.data })
        })
        .catch( err => {
            console.log(err)
        })
    }

    addColor = (boardId, color, history) => {
        axios.post(`/api/boards/${boardId}/colors`, color )
        .then( res => {
            const { colors } = this.state;
            this.setState([...colors, res.data]);
            history.go()
        })
        .catch( err => {
            console.log(err)
        })
    }

    updateColor = ( boardId, colorId, color, history) => {
        axios.put(`/api/boards/${boardId}/colors/${colorId}`, color )
        .then( res => {
            const { colors } = this.state.colors.map( c => {
                if(c.id === colorId )
                    return res.data;
                return c;
            });
            this.setState({ colors });
            history.push(`/boards/${boardId}`)
        })
        .catch( err => {
            console.log(err)
        })
    }

    deleteColor = ( boardId, colorId ) => {
        axios.delete(`/api/boards/${boardId}/colors/${colorId}`)
        .then( res => {
            this.setState({ colors: this.state.colors.filter(c => c.id !== colorId)})
            window.location.href = `/boards/${boardId}`
        })
        .catch( err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Router>
                <ColorContext.Provider value={{
                ...this.state,
                fetchColors: this.fetchColors,
                addColor: this.addColor,
                updateColor: this.updateColor,
                deleteColor: this.deleteColor
            }}>
                { this.props.children }
                </ColorContext.Provider>
            </Router>
        )
    }
}

export default ColorProvider;
