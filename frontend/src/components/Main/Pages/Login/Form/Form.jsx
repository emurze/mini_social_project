import './Form.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {
	Login,
	SetPassword,
	SetUsername
} from "../../../../../redux/ActionCreators";
import Action from "../../../../../redux/actions/Actions";


const Form = () => {
	let dispatch = useDispatch()
	let { username, password } = useSelector(state => state.loginPage)

	const authenticate = () => {
		axios.post('http://192.168.100.8:8080/api/v1/auth/token/login/', {
			username, password
		})
			.then(response => dispatch(Login(response.data.auth_token)))
			.catch(error => console.log(`FAIL ${error}`))
	}

	const update = (e, action) => {
		const value = e.target.value
		switch (action) {
			case Action.SET_USERNAME:
				return dispatch(SetUsername(value))
			case Action.SET_PASSWORD:
				return dispatch(SetPassword(value))
		}
	}

	return <div className="form_login">
			<input type='text' className='form_login__username'
				   onChange={ e => update(e, Action.SET_USERNAME) }/>

			<input type='password' className='form_login__password'
				   onChange={ e => update(e, Action.SET_PASSWORD) }/>

			<button onClick={ authenticate }
					className='form_login__button'>Login</button>
		</div>
}

export default Form;