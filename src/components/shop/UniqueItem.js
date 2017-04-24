import React from 'react'

export const UniqueItem = (props) => {
  return (
    <li>
        <span>{props.name}</span>
        <label htmlFor="">Confirmed
            <input type="checkbox" defaultChecked={props.isComplete}/>
        </label>
        <button>Edit</button>
        <button>Remove</button>
    </li>
  )
}
