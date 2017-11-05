const initState = {
    items: [
        {
            "id": 1,
            "name": "Water",
            "isComplete": false,
            "count": 0
        },
        {
            "id": 2,
            "name": "Salt",
            "isComplete": false,
            "count": 0
        },
        {
            "id": 3,
            "name": "Bread",
            "isComplete": false,
            "count": 4
        }
    ],
    isChecked: false,
    currentItem: '',
    inputMessage: 'Add Items to Shopping Baskets'
}

const ITEM_ADD = 'ITEM_ADD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})

export default (state = initState, action) => {
    switch (action.type) {
        case ITEM_ADD:
            return {...state, items: state.items.concat(action.payload)}
        case CURRENT_UPDATE:
            return {...state, currentItem: action.payload}
        default:
            return state
    }
}