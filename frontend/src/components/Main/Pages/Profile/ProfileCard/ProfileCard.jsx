import './ProfileCard.css';

const ProfileCard = () => {
	return (
		<section className="profile_card">
			<div className="profile_card__image">
				<img src="https://w.forfun.com/fetch/b4/b40820104d4c59ecccf3f4b5420f7721.jpeg" alt=""/>
			</div>
			<div className="profile_card__body">
				<div className="profile_card__name">Vlad Z.</div>
				<div className="profile_card__content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ad amet autem, dolore enim esse exercitationem explicabo
					officiis totam voluptas?
				</div>
			</div>
		</section>
	)
}

export default ProfileCard;