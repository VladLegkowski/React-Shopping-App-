export const addItem = (list, item) => list.concat(item)

export const generateId = () => Math.floor(Math.random() * 100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleItem = (item) => ({
    ...item,
    isComplete: !item.isComplete
})

export const increaseCount = (item) => ({
    ...item,
    count: item.count + 1
})

export const updateItem = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id)
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex + 1)
    ]
}

export const removeItem = (list, id) => {
    const removeIndex = list.findIndex(item => item.id === id)
    return [
        ...list.slice(0, removeIndex),
        ...list.slice(removeIndex + 1)
    ]
}

export const isComplete = (item) => !item.isComplete
