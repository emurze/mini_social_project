import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import loginReducer from "./reducers/loginReducer";

const reducer_set = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    loginPage: loginReducer,
    auth: authReducer,
})

let store = createStore(reducer_set)

window.store = store

export default store;