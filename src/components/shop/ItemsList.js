import React from 'react';
import {UniqueItem} from './UniqueItem'
import PropTypes from 'prop-types';

export const ItemsList = (props) => {
    return (
        <div className="main">
            <h2>Items To Buy</h2>
            <ul id="invitedList">
                {props.items.map(item => <UniqueItem handleToggle={props.handleToggle} key={item.id} {...item}/>)}
            </ul>
        </div>
    )
}

ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
};
