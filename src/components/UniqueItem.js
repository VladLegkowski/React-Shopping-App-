import React from 'react'
import PropTypes from 'prop-types';

export const UniqueItem = (props) => {
  const partial = (fn, ...args) => fn.bind(null, ...args)
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove = partial(props.handleRemove, props.id)
  const countUp = partial(props.countUp, props.id)
  const listClass = props.isComplete
        ? 'responded'
        : ''
    return (
        <li className={listClass}>
            <span>{props.name}</span>
            <label htmlFor={props.item}>Confirmed
                <input id={props.item} type="checkbox" onChange={handleToggle} checked={props.isComplete}/>
            </label>
            <button onClick={handleRemove} disabled={props.isComplete}>Remove</button>
            <button onClick={countUp} disabled={props.isComplete}>{props.count}</button>
        </li>
    )
}

UniqueItem.propTypes = {
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    id: PropTypes.number.isRequired
};
