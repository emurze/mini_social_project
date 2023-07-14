import './Pages.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Users from "./Users/Users";

const Pages = () => {
	return (
		<div className='pages'>
			<Routes>
				<Route path="/profile/*" element={<Profile/>}/>
				<Route path="/dialogs/*" element={<Dialogs/>}/>
				<Route path="/users/*" element={<Users/>}/>
			</Routes>
		</div>
	)
}

export default Pages;