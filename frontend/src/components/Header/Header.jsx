import './Header.css';
import react_logo from '../../images/react_logo.png'
import LoginLink from "./LoginLInk/LoginLink";
import {useSelector} from "react-redux";

const Header = () => {
	let auth_token = useSelector(state => state.auth.auth_token)

	return (
		<header className='header'>
			<div className="react_logo">
				<img src={ react_logo } alt=""/>
			</div>
			{ !auth_token && <LoginLink/> }
		</header>
	)
}

export default Header;