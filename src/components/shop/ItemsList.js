import React from 'react';
import {UniqueItem} from './UniqueItem'
import {ToggleBasket} from './ToggleBasket'
import PropTypes from 'prop-types';

export const ItemsList = (props) => {
    return (
        <div className="main">
            <h2>Items To Buy</h2>
            <ToggleBasket toggleChange={props.toggleChange} isChecked={props.isChecked}/>
            <ul id="invitedList">
                {props.items.map(item => <UniqueItem handleToggle={props.handleToggle} key={item.id} {...item} handleRemove={props.handleRemove} countUp={props.countUp}/>)}
            </ul>
        </div>
    )
}

ItemsList.propTypes = {
    items: PropTypes.array.isRequired
};
