import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import "./chat.css";

const ChatButton = ({lightMode}) => {
	const [open, setOpen] = useState(false);

	const toggleChat = () => {
		setOpen(!open);
	};

	return (
		<div
			className={`chat-button ${open ? "open" : "closed"} ${
				lightMode ? "light-mode" : ""
			}`}>
			<button onClick={toggleChat}>
				<FontAwesomeIcon
					className='chat-icon'
					icon={open ? faTimesCircle : faMessage}
				/>
			</button>
		</div>
	);
};

export default ChatButton;
