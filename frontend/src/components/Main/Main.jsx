import './Main.css';
import Pages from "./Pages/Pages";
import Menu from "./Menu/Menu";

const Main = () => {
	return (
		<main className='main'>
			<Menu/>
			<Pages/>
		</main>
	)
}

export default Main;