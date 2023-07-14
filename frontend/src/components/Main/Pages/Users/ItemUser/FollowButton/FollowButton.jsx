import './FollowButton.css';

const FollowButton = (props) => {
	let button_text = 'Follow',
		button_class_name = 'follow_button'
	
	if (props.unfollow) {
		button_text = 'Unfollow'
		button_class_name = 'unfollow_button'
	}
	return (
		<div className={ button_class_name }>
			<button>{ button_text }</button>
		</div>
	)
}

export default FollowButton;