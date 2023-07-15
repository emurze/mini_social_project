import Action from "./actions/Actions";

export const AddMessage = (message_set_id) => ({
	type: Action.ADD_MESSAGE,
	message_set_id: message_set_id,
})
export const UpdateMessage = (message_set_id, new_message) => ({
	type: Action.UPDATE_MESSAGE,
	message_set_id: message_set_id,
	new_message: new_message,
})

export const AddPost = () => ({type: Action.ADD_POST})
export const UpdateNewPost = (post_title, post_content) => ({
	type: Action.UPDATE_POST,
	post_title: post_title,
	post_content: post_content,
})
export const setUserProfile = (profile) => ({
	type: Action.SET_USER_PROFILE,
	profile: profile,
})

export const SetUsers = users => ({
	type: Action.SET_USERS,
	users: users,
})
export const SetPageCount = page_count => ({
	type: Action.SET_PAGE_COUNT,
	page_count: page_count,
})
export const SetCurrentPage = current_page => ({
	type: Action.SET_CURRENT_PAGE,
	current_page: current_page,
})
export const UpdateCurrentPageOnArrows = page_action => ({
	type: Action.UPDATE_CURRENT_PAGE_ON_ARROWS,
	page_action: page_action,
})
export const HideLoadedUsers = () => ({type: Action.HIDE_LOADED_USERS})
export const ToggleIsFetching = isFetching => ({
	type: Action.TOGGLE_IS_FETCHING,
	isFetching: isFetching,
})

export const Login = auth_token => ({
	type: Action.LOGIN,
	auth_token: auth_token,
})

export const SetUsername = username => ({
	type: Action.SET_USERNAME,
	username: username
})
export const SetPassword = password => ({
	type: Action.SET_PASSWORD,
	password: password,
})