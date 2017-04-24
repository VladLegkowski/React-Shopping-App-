import React from 'react';
import {UniqueItem} from './UniqueItem'
export const ItemsList = (props) => {
  return (
    <div className="main">
        <h2>Items To Buy</h2>
        <ul id="invitedList">
            {props.items.map(item => <UniqueItem key={item.id} {...item}/>)}
        </ul>
    </div>
  )
}
