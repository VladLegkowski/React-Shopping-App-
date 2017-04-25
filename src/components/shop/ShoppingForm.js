import React from 'react'
import PropTypes from 'prop-types';

export const ShoppingForm = (props) => (
    <form id="registrar" onSubmit={props.handleSubmit}>
        <input type="text" placeholder={props.inputMessage || 'Add Items to Shopping Basket'} onChange={props.handleInputChange} value={props.currentItem}/>
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>
)

ShoppingForm.propTypes = {
    currentItem: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    inputMessage: PropTypes.string
};
