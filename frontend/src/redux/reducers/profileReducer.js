import Action from "../actions/Actions";

let initial_state = {
	'posts': [
		{'id': 1, 'title': 'Post 1', 'content': 'content 1'},
		{'id': 2, 'title': 'Post 2', 'content': 'content 2'},
		{'id': 3, 'title': 'Post 3', 'content': 'content 3'},
		{'id': 4, 'title': 'Post 4', 'content': 'content 4'},
		{'id': 5, 'title': 'Post 5', 'content': 'content 5'},
		{'id': 6, 'title': 'Post 6', 'content': 'content 6'},
		{'id': 7, 'title': 'Post 7', 'content': 'content 7'},
	],
	'friends_cards': [
		{'id': 1, 'name': 'Vlad'},
		{'id': 2, 'name': 'Victor'},
		{'id': 3, 'name': 'Artur'},
		{'id': 4, 'name': 'Valera'},
		{'id': 5, 'name': 'Lera'},
	],
	'new_post_title': "",
	"new_post_content": "",
	"profile": null,
}

const profileReducer = (state = initial_state, action) => {
	switch (action.type) {
		case Action.ADD_POST: {
			let stateCopy = structuredClone(state)
			let new_post = {
				'id': 5,
				'title': stateCopy.new_post_title,
				'content': stateCopy.new_post_content,
			}
			stateCopy.posts.push(new_post)
			stateCopy.new_post_title = ""
			stateCopy.new_post_content = ""
			return stateCopy
		}
		case Action.UPDATE_POST: {
			let stateCopy = structuredClone(state)
			stateCopy.new_post_title = action.post_title
			stateCopy.new_post_content = action.post_content
			return stateCopy
		}
		case Action.SET_USER_PROFILE: {
			let stateCopy = structuredClone(state)
			stateCopy.profile = action.profile
			console.log(stateCopy)
			return stateCopy
		}
		default: return state
	}
}

export default profileReducer;