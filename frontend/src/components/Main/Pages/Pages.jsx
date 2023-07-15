import './Pages.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Users from "./Users/Users";
import Login from "./Login/Login";
import {useSelector} from "react-redux";

const Pages = () => {
	let { isAuth } = useSelector(state => state.auth)
	return (
		<div className='pages'>
			<Routes>
				{ isAuth &&
					<>
						<Route path="/profile/" element={<Profile/>}/>
						<Route path="/profile/:pk?" element={<Profile/>}/>
						<Route path="/dialogs/*" element={<Dialogs/>}/>
						<Route path="/users/" element={<Users/>}/>
					</>
				}
				{ !isAuth && <Route path='/login/' element={<Login/>}/> }
			</Routes>
		</div>
	)
}

export default Pages;