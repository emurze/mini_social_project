import './FriendCard.css';
import friend_image from '../../../../../../images/dialogs_profile.svg'

const FriendCard = (props) => {
	return (
		<article className='friend_card'>
			<div className="friend_card__image">
				<img src={ friend_image } alt="friend"/>
			</div>
			<div className="friend_card__title">
				{ props.username }
			</div>
		</article>
	)
}

export default FriendCard;