import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateCurrent} from '../reducers/shoppingapp';


export const ShoppingForm = (props) => {
    const { currentItem, updateCurrent, inputMessage } = props
    const handleInputChange = (e) => {
        const val = e.target.value
        updateCurrent(val)
    };
    return (
        <form id="registrar" onSubmit={props.handleSubmit}>
            <input type="text"
                   placeholder={inputMessage || 'Add Items to Shopping Basket'}
                   onChange={handleInputChange}
                   value={currentItem}/>
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
    )
};

export default connect(
    (state) => ({
        currentItem: state.currentItem,
        inputMessage: state.inputMessage
    }),
    {updateCurrent}
)(ShoppingForm)

ShoppingForm.propTypes = {
    currentItem: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    inputMessage: PropTypes.string
};
