import Action from "../actions/Actions";
import cookie from "eslint-plugin-react-native/lib/util/Components";

let initial_state = {
    'auth_token': null,
    'isAuth': false,
}

const authReducer = (state = initial_state, action) => {
    switch (action.type) {
        case Action.LOGIN: {
            let stateCopy = structuredClone(state)
            stateCopy.auth_token = action.auth_token
            stateCopy.isAuth = true
            return stateCopy
        }
        default: return state
    }
}

export default authReducer;