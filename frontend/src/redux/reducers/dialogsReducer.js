import Action from "../actions/Actions";

let initial_state = {
	'dialogs': [
		{'id': 1, 'name': 'Andrew'},
		{'id': 2, 'name': 'Dmitry'},
		{'id': 3, 'name': 'Sasha'},
		{'id': 4, 'name': 'Valera'},
		{'id': 5, 'name': 'Victor'},
		{'id': 6, 'name': 'Carl'},
		{'id': 7, 'name': 'Lera'},
		{'id': 8, 'name': 'Marat'},
		{'id': 9, 'name': 'Andrea'},
		{'id': 10, 'name': 'Vlad'},
	],
	'messages_sets': [
		{'id': 1, 'messages': [
				{   'id': 1,
					'name': 'Andrew',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`},
				{   'id': 2,
					'name': 'Me',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`}
			], 'new_message': "",},
		
		{'id': 2, 'messages': [
				{   'id': 2,
					'name': 'Me',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`}
			], 'new_message': "",},
		
		{'id': 3, 'messages': [
				{    'id': 1,
					'name': 'Sasha',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`},
			], 'new_message': "",},
		
		{'id': 4, 'messages': [
				{   'id': 1,
					'name': 'Valera',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`},
				{   'id': 2,
					'name': 'Me',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`}
			], 'new_message': "",},
		
		{'id': 5, 'messages': [
				{   'id': 2,
					'name': 'Me',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`}
			], 'new_message': "",},
		
		{'id': 6, 'messages': [
				{   'id': 1,
					'name': 'Carl',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`},
				{   'id': 2,
					'name': 'Me',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`}
			], 'new_message': "",},
		
		{'id': 7, 'messages': [
				{   'id': 2,
					'name': 'Me',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`}
			], 'new_message': "",},
		
		{'id': 8, 'messages': [
				{   'id': 1,
					'name': 'Marat',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`},
			], 'new_message': "",},
		
		{'id': 9, 'messages': [
				{   'id': 1,
					'name': 'Andrea',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`},
				{   'id': 2,
					'name': 'Me',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`}
			], 'new_message': "",},
		
		{'id': 10, 'messages': [
				{   'id': 1,
					'name': 'Vlad',
					'content': `Lorem ipsum dolor sit amet, consectetur adipisicing`},
			], 'new_message': "",},
	]
}

export const dialogsReducer = (state = initial_state, action) => {
	switch (action.type) {
		case Action.ADD_MESSAGE: {
			let stateCopy = structuredClone(state)
			let message_set_index = stateCopy.messages_sets.findIndex(
				message_set => message_set.id === action.message_set_id
			)
			let message_set = stateCopy.messages_sets[message_set_index]
			
			message_set.messages.push({
				'id': 3,
				'name': 'Me',
				'content': message_set.new_message,
			});
			message_set.new_message = ""
			return stateCopy
		}
		case Action.UPDATE_MESSAGE: {
			let stateCopy = structuredClone(state)
			let message_set_index = stateCopy.messages_sets.findIndex(
				message_set => message_set.id === action.message_set_id
			)
			let message_set = stateCopy.messages_sets[message_set_index]
			
			message_set.new_message = action.new_message
			return stateCopy
		}
		default: return state
	}
}

export default dialogsReducer;