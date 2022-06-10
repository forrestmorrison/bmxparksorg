import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
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

export default combineReducers({ user, parks })