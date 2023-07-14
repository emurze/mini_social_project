import './ItemMessage.css';
import dialogs_profile from '../../../../../../images/dialogs_profile.svg'

const ItemMessage = (props) => {
	return (
		<article className="item_message">
			<div className="item_message__image">
				<img src={ dialogs_profile } alt="dialogs_profile"/>
			</div>
			<div className="item_message__body">
				<div className="item_message__name">{ props.message.name }</div>
				<div className="item_message__content">
					{ props.message.content }
				</div>
			</div>
		</article>
	)
}

export default ItemMessage;