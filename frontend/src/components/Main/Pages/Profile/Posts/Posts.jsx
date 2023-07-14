import './Posts.css';
import Post from "./Post/Post";
import CreatePostForm from "./CreatePostForm/CreatePostForm";
import {useSelector} from "react-redux";

const Posts = () => {
	let profilePage = useSelector(state => state.profilePage)
	
	let latest_post_data = [].concat(profilePage.posts).reverse()
	
	let posts_elements = latest_post_data.map(
		entry => <Post title={ entry.title } key={ entry.id }
					   content={ entry.content }/>
	)
	
	return (
		<section className='posts'>
			<div className="posts__title">My posts</div>
			<div className='posts__create_button'>
				<CreatePostForm/>
			</div>
			<div className="posts__items">
				{ posts_elements }
			</div>
		</section>
	)
}

export default Posts;