import { combineReducers } from 'redux';

const user = (state = null) => state


const parks = (state = [], action) => {
    switch (action.type) {
        case "ADD_PARK":
            console.log(state);
            return [...state, action.value]
        case "REMOVE_PARK":
            console.log(state);
            let stateCopy = [...state];
            stateCopy.splice(action.value, 1)
            return stateCopy;
    default:
        return state
    }
}

const comments = (state = [], action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            console.log(state);
            return [...state, action.value]
        case "REMOVE_COMMENT":
            console.log(state);
            let stateCopy = [...state];
            stateCopy.splice(action.value, 1)
            return stateCopy;
    default:
        return state
    }
}

export default combineReducers({ user, parks, comments })