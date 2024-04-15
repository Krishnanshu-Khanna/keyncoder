import {useState} from "react";
import Landing from "./pages/Landing.jsx";
import Chat from "./components/chat/Chat";
import './App.css'

function App() {
	const [lightMode, setLightMode] = useState(true);

	const toggleMode = () => {
		setLightMode((prevMode) => !prevMode);
	};

	return (
		<div>
			<Chat/>
			<section className={lightMode ? "light-mode" : "dark-mode"}>
				<Landing lightMode={lightMode} toggleMode={toggleMode} />
			</section>
		</div>
	);
}

export default App;
