import './ItemUser.css';
import user_image from '../../../../../images/dialogs_profile.svg'
import FollowButton from "./FollowButton/FollowButton";
import {NavLink} from "react-router-dom";

const ItemUser = (props) => {
	return (
		<article className='item_user'>
			<div className="item_user__left">
				<NavLink to={`/profile/${ props.id }`}>
					<div className="item_user__image">
						<img src={ user_image } alt="user_image"/>
					</div>
				</NavLink>
				<div className="item_user__button">
					<FollowButton unfollow={ props.id % 2 !== 0 }/>
				</div>
			</div>
			<div className="item_user__right">
				<div className="item_user__name">{ props.name }</div>
				<div className="item_user__description">
					{ props.description }
				</div>
				<div className="item_user__country">{ props.country }</div>
				<div className="item_user__city">{ props.city }</div>
			</div>
		</article>
	)
}

export default ItemUser;