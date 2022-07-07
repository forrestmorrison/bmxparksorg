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

export const addUser = (newUser) => {
    return {
        type: 'ADD_USER',
        value: newUser
    }
}