import './CreatePostForm.css';
import {AddPost, UpdateNewPost} from "../../../../../../redux/ActionCreators";
import {useDispatch, useSelector} from "react-redux";
import React from 'react';


const CreatePostForm = () => {
	let post_title_ref = React.createRef()
	let post_content_ref = React.createRef()
	
	let dispatch = useDispatch()
	let profilePage = useSelector(state => state.profilePage)
	
	let add_post = () => {
		let action = AddPost()
		dispatch(action)
	}
	
	let update_post = () => {
		let post_title = post_title_ref.current.value
		let post_content = post_content_ref.current.value
		let action = UpdateNewPost(post_title, post_content)
		dispatch(action)
	}
	
	return (
		<div className="create_post">
			<p><input onChange={ update_post } type='text'
					  ref={ post_title_ref }
					  value={ profilePage.new_post_title }
			/></p>
			
			<p><textarea onChange={ update_post }
						  ref={ post_content_ref }
				          value={ profilePage.new_post_content }>
			</textarea></p>
			
			<p><button onClick={ add_post }>Create post</button></p>
		</div>
	)
}

export default CreatePostForm;