import React, { Component } from 'react';
import axios from 'axios';

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

    addColor = (boardId, color) => {
        axios.post(`/api/boards/${boardId}/colors`, color )
        .then( res => {
            const { colors } = this.state;
            this.setState([...colors, res.data])
            window.location.href = `/boards/${boardId}`
        })
        .catch( err => {
            console.log(err)
        })
    }

    updateColor = ( boardId, colorId, color) => {
        axios.put(`/api/boards/${boardId}/colors/${colorId}`, color )
        .then( res => {
            const { colors } = this.state.colors.map( c => {
                if(c.id === colorId )
                    return res.data;
                return c;
            });
            this.setState({ colors });
            window.location.href = `/boards/${boardId}`
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
            <ColorContext.Provider value={{
                ...this.state,
                fetchColors: this.fetchColors,
                addColor: this.addColor,
                updateColor: this.updateColor,
                deleteColor: this.deleteColor
                }}>
                { this.props.children }
            </ColorContext.Provider>
        )
    }
}

export default ColorProvider;
