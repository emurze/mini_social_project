import './Profile.css';
import Image from "./Image/Image";
import ProfileCard from "./ProfileCard/ProfileCard";
import Posts from "./Posts/Posts";
import SideBar from "./SideBar/SideBar";
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfile} from "../../../../redux/ActionCreators";
import Preloader from "../../../../shared/Preloader/Preloader";
import {useParams} from "react-router-dom";

const Profile = () => {
	let dispatch = useDispatch()
	let { profile } = useSelector(state => state.profilePage)
	let params = useParams()

	useEffect(() => {
		const DEFAULT_PK = 20
		const pk = params.pk ?? DEFAULT_PK
		const URL = 'http://192.168.100.8:8080/api/v1/profile/' + pk

		axios.get(URL)
			.then(response => dispatch(setUserProfile(response.data)))
			.catch(error => console.log(`FAIL ${error}`))
	}, [])

	if (!profile) return <Preloader/>
	return (
		<div className='profile'>
			<PageTitle title='Profile'/>
			<Image/>
			<div className="profile__body">
				<ProfileCard profile={ profile }/>
				<Posts/>
				<SideBar friends={ profile.friends }/>
			</div>
		</div>
	)
}

export default Profile;