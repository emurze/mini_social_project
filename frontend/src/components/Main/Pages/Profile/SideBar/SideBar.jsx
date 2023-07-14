import './SideBar.css';
import FriendCard from "./FriendCard/FriendCard";
import {useSelector} from "react-redux";

const SideBar = () => {
	let profilePage = useSelector(state => state.profilePage)
	
	let friends_cards_elements = profilePage.friends_cards.map(
		elem => <FriendCard key={ elem.id } name={ elem.name } />
	)
	return (
		<aside className='sidebar'>
			<div className="sidebar__title">Friends</div>
			<div className="sidebar__body">
				{ friends_cards_elements }
			</div>
		</aside>
	)
}

export default SideBar;