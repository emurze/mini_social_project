import './SideBar.css';
import FriendCard from "./FriendCard/FriendCard";
import {useSelector} from "react-redux";

const SideBar = (props) => {
	let DEFAULT_FRIENDS = useSelector(state => state.profilePage.friends_cards)

	let friends = props.friends ?? DEFAULT_FRIENDS
	let friends_cards_elements = friends.map(
		username => <FriendCard username={ username } />
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