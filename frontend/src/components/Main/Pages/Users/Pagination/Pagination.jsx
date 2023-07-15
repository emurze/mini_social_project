import LeftArrow from "../../../../../shared/LeftArrow/LeftArrow";
import RightArrow from "../../../../../shared/RightArrow/RightArrow";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
	SetCurrentPage, UpdateCurrentPageOnArrows
} from "../../../../../redux/ActionCreators";
import './Pagination.css';
import {
	UsersPaginationAction
} from "../../../../../redux/actions/UsersPaginationAction";

const Pagination = (props) => {
    let dispatch = useDispatch()
	let {page_size, page_count, current_page} = useSelector(
		state => state.usersPage
	)

    const pages = Math.round(page_count / page_size)
	const page_numbers = pages ? [...Array(pages+1).keys()].splice(1) : []

	const previous = () => updateCurrentPageOnArrows(
		UsersPaginationAction.Previous
	)
	const next = () => updateCurrentPageOnArrows(UsersPaginationAction.Next)

    const updateCurrentPageOnArrows = pagination_action => {
		const query_strings = `?page=${current_page}`
		props.ajaxGET(query_strings)
		dispatch(UpdateCurrentPageOnArrows(pagination_action))
	}
	const updateCurrentPage = current_page => {
		const query_strings = `?page=${current_page}`
		props.ajaxGET(query_strings)
		dispatch(SetCurrentPage(current_page))
	}

    return <div className="pagination">
            <div className="pagination__container">
                <span className='pagination__left_arrow' onClick={ previous }>
                    <LeftArrow/>
                </span>
                { page_numbers.map(page_number => {
                    const isSelected = (current_page === page_number)
										? " selected" : ""
                    return <span className={ 'pagination__item' + isSelected }
                              onClick={ () => updateCurrentPage(page_number) }>
                              { page_number }
                        </span>
                }) }
                <span className='pagination__right_arrow' onClick={ next }>
                    <RightArrow/>
                </span>
            </div>
        </div>
}

export default Pagination;