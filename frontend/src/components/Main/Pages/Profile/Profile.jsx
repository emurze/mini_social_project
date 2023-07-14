import './Profile.css';
import Image from "./Image/Image";
import ProfileCard from "./ProfileCard/ProfileCard";
import Posts from "./Posts/Posts";
import SideBar from "./SideBar/SideBar";
import PageTitle from "../../../../shared/PageTitle/PageTitle";

const Profile = () => {
	return (
		<div className='profile'>
			<PageTitle title='Profile'/>
			<Image/>
			<div className="profile__body">
				<ProfileCard/>
				<Posts/>
				<SideBar/>
			</div>
		</div>
	)
}

export default Profile;