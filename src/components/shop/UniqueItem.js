import React from 'react'
import PropTypes from 'prop-types';

export const UniqueItem = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <label>Confirmed
                <input type="checkbox" onChange={() => props.handleToggle(props.id)} checked = {props.isComplete}/>
            </label>
            <button>Edit</button>
            <button>Remove</button>
        </li>
    )
}

UniqueItem.propTypes = {
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    id: PropTypes.number.isRequired
};
