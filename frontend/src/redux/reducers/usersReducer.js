import Action from "../Actions";
import {UsersPaginationActions} from "../UsersPaginationActions";

let initialState = {
	'users': [],
	'page_size': 0,
	'page_count': 0,
	'current_page': 1,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case Action.SET_USERS: {
			let stateCopy = structuredClone(state)
			stateCopy.users = action.users
			return stateCopy
		}
		case Action.SET_PAGE_SIZE: {
			let stateCopy = structuredClone(state)
			stateCopy.page_size = action.page_size
			return stateCopy
		}
		case Action.SET_PAGE_COUNT: {
			let stateCopy = structuredClone(state)
			stateCopy.page_count = action.page_count
			return stateCopy
		}
		case Action.SET_CURRENT_PAGE: {
			let stateCopy = structuredClone(state)
			stateCopy.current_page = action.current_page
			return stateCopy
		}
		case Action.UPDATE_CURRENT_PAGE_ON_ARROWS: {
			let stateCopy = structuredClone(state)
			const pages = stateCopy.page_count / stateCopy.page_size
			const max_constraint = stateCopy.current_page < pages
			const min_constraint = stateCopy.current_page > 1

			if (action.page_action === UsersPaginationActions.Next
				&& max_constraint){
				stateCopy.current_page++}
			else if (action.page_action === UsersPaginationActions.Previous
				     && min_constraint) {
				stateCopy.current_page--
			}
			return stateCopy
		}
		default: return state
	}
}

export default usersReducer;