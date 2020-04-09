import React, { Component } from 'react';
import axios from 'axios';

const ColorContext = React.createContext();

export const ColorConsumer = ColorContext.Consumer;

class ColorProvider extends Component {
    state = {colors: []}

    fetchColors = (boardId) => {
        axios.get(`/api/boards/${boardId}/colors`)
        .then( res => {
            this.setState({ colors: res.data })
        })
        .catch( err => {
            console.log(err)
        })
    }

    addColor = (boardId, history) => {
        axios.post(`/api/boards/${boardId}/colors`)
        .then( res => {
            const { colors } = this.state;
            this.setState([...colors, res.data])
            history.push('/')
        })
        .catch( err => {
            console.log(err)
        })
    }

    updateColor = ( boardId, colorId, history ) => {
        axios.put(`/api/boards/${boardId}/colors/${colorId}`)
        .then( res => {
            const { colors } = this.state.colors.map( c => {
                if(c.colorId === colorId )
                    return res.data;
                return c;
            });
            this.setState({ colors });
            history.push('/')
        })
        .catch( err => {
            console.log(err)
        })
    }

    deleteColor = ( boardId, colorId, history ) => {
        axios.delete(`/api/boards/${boardId}/colors/${colorId}`)
        .then( res => {
            this.setState({ colors: this.state.colors.filter(c=>c.colorId!==colorId)})
            history.push('/')
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
