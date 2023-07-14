import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	)
}

export default App;