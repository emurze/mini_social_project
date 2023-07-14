import Action from "./Actions";

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

export const SetUsers = users => ({
	type: Action.SET_USERS,
	users: users,
})
export const SetPageSize = page_size => ({
	type: Action.SET_PAGE_SIZE,
	page_size: page_size,
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