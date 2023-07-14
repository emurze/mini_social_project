import './Header.css';
import react_logo from '../../images/react_logo.png'

const Header = () => {
	return (
		<header className='header'>
			<div className="react_logo">
				<img src={ react_logo } alt=""/>
			</div>
		</header>
	)
}

export default Header;