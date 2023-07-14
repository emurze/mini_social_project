import './Menu.css';
import ItemMenu from "./ItemMenu/ItemMenu";

const Menu = () => {
	return (
		<nav className='menu'>
			<div className='menu__list'>
				<ItemMenu to='/profile' link_title='Profile'/>
				<ItemMenu to='/dialogs' link_title='Dialog'/>
				<ItemMenu to='/users' link_title='Users'/>
			</div>
		</nav>
	)
}

export default Menu;