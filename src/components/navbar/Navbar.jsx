import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-regular-svg-icons";
import "./navbar.css";

const Navbar = ({lightMode, toggleMode}) => {
	return (
		<nav>
			<span>
				<h1>keyNcoder</h1>
			</span>
			<span>
				<ul>
					<li>
						<a href=''>About us</a>
					</li>
					<li>
						<a href=''>Batches</a>
					</li>
					<li>
						<a href='' className='active'>Contact Us</a>
					</li>
					<li>
						<button onClick={toggleMode} className='lightButton'>
							{lightMode ? (
								<FontAwesomeIcon icon={faMoon} />
							) : (
								<FontAwesomeIcon icon={faSun} className='sun' />
							)}
						</button>
					</li>
					<li>
						<button className='signin'>SignIn</button>
					</li>
				</ul>
			</span>
		</nav>
	);
};

export default Navbar;
