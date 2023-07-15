import './Users.css';
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import ItemUser from "./ItemUser/ItemUser";
import {useDispatch, useSelector} from "react-redux";
import {
	HideLoadedUsers,
	SetPageCount, SetUsers, ToggleIsFetching,
} from "../../../../redux/ActionCreators";
import React, {useEffect} from 'react';
import Preloader from "../../../../shared/Preloader/Preloader";
import Pagination from "./Pagination/Pagination";
import {setUsers} from "../../../../redux/api";


const Users = () => {
	let dispatch = useDispatch()
	let { users, isFetching } = useSelector(state => state.usersPage)
	let { auth_token } = useSelector(state => state.auth)

	const ajaxGET = (query_strings) => {
		dispatch(HideLoadedUsers())
    	dispatch(ToggleIsFetching(true))

		setUsers(query_strings, auth_token)
			.then(response => {
				dispatch(ToggleIsFetching(false))
				dispatch(SetUsers(response.data.results))
				dispatch(SetPageCount(response.data.count))
				return response
			})
	}
	useEffect(() => {
		ajaxGET('?page=1')
	}, [])

	const user_items = users.map(
		user => <ItemUser key={ user.id } id={ user.id }
						  name={ user.username }
						  description={ user.description }
						  country={ user.country }
						  city={ user.city }/>)

	return <div className='users'>
			<PageTitle title='Users'/>
			<div className="users__body">
				{ isFetching && <Preloader/>}
				{ user_items }
			</div>
			<Pagination ajaxGET={ ajaxGET }/>
		</div>
}

export default Users;