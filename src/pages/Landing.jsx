import React from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import "./landing.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
const Landing = ({lightMode, toggleMode}) => {
	return (
		<div>
			<Navbar lightMode={lightMode} toggleMode={toggleMode} />
			<section className='hero'>
				<div className='lorem'>
					Lorem Ispum <br />
					<span>lorem ispum</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam cum
					atque dolore, at tenetur aspernatur? Nostrum, voluptatibus harum placeat
					tempore distinctio a, autem sint animi ipsam dolore laboriosam nobis!
				</p>
				<button className='orange-button '>lorem ispum</button>{" "}
				<button className='orange-button org	'>
					<FontAwesomeIcon icon={faCartShopping} />
					Add to Cart
				</button>
			</section>
		</div>
	);
};

export default Landing;
