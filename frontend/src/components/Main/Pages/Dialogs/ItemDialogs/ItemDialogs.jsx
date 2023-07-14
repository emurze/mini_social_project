import './ItemDialogs.css';
import {NavLink} from "react-router-dom";

const ItemDialogs = (props) => {
	let path = `/dialogs/${ props.id || 1 }`
	return (
		<li><article>
			<NavLink className="item_dialogs" to={path}>
				<div className="item_dialogs__content">
					{props.name || 'Anonym'}
				</div>
			</NavLink>
		</article></li>
	)
}

export default ItemDialogs;