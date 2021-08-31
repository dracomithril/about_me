import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import Header from './header';
import me from "../assets/me.json"
// Code-splitting is automated for `routes` directory
import Profile from './profil';

const App = () => {
	useEffect(() => {
		const basicTitle = document.title;
		document.title = `${me.name} ${me.surname} CV`
		return () => {
			document.title = basicTitle;
		}
	}, [])
	return (
		<div id="app">
			<Header />
			<Profile user={me} />
		</div>
	);
}

export default App;
