import { h } from 'preact';
import Header from './header';
import me from "../assets/me.json"
// Code-splitting is automated for `routes` directory
import Profile from './profil';

const App = () => (
	<div id="app">
		<Header />
		<Profile user={me} />
	</div>
)

export default App;
