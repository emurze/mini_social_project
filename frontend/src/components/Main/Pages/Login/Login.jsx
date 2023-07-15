import './Login.css';
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import React from "react";
import Form from "./Form/Form";


const Login = () => {
	return (
		<div className='login'>
			<PageTitle title='Form'/>
			<Form/>
		</div>
	)
}

export default Login;