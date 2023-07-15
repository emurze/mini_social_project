import Action from "../actions/Actions";

let initialState = {
    username: null,
    password: null,
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.SET_USERNAME: {
            let stateCopy = structuredClone(state)
            stateCopy.username = action.username
            return stateCopy
        }
        case Action.SET_PASSWORD: {
            let stateCopy = structuredClone(state)
            stateCopy.password = action.password
            return stateCopy
        }
        default: return state
    }
}

export default loginReducer;