import './Dialogs.css';
import ItemDialogs from "./ItemDialogs/ItemDialogs";
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
	let dialogsPage = useSelector(state => state.dialogsPage)
	
	let dialogs_items = dialogsPage.dialogs.map(
		entry => <ItemDialogs key={ entry.id } id={ entry.id }
							  name={ entry.name }/>)
	
	let routers_with_dialogs = dialogsPage.messages_sets.map(
		message_set => (
			<Route path={`/${message_set.id}`} element={
				<Dialog key={ message_set.id } message_set={ message_set }/>
			}/>
		)
	)
	return (
		<div className='dialogs'>
			<PageTitle title='Dialogs'/>
			<div className="dialogs__body">
				<ul className='dialogs__list'>{ dialogs_items }</ul>
				<div className="dialogs__current">
					<Routes>{ routers_with_dialogs }</Routes>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;