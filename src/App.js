import React, {Component} from 'react';
import {ShoppingForm, ItemsList} from './components/shop/'

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Water',
                    isComplete: true
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
            currentItem: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(e) {
        this.setState({currentItem: e.target.value})
    }
    render() {
        return (
            <div className='wrapper'>
                <header>
                    <h1>Shopping App</h1>
                    <ShoppingForm handleInputChange={this.handleInputChange} currentItem={this.state.currentItem}/>
                </header>
                <ItemsList items={this.state.items}/>
            </div>
        );
    }

}

export default App;
