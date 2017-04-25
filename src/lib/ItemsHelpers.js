export const addItem = (list, item) => list.concat(item)

export const generateId = () => Math.floor(Math.random() * 100)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleItem = (item) => ({
    ...item,
    isComplete: !item.isComplete
})

export const updateItem = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id)
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex + 1)
    ]
}