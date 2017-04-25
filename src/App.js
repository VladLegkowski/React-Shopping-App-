import React, {Component} from 'react';
import {ShoppingForm, ItemsList} from './components/shop/'
import {addItem, generateId, findById, toggleItem, updateItem} from './lib/ItemsHelpers'

class App extends Component {
    state = {
        items: [
            {
                id: 1,
                name: 'Water',
                isComplete: false
            }, {
                id: 2,
                name: 'Salt',
                isComplete: false
            }, {
                id: 3,
                name: 'Bread',
                isComplete: false
            }
        ],
        currentItem: '',
        inputMessage: 'Add Items to Shopping Basket'
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
            isComplete: false
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
        return (
            <div className='wrapper'>
                <header>
                    <h1>Shopping App</h1>
                    <ShoppingForm handleInputChange={this.handleInputChange} currentItem={this.state.currentItem} handleSubmit={submitHandler} inputMessage={this.state.inputMessage}/>
                </header>
                <ItemsList handleToggle={this.handleToggle} items={this.state.items}/>
            </div>
        );
    }

}

export default App;
