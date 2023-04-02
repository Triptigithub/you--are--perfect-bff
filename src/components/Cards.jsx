import React, { useState } from "react";
import Anxiety from "../assets/Anxiety.png";
import "./Cards.css";

const Card = ({ heading, text, src }) => {
	const [showPopup, setShowPopup] = useState(false);

	// const csData = [
	// 	{
	// 		src: Anxiety,
	// 	},
	// 	{
	// 		heading: "Sad/Anger",
	// 		text: "",
	// 	},
	// 	{
	// 		heading: "Sad/Confidence",
	// 		text: "",
	// 	},
	// 	{
	// 		heading: "Sleep/Issue",
	// 		text: "",
	// 	},
	// 	{
	// 		heading: "Stress",
	// 		text: "",
	// 	},
	// ];

	const handleCardClick = () => {
		setShowPopup(true);
	};

	const handlePopupClose = () => {
		setShowPopup(false);
	};

	return (
		<>
			<div className="card" onClick={handleCardClick}>
				<h2 className="card-head">{heading}</h2>
				<p>{text}</p>
			</div>
			{showPopup && (
				<div className="popup">
					<div className="popup-content">
						{/* <h2>{heading}</h2> */}
						<p>{text}</p>
						<img src={src} alt="lol" className="card-img" />
						<button onClick={handlePopupClose} className="card-btn">
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Card;
