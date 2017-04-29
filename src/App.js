import React, {Component} from 'react';
import {ShoppingForm, ItemsList} from './components/shop/'
import {
    addItem,
    generateId,
    findById,
    toggleItem,
    updateItem,
    removeItem,
    isComplete,
    increaseCount
} from './lib/ItemsHelpers'

class App extends Component {
    state = {
        items: [
            {
                id: 1,
                name: 'Water',
                isComplete: false,
                count: 0
            }, {
                id: 2,
                name: 'Salt',
                isComplete: false,
                count: 0
            }, {
                id: 3,
                name: 'Bread',
                isComplete: false,
                count: 0
            }
        ],
        isChecked: false,
        currentItem: '',
        inputMessage: 'Add Items to Shopping Basket'
    }
    countUp = (id) => {
        const item = findById(id, this.state.items)
        const increased = increaseCount(item)
        const updatedItems = updateItem(this.state.items, increased)
        this.setState({items: updatedItems})
    }
    toggleChange = (e) => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    handleRemove = (id, e) => {
        e.preventDefault()
        const updatedItems = removeItem(this.state.items, id)
        this.setState({items: updatedItems})
    }
    handleToggle = (id) => {
        const item = findById(id, this.state.items)
        const toggled = toggleItem(item)
        const updatedItems = updateItem(this.state.items, toggled)
        this.setState({items: updatedItems})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newId = generateId()
        const newItem = {
            id: newId,
            name: this.state.currentItem,
            isComplete: false,
            count: 0
        }
        const updatedItems = addItem(this.state.items, newItem)
        this.setState({items: updatedItems, currentItem: ''})
    }
    handleEmptySubmit = (e) => {
        e.preventDefault()
        this.setState({inputMessage: 'CANNOT SUBMIT EMPTY ITEM'})
    }
    handleInputChange = (e) => {
        this.setState({currentItem: e.target.value, inputMessage: 'Add Items to Shopping Basket'})
    }
    render() {
        const submitHandler = this.state.currentItem
            ? this.handleSubmit
            : this.handleEmptySubmit
        const listDisplay = this.state.isChecked
            ? this.state.items.filter(isComplete)
            : this.state.items
        return (
            <div className='wrapper'>
                <header>
                    <h1>Shopping App</h1>
                    <ShoppingForm handleInputChange={this.handleInputChange} currentItem={this.state.currentItem} handleSubmit={submitHandler} inputMessage={this.state.inputMessage}/>
                </header>
                <ItemsList handleToggle={this.handleToggle} toggleChange={this.toggleChange} handleRemove={this.handleRemove} countUp={this.countUp} items={listDisplay} isChecked={this.state.isChecked}/>
            </div>
        );
    }

}

export default App;
