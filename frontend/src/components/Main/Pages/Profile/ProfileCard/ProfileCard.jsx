import './ProfileCard.css';
import Preloader from "../../../../../shared/Preloader/Preloader";

const ProfileCard = (props) => {
	return (
		<section className="profile_card">
			<div className="profile_card__image">
				<img src="https://w.forfun.com/fetch/b4/b40820104d4c59ecccf3f4b5420f7721.jpeg" alt=""/>
			</div>
			<div className="profile_card__body">
				<div className="profile_card__name">
					{ props.profile.username }
				</div>
				<div className="profile_card__content">
					{ props.profile.description }
				</div>
			</div>
		</section>
	)
}

export default ProfileCard;