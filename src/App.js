import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateCurrent} from './reducers/shoppingapp';
import {ShoppingForm, ItemsList} from './components/'
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
import {loadItems, createItem, saveItem, deleteItem} from './lib/itemService'

class App extends Component {

    componentDidMount() {
        loadItems().then(items => this.setState({items}))
    }
    countUp = (id) => {
        const item = findById(id, this.props.items)
        const increased = increaseCount(item)
        const updatedItems = updateItem(this.props.items, increased)
        this.setState({items: updatedItems})
        saveItem(increased)
    }
    toggleChange = (e) => {
        this.setState({
            isChecked: !this.props.isChecked
        })
    }
    handleRemove = (id, e) => {
        e.preventDefault()
        const updatedItems = removeItem(this.props.items, id)
        this.setState({items: updatedItems})
        deleteItem(id)
    }
    handleToggle = (id) => {
        const item = findById(id, this.props.items)
        const toggled = toggleItem(item)
        const updatedItems = updateItem(this.props.items, toggled)
        this.setState({items: updatedItems})
        saveItem(toggled)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newId = generateId()
        const newItem = {
            id: newId,
            name: this.props.currentItem,
            isComplete: false,
            count: 0
        }
        const updatedItems = addItem(this.props.items, newItem)
        this.setState({items: updatedItems, currentItem: ''})
        createItem(newItem)
    }
    handleEmptySubmit = (e) => {
        e.preventDefault()
        this.setState({inputMessage: 'CANNOT SUBMIT EMPTY ITEM'})
    }
    render() {
        const submitHandler = this.props.currentItem
            ? this.handleSubmit
            : this.handleEmptySubmit
        const listDisplay = this.props.isChecked
            ? this.props.items.filter(isComplete)
            : this.props.items
        return (
            <div className='wrapper'>
                <header>
                    <h1>Shopping App</h1>
                    <ShoppingForm
                        // itemChangeHandler={this.props.updateCurrent}
                        // currentItem={this.props.currentItem}
                         handleSubmit={submitHandler}
                        // inputMessage={this.props.inputMessage}
                        />
                </header>
                {/*<ItemsList*/}
                    {/*handleToggle={this.handleToggle}*/}
                    {/*toggleChange={this.toggleChange}*/}
                    {/*handleRemove={this.handleRemove}*/}
                    {/*countUp={this.countUp}*/}
                    {/*items={listDisplay}*/}
                    {/*isChecked={this.props.isChecked}*/}
                {/*/>*/}
            </div>
        );
    }

}

export default App

