import React from 'react'

export const ToggleBasket = (props) => {
    return (
        <div>
            <label>Hide items in the basket</label>
            <input type="checkbox" onChange={() => props.toggleChange()} checked={props.isChecked}/>
        </div>
    )
}
