import './Post.css';
import dialogs_profile from '../../../../../../images/dialogs_profile.svg'

const Post = (props) => {
	return (
		<article className='item_post'>
			<div className="item_post__image">
				<img src={ dialogs_profile } alt="dialogs_profile"/>
			</div>
			<div className="item_post__body">
				<div className="item_post__title">{ props.title }</div>
				<div className="item_post__content">
					{ props.content }
				</div>
			</div>
		</article>
	)
}

export default Post;