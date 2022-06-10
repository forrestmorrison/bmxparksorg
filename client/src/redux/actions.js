export const addPark = (newPark) => {
    return {
        type: 'ADD_PARK',
        value: newPark
    }
}

export const removePark = (index) => {
    return {
        type: 'REMOVE_PARK',
        value: index
    }
}