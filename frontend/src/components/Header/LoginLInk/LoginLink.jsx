import './LoginLink.css';
import {NavLink} from "react-router-dom";

const LoginLink = () => {
	return <div className="login_link">
		       <NavLink to='/login'>
				   Login
			   </NavLink>
	       </div>
}

export default LoginLink;