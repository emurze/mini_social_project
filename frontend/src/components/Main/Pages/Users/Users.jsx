import './Users.css';
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import ItemUser from "./ItemUser/ItemUser";
import {connect, useDispatch, useSelector} from "react-redux";
import {
	SetCurrentPage,
	SetPageCount,
	SetPageSize,
	SetUsers, UpdateCurrentPageOnArrows
} from "../../../../redux/ActionCreators";
import axios from "axios";
import React from 'react';
import LeftArrow from "../../../../shared/LeftArrow/LeftArrow";
import RightArrow from "../../../../shared/RightArrow/RightArrow";
import {UsersPaginationActions} from "../../../../redux/UsersPaginationActions";


class Users extends React.Component {
	render() {
		let props = this.props
		const user_items = props.users.map(
			user => <ItemUser key={ user.id }
							  id={ user.id }
							  name={ user.username }
							  description={ user.description }
							  country={ user.country }
							  city={ user.city }/>)

		const pages = props.page_count / props.page_size
		const page_numbers = pages ? [...Array(pages+1).keys()].splice(1) : []
		const previous = () => this.updateCurrentPageOnArrows(
			props.current_page, UsersPaginationActions.Previous
		)
		const next = () => this.updateCurrentPageOnArrows(
			props.current_page, UsersPaginationActions.Next
		)
		return <div className='users'>
				<PageTitle title='Users'/>
				<div className="users__body">{ user_items }</div>
				<div className="pagination">
					<div className="pagination__container">
						<span className='pagination__left_arrow'
							  onClick={ previous }>
							<LeftArrow/>
						</span>
						{ page_numbers.map(page_number => {
							const classname = `pagination__item${
								props.current_page === page_number ? " selected" : ""
							}`
							return (
								<span className={ classname }
									  onClick={
									  () => this.updateCurrentPage(page_number)
									  }>
									  { page_number }
								</span>)
						}) }
						<span className='pagination__right_arrow'
							  onClick={ next }>
							<RightArrow/>
						</span>
					</div>
				</div>
			</div>
	}
	updateCurrentPageOnArrows(current_page, pagination_action) {
		const URL = `http://192.168.100.8:8080/api/v1/profile?page=
					 ${current_page}`
		axios.get(URL)
			.then(response => {
				this.props.update_current_page_on_arrows(pagination_action)
				return this.setBase(response, this.props)
			})
			.catch(error => console.log(`FAIL ${error}`))
	}
	updateCurrentPage(current_page) {
		const URL = `http://192.168.100.8:8080/api/v1/profile?page=
					 ${current_page}`
		axios.get(URL)
			.then(response => {
				this.props.set_current_page(current_page)
				return this.setBase(response, this.props)
			})
			.catch(error => console.log(`FAIL ${error}`))
	}
	setBase(response, props) {
		props.set_users(response)
		props.set_page_size(response.data.results.length)
		props.set_page_count(response.data.count)
		return response
	}
	componentDidMount() {
		const BASE_URL = 'http://192.168.100.8:8080/api/v1/profile?page=1'
		axios.get(BASE_URL)
			.then(response => this.setBase(response, this.props))
			.catch(error => console.log(`FAIL ${error}`))
	}
}

const mapStateToProps = (state) => ({
	'users': state.usersPage.users,
	'page_size': state.usersPage.page_size,
	'page_count': state.usersPage.page_count,
	'current_page': state.usersPage.current_page
})
const mapDispatchToProps = (dispatch) => ({
	set_users: response => dispatch(SetUsers(response.data.results)),
	set_page_size: page_size => dispatch(SetPageSize(page_size)),
	set_page_count: page_count => dispatch(SetPageCount(page_count)),
	set_current_page: current_page => dispatch(SetCurrentPage(current_page)),
	update_current_page_on_arrows: pagination_action => {
		dispatch(UpdateCurrentPageOnArrows(pagination_action))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)

// const Users = () => {
// 	let { users } = useSelector(state => state.usersPage)
// 	let dispatch = useDispatch()
//
// 	const setUsers = () => {
// 		axios.get(`http://192.168.100.8:8080/api/v1/profile`)
// 			.then(
// 				response => {
// 					dispatch(
// 						SetUsers(response.data.results)
// 					)
// 				}
// 			)
// 			.catch(err => console.log(`FAIL ${err}`))
// 	}
//
// 	setUsers()
//
// 	let user_items = users.map(
// 		user => <ItemUser key={ user.id }
// 						  id={ user.id }
// 						  name={ user.username }
// 						  description={ user.description }
// 						  country={ user.country }
// 						  city={ user.city }/>)
// 	return (
// 		<div className='users'>
// 			<RightArrow title='Users'/>
// 			<div className="users__body">{ user_items }</div>
// 			<ShowMoreButton setUsers={ setUsers }/>
// 		</div>
// 	)
// }
// export default Users;
