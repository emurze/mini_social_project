import './ItemMenu.css';
import {NavLink} from "react-router-dom";

const ItemMenu = (props) => {
	return (
		<div className='item_menu'>
			<NavLink to={ props.to } className='item_menu__link'>
				{ props.link_title }
			</NavLink>
		</div>
	)
}

export default ItemMenu;