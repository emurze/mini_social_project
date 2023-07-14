import './CreateMessageForm.css';
import React from 'react';

import {AddMessage, UpdateMessage} from "../../../../../../redux/ActionCreators";
import {useDispatch} from "react-redux";

const CreateMessageForm = (props) => {
	let dispatch = useDispatch()
	
	const add_message = () => {
		let action = AddMessage(props.message_set.id)
		dispatch(action)
	}
	const update_message = (elem) => {
		let new_message = elem.target.value
		let action = UpdateMessage(props.message_set.id, new_message)
		dispatch(action)
	}
	
	return (
		<div className="create_post">
			<p><textarea onChange={ update_message }
						 value={ props.message_set.new_message }>
			</textarea></p>
			
			<p><button onClick={ add_message }>Create message</button></p>
		</div>
	)
}

export default CreateMessageForm;