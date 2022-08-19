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

export const addComment = (newComment) => {
    return {
        type: 'ADD_COMMENT',
        value: newComment
    }
}

export const removeComment = (index) => {
    return {
        type: 'REMOVE_COMMENT',
        value: index
    }
}


export const map = (map) => {
    return {
        type: 'MAP',
        value: map
    }
}

export const fetchParks = (dispatch) => {
    fetch("")
        .then(res => res.json())
        .then(response => {
            const action = {
                type: 'FETCH_PARKS',
                value: response.Results
            }
            dispatch(action)
        })
}