import './Dialog.css';
import ItemMessage from "./ItemMessage/ItemMessage";
import CreateMessageForm from "./CreateMessageForm/CreateMessageForm";


const Dialog = (props) => {
	let message_set = props.message_set
	let message_items = message_set.messages.map(
		message => <ItemMessage key={ message.id } message={ message }/>
	)
	return (
		<article className='dialog'>
			<div className='dialog__messages'>{ message_items }</div>
			<CreateMessageForm key={ message_set.id }
							   message_set={ message_set }/>
		</article>
	)
}

export default Dialog;